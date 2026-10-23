import type { Provinsi } from "./types";

export const sumateraSelatan: Provinsi = {
  slug: "sumatera-selatan",
  nama: "Sumatera Selatan",
  aktif: true,
  wilayah: "Sumatera",
  ringkasan:
    "Dari kejayaan Sriwijaya di Sungai Musi hingga songket Palembang, budaya Sumatera Selatan tumbuh dari jalur perdagangan maritim.",
  hero: {
    gambar: "/maps/provinsi/sumatera-selatan.svg",
    alt: "Siluet wilayah Sumatera Selatan",
  },
  budaya: [
    {
      kategori: "kuliner",
      judul: "Pempek",
      deskripsi:
        "Olahan ikan dan sagu khas Palembang, disajikan dengan kuah cuko yang asam-pedas.",
      sumber: "https://id.wikipedia.org/wiki/Pempek",
    },
    {
      kategori: "kerajinan",
      judul: "Songket Palembang",
      deskripsi:
        "Kain tenun bermotif dengan benang emas, sering dipakai dalam upacara adat Palembang.",
      sumber: "https://id.wikipedia.org/wiki/Songket",
    },
    {
      kategori: "seni-pertunjukan",
      judul: "Tari Gending Sriwijaya",
      deskripsi:
        "Tari penyambutan yang mengambil inspirasi dari kejayaan Sriwijaya.",
      sumber: "https://id.wikipedia.org/wiki/Tari_Gending_Sriwijaya",
    },
    {
      kategori: "sejarah",
      judul: "Kerajaan Sriwijaya",
      deskripsi:
        "Kerajaan maritim yang berpusat di sekitar Palembang dan berpengaruh di Asia Tenggara pada abad ke-7 hingga ke-13.",
      sumber: "https://id.wikipedia.org/wiki/Sriwijaya",
    },
    {
      kategori: "cerita-rakyat",
      judul: "Legenda Pulau Kemaro",
      deskripsi:
        "Kisah Siti Fatimah dan Tan Bun An yang dikaitkan dengan Pulau Kemaro di Sungai Musi.",
      sumber: "https://id.wikipedia.org/wiki/Pulau_Kemaro",
    },
    {
      kategori: "pariwisata",
      judul: "Sungai Musi",
      deskripsi:
        "Sungai sepanjang sekitar 750 km yang menjadi urat nadi Palembang; tepiannya menyimpan jejak Sriwijaya dan kota kolonial.",
      sumber: "https://id.wikipedia.org/wiki/Sungai_Musi",
    },
    {
      kategori: "bahasa",
      judul: "Bahasa Palembang",
      deskripsi:
        "Bahasa Melayu lokal dengan pengaruh Jawa dan Arab, dipakai masyarakat Palembang dan sekitarnya.",
      sumber: "https://id.wikipedia.org/wiki/Bahasa_Palembang",
    },
  ],
};
