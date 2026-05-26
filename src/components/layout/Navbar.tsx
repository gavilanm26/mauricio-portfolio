"use client";

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const navLinks = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Sobre Mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#experience', label: 'Trayectoria' },
  { href: '#contact', label: 'Contacto' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Navbar Pill (Liquid Glass Bezel Design) */}
      <motion.nav 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 mx-auto w-[92%] max-w-2xl rounded-full border border-white/20 bg-[#FAF8F5]/40 p-2.5 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_15px_30px_rgba(28,26,23,0.03)]"
      >
        <div className="flex items-center justify-between px-3">
          {/* Logo Brand / Availability */}
          <div className="flex items-center gap-3">
            <a href="#home" className="text-xs font-bold tracking-[0.2em] text-[#1C1A17] uppercase">
              MAURICIO<span className="text-[#C2410C] font-light">GAVILAN</span>
            </a>
            {/* Live Availability Badge */}
            <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-[#C2410C]/10 bg-[#C2410C]/5 px-2.5 py-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2410C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C2410C]"></span>
              </span>
              <span className="text-[8px] font-bold tracking-wider text-[#C2410C] uppercase">Q3/Q4 Slots Libres</span>
            </div>
          </div>
          
          {/* Desktop Navigation with Elastic Sliding Pill */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link, idx) => (
              <a 
                key={link.href} 
                href={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-3.5 py-1.5 text-[9px] uppercase font-bold text-[#6B6661] hover:text-[#1C1A17] transition-colors duration-300 tracking-wider z-10"
              >
                <span className="relative z-20">{link.label}</span>
                {hoveredIndex === idx && !reduceMotion && (
                  <motion.span
                    layoutId="navbarHover"
                    className="absolute inset-0 rounded-full bg-[#F3EFEA]/80 -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                    transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Hamburger Icon */}
          <button 
            onClick={toggleMenu}
            aria-label="Abrir Menú de Navegación"
            className="flex items-center justify-center p-2 rounded-full text-[#6B6661] hover:text-[#1C1A17] hover:bg-[#F3EFEA] transition-all duration-300"
            style={{ cursor: 'pointer' }}
          >
            {isOpen ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
          </button>
        </div>
      </motion.nav>

      {/* Screen-Filling Overlay Modal (Cinematic Slide & Fade) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#FAF8F5]/98 backdrop-blur-3xl"
          >
            {/* Elegant grain inside overlay */}
            <div className="noise-overlay" />
            
            <div className="flex flex-col items-center gap-6 text-center z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-serif text-[#6B6661] hover:text-[#C2410C] hover:scale-105 transition-all duration-300 tracking-wide block italic font-light"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
