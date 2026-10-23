import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { headerCopy } from "@/lib/site";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70]"
      >
        <span className="inline-flex min-h-11 items-center rounded-pill bg-ink px-5 text-sm font-medium text-canvas">
          {headerCopy.skipToContent}
        </span>
      </a>
      <SiteHeader />
      <main id="konten" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
