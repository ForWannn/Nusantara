"use client";

import { useMemo, useState } from "react";

import { EventCard } from "@/components/event/event-card";
import {
  BULAN,
  type Bulan,
  type EventBudaya,
} from "@/content/event";

type EventExplorerProps = {
  items: EventBudaya[];
};

type FilterBulan = Bulan | "semua";

export function EventExplorer({ items }: EventExplorerProps) {
  const [provinsi, setProvinsi] = useState("semua");
  const [bulan, setBulan] = useState<FilterBulan>("semua");

  const provinsiList = useMemo(
    () =>
      Array.from(new Set(items.map((item) => item.provinsiNama))).sort((a, b) =>
        a.localeCompare(b, "id"),
      ),
    [items],
  );

  const bulanTersedia = useMemo(
    () => BULAN.filter((item) => items.some((event) => event.bulan.includes(item))),
    [items],
  );

  const hasil = useMemo(
    () =>
      items.filter((event) => {
        const cocokProvinsi =
          provinsi === "semua" || event.provinsiNama === provinsi;
        const cocokBulan = bulan === "semua" || event.bulan.includes(bulan);

        return cocokProvinsi && cocokBulan;
      }),
    [bulan, items, provinsi],
  );

  const adaFilter = provinsi !== "semua" || bulan !== "semua";

  function reset() {
    setProvinsi("semua");
    setBulan("semua");
  }

  return (
    <div>
      <div className="rounded-panel border border-line bg-surface p-4 shadow-soft sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="filter-provinsi-event"
              className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted"
            >
              Provinsi
            </label>
            <select
              id="filter-provinsi-event"
              value={provinsi}
              onChange={(event) => setProvinsi(event.target.value)}
              className="min-h-11 w-full rounded-xl border border-line bg-surface px-3 text-sm text-ink sm:w-60"
            >
              <option value="semua">Semua provinsi</option>
              {provinsiList.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {adaFilter ? (
            <button
              type="button"
              onClick={reset}
              className="min-h-11 w-fit px-2 text-xs font-medium text-brown underline-offset-4 hover:text-ink hover:underline"
            >
              Reset filter
            </button>
          ) : null}
        </div>

        <div className="mt-5 border-t border-line pt-4">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted">
            Bulan
          </p>
          <div
            className="mt-2 flex gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter bulan event"
          >
            <button
              type="button"
              onClick={() => setBulan("semua")}
              aria-pressed={bulan === "semua"}
              className="min-h-11 shrink-0 rounded-pill border border-line bg-surface px-4 text-xs font-medium text-brown transition-[background-color,border-color,color] duration-200 hover:border-clay hover:text-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-canvas"
            >
              Semua
            </button>
            {bulanTersedia.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setBulan(item)}
                aria-pressed={bulan === item}
                className="min-h-11 shrink-0 rounded-pill border border-line bg-surface px-4 text-xs font-medium text-brown transition-[background-color,border-color,color] duration-200 hover:border-clay hover:text-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-canvas"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted" aria-live="polite">
          Menampilkan {hasil.length} dari {items.length} agenda.
        </p>
        <p className="text-xs text-muted">
          Tanggal pasti mengikuti pengumuman penyelenggara.
        </p>
      </div>

      {hasil.length > 0 ? (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {hasil.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-panel border border-dashed border-line-strong bg-surface-muted/60 px-6 py-12 text-center">
          <h3 className="font-serif text-2xl text-ink">
            Belum ada agenda yang cocok
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
            Coba pilih provinsi atau bulan lain. Agenda budaya terus bertambah
            seiring waktu.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-pill bg-ink px-5 text-sm font-medium text-canvas transition-colors duration-300 hover:bg-brown"
          >
            Tampilkan semua agenda
          </button>
        </div>
      )}
    </div>
  );
}
