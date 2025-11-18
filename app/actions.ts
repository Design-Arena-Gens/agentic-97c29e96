"use server";

import { generateContent, type ContentRequest, type GeneratedContent } from "@/lib/generator";

export async function generateAgenticContent(
  _prevState: GeneratedContent | null,
  formData: FormData
) {
  const payload: ContentRequest = {
    niche: String(formData.get("niche") ?? ""),
    audience: String(formData.get("audience") ?? ""),
    promise: String(formData.get("promise") ?? ""),
    objection: String(formData.get("objection") ?? ""),
    platform: (formData.get("platform") as ContentRequest["platform"]) ?? "instagram",
    language: (formData.get("language") as ContentRequest["language"]) ?? "hinglish",
    pacing: (formData.get("pacing") as ContentRequest["pacing"]) ?? "30"
  };

  return generateContent(payload);
}
