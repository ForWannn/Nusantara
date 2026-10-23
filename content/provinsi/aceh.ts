import type { Provinsi } from "./types";

export const aceh: Provinsi = {
  slug: "aceh",
  nama: "Aceh",
  aktif: true,
  wilayah: "Sumatera",
  ringkasan:
    "Di ujung utara Sumatra, Aceh merawat tradisi maritim, syair, dan seni tubuh yang hidup dalam keseharian.",
  hero: {
    gambar: "/maps/provinsi/aceh.svg",
    alt: "Siluet wilayah Aceh",
  },
  budaya: [
    {
      kategori: "kuliner",
      judul: "Mie Aceh",
      deskripsi:
        "Mi kuning tebal berkuah rempah, biasanya disajikan dengan potongan daging atau seafood dan taburan bawang goreng.",
      sumber: "https://id.wikipedia.org/wiki/Mie_aceh",
    },
    {
      kategori: "seni-pertunjukan",
      judul: "Tari Saman",
      deskripsi:
        "Tarian duduk dari Gayo yang mengandalkan gerak tangan dan tubuh berirama; diakui UNESCO sebagai warisan budaya takbenda.",
      sumber: "https://id.wikipedia.org/wiki/Tari_Saman",
    },
    {
      kategori: "pakaian-adat",
      judul: "Ulee Balang",
      deskripsi:
        "Pakaian adat Aceh yang dahulu dikenakan keluarga bangsawan dan kini hadir dalam upacara serta pernikahan.",
      sumber: "https://id.wikipedia.org/wiki/Ulee_balang",
    },
    {
      kategori: "kerajinan",
      judul: "Rencong",
      deskripsi:
        "Senjata tradisional Aceh dengan bilah melengkung; bentuknya menjadi lambang keberanian dan identitas budaya.",
      sumber: "https://id.wikipedia.org/wiki/Rencong",
    },
    {
      kategori: "cerita-rakyat",
      judul: "Hikayat Prang Sabi",
      deskripsi:
        "Syair epik Aceh tentang perjuangan yang diwariskan secara lisan; bagian penting dari khazanah sastra Aceh.",
      sumber: "https://id.wikipedia.org/wiki/Hikayat_Prang_Sabi",
    },
    {
      kategori: "sejarah",
      judul: "Kesultanan Aceh Darussalam",
      deskripsi:
        "Kesultanan maritim yang berpengaruh di Selat Malaka pada abad ke-16 dan ke-17, dengan tradisi ilmu dan perdagangan.",
      sumber: "https://id.wikipedia.org/wiki/Kesultanan_Aceh_Darussalam",
    },
    {
      kategori: "bahasa",
      judul: "Bahasa Aceh",
      deskripsi:
        "Bahasa Austronesia yang dituturkan di Aceh dan sekitarnya; tradisi tulisnya mengenal aksara Jawoe.",
      sumber: "https://id.wikipedia.org/wiki/Bahasa_Aceh",
    },
  ],
};
