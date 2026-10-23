"use client";

import { useReducedMotion } from "framer-motion";
import { Loader2, RotateCcw, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  BATAS_PESAN,
  MAKS_PESAN,
  type JawabanAsisten,
  type ModeJawaban,
  type PesanChat,
  type Sumber,
} from "@/lib/ai/types";

type PesanTampil = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Sumber[];
  mode?: ModeJawaban;
};

type ChatAsistenProps = {
  initialProvinsi?: {
    slug: string;
    nama: string;
  } | null;
};

const CONTOH = [
  "Apa keunikan Tari Saman?",
  "Rekomendasi kuliner khas Sumatera Barat",
  "Festival budaya di Bali",
];

function buatId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function sapaanAwal(initialProvinsi?: ChatAsistenProps["initialProvinsi"]): string {
  if (initialProvinsi) {
    return `Halo, saya Asisten Budaya Nusantara. Saya siap membantu kamu mengenal budaya ${initialProvinsi.nama}. Tanyakan kuliner, seni, bahasa, cerita rakyat, atau agenda budayanya.`;
  }

  return "Halo, saya Asisten Budaya Nusantara. Saya bisa membantu menelusuri provinsi, kuliner, seni, cerita rakyat, inovasi, dan agenda budaya. Mau mulai dari mana?";
}

function sumberHref(sumber: Sumber): string | undefined {
  return sumber.sumber ?? sumber.url;
}

