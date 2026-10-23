export const BATAS_PESAN = 500;
export const MAKS_PESAN = 12;

export type PeranPesan = "user" | "assistant";

export type PesanChat = {
  role: PeranPesan;
  content: string;
};

export type Sumber = {
  judul: string;
  jenis: "provinsi" | "budaya" | "inovasi" | "event";
  url?: string;
  sumber?: string;
};

export type DokumenRiset = {
  id: string;
  judul: string;
  teks: string;
  jenis: Sumber["jenis"];
  url?: string;
  sumber?: string;
};

export type HasilRetrieval = {
  konteks: string;
  sumber: Sumber[];
  dokumen: DokumenRiset[];
};

export type ModeJawaban = "ai" | "demo";

export type InputGenerate = {
  system: string;
  messages: PesanChat[];
};

export type HasilGenerate = {
  text: string;
  provider: string;
  model: string;
};

export type JawabanAsisten = {
  reply: string;
  sources: Sumber[];
  mode: ModeJawaban;
  provider: string;
};
