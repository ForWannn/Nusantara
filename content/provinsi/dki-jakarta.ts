import type { Provinsi } from "./types";

export const dkiJakarta: Provinsi = {
  slug: "dki-jakarta",
  nama: "DKI Jakarta",
  aktif: true,
  wilayah: "Jawa",
  ringkasan:
    "Jakarta adalah kota pelabuhan yang menjadi rumah bagi budaya Betawi, bertemu dengan pengaruh Tionghoa, Arab, dan kolonial.",
  hero: {
    gambar: "/maps/provinsi/dki-jakarta.svg",
    alt: "Siluet wilayah DKI Jakarta",
  },
  budaya: [
    {
      kategori: "kuliner",
      judul: "Kerak Telor",
      deskripsi:
        "Omelet beras ketan dan telur dengan serundeng, khas Betawi; populer di Pekan Raya Jakarta.",
      sumber: "https://id.wikipedia.org/wiki/Kerak_telor",
    },
    {
      kategori: "pakaian-adat",
      judul: "Kebaya Betawi",
      deskripsi:
        "Kebaya dan baju sadariah Betawi yang dipengaruhi budaya Tionghoa, Arab, dan kolonial.",
      sumber: "https://id.wikipedia.org/wiki/Kebaya",
    },
    {
      kategori: "seni-pertunjukan",
      judul: "Ondel-ondel",
      deskripsi:
        "Boneka raksasa khas Betawi yang kini tampil dalam festival dan acara penyambutan.",
      sumber: "https://id.wikipedia.org/wiki/Ondel-ondel",
    },
    {
      kategori: "cerita-rakyat",
      judul: "Si Pitung",
      deskripsi:
        "Jawara Betawi yang kisahnya melawan penindasan; menjadi legenda lisan, seni, dan film.",
      sumber: "https://id.wikipedia.org/wiki/Si_Pitung",
    },
    {
      kategori: "sejarah",
      judul: "Kota Tua Jakarta",
      deskripsi:
        "Kawasan bekas pusat Batavia dengan bangunan kolonial; kini menjadi museum dan ruang publik.",
      sumber: "https://id.wikipedia.org/wiki/Kota_Tua_Jakarta",
    },
    {
      kategori: "bahasa",
      judul: "Bahasa Betawi",
      deskripsi:
        "Bahasa Melayu lokal dengan pengaruh Jawa, Bali, dan Tionghoa; dipakai masyarakat Betawi.",
      sumber: "https://id.wikipedia.org/wiki/Bahasa_Betawi",
    },
    {
      kategori: "pariwisata",
      judul: "Setu Babakan",
      deskripsi:
        "Perkampungan Budaya Betawi di Jakarta Selatan yang menjaga rumah adat, kuliner, dan seni Betawi.",
      sumber: "https://id.wikipedia.org/wiki/Setu_Babakan",
    },
    {
      kategori: "musik",
      judul: "Gambang Kromong",
      deskripsi:
        "Musik Betawi dari gambang, kromong, gong, dan instrumen Tionghoa.",
      sumber: "https://id.wikipedia.org/wiki/Gambang_kromong",
    },
  ],
};
