export const KATEGORI_BUDAYA = [
  "kuliner",
  "pakaian-adat",
  "kerajinan",
  "seni-pertunjukan",
  "bahasa",
  "cerita-rakyat",
  "sejarah",
  "pariwisata",
  "musik",
] as const;

export type KategoriBudaya = (typeof KATEGORI_BUDAYA)[number];

export type EntriBudaya = {
  kategori: KategoriBudaya;
  judul: string;
  deskripsi: string;
  gambar?: string;
  sumber?: string;
};

export type Provinsi = {
  slug: string;
  nama: string;
  aktif: boolean;
  wilayah: string;
  ringkasan: string;
  hero: {
    gambar: string;
    alt: string;
  };
  budaya: EntriBudaya[];
  event?: string[];
  inovasi?: string[];
};
