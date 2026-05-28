"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Calendar } from '@phosphor-icons/react';
import { portfolioData } from '@/data/portfolioData';

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section 
      id="experience" 
      className="relative w-full px-4 md:px-8 py-20 md:py-24 bg-[#F3EFEA] overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Fixed Header (sticky-like behavior on large screen) */}
        <div className="lg:col-span-4 flex flex-col items-start text-left gap-4 lg:sticky lg:top-32 h-fit">
          <div className="inline-flex items-center rounded-full border border-white/40 bg-[#F3EFEA]/80 px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-[#1C1A17] shadow-sm">
            {portfolioData.experience.sectionLabel}
          </div>
          <h2 
            className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight text-[#1C1A17] italic"
            dangerouslySetInnerHTML={{ __html: portfolioData.experience.titleHtml }}
          />
          <p className="text-[#6B6661] text-sm md:text-base leading-relaxed font-light mt-2">
            {portfolioData.experience.description}
          </p>
        </div>

        {/* Right Column: Book Art Index Layout */}
        <div className="lg:col-span-8 flex flex-col border-t border-[#1C1A17]/10 text-left w-full">
          {portfolioData.experience.timeline.map((item, i) => (
            <motion.div
              key={item.role + item.period}
              initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-[#1C1A17]/8 group"
            >
              {/* Period in Mono (Book Index style) */}
              <div className="md:col-span-3 flex items-start gap-1.5 text-[10px] font-mono text-[#C2410C]/80 tracking-widest font-bold">
                <Calendar size={12} className="mt-0.5" />
                <span>{item.period}</span>
              </div>

              {/* Role details */}
              <div className="md:col-span-9 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1C1A17] group-hover:text-[#C2410C] transition-colors duration-300">{item.role}</h3>
                  <p className="text-[#6B6661] text-xs md:text-sm font-semibold uppercase tracking-wider">{item.company}</p>
                </div>

                {/* Highlights blocks with elegant typography */}
                <ul className="flex flex-col gap-3.5 pl-3 border-l border-[#1C1A17]/8">
                  {item.highlights.map((highlight, index) => (
                    <li 
                      key={index} 
                      className="relative text-[#6B6661] text-xs md:text-sm leading-relaxed font-light pl-4"
                    >
                      {/* Tiny custom minimalist marker */}
                      <span className="absolute -left-1 top-2.5 h-1.5 w-1.5 rounded-full bg-[#C2410C]/40 group-hover:bg-[#C2410C] transition-colors duration-300" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE EDUCACIÓN & ESTUDIOS INTEGRADA */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-24 pt-16 border-t border-[#1C1A17]/10">
        {/* Left Column: Header */}
        <div className="lg:col-span-4 flex flex-col items-start text-left gap-4 lg:sticky lg:top-32 h-fit">
          <div className="inline-flex items-center rounded-full border border-white/40 bg-[#F3EFEA]/80 px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-[#1C1A17] shadow-sm">
            {portfolioData.education.sectionLabel}
          </div>
          <h2 
            className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight text-[#1C1A17] italic"
            dangerouslySetInnerHTML={{ __html: portfolioData.education.titleHtml }}
          />
        </div>

        {/* Right Column: Academic items */}
        <div className="lg:col-span-8 flex flex-col border-t border-[#1C1A17]/10 text-left w-full">
          {portfolioData.education.list.map((item, i) => (
            <motion.div
              key={item.title + item.period}
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-8 py-8 border-b border-[#1C1A17]/8 group"
            >
              {/* Period */}
              <div className="md:col-span-3 flex items-start gap-1.5 text-[10px] font-mono text-[#C2410C]/80 tracking-widest font-bold">
                <Calendar size={12} className="mt-0.5" />
                <span>{item.period}</span>
              </div>

              {/* Title & Institution */}
              <div className="md:col-span-9 flex flex-col gap-1">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#1C1A17] group-hover:text-[#C2410C] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#6B6661] text-xs md:text-sm font-semibold uppercase tracking-wider">
                  {item.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
