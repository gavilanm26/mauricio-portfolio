"use client";

import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────────────────
   Orbital constants
───────────────────────────────────────────────────────────────────────────── */

const RADIUS_X = 172;   // horizontal radius of the ellipse
const RADIUS_Y = 58;    // vertical radius (gives 3-D tilt effect)
const CARD_W   = 152;   // px
const CARD_H   = 96;    // px
const DURATION = 22;    // seconds per full rotation

/* ─────────────────────────────────────────────────────────────────────────────
   Webpage mini-mockups  — no browser chrome, no technical text
───────────────────────────────────────────────────────────────────────────── */

function DashMini() {
  const bars = [38, 56, 44, 78, 55, 92, 68, 58, 84];
  return (
    <div className="w-full h-full bg-[#F7F8FA] flex overflow-hidden">
      {/* icon sidebar */}
      <div className="w-8 bg-white border-r border-neutral-100 flex flex-col items-center py-2 gap-2 flex-shrink-0">
        <div className="w-4 h-4 rounded-md bg-[#1C1A17]" />
        {[0, 1, 2, 3].map(i => (
          <div key={i} className="w-3.5 h-3.5 rounded-md"
            style={{ background: i === 0 ? '#C2410C18' : '#1C1A1708', border: i === 0 ? '1px solid #C2410C22' : undefined }} />
        ))}
      </div>
      {/* content */}
      <div className="flex-1 flex flex-col p-2 gap-1.5 overflow-hidden">
        <div className="w-14 h-2 rounded bg-neutral-700" />
        {/* stat row */}
        <div className="grid grid-cols-3 gap-1">
          {(['#22C55E', '#3B82F6', '#C2410C'] as const).map((c, i) => (
            <div key={i} className="bg-white rounded-lg border border-neutral-100 p-1">
              <div className="h-1 w-full rounded-full bg-neutral-100 overflow-hidden mb-1">
                <div className="h-full rounded-full" style={{ width: `${[75, 55, 90][i]}%`, background: c }} />
              </div>
              <div className="w-5 h-1.5 rounded bg-neutral-700" />
            </div>
          ))}
        </div>
        {/* bar chart */}
        <div className="flex-1 bg-white rounded-lg border border-neutral-100 p-1.5">
          <div className="flex items-end gap-0.5 h-full">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-sm"
                style={{ height: `${h}%`, background: i === 5 ? '#C2410C' : '#1C1A1710' }} />
            ))}
          </div>
        </div>
        {/* row */}
        <div className="bg-white rounded-lg border border-neutral-100 h-5 flex items-center px-1.5 gap-1">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <div className="flex-1 h-1 rounded bg-neutral-200" />
          <div className="w-6 h-1 rounded bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}

