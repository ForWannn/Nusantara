import type { Provinsi } from "./types";

export const sumateraBarat: Provinsi = {
  slug: "sumatera-barat",
  nama: "Sumatera Barat",
  aktif: true,
  wilayah: "Sumatera",
  ringkasan:
    "Ranah Minang dengan rumah gadang, rendang, dan tradisi merantau yang membentuk identitas budayanya.",
  hero: {
    gambar: "/maps/provinsi/sumatera-barat.svg",
    alt: "Siluet wilayah Sumatera Barat",
  },
  budaya: [
    {
      kategori: "kuliner",
      judul: "Rendang",
      deskripsi:
        "Daging berbumbu santan dan rempah yang dimasak perlahan; salah satu hidangan Minangkabau yang mendunia.",
      sumber: "https://id.wikipedia.org/wiki/Rendang",
    },
    {
      kategori: "pakaian-adat",
      judul: "Pakaian Adat Minangkabau",
      deskripsi:
        "Baju kurung, songket, dan sunting membentuk busana adat Minangkabau yang dipakai dalam upacara.",
      sumber: "https://id.wikipedia.org/wiki/Pakaian_adat_Minangkabau",
    },
    {
      kategori: "kerajinan",
      judul: "Songket Minangkabau",
      deskripsi:
        "Tenun songket dengan benang emas dan motif khas Pandai Sikek, dipakai pada acara adat.",
      sumber: "https://id.wikipedia.org/wiki/Songket",
    },
    {
      kategori: "seni-pertunjukan",
      judul: "Tari Piring",
      deskripsi:
        "Tarian dengan piring di telapak tangan; gerakan cepat dan lincah menjadi simbol syukur atas panen.",
      sumber: "https://id.wikipedia.org/wiki/Tari_Piring",
    },
    {
      kategori: "bahasa",
      judul: "Bahasa Minangkabau",
      deskripsi:
        "Bahasa Austronesia yang dipakai di Sumatera Barat dan komunitas perantau Minang.",
      sumber: "https://id.wikipedia.org/wiki/Bahasa_Minangkabau",
    },
    {
      kategori: "cerita-rakyat",
      judul: "Malin Kundang",
      deskripsi:
        "Legenda anak durhaka yang dikutuk menjadi batu, dikaitkan dengan Pantai Air Manis di Padang.",
      sumber: "https://id.wikipedia.org/wiki/Malin_Kundang",
    },
    {
      kategori: "pariwisata",
      judul: "Lembah Harau",
      deskripsi:
        "Lembah dengan tebing granit dan sawah di Kabupaten Lima Puluh Kota; populer untuk panjat tebing.",
      sumber: "https://id.wikipedia.org/wiki/Lembah_Harau",
    },
  ],
};
