"use client";

import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { SearchField } from "@/components/layout/search-field";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";
import { headerCopy, isActivePath, mainNav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-soft",
          scrolled || menuOpen
            ? "border-line bg-canvas/85 backdrop-blur-md"
            : "border-transparent bg-canvas",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link
            href="/"
            aria-label={`${site.name} — Beranda`}
            className="shrink-0 rounded-sm py-1.5"
          >
            <Logo />
          </Link>

          <nav
            aria-label={headerCopy.navigationLabel}
            className="hidden xl:block"
          >
            <ul className="flex items-center gap-6 xl:gap-8">
              {mainNav.map((item) => {
                const active = isActivePath(item.href, pathname);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative inline-flex h-11 items-center text-[0.9375rem] transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-ink after:transition-transform after:duration-300 after:ease-soft hover:text-ink",
                        active
                          ? "text-ink after:scale-x-100"
                          : "text-muted after:scale-x-0 hover:after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <SearchField className="hidden sm:flex" />

            <div className="hidden md:block">
              <ButtonLink
                href="/asisten"
                icon={
                  <Sparkles
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.5}
                  />
                }
              >
                {headerCopy.primaryAction}
              </ButtonLink>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              aria-controls="menu-seluler"
              aria-label={headerCopy.menuOpen}
              className="grid size-11 place-items-center rounded-full border border-line bg-surface/70 text-ink transition-colors duration-200 hover:border-sand-deep hover:bg-sand/40 xl:hidden"
            >
              <Menu aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
