import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { BudayaCard } from "@/components/provinsi/budaya-card";
import { EventCard } from "@/components/event/event-card";
import { InovasiCard } from "@/components/inovasi/inovasi-card";
import { ButtonLink, buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { eventUntukProvinsi } from "@/content/event";
import { inovasiUntukProvinsi } from "@/content/inovasi";
import { getProvinsi, provinsiAktif } from "@/content/provinsi";
import { cn } from "@/lib/cn";

type PageProps = {
  params: Promise<{ provinsi: string }>;
};

export function generateStaticParams() {
  return provinsiAktif.map((provinsi) => ({ provinsi: provinsi.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { provinsi: slug } = await params;
  const provinsi = getProvinsi(slug);

  if (!provinsi || !provinsi.aktif) {
    return {
      title: "Provinsi tidak ditemukan",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: provinsi.nama,
    description: provinsi.ringkasan,
    openGraph: {
      title: provinsi.nama,
      description: provinsi.ringkasan,
    },
  };
}

export default function ProvinsiPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProvinsiSkeleton />}>
      <ProvinsiContent params={params} />
    </Suspense>
  );
}

async function ProvinsiContent({ params }: PageProps) {
  const { provinsi: slug } = await params;
  const provinsi = getProvinsi(slug);

  if (!provinsi || !provinsi.aktif) {
    notFound();
  }

  const jumlahKategori = new Set(
    provinsi.budaya.map((entri) => entri.kategori),
  ).size;

  const provinsiLain = provinsiAktif.filter(
    (item) => item.slug !== provinsi.slug,
  );

  const inovasiTerkait = inovasiUntukProvinsi(provinsi.slug);
  const eventTerkait = eventUntukProvinsi(provinsi.slug);
  const adaTerkait = inovasiTerkait.length > 0 || eventTerkait.length > 0;

  return (
    <article className="pb-20 sm:pb-24">
      <section className="pt-8 sm:pt-12">
        <Container>
          <Link
            href="/jelajahi"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brown underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            <ArrowLeft className="size-4" strokeWidth={1.6} aria-hidden="true" />
            Kembali ke peta
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-14">
            <div>
              <p className="text-eyebrow uppercase text-clay-strong">
                {provinsi.wilayah} · Provinsi
              </p>
              <h1 className="mt-5 font-serif text-display text-ink">
                {provinsi.nama}
              </h1>
              <p className="mt-6 max-w-xl text-lead text-muted">
                {provinsi.ringkasan}
              </p>

              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-brown">
                <span>{provinsi.budaya.length} materi budaya</span>
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
                <span>{jumlahKategori} kategori</span>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={`/asisten?provinsi=${provinsi.slug}`}
                  icon={
                    <Sparkles
                      className="size-4"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  }
                >
                  Tanya Asisten AI
                </ButtonLink>
                <Link
                  href="/jelajahi"
                  className={cn(buttonStyles("outline"), "shrink-0")}
                >
                  Lihat peta
                </Link>
              </div>
            </div>

            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-panel bg-ink p-8 lg:justify-self-end">
              <span
                aria-hidden="true"
                className="absolute inset-6 rounded-full border border-canvas/10"
              />
              <span
                aria-hidden="true"
                className="absolute inset-12 rounded-full border border-canvas/[0.07]"
              />
              <Image
                src={provinsi.hero.gambar}
                alt={provinsi.hero.alt}
                width={520}
                height={520}
                unoptimized
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="relative h-full w-full object-contain"
              />
              <p className="absolute bottom-5 left-0 right-0 text-center text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-canvas/65">
                Siluet wilayah · Natural Earth
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="mt-16 sm:mt-20"
        aria-labelledby="budaya-provinsi"
      >
        <Container>
          <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-eyebrow uppercase text-muted">Materi budaya</p>
              <h2
                id="budaya-provinsi"
                className="mt-2 font-serif text-title text-ink"
              >
                Jejak budaya di {provinsi.nama}
              </h2>
            </div>
            <p className="text-sm text-muted">
              {provinsi.budaya.length} entri · sumber terbuka
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {provinsi.budaya.map((entri) => (
              <BudayaCard
                key={`${entri.kategori}-${entri.judul}`}
                entri={entri}
                provinsiSlug={provinsi.slug}
              />
            ))}
          </div>
        </Container>
      </section>

      {adaTerkait ? (
        <section className="mt-16 sm:mt-20" aria-labelledby="terkait-provinsi">
          <Container>
            <div className="border-b border-line pb-5">
              <p className="text-eyebrow uppercase text-muted">Jejak lain</p>
              <h2
                id="terkait-provinsi"
                className="mt-2 font-serif text-title text-ink"
              >
                Inovasi & agenda di {provinsi.nama}
              </h2>
            </div>

            {eventTerkait.length > 0 ? (
              <div className="mt-6">
                <h3 className="font-serif text-2xl text-ink">Agenda budaya</h3>
                <div
                  className={cn(
                    "mt-3 grid gap-4",
                    eventTerkait.length > 1 && "md:grid-cols-2",
                  )}
                >
                  {eventTerkait.map((event) => (
                    <EventCard key={event.slug} event={event} />
                  ))}
                </div>
              </div>
            ) : null}

            {inovasiTerkait.length > 0 ? (
              <div className="mt-8">
                <h3 className="font-serif text-2xl text-ink">
                  Inovasi terkait
                </h3>
                <div
                  className={cn(
                    "mt-3 grid gap-4",
                    inovasiTerkait.length > 1 &&
                      "md:grid-cols-2 xl:grid-cols-3",
                  )}
                >
                  {inovasiTerkait.map((inovasi) => (
                    <InovasiCard key={inovasi.slug} inovasi={inovasi} />
                  ))}
                </div>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}

      <section className="mt-16 sm:mt-20">
        <Container>
          <div className="flex flex-col gap-7 rounded-panel border border-line bg-sand/45 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <p className="text-eyebrow uppercase text-brown">
                Masih ingin tahu?
              </p>
              <h2 className="mt-2 font-serif text-title text-ink">
                Tanya lebih banyak tentang {provinsi.nama}.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-brown">
                Asisten AI dapat membantu menjelaskan istilah daerah,
                merekomendasikan cerita rakyat, atau menyusun rute budaya.
              </p>
            </div>
            <ButtonLink
              href={`/asisten?provinsi=${provinsi.slug}`}
              className="shrink-0"
              icon={
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.6}
                />
              }
            >
              Buka Asisten AI
            </ButtonLink>
          </div>

          <div className="mt-14">
            <p className="text-eyebrow uppercase text-muted">Lanjut jelajah</p>
            <h2 className="mt-2 font-serif text-title text-ink">
              Provinsi lain
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {provinsiLain.map((item) => (
                <Link
                  key={item.slug}
                  href={`/jelajahi/${item.slug}`}
                  prefetch
                  className="group flex min-h-16 items-center justify-between gap-3 rounded-card border border-line bg-surface px-4 py-3 transition-[border-color,transform] duration-300 ease-soft hover:-translate-y-0.5 hover:border-clay/60"
                >
                  <span className="font-serif text-lg text-ink">
                    {item.nama}
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-brown transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted">
            Sumber materi: sumber terbuka dan publikasi budaya, tercantum pada
            halaman tiap entri. Foto berasal dari Wikimedia Commons dengan
            lisensi masing-masing; kredit lengkap ada di halaman detail. Siluet
            wilayah menggunakan data Natural Earth 1:50m (domain publik).
            Konten akan ditinjau dan dilengkapi secara berkala.
          </p>
        </Container>
      </section>
    </article>
  );
}

function ProvinsiSkeleton() {
  return (
    <div
      className="pb-20 sm:pb-24"
      role="status"
      aria-live="polite"
      aria-label="Memuat halaman provinsi"
    >
      <div aria-hidden="true">
        <section className="pt-8 sm:pt-12">
          <Container>
            <div className="h-11 w-32 rounded-pill bg-sand/50" />
            <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-14">
              <div>
                <div className="h-3 w-24 rounded-full bg-sand/60" />
                <div className="mt-5 h-16 w-80 max-w-full rounded-2xl bg-sand/60" />
                <div className="mt-6 h-4 w-full max-w-xl rounded-full bg-sand/50" />
                <div className="mt-2 h-4 w-2/3 max-w-md rounded-full bg-sand/50" />
                <div className="mt-8 flex gap-3">
                  <div className="h-11 w-36 rounded-pill bg-sand/60" />
                  <div className="h-11 w-24 rounded-pill bg-sand/50" />
                </div>
              </div>
              <div className="aspect-square rounded-panel bg-ink/90" />
            </div>
          </Container>
        </section>
        <section className="mt-16 sm:mt-20">
          <Container>
            <div className="h-3 w-24 rounded-full bg-sand/60" />
            <div className="mt-3 h-8 w-72 max-w-full rounded-full bg-sand/60" />
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="h-56 rounded-card border border-line bg-surface-muted/60"
                />
              ))}
            </div>
          </Container>
        </section>
      </div>
      <span className="sr-only">Memuat halaman provinsi…</span>
    </div>
  );
}
