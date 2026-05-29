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
    title: "Arquitectura Hexagonal & Core Transaccional",
    badge: "BANCO CAJA SOCIAL",
    bgImage: "/bcs_services.png",
  },
  {
    kind: "aurora",
    label: "security",
    title: "Gateways de Seguridad & APIs Bancarias",
    badge: "IDENTIDAD & CRÉDITO",
    bgImage: "/security_gateway.png",
  },
  {
    kind: "plants",
    label: "otto",
    title: "Librerías de UI & Despliegues Serverless",
    badge: "SYSTEMS & INFRASTRUCTURE",
    bgImage: "/otto_cloud.png",
  },
  {
    kind: "code",
    label: "qa",
    title: "Frameworks de Pruebas E2E & Serverless",
    badge: "QA AUTOMATION & CORE",
    bgImage: "/qa_automation.png",
  },
  {
    kind: "studio",
    label: "redis",
    title: "Mensajería Elástica & Consistencia Estricta",
    badge: "HIGH CONCURRENCY & MESSAGING",
    bgImage: "/concurrency_redis.png",
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
