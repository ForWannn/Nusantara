import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { provinsiAktif } from "@/content/provinsi";
import { footerCopy, footerSections } from "@/lib/site";

export function SiteFooter() {
  const sections = footerSections.map((section) =>
    section.title === "Jelajahi"
      ? {
          ...section,
          links: [
            { label: "Peta Indonesia", href: "/jelajahi" },
            ...provinsiAktif.map((provinsi) => ({
              label: provinsi.nama,
              href: `/jelajahi/${provinsi.slug}`,
            })),
          ],
        }
      : section,
  );

  return (
    <footer className="mt-20 bg-ink text-canvas sm:mt-24">
      <Container className="pb-8 pt-10 lg:pb-10 lg:pt-12">
        <div className="flex items-center justify-between gap-6 border-b border-canvas/10 pb-6">
          <p className="text-eyebrow uppercase text-sand/75">
            {footerCopy.eyebrow}
          </p>
          <p className="hidden text-eyebrow uppercase text-sand/70 sm:block">
            2026
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-12 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))] lg:gap-10">
          <div className="col-span-2 max-w-sm sm:col-span-3 lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-7 font-serif text-[2rem] leading-[1.1] tracking-[-0.015em] text-canvas">
              {footerCopy.statement}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-canvas/65">
              {footerCopy.description}
            </p>
          </div>

          {sections.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h2 className="text-eyebrow uppercase text-sand/75">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-0.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-canvas/70 transition-colors duration-200 hover:text-canvas"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-3 -translate-y-px opacity-0 transition-opacity duration-200 group-hover:opacity-70"
                        strokeWidth={1.6}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-canvas/10 pt-6 text-xs leading-relaxed text-canvas/60 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <p className="max-w-xl">
            © 2026 Nusantara. {footerCopy.credit}
          </p>
          <p className="max-w-xs sm:text-right">{footerCopy.sourceNote}</p>
        </div>
      </Container>
    </footer>
  );
}
