import type { Provinsi } from "./types";

export const kalimantanBarat: Provinsi = {
  slug: "kalimantan-barat",
  nama: "Kalimantan Barat",
  aktif: true,
  wilayah: "Kalimantan",
  ringkasan:
    "Kalimantan Barat merangkai budaya Melayu, Dayak, dan Tionghoa di tepi Sungai Kapuas, dengan hutan dan danau sebagai latar.",
  hero: {
    gambar: "/maps/provinsi/kalimantan-barat.svg",
    alt: "Siluet wilayah Kalimantan Barat",
  },
  budaya: [
    {
      kategori: "kuliner",
      judul: "Bubur Pedas",
      deskripsi:
        "Bubur beras dengan sayuran dan rempah, disajikan bersama bihun, kacang, dan telur; sarapan khas Pontianak.",
      sumber: "https://id.wikipedia.org/wiki/Bubur_pedas",
    },
    {
      kategori: "kerajinan",
      judul: "Tenun Ikat Sintang",
      deskripsi:
        "Kain tenun ikat dengan motif tumbuhan dan hewan, dikerjakan turun-temurun di Sintang.",
      sumber: "https://id.wikipedia.org/wiki/Tenun_ikat",
    },
    {
      kategori: "seni-pertunjukan",
      judul: "Tari Monong",
      deskripsi:
        "Tarian penyembuhan tradisional Dayak yang diiringi mantra dan bunyi alat musik.",
      sumber: "https://id.wikipedia.org/wiki/Tari_Monong",
    },
    {
      kategori: "cerita-rakyat",
      judul: "Legenda Batu Menangis",
      deskripsi:
        "Kisah anak yang durhaka kepada ibunya dan berubah menjadi batu; populer di Kalimantan Barat.",
      sumber: "https://id.wikipedia.org/wiki/Batu_Menangis",
    },
    {
      kategori: "bahasa",
      judul: "Bahasa Melayu Pontianak",
      deskripsi:
        "Bahasa Melayu lokal yang menjadi lingua franca di Pontianak dan pesisir Kalimantan Barat.",
      sumber: "https://id.wikipedia.org/wiki/Bahasa_Melayu_Pontianak",
    },
    {
      kategori: "pariwisata",
      judul: "Danau Sentarum",
      deskripsi:
        "Taman nasional lahan basah musiman di Kapuas Hulu, kaya akan ikan dan burung.",
      sumber: "https://id.wikipedia.org/wiki/Danau_Sentarum",
    },
    {
      kategori: "sejarah",
      judul: "Rumah Betang",
      deskripsi:
        "Rumah panjang komunal masyarakat Dayak, dibangun untuk keluarga besar dan kegiatan adat.",
      sumber: "https://id.wikipedia.org/wiki/Rumah_Betang",
    },
  ],
};
