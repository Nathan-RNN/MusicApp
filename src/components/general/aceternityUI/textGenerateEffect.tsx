"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function TextGenerateEffectComponent({ words }: { words: string }) {
  return (
    <TextGenerateEffect
      className="text-4xl md:text-5xl font-extrabold mb-3"
      words={words}
    />
  );
}
