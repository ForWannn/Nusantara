"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useId, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { headerCopy } from "@/lib/site";

type SearchFieldProps = {
  variant?: "inline" | "block";
  className?: string;
};

export function SearchField({
  variant = "inline",
  className,
}: SearchFieldProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const inputId = useId();
  const isBlock = variant === "block";

  return (
    <form
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        const query = value.trim();

        if (!query) {
          inputRef.current?.focus();
          return;
        }

        router.push(`/jelajahi?q=${encodeURIComponent(query)}`);
      }}
      onClick={() => inputRef.current?.focus()}
      className={cn(
        "flex h-11 items-center overflow-hidden rounded-pill border border-line bg-surface/70 pl-3.5 transition-[width,border-color,background-color,box-shadow] duration-300 ease-soft focus-within:border-clay-strong focus-within:bg-surface focus-within:shadow-[0_0_0_3px_rgba(138,98,73,0.14)]",
        isBlock ? "w-full" : "w-11 xl:w-52",
        className,
      )}
    >
      <Search
        aria-hidden="true"
        className="size-4 shrink-0 text-brown"
        strokeWidth={1.6}
      />
      <label htmlFor={inputId} className="sr-only">
        {headerCopy.searchLabel}
      </label>
      <input
        ref={inputRef}
        id={inputId}
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={headerCopy.searchPlaceholder}
        autoComplete="off"
        className={cn(
          "min-w-0 bg-transparent px-2.5 text-sm text-ink outline-none transition-[width,opacity] duration-300 ease-soft placeholder:text-muted [&::-webkit-search-cancel-button]:appearance-none",
          isBlock
            ? "w-full"
            : "w-0 opacity-0 focus:w-full focus:opacity-100 xl:w-full xl:opacity-100",
        )}
      />
    </form>
  );
}
