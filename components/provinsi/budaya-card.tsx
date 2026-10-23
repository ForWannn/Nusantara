import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { EntriBudaya } from "@/content/provinsi";
import { kategoriIkon, kategoriLabel, slugBudaya } from "@/lib/budaya";

type BudayaCardProps = {
  entri: EntriBudaya;
  provinsiSlug: string;
};

export function BudayaCard({ entri, provinsiSlug }: BudayaCardProps) {
  const Ikon = kategoriIkon[entri.kategori];

  return (
    <article className="group flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-soft transition-[border-color,transform,box-shadow] duration-300 ease-soft hover:-translate-y-0.5 hover:border-clay/50 hover:shadow-lift sm:p-6">
      <Link
        href={`/jelajahi/${provinsiSlug}/budaya/${slugBudaya(entri.judul)}`}
        className="flex h-full flex-col"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-sand/55 text-clay-strong">
            <Ikon className="size-4" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <span className="text-eyebrow uppercase text-muted">
            {kategoriLabel[entri.kategori]}
          </span>
        </div>

        <h3 className="mt-5 font-serif text-2xl leading-snug text-ink">
          {entri.judul}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {entri.deskripsi}
        </p>

        <span className="mt-auto inline-flex min-h-11 w-fit items-center gap-1.5 pt-5 text-xs font-medium text-brown transition-colors group-hover:text-ink">
          Baca info
          <ArrowRight
            className="size-3.5 transition-transform duration-300 ease-soft group-hover:translate-x-0.5"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </span>
      </Link>
    </article>
  );
}
