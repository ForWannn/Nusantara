import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";

import type { EventBudaya } from "@/content/event";
import { sumberLabel } from "@/lib/budaya";

type EventCardProps = {
  event: EventBudaya;
};

export function EventCard({ event }: EventCardProps) {
  const bulanAwal = event.bulan[0].slice(0, 3).toUpperCase();
  const bulanAkhir = event.bulan[event.bulan.length - 1]
    .slice(0, 3)
    .toUpperCase();
  const bulanSingkat =
    event.bulan.length > 2
      ? `${bulanAwal}–${bulanAkhir}`
      : event.bulan
          .map((bulan) => bulan.slice(0, 3).toUpperCase())
          .join("–");

  return (
    <article className="group flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-soft transition-[border-color,transform,box-shadow] duration-300 ease-soft hover:-translate-y-0.5 hover:border-clay/50 hover:shadow-lift sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="flex min-h-11 items-center rounded-xl bg-sand/55 px-3 font-serif text-lg leading-none text-brown">
            {bulanSingkat}
          </span>
          <span className="text-[0.625rem] font-medium uppercase leading-relaxed tracking-[0.14em] text-muted">
            {event.provinsiNama}
          </span>
        </div>
        <span className="rounded-pill border border-line px-2.5 py-1 text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-muted">
          {event.waktu}
        </span>
      </div>

      <h3 className="mt-5 font-serif text-2xl leading-snug text-ink">
        {event.nama}
      </h3>

      <p className="mt-2 flex items-center gap-1.5 text-xs text-brown">
        <MapPin className="size-3.5 shrink-0" strokeWidth={1.6} aria-hidden="true" />
        {event.lokasi}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {event.deskripsi}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
        {event.provinsi ? (
          <Link
            href={`/jelajahi/${event.provinsi}`}
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-brown underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            <CalendarDays
              className="size-3.5"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            Jelajahi provinsi
          </Link>
        ) : (
          <span />
        )}
        <a
          href={event.sumber}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-brown underline-offset-4 transition-colors hover:text-ink hover:underline"
          aria-label={`Sumber: ${sumberLabel(event.sumber)} — ${
            event.nama
          } (buka di tab baru)`}
        >
          {sumberLabel(event.sumber)}
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
