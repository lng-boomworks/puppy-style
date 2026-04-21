import type React from "react";
import { Calendar, Phone, Mail, PawPrint as PawIcon } from "lucide-react";
import { withBase } from "../utils/url";

function AutoIcon({ href, children }: { href?: string; children: React.ReactNode }) {
  const hasIcon = Array.isArray(children)
    ? children.some((c) => typeof c === "object" && c !== null && "type" in c && typeof c.type !== "string")
    : typeof children === "object" && children !== null && "type" in children && typeof (children as any).type !== "string";

  if (hasIcon) return <>{children}</>;

  if (href?.includes("calendly.com")) return <><Calendar className="w-4 h-4" />{children}</>;
  if (href?.includes("wa.me")) return <><PawIcon className="w-4 h-4" />{children}</>;
  if (href?.startsWith("tel:")) return <><Phone className="w-4 h-4" />{children}</>;
  if (href === "/contact") return <><PawIcon className="w-4 h-4" />{children}</>;
  if (href?.startsWith("mailto:")) return <><Mail className="w-4 h-4" />{children}</>;

  return <>{children}</>;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline-white" | "white" | "slate";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const sizes: Record<string, string> = {
    sm: "px-5 py-2.5 text-[14px]",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-9 py-4 text-[17px]",
  };

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 will-change-transform";

  const variants: Record<string, string> = {
    primary:
      "bg-teal-deep text-white border-2 border-teal-mid hover:bg-teal-mid hover:-translate-y-0.5 shadow-tactile",
    slate:
      "bg-charcoal text-white border-2 border-charcoal hover:bg-[#000] hover:-translate-y-0.5 shadow-tactile",
    ghost:
      "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    "outline-white":
      "border-2 border-white text-white hover:bg-white/10",
    white:
      "bg-white text-teal-deep hover:bg-white/90 hover:-translate-y-0.5 shadow-md",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = <AutoIcon href={href}>{children}</AutoIcon>;

  if (href) {
    const isInternal =
      href.startsWith("/") && !href.startsWith("//") && !external;
    const resolvedHref = isInternal ? withBase(href) : href;
    if (external || href.startsWith("http")) {
      return (
        <a href={resolvedHref} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <a href={resolvedHref} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
