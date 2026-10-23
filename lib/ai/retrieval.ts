import { eventList } from "@/content/event";
import { inovasiList } from "@/content/inovasi";
import { provinsiAktif } from "@/content/provinsi";
import { kategoriLabel } from "@/lib/budaya";

import type {
  DokumenRiset,
  HasilRetrieval,
  Sumber,
} from "./types";

const STOPWORDS = new Set([
  "ada",
  "adalah",
  "apa",
  "apakah",
  "bagaimana",
  "banget",
  "berapa",
  "beri",
  "bisa",
  "budaya",
  "contoh",
  "coba",
  "dalam",
  "dan",
  "dari",
  "dengan",
  "di",
  "dimana",
  "event",
  "halo",
  "ingin",
  "ini",
  "itu",
  "jelaskan",
  "kak",
  "kamu",
  "kapan",
  "khas",
  "ke",
  "kenapa",
  "kota",
  "mengapa",
  "nusantara",
  "orang",
  "provinsi",
  "rekomendasi",
  "saya",
  "sebutkan",
  "sedang",
  "siapa",
  "tahu",
  "tentang",
  "terkait",
  "tolong",
  "untuk",
  "yang",
]);

type DokumenIndeks = DokumenRiset & {
  cariJudul: string;
  cariTeks: string;
};

function normalisasi(teks: string): string {
  return teks
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenisasi(teks: string): string[] {
  return normalisasi(teks)
    .split(" ")
    .filter((token) => token.length > 2 && !STOPWORDS.has(token));
}

function hitungKemunculan(teks: string, kata: string): number {
  let jumlah = 0;
  let posisi = 0;

  while ((posisi = teks.indexOf(kata, posisi)) !== -1) {
    jumlah += 1;
    posisi += kata.length;
  }

  return jumlah;
}

function buatDokumen(): DokumenIndeks[] {
  const dokumen: DokumenRiset[] = [];

  for (const provinsi of provinsiAktif) {
    const judulBudaya = provinsi.budaya
      .map((entri) => entri.judul)
      .join(", ");

    dokumen.push({
      id: `provinsi:${provinsi.slug}`,
      judul: provinsi.nama,
      teks: `${provinsi.nama} berada di ${provinsi.wilayah}. ${provinsi.ringkasan} Materi budaya: ${judulBudaya}.`,
      jenis: "provinsi",
      url: `/jelajahi/${provinsi.slug}`,
    });

    for (const entri of provinsi.budaya) {
      dokumen.push({
        id: `budaya:${provinsi.slug}:${normalisasi(entri.judul)}`,
        judul: `${entri.judul} — ${provinsi.nama}`,
        teks: `${kategoriLabel[entri.kategori]}: ${entri.deskripsi}`,
        jenis: "budaya",
        url: `/jelajahi/${provinsi.slug}`,
        sumber: entri.sumber,
      });
    }
  }

  for (const inovasi of inovasiList) {
    dokumen.push({
      id: `inovasi:${inovasi.slug}`,
      judul: inovasi.judul,
      teks: `${inovasi.kategori} di ${inovasi.daerah}. ${inovasi.ringkasan}${
        inovasi.pelaku ? ` Pelaku: ${inovasi.pelaku}.` : ""
      }${inovasi.tahun ? ` Sejak ${inovasi.tahun}.` : ""}`,
      jenis: "inovasi",
      url: "/inovasi",
      sumber: inovasi.sumber,
    });
  }

  for (const event of eventList) {
    dokumen.push({
      id: `event:${event.slug}`,
      judul: event.nama,
      teks: `Agenda di ${event.lokasi}; bulan ${event.bulan.join(
        ", ",
      )}. ${event.deskripsi} Status jadwal: ${event.waktu}.`,
      jenis: "event",
      url: "/event",
      sumber: event.sumber,
    });
  }

  return dokumen.map((item) => ({
    ...item,
    cariJudul: normalisasi(item.judul),
    cariTeks: normalisasi(item.teks),
  }));
}

const DOKUMEN = buatDokumen();

function skorDokumen(dokumen: DokumenIndeks, token: string[]): number {
  let skor = 0;

  for (const kata of token) {
    const diJudul = hitungKemunculan(dokumen.cariJudul, kata);
    const diTeks = hitungKemunculan(dokumen.cariTeks, kata);

    skor += diJudul * 4 + Math.min(diTeks, 3);
  }

  return skor;
}

export function retrieverKonteks(pertanyaan: string): HasilRetrieval {
  const token = tokenisasi(pertanyaan);

  if (token.length === 0) {
    return { konteks: "", sumber: [], dokumen: [] };
  }

  const peringkat = DOKUMEN.map((dokumen) => ({
    dokumen,
    skor: skorDokumen(dokumen, token),
  }))
    .filter((item) => item.skor > 0)
    .sort((a, b) => b.skor - a.skor)
    .slice(0, 6)
    .map((item) => item.dokumen);

  if (peringkat.length === 0) {
    return { konteks: "", sumber: [], dokumen: [] };
  }

  const sumber: Sumber[] = [];
  const kunciSumber = new Set<string>();

  for (const dokumen of peringkat) {
    const kunci = dokumen.sumber ?? dokumen.url ?? dokumen.judul;

    if (kunciSumber.has(kunci)) continue;

    kunciSumber.add(kunci);
    sumber.push({
      judul: dokumen.judul,
      jenis: dokumen.jenis,
      url: dokumen.url,
      sumber: dokumen.sumber,
    });
  }

  const bagian: string[] = [];
  let totalKarakter = 0;

  for (const dokumen of peringkat) {
    const baris = `- [${dokumen.jenis}] ${dokumen.judul}: ${
      dokumen.teks
    }${dokumen.sumber ? ` Sumber: ${dokumen.sumber}` : ""}`;

    if (totalKarakter + baris.length > 6500) break;

    bagian.push(baris);
    totalKarakter += baris.length;
  }

  return {
    konteks: bagian.join("\n"),
    sumber,
    dokumen: peringkat,
  };
}
