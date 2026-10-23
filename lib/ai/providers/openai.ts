import type { HasilGenerate, InputGenerate } from "../types";

type OpenAIConfig = {
  apiKey: string;
  model: string;
  baseUrl?: string;
};

type OpenAIResponse = {
  choices?: Array<{
    message?: {
      content?: string | null;
    };
  }>;
};

export async function generateOpenAI(
  input: InputGenerate,
  config: OpenAIConfig,
): Promise<HasilGenerate> {
  const baseUrl = (config.baseUrl ?? "https://api.openai.com/v1").replace(
    /\/$/,
    "",
  );
  const isOpenRouter = baseUrl.includes("openrouter.ai");
  const isFlint = isOpenRouter && config.model.startsWith("recursive/flint");

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        { role: "system", content: input.system },
        ...input.messages.map((pesan) => ({
          role: pesan.role,
          content: pesan.content,
        })),
      ],
      temperature: 0.3,
      max_tokens: isFlint ? 1200 : 700,
      ...(isFlint ? { reasoning: { effort: "low" } } : {}),
    }),
    signal: AbortSignal.timeout(25_000),
  });

  if (!response.ok) {
    throw new Error(`Penyedia OpenAI menolak permintaan (${response.status}).`);
  }

  const data = (await response.json()) as OpenAIResponse;
  const text = data.choices?.[0]?.message?.content?.trim();

  if (!text) {
    throw new Error("Penyedia OpenAI tidak mengembalikan teks.");
  }

  return {
    text,
    provider: "openai",
    model: config.model,
  };
}
