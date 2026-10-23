import {
  ArrowUpRight,
  BookOpen,
  Compass,
  Database,
  FileText,
  Landmark,
  MapPinned,
  Scale,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Misi, tema lomba, cara AI dipakai, dan catatan sumber proyek Nusantara: arsip budaya Indonesia yang mudah dijelajahi.",
};

const misi = [
  {
    ikon: Compass,
    judul: "Mudah dimulai",
    teks: "Budaya Indonesia luas; Nusantara menyediakan titik masuk yang jelas lewat peta, kategori, dan cerita singkat.",
  },
  {
    ikon: Scale,
    judul: "Akurat dan terbuka",
    teks: "Setiap materi berusaha menyertakan sumber. Ketidakpastian, jadwal indikatif, dan batasan ditandai terbuka.",
  },
  {
    ikon: Users,
    judul: "Untuk banyak orang",
    teks: "Antarmuka dibangun mobile-first, dapat diakses dengan keyboard, dan menghormati preferensi gerak pengguna.",
  },
];

const peran = [
  {
    judul: "Riset & kurasi budaya",
    teks: "Memilih materi, menulis ringkasan, dan mencocokkan sumber tiap entri.",
  },
  {
    judul: "Desain & front-end",
    teks: "Menyusun sistem visual, peta interaktif, tipografi, dan responsivitas.",
  },
  {
    judul: "AI & data",
    teks: "Merancang pencarian arsip, lapisan penyedia AI, dan alur jawaban bersumber.",
  },
  {
    judul: "Aksesibilitas & QA",
    teks: "Menguji keyboard, kontras, pembaca layar, performa, dan berbagai ukuran layar.",
  },
];

