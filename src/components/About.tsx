"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Cpu, ShieldCheck, TerminalWindow, Calendar } from '@phosphor-icons/react';
import { portfolioData } from '@/data/portfolioData';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Scroll tracking inside the About section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transformations for elements (only applied if reduceMotion is false)
  const yText = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative w-full px-4 md:px-8 py-20 md:py-24 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,26,23,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,26,23,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column (Editorial Text - with sutil scroll parallax offset) */}
        <motion.div 
          style={reduceMotion ? {} : { y: yText }}
          className="lg:col-span-7 flex flex-col items-start text-left gap-8"
        >
          <div className="inline-flex items-center rounded-full border border-white/40 bg-[#F3EFEA]/80 px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-[#1C1A17] shadow-sm">
            {portfolioData.about.sectionLabel}
          </div>
          
          <motion.h2 
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight text-[#1C1A17] italic"
            dangerouslySetInnerHTML={{ __html: portfolioData.about.titleHtml }}
          />

          {/* Pull Quote Editorial Classic (Anti-IA Tell detail) */}
          <div className="border-l-2 border-[#C2410C]/35 pl-5 py-1.5 my-2">
            <p className="text-base md:text-lg text-[#C2410C] font-serif italic font-light leading-relaxed max-w-[48ch]">
              "{portfolioData.about.quote}"
            </p>
          </div>

          <div className="flex flex-col gap-6 text-[#6B6661] text-sm md:text-base leading-relaxed max-w-[60ch] font-light">
            {portfolioData.about.paragraphs.map((para, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </div>
        </motion.div>

        {/* Right Column (Asymmetric CSS-Animated Collage of Web Interfaces Mockups) */}
        <div className="lg:col-span-5 w-full flex justify-center mt-12 lg:mt-0 relative h-[440px] md:h-[480px]">
          {/* Collage Bounds */}
          <div className="relative w-full max-w-[420px] h-full pointer-events-auto scale-[0.78] xs:scale-[0.88] sm:scale-100 origin-center">

            {/* MOCKUP 1: AI OCR Document Parser Dashboard */}
            <div 
              className="float-card-1 w-[250px] md:w-[280px] rounded-2xl bg-[#FAF8F5] border border-[#1C1A17]/8 p-4 shadow-[0_20px_45px_rgba(28,26,23,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md transition-transform duration-500 hover:scale-[1.03]"
              style={{ top: '10px', left: '0px' }}
            >
              {/* Header inside Mockup */}
              <div className="flex items-center justify-between border-b border-[#1C1A17]/5 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#1C1A17]/70 uppercase">// OCR-ENGINE</span>
                </div>
                <span className="text-[8px] font-mono bg-[#C2410C]/5 text-[#C2410C] px-1.5 py-0.5 rounded font-bold">99.8% CONF</span>
              </div>
              {/* Mockup Data */}
              <div className="flex flex-col gap-2 text-left">
                <div className="h-1 w-full bg-[#1C1A17]/5 rounded-full overflow-hidden">
                  <div className="h-full w-[88%] bg-[#C2410C] rounded-full" />
                </div>
                <p className="text-[10px] font-mono text-[#6B6661] bg-[#F3EFEA] p-2 rounded leading-relaxed select-all">
                  <span className="text-[#C2410C] block font-bold mb-0.5">METADATA EXTRAÍDA:</span>
                  {"{"} "total": "$1,450.00", "iva": "$275.50", "emisor": "AWS_CONSOLIDATED" {"}"}
                </p>
              </div>
            </div>

            {/* MOCKUP 2: Payments / Bank Reconciliation Flow */}
            <div 
              className="float-card-2 w-[260px] md:w-[300px] rounded-2xl bg-[#FAF8F5] border border-[#1C1A17]/10 p-5 shadow-[0_25px_50px_rgba(28,26,23,0.09),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-transform duration-500 hover:scale-[1.03]"
              style={{ top: '130px', right: '0px' }}
            >
              {/* Checkout UI */}
              <div className="flex flex-col gap-4 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-[#C2410C]" />
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#1C1A17]">// SECURE PAY</span>
                  </div>
                  <span className="text-[8px] font-mono text-[#6B6661]">// ID: 81935</span>
                </div>
                {/* Mock Card Interface */}
                <div className="rounded-xl bg-gradient-to-br from-[#1C1A17] to-[#3A3530] p-3 text-white shadow-sm flex flex-col justify-between aspect-[16/10] relative overflow-hidden">
                  {/* Glossy Card Mesh */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(194,65,12,0.15),transparent_70%)] pointer-events-none" />
                  <div className="flex items-start justify-between">
                    <span className="text-[7px] font-mono font-bold tracking-widest text-[#FAF8F5]/60 uppercase">BCS CONCILIACIÓN</span>
                    <Cpu size={14} className="text-[#C2410C]/80" />
                  </div>
                  <div className="flex flex-col gap-1 mt-4">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-300">•••• •••• •••• 9942</span>
                    <div className="flex items-center justify-between text-[7px] font-mono text-neutral-400">
                      <span>MAURICIO GAVILAN</span>
                      <span>EXP: 08/29</span>
                    </div>
                  </div>
                </div>
                {/* Status Checkout */}
                <div className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/10 rounded-lg px-2.5 py-1.5 text-[9px] font-mono font-bold text-emerald-600">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    TRANSACCIÓN CONCILIADA
                  </span>
                  <span>100% OK</span>
                </div>
              </div>
            </div>

            {/* MOCKUP 3: Serverless Terminal AWS Controller */}
            <div 
              className="float-card-3 w-[240px] md:w-[280px] rounded-2xl bg-[#151515] border border-white/5 p-4 shadow-[0_30px_60px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-500 hover:scale-[1.03]"
              style={{ bottom: '10px', left: '20px' }}
            >
              {/* Mini Terminal Code Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">// AWS Lambda controller</span>
              </div>
              {/* Logs simulation */}
              <div className="flex flex-col gap-1.5 text-left font-mono text-[9px]">
                <div className="flex justify-between text-[#C2410C]">
                  <span>$ aws-lambda deploy --prod</span>
                  <span className="text-neutral-500">&lt;50ms</span>
                </div>
                <div className="text-neutral-300">✓ Stack updated (6/6 assets)</div>
                <div className="text-neutral-400">INFO: Route: /v1/transactions</div>
                <div className="flex items-center justify-between text-emerald-400 border-t border-white/5 pt-1.5 mt-1">
                  <span>● STATUS: READY</span>
                  <span className="text-[7px] bg-emerald-400/10 px-1 py-0.2 rounded font-bold">12.4k req/s</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
