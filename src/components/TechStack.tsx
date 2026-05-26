"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from 'framer-motion';
import { Cpu, Cloud, Code, Database, Scan, SquaresFour } from '@phosphor-icons/react';
import { DoubleBezelCard } from './ui/DoubleBezelCard';
import { portfolioData, TechCard } from '@/data/portfolioData';

const iconMap = {
  Cpu,
  Cloud,
  Code,
  Database,
  Scan,
  SquaresFour
};

interface TechBentoCardProps {
  card: TechCard;
  i: number;
  reduceMotion: boolean | null;
}

// Interactive 3D Perspective Tilt Card with Organic Asynchronous Floating
function TechBentoCard({ card, i, reduceMotion }: TechBentoCardProps) {
  const Icon = iconMap[card.iconName];

  // 3D perspective variables driven by relative mouse coordinates
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [6, -6]);
  const rotateY = useTransform(x, [0, 1], [-6, 6]);
  const shadowX = useTransform(x, [0, 1], [12, -12]);
  const shadowY = useTransform(y, [0, 1], [12, -12]);

  // Unique durations and delays to simulate asynchronous organic floatation
  const floatDurations = [5.2, 6.4, 5.8, 6.8, 5.5, 6.1];
  const floatDelays = [0, 0.4, 0.8, 0.2, 0.6, 1.0];
  const floatDuration = floatDurations[i % floatDurations.length];
  const floatDelay = floatDelays[i % floatDelays.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    animate(x, 0.5, { type: 'spring', stiffness: 150, damping: 15 });
    animate(y, 0.5, { type: 'spring', stiffness: 150, damping: 15 });
  };

  return (
    <motion.div
      initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? { opacity: 1, y: 0 } : {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }
      }}
      viewport={{ once: true, amount: 0.1 }}
      animate={reduceMotion ? {} : {
        y: [0, -6, 0],
        transition: {
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: floatDuration,
            ease: "easeInOut",
            delay: floatDelay
          }
        }
      }}
      className={`${card.gridSpan} h-full`}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={reduceMotion ? {} : {
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full rounded-[2.5rem] relative group/perspective cursor-pointer"
      >
        {/* Dynamic Organic Sepia Shadow */}
        {!reduceMotion && (
          <motion.div 
            style={{ x: shadowX, y: shadowY }}
            className="absolute inset-0 bg-[#1C1A17]/3 rounded-[2.5rem] filter blur-xl pointer-events-none transition-all duration-300 -z-10" 
          />
        )}

        <DoubleBezelCard 
          outerClassName={`h-full border-white/40 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(28,26,23,0.04)] ${card.glowColor}`}
          innerClassName="flex flex-col justify-between items-start text-left gap-6 h-full min-h-[220px] relative overflow-hidden group/inner"
        >
          {/* Subtle Terracota Radial Hover Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(194,65,12,0.015),transparent_60%)] opacity-0 group-hover/inner:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Header: Icon, Title & Mono Number */}
          <div className="flex flex-col gap-4 w-full relative z-10" style={reduceMotion ? {} : { transform: "translateZ(30px)" }}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAF8F5] text-[#C2410C] border border-[#1C1A17]/8 group-hover:bg-[#1C1A17] group-hover:text-[#FAF8F5] transition-colors duration-300 shadow-sm">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-[#1C1A17]">{card.title}</h3>
              </div>
              {/* Technical Mono Number Indicator */}
              <span className="text-[10px] font-mono text-[#C2410C]/65 tracking-wider">// {card.num}</span>
            </div>
            {/* Description */}
            <p className="text-[#6B6661] text-xs md:text-sm leading-relaxed font-light">{card.description}</p>
          </div>
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mt-4 relative z-10" style={reduceMotion ? {} : { transform: "translateZ(20px)" }}>
            {card.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center rounded-full bg-[#FAF8F5] border border-[#1C1A17]/8 px-2.5 py-0.5 text-[10px] font-medium text-[#6B6661] group-hover:bg-[#F3EFEA] group-hover:text-[#1C1A17] transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </DoubleBezelCard>
      </motion.div>
    </motion.div>
  );
}

export function TechStack() {
  const reduceMotion = useReducedMotion();

  return (
    <section 
      id="stack" 
      className="relative w-full px-4 md:px-8 py-32 md:py-44 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Background Graphic lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full flex justify-between pointer-events-none opacity-[0.02] z-0">
        <div className="w-[1px] h-full bg-[#1C1A17]" />
        <div className="w-[1px] h-full bg-[#1C1A17] hidden md:block" />
        <div className="w-[1px] h-full bg-[#1C1A17] hidden md:block" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header Block */}
        <div className="flex flex-col items-start text-left gap-4 max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-white/40 bg-[#F3EFEA]/80 px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-[#1C1A17] shadow-sm">
            {portfolioData.stack.sectionLabel}
          </div>
          <h2 
            className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight text-[#1C1A17] italic"
            dangerouslySetInnerHTML={{ __html: portfolioData.stack.titleHtml }}
          />
          <p className="text-[#6B6661] text-base md:text-lg leading-relaxed font-light">
            {portfolioData.stack.description}
          </p>
        </div>

        {/* Infinite Tech Ticker Marquee */}
        <div className="relative w-full overflow-hidden border-y border-[#1C1A17]/8 py-5 bg-[#F3EFEA]/30 rounded-lg">
          {/* Faders to create smooth edges blur */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex whitespace-nowrap gap-x-12 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#6B6661]"
          >
            {/* First sequence of tech ticker */}
            <div className="flex items-center gap-12 whitespace-nowrap">
              {portfolioData.stack.tickerItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span>{item}</span> <span className="text-[#C2410C]">//</span>
                </React.Fragment>
              ))}
            </div>
            {/* Duplicated sequence for perfect gapless loop */}
            <div className="flex items-center gap-12 whitespace-nowrap" aria-hidden="true">
              {portfolioData.stack.tickerItems.map((item, idx) => (
                <React.Fragment key={`dup-${idx}`}>
                  <span>{item}</span> <span className="text-[#C2410C]">//</span>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full" style={reduceMotion ? {} : { perspective: 1000 }}>
          {portfolioData.stack.techCards.map((card, i) => (
            <TechBentoCard 
              key={card.title}
              card={card}
              i={i}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