function LandingMini() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* nav */}
      <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-neutral-100 flex-shrink-0">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-[#1C1A17]" />
          <div className="w-8 h-1 rounded bg-neutral-600" />
        </div>
        <div className="flex items-center gap-1.5">
          {[20, 20, 20].map((w, i) => <div key={i} className="h-1 rounded bg-neutral-200" style={{ width: w }} />)}
          <div className="w-10 h-3.5 rounded-full bg-neutral-900" />
        </div>
      </div>
      {/* body */}
      <div className="flex-1 px-2.5 py-2 flex flex-col justify-between">
        <div>
          {/* pill */}
          <div className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-1.5 mb-1.5" style={{ paddingTop: 1, paddingBottom: 1 }}>
            <div className="w-1 h-1 rounded-full bg-[#C2410C]" />
            <div className="w-7 h-0.5 rounded bg-[#C2410C]/40" />
          </div>
          {/* headline blocks */}
          <div className="space-y-1 mb-1.5">
            <div className="h-2.5 w-full rounded bg-neutral-800" />
            <div className="h-2.5 w-10/12 rounded bg-neutral-800" />
            <div className="h-2.5 w-3/5 rounded bg-[#C2410C]" />
          </div>
          {/* body text */}
          <div className="space-y-0.5 mb-2">
            <div className="h-1 w-full rounded bg-neutral-200" />
            <div className="h-1 w-10/12 rounded bg-neutral-200" />
          </div>
          {/* cta */}
          <div className="flex gap-1.5">
            <div className="h-4 w-14 rounded-full bg-neutral-900" />
            <div className="h-4 w-14 rounded-full border border-neutral-300" />
          </div>
        </div>
        {/* mini bar decoration */}
        <div className="flex items-end gap-0.5 h-6">
          {[45, 65, 38, 80, 55].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: '#1C1A1710' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductMini() {
  const features = [
    { accent: '#C2410C', bg: '#FFF7ED' },
    { accent: '#3B82F6', bg: '#EFF6FF' },
    { accent: '#10B981', bg: '#ECFDF5' },
    { accent: '#8B5CF6', bg: '#F5F3FF' },
  ];
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* dark header */}
      <div className="bg-[#1C1A17] px-2.5 py-1.5 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-[#C2410C]" />
          <div className="w-8 h-1 rounded bg-white/30" />
        </div>
        <div className="w-12 h-3.5 rounded-full bg-white/8 border border-white/12" />
      </div>
      {/* 2×2 feature grid */}
      <div className="flex-1 grid grid-cols-2 gap-1.5 p-2">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl p-1.5 flex flex-col gap-1" style={{ background: f.bg }}>
            <div className="w-4 h-4 rounded-md flex items-center justify-center" style={{ background: f.accent + '22' }}>
              <div className="w-2 h-2 rounded" style={{ background: f.accent, opacity: 0.72 }} />
            </div>
            <div className="w-9 h-1 rounded" style={{ background: f.accent + '50' }} />
            <div className="w-full h-0.5 rounded bg-neutral-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ApiMini() {
  const endpoints = [
    { m: 'GET',  color: '#22C55E', w: 36 },
    { m: 'POST', color: '#3B82F6', w: 28 },
    { m: 'GET',  color: '#22C55E', w: 42 },
    { m: 'PUT',  color: '#F59E0B', w: 32 },
    { m: 'DEL',  color: '#EF4444', w: 24 },
  ];
  return (
    <div className="w-full h-full bg-[#0D1117] flex flex-col overflow-hidden">
      {/* header */}
      <div className="bg-[#161B22] border-b border-white/5 px-2.5 py-1.5 flex-shrink-0">
        <div className="w-16 h-1 rounded bg-white/20" />
      </div>
      {/* endpoints list */}
      <div className="flex-1 px-2 py-1.5 flex flex-col gap-1">
        {endpoints.map((r, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="text-[5px] font-mono font-bold w-5 flex-shrink-0 leading-none" style={{ color: r.color }}>
              {r.m}
            </span>
            <div className="h-0.5 flex-1 rounded bg-white/8" />
            <div className="h-1.5 rounded bg-white/5" style={{ width: r.w }} />
          </div>
        ))}
        {/* response box */}
        <div className="mt-0.5 rounded border border-white/6 bg-white/3 p-1">
          <div className="text-[5px] font-mono text-emerald-400 mb-0.5 leading-none">200 OK</div>
          <div className="h-0.5 w-14 rounded bg-white/12 mb-0.5" />
          <div className="h-0.5 w-10 rounded bg-white/12" />
        </div>
      </div>
    </div>
  );
}

