import {
  ArrowUpRight,
  BookOpen,
  MapPinned,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { ChatAsisten } from "@/components/asisten/chat-asisten";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { eventList } from "@/content/event";
import { inovasiList } from "@/content/inovasi";
import { getProvinsi, provinsiAktif } from "@/content/provinsi";
import { getAiMode } from "@/lib/ai";

type PageProps = {
  searchParams: Promise<{ provinsi?: string | string[] }>;
};

export const metadata: Metadata = {
  title: "Asisten AI",
  description:
    "Tanyakan budaya Indonesia kepada Asisten Nusantara: provinsi, kuliner, seni, cerita rakyat, inovasi, dan agenda budaya dengan sumber dari arsip.",
};

const langkah = [
  {
    judul: "Pertanyaanmu",
    teks: "Sebutkan topik, provinsi, atau nama budaya yang ingin kamu ketahui.",
  },
  {
    judul: "Penelusuran arsip",
    teks: "Sistem mencari materi yang paling relevan dari konten Nusantara.",
  },
  {
    judul: "Jawaban + sumber",
    teks: "Jawaban disusun dari konteks itu; tautan sumber ditampilkan bila ada.",
  },
];

export default function AsistenPage({ searchParams }: PageProps) {
  return (
    <Suspense fallback={<AsistenSkeleton />}>
      <AsistenContent searchParams={searchParams} />
    </Suspense>
  );
}

async function AsistenContent({ searchParams }: PageProps) {
  const params = await searchParams;
  const slug =
    typeof params.provinsi === "string" ? params.provinsi : undefined;
  const provinsi = slug ? getProvinsi(slug) : undefined;
  const konteksProvinsi =
    provinsi && provinsi.aktif
      ? { slug: provinsi.slug, nama: provinsi.nama }
      : null;
  const mode = getAiMode();
  const jumlahMateri = provinsiAktif.reduce(
    (total, item) => total + item.budaya.length,
    0,
  );

  return (
    <div className="pb-20 sm:pb-24">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-eyebrow uppercase text-clay-strong">
              Asisten AI · Berbasis arsip
            </p>
            <h1 className="mt-5 font-serif text-display text-ink">
              Tanya budaya,{" "}
              <span className="text-clay-strong">temukan cerita.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lead text-muted">
              Dari istilah daerah sampai rekomendasi festival, Asisten
              Nusantara membantu menemukan titik mulai. Jawaban diambil dari
              arsip budaya dan sumbernya ditampilkan.
            </p>
            <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-brown">
              <span>{provinsiAktif.length} provinsi</span>
              <span aria-hidden="true" className="text-line-strong">
                /
              </span>
              <span>{jumlahMateri} materi budaya</span>
              <span aria-hidden="true" className="text-line-strong">
                /
              </span>
              <span>{inovasiList.length} inovasi</span>
              <span aria-hidden="true" className="text-line-strong">
                /
              </span>
              <span>{eventList.length} agenda</span>
            </p>
          </div>
        </Container>
      </section>

      <section className="mt-10 sm:mt-12" aria-labelledby="asisten-chat">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-10">
            <div>
              <h2 id="asisten-chat" className="sr-only">
                Percakapan dengan Asisten Nusantara
              </h2>
              <ChatAsisten initialProvinsi={konteksProvinsi} />
            </div>

            <aside className="space-y-4">
              {konteksProvinsi ? (
                <div className="rounded-panel border border-line bg-sand/50 p-5">
                  <p className="text-eyebrow uppercase text-brown">
                    Konteks aktif
                  </p>
                  <h2 className="mt-2 font-serif text-2xl text-ink">
                    {konteksProvinsi.nama}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-brown">
                    Pertanyaan awal sudah disiapkan. Kamu bisa mengubahnya
                    sebelum mengirim.
                  </p>
                  <Link
                    href={`/jelajahi/${konteksProvinsi.slug}`}
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-brown underline-offset-4 hover:text-ink hover:underline"
                  >
                    Buka halaman provinsi
                    <ArrowUpRight
                      className="size-3.5"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              ) : null}

              <div className="rounded-panel border border-line bg-surface p-5 shadow-soft">
                <div className="flex items-center gap-2 text-eyebrow uppercase text-muted">
                  <MessageCircle
                    className="size-4"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  Cara kerja
                </div>
                <ol className="mt-4 space-y-4">
                  {langkah.map((item, index) => (
                    <li key={item.judul} className="flex gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sand/60 text-[0.625rem] font-semibold text-brown">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">
                          {item.judul}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {item.teks}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-panel border border-line bg-surface p-5">
                <div className="flex items-center gap-2 text-eyebrow uppercase text-muted">
                  <ShieldCheck
                    className="size-4"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  Batasan
                </div>
                <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-muted">
                  <li className="flex gap-2">
                    <BookOpen
                      className="mt-0.5 size-3.5 shrink-0 text-clay-strong"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    Jawaban dapat keliru. Periksa sumber sebelum mengutip.
                  </li>
                  <li className="flex gap-2">
                    <Search
                      className="mt-0.5 size-3.5 shrink-0 text-clay-strong"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    Jadwal festival bersifat indikatif; cek pengumuman resmi.
                  </li>
                  <li className="flex gap-2">
                    <Sparkles
                      className="mt-0.5 size-3.5 shrink-0 text-clay-strong"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    {mode === "ai"
                      ? "Penyedia AI aktif. Jawaban tetap dibatasi pada konteks arsip."
                      : "Mode arsip lokal aktif: jawaban disusun dari konten Nusantara tanpa API key."}
                  </li>
                </ul>
              </div>

              <div className="rounded-panel border border-line bg-surface-muted/60 p-5">
                <p className="text-eyebrow uppercase text-muted">
                  Mulai dari peta
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brown">
                  Belum tahu mau bertanya apa? Telusuri provinsi lebih dulu,
                  lalu bawa pertanyaanmu ke sini.
                </p>
                <ButtonLink
                  href="/jelajahi"
                  variant="outline"
                  className="mt-4 w-full"
                  icon={
                    <MapPinned
                      className="size-4"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  }
                >
                  Buka peta budaya
                </ButtonLink>
              </div>
            </aside>
          </div>

          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted">
            Riwayat percakapan hanya tersimpan di browser selama halaman ini
            terbuka. Asisten tidak digunakan untuk membuat profil pengguna.
          </p>
        </Container>
      </section>
    </div>
  );
}

function AsistenSkeleton() {
  return (
    <div
      className="pb-20 sm:pb-24"
      role="status"
      aria-live="polite"
      aria-label="Memuat Asisten AI"
    >
      <div aria-hidden="true">
        <section className="pt-12 sm:pt-16 lg:pt-20">
          <Container>
            <div className="max-w-3xl">
              <div className="h-3 w-36 rounded-full bg-sand/60" />
              <div className="mt-5 h-16 w-full max-w-xl rounded-2xl bg-sand/60" />
              <div className="mt-6 h-4 w-full max-w-2xl rounded-full bg-sand/50" />
              <div className="mt-2 h-4 w-2/3 max-w-xl rounded-full bg-sand/50" />
            </div>
          </Container>
        </section>
        <section className="mt-10 sm:mt-12">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10">
              <div className="h-[34rem] rounded-panel border border-line bg-surface-muted/60" />
              <div className="space-y-4">
                <div className="h-48 rounded-panel border border-line bg-surface-muted/60" />
                <div className="h-48 rounded-panel border border-line bg-surface-muted/60" />
              </div>
            </div>
          </Container>
        </section>
      </div>
      <span className="sr-only">Memuat Asisten AI…</span>
    </div>
  );
}
