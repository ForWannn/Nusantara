import Image from "next/image";
import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/Nusantara.png"
      alt="Nusantara logo"
      width={36}
      height={36}
      className={cn("object-contain", className)}
      priority
    />
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