export default function TentangPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-eyebrow uppercase text-clay-strong">
              Tentang · Nusantara
            </p>
            <h1 className="mt-5 font-serif text-display text-ink">
              Budaya yang mudah{" "}
              <span className="text-clay-strong">didekati.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lead text-muted">
              Nusantara adalah arsip budaya hidup: ruang untuk mengenal bahasa,
              kuliner, pakaian adat, cerita rakyat, dan inovasi budaya dari
              seluruh Indonesia — tanpa harus tahu istilah pencarian yang tepat.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {misi.map((item) => {
              const Ikon = item.ikon;

              return (
                <article
                  key={item.judul}
                  className="rounded-card border border-line bg-surface p-5 shadow-soft sm:p-6"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-sand/55 text-clay-strong">
                    <Ikon
                      className="size-5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <h2 className="mt-5 font-serif text-xl leading-snug text-ink">
                    {item.judul}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.teks}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20">
        <Container>
          <div className="overflow-hidden rounded-panel bg-ink px-6 py-10 text-canvas sm:px-10 sm:py-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
              <div>
                <p className="text-eyebrow uppercase text-sand/75">
                  Tema lomba
                </p>
                <h2 className="mt-4 max-w-3xl font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-canvas">
                  Empowering Culture Through AI-Driven Innovation
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-canvas/70">
                  Nusantara memakai AI pada dua sisi: sebagai alat bantu saat
                  membangun situs, dan sebagai fitur Asisten Budaya yang
                  menjawab pertanyaan dengan konteks dari arsip. Manusia tetap
                  memegang keputusan akhir tentang isi dan sumber.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href="/asisten" variant="inverse">
                  Coba Asisten AI
                </ButtonLink>
                <ButtonLink
                  href="/jelajahi"
                  variant="inverse-outline"
                >
                  Jelajahi peta
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="ai"
        className="mt-16 scroll-mt-24 sm:mt-20"
        aria-labelledby="cara-ai"
      >
        <Container>
          <div className="max-w-2xl">
            <p className="text-eyebrow uppercase text-muted">Cara AI dipakai</p>
            <h2
              id="cara-ai"
              className="mt-2 font-serif text-title text-ink"
            >
              AI sebagai alat bantu, bukan pengganti sumber.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Kami memisahkan dua peran: AI dalam proses pengembangan dan AI
              dalam produk. Keduanya punya batas yang jelas.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-card border border-line bg-surface p-5 shadow-soft sm:p-7">
              <div className="flex items-center gap-2 text-eyebrow uppercase text-clay-strong">
                <Sparkles
                  className="size-4"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                Saat membangun
              </div>
              <h3 className="mt-4 font-serif text-2xl text-ink">
                Riset, draf, dan pemeriksaan
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li className="flex gap-2">
                  <BookOpen
                    className="mt-1 size-3.5 shrink-0 text-clay-strong"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  Membantu merangkum bahan dan menyusun draf konten dari sumber
                  yang dipilih.
                </li>
                <li className="flex gap-2">
                  <FileText
                    className="mt-1 size-3.5 shrink-0 text-clay-strong"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  Membantu menulis kode, dokumentasi, dan pengujian; hasilnya
                  ditinjau manusia.
                </li>
                <li className="flex gap-2">
                  <ShieldCheck
                    className="mt-1 size-3.5 shrink-0 text-clay-strong"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  Klaim yang belum terverifikasi tidak dipakai sebagai fakta.
                </li>
              </ul>
            </article>

            <article className="rounded-card border border-line bg-surface p-5 shadow-soft sm:p-7">
              <div className="flex items-center gap-2 text-eyebrow uppercase text-clay-strong">
                <Server
                  className="size-4"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                Di dalam produk
              </div>
              <h3 className="mt-4 font-serif text-2xl text-ink">
                Asisten yang berpijak pada arsip
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li className="flex gap-2">
                  <Database
                    className="mt-1 size-3.5 shrink-0 text-clay-strong"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  Pencarian sederhana mengambil materi paling relevan dari
                  konten provinsi, inovasi, dan event.
                </li>
                <li className="flex gap-2">
                  <Server
                    className="mt-1 size-3.5 shrink-0 text-clay-strong"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  Panggilan ke penyedia AI hanya dari server; API key tidak
                  pernah dikirim ke browser.
                </li>
                <li className="flex gap-2">
                  <ShieldCheck
                    className="mt-1 size-3.5 shrink-0 text-clay-strong"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  Ada batas panjang pesan dan laju permintaan. Bila penyedia AI
                  tidak tersedia, asisten memakai jawaban dari arsip lokal.
                </li>
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section
        id="sumber"
        className="mt-16 scroll-mt-24 sm:mt-20"
        aria-labelledby="sumber-kredit"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
            <div>
              <p className="text-eyebrow uppercase text-muted">
                Sumber & kredit
              </p>
              <h2
                id="sumber-kredit"
                className="mt-2 font-serif text-title text-ink"
              >
                Catatan yang perlu dibaca.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                <p>
                  Materi budaya merujuk pada Wikipedia bahasa Indonesia,
                  situs resmi praktisi atau penyelenggara, dan publikasi
                  budaya. Tautan sumber
                  tercantum pada tiap entri budaya, kartu inovasi, dan agenda
                  event. Konten akan ditinjau dan dilengkapi secara berkala.
                </p>
                <p>
                  Batas wilayah pada peta dan siluet provinsi menggunakan data
                  Natural Earth 1:50m (domain publik). Peta tidak dimaksudkan
                  sebagai rujukan batas administratif resmi.
                </p>
                <p>
                  Jadwal festival disimpan sebagai bulan perayaan. Tanggal pasti
                  dapat berubah setiap tahun; agenda bertanda indikatif perlu
                  diverifikasi ke penyelenggara.
                </p>
                <p>
                  Tipografi memakai Playfair Display dan Plus Jakarta Sans
                  melalui Google Fonts. Ikon menggunakan Lucide. Tidak ada
                  gambar budaya berhak cipta yang dipakai tanpa kredit.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://www.naturalearthdata.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-brown underline-offset-4 hover:text-ink hover:underline"
                >
                  Natural Earth
                  <ArrowUpRight
                    className="size-3.5"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://id.wikipedia.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-brown underline-offset-4 hover:text-ink hover:underline"
                >
                  Wikipedia bahasa Indonesia
                  <ArrowUpRight
                    className="size-3.5"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <aside className="rounded-panel border border-line bg-sand/45 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-eyebrow uppercase text-brown">
                <Landmark
                  className="size-4"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                Prinsip konten
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-brown">
                <li>Jangan mengarang fakta budaya.</li>
                <li>Tandai jadwal yang belum pasti.</li>
                <li>Sertakan sumber bila tersedia.</li>
                <li>Perbarui bila ada koreksi dari komunitas.</li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20" aria-labelledby="tim-nusantara">
        <Container>
          <div className="border-b border-line pb-5">
            <p className="text-eyebrow uppercase text-muted">Tim</p>
            <h2
              id="tim-nusantara"
              className="mt-2 font-serif text-title text-ink"
            >
              Tim Nusantara
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Proyek ini dikerjakan untuk Lomba Vibe Coding dengan tema
              Empowering Culture Through AI-Driven Innovation.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {peran.map((item, index) => (
              <article
                key={item.judul}
                className="rounded-card border border-line bg-surface p-5"
              >
                <span className="text-[0.625rem] font-medium tracking-[0.16em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-xl leading-snug text-ink">
                  {item.judul}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {item.teks}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20">
        <Container>
          <div className="flex flex-col gap-7 rounded-panel border border-line bg-sand/45 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <p className="text-eyebrow uppercase text-brown">
                Mulai dari satu cerita
              </p>
              <h2 className="mt-2 font-serif text-title text-ink">
                Ada budaya yang ingin kamu kenal lebih dekat?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-brown">
                Pilih provinsi di peta atau ajukan pertanyaan langsung ke
                Asisten Nusantara.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <ButtonLink
                href="/jelajahi"
                icon={
                  <MapPinned
                    className="size-4"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                }
              >
                Buka peta
              </ButtonLink>
              <ButtonLink href="/asisten" variant="outline">
                Tanya Asisten
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
