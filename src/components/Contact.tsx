"use client";

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DoubleBezelCard } from './ui/DoubleBezelCard';
import { MagneticButton } from './ui/MagneticButton';
import { Envelope, GithubLogo, LinkedinLogo, Check } from '@phosphor-icons/react';
import { portfolioData } from '@/data/portfolioData';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="relative w-full px-4 md:px-8 py-20 md:py-24 bg-[#F3EFEA] overflow-hidden"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,26,23,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,26,23,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column (Brand & Contact Info) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-6">
          <div className="inline-flex items-center rounded-full border border-white/40 bg-[#F3EFEA]/80 px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-[#1C1A17] shadow-sm">
            {portfolioData.contact.sectionLabel}
          </div>
          
          <h2 
            className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight text-[#1C1A17] italic"
            dangerouslySetInnerHTML={{ __html: portfolioData.contact.titleHtml }}
          />
          
          <p className="text-[#6B6661] text-sm md:text-base leading-relaxed max-w-[50ch] font-light">
            {portfolioData.contact.description}
          </p>

          {/* Direct channels */}
          <div className="flex flex-col gap-3 mt-4 w-full">
            <a 
              href={`mailto:${portfolioData.contact.email}`} 
              className="flex items-center gap-3 text-[#6B6661] hover:text-[#C2410C] transition-colors duration-300 group"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#F3EFEA] text-[#C2410C] group-hover:bg-[#1C1A17] group-hover:text-[#FAF8F5] transition-all duration-300 shadow-sm">
                <Envelope size={16} />
              </span>
              <span className="text-sm font-medium tracking-wide">{portfolioData.contact.email}</span>
            </a>
          </div>

          {/* Social Network Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a 
              href={portfolioData.contact.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#F3EFEA] text-[#6B6661] hover:text-[#FAF8F5] hover:bg-[#1C1A17] transition-all duration-300 shadow-sm"
              style={{ cursor: 'pointer' }}
            >
              <GithubLogo size={16} weight="bold" />
            </a>
            <a 
              href={portfolioData.contact.linkedinUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#F3EFEA] text-[#6B6661] hover:text-[#FAF8F5] hover:bg-[#1C1A17] transition-all duration-300 shadow-sm"
              style={{ cursor: 'pointer' }}
            >
              <LinkedinLogo size={16} weight="bold" />
            </a>
          </div>

          {/* Final Memorable Phrase */}
          <div className="border-l-2 border-[#C2410C]/35 pl-5 py-1.5 mt-6">
            <p className="text-xs md:text-sm text-[#C2410C] font-serif italic font-light leading-relaxed">
              "{portfolioData.contact.quote}"
            </p>
          </div>
        </div>

        {/* Right Column (High-End Contact Form) */}
        <div className="lg:col-span-6 w-full flex flex-col gap-8">
          <DoubleBezelCard 
            outerClassName="border-white/40 hover:shadow-[0_20px_50px_rgba(28,26,23,0.04)] transition-all duration-500 w-full"
            innerClassName="flex flex-col gap-6"
          >
            <h3 className="text-lg font-bold tracking-tight text-[#1C1A17] text-left">Enviar un mensaje</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={reduceMotion ? {} : { scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C2410C]/10 border border-[#C2410C] text-[#C2410C]">
                  <Check size={20} weight="bold" />
                </span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-[#1C1A17] font-semibold">Mensaje enviado</h4>
                  <p className="text-xs text-[#6B6661]">Me pondré en contacto contigo a la brevedad posible.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#6B6661]">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full rounded-xl border border-[#1C1A17]/8 bg-[#FAF8F5] px-4 py-3 text-sm text-[#1C1A17] placeholder-zinc-400 focus:border-[#C2410C]/40 focus:outline-none transition-colors duration-300 font-light"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#6B6661]">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-xl border border-[#1C1A17]/8 bg-[#FAF8F5] px-4 py-3 text-sm text-[#1C1A17] placeholder-zinc-400 focus:border-[#C2410C]/40 focus:outline-none transition-colors duration-300 font-light"
                    placeholder="tu@correo.com"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#6B6661]">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full rounded-xl border border-[#1C1A17]/8 bg-[#FAF8F5] px-4 py-3 text-sm text-[#1C1A17] placeholder-zinc-400 focus:border-[#C2410C]/40 focus:outline-none transition-colors duration-300 resize-none font-light"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-2">
                  <MagneticButton 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </MagneticButton>
                </div>
              </form>
            )}
          </DoubleBezelCard>

          {/* Elegant Setup Image Showcase at the bottom of form */}
          <div className="double-bezel-outer rounded-[2rem] p-1.5 w-full aspect-[21/9] overflow-hidden group shadow-[0_15px_30px_rgba(28,26,23,0.02)] border-white/50">
            <div className="double-bezel-inner rounded-[calc(2rem-0.5rem)] overflow-hidden h-full w-full relative">
              <img 
                src="https://picsum.photos/seed/warm-mechanical-keyboard-night-lamp/800/600" 
                alt="Mauricio Gavilan Elegant Keyboard Setup Night" 
                className="object-cover h-full w-full opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