export function ChatAsisten({ initialProvinsi }: ChatAsistenProps) {
  const reduceMotion = useReducedMotion();
  const awal = sapaanAwal(initialProvinsi);
  const [messages, setMessages] = useState<PesanTampil[]>(() => [
    { id: "sapaan", role: "assistant", content: awal },
  ]);
  const [input, setInput] = useState(
    initialProvinsi ? `Ceritakan budaya ${initialProvinsi.nama}.` : "",
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const akhircRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => controllerRef.current?.abort();
  }, []);

  useEffect(() => {
    akhircRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "end",
    });
  }, [messages, loading, reduceMotion]);

  async function kirim(teks: string) {
    const isi = teks.trim();

    if (!isi || loading) return;

    if (isi.length > BATAS_PESAN) {
      setError(`Pertanyaan maksimal ${BATAS_PESAN} karakter.`);
      return;
    }

    const pesanPengguna: PesanTampil = {
      id: buatId(),
      role: "user",
      content: isi,
    };

    const sebelumnya = messages;
    const berikutnya = [...messages, pesanPengguna];
    const untukApi: PesanChat[] = berikutnya.slice(-MAKS_PESAN).map((pesan) => ({
      role: pesan.role,
      content: pesan.content,
    }));

    setMessages(berikutnya);
    setInput("");
    setError(null);
    setLoading(true);

    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const response = await fetch("/api/asisten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: untukApi }),
        signal: controller.signal,
      });

      const data = (await response.json().catch(() => null)) as
        | (Partial<JawabanAsisten> & { error?: string })
        | null;

      if (!response.ok) {
        throw new Error(
          data?.error ??
            "Asisten belum bisa menjawab sekarang. Coba lagi sebentar lagi.",
        );
      }

      if (!data || typeof data.reply !== "string") {
        throw new Error("Jawaban asisten tidak dapat dibaca.");
      }

      const balasan: PesanTampil = {
        id: buatId(),
        role: "assistant",
        content: data.reply,
        sources: Array.isArray(data.sources) ? data.sources : [],
        mode: data.mode === "ai" ? "ai" : "demo",
      };

      setMessages((sebelum) => [...sebelum, balasan]);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        return;
      }

      setMessages(sebelumnya);
      setInput(isi);
      setError(
        err instanceof Error
          ? err.message
          : "Asisten belum bisa menjawab sekarang. Coba lagi.",
      );
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }

  function mulaiUlang() {
    controllerRef.current?.abort();
    setMessages([{ id: "sapaan", role: "assistant", content: awal }]);
    setInput(initialProvinsi ? `Ceritakan budaya ${initialProvinsi.nama}.` : "");
    setError(null);
    setLoading(false);
  }

  const adaPercakapan = messages.length > 1;

  return (
    <div className="overflow-hidden rounded-panel border border-line bg-surface shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-muted/45 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-sand/65 text-clay-strong">
            <Sparkles className="size-5" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-serif text-xl leading-tight text-ink">
              Asisten Nusantara
            </h2>
            <p className="mt-0.5 text-[0.6875rem] text-muted">
              Berbasis arsip budaya · Bahasa Indonesia
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={mulaiUlang}
          disabled={!adaPercakapan || loading}
          className="inline-flex min-h-11 items-center gap-2 rounded-pill px-3 text-xs font-medium text-brown transition-colors duration-200 hover:bg-sand/45 hover:text-ink disabled:pointer-events-none disabled:opacity-40"
        >
          <RotateCcw className="size-3.5" strokeWidth={1.6} aria-hidden="true" />
          Mulai ulang
        </button>
      </div>

      <div
        className="max-h-[34rem] min-h-[24rem] overflow-y-auto px-4 py-5 sm:px-6"
        role="log"
        aria-live="polite"
        aria-label="Percakapan dengan Asisten Nusantara"
      >
        <ol className="space-y-5">
          {messages.map((pesan) => (
            <li
              key={pesan.id}
              className={
                pesan.role === "user"
                  ? "flex justify-end"
                  : "flex items-start gap-3"
              }
            >
              {pesan.role === "assistant" ? (
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-sand/60 text-clay-strong">
                  <Sparkles
                    className="size-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              ) : null}

              <div
                className={
                  pesan.role === "user"
                    ? "max-w-[85%] rounded-2xl rounded-br-md bg-ink px-4 py-3 text-sm leading-relaxed text-canvas"
                    : "max-w-[calc(100%-2.75rem)] rounded-2xl rounded-tl-md border border-line bg-surface-muted/70 px-4 py-3 text-sm leading-relaxed text-ink"
                }
              >
                <p className="whitespace-pre-line">{pesan.content}</p>

                {pesan.role === "assistant" && pesan.mode ? (
                  <p className="mt-3 text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-muted">
                    {pesan.mode === "demo" ? "Arsip lokal" : "AI + arsip"}
                  </p>
                ) : null}

                {pesan.role === "assistant" &&
                pesan.sources &&
                pesan.sources.length > 0 ? (
                  <div className="mt-3 border-t border-line pt-3">
                    <p className="text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-muted">
                      Sumber
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {pesan.sources.map((sumber) => {
                        const href = sumberHref(sumber);

                        return (
                          <li key={`${pesan.id}-${sumber.judul}`}>
                            {sumber.sumber ? (
                              <a
                                href={sumber.sumber}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-11 items-center gap-1.5 text-xs leading-relaxed text-brown underline-offset-4 hover:text-ink hover:underline"
                              >
                                {sumber.judul}
                                <span className="text-muted">↗</span>
                              </a>
                            ) : href ? (
                              <Link
                                href={href}
                                className="inline-flex min-h-11 items-center gap-1.5 text-xs leading-relaxed text-brown underline-offset-4 hover:text-ink hover:underline"
                              >
                                {sumber.judul}
                              </Link>
                            ) : (
                              <span className="text-xs leading-relaxed text-brown">
                                {sumber.judul}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            </li>
          ))}

          {loading ? (
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-sand/60 text-clay-strong">
                <Sparkles
                  className="size-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
              <div
                className="rounded-2xl rounded-tl-md border border-line bg-surface-muted/70 px-4 py-3 text-sm text-muted"
                role="status"
              >
                <span className="inline-flex items-center gap-2">
                  <Loader2
                    className="size-4 animate-spin"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  Menelusuri arsip budaya…
                </span>
              </div>
            </li>
          ) : null}
        </ol>

        <div ref={akhircRef} />
      </div>

      <div className="border-t border-line bg-surface px-4 py-4 sm:px-6 sm:py-5">
        {!adaPercakapan ? (
          <div className="mb-4">
            <p className="text-[0.625rem] font-medium uppercase tracking-[0.14em] text-muted">
              Coba tanyakan
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {CONTOH.map((contoh) => (
                <button
                  key={contoh}
                  type="button"
                  onClick={() => {
                    setInput(contoh);
                    inputRef.current?.focus();
                  }}
                  className="min-h-11 rounded-pill border border-line bg-surface px-4 text-left text-xs font-medium text-brown transition-[background-color,border-color,color] duration-200 hover:border-clay hover:bg-sand/30 hover:text-ink"
                >
                  {contoh}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <form
          onSubmit={(event) => {
            event.preventDefault();
            void kirim(input);
          }}
        >
          <label htmlFor="pesan-asisten" className="sr-only">
            Pertanyaan untuk Asisten Nusantara
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <textarea
              ref={inputRef}
              id="pesan-asisten"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void kirim(input);
                }
              }}
              rows={2}
              maxLength={BATAS_PESAN}
              placeholder="Tulis pertanyaan tentang budaya Indonesia…"
              className="min-h-14 w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-ink placeholder:text-muted/80 focus:border-clay focus:outline-none"
              aria-describedby="batas-pesan"
            />
            <button
              type="submit"
              disabled={loading || input.trim().length === 0}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-pill bg-ink px-5 text-sm font-medium text-canvas transition-[background-color,transform] duration-300 hover:bg-brown active:translate-y-px disabled:pointer-events-none disabled:opacity-40"
            >
              {loading ? "Mengirim…" : "Kirim"}
              <Send className="size-4" strokeWidth={1.6} aria-hidden="true" />
            </button>
          </div>

          <div
            id="batas-pesan"
            className="mt-2 flex flex-col gap-1 text-[0.6875rem] text-muted sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              {input.length}/{BATAS_PESAN} karakter · Enter untuk kirim,
              Shift+Enter baris baru
            </span>
            <span>Jawaban dapat keliru; periksa sumber.</span>
          </div>
        </form>

        {error ? (
          <p
            role="alert"
            className="mt-3 rounded-xl border border-clay/40 bg-sand/35 px-3 py-2 text-xs leading-relaxed text-brown"
          >
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}
