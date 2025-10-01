"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="h-40 bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-72 md:w-80 rounded-xl p-6 border shadow-md dark:shadow-none hover:dark:shadow-2xl hover:dark:shadow-emerald-500/[0.1]">
        <CardItem
          translateZ="50"
          className="text-3xl md:text-4xl w-full flex justify-center font-bold text-neutral-600 dark:text-white"
        >
          {icon}
        </CardItem>

        <CardItem
          as="h3"
          translateZ="60"
          className="text-lg md:text-xl w-full flex justify-center font-semibold mt-2 text-neutral-800 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem
          translateZ="100"
          className="mt-2 w-full flex justify-center text-sm md:text-base text-muted-foreground dark:text-neutral-300"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
