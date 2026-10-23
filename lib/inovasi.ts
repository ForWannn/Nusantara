import {
  Armchair,
  Building2,
  Clapperboard,
  Cpu,
  Music,
  Shapes,
  Shirt,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import type { KategoriInovasi } from "@/content/inovasi";

export const inovasiKategoriLabel: Record<KategoriInovasi, string> = {
  fesyen: "Fesyen",
  kerajinan: "Kerajinan",
  kuliner: "Kuliner",
  teknologi: "Teknologi",
  "desain-produk": "Desain produk",
  arsitektur: "Arsitektur",
  "media-kreatif": "Media kreatif",
  musik: "Musik",
};

export const inovasiKategoriIkon: Record<KategoriInovasi, LucideIcon> = {
  fesyen: Shirt,
  kerajinan: Shapes,
  kuliner: UtensilsCrossed,
  teknologi: Cpu,
  "desain-produk": Armchair,
  arsitektur: Building2,
  "media-kreatif": Clapperboard,
  musik: Music,
};
