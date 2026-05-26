"use client";

import React, { useMemo, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

export type CarouselItem = {
  kind: "dark" | "plants" | "light" | "code" | "minimal" | "studio" | "aurora";
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
  const [rotation, setRotation] = useState(0);
  const items = useMemo(() => carouselItems, []);
  const total = items.length;

  // useAnimationFrame calibrado para un desplazamiento cuadrangular sumamente majestuoso, elegante y premium
  useAnimationFrame((time) => {
    setRotation(time * 0.00008);
  });

  return (
    <div 
      className="pointer-events-none absolute right-[-340px] top-[-280px] hidden h-[1120px] w-[1220px] overflow-hidden lg:block xl:right-[-200px] 2xl:right-[-90px] z-0"
      style={{ isolation: "isolate", transform: "translateZ(0px)", willChange: "transform" }}
    >
      {/* Máscaras de gradiente crema adaptadas al fondo #f3f0ea (superior e inferior) */}
      <div className="absolute inset-x-0 top-0 z-[12] h-[120px] bg-gradient-to-b from-[#f3f0ea] via-[#f3f0ea]/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[12] h-[130px] bg-gradient-to-t from-[#f3f0ea] via-[#f3f0ea]/82 to-transparent" />
      <div className="absolute left-[61%] top-[52%] h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.42),rgba(255,255,255,0)_70%)]" />

      {items.map((item, index) => {
        // Progreso cíclico secuencial (0 a 1) para que salgan una detrás de otra
        const p = (rotation + index / total) % 1;

        // Geometría del Cuadrado (Recorrido físico ortogonal de alta fidelidad)
        const X_MIN = 520; // Posicionado a la derecha de la pantalla
        const X_MAX = 1500; // Recorrido extendido para salir completamente del contenedor visible
        const Y_MIN = 100; // Nace en 100px para que la siguiente tarjeta emerja directamente desde detrás de la anterior
        const Y_MAX = 840; // Baja profundamente en el Hero

        let x = X_MIN;
        let y = Y_MIN;
        let opacity = 0;
        let scale = 0.65;
        let rotate = 0;

        // Intervalo o retardo de espera arriba para que emerja de forma compacta y continua
        const P_DELAY = 0.05;

        // TRAMO 1: Caída Recta Vertical Elegante con Retraso/Intervalo (0% a 50% del ciclo)
        // La caída dura el 50% para permitir un intervalo de separación más desahogado en la horizontal.
        if (p < 0.5) {
          if (p < P_DELAY) {
            x = X_MIN;
            y = Y_MIN;
            opacity = 0;
            scale = 0.65;
            rotate = -3.0;
          } else {
            const t = (p - P_DELAY) / (0.5 - P_DELAY);
            x = X_MIN;
            y = Y_MIN + t * (Y_MAX - Y_MIN);

            // Revelado rápido (primer 10% del trayecto real) para que se asome limpiamente
            if (t < 0.1) {
              opacity = t / 0.1;
            } else {
              opacity = 1.0;
            }

            scale = 0.65 + t * 0.35; // Crece de 0.65 a 1.0 en su descenso real
            rotate = -3.0 + t * 4.5; // Inclinación sutil sobre su eje
          }
        }
        // TRAMO 2: Fuga Recta Horizontal Sólida a la Derecha (50% a 85% del ciclo)
        // Al durar el 35% del ciclo (desfase de 20%), garantizamos que haya una distancia
        // libre holgada y elegante de 74px entre las tarjetas en tránsito horizontal,
        // dándoles más espacio visual mientras mantienen un flujo continuo y coordinado.
        else if (p < 0.85) {
          const t = (p - 0.5) / 0.35;
          x = X_MIN + t * (X_MAX - X_MIN);
          y = Y_MAX;

          opacity = 1.0; // Se mantiene sólida y visible hasta salir de la pantalla ("que no se vea que va desapareciendo")
          scale = 1.0; // Mantiene su escala protagónica completa
          rotate = 1.5 + t * 3.0; // Continuación sutil de inclinación
        }
        // TRAMOS 3 y 4: Retorno y Subida Trasera (85% a 100% del ciclo) - COMPLETAMENTE INVISIBLES
        else {
          opacity = 0;
          scale = 0.65; // Mantiene escala de retorno alineada
          rotate = 0;

          // Viaja de regreso invisible linealmente al inicio para cerrar el bucle
          const t = (p - 0.85) / 0.15;
          x = X_MAX - t * (X_MAX - X_MIN);
          y = Y_MAX - t * (Y_MAX - Y_MIN);
        }

        // Z-Index: Disminuye a medida que avanza en el ciclo visible (rango de 10 a 2).
        // Esto garantiza que la tarjeta que sale/nace arriba (menor p) quede físicamente POR ENCIMA (adelante) de la que va adelante/retirándose (mayor p).
        const zIndex = Math.round(10 - p * 8);

        return (
          <motion.div
            key={item.label}
            className="absolute left-0 top-0 will-change-transform"
            style={{
              x,
              y,
              scale,
              opacity,
              rotate,
              zIndex,
              transformOrigin: "center center",
            }}
          >
            <div style={{ transform: "translate(-50%, -50%)" }}>
              <PreviewByKind kind={item.kind} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ==========================================================================
   COMPONENTES DE PREVISUALIZACIÓN DE LAS TARJETAS (Fieles al Diseño del Video)
   ========================================================================== */

export function PreviewByKind({ kind }: { kind: CarouselItem["kind"] }) {
  // Dimensiones y radio de bordes idénticos a los del inspector de Taste Skill (486px x 252px, rounded-[18px])
  const cardStyles =
    "w-[486px] h-[252px] rounded-[18px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden font-sans border border-black/[0.03]";

  switch (kind) {
    case "dark":
      return (
        <div
          className={`${cardStyles} bg-[#0b0f12] text-white relative flex flex-col justify-between p-9`}
        >
          <div className="absolute top-9 right-9 grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 bg-[#52a350] rounded-[1px]"
              />
            ))}
          </div>
          <h2 className="text-[28px] font-medium leading-[1.25] tracking-tight max-w-[85%] mt-auto mb-auto">
            We build{" "}
            <span className="line-through opacity-30 font-normal">systems</span>{" "}
            teams actually run, scale, and trust.
          </h2>
          <div className="w-8 h-8 border-2 border-[#52a350] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-[#52a350] rounded-full" />
          </div>
        </div>
      );

    case "plants":
      return (
        <div className={`${cardStyles} bg-[#f7f5f0] text-[#1c231f] p-9`}>
          <div className="grid grid-cols-[1.2fr_1fr] h-full gap-5">
            <h2
              className="text-[36px] font-normal leading-[1.15] tracking-tight text-[#2d3b32] mt-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Plants for slower rooms
            </h2>
            <div
              className="w-full h-full rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=400')`,
              }}
            />
          </div>
        </div>
      );

    case "light":
    case "minimal":
      return (
        <div
          className={`${cardStyles} bg-[#fdfcfb] text-[#111111] flex flex-col justify-between p-9`}
        >
          <h2 className="text-[40px] font-semibold tracking-[-1px] leading-[1.1] mt-2">
            Less slop,
            <br />
            backends pop
          </h2>
          <div className="self-start bg-[#fff0ec] text-[#C2410C] px-4 py-1.5 rounded-full text-[13px] font-semibold flex items-center gap-2 border border-[#ffe1da]">
            <span className="text-[11px]">✓</span> Clean Architecture
          </div>
        </div>
      );

    case "code":
      return (
        <div
          className={`${cardStyles} bg-[#141416] text-[#a1a1a6] p-8 flex flex-col justify-between font-mono text-[13px] leading-relaxed`}
        >
          <div className="space-y-1 opacity-80 text-left">
            <p className="text-[#f5f5f7]">
              <span className="text-[#ff7b72]">import</span> &#123; Hexagonal
              &#125; <span className="text-[#ff7b72]">from</span>{" "}
              <span className="text-[#a5d6ff]">"architecture"</span>;
            </p>
            <p>
              <span className="text-[#ff7b72]">const</span>{" "}
              <span className="text-[#79c0ff]">core</span> = &#123;
            </p>
            <p className="pl-4">
              domain: <span className="text-[#a5d6ff]">"CleanCode"</span>,
            </p>
            <p className="pl-4">
              pattern:{" "}
              <span className="text-[#a5d6ff]">"PortsAndAdapters"</span>
            </p>
            <p>&#125;;</p>
          </div>
          <div className="text-[11px] text-[#52a350] bg-[#52a350]/10 px-2.5 py-1 rounded md self-start">
            // high performance
          </div>
        </div>
      );

    case "studio":
      return (
        <div
          className={`${cardStyles} bg-[#000000] text-white relative p-9 flex flex-col justify-between`}
        >
          <div className="text-[11px] tracking-[0.2em] uppercase opacity-40 font-bold">
            Studio Session
          </div>
          <h2 className="text-[32px] font-light tracking-tight leading-tight">
            Crafting resilient{" "}
            <span className="italic font-normal text-zinc-400">systems</span>.
          </h2>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
        </div>
      );

    case "aurora":
    default:
      return (
        <div
          className={`${cardStyles} bg-[#0d0914] text-white relative p-9 flex flex-col justify-between overflow-hidden`}
        >
          {/* Fondo difuminado estilo Aurora Borealis */}
          <div className="absolute -inset-10 opacity-40 bg-[radial-gradient(circle_at_top_right,#4f46e5,#06b6d4_50%,transparent)] blur-[40px]" />
          <div className="relative z-10 text-[12px] opacity-60 font-semibold">
            System Diagnostics
          </div>
          <h2 className="relative z-10 text-[26px] font-medium tracking-tight leading-snug max-w-[90%] my-auto">
            High-fidelity microservices operational.
          </h2>
          <div className="relative z-10 text-[11px] text-cyan-400 font-mono">
            STATUS // ACTIVE
          </div>
        </div>
      );
  }
}
