// Stand-ins for the component library Flowstep screens reference (shadcn/ui, new-york v4
// class strings) and for lucide icons. Every component forwards `data-ot` and `className`
// to its outermost DOM element, merged with tailwind-merge exactly as shadcn's cn() does,
// so an override class added by the repair pass wins the same way it would in Flowstep.
import * as React from "react";
import { icons } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...xs: ClassValue[]) => twMerge(clsx(xs));
type P = Record<string, any> & { className?: string; children?: React.ReactNode };
const h = React.createElement;

function make(tag: string, base: string | ((p: P) => string), drop: string[] = []) {
  const C = ({ className, children, ...rest }: P) => {
    const own = typeof base === "function" ? base(rest) : base;
    for (const k of drop) delete rest[k];
    return h(tag, { ...rest, className: cn(own, className) }, children);
  };
  return C;
}

const BTN_V: Record<string, string> = {
  default: "bg-primary text-primary-foreground shadow-xs",
  destructive: "bg-destructive text-white shadow-xs",
  outline: "border bg-background shadow-xs",
  secondary: "bg-secondary text-secondary-foreground shadow-xs",
  ghost: "",
  link: "text-primary underline-offset-4",
};
const BTN_S: Record<string, string> = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
};
const BADGE_V: Record<string, string> = {
  default: "border-transparent bg-primary text-primary-foreground",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  destructive: "border-transparent bg-destructive text-white",
  outline: "text-foreground",
};

const Button = make(
  "button",
  (p) =>
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium shrink-0 " +
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none " +
    `${BTN_V[p.variant ?? "default"] ?? BTN_V.default} ${BTN_S[p.size ?? "default"] ?? BTN_S.default}`,
  ["variant", "size", "asChild"],
);
const Badge = make(
  "span",
  (p) =>
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 " +
    (BADGE_V[p.variant ?? "default"] ?? BADGE_V.default),
  ["variant", "asChild"],
);
const Input = ({ className, ...rest }: P) =>
  h("input", {
    ...rest,
    readOnly: true,
    className: cn(
      "placeholder:text-muted-foreground border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none md:text-sm",
      className,
    ),
  });
const Textarea = ({ className, children, ...rest }: P) =>
  h("textarea", {
    ...rest,
    readOnly: true,
    defaultValue: children ?? rest.defaultValue,
    className: cn(
      "border-input placeholder:text-muted-foreground flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs outline-none md:text-sm",
      className,
    ),
  });

const Switch = ({ className, checked, defaultChecked, ...rest }: P) => {
  const on = checked ?? defaultChecked ?? false;
  return h(
    "button",
    {
      ...rest,
      role: "switch",
      "aria-checked": on,
      className: cn(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none",
        on ? "bg-primary" : "bg-input",
        className,
      ),
    },
    h("span", {
      className: cn(
        "bg-background pointer-events-none block size-4 rounded-full ring-0",
        on ? "translate-x-[calc(100%-2px)]" : "translate-x-0",
      ),
    }),
  );
};
const Checkbox = ({ className, checked, defaultChecked, ...rest }: P) => {
  const on = checked ?? defaultChecked ?? false;
  return h(
    "button",
    {
      ...rest,
      role: "checkbox",
      className: cn(
        "peer border-input size-4 shrink-0 rounded-[4px] border shadow-xs outline-none flex items-center justify-center",
        on && "bg-primary text-primary-foreground border-primary",
        className,
      ),
    },
    on ? h(icons.Check, { className: "size-3.5" }) : null,
  );
};
const Progress = ({ className, value = 0, ...rest }: P) =>
  h(
    "div",
    { ...rest, className: cn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className) },
    h("div", { className: "bg-primary h-full w-full flex-1", style: { transform: `translateX(-${100 - Number(value)}%)` } }),
  );
const Separator = ({ className, orientation = "horizontal", decorative, ...rest }: P) =>
  h("div", {
    ...rest,
    className: cn("bg-border shrink-0", orientation === "vertical" ? "h-full w-px" : "h-px w-full", className),
  });

// Tabs: the active trigger is the one whose value matches Tabs' defaultValue/value.
const TabsCtx = React.createContext<string | undefined>(undefined);
const Tabs = ({ className, children, defaultValue, value, onValueChange, ...rest }: P) =>
  h(TabsCtx.Provider, { value: value ?? defaultValue }, h("div", { ...rest, className: cn("flex flex-col gap-2", className) }, children));
