import type { Provinsi } from "./types";

export const sumateraUtara: Provinsi = {
  slug: "sumatera-utara",
  nama: "Sumatera Utara",
  aktif: true,
  wilayah: "Sumatera",
  ringkasan:
    "Di tepi Danau Toba, budaya Batak hidup dalam tenun ulos, gondang, dan cerita rakyat yang diwariskan lintas generasi.",
  hero: {
    gambar: "/maps/provinsi/sumatera-utara.svg",
    alt: "Siluet wilayah Sumatera Utara",
  },
  budaya: [
    {
      kategori: "kuliner",
      judul: "Bika Ambon",
      deskripsi:
        "Kue bertekstur berpori dengan aroma daun jeruk dan santan, populer sebagai oleh-oleh khas Medan.",
      sumber: "https://id.wikipedia.org/wiki/Bika_ambon",
    },
    {
      kategori: "kerajinan",
      judul: "Ulos",
      deskripsi:
        "Kain tenun Batak dengan motif dan warna bermakna; dipakai dalam pernikahan serta upacara adat.",
      sumber: "https://id.wikipedia.org/wiki/Ulos",
    },
    {
      kategori: "seni-pertunjukan",
      judul: "Tari Tortor",
      deskripsi:
        "Tarian Batak yang diiringi gondang sabangunan dan sering hadir dalam upacara adat.",
      sumber: "https://id.wikipedia.org/wiki/Tari_Tortor",
    },
    {
      kategori: "bahasa",
      judul: "Bahasa Batak",
      deskripsi:
        "Rumpun bahasa Batak, antara lain Toba, Karo, dan Simalungun, dipakai di berbagai penjuru provinsi.",
      sumber: "https://id.wikipedia.org/wiki/Bahasa_Batak",
    },
    {
      kategori: "cerita-rakyat",
      judul: "Legenda Danau Toba",
      deskripsi:
        "Kisah Toba dan ikan sakti dipercaya sebagai asal-usul Danau Toba; versi cerita rakyat yang populer.",
      sumber: "https://id.wikipedia.org/wiki/Legenda_Danau_Toba",
    },
    {
      kategori: "pariwisata",
      judul: "Danau Toba",
      deskripsi:
        "Danau vulkanik terbesar di Indonesia dengan Pulau Samosir di tengahnya; kawasan ini menjadi bagian dari geopark dunia UNESCO.",
      sumber: "https://id.wikipedia.org/wiki/Danau_Toba",
    },
  ],
};
