import { generateAnthropic } from "./providers/anthropic";
import { generateOpenAI } from "./providers/openai";
import type {
  HasilGenerate,
  HasilRetrieval,
  InputGenerate,
  ModeJawaban,
} from "./types";

const PROVIDER_VALID = new Set([
  "openai",
  "openai-compatible",
  "anthropic",
]);

export const SYSTEM_PROMPT = `Kamu adalah Asisten Budaya Nusantara, pemandu budaya Indonesia yang ramah dan ringkas.

Aturan:
1. Jawab dalam Bahasa Indonesia yang jelas dan hangat.
2. Gunakan hanya informasi dari KONTEKS di bawah. Jangan menambahkan fakta yang tidak ada di konteks.
3. Jika konteks tidak memuat jawaban, katakan bahwa kamu belum yakin dan sarankan topik atau provinsi yang tersedia.
4. Jangan mengarang nama orang, tanggal, angka, atau sumber.
5. Sebutkan judul materi yang kamu gunakan agar pengguna bisa menelusurinya.
6. Jawab maksimal 180 kata. Gunakan paragraf pendek atau daftar sederhana bila membantu.
7. Tolak dengan sopan pertanyaan yang jauh dari budaya Indonesia dan arahkan kembali ke arsip Nusantara.`;

export type KonfigurasiAi = {
  provider: string;
  apiKey: string;
  model: string;
  baseUrl?: string;
};

export function getAiConfig(): KonfigurasiAi {
  const provider = (process.env.AI_PROVIDER ?? "").trim().toLowerCase();
  const apiKey = (process.env.AI_API_KEY ?? "").trim();
  const model = (process.env.AI_MODEL ?? "").trim();
  const baseUrl = (process.env.AI_BASE_URL ?? "").trim() || undefined;

  return { provider, apiKey, model, baseUrl };
}

export function getAiMode(): ModeJawaban {
  const config = getAiConfig();

  return config.apiKey &&
    config.model &&
    PROVIDER_VALID.has(config.provider)
    ? "ai"
    : "demo";
}

export function systemDenganKonteks(konteks: string): string {
  return `${SYSTEM_PROMPT}\n\nKONTEKS:\n${
    konteks || "(Tidak ada konteks yang cocok untuk pertanyaan ini.)"
  }`;
}

export async function jawabDenganProvider(
  input: InputGenerate,
): Promise<HasilGenerate> {
  const config = getAiConfig();

  if (!config.apiKey || !config.model) {
    throw new Error("Penyedia AI belum dikonfigurasi.");
  }

  if (config.provider === "anthropic") {
    return generateAnthropic(input, {
      apiKey: config.apiKey,
      model: config.model,
      baseUrl: config.baseUrl,
    });
  }

  if (
    config.provider === "openai" ||
    config.provider === "openai-compatible"
  ) {
    return generateOpenAI(input, {
      apiKey: config.apiKey,
      model: config.model,
      baseUrl: config.baseUrl,
    });
  }

  throw new Error("AI_PROVIDER tidak dikenali.");
}

function ringkas(teks: string, batas = 240): string {
  if (teks.length <= batas) return teks;

  return `${teks.slice(0, batas - 1).trimEnd()}…`;
}

export function buatJawabanDemo(
  pertanyaan: string,
  hasil: HasilRetrieval,
): string {
  if (hasil.dokumen.length === 0) {
    return "Saya belum menemukan materi yang cukup spesifik di arsip Nusantara. Coba sebutkan nama provinsi, kategori budaya, atau agenda festival yang ingin kamu ketahui.";
  }

  const utama = hasil.dokumen.slice(0, 3);
  const daftar = utama
    .map((dokumen) => `- ${dokumen.judul}: ${ringkas(dokumen.teks)}`)
    .join("\n");

  return `Dari arsip Nusantara, ini yang bisa saya bagikan tentang “${ringkas(
    pertanyaan.trim(),
    100,
  )}”:\n\n${daftar}\n\nSumber lengkap ada di daftar sumber di bawah jawaban. Jika ingin lebih spesifik, sebutkan provinsi atau kategori yang kamu minati.`;
}
