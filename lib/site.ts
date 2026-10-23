export const site = {
  name: "Nusantara",
  tagline: "Budaya dalam Satu Cerita",
  description:
    "Nusantara membuat budaya Indonesia lebih mudah dijelajahi, dipahami, dan diceritakan — dari bahasa daerah dan kuliner khas hingga seni pertunjukan.",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Jelajahi", href: "/jelajahi" },
  { label: "Inovasi", href: "/inovasi" },
  { label: "Asisten AI", href: "/asisten" },
  { label: "Event", href: "/event" },
  { label: "Tentang", href: "/tentang" },
];

export const headerCopy = {
  skipToContent: "Lewati ke konten utama",
  searchLabel: "Cari budaya, provinsi, atau cerita",
  searchPlaceholder: "Cari budaya",
  menuOpen: "Buka menu navigasi",
  menuClose: "Tutup menu navigasi",
  primaryAction: "Tanya Asisten",
  navigationLabel: "Navigasi utama",
  mobileNavigationLabel: "Navigasi seluler",
} as const;

export const footerCopy = {
  eyebrow: "Nusantara — arsip budaya hidup",
  statement: "Budaya dalam satu cerita.",
  description:
    "Ruang untuk mengenal bahasa, kuliner, pakaian adat, cerita rakyat, dan inovasi budaya dari seluruh Indonesia.",
  credit:
    "Dibuat untuk Lomba Vibe Coding dengan tema Empowering Culture Through AI-Driven Innovation.",
  sourceNote:
    "Sebagian konten masih dalam peninjauan. Sumber dicantumkan bila tersedia.",
} as const;

export type FooterSection = {
  title: string;
  links: NavItem[];
};

export const footerSections: FooterSection[] = [
  {
    title: "Jelajahi",
    links: [
      { label: "Peta Indonesia", href: "/jelajahi" },
      { label: "Sumatera Utara", href: "/jelajahi/sumatera-utara" },
      { label: "Sumatera Barat", href: "/jelajahi/sumatera-barat" },
      { label: "Sumatera Selatan", href: "/jelajahi/sumatera-selatan" },
      { label: "Kalimantan Barat", href: "/jelajahi/kalimantan-barat" },
      { label: "DKI Jakarta", href: "/jelajahi/dki-jakarta" },
    ],
  },
  {
    title: "Program",
    links: [
      { label: "Inovasi budaya", href: "/inovasi" },
      { label: "Kalender event", href: "/event" },
      { label: "Asisten AI", href: "/asisten" },
    ],
  },
  {
    title: "Tentang",
    links: [
      { label: "Misi & tim", href: "/tentang" },
      { label: "Cara AI dipakai", href: "/tentang#ai" },
      { label: "Sumber & kredit", href: "/tentang#sumber" },
    ],
  },
];

export function isActivePath(href: string, pathname: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
