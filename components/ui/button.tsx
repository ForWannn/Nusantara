import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "inverse"
  | "inverse-outline";

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-300 ease-soft disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-canvas hover:bg-brown active:translate-y-px",
  outline:
    "border border-line-strong bg-transparent text-ink hover:border-clay hover:bg-sand/40 active:translate-y-px",
  ghost: "text-brown hover:bg-sand/45 hover:text-ink",
  inverse: "bg-canvas text-ink hover:bg-sand active:translate-y-px",
  "inverse-outline":
    "border border-canvas/25 bg-transparent text-canvas hover:border-canvas/60 hover:bg-canvas/10 active:translate-y-px",
};

export function buttonStyles(variant: ButtonVariant = "primary") {
  return cn(base, variants[variant]);
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonStyles(variant), className)}
      {...rest}
    >
      <span>{children}</span>
      {icon}
    </Link>
  );
}
