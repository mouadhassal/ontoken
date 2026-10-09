// Client for Flowstep's hosted MCP server (https://api.flowstep.ai/mcp), with the
// OAuth 2.1 PKCE login the server requires. Tokens live in .secrets/ (git-ignored).
// Every tool call is appended to a JSONL log so the study can be audited.
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { UnauthorizedError, type OAuthClientProvider } from "@modelcontextprotocol/sdk/client/auth.js";
import type { OAuthClientInformationMixed, OAuthClientMetadata, OAuthTokens } from "@modelcontextprotocol/sdk/shared/auth.js";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export const MCP_URL = "https://api.flowstep.ai/mcp";
const PORT = 8765;
const REDIRECT = `http://127.0.0.1:${PORT}/callback`;

class FileOAuthProvider implements OAuthClientProvider {
  private data: { client?: OAuthClientInformationMixed; tokens?: OAuthTokens; verifier?: string };
  constructor(private path: string) {
    this.data = existsSync(path) ? JSON.parse(readFileSync(path, "utf8")) : {};
  }
  private save() {
    mkdirSync(dirname(this.path), { recursive: true });
    writeFileSync(this.path, JSON.stringify(this.data, null, 2));
  }
  get redirectUrl() {
    return REDIRECT;
  }
  get clientMetadata(): OAuthClientMetadata {
    return {
      client_name: "ontoken (design-guideline study)",
      redirect_uris: [REDIRECT],
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      token_endpoint_auth_method: "none",
      scope: "openid offline_access",
    };
  }
  clientInformation() {
    return this.data.client;
  }
  saveClientInformation(c: OAuthClientInformationMixed) {
    this.data.client = c;
    this.save();
  }
  tokens() {
    return this.data.tokens;
  }
  saveTokens(t: OAuthTokens) {
    this.data.tokens = t;
    this.save();
  }
  redirectToAuthorization(url: URL) {
    console.log(`\nApprove access in your browser (check the redirect host is 127.0.0.1):\n${url}\n`);
    // not `cmd /c start`: cmd splits the URL at every '&'
    const opener = process.platform === "win32" ? ["rundll32", ["url.dll,FileProtocolHandler", url.toString()]] : ["xdg-open", [url.toString()]];
    spawn(opener[0] as string, opener[1] as string[], { stdio: "ignore", detached: true }).unref();
  }
  saveCodeVerifier(v: string) {
    this.data.verifier = v;
    this.save();
  }
  codeVerifier() {
    if (!this.data.verifier) throw new Error("no PKCE verifier saved");
    return this.data.verifier;
  }
  invalidateCredentials(scope: "all" | "client" | "tokens" | "verifier" | "discovery") {
    if (scope === "all" || scope === "tokens") delete this.data.tokens;
    if (scope === "all" || scope === "client") delete this.data.client;
    if (scope === "all" || scope === "verifier") delete this.data.verifier;
    this.save();
  }
}

function waitForCode(): Promise<string> {
  return new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const u = new URL(req.url ?? "/", REDIRECT);
      if (u.pathname !== "/callback") return void res.writeHead(404).end();
      const code = u.searchParams.get("code");
      const err = u.searchParams.get("error");
      res.writeHead(200, { "content-type": "text/html" }).end(code ? "<h3>ontoken is connected to Flowstep. You can close this tab.</h3>" : `<h3>Login failed: ${err}</h3>`);
      server.close();
      code ? resolve(code) : reject(new Error(`OAuth error: ${err}`));
    });
    server.listen(PORT, "127.0.0.1");
    setTimeout(() => (server.close(), reject(new Error("OAuth timed out after 10 minutes"))), 600_000).unref();
  });
}

export type ToolResult = { text?: string; json?: any; image?: Buffer; isError: boolean };

export class Flowstep {
  private client: Client | null = null;
  private provider: FileOAuthProvider;
  constructor(private o: { secrets?: string; log?: string } = {}) {
    this.provider = new FileOAuthProvider(o.secrets ?? ".secrets/flowstep-oauth.json");
  }

  async connect() {
    const make = () => new StreamableHTTPClientTransport(new URL(MCP_URL), { authProvider: this.provider });
    let transport = make();
    this.client = new Client({ name: "ontoken", version: "0.1.0" });
    try {
      await this.client.connect(transport);
    } catch (e) {
      if (!(e instanceof UnauthorizedError)) throw e;
      const code = await waitForCode();
      await transport.finishAuth(code);
      transport = make();
      this.client = new Client({ name: "ontoken", version: "0.1.0" });
      await this.client.connect(transport);
    }
  }

  async close() {
    await this.client?.close();
  }

  async listTools() {
    return (await this.client!.listTools()).tools;
  }

  async call(name: string, args: Record<string, unknown> = {}, timeoutMs = 240_000): Promise<ToolResult> {
    const t0 = Date.now();
    const res: any = await this.client!.callTool({ name, arguments: args }, undefined, { timeout: timeoutMs });
    const out: ToolResult = { isError: !!res.isError };
    for (const c of res.content ?? []) {
      if (c.type === "text") {
        out.text = (out.text ?? "") + c.text;
      } else if (c.type === "image") out.image = Buffer.from(c.data, "base64");
    }
    if (out.text) {
      try {
        out.json = JSON.parse(out.text);
      } catch {}
    }
    if (this.o.log) {
      mkdirSync(dirname(this.o.log), { recursive: true });
      const logged = { ...args } as Record<string, unknown>;
      if (typeof logged.designGuidelines === "string") logged.designGuidelines = `<${(logged.designGuidelines as string).length} chars>`;
      if (typeof logged.jsxContent === "string") logged.jsxContent = `<${(logged.jsxContent as string).length} chars>`;
      appendFileSync(
        this.o.log,
        JSON.stringify({
          at: new Date(t0).toISOString(),
          ms: Date.now() - t0,
          tool: name,
          args: logged,
          isError: out.isError,
          text: out.text && out.text.length > 2000 ? `<${out.text.length} chars>` : out.text,
          image: out.image ? out.image.length : undefined,
        }) + "\n",
      );
    }
    return out;
  }

  /** Throws with the server's message when a tool reports isError. */
  async must(name: string, args: Record<string, unknown> = {}): Promise<ToolResult> {
    const r = await this.call(name, args);
    if (r.isError) throw new Error(`${name} failed: ${r.text}`);
    return r;
  }
}
