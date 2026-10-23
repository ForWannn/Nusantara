import {
  BookOpen,
  Drama,
  Landmark,
  Languages,
  MapPinned,
  Music,
  Shapes,
  Shirt,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import type { KategoriBudaya } from "@/content/provinsi/types";

export const kategoriLabel: Record<KategoriBudaya, string> = {
  kuliner: "Kuliner",
  "pakaian-adat": "Pakaian adat",
  kerajinan: "Kerajinan",
  "seni-pertunjukan": "Seni pertunjukan",
  bahasa: "Bahasa daerah",
  "cerita-rakyat": "Cerita rakyat",
  sejarah: "Sejarah",
  pariwisata: "Pariwisata budaya",
  musik: "Musik",
};

export const kategoriIkon: Record<KategoriBudaya, LucideIcon> = {
  kuliner: UtensilsCrossed,
  "pakaian-adat": Shirt,
  kerajinan: Shapes,
  "seni-pertunjukan": Drama,
  bahasa: Languages,
  "cerita-rakyat": BookOpen,
  sejarah: Landmark,
  pariwisata: MapPinned,
  musik: Music,
};

export function sumberLabel(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return host === "id.wikipedia.org" ? "Wikipedia" : host;
  } catch {
    return "Sumber";
  }
}

export function slugBudaya(judul: string): string {
  return judul
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
