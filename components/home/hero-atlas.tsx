import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { provinsiAktif } from "@/content/provinsi";
import { PETA_VIEWBOX, PROVINSI_GEO } from "@/lib/peta";

export function HeroAtlas() {
  const aktif = new Set(provinsiAktif.map((provinsi) => provinsi.slug));

  return (
    <Link
      href="/jelajahi"
      className="group block rounded-panel border border-line bg-surface p-4 shadow-soft transition-[border-color,transform,box-shadow] duration-300 ease-soft hover:-translate-y-1 hover:border-clay/60 hover:shadow-lift sm:p-5"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-eyebrow uppercase text-muted">Atlas Nusantara</p>
        <span className="rounded-pill border border-line px-2.5 py-1 text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-brown">
          {provinsiAktif.length} provinsi
        </span>
      </div>

      <div className="mt-4 overflow-hidden rounded-[1.15rem] bg-sand/30 px-2 py-4 sm:px-4 sm:py-5">
        <svg
          viewBox={`0 0 ${PETA_VIEWBOX.width} ${PETA_VIEWBOX.height}`}
          className="h-auto w-full"
          aria-hidden="true"
          focusable="false"
        >
          {PROVINSI_GEO.map((geo) => (
            <path
              key={geo.slug}
              d={geo.d}
              className={
                aktif.has(geo.slug)
                  ? "fill-clay stroke-surface transition-[fill] duration-300 group-hover:fill-clay-strong"
                  : "fill-sand/55 stroke-surface transition-[fill] duration-300 group-hover:fill-sand/80"
              }
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {provinsiAktif.map((provinsi) => {
            const geo = PROVINSI_GEO.find(
              (item) => item.slug === provinsi.slug,
            );

            if (!geo) return null;

            return (
              <circle
                key={`titik-${provinsi.slug}`}
                cx={geo.cx}
                cy={geo.cy}
                r={3.2}
                className="fill-ink/55"
              />
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="font-serif text-xl leading-tight text-ink">
            Dari Aceh ke Sulawesi.
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            Pilih wilayah, lalu telusuri ceritanya.
          </p>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-brown transition-[border-color,background-color] duration-300 group-hover:border-clay group-hover:bg-sand/50">
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
