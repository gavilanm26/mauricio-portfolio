"use client";

import React, { useMemo } from "react";
import { OrthogonalCarousel, OrthogonalCard } from "@gavilanm/ui";

export type CarouselItem = {
  kind: "dark" | "plants" | "light" | "code" | "studio" | "aurora";
  label: string;
};

export const carouselItems: CarouselItem[] = [
  { kind: "dark", label: "Aven" },
  { kind: "aurora", label: "Aurora" },
  { kind: "plants", label: "Northway" },
  { kind: "light", label: "Taste" },
  { kind: "code", label: "Code" },
];

export function TasteSkillImageWheel() {
  const items = useMemo(() => {
    return carouselItems.map((item) => (
      <OrthogonalCard key={item.label} kind={item.kind} />
    ));
  }, []);

  return (
    <OrthogonalCarousel
      items={items}
      backgroundColor="#f3f0ea"
    />
  );
}
