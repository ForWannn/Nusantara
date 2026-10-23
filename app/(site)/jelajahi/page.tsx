import { ArrowUpRight, MapPinned } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { ProvinsiCard } from "@/components/jelajahi/provinsi-card";
import { IndonesiaMap, type PetaProvinsi } from "@/components/map/indonesia-map";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  KATEGORI_BUDAYA,
  provinsiAktif,
  type KategoriBudaya,
} from "@/content/provinsi";
import { kategoriLabel } from "@/lib/budaya";

export const metadata: Metadata = {
  title: "Jelajahi",
  description:
    "Jelajahi budaya Indonesia lewat peta interaktif. Telusuri provinsi pilihan, kuliner, bahasa, cerita rakyat, dan warisan budaya.",
};

type PageProps = {
  searchParams: Promise<{
    q?: string | string[];
    kategori?: string | string[];
  }>;
};

function ambilParameter(nilai: string | string[] | undefined): string {
  return typeof nilai === "string" ? nilai : "";
}

export default function JelajahiPage({ searchParams }: PageProps) {
  return (
    <Suspense fallback={<JelajahiSkeleton />}>
      <JelajahiContent searchParams={searchParams} />
    </Suspense>
  );
}

async function JelajahiContent({ searchParams }: PageProps) {
  const params = await searchParams;
  const q = ambilParameter(params.q).trim().slice(0, 80);
  const kategoriMentah = ambilParameter(params.kategori);
  const kategori = KATEGORI_BUDAYA.includes(kategoriMentah as KategoriBudaya)
    ? (kategoriMentah as KategoriBudaya)
    : null;
  const qPencarian = q.toLocaleLowerCase("id-ID");
  const adaFilter = Boolean(q) || Boolean(kategori);

  const provinsiTampil = provinsiAktif.filter((provinsi) => {
    const cocokPencarian =
      !q ||
      [
        provinsi.nama,
        provinsi.wilayah,
        provinsi.ringkasan,
        ...provinsi.budaya.flatMap((entri) => [
          entri.judul,
          entri.deskripsi,
          kategoriLabel[entri.kategori],
        ]),
      ].some((teks) => teks.toLocaleLowerCase("id-ID").includes(qPencarian));

    const cocokKategori =
      !kategori || provinsi.budaya.some((entri) => entri.kategori === kategori);

    return cocokPencarian && cocokKategori;
  });

  const peta: PetaProvinsi[] = provinsiAktif.map((provinsi) => ({
    slug: provinsi.slug,
    nama: provinsi.nama,
    wilayah: provinsi.wilayah,
    materi: provinsi.budaya.length,
  }));

  const totalMateri = provinsiAktif.reduce(
    (total, provinsi) => total + provinsi.budaya.length,
    0,
  );

  const totalKategori = new Set(
    provinsiAktif.flatMap((provinsi) =>
      provinsi.budaya.map((entri) => entri.kategori),
    ),
  ).size;


  return (
    <div className="pb-20 sm:pb-24">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-eyebrow uppercase text-clay-strong">
              Jelajahi · Peta budaya
            </p>
            <h1 className="mt-5 font-serif text-display text-ink">
              Satu kepulauan,{" "}
              <em className="italic text-clay-strong">banyak</em> cerita.
            </h1>
            <p className="mt-6 max-w-2xl text-lead text-muted">
              Mulai dari provinsi pilihan. Ketuk wilayah di peta, lalu telusuri
              kuliner, bahasa, cerita rakyat, dan warisan budaya yang hidup di
              sana.
            </p>
          </div>

          <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-brown">
            <span>{provinsiAktif.length} provinsi tersedia</span>
            <span aria-hidden="true" className="text-line-strong">
              /
            </span>
            <span>{totalMateri} materi budaya</span>
            <span aria-hidden="true" className="text-line-strong">
              /
            </span>
            <span>{totalKategori} kategori</span>
          </p>

          {adaFilter ? (
            <div className="mt-5 flex flex-wrap items-center gap-3 rounded-card border border-line bg-surface px-4 py-3 text-sm text-brown">
              <span className="font-medium text-ink">
                {provinsiTampil.length} provinsi cocok
              </span>
              {q ? (
                <span className="max-w-full truncate rounded-pill bg-sand/50 px-3 py-1 text-xs text-brown">
                  “{q}”
                </span>
              ) : null}
              {kategori ? (
                <span className="rounded-pill bg-sand/50 px-3 py-1 text-xs text-brown">
                  {kategoriLabel[kategori]}
                </span>
              ) : null}
              <Link
                href="/jelajahi"
                className="ml-auto inline-flex min-h-11 items-center text-xs font-medium text-brown underline-offset-4 hover:text-ink hover:underline"
              >
                Hapus filter
              </Link>
            </div>
          ) : null}

          <div className="mt-9 sm:mt-10">
            <IndonesiaMap provinsi={peta} />
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20" aria-labelledby="direktori-provinsi">
        <Container>
          <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-eyebrow uppercase text-muted">
                {adaFilter ? "Hasil filter" : "Direktori"}
              </p>
              <h2
                id="direktori-provinsi"
                className="mt-2 font-serif text-title text-ink"
              >
                {adaFilter ? "Provinsi yang cocok" : "Provinsi tersedia"}
              </h2>
            </div>
            <p className="text-sm text-muted">
              {adaFilter
                ? "Peta tetap menampilkan semua provinsi; daftar mengikuti filter."
                : "Klik wilayah di peta atau pilih kartu di bawah."}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {provinsiTampil.map((provinsi, index) => (
              <ProvinsiCard
                key={provinsi.slug}
                provinsi={provinsi}
                index={index}
              />
            ))}

            {!adaFilter ? (
              <div className="flex min-h-56 flex-col justify-between rounded-card border border-dashed border-line-strong bg-surface-muted/60 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4 text-eyebrow uppercase text-muted">
                  <span>Dalam penyusunan</span>
                  <MapPinned
                    className="size-4"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="font-serif text-[1.55rem] leading-tight text-brown">
                    Provinsi lain segera hadir
                  </h3>
                  <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-muted">
                    Peta dan konten budaya akan terus bertambah, dari Papua
                    hingga Maluku.
                  </p>
                </div>
                <p className="mt-6 text-xs text-muted">
                  Ikuti pembaruan Nusantara
                </p>
              </div>
            ) : null}
          </div>

          {adaFilter && provinsiTampil.length === 0 ? (
            <div className="mt-4 rounded-panel border border-dashed border-line-strong bg-surface-muted/60 px-6 py-10 text-center">
              <h3 className="font-serif text-2xl text-ink">
                Belum ada provinsi yang cocok
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
                Coba kata kunci lain, pilih kategori berbeda, atau tampilkan
                seluruh provinsi.
              </p>
              <Link
                href="/jelajahi"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-pill bg-ink px-5 text-sm font-medium text-canvas transition-colors duration-300 hover:bg-brown"
              >
                Tampilkan semua provinsi
              </Link>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="mt-16 sm:mt-20">
        <Container>
          <div className="flex flex-col gap-7 rounded-panel border border-line bg-sand/45 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <p className="text-eyebrow uppercase text-brown">
                Butuh titik mulai?
              </p>
              <h2 className="mt-2 font-serif text-title text-ink">
                Tanya Asisten AI tentang budaya Indonesia.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-brown">
                Dapatkan rekomendasi provinsi, cerita rakyat, atau kuliner yang
                sesuai dengan minatmu.
              </p>
            </div>
            <ButtonLink
              href="/asisten"
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
        </Container>
      </section>
    </div>
  );
}

function JelajahiSkeleton() {
  return (
    <div
      className="pb-20 sm:pb-24"
      role="status"
      aria-live="polite"
      aria-label="Memuat peta budaya"
    >
      <div aria-hidden="true">
        <section className="pt-12 sm:pt-16 lg:pt-20">
          <Container>
            <div className="max-w-3xl">
              <div className="h-3 w-32 rounded-full bg-sand/60" />
              <div className="mt-5 h-16 w-full max-w-xl rounded-2xl bg-sand/60" />
              <div className="mt-6 h-4 w-full max-w-2xl rounded-full bg-sand/50" />
              <div className="mt-2 h-4 w-2/3 max-w-xl rounded-full bg-sand/50" />
            </div>
            <div className="mt-9 h-[26rem] rounded-panel border border-line bg-surface-muted/60 sm:mt-10" />
          </Container>
        </section>
        <section className="mt-16 sm:mt-20">
          <Container>
            <div className="h-3 w-24 rounded-full bg-sand/60" />
            <div className="mt-3 h-8 w-64 max-w-full rounded-full bg-sand/60" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      <span className="sr-only">Memuat peta budaya…</span>
    </div>
  );
}
