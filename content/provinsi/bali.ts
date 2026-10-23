import type { Provinsi } from "./types";

export const bali: Provinsi = {
  slug: "bali",
  nama: "Bali",
  aktif: true,
  wilayah: "Bali & Nusa Tenggara",
  ringkasan:
    "Di Bali, seni, ritual, dan alam menyatu dalam keseharian; dari subak hingga kecak, budaya hadir sebagai cara hidup.",
  hero: {
    gambar: "/maps/provinsi/bali.svg",
    alt: "Siluet wilayah Bali",
  },
  budaya: [
    {
      kategori: "seni-pertunjukan",
      judul: "Tari Kecak",
      deskripsi:
        "Pertunjukan vokal dan tari dari Bali yang mengangkat kisah Ramayana; puluhan penari menciptakan irama dengan suara.",
      sumber: "https://id.wikipedia.org/wiki/Tari_Kecak",
    },
    {
      kategori: "pariwisata",
      judul: "Subak",
      deskripsi:
        "Sistem irigasi tradisional Bali yang mengatur air sawah secara gotong royong; diakui UNESCO sebagai lanskap budaya.",
      sumber: "https://id.wikipedia.org/wiki/Subak",
    },
    {
      kategori: "kerajinan",
      judul: "Kain Endek",
      deskripsi:
        "Kain tenun ikat khas Bali dengan motif dan warna tradisional; sering dipakai dalam busana adat maupun sehari-hari.",
      sumber: "https://id.wikipedia.org/wiki/Endek",
    },
    {
      kategori: "kuliner",
      judul: "Babi Guling",
      deskripsi:
        "Hidangan babi panggang berbumbu yang lazim dalam upacara adat Bali dan kini juga dicari wisatawan.",
      sumber: "https://id.wikipedia.org/wiki/Babi_guling",
    },
    {
      kategori: "seni-pertunjukan",
      judul: "Ogoh-ogoh",
      deskripsi:
        "Patung raksasa yang diarak menjelang Nyepi; prosesi ini menjadi bentuk seni kolektif dan simbol pembersihan diri.",
      sumber: "https://id.wikipedia.org/wiki/Ogoh-ogoh",
    },
    {
      kategori: "sejarah",
      judul: "Kerajaan Gelgel",
      deskripsi:
        "Kerajaan yang menjadi pusat kekuasaan Bali pada abad ke-16 dan meninggalkan jejak dalam tata sosial serta seni Bali.",
      sumber: "https://id.wikipedia.org/wiki/Kerajaan_Gelgel",
    },
    {
      kategori: "bahasa",
      judul: "Bahasa Bali",
      deskripsi:
        "Bahasa Austronesia dengan tingkat tutur yang halus; tradisi tulisnya menggunakan aksara Bali.",
      sumber: "https://id.wikipedia.org/wiki/Bahasa_Bali",
    },
    {
      kategori: "cerita-rakyat",
      judul: "Calon Arang",
      deskripsi:
        "Kisah rakyat Bali tentang perempuan sakti dan pertarungannya dengan Mpu Bharada; hidup dalam sastra dan pertunjukan.",
      sumber: "https://id.wikipedia.org/wiki/Calon_Arang",
    },
  ],
};
