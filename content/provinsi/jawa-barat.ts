import type { Provinsi } from "./types";

export const jawaBarat: Provinsi = {
  slug: "jawa-barat",
  nama: "Jawa Barat",
  aktif: true,
  wilayah: "Jawa",
  ringkasan:
    "Dari angklung bambu hingga wayang golek, Jawa Barat merawat seni Sunda yang dekat dengan kehidupan sehari-hari.",
  hero: {
    gambar: "/maps/provinsi/jawa-barat.svg",
    alt: "Siluet wilayah Jawa Barat",
  },
  budaya: [
    {
      kategori: "musik",
      judul: "Angklung",
      deskripsi:
        "Alat musik bambu dari Jawa Barat yang dimainkan secara ansambel; diakui UNESCO sebagai warisan budaya takbenda.",
      sumber: "https://id.wikipedia.org/wiki/Angklung",
    },
    {
      kategori: "seni-pertunjukan",
      judul: "Wayang Golek",
      deskripsi:
        "Teater boneka kayu khas Sunda yang membawakan kisah Mahabharata dan Ramayana dengan dalang serta sinden.",
      sumber: "https://id.wikipedia.org/wiki/Wayang_golek",
    },
    {
      kategori: "seni-pertunjukan",
      judul: "Tari Jaipong",
      deskripsi:
        "Tarian Sunda yang energik, berkembang dari ketuk tilu dan pencak silat, dengan gerak pinggul dan tangan yang khas.",
      sumber: "https://id.wikipedia.org/wiki/Tari_Jaipong",
    },
    {
      kategori: "kuliner",
      judul: "Karedok",
      deskripsi:
        "Hidangan sayuran mentah dengan saus kacang bercita rasa segar; salah satu sajian khas Sunda.",
      sumber: "https://id.wikipedia.org/wiki/Karedok",
    },
    {
      kategori: "kerajinan",
      judul: "Payung Geulis",
      deskripsi:
        "Payung kertas khas Tasikmalaya dengan lukisan tangan; kerajinan ini lekat dengan warna dan motif Sunda.",
      sumber: "https://id.wikipedia.org/wiki/Payung_geulis",
    },
    {
      kategori: "cerita-rakyat",
      judul: "Sangkuriang",
      deskripsi:
        "Legenda Sunda tentang Sangkuriang dan Dayang Sumbi, yang dikaitkan dengan terbentuknya Tangkuban Perahu.",
      sumber: "https://id.wikipedia.org/wiki/Sangkuriang",
    },
    {
      kategori: "pariwisata",
      judul: "Tangkuban Perahu",
      deskripsi:
        "Gunung berapi di utara Bandung yang menjadi bagian dari lanskap budaya Sunda dan legenda Sangkuriang.",
      sumber: "https://id.wikipedia.org/wiki/Tangkuban_Perahu",
    },
    {
      kategori: "bahasa",
      judul: "Bahasa Sunda",
      deskripsi:
        "Bahasa Austronesia dengan penutur besar di Jawa Barat; memiliki tingkat tutur dan tradisi sastra lisan.",
      sumber: "https://id.wikipedia.org/wiki/Bahasa_Sunda",
    },
  ],
};
