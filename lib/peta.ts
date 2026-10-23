import {
  PETA_VIEWBOX,
  PROVINSI_GEO,
  type ProvinsiGeo,
} from "@/content/peta/indonesia";

export { PETA_VIEWBOX, PROVINSI_GEO };
export type { ProvinsiGeo };

export type LabelAnchor = "start" | "middle" | "end";

export type LabelLayout = {
  /** Titik jangkar teks dalam koordinat peta. */
  x: number;
  y: number;
  anchor: LabelAnchor;
};

/*
 * Posisi label aktif disusun manual agar tidak bertabrakan dan garis penunjuk
 * tetap pendek. Provinsi baru tanpa entri di sini akan memakai label di atas
 * titik pusatnya.
 */
export const labelPeta: Record<string, LabelLayout> = {
  aceh: { x: 14, y: 120, anchor: "start" },
  "sumatera-utara": { x: 72, y: 46, anchor: "start" },
  "sumatera-barat": { x: 58, y: 285, anchor: "start" },
  "sumatera-selatan": { x: 234, y: 356, anchor: "middle" },
  "kalimantan-barat": { x: 432, y: 72, anchor: "start" },
  "dki-jakarta": { x: 332, y: 252, anchor: "start" },
  "jawa-barat": { x: 350, y: 380, anchor: "start" },
  bali: { x: 500, y: 380, anchor: "start" },
  "sulawesi-selatan": { x: 600, y: 380, anchor: "start" },
};

export function getProvinsiGeo(slug: string): ProvinsiGeo | undefined {
  return PROVINSI_GEO.find((provinsi) => provinsi.slug === slug);
}

export function labelUntuk(geo: ProvinsiGeo): LabelLayout {
  return (
    labelPeta[geo.slug] ?? {
      x: geo.cx,
      y: geo.cy - 22,
      anchor: "middle",
    }
  );
}

/** Ujung garis penunjuk, diberi jarak kecil dari teks label. */
export function ujungGaris(label: LabelLayout): { x: number; y: number } {
  if (label.anchor === "start") {
    return { x: label.x - 8, y: label.y };
  }

  if (label.anchor === "end") {
    return { x: label.x + 8, y: label.y };
  }

  return { x: label.x, y: label.y - 12 };
}

export function persen(nilai: number, total: number): string {
  return `${(nilai / total) * 100}%`;
}
