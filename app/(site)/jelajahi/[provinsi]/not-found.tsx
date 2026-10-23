import { ArrowLeft, MapPinned } from "lucide-react";
import Link from "next/link";

import { ButtonLink, buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

export default function ProvinsiNotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow uppercase text-clay-strong">
            404 · Provinsi
          </p>
          <h1 className="mt-5 font-serif text-display text-ink">
            Provinsi ini belum ada di peta.
          </h1>
          <p className="mt-5 text-lead text-muted">
            Mungkin tautannya berubah, atau provinsi tersebut belum tersedia.
            Kembali ke peta untuk melihat lima provinsi yang bisa dijelajahi
            sekarang.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
              Kembali ke peta
            </ButtonLink>
            <Link
              href="/"
              className={cn(buttonStyles("outline"), "shrink-0")}
            >
              <ArrowLeft className="size-4" strokeWidth={1.6} aria-hidden="true" />
              Beranda
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
