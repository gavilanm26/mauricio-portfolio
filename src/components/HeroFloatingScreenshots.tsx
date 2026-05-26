"use client";

import { motion, useReducedMotion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────────────
   Mockup internals — look like real webpage screenshots (no browser chrome)
───────────────────────────────────────────────────────────────────────── */

function PortfolioLanding() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Thin nav */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-100">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-[#1C1A17]" />
          <div className="w-12 h-1.5 rounded-full bg-neutral-700" />
        </div>
        <div className="flex items-center gap-3">
          {[48, 36, 40].map((w, i) => (
            <div key={i} className="h-1 rounded bg-neutral-300" style={{ width: w }} />
          ))}
          <div className="w-14 h-5 rounded-full bg-neutral-900" />
        </div>
      </div>

      {/* Hero area */}
      <div className="flex-1 flex flex-col justify-between px-4 py-3">
        <div>
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-1 rounded-full border border-[#C2410C]/20 bg-orange-50 px-2 py-0.5 mb-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C2410C]" />
            <div className="w-10 h-1 rounded bg-[#C2410C]/50" />
          </div>
          {/* Headline blocks */}
          <div className="space-y-1.5 mb-2">
            <div className="h-4 w-full rounded bg-neutral-800" />
            <div className="h-4 w-10/12 rounded bg-neutral-800" />
            <div className="h-4 w-7/12 rounded bg-[#C2410C]" />
          </div>
          {/* Body text */}
          <div className="space-y-1 mb-3">
            <div className="h-1.5 w-full rounded bg-neutral-200" />
            <div className="h-1.5 w-11/12 rounded bg-neutral-200" />
            <div className="h-1.5 w-8/12 rounded bg-neutral-200" />
          </div>
          {/* CTA row */}
          <div className="flex gap-2">
            <div className="h-6 w-20 rounded-full bg-neutral-900" />
            <div className="h-6 w-20 rounded-full border border-neutral-300" />
          </div>
        </div>

        {/* Visual accent — mini bar chart */}
        <div className="flex items-end gap-1 h-10 pt-2">
          {[55, 72, 45, 90, 60, 80, 40, 95, 65].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: i === 7 ? '#C2410C' : '#1C1A1710',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectDashboard() {
  return (
    <div className="w-full h-full bg-[#F7F8FA] flex overflow-hidden">
      {/* Icon-only sidebar */}
      <div className="w-10 bg-white border-r border-neutral-100 flex flex-col items-center py-3 gap-2.5 flex-shrink-0">
        <div className="w-6 h-6 rounded-lg bg-[#1C1A17] flex items-center justify-center">
          <div className="w-3 h-3 rounded-sm bg-white/30" />
        </div>
        <div className="w-px h-2 bg-neutral-200" />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-lg"
            style={{ background: i === 0 ? '#C2410C15' : '#1C1A1708', border: i === 0 ? '1px solid #C2410C25' : undefined }}
          />
        ))}
        <div className="flex-1" />
        <div className="w-5 h-5 rounded-full bg-neutral-200" />
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col p-3 gap-2.5 overflow-hidden min-w-0">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div>
            <div className="w-16 h-2.5 rounded bg-neutral-700 mb-1" />
            <div className="w-24 h-1.5 rounded bg-neutral-300" />
          </div>
          <div className="flex gap-1.5">
            <div className="w-16 h-5.5 rounded-lg border border-neutral-200 bg-white" style={{ height: 22 }} />
            <div className="w-20 rounded-lg bg-neutral-900" style={{ height: 22 }} />
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { accent: '#22C55E', pct: 78 },
            { accent: '#3B82F6', pct: 55 },
            { accent: '#C2410C', pct: 90 },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl border border-neutral-100 p-2 shadow-sm">
              <div className="w-6 h-1.5 rounded bg-neutral-300 mb-2" />
              <div className="h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.accent }} />
              </div>
              <div className="w-8 h-2.5 rounded bg-neutral-700 mt-1.5" />
            </div>
          ))}
        </div>

        {/* Chart block */}
        <div className="flex-1 bg-white rounded-xl border border-neutral-100 p-2.5 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="w-20 h-1.5 rounded bg-neutral-700" />
            <div className="flex gap-1">
              {['1D', '7D', '30D'].map((t, j) => (
                <div
                  key={t}
                  className="w-5 rounded text-[5px] flex items-center justify-center font-mono"
                  style={{ height: 16, background: j === 1 ? '#1C1A17' : '#F5F5F4', color: j === 1 ? '#fff' : '#9CA3AF' }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-0.5" style={{ height: 44 }}>
            {[40, 58, 44, 75, 60, 88, 70, 55, 82, 65, 94, 78].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, background: i === 10 ? '#C2410C' : '#1C1A1710' }}
              />
            ))}
          </div>
        </div>

        {/* Row items */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg border border-neutral-100 flex items-center px-2.5 gap-2 shadow-sm" style={{ height: 26 }}>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: ['#22C55E', '#3B82F6'][i] }} />
            <div className="flex-1 h-1.5 rounded bg-neutral-200" />
            <div className="w-8 h-1.5 rounded bg-neutral-200" />
            <div className="w-10 h-3.5 rounded-full border text-center" style={{ background: ['#F0FDF4', '#EFF6FF'][i], borderColor: ['#BBF7D0', '#BFDBFE'][i] }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SaasProductPage() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Dark nav */}
      <div className="bg-[#1C1A17] px-4 py-2.5 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-md bg-[#C2410C]" />
          <div className="w-12 h-1.5 rounded-full bg-white/30" />
        </div>
        <div className="flex items-center gap-3">
          {[36, 30, 34].map((w, i) => (
            <div key={i} className="h-1 rounded bg-white/20" style={{ width: w }} />
          ))}
          <div className="w-14 h-5 rounded-full bg-white/10 border border-white/15" />
        </div>
      </div>

      {/* Gradient hero strip */}
      <div
        className="flex-shrink-0 px-4 py-3.5"
        style={{ background: 'linear-gradient(135deg, #1C1A17 0%, #2D2520 60%, #3D2010 100%)' }}
      >
        <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 mb-2">
          <div className="w-1 h-1 rounded-full bg-[#C2410C]" />
          <div className="w-12 h-1 rounded bg-white/30" />
        </div>
        <div className="space-y-1 mb-2">
          <div className="w-3/4 h-3 rounded bg-white/25" />
          <div className="w-1/2 h-3 rounded bg-white/25" />
        </div>
        <div className="flex gap-2">
          <div className="w-14 h-4.5 rounded-full bg-[#C2410C]" style={{ height: 18 }} />
          <div className="w-14 rounded-full border border-white/20" style={{ height: 18 }} />
        </div>
      </div>

      {/* Feature grid */}
      <div className="flex-1 grid grid-cols-2 gap-2 p-3 overflow-hidden">
        {[
          { accent: '#C2410C', bg: '#FFF7ED', border: '#FED7AA' },
          { accent: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE' },
          { accent: '#10B981', bg: '#ECFDF5', border: '#A7F3D0' },
          { accent: '#8B5CF6', bg: '#F5F3FF', border: '#DDD6FE' },
        ].map((f, i) => (
          <div
            key={i}
            className="rounded-xl p-2.5 flex flex-col justify-between"
            style={{ background: f.bg, border: `1px solid ${f.border}` }}
          >
            <div
              className="w-5 h-5 rounded-lg mb-1.5 flex items-center justify-center"
              style={{ background: f.accent + '20' }}
            >
              <div className="w-2.5 h-2.5 rounded" style={{ background: f.accent, opacity: 0.75 }} />
            </div>
            <div>
              <div className="w-12 h-1.5 rounded mb-1" style={{ background: f.accent + '50' }} />
              <div className="w-full h-1 rounded bg-neutral-200" />
              <div className="w-4/5 h-1 rounded bg-neutral-200 mt-0.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA band */}
      <div className="px-3 py-2 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between flex-shrink-0">
        <div className="w-28 h-1.5 rounded bg-neutral-300" />
        <div className="w-16 h-5 rounded-full bg-neutral-900" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Floating config
───────────────────────────────────────────────────────────────────────── */

const SCREENSHOTS = [
  {
    id: 'small',
    content: <PortfolioLanding />,
    // top-right, small
    position: { top: 0, right: 0, width: 210, height: 132 },
    rotate: 1.5,
    zIndex: 10,
    float: { y: 12, x: 4, duration: 6.5, delay: 0.4 },
  },
  {
    id: 'large',
    content: <ProjectDashboard />,
    // center, dominant
    position: { top: 90, left: 0, width: 360, height: 226 },
    rotate: -1,
    zIndex: 20,
    float: { y: 15, x: 5, duration: 8, delay: 0 },
  },
  {
    id: 'medium',
    content: <SaasProductPage />,
    // bottom-right
    position: { bottom: 0, right: 8, width: 300, height: 188 },
    rotate: 1.8,
    zIndex: 15,
    float: { y: 10, x: 3, duration: 9, delay: 1.4 },
  },
] as const;

/* ─────────────────────────────────────────────────────────────────────────
   Main export
───────────────────────────────────────────────────────────────────────── */

export function HeroFloatingScreenshots() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full">
      {/* Ambient warm glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '20%',
          left: '30%',
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194,65,12,0.08) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />

      {SCREENSHOTS.map((shot) => {
        const { float } = shot;
        const pos: React.CSSProperties = {
          position: 'absolute',
          width: shot.position.width,
          height: shot.position.height,
          zIndex: shot.zIndex,
          ...('top' in shot.position ? { top: shot.position.top } : {}),
          ...('bottom' in shot.position ? { bottom: shot.position.bottom } : {}),
          ...('left' in shot.position ? { left: shot.position.left } : {}),
          ...('right' in shot.position ? { right: shot.position.right } : {}),
        };

        return (
          <motion.div
            key={shot.id}
            initial={{ opacity: 0, y: 20 }}
            animate={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : {
                    opacity: 1,
                    rotate: shot.rotate,
                    y: [0, -float.y, float.y * 0.4, -float.y * 0.6, 0],
                    x: [0, float.x, -float.x * 0.6, float.x * 0.4, 0],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0.7, delay: float.delay }
                : {
                    opacity: { duration: 0.8, delay: float.delay, ease: 'easeOut' },
                    rotate: { duration: 0.8, delay: float.delay, ease: 'easeOut' },
                    y: {
                      duration: float.duration,
                      delay: float.delay,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: [0.45, 0, 0.55, 1],
                    },
                    x: {
                      duration: float.duration * 1.2,
                      delay: float.delay + 0.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: [0.45, 0, 0.55, 1],
                    },
                  }
            }
            style={pos}
            className="overflow-hidden rounded-3xl border border-black/[0.06] shadow-[0_4px_24px_rgba(28,26,23,0.10),0_1px_4px_rgba(28,26,23,0.06)] select-none pointer-events-none"
          >
            {shot.content}
          </motion.div>
        );
      })}
    </div>
  );
}