function EcommerceMini() {
  const products = [
    { bg: '#FFF7ED' }, { bg: '#EFF6FF' },
    { bg: '#F0FDF4' }, { bg: '#F5F3FF' },
  ];
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* nav */}
      <div className="px-2.5 py-1.5 border-b border-neutral-100 flex items-center justify-between flex-shrink-0">
        <div className="w-10 h-1.5 rounded bg-neutral-700" />
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded bg-neutral-100" />
          <div className="w-3 h-3 rounded bg-neutral-100" />
        </div>
      </div>
      {/* product grid */}
      <div className="flex-1 grid grid-cols-2 gap-1 p-2">
        {products.map((p, i) => (
          <div key={i} className="rounded-xl border border-neutral-100 overflow-hidden flex flex-col">
            <div className="flex-1 flex items-center justify-center" style={{ background: p.bg }}>
              <div className="w-8 h-7 rounded bg-black/6" />
            </div>
            <div className="px-1 py-0.5 bg-white">
              <div className="w-10 h-1 rounded bg-neutral-300 mb-0.5" />
              <div className="w-5 h-1 rounded" style={{ background: '#C2410C60' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioMini() {
  return (
    <div className="w-full h-full bg-[#FAFAFA] flex flex-col overflow-hidden">
      {/* top nav */}
      <div className="px-2.5 py-1.5 bg-white border-b border-neutral-100 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-neutral-800" />
          <div className="w-10 h-1 rounded bg-neutral-400" />
        </div>
        <div className="flex gap-1.5">
          <div className="w-5 h-1 rounded bg-neutral-200" />
          <div className="w-5 h-1 rounded bg-neutral-200" />
        </div>
      </div>
      {/* mosaic */}
      <div className="flex-1 p-1.5 grid grid-cols-3 gap-1">
        <div className="col-span-2 row-span-2 rounded-xl border border-neutral-100"
          style={{ background: 'linear-gradient(135deg,#C2410C18,#C2410C06)' }} />
        <div className="rounded-xl border border-neutral-100"
          style={{ background: 'linear-gradient(135deg,#3B82F614,#3B82F606)' }} />
        <div className="rounded-xl border border-neutral-100"
          style={{ background: 'linear-gradient(135deg,#10B98114,#10B98106)' }} />
        <div className="col-span-3 rounded-xl border border-neutral-100"
          style={{ background: 'linear-gradient(135deg,#1C1A1706,transparent)' }} />
      </div>
    </div>
  );
}

function SaasMetricsMini() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* header strip */}
      <div className="bg-gradient-to-r from-[#1C1A17] to-[#2D2520] px-2.5 py-2 flex-shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded bg-[#C2410C]" />
            <div className="w-8 h-1 rounded bg-white/30" />
          </div>
          <div className="flex gap-1">
            <div className="w-4 h-1 rounded bg-white/15" />
            <div className="w-4 h-1 rounded bg-white/15" />
          </div>
        </div>
        <div className="flex gap-3">
          {['99.9%', '12ms', '2.4M'].map((v, i) => (
            <div key={i}>
              <div className="text-[6px] font-mono text-white/40 leading-none mb-0.5">
                {['uptime', 'p99', 'req/d'][i]}
              </div>
              <div className="text-[8px] font-bold text-white/80 leading-none">{v}</div>
            </div>
          ))}
        </div>
      </div>
      {/* body */}
      <div className="flex-1 p-2 flex flex-col gap-1.5">
        {/* sparklines */}
        {[
          { color: '#22C55E', vals: [55, 70, 48, 82, 60, 90, 74] },
          { color: '#3B82F6', vals: [40, 65, 55, 72, 50, 78, 62] },
        ].map((s, i) => (
          <div key={i} className="bg-neutral-50 rounded-lg border border-neutral-100 p-1.5">
            <div className="w-12 h-1 rounded bg-neutral-300 mb-1.5" />
            <div className="flex items-end gap-0.5 h-5">
              {s.vals.map((h, j) => (
                <div key={j} className="flex-1 rounded-sm"
                  style={{ height: `${h}%`, background: j === 5 ? s.color : s.color + '22' }} />
              ))}
            </div>
          </div>
        ))}
        {/* status row */}
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <div className="flex-1 h-1 rounded bg-neutral-200" />
          <div className="w-8 h-2.5 rounded-full bg-emerald-50 border border-emerald-200" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Orbital item
───────────────────────────────────────────────────────────────────────────── */

interface OrbitalItemProps {
  index: number;
  total: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  angleValue: any;
  content: React.ReactNode;
  reduceMotion: boolean | null;
}

function OrbitalItem({ index, total, angleValue, content, reduceMotion }: OrbitalItemProps) {
  const offset = (index * 2 * Math.PI) / total;
  const θ = useTransform(angleValue, (a: number) => a + offset);

  const x = useTransform(θ, (a: number) => Math.cos(a) * RADIUS_X);
  const y = useTransform(θ, (a: number) => Math.sin(a) * RADIUS_Y);

  // sin(a) in [-1 back, +1 front]
  const scale = useTransform(θ, (a: number) =>
    reduceMotion ? 1 : 0.76 + ((Math.sin(a) + 1) / 2) * 0.29  // [0.76 → 1.05]
  );
  const opacity = useTransform(θ, (a: number) =>
    reduceMotion ? 1 : 0.36 + ((Math.sin(a) + 1) / 2) * 0.64  // [0.36 → 1.0]
  );
  const zIndex = useTransform(θ, (a: number) =>
    Math.round(((Math.sin(a) + 1) / 2) * 30) + 5               // [5 → 35]
  );

  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -CARD_W / 2,
    marginTop: -CARD_H / 2,
    width: CARD_W,
    height: CARD_H,
  };

  return (
    <motion.div
      style={
        reduceMotion
          ? baseStyle
          : { ...baseStyle, x, y, scale, opacity, zIndex }
      }
      className="rounded-2xl overflow-hidden border border-black/[0.07] shadow-[0_6px_24px_rgba(28,26,23,0.12),0_1px_4px_rgba(28,26,23,0.06)]"
    >
      {content}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Main export
───────────────────────────────────────────────────────────────────────────── */

const CARDS = [
  { id: 'dash',      content: <DashMini /> },
  { id: 'landing',   content: <LandingMini /> },
  { id: 'product',   content: <ProductMini /> },
  { id: 'api',       content: <ApiMini /> },
  { id: 'ecommerce', content: <EcommerceMini /> },
  { id: 'portfolio', content: <PortfolioMini /> },
  { id: 'saas',      content: <SaasMetricsMini /> },
];

export function OrbitalScreenshotCarousel() {
  const reduceMotion = useReducedMotion();
  const angle = useMotionValue(0);

  useEffect(() => {
    if (reduceMotion) return;
    const ctrl = animate(angle, Math.PI * 2, {
      ease: 'linear',
      duration: DURATION,
      repeat: Infinity,
    });
    return () => ctrl.stop();
  }, [angle, reduceMotion]);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none pointer-events-none"
    >
      {/* Faint orbit ellipse guide */}
      <div
        className="absolute pointer-events-none rounded-[50%]"
        style={{
          width:  RADIUS_X * 2,
          height: RADIUS_Y * 2,
          border: '1px dashed rgba(28,26,23,0.05)',
        }}
      />

      {/* Ambient warm glow at center */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194,65,12,0.07) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {CARDS.map((card, i) => (
        <OrbitalItem
          key={card.id}
          index={i}
          total={CARDS.length}
          angleValue={angle}
          content={card.content}
          reduceMotion={reduceMotion}
        />
      ))}
    </div>
  );
}
