"use client";

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  showIcon?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function MagneticButton({
  children,
  showIcon = true,
  variant = 'primary',
  className = '',
  onClick,
  disabled,
  type = 'button',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Magnetic pull threshold (max 15px travel)
    const factor = 0.25;
    setPosition({ x: x * factor, y: y * factor });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const bgClasses = 
    variant === 'primary' 
      ? 'bg-warm-charcoal hover:bg-orange-700 text-warm-bg shadow-sm transition-all duration-300' 
      : 'bg-warm-card hover:bg-warm-border/40 text-warm-charcoal border border-warm-border';

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={reduceMotion ? {} : { x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      whileHover={reduceMotion ? {} : { scale: 1.02 }}
      whileTap={reduceMotion ? {} : { scale: 0.98 }}
      className={`group relative flex items-center justify-between gap-4 rounded-full pl-6 pr-2.5 py-2.5 font-medium transition-all duration-300 ${bgClasses} ${className}`}
      style={{ cursor: 'pointer' }}
    >
      <span className="text-xs font-semibold uppercase tracking-wider">{children}</span>
      {showIcon && (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-warm-bg/10 dark:bg-warm-charcoal/10 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight size={14} weight="bold" />
        </span>
      )}
    </motion.button>
  );
}
