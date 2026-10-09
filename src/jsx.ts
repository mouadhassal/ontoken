// Flowstep screens are JSX strings with a metadata comment on the first line:
//   <!-- screenType: "iphone-x-vertical" width: "375" height: "812" name: "..." colorTheme: "blue" -->
//   <div className="...">...</div>;
// This module parses them, gives every element a stable id, and splices class edits
// back into the original text so a repaired screen differs only where it was changed.
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";

// CJS interop: the callable is on .default under Node ESM
const traverse: typeof _traverse.default = (_traverse as any).default ?? _traverse;
const generate: typeof _generate.default = (_generate as any).default ?? _generate;

export type ClassAttr =
  | { kind: "literal"; value: string; start: number; end: number } // span of the quoted string
  | { kind: "none"; insertAt: number } // no className: insert after the element name
  | { kind: "dynamic" }; // expression we will not rewrite

export type JsxNode = {
  id: string;
  name: string; // "div", "Button", "ArrowLeft", ...
  parent: string | null;
  cls: ClassAttr;
};

export type Screen = {
  meta: Record<string, string>;
  header: string; // first-line comment, verbatim (may be "")
  body: string; // JSX text after the header
  ast: t.File;
  nodes: Map<string, JsxNode>;
  order: string[];
};

export function parseMeta(header: string): Record<string, string> {
  const meta: Record<string, string> = {};
  for (const m of header.matchAll(/(\w+):\s*"([^"]*)"/g)) meta[m[1]] = m[2];
  return meta;
}

function elementName(n: t.JSXOpeningElement["name"]): string {
  if (t.isJSXIdentifier(n)) return n.name;
  if (t.isJSXMemberExpression(n)) return `${elementName(n.object as any)}.${n.property.name}`;
  return `${n.namespace.name}:${n.name.name}`;
}

export function parseScreen(src: string): Screen {
  const text = src.replace(/^﻿/, "");
  const hm = text.match(/^\s*(<!--[\s\S]*?-->)\r?\n?/);
  const header = hm ? hm[1] : "";
  const body = hm ? text.slice(hm[0].length) : text;
  const ast = parse(body, { sourceType: "module", plugins: ["jsx"], errorRecovery: false });
  const nodes = new Map<string, JsxNode>();
  const order: string[] = [];
  const stack: string[] = [];
  traverse(ast, {
    JSXElement: {
      enter(path) {
        const open = path.node.openingElement;
        const id = `n${order.length}`;
        const attr = open.attributes.find(
          (a): a is t.JSXAttribute => t.isJSXAttribute(a) && t.isJSXIdentifier(a.name) && a.name.name === "className",
        );
        let cls: ClassAttr;
        if (!attr) cls = { kind: "none", insertAt: open.name.end! };
        else if (t.isStringLiteral(attr.value))
          cls = { kind: "literal", value: attr.value.value, start: attr.value.start!, end: attr.value.end! };
        else if (
          t.isJSXExpressionContainer(attr.value) &&
          t.isTemplateLiteral(attr.value.expression) &&
          attr.value.expression.expressions.length === 0
        )
          cls = {
            kind: "literal",
            value: attr.value.expression.quasis[0].value.cooked ?? "",
            start: attr.value.start!,
            end: attr.value.end!,
          };
        else if (t.isJSXExpressionContainer(attr.value) && t.isStringLiteral(attr.value.expression))
          cls = { kind: "literal", value: attr.value.expression.value, start: attr.value.start!, end: attr.value.end! };
        else cls = { kind: "dynamic" };
        nodes.set(id, { id, name: elementName(open.name), parent: stack.at(-1) ?? null, cls });
        order.push(id);
        stack.push(id);
        (path.node as any)._otId = id;
      },
      exit() {
        stack.pop();
      },
    },
  });
  return { meta: parseMeta(header), header, body, ast, nodes, order };
}

/** JSX source with a data-ot="<id>" attribute on every element, for rendering. */
export function instrumentedJsx(s: Screen): string {
  const ast = t.cloneNode(s.ast, true);
  let i = 0;
  traverse(ast, {
    JSXElement(path) {
      const id = `n${i++}`;
      path.node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier("data-ot"), t.stringLiteral(id)));
    },
  });
  return generate(ast, { retainLines: false, jsescOption: { minimal: true } }).code;
}

/** Replace class strings by element id; untouched text stays byte-identical. */
export function applyClassEdits(s: Screen, edits: Map<string, string>): string {
  const splices: { start: number; end: number; text: string }[] = [];
  for (const [id, value] of edits) {
    const n = s.nodes.get(id);
    if (!n) throw new Error(`unknown node ${id}`);
    const q = JSON.stringify(value);
    if (n.cls.kind === "literal") splices.push({ start: n.cls.start, end: n.cls.end, text: q });
    else if (n.cls.kind === "none") splices.push({ start: n.cls.insertAt, end: n.cls.insertAt, text: ` className=${q}` });
    else throw new Error(`node ${id} has a dynamic className`);
  }
  splices.sort((a, b) => b.start - a.start);
  let body = s.body;
  for (const sp of splices) body = body.slice(0, sp.start) + sp.text + body.slice(sp.end);
  return s.header ? `${s.header}\n${body}` : body;
}

export function classList(n: JsxNode): string[] {
  return n.cls.kind === "literal" ? n.cls.value.split(/\s+/).filter(Boolean) : [];
}
