import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ProvinceGlyph } from "@/components/map/province-glyph";
import type { Provinsi } from "@/content/provinsi";
import { cn } from "@/lib/cn";

type ProvinsiCardProps = {
  provinsi: Provinsi;
  index: number;
  className?: string;
};

export function ProvinsiCard({
  provinsi,
  index,
  className,
}: ProvinsiCardProps) {
  const jumlahKategori = new Set(
    provinsi.budaya.map((entri) => entri.kategori),
  ).size;

  return (
    <Link
      href={`/jelajahi/${provinsi.slug}`}
      prefetch
      className={cn(
        "group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-card border border-line bg-surface p-5 transition-[border-color,transform,box-shadow] duration-300 ease-soft hover:-translate-y-1 hover:border-clay/60 hover:shadow-lift sm:p-6",
        className,
      )}
    >
      <ProvinceGlyph
        slug={provinsi.slug}
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-[0.14] transition-opacity duration-300 group-hover:opacity-25"
        pathClassName="fill-brown stroke-transparent"
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-4 text-eyebrow uppercase text-muted">
          <span>{provinsi.wilayah}</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-5 font-serif text-[1.55rem] leading-tight text-ink">
          {provinsi.nama}
        </h3>
        <p className="mt-2 line-clamp-2 max-w-[30ch] text-sm leading-relaxed text-muted">
          {provinsi.ringkasan}
        </p>
      </div>

      <div className="relative mt-6 flex items-center justify-between gap-4 text-xs text-brown">
        <span>
          {provinsi.budaya.length} materi · {jumlahKategori} kategori
        </span>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-clay group-hover:bg-sand/50">
          <ArrowUpRight
            className="size-4 transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
