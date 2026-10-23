import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { EventCard } from "@/components/event/event-card";
import { HeroAtlas } from "@/components/home/hero-atlas";
import { InovasiCard } from "@/components/inovasi/inovasi-card";
import { ProvinsiCard } from "@/components/jelajahi/provinsi-card";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { eventList, type EventBudaya } from "@/content/event";
import { inovasiList, type Inovasi } from "@/content/inovasi";
import {
  KATEGORI_BUDAYA,
  provinsiAktif,
  type Provinsi,
} from "@/content/provinsi";
import { kategoriIkon, kategoriLabel } from "@/lib/budaya";

const slugSorotan = ["sumatera-utara", "bali", "sulawesi-selatan"];
const slugInovasi = [
  "batik-fractal",
  "ibuku-bamboo-architecture",
  "ulos-kontemporer",
];
const slugAgenda = [
  "cap-go-meh-singkawang",
  "pesta-kesenian-bali",
  "makassar-international-writers-festival",
];

export default function HomePage() {
  const totalMateri = provinsiAktif.reduce(
    (total, provinsi) => total + provinsi.budaya.length,
    0,
  );

  const sorotan = slugSorotan
    .map((slug) => provinsiAktif.find((provinsi) => provinsi.slug === slug))
    .filter((provinsi): provinsi is Provinsi => Boolean(provinsi));

  const inovasiPilihan = slugInovasi
    .map((slug) => inovasiList.find((item) => item.slug === slug))
    .filter((item): item is Inovasi => Boolean(item));

  const agendaPilihan = slugAgenda
    .map((slug) => eventList.find((item) => item.slug === slug))
    .filter((item): item is EventBudaya => Boolean(item));

  const kategori = KATEGORI_BUDAYA.map((key) => ({
    key,
    jumlah: provinsiAktif.reduce(
      (total, provinsi) =>
        total +
        provinsi.budaya.filter((entri) => entri.kategori === key).length,
      0,
    ),
  }));

  return (
    <div>
      <section className="pb-4 pt-10 sm:pt-14 lg:pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-center lg:gap-16">
            <div>
              <p className="text-eyebrow uppercase text-clay-strong">
                Arsip budaya hidup · 2026
              </p>
              <h1 className="mt-6 max-w-3xl font-serif text-display text-ink">
                Budaya dalam{" "}
                <span className="text-clay-strong">satu cerita.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lead text-muted">
                Dari bahasa daerah di Sumatera Utara hingga tenun di Bali,
                Nusantara merangkum budaya Indonesia agar mudah dijelajahi,
                dipahami, dan dibagikan.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink
                  href="/jelajahi"
                  icon={
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.6}
                    />
                  }
                >
                  Jelajahi peta
                </ButtonLink>
                <ButtonLink href="/asisten" variant="outline">
                  Tanya Asisten AI
                </ButtonLink>
              </div>

              <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-brown">
                <span>{provinsiAktif.length} provinsi</span>
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
                <span>{totalMateri} materi budaya</span>
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
                <span>{inovasiList.length} inovasi</span>
              </p>
            </div>

            <HeroAtlas />
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20" aria-labelledby="kategori-budaya">
        <Container>
          <div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-eyebrow uppercase text-muted">
                Jelajahi lewat minat
              </p>
              <h2
                id="kategori-budaya"
                className="mt-2 font-serif text-title text-ink"
              >
                Sembilan pintu masuk.
              </h2>
            </div>
            <Link
              href="/jelajahi"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-brown underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Lihat semua provinsi
              <ArrowUpRight
                className="size-4"
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-3">
            {kategori.map((item) => {
              const Ikon = kategoriIkon[item.key];

              return (
                <Link
                  key={item.key}
                  href={`/jelajahi?kategori=${item.key}`}
                  className="group flex min-h-24 items-center gap-4 bg-surface p-4 transition-colors duration-300 hover:bg-sand/30 sm:p-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sand/55 text-clay-strong transition-colors duration-300 group-hover:bg-sand">
                    <Ikon
                      className="size-5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-lg leading-snug text-ink">
                      {kategoriLabel[item.key]}
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {item.jumlah} entri
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-brown transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20" aria-labelledby="sorotan-provinsi">
        <Container>
          <div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-eyebrow uppercase text-muted">
                Sorotan pilihan
              </p>
              <h2
                id="sorotan-provinsi"
                className="mt-2 font-serif text-title text-ink"
              >
                Tiga titik mulai.
              </h2>
            </div>
            <p className="text-sm text-muted">
              Dari Danau Toba sampai Tana Toraja.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sorotan.map((provinsi, index) => (
              <ProvinsiCard
                key={provinsi.slug}
                provinsi={provinsi}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20" aria-labelledby="inovasi-pilihan">
        <Container>
          <div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-eyebrow uppercase text-muted">
                Inovasi pilihan
              </p>
              <h2
                id="inovasi-pilihan"
                className="mt-2 font-serif text-title text-ink"
              >
                Tradisi yang bergerak.
              </h2>
            </div>
            <Link
              href="/inovasi"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-brown underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Lihat galeri inovasi
              <ArrowUpRight
                className="size-4"
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inovasiPilihan.map((inovasi) => (
              <InovasiCard key={inovasi.slug} inovasi={inovasi} />
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20" aria-labelledby="agenda-pilihan">
        <Container>
          <div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-eyebrow uppercase text-muted">
                Agenda budaya
              </p>
              <h2
                id="agenda-pilihan"
                className="mt-2 font-serif text-title text-ink"
              >
                Bertemu sepanjang tahun.
              </h2>
            </div>
            <Link
              href="/event"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-brown underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Lihat kalender
              <ArrowUpRight
                className="size-4"
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {agendaPilihan.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20">
        <Container>
          <div className="rounded-panel border border-line bg-sand/45 px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center">
              <div>
                <p className="text-eyebrow uppercase text-brown">
                  Butuh titik mulai?
                </p>
                <h2 className="mt-2 max-w-2xl font-serif text-title text-ink">
                  Tanya budaya seperti bercakap dengan pemandu.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-brown">
                  Asisten Nusantara menjawab dari arsip budaya — dari istilah
                  daerah sampai rekomendasi festival — dan menampilkan sumbernya.
                </p>
                <p className="mt-4 text-xs leading-relaxed text-brown">
                  Contoh: “Apa keunikan Tari Saman?” atau “Rekomendasi kuliner
                  khas Sumatera Barat.”
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <ButtonLink
                  href="/asisten"
                  icon={
                    <Sparkles
                      className="size-4"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  }
                >
                  Buka Asisten AI
                </ButtonLink>
                <ButtonLink href="/tentang#ai" variant="outline">
                  Cara AI dipakai
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
