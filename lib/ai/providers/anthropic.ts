import type { HasilGenerate, InputGenerate } from "../types";

type AnthropicConfig = {
  apiKey: string;
  model: string;
  baseUrl?: string;
};

type AnthropicResponse = {
  content?: Array<{
    type?: string;
    text?: string;
  }>;
};

export async function generateAnthropic(
  input: InputGenerate,
  config: AnthropicConfig,
): Promise<HasilGenerate> {
  const baseUrl = (config.baseUrl ?? "https://api.anthropic.com").replace(
    /\/$/,
    "",
  );

  const response = await fetch(`${baseUrl}/v1/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": config.apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: config.model,
      max_tokens: 700,
      system: input.system,
      messages: input.messages.map((pesan) => ({
        role: pesan.role,
        content: pesan.content,
      })),
    }),
    signal: AbortSignal.timeout(25_000),
  });

  if (!response.ok) {
    throw new Error(`Penyedia Anthropic menolak permintaan (${response.status}).`);
  }

  const data = (await response.json()) as AnthropicResponse;
  const text = data.content
    ?.filter((block) => block.type === "text")
    .map((block) => block.text ?? "")
    .join("")
    .trim();

  if (!text) {
    throw new Error("Penyedia Anthropic tidak mengembalikan teks.");
  }

  return {
    text,
    provider: "anthropic",
    model: config.model,
  };
}
