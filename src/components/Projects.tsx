"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { DoubleBezelCard } from './ui/DoubleBezelCard';
import { MagneticButton } from './ui/MagneticButton';
import { GithubLogo } from '@phosphor-icons/react';
import { portfolioData } from '@/data/portfolioData';

interface ProjectsFeaturedStackCardProps {
  title: string;
  category: string;
  image: string;
  achievement: string;
  tags: string[];
  className: string;
  style?: React.CSSProperties;
}

// Stylized Glassmorphic Card inside Projects Header
function ProjectsFeaturedStackCard({
  title,
  category,
  image,
  achievement,
  tags,
  className,
  style
}: ProjectsFeaturedStackCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } }}
      style={style}
      className={`rounded-2xl border border-white/40 bg-[#FAF8F5]/35 backdrop-blur-md p-3 text-left shadow-[0_15px_35px_rgba(28,26,23,0.05),inset_0_1px_0_rgba(255,255,255,0.7)] hover:border-[#C2410C]/20 transition-colors duration-300 group/card ${className}`}
    >
      {/* Inner Bezel */}
      <div className="absolute inset-[1px] border border-[#1C1A17]/5 rounded-[calc(1rem-1px)] pointer-events-none z-10" />

      {/* Mini Technical Header */}
      <div className="flex items-center justify-between border-b border-[#1C1A17]/8 pb-1.5 mb-2 text-[8px] font-mono font-bold tracking-wider text-[#6B6661]">
        <span>// {category}</span>
        <span className="text-[#C2410C] font-semibold">{achievement}</span>
      </div>

      {/* Image container */}
      <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-[#1C1A17]/8 mb-1.5">
        <img 
          src={image} 
          alt={title}
          className="object-cover h-full w-full opacity-90 transition-transform duration-700 group-hover/card:scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Title */}
      <h4 className="text-[10px] font-bold tracking-tight text-[#1C1A17] line-clamp-1">{title}</h4>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1 mt-1.5">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="inline-block text-[7px] font-mono font-semibold text-[#6B6661] bg-[#FAF8F5]/80 px-1.5 py-0.5 rounded border border-[#1C1A17]/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section 
      id="projects" 
      className="relative w-full px-4 md:px-8 py-32 md:py-44 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,26,23,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,26,23,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-24">
        {/* Header Title & Asymmetric Parallax Card Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full border-b border-[#1C1A17]/8 pb-20 pointer-events-none">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-4 max-w-2xl pointer-events-auto">
            <div className="inline-flex items-center rounded-full border border-white/40 bg-[#F3EFEA]/80 px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-[#1C1A17] shadow-sm">
              {portfolioData.projects.sectionLabel}
            </div>
            <h2 
              className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight text-[#1C1A17] italic"
              dangerouslySetInnerHTML={{ __html: portfolioData.projects.titleHtml }}
            />
            <p className="text-[#6B6661] text-base md:text-lg leading-relaxed font-light">
              {portfolioData.projects.description}
            </p>
          </div>
          
          {/* Asymmetric CSS Floating Cards Parallax Stack */}
          <div className="lg:col-span-5 w-full flex justify-center relative h-[380px] md:h-[440px] pointer-events-auto">
            <div className="relative w-full max-w-[380px] h-full select-none scale-[0.78] xs:scale-[0.88] sm:scale-100 origin-center">
              
              {/* CARD 1: Venta de Palcos (floats up) */}
              <ProjectsFeaturedStackCard
                title="Venta de Palcos Premium"
                category="FINTECH / EVENTOS"
                image="/project_palcos.png"
                achievement="50k Transacciones/s"
                tags={['.NET 8', 'SQL Server', 'Redis']}
                className="float-hero-1 w-[180px] md:w-[200px]"
                style={{ top: '20px', left: '0px' }}
              />

              {/* CARD 2: OCR Inteligente (floats down) */}
              <ProjectsFeaturedStackCard
                title="OCR Automatizado por IA"
                category="AI APPLIED / CLOUD"
                image="/project_ocr.png"
                achievement="-85% Tiempo Manual"
                tags={['Python', 'NestJS', 'Textract']}
                className="float-hero-2 w-[190px] md:w-[210px]"
                style={{ top: '110px', right: '-15px' }}
              />

              {/* CARD 3: Conciliación Bancaria (floats up) */}
              <ProjectsFeaturedStackCard
                title="Conciliación Contable"
                category="ENTERPRISE / DATA"
                image="/project_banking.png"
                achievement="99.4% Automatizado"
                tags={['C# Core', 'SQL Server', 'Redis']}
                className="float-hero-3 w-[170px] md:w-[195px]"
                style={{ bottom: '15px', left: '20px' }}
              />

              {/* CARD 4: Licencias Serverless (floats down) */}
              <ProjectsFeaturedStackCard
                title="Distribución Serverless"
                category="AWS / SERVERLESS"
                image="/project_licensing.png"
                achievement="1M Peticiones/h"
                tags={['AWS Lambda', 'DynamoDB']}
                className="float-hero-4 w-[160px] md:w-[185px]"
                style={{ top: '-10px', right: '15px' }}
              />

            </div>
          </div>
        </div>

        {/* Masonry Asymmetric Grid (visually offset columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 w-full">
          {portfolioData.projects.list.map((project, i) => (
            <motion.div
              key={project.title}
              initial={reduceMotion ? {} : { opacity: 0.3, scale: 0.91, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ type: 'spring', stiffness: 70, damping: 14, delay: i * 0.05 }}
              className={`w-full h-full ${project.asymmetricOffset}`}
            >
              <DoubleBezelCard 
                outerClassName="h-full border-white/40 hover:shadow-[0_20px_50px_rgba(28,26,23,0.05)] hover:border-[#C2410C]/20 transition-all duration-600"
                innerClassName="flex flex-col justify-between p-0 md:p-0 gap-6 h-full overflow-hidden group"
              >
                {/* Media Container (with clean slow zoom on hover) */}
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-[#1C1A17]/8">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover h-full w-full opacity-95 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Container */}
                <div className="flex flex-col gap-6 px-6 pb-8 md:px-8 text-left">
                  {/* Title & Info */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1C1A17]">{project.title}</h3>
                    <p className="text-[#6B6661] text-sm leading-relaxed font-light">{project.description}</p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center rounded-full bg-[#FAF8F5] border border-[#1C1A17]/8 px-2.5 py-0.5 text-[10px] font-medium text-[#6B6661]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key achievement / result card (Burnt Orange tint) */}
                  <div className="rounded-xl border border-[#C2410C]/10 bg-[#C2410C]/4 p-4 shadow-sm">
                    <p className="text-xs text-[#C2410C] leading-relaxed font-medium">
                      <span className="font-bold uppercase tracking-wider text-[10px] block mb-0.5">// Logro Clave:</span>
                      {project.achievement}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-row items-center gap-4 mt-2">
                    <a href={project.demoLink} className="flex-1 sm:flex-none">
                      <MagneticButton variant="primary" className="w-full">
                        Ver Proyecto
                      </MagneticButton>
                    </a>
                    <a 
                      href={project.codeLink}
                      aria-label={`Ver código de ${project.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#F3EFEA]/80 text-[#6B6661] hover:text-[#1C1A17] hover:bg-[#F3EFEA] transition-all duration-300 shadow-sm"
                      style={{ cursor: 'pointer' }}
                    >
                      <GithubLogo size={16} weight="bold" />
                    </a>
                  </div>
                </div>
              </DoubleBezelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
