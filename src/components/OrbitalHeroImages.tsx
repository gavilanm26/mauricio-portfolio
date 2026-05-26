"use client";

import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from 'framer-motion';
import { Cloud, Cpu, Code, Database, SquaresFour, Atom } from '@phosphor-icons/react';

interface OrbitalCardProps {
  index: number;
  total: number;
  angleValue: any; // MotionValue
  title: string;
  tag: string;
  icon: any;
  color: string;
  reduceMotion: boolean | null;
}

function OrbitalCard({
  index,
  total,
  angleValue,
  title,
  tag,
  icon: Icon,
  color,
  reduceMotion
}: OrbitalCardProps) {
  // Angle offset for this card
  const offset = (index * 2 * Math.PI) / total;
  
  // Calculate relative angle
  const cardAngle = useTransform(angleValue, (a: number) => a + offset);
  
  // Elliptical coordinate mapping (Rx = 190px, Ry = 60px)
  const x = useTransform(cardAngle, (a: number) => Math.cos(a) * 180);
  const y = useTransform(cardAngle, (a: number) => Math.sin(a) * 55);
  
  // Depth parallax: cards at the front (y > 0) are larger, clearer, and on top
  const scale = useTransform(cardAngle, (a: number) => {
    const sin = Math.sin(a);
    return reduceMotion ? 1 : 0.8 + (sin + 1) * 0.125; // Scale range [0.8, 1.05]
  });
  
  const opacity = useTransform(cardAngle, (a: number) => {
    const sin = Math.sin(a);
    return reduceMotion ? 1 : 0.45 + (sin + 1) * 0.275; // Opacity range [0.45, 1.0]
  });
  
  const zIndex = useTransform(cardAngle, (a: number) => {
    const sin = Math.sin(a);
    return Math.round((sin + 1) * 10) + 10; // zIndex range [10, 30]
  });

  return (
    <motion.div
      style={reduceMotion ? {} : {
        x,
        y,
        scale,
        opacity,
        zIndex,
      }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[136px] h-[76px] rounded-xl bg-[#FAF8F5]/90 border border-[#1C1A17]/8 p-2.5 shadow-[0_8px_20px_rgba(28,26,23,0.03),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md flex flex-col justify-between text-left select-none cursor-pointer transition-colors duration-300 hover:border-[#C2410C]/30 group"
    >
      {/* Mini Bezel inside card */}
      <div className="absolute inset-[1px] border border-[#1C1A17]/5 rounded-[calc(0.75rem-1px)] pointer-events-none z-10" />

      {/* Header: Tech Icon + Monospace tag */}
      <div className="flex items-center justify-between w-full">
        <span className={`flex h-5 w-5 items-center justify-center rounded bg-[#FAF8F5] ${color} border border-[#1C1A17]/5 shadow-sm group-hover:bg-[#1C1A17] group-hover:text-[#FAF8F5] transition-colors duration-300`}>
          <Icon size={11} />
        </span>
        <span className="text-[7px] font-mono text-[#6B6661]/80 tracking-wider font-semibold uppercase">{tag}</span>
      </div>

      {/* Title */}
      <div className="flex flex-col">
        <h4 className="text-[10px] font-bold tracking-tight text-[#1C1A17]">{title}</h4>
      </div>
    </motion.div>
  );
}

export function OrbitalHeroImages() {
  const reduceMotion = useReducedMotion();
  const angle = useMotionValue(0);

  // Infinite, hardware-accelerated linear time loop outside react state
  useEffect(() => {
    if (reduceMotion) return;
    const controls = animate(angle, 2 * Math.PI, {
      ease: "linear",
      duration: 25,
      repeat: Infinity
    });
    return () => controls.stop();
  }, [angle, reduceMotion]);

  const cards = [
    { title: "AWS Cloud Services", tag: "AWS", icon: Cloud, color: "text-[#C2410C]" },
    { title: ".NET & C# Core", tag: "C#", icon: Cpu, color: "text-[#C2410C]" },
    { title: "NestJS Microservices", tag: "NESTJS", icon: Code, color: "text-[#C2410C]" },
    { title: "SQL Server DB", tag: "T-SQL", icon: Database, color: "text-[#C2410C]" },
    { title: "Node.js Express", tag: "NODE", icon: Code, color: "text-[#C2410C]" },
    { title: "Razor Pages Engine", tag: "MVC", icon: SquaresFour, color: "text-[#C2410C]" }
  ];

  return (
    <div className="relative w-[380px] h-[260px] flex items-center justify-center pointer-events-none select-none">
      {/* Subtle organic light behind orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-36 bg-[#C2410C]/2 rounded-full filter blur-xl pointer-events-none" />

      {/* Orbit paths - concentric ellipses */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[110px] border border-[#1C1A17]/2 rounded-full pointer-events-none" />

      {/* Orbiting Cards Stack */}
      {cards.map((card, i) => (
        <OrbitalCard
          key={card.title}
          index={i}
          total={cards.length}
          angleValue={angle}
          title={card.title}
          tag={card.tag}
          icon={card.icon}
          color={card.color}
          reduceMotion={reduceMotion}
        />
      ))}
    </div>
  );
}
