"use client";

import React, { useMemo } from "react";
import { OrthogonalCarousel, OrthogonalCard } from "@gavilanm/ui";

export type CarouselItem = {
  kind: "dark" | "plants" | "light" | "code" | "studio" | "aurora";
  label: string;
  title?: string;
  badge?: string;
  bgImage?: string;
};

export const carouselItems: CarouselItem[] = [
  {
    kind: "dark",
    label: "bcs",
    title: "Desarrollo de microservicios transaccionales con NestJS, MongoDB y Redis bajo arquitectura hexagonal.",
    badge: "Banco Caja Social",
  },
  {
    kind: "aurora",
    label: "security",
    title: "Lógica de encriptación y desencriptación de payloads en tránsito y autorización con JWT.",
    badge: "API Gateway Security",
  },
  {
    kind: "plants",
    label: "otto",
    title: "Solución fullstack escalable sobre AWS con Lambda, API Gateway, S3, Cognito y DynamoDB.",
    badge: "OTTO Fullstack",
    bgImage: "/otto_cloud.png",
  },
  {
    kind: "code",
    label: "qa",
    badge: "// QA Automation Frameworks",
  },
  {
    kind: "studio",
    label: "redis",
    title: "Gestión de colas de mensajería, cronjobs y alta concurrencia transaccional con Redis.",
    badge: "Concurrencia & Colas",
  },
];

export function TasteSkillImageWheel() {
  const items = useMemo(() => {
    return carouselItems.map((item) => (
      <OrthogonalCard
        key={item.label}
        kind={item.kind}
        title={item.title}
        badge={item.badge}
        bgImage={item.bgImage}
      />
    ));
  }, []);

  return (
    <OrthogonalCarousel
      items={items}
      backgroundColor="#f3f0ea"
    />
  );
}
