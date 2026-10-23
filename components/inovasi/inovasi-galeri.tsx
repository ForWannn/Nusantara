"use client";

import { useMemo, useState } from "react";

import { InovasiCard } from "@/components/inovasi/inovasi-card";
import {
  KATEGORI_INOVASI,
  type Inovasi,
  type KategoriInovasi,
} from "@/content/inovasi";
import { inovasiKategoriLabel } from "@/lib/inovasi";

type Urutan = "pilihan" | "terbaru";
type FilterKategori = KategoriInovasi | "semua";

type InovasiGaleriProps = {
  items: Inovasi[];
};

export function InovasiGaleri({ items }: InovasiGaleriProps) {
  const [kategori, setKategori] = useState<FilterKategori>("semua");
  const [daerah, setDaerah] = useState("semua");
  const [urutan, setUrutan] = useState<Urutan>("pilihan");

  const daerahList = useMemo(
    () =>
      Array.from(new Set(items.map((item) => item.daerah))).sort((a, b) =>
        a.localeCompare(b, "id"),
      ),
    [items],
  );

  const hasil = useMemo(() => {
    const filtered = items.filter((item) => {
      const cocokKategori = kategori === "semua" || item.kategori === kategori;
      const cocokDaerah = daerah === "semua" || item.daerah === daerah;

      return cocokKategori && cocokDaerah;
    });

    if (urutan === "terbaru") {
      return [...filtered].sort(
        (a, b) => (b.tahun ?? 0) - (a.tahun ?? 0),
      );
    }

    return filtered;
  }, [daerah, items, kategori, urutan]);

  const adaFilter = kategori !== "semua" || daerah !== "semua";

  function reset() {
    setKategori("semua");
    setDaerah("semua");
    setUrutan("pilihan");
  }

  return (
    <div>
      <div className="rounded-panel border border-line bg-surface p-4 shadow-soft sm:p-5">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter kategori inovasi"
        >
          <button
            type="button"
            onClick={() => setKategori("semua")}
            aria-pressed={kategori === "semua"}
            className="min-h-11 rounded-pill border border-line bg-surface px-4 text-xs font-medium text-brown transition-[background-color,border-color,color] duration-200 hover:border-clay hover:text-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-canvas"
          >
            Semua
          </button>
          {KATEGORI_INOVASI.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setKategori(item)}
              aria-pressed={kategori === item}
              className="min-h-11 rounded-pill border border-line bg-surface px-4 text-xs font-medium text-brown transition-[background-color,border-color,color] duration-200 hover:border-clay hover:text-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-canvas"
            >
              {inovasiKategoriLabel[item]}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-4 border-t border-line pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="filter-daerah"
              className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted"
            >
              Daerah
            </label>
            <select
              id="filter-daerah"
              value={daerah}
              onChange={(event) => setDaerah(event.target.value)}
              className="min-h-11 w-full rounded-xl border border-line bg-surface px-3 text-sm text-ink sm:w-56"
            >
              <option value="semua">Semua daerah</option>
              {daerahList.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-end gap-3">
            <div className="flex flex-col gap-2">
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted">
                Urutkan
              </span>
              <div
                className="inline-flex rounded-pill border border-line bg-surface-muted p-1"
                role="group"
                aria-label="Urutan inovasi"
              >
                {(
                  [
                    ["pilihan", "Pilihan"],
                    ["terbaru", "Terbaru"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setUrutan(value)}
                    aria-pressed={urutan === value}
                    className="min-h-11 rounded-pill px-3 text-xs font-medium text-muted transition-[background-color,color] duration-200 hover:text-ink aria-pressed:bg-surface aria-pressed:text-ink aria-pressed:shadow-soft"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {adaFilter || urutan !== "pilihan" ? (
              <button
                type="button"
                onClick={reset}
                className="min-h-11 px-2 text-xs font-medium text-brown underline-offset-4 hover:text-ink hover:underline"
              >
                Reset filter
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted" aria-live="polite">
          Menampilkan {hasil.length} dari {items.length} inovasi.
        </p>
        {urutan === "terbaru" ? (
          <p className="text-xs text-muted">
            Diurutkan dari tahun terbaru; entri tanpa tahun di akhir.
          </p>
        ) : null}
      </div>

      {hasil.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hasil.map((inovasi) => (
            <InovasiCard key={inovasi.slug} inovasi={inovasi} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-panel border border-dashed border-line-strong bg-surface-muted/60 px-6 py-12 text-center">
          <h3 className="font-serif text-2xl text-ink">
            Belum ada inovasi yang cocok
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
            Coba pilih kategori atau daerah lain, atau tampilkan kembali seluruh
            koleksi.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-pill bg-ink px-5 text-sm font-medium text-canvas transition-colors duration-300 hover:bg-brown"
          >
            Tampilkan semua inovasi
          </button>
        </div>
      )}
    </div>
  );
}