const TabsList = make("div", "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]");
const TabsTrigger = ({ className, children, value, ...rest }: P) => {
  const active = React.useContext(TabsCtx) === value;
  return h(
    "button",
    {
      ...rest,
      className: cn(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap",
        active ? "bg-background text-foreground shadow-sm" : "text-foreground",
        className,
      ),
    },
    children,
  );
};
const TabsContent = ({ className, children, value, ...rest }: P) =>
  React.useContext(TabsCtx) === value ? h("div", { ...rest, className: cn("flex-1 outline-none", className) }, children) : null;

const RadioGroup = make("div", "grid gap-3", ["defaultValue", "value", "onValueChange"]);
const RadioGroupItem = ({ className, value, checked, ...rest }: P) =>
  h(
    "button",
    {
      ...rest,
      role: "radio",
      className: cn("border-input text-primary aspect-square size-4 shrink-0 rounded-full border shadow-xs flex items-center justify-center", className),
    },
    checked ? h("span", { className: "bg-primary size-2 rounded-full" }) : null,
  );
const Slider = ({ className, defaultValue, value, max = 100, ...rest }: P) => {
  const v = Number((value ?? defaultValue ?? [50])[0]);
  const pct = (100 * v) / Number(max);
  return h(
    "div",
    { ...rest, className: cn("relative flex w-full touch-none items-center select-none h-4", className) },
    h("div", { className: "bg-muted relative grow overflow-hidden rounded-full h-1.5 w-full" }, h("div", { className: "bg-primary absolute h-full", style: { width: `${pct}%` } })),
    h("span", { className: "border-primary bg-background block size-4 shrink-0 rounded-full border shadow-sm absolute", style: { left: `calc(${pct}% - 8px)` } }),
  );
};

export const COMPONENTS: Record<string, React.ComponentType<any>> = {
  Button,
  Badge,
  Input,
  Textarea,
  Switch,
  Checkbox,
  Progress,
  Separator,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  RadioGroup,
  RadioGroupItem,
  Slider,
  Label: make("label", "flex items-center gap-2 text-sm leading-none font-medium select-none"),
  Card: make("div", "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"),
  CardHeader: make("div", "grid auto-rows-min items-start gap-1.5 px-6"),
  CardTitle: make("div", "leading-none font-semibold"),
  CardDescription: make("div", "text-muted-foreground text-sm"),
  CardAction: make("div", "col-start-2 row-span-2 row-start-1 self-start justify-self-end"),
  CardContent: make("div", "px-6"),
  CardFooter: make("div", "flex items-center px-6"),
  Avatar: make("span", "relative flex size-8 shrink-0 overflow-hidden rounded-full"),
  AvatarImage: ({ className, ...rest }: P) => h("img", { ...rest, className: cn("aspect-square size-full", className) }),
  AvatarFallback: make("span", "bg-muted flex size-full items-center justify-center rounded-full"),
  Alert: make("div", "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 bg-card text-card-foreground", ["variant"]),
  AlertTitle: make("div", "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight"),
  AlertDescription: make("div", "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm"),
  Skeleton: make("div", "bg-accent rounded-md"),
  Table: make("table", "w-full caption-bottom text-sm"),
  TableHeader: make("thead", "[&_tr]:border-b"),
  TableBody: make("tbody", "[&_tr:last-child]:border-0"),
  TableFooter: make("tfoot", "bg-muted/50 border-t font-medium"),
  TableRow: make("tr", "border-b"),
  TableHead: make("th", "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap"),
  TableCell: make("td", "p-2 align-middle whitespace-nowrap"),
  TableCaption: make("caption", "text-muted-foreground mt-4 text-sm"),
  ScrollArea: make("div", "relative overflow-hidden"),
  AspectRatio: make("div", "relative w-full", ["ratio"]),
  Toggle: make("button", "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-2 min-w-9", ["pressed", "variant", "size"]),
  // Select renders closed: trigger with its value, no popup.
  Select: ({ children }: P) => h(React.Fragment, null, children),
  SelectTrigger: make("button", "border-input flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs h-9"),
  SelectValue: ({ placeholder, children, ...rest }: P) => h("span", rest, children ?? placeholder),
  SelectContent: () => null,
  SelectItem: () => null,
};

export const unknownSeen = new Set<string>();

/** Resolve a capitalised JSX identifier: component, lucide icon, or a plain div fallback. */
export function resolve(name: string): React.ComponentType<any> {
  if (COMPONENTS[name]) return COMPONENTS[name];
  const iconName = name.endsWith("Icon") && !(name in icons) ? name.slice(0, -4) : name;
  const icon = (icons as Record<string, React.ComponentType<any>>)[iconName];
  if (icon) return icon;
  unknownSeen.add(name);
  return make("div", "");
}
