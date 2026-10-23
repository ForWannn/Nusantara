import { ArrowUpRight, CalendarDays, MapPinned } from "lucide-react";
import type { Metadata } from "next";

import { EventExplorer } from "@/components/event/event-explorer";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { eventList } from "@/content/event";

export const metadata: Metadata = {
  title: "Event",
  description:
    "Kalender festival dan agenda budaya Indonesia: bulan perayaan, provinsi, dan catatan jadwal indikatif.",
};

export default function EventPage() {
  const jumlahProvinsi = new Set(eventList.map((item) => item.provinsiNama)).size;
  const jumlahBulan = new Set(eventList.flatMap((item) => item.bulan)).size;

  return (
    <div className="pb-20 sm:pb-24">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-16">
            <div>
              <p className="text-eyebrow uppercase text-clay-strong">
                Event · Kalender budaya
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-display text-ink">
                Bertemu budaya,{" "}
                <span className="text-clay-strong">sepanjang tahun.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lead text-muted">
                Festival adalah cara budaya dirayakan bersama. Telusuri agenda
                tahunan berdasarkan bulan dan provinsi, lalu buka kembali
                ceritanya di peta.
              </p>
              <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-brown">
                <span>{eventList.length} agenda</span>
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
                <span>{jumlahProvinsi} provinsi</span>
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
                <span>{jumlahBulan} bulan</span>
              </p>
            </div>

            <aside className="rounded-panel border border-line bg-sand/45 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-eyebrow uppercase text-brown">
                <CalendarDays
                  className="size-4"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                Jadwal indikatif
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brown">
                Bulan perayaan disusun dari pola tahunan festival. Tanggal pasti
                dapat berubah setiap tahun dan perlu dicek ke penyelenggara.
              </p>
              <p className="mt-4 border-t border-brown/15 pt-4 text-xs leading-relaxed text-brown">
                Agenda disusun untuk membantu perencanaan, bukan sebagai
                pengumuman resmi.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="mt-14 sm:mt-16" aria-labelledby="daftar-event">
        <Container>
          <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-eyebrow uppercase text-muted">Agenda</p>
              <h2
                id="daftar-event"
                className="mt-2 font-serif text-title text-ink"
              >
                Festival dan pertemuan budaya
              </h2>
            </div>
            <p className="text-sm text-muted">
              Saring berdasarkan provinsi dan bulan.
            </p>
          </div>

          <div className="mt-6">
            <EventExplorer items={eventList} />
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20">
        <Container>
          <div className="flex flex-col gap-7 rounded-panel border border-line bg-sand/45 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <p className="text-eyebrow uppercase text-brown">
                Rencanakan perjalanan
              </p>
              <h2 className="mt-2 font-serif text-title text-ink">
                Mulai dari provinsi, lalu temukan ceritanya.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-brown">
                Setiap festival berakar pada tradisi setempat. Buka peta untuk
                mengenal kuliner, seni, dan sejarah di sekitarnya.
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

          <div className="mt-8 flex flex-col gap-3 text-xs leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl">
              Sumber: situs resmi, publikasi budaya, dan Wikipedia bahasa Indonesia,
              tercantum pada tiap agenda. Jadwal akan diperbarui bila tanggal
              resmi tersedia.
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
