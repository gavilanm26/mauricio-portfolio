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
    title: "Desarrollo de microservicios transaccionales con NestJS, MongoDB y Redis bajo arquitectura hexagonal y flujos seguros.",
    badge: "Banco Caja Social",
    bgImage: "/bcs_services.png",
  },
  {
    kind: "aurora",
    label: "security",
    title: "Lógica avanzada de encriptación y desencriptación de payloads en tránsito y autorización segura con tokens JWT.",
    badge: "API Gateway Security",
    bgImage: "/security_gateway.png",
  },
  {
    kind: "plants",
    label: "otto",
    title: "Solución fullstack de alto rendimiento sobre AWS usando Lambda, API Gateway, S3, Cognito y DynamoDB.",
    badge: "OTTO Fullstack",
    bgImage: "/otto_cloud.png",
  },
  {
    kind: "code",
    label: "qa",
    title: "Frameworks personalizados de automatización de pruebas de extremo a extremo, regresión y cargas bancarias.",
    badge: "QA Automation Core",
    bgImage: "/qa_automation.png",
  },
  {
    kind: "studio",
    label: "redis",
    title: "Orquestación de cronjobs, colas de mensajería asíncronas y alta concurrencia transaccional distribuida con Redis.",
    badge: "Redis Message Queues",
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
