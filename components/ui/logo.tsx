import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 20.25V11.5a8 8 0 0 1 16 0v8.75"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8.75 20.25V11.5a3.25 3.25 0 0 1 6.5 0v8.75"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.6" r="1.05" className="fill-clay" />
    </svg>
  );
}

type LogoProps = {
  tone?: "ink" | "light";
  className?: string;
};

export function Logo({ tone = "ink", className }: LogoProps) {
  const isLight = tone === "light";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-full border",
          isLight
            ? "border-canvas/25 text-canvas"
            : "border-line-strong bg-surface/70 text-ink",
        )}
      >
        <LogoMark className="size-5" />
      </span>
      <span
        className={cn(
          "font-serif text-[1.375rem] leading-none tracking-[-0.015em]",
          isLight ? "text-canvas" : "text-ink",
        )}
      >
        Nusantara
      </span>
    </span>
  );
}
