"use client";

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, Variants } from 'framer-motion';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { portfolioData } from '@/data/portfolioData';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const reduceMotion = useReducedMotion();

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? portfolioData.testimonials.list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === portfolioData.testimonials.list.length - 1 ? 0 : prev + 1));
  };

  // Animation variants for editorial quote transitions
  const variants: Variants = {
    enter: (dir: number) => ({
      x: reduceMotion ? 0 : dir * 50,
      opacity: 0,
      filter: reduceMotion ? 'none' : 'blur(4px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    },
    exit: (dir: number) => ({
      x: reduceMotion ? 0 : -dir * 50,
      opacity: 0,
      filter: reduceMotion ? 'none' : 'blur(4px)',
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  const activeTestimonial = portfolioData.testimonials.list[activeIndex];

  return (
    <section 
      id="testimonials" 
      className="relative w-full px-4 md:px-8 py-20 md:py-24 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Subtle organic light sepia glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40vw] w-[40vw] bg-[#C2410C]/2 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header Block */}
        <div className="flex flex-col items-start text-left gap-4 max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-white/40 bg-[#F3EFEA]/80 px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-[#1C1A17] shadow-sm">
            {portfolioData.testimonials.sectionLabel}
          </div>
          <h2 
            className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight text-[#1C1A17] italic"
            dangerouslySetInnerHTML={{ __html: portfolioData.testimonials.titleHtml }}
          />
        </div>

        {/* Large Editorial Quote Carousel Container (Anti-IA Tell / Anti-Slop Layout) */}
        <div className="relative w-full border-t border-[#1C1A17]/10 pt-16 flex flex-col items-start text-left gap-10">
          <div className="relative w-full min-h-[180px] md:min-h-[150px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-8 w-full"
              >
                {/* Large Quotation character & content */}
                <div className="flex flex-col gap-4">
                  <span className="text-7xl font-serif text-[#C2410C]/20 leading-none h-4 -ml-2 select-none">“</span>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-snug text-[#1C1A17] max-w-[32ch] italic">
                    {activeTestimonial.quote}
                  </p>
                </div>

                {/* Author Block */}
                <div className="flex flex-col gap-1 mt-2">
                  <h4 className="text-sm font-bold tracking-tight text-[#1C1A17]">{activeTestimonial.author}</h4>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#6B6661] font-bold">
                    {activeTestimonial.role} <span className="text-[#C2410C]/60 font-light mx-1.5">/</span> {activeTestimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimalist Controls - Thin Arrows with slide layout */}
          <div className="flex items-center gap-6 mt-4 z-10">
            <button
              onClick={handlePrev}
              aria-label="Testimonio anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#F3EFEA]/80 text-[#6B6661] hover:text-[#1C1A17] hover:bg-[#F3EFEA] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
              style={{ cursor: 'pointer' }}
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            
            {/* Slide Index indicator */}
            <span className="text-[10px] font-mono text-[#6B6661]/80 tracking-widest">
              {String(activeIndex + 1).padStart(2, '0')} <span className="text-[#1C1A17]/20">/</span> {String(portfolioData.testimonials.list.length).padStart(2, '0')}
            </span>

            <button
              onClick={handleNext}
              aria-label="Testimonio siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#F3EFEA]/80 text-[#6B6661] hover:text-[#1C1A17] hover:bg-[#F3EFEA] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
              style={{ cursor: 'pointer' }}
            >
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
