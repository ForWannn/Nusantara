"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import {
  PETA_VIEWBOX,
  PROVINSI_GEO,
  getProvinsiGeo,
  labelUntuk,
  persen,
  ujungGaris,
} from "@/lib/peta";

export type PetaProvinsi = {
  slug: string;
  nama: string;
  wilayah: string;
  materi: number;
};

type IndonesiaMapProps = {
  provinsi: PetaProvinsi[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

function MapLegend() {
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-muted">
      <li className="flex items-center gap-2">
        <span
          className="size-3 rounded-[3px] bg-clay/60 ring-1 ring-clay-strong/30"
          aria-hidden="true"
        />
        Tersedia
      </li>
      <li className="flex items-center gap-2">
        <span
          className="size-3 rounded-[3px] bg-sand"
          aria-hidden="true"
        />
        Segera hadir
      </li>
    </ul>
  );
}

export function IndonesiaMap({ provinsi }: IndonesiaMapProps) {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const [selecting, setSelecting] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  const aktifSet = useMemo(
    () => new Set(provinsi.map((item) => item.slug)),
    [provinsi],
  );

  const selectedGeo = selecting ? getProvinsiGeo(selecting) : undefined;
  const origin = selectedGeo
    ? `${persen(selectedGeo.cx, PETA_VIEWBOX.width)} ${persen(
        selectedGeo.cy,
        PETA_VIEWBOX.height,
      )}`
    : "50% 50%";

  const tooltip = useMemo(() => {
    if (!hovered || selecting) return null;

    const geo = getProvinsiGeo(hovered);
    if (!geo) return null;

    const active = provinsi.find((item) => item.slug === hovered);

    return {
      geo,
      nama: active?.nama ?? geo.nama,
      materi: active?.materi,
      aktif: Boolean(active),
    };
  }, [hovered, provinsi, selecting]);

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  function openProvinsi(slug: string) {
    if (selecting) return;

    const href = `/jelajahi/${slug}`;

    if (reduceMotion) {
      router.push(href);
      return;
    }

    setHovered(null);
    setSelecting(slug);
    timer.current = window.setTimeout(() => router.push(href), 460);
  }

  return (
    <div className="overflow-hidden rounded-panel border border-line bg-surface shadow-soft">
      <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <h2 className="text-eyebrow uppercase text-muted">Peta Indonesia</h2>
          <p className="mt-1.5 font-serif text-xl leading-snug text-ink">
            Pilih provinsi untuk mulai menjelajah.
          </p>
        </div>
        <MapLegend />
      </div>

      <div className="relative border-y border-line/70 bg-surface-muted/35 px-2 py-4 sm:px-5 sm:py-6">
        <div className="relative aspect-[1049/426] w-full overflow-hidden rounded-[1rem] bg-surface">
          <motion.div
            className="absolute inset-0"
            animate={selecting ? { scale: 2.35 } : { scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: EASE,
            }}
            style={{ transformOrigin: origin }}
          >
            <svg
              viewBox={`0 0 ${PETA_VIEWBOX.width} ${PETA_VIEWBOX.height}`}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
              focusable="false"
            >
              <g>
                {PROVINSI_GEO.map((geo, index) => {
                  const aktif = aktifSet.has(geo.slug);
                  const delay = 0.06 + index * 0.008;

                  if (!aktif) {
                    return (
                      <path
                        key={geo.slug}
                        d={geo.d}
                        className="peta-masuk cursor-default fill-sand/55 stroke-surface transition-[fill] duration-300 hover:fill-sand"
                        style={{ animationDelay: `${delay}s` }}
                        strokeWidth={1}
                        vectorEffect="non-scaling-stroke"
                        onPointerEnter={() => setHovered(geo.slug)}
                        onPointerLeave={() => setHovered(null)}
                      />
                    );
                  }

                  const drawDelay = 0.12 + index * 0.012;

                  return (
                    <path
                      key={geo.slug}
                      d={geo.d}
                      pathLength={1}
                      className={cn(
                        "peta-aktif cursor-pointer stroke-clay-strong/60 transition-[fill] duration-300",
                        hovered === geo.slug ? "fill-clay/85" : "fill-clay/60",
                      )}
                      style={{
                        animationDelay: `${drawDelay}s, ${drawDelay + 0.3}s`,
                      }}
                      strokeWidth={1}
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                      onClick={() => openProvinsi(geo.slug)}
                      onPointerEnter={() => setHovered(geo.slug)}
                      onPointerLeave={() => setHovered(null)}
                    />
                  );
                })}
              </g>

              <g>
                {provinsi.map((item, index) => {
                  const geo = getProvinsiGeo(item.slug);
                  if (!geo) return null;

                  const label = labelUntuk(geo);
                  const end = ujungGaris(label);
                  const jakarta = item.slug === "dki-jakarta";
                  const delay = 0.2 + index * 0.04;

                  return (
                    <g key={`label-${item.slug}`} className="pointer-events-none">
                      <path
                        d={`M${geo.cx} ${geo.cy}L${end.x} ${end.y}`}
                        className="peta-masuk"
                        style={{ animationDelay: `${delay}s` }}
                        fill="none"
                        stroke="var(--color-clay-strong)"
                        strokeWidth={0.9}
                        strokeOpacity={0.5}
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      {jakarta ? (
                        <circle
                          cx={geo.cx}
                          cy={geo.cy}
                          r={8}
                          className="peta-masuk"
                          style={{ animationDelay: `${delay}s` }}
                          fill="none"
                          stroke="var(--color-clay-strong)"
                          strokeWidth={0.8}
                          opacity={0.3}
                        />
                      ) : null}
                      <circle
                        cx={geo.cx}
                        cy={geo.cy}
                        r={jakarta ? 4 : 2.6}
                        className="peta-masuk fill-clay-strong stroke-surface"
                        style={{ animationDelay: `${delay}s` }}
                        strokeWidth={1.2}
                      />
                    </g>
                  );
                })}
              </g>
            </svg>

            <div
              className={cn(
                "pointer-events-none absolute inset-0 transition-opacity duration-150",
                selecting ? "opacity-0" : "opacity-100",
              )}
            >
              {provinsi.map((item, index) => {
                const geo = getProvinsiGeo(item.slug);
                if (!geo) return null;

                const label = labelUntuk(geo);
                const labelDelay = 0.2 + index * 0.05;

                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => openProvinsi(item.slug)}
                    onPointerEnter={() => setHovered(item.slug)}
                    onPointerLeave={() => setHovered(null)}
                    onFocus={() => setHovered(item.slug)}
                    onBlur={() => setHovered(null)}
                    className={cn(
                      "map-label pointer-events-auto absolute hidden min-h-11 cursor-pointer items-center whitespace-nowrap px-1 font-serif text-[0.9375rem] leading-none text-ink underline-offset-4 transition-colors duration-200 hover:text-clay-strong hover:underline focus-visible:text-clay-strong focus-visible:underline md:flex",
                      hovered === item.slug && "text-clay-strong",
                    )}
                    style={{
                      left: persen(label.x, PETA_VIEWBOX.width),
                      top: persen(label.y, PETA_VIEWBOX.height),
                      transform:
                        label.anchor === "start"
                          ? "translateY(-50%)"
                          : label.anchor === "end"
                            ? "translate(-100%, -50%)"
                            : "translate(-50%, -50%)",
                    }}
                    aria-label={`Buka budaya ${item.nama}`}
                  >
                    <span
                      className="peta-label-masuk inline-block"
                      style={{ animationDelay: `${labelDelay}s` }}
                    >
                      {item.nama}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <AnimatePresence>
            {tooltip ? (
              <motion.div
                key={tooltip.geo.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.15 }}
                className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full"
                style={{
                  left: persen(tooltip.geo.cx, PETA_VIEWBOX.width),
                  top: `calc(${persen(tooltip.geo.cy, PETA_VIEWBOX.height)} - 10px)`,
                }}
              >
                <div className="relative rounded-xl bg-ink px-3 py-2 text-canvas shadow-lift">
                  <p className="whitespace-nowrap font-serif text-[0.8125rem] leading-tight">
                    {tooltip.nama}
                  </p>
                  <p className="mt-1 text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-canvas/60">
                    {tooltip.aktif
                      ? `${tooltip.materi ?? 0} materi`
                      : "Segera hadir"}
                  </p>
                  <span
                    className="absolute left-1/2 top-full size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ink"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex flex-col gap-2 px-2 text-[0.6875rem] leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Ketuk wilayah berwarna atau label provinsi. Di ponsel, pilih dari
            daftar di bawah peta.
          </p>
          <p className="shrink-0">
            Batas wilayah: Natural Earth (domain publik).
          </p>
        </div>
      </div>
    </div>
  );
}
