import { ArrowUpRight, Layers3, Sparkles } from "lucide-react";
import type { Metadata } from "next";

import { InovasiGaleri } from "@/components/inovasi/inovasi-galeri";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { inovasiList } from "@/content/inovasi";

export const metadata: Metadata = {
  title: "Inovasi",
  description:
    "Galeri inovasi budaya Indonesia kontemporer: fesyen, kerajinan, kuliner, teknologi, arsitektur, dan media kreatif yang merawat tradisi.",
};

export default function InovasiPage() {
  const jumlahKategori = new Set(inovasiList.map((item) => item.kategori)).size;
  const jumlahDaerah = new Set(inovasiList.map((item) => item.daerah)).size;

  return (
    <div className="pb-20 sm:pb-24">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-16">
            <div>
              <p className="text-eyebrow uppercase text-clay-strong">
                Inovasi · Budaya yang bergerak
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-display text-ink">
                Tradisi yang terus{" "}
                <span className="text-clay-strong">berkembang.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lead text-muted">
                Warisan budaya tidak berhenti di masa lalu. Galeri ini
                mengumpulkan praktik kontemporer yang mengolah bahan, bunyi,
                cerita, dan ruang Nusantara dengan cara baru.
              </p>
              <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-brown">
                <span>{inovasiList.length} praktik</span>
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
                <span>{jumlahKategori} kategori</span>
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
                <span>{jumlahDaerah} daerah</span>
              </p>
            </div>

            <aside className="rounded-panel border border-line bg-sand/45 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-eyebrow uppercase text-brown">
                <Layers3 className="size-4" strokeWidth={1.6} aria-hidden="true" />
                Cara membaca galeri
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brown">
                Ini adalah kurasi contoh, bukan peringkat. Setiap kartu
                mencantumkan pelaku, daerah, dan sumber agar bisa ditelusuri
                lebih jauh.
              </p>
              <p className="mt-4 border-t border-brown/15 pt-4 text-xs leading-relaxed text-brown">
                Kategori dan tahun membantu menelusuri konteks; tahun tidak
                selalu menandai awal praktik.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="mt-14 sm:mt-16" aria-labelledby="galeri-inovasi">
        <Container>
          <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-eyebrow uppercase text-muted">Galeri</p>
              <h2
                id="galeri-inovasi"
                className="mt-2 font-serif text-title text-ink"
              >
                Inovasi budaya kontemporer
              </h2>
            </div>
            <p className="text-sm text-muted">
              Saring berdasarkan kategori, daerah, atau urutan.
            </p>
          </div>

          <div className="mt-6">
            <InovasiGaleri items={inovasiList} />
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20">
        <Container>
          <div className="flex flex-col gap-7 rounded-panel border border-line bg-sand/45 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <p className="text-eyebrow uppercase text-brown">
                Inovasi berikutnya
              </p>
              <h2 className="mt-2 font-serif text-title text-ink">
                Temukan tradisi di balik sebuah karya.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-brown">
                Tanyakan asal-usul, bahan, atau cerita di balik inovasi yang
                membuatmu penasaran.
              </p>
            </div>
            <ButtonLink
              href="/asisten"
              className="shrink-0"
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
          </div>

          <div className="mt-8 flex flex-col gap-3 text-xs leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl">
              Sumber: situs resmi praktisi, publikasi budaya, dan Wikipedia bahasa Indonesia,
              tercantum pada tiap kartu. Kurasi ini akan ditinjau dan
              dilengkapi.
            </p>
            <a
              href="/tentang#sumber"
              className="inline-flex min-h-11 items-center gap-1.5 font-medium text-brown underline-offset-4 hover:text-ink hover:underline"
            >
              Catatan sumber
              <ArrowUpRight
                className="size-3.5"
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
