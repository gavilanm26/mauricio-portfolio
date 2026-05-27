"use client";

import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence, Variants } from 'framer-motion';
import { MagneticButton } from './ui/MagneticButton';
import { TerminalWindow, Copy, Check } from '@phosphor-icons/react';
import { TasteSkillImageWheel, carouselItems } from './ui/TasteSkillImageWheel';
import { OrthogonalCard } from '@gavilanm/ui';
import { portfolioData } from '@/data/portfolioData';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const headline = portfolioData.hero.headline;
  const words = headline.split(" ");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.hero.terminalCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  };

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: reduceMotion ? 0 : 15,
      filter: reduceMotion ? 'blur(0px)' : 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      id="home"
      className="relative flex min-h-[100dvh] w-full items-center justify-center px-4 md:px-8 py-28 md:py-36 overflow-hidden bg-[#f3f0ea]"

    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,26,23,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,26,23,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      {/* Taste Skill Image Wheel Animation (Top Right) - AL INICIO PARA APILADO NATURAL DETRÁS EN EL DOM */}
      <TasteSkillImageWheel />

      <div 
        className="relative z-30 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center" 
        style={{ perspective: "1000px", transform: "translateZ(100px)", willChange: "transform" }}
      >
        {/* Left Column (Editorial Content) */}
        <div className="relative z-[100] lg:col-span-7 flex flex-col items-start text-left gap-8 transform-gpu">
          {/* Eyebrow Technical Badge with live pulse */}
          <div className="flex flex-wrap items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-[#F3EFEA]/80 px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-[#1C1A17] shadow-sm"
            >
              <TerminalWindow size={10} className="text-[#C2410C]" />
              <span>{portfolioData.hero.roleBadge}</span>
            </motion.div>
          </div>

          {/* Majestic Asymmetric Headline (Serif + Sans Inline capsule) */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[1.05] text-[#1C1A17] max-w-2xl italic pb-1"
          >
            {words.map((word, i) => {
              const isHighlight = word === "gran" || word === "escala.";
              const isInvisible = word.replace(/[^a-zA-Z]/g, "").toLowerCase() === "invisible";
              return (
                <span key={i} className="inline-block">
                  <motion.span
                    variants={wordVariants}
                    className={`inline-block mr-2.5 ${isHighlight ? 'text-[#C2410C] font-normal not-italic font-sans tracking-tight' : ''}`}
                  >
                    {word}
                  </motion.span>
                  {isInvisible && (
                    <motion.span
                      variants={wordVariants}
                      className="inline-block w-16 h-7 md:w-24 md:h-10 rounded-full align-middle bg-cover bg-center mx-2 border border-white/50 shadow-sm relative overflow-hidden group/capsule cursor-pointer"
                      style={{ backgroundImage: 'url(/tech_infrastructure.png)' }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    >
                      <span className="absolute inset-0 bg-[#FAF8F5]/10 mix-blend-overlay" />
                    </motion.span>
                  )}
                </span>
              );
            })}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#6B6661] text-base md:text-lg leading-relaxed max-w-[45ch] font-light"
          >
            {portfolioData.hero.description}
          </motion.p>

          {/* Copyable Developer Shell Console (tasteskill.dev exact style) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleCopy}
            className="w-full max-w-xl rounded-2xl bg-[#151515] px-4 py-4 text-left shadow-[0_12px_24px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.06)] border border-white/5 relative flex items-center justify-between gap-4 cursor-pointer select-none group/console mt-2"
          >
            {/* Glossy hover sheen effect */}
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent sheen-return-hover--console opacity-0 group-hover/console:opacity-100 transition-opacity duration-700 rounded-2xl" />
            
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <span className="text-[#C2410C] font-mono text-sm font-bold shrink-0">$</span>
              <span className="font-mono text-[11px] md:text-sm text-neutral-300 truncate tracking-tight select-all">
                {portfolioData.hero.terminalCommand}
              </span>
            </div>
            
            <button
              type="button"
              className="relative shrink-0 flex items-center gap-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-widest font-sans text-neutral-400 group-hover/console:text-white transition-colors duration-300"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, scale: 0.8, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="flex items-center gap-1.5 text-emerald-400 font-bold"
                  >
                    Copiado
                    <Check size={14} weight="bold" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, scale: 0.8, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="flex items-center gap-1.5"
                  >
                    Copiar
                    <Copy size={14} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>

          {/* Elegant Elastic CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto"
          >
            <a href="#projects" className="w-full sm:w-auto">
              <MagneticButton variant="primary" className="w-full">
                {portfolioData.hero.primaryButton}
              </MagneticButton>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <MagneticButton variant="secondary" className="w-full">
                {portfolioData.hero.secondaryButton}
              </MagneticButton>
            </a>
          </motion.div>

          {/* Fila Horizontal Responsive (Marquesina Infinita debajo de los botones) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:hidden mt-8 overflow-hidden relative py-2"
          >
            {/* Gradientes de difuminado en los bordes para fundirse con el fondo crema #f3f0ea */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#f3f0ea] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#f3f0ea] to-transparent z-20 pointer-events-none" />
            
            <motion.div 
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 18,
                repeat: Infinity,
              }}
            >
              {/* Duplicamos las tarjetas para que el bucle sea perfectamente continuo */}
              {[...carouselItems, ...carouselItems].map((item, index) => (
                <div 
                  key={`${item.label}-${index}`}
                  className="w-[290px] h-[150px] sm:w-[365px] sm:h-[189px] shrink-0 overflow-hidden rounded-[11px] sm:rounded-[14px] shadow-sm border border-black/[0.02]"
                >
                  <div className="scale-[0.596] sm:scale-[0.751] origin-top-left">
                    <OrthogonalCard 
                      kind={item.kind} 
                      title={item.title}
                      badge={item.badge}
                      bgImage={item.bgImage}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column (Placeholder container to reserve layout spacing in desktop grid) */}
        <div className="hidden lg:block lg:col-span-5 lg:h-auto pointer-events-none" />
      </div>

    </section>
  );
}
