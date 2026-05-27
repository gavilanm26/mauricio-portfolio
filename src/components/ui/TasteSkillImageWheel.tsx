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
    title: "Líder Técnico en microservicios transaccionales bajo arquitectura hexagonal con NestJS, MongoDB, Redis e integración de OCR inteligente.",
    badge: "Banco Caja Social",
    bgImage: "/bcs_services.png",
  },
  {
    kind: "aurora",
    label: "security",
    title: "Validación de identidad robusta mediante integración de APIs de core bancario y servicios de Transunion bajo esquemas de alta seguridad.",
    badge: "Identidad & APIs Bancarias",
    bgImage: "/security_gateway.png",
  },
  {
    kind: "plants",
    label: "otto",
    title: "Creación de librerías backend (NPM) y frontend (componentes UI), y despliegue fullstack serverless con React, Next.js y AWS.",
    badge: "Librerías & Fullstack",
    bgImage: "/otto_cloud.png",
  },
  {
    kind: "code",
    label: "qa",
    title: "Despliegue ágil serverless y automatizado con Azure Functions, y control de calidad corporativo mediante QA Automation E2E.",
    badge: "Azure Functions & QA Core",
    bgImage: "/qa_automation.png",
  },
  {
    kind: "studio",
    label: "redis",
    title: "Scoring de negocio con Zen Engine, mensajería elástica con colas y tópicos de Azure (Service Bus), y consistencia estricta por idempotencia.",
    badge: "Zen Engine & Azure Service Bus",
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
