"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { SearchField } from "@/components/layout/search-field";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";
import { headerCopy, isActivePath, mainNav } from "@/lib/site";

const EASE_SOFT: [number, number, number, number] = [0.22, 1, 0.36, 1];

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panel) {
        return;
      }

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled])',
        ),
      ).filter((element) => element.getClientRects().length > 0);

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          id="menu-seluler"
          role="dialog"
          aria-modal="true"
          aria-label={headerCopy.mobileNavigationLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: EASE_SOFT }}
          className="fixed inset-0 z-[60] flex flex-col bg-canvas xl:hidden"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5">
            <Link href="/" onClick={onClose} aria-label="Nusantara — Beranda">
              <Logo />
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={headerCopy.menuClose}
              className="grid size-11 place-items-center rounded-full border border-line bg-surface/70 text-ink transition-colors duration-200 hover:border-sand-deep hover:bg-sand/40"
            >
              <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-8 pt-5">
            <nav aria-label={headerCopy.mobileNavigationLabel}>
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.045 } },
                }}
              >
                {mainNav.map((item, index) => {
                  const active = isActivePath(item.href, pathname);

                  return (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: shouldReduceMotion ? 0 : 10,
                        },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, ease: EASE_SOFT },
                        },
                      }}
                      className="border-b border-line/80 last:border-b-0"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className="flex items-center justify-between gap-4 py-4"
                      >
                        <span className="flex items-baseline gap-3.5">
                          <span className="text-[0.625rem] font-medium tracking-[0.16em] text-muted">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={cn(
                              "font-serif text-[1.75rem] leading-tight transition-colors duration-200",
                              active ? "text-ink" : "text-brown",
                            )}
                          >
                            {item.label}
                          </span>
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-5 shrink-0 text-clay-strong"
                          strokeWidth={1.4}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </nav>

            <div className="mt-7">
              <SearchField variant="block" className="sm:max-w-md" />
            </div>

            <div className="mt-auto pt-8">
              <ButtonLink
                href="/asisten"
                onClick={onClose}
                className="w-full sm:max-w-xs"
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
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Lima provinsi tersedia, dengan konten yang terus ditambah.
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
