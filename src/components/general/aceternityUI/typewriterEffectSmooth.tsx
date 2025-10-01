"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Organise tes morceaux," },
    { text: "ajoute des paroles et des accords," },
    { text: "et joue ta musique préférée" },
    {
      text: "quand tu veux.",
      className: "text-teal-500 dark:text-teal-600",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}
