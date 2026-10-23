import { ArrowUpRight } from "lucide-react";

import type { Inovasi } from "@/content/inovasi";
import { sumberLabel } from "@/lib/budaya";
import {
  inovasiKategoriIkon,
  inovasiKategoriLabel,
} from "@/lib/inovasi";

type InovasiCardProps = {
  inovasi: Inovasi;
};

export function InovasiCard({ inovasi }: InovasiCardProps) {
  const Ikon = inovasiKategoriIkon[inovasi.kategori];

  return (
    <article className="group flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-soft transition-[border-color,transform,box-shadow] duration-300 ease-soft hover:-translate-y-0.5 hover:border-clay/50 hover:shadow-lift sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-sand/55 text-clay-strong">
          <Ikon className="size-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <span className="text-right text-[0.625rem] font-medium uppercase leading-relaxed tracking-[0.14em] text-muted">
          {inovasi.daerah}
          {inovasi.tahun ? (
            <>
              <span aria-hidden="true"> · </span>
              {inovasi.tahun}
            </>
          ) : null}
        </span>
      </div>

      <p className="mt-6 text-eyebrow uppercase text-clay-strong">
        {inovasiKategoriLabel[inovasi.kategori]}
      </p>
      <h3 className="mt-2 font-serif text-2xl leading-snug text-ink">
        {inovasi.judul}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {inovasi.ringkasan}
      </p>

      <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-6">
        <p className="max-w-[24ch] text-xs leading-relaxed text-brown">
          {inovasi.pelaku ?? "Praktik budaya kontemporer"}
        </p>
        <a
          href={inovasi.sumber}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-brown underline-offset-4 transition-colors hover:text-ink hover:underline"
          aria-label={`Sumber: ${sumberLabel(
            inovasi.sumber,
          )} — ${inovasi.judul} (buka di tab baru)`}
        >
          {sumberLabel(inovasi.sumber)}
          <ArrowUpRight
            className="size-3.5"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}
