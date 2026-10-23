import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BudayaCard } from "@/components/provinsi/budaya-card";
import { ButtonLink, buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getProvinsi, provinsiAktif } from "@/content/provinsi";
import {
  kategoriIkon,
  kategoriLabel,
  slugBudaya,
  sumberLabel,
} from "@/lib/budaya";
import { cn } from "@/lib/cn";

type PageProps = {
  params: Promise<{ provinsi: string; budaya: string }>;
};

export function generateStaticParams() {
  return provinsiAktif.flatMap((provinsi) =>
    provinsi.budaya.map((entri) => ({
      provinsi: provinsi.slug,
      budaya: slugBudaya(entri.judul),
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { provinsi: provinsiSlug, budaya: budayaSlug } = await params;
  const provinsi = getProvinsi(provinsiSlug);
  const entri = provinsi?.budaya.find(
    (item) => slugBudaya(item.judul) === budayaSlug,
  );

  if (!provinsi || !provinsi.aktif || !entri) {
    return {
      title: "Materi tidak ditemukan",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${entri.judul} — ${provinsi.nama}`,
    description: entri.deskripsi,
    openGraph: {
      title: `${entri.judul} — ${provinsi.nama}`,
      description: entri.deskripsi,
    },
  };
}

export default async function BudayaDetailPage({ params }: PageProps) {
  const { provinsi: provinsiSlug, budaya: budayaSlug } = await params;
  const provinsi = getProvinsi(provinsiSlug);

  if (!provinsi || !provinsi.aktif) {
    notFound();
  }

  const entri = provinsi.budaya.find(
    (item) => slugBudaya(item.judul) === budayaSlug,
  );

  if (!entri) {
    notFound();
  }

  const Ikon = kategoriIkon[entri.kategori];
  const entriLain = provinsi.budaya
    .filter((item) => item.judul !== entri.judul)
    .slice(0, 3);

  return (
    <article className="pb-20 sm:pb-24">
      <section className="pt-8 sm:pt-12">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted"
          >
            <Link
              href="/jelajahi"
              className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Jelajahi
            </Link>
            <span aria-hidden="true" className="text-line-strong">
              /
            </span>
            <Link
              href={`/jelajahi/${provinsi.slug}`}
              className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {provinsi.nama}
            </Link>
            <span aria-hidden="true" className="text-line-strong">
              /
            </span>
            <span aria-current="page" className="text-brown">
              {entri.judul}
            </span>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-14">
            <div>
              <p className="text-eyebrow uppercase text-clay-strong">
                {kategoriLabel[entri.kategori]} · {provinsi.nama}
              </p>
              <h1 className="mt-5 font-serif text-display text-ink">
                {entri.judul}
              </h1>
              <p className="mt-6 max-w-2xl text-lead text-muted">
                {entri.deskripsi}
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
                  href={`/jelajahi/${provinsi.slug}`}
                  className={cn(buttonStyles("outline"), "shrink-0")}
                >
                  Kembali ke {provinsi.nama}
                </Link>
              </div>
            </div>

            <aside className="rounded-panel border border-line bg-sand/35 p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-surface text-clay-strong">
                  <Ikon className="size-4" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="text-eyebrow uppercase text-brown">
                  {kategoriLabel[entri.kategori]}
                </span>
              </div>

              <p className="mt-6 text-eyebrow uppercase text-brown">Provinsi</p>
              <p className="mt-2 font-serif text-2xl text-ink">
                {provinsi.nama}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brown">
                {provinsi.ringkasan}
              </p>
              <Link
                href={`/jelajahi/${provinsi.slug}`}
                className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-brown underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                Jelajahi provinsi
                <ArrowUpRight
                  className="size-3.5"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      <section className="mt-16 sm:mt-20" aria-labelledby="sumber-budaya">
        <Container>
          <div className="rounded-panel border border-line bg-surface p-6 shadow-soft sm:p-8">
            <p className="text-eyebrow uppercase text-muted">Sumber</p>
            <h2
              id="sumber-budaya"
              className="mt-2 font-serif text-2xl text-ink"
            >
              Baca lebih lanjut
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Materi di halaman ini adalah ringkasan. Buka sumber asli untuk
              bacaan lengkap dan konteks yang lebih luas.
            </p>
            {entri.sumber ? (
              <a
                href={entri.sumber}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-pill border border-line px-5 text-sm font-medium text-brown transition-colors hover:border-clay hover:text-ink"
              >
                Sumber: {sumberLabel(entri.sumber)}
                <ArrowUpRight
                  className="size-4"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </a>
            ) : (
              <p className="mt-4 text-sm text-muted">
                Sumber belum dicantumkan.
              </p>
            )}
          </div>
        </Container>
      </section>

      {entriLain.length > 0 ? (
        <section className="mt-16 sm:mt-20" aria-labelledby="entri-lain">
          <Container>
            <div className="border-b border-line pb-5">
              <p className="text-eyebrow uppercase text-muted">
                Masih di {provinsi.nama}
              </p>
              <h2
                id="entri-lain"
                className="mt-2 font-serif text-title text-ink"
              >
                Jelajahi entri lain
              </h2>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {entriLain.map((item) => (
                <BudayaCard
                  key={`${item.kategori}-${item.judul}`}
                  entri={item}
                  provinsiSlug={provinsi.slug}
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  );
}
