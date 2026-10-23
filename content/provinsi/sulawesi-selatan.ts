import type { Provinsi } from "./types";

export const sulawesiSelatan: Provinsi = {
  slug: "sulawesi-selatan",
  nama: "Sulawesi Selatan",
  aktif: true,
  wilayah: "Sulawesi",
  ringkasan:
    "Dari perahu pinisi hingga tari pakarena, Sulawesi Selatan menyimpan budaya maritim dan jejak kerajaan Bugis-Makassar.",
  hero: {
    gambar: "/maps/provinsi/sulawesi-selatan.svg",
    alt: "Siluet wilayah Sulawesi Selatan",
  },
  budaya: [
    {
      kategori: "kerajinan",
      judul: "Perahu Pinisi",
      deskripsi:
        "Perahu layar tradisional Bugis-Makassar; seni pembuatannya diakui UNESCO sebagai warisan budaya takbenda.",
      sumber: "https://id.wikipedia.org/wiki/Pinisi",
    },
    {
      kategori: "seni-pertunjukan",
      judul: "Tari Pakarena",
      deskripsi:
        "Tarian Makassar yang lembut dan berkelas, dibawakan dengan kipas sebagai bagian dari penyambutan tamu.",
      sumber: "https://id.wikipedia.org/wiki/Tari_Pakarena",
    },
    {
      kategori: "pakaian-adat",
      judul: "Baju Bodo",
      deskripsi:
        "Busana tradisional Bugis-Makassar untuk perempuan; warna dan potongannya dahulu menandai usia serta peran sosial.",
      sumber: "https://id.wikipedia.org/wiki/Baju_Bodo",
    },
    {
      kategori: "kuliner",
      judul: "Coto Makassar",
      deskripsi:
        "Sup daging dengan bumbu kacang dan rempah, disajikan bersama ketupat atau burasa; salah satu ikon kuliner Makassar.",
      sumber: "https://id.wikipedia.org/wiki/Coto_Makassar",
    },
    {
      kategori: "cerita-rakyat",
      judul: "La Galigo",
      deskripsi:
        "Epos Bugis tentang Sawerigading dan dunia para dewa; salah satu karya sastra lisan terpanjang di dunia.",
      sumber: "https://id.wikipedia.org/wiki/La_Galigo",
    },
    {
      kategori: "sejarah",
      judul: "Kesultanan Gowa",
      deskripsi:
        "Kerajaan maritim Makassar yang berpengaruh di Indonesia timur pada abad ke-17 dan meninggalkan benteng serta tradisi istana.",
      sumber: "https://id.wikipedia.org/wiki/Kesultanan_Gowa",
    },
    {
      kategori: "bahasa",
      judul: "Bahasa Bugis",
      deskripsi:
        "Bahasa Austronesia dengan tradisi tulis aksara Lontara; dipakai oleh masyarakat Bugis di Sulawesi Selatan.",
      sumber: "https://id.wikipedia.org/wiki/Bahasa_Bugis",
    },
    {
      kategori: "pariwisata",
      judul: "Tana Toraja",
      deskripsi:
        "Wilayah dataran tinggi dengan rumah tongkonan dan upacara adat yang khas; lanskap budayanya menjadi daya tarik utama.",
      sumber: "https://id.wikipedia.org/wiki/Tana_Toraja",
    },
  ],
};
