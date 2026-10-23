import { NextResponse } from "next/server";

import {
  buatJawabanDemo,
  getAiMode,
  jawabDenganProvider,
  systemDenganKonteks,
} from "@/lib/ai";
import { retrieverKonteks } from "@/lib/ai/retrieval";
import {
  BATAS_BALASAN,
  BATAS_PESAN,
  MAKS_PESAN,
  type JawabanAsisten,
  type ModeJawaban,
  type PesanChat,
} from "@/lib/ai/types";

const BATAS_PER_MENIT = 20;
const JENDELA_MS = 60_000;
const BATAS_BODY = 20_000;

const catatanBatas = new Map<string, { jumlah: number; reset: number }>();

function kunciKlien(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim();

  return ip || request.headers.get("x-real-ip") || "lokal";
}

function cekBatas(kunci: string): { boleh: boolean; sisa: number } {
  const sekarang = Date.now();
  const catatan = catatanBatas.get(kunci);

  if (!catatan || catatan.reset <= sekarang) {
    catatanBatas.set(kunci, {
      jumlah: 1,
      reset: sekarang + JENDELA_MS,
    });

    return { boleh: true, sisa: BATAS_PER_MENIT - 1 };
  }

  if (catatan.jumlah >= BATAS_PER_MENIT) {
    return { boleh: false, sisa: 0 };
  }

  catatan.jumlah += 1;

  return { boleh: true, sisa: BATAS_PER_MENIT - catatan.jumlah };
}

function ambilPesan(nilai: unknown): PesanChat[] | null {
  if (!Array.isArray(nilai) || nilai.length === 0 || nilai.length > MAKS_PESAN) {
    return null;
  }

  const pesan: PesanChat[] = [];

  for (const item of nilai) {
    if (typeof item !== "object" || item === null) return null;

    const data = item as Record<string, unknown>;
    const role = data.role;
    const content = data.content;

    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string") return null;

    const teks = content.trim();
    const batas = role === "user" ? BATAS_PESAN : BATAS_BALASAN;

    if (!teks || teks.length > batas) return null;

    pesan.push({ role, content: teks });
  }

  return pesan;
}

function jawabDemo(
  pertanyaan: string,
  hasil: ReturnType<typeof retrieverKonteks>,
): JawabanAsisten {
  return {
    reply: buatJawabanDemo(pertanyaan, hasil),
    sources: hasil.sumber,
    mode: "demo",
    provider: "arsip-lokal",
  };
}

export async function POST(request: Request) {
  const kunci = kunciKlien(request);
  const batas = cekBatas(kunci);

  if (!batas.boleh) {
    return NextResponse.json(
      {
        error:
          "Terlalu banyak pertanyaan dalam satu menit. Coba lagi sebentar lagi.",
      },
      { status: 429 },
    );
  }

  const panjang = Number(request.headers.get("content-length") ?? "0");

  if (Number.isFinite(panjang) && panjang > BATAS_BODY) {
    return NextResponse.json(
      { error: "Pesan terlalu besar." },
      { status: 413 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Format permintaan tidak valid." },
      { status: 400 },
    );
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json(
      { error: "Format permintaan tidak valid." },
      { status: 400 },
    );
  }

  const pesan = ambilPesan((body as { messages?: unknown }).messages);

  if (!pesan) {
    return NextResponse.json(
      {
        error: `Pesan tidak valid. Gunakan maksimal ${MAKS_PESAN} pesan dan ${BATAS_PESAN} karakter per pertanyaan.`,
      },
      { status: 400 },
    );
  }

  const terakhir = pesan[pesan.length - 1];

  if (terakhir.role !== "user") {
    return NextResponse.json(
      { error: "Pesan terakhir harus berupa pertanyaan pengguna." },
      { status: 400 },
    );
  }

  const pertanyaan = terakhir.content;
  const hasil = retrieverKonteks(pertanyaan);

  if (hasil.dokumen.length === 0) {
    return NextResponse.json(jawabDemo(pertanyaan, hasil), {
      headers: {
        "X-RateLimit-Limit": String(BATAS_PER_MENIT),
        "X-RateLimit-Remaining": String(batas.sisa),
      },
    });
  }

  const mode: ModeJawaban = getAiMode();

  if (mode === "demo") {
    return NextResponse.json(jawabDemo(pertanyaan, hasil), {
      headers: {
        "X-RateLimit-Limit": String(BATAS_PER_MENIT),
        "X-RateLimit-Remaining": String(batas.sisa),
      },
    });
  }

  try {
    const jawaban = await jawabDenganProvider({
      system: systemDenganKonteks(hasil.konteks),
      messages: pesan,
    });

    return NextResponse.json(
      {
        reply: jawaban.text,
        sources: hasil.sumber,
        mode: "ai",
        provider: jawaban.provider,
      } satisfies JawabanAsisten,
      {
        headers: {
          "X-RateLimit-Limit": String(BATAS_PER_MENIT),
          "X-RateLimit-Remaining": String(batas.sisa),
        },
      },
    );
  } catch (error) {
    console.error("Asisten AI gagal memakai penyedia:", error);

    return NextResponse.json(jawabDemo(pertanyaan, hasil), {
      headers: {
        "X-RateLimit-Limit": String(BATAS_PER_MENIT),
        "X-RateLimit-Remaining": String(batas.sisa),
      },
    });
  }
}
