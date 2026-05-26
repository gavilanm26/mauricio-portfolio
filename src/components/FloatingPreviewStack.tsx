"use client";

import { motion, useReducedMotion } from 'framer-motion';

interface Preview {
  id: number;
  zIndex: number;
  top: string;
  left: string;
  width: string;
  rotate: number;
  delay: number;
  duration: number;
  yRange: number;
  xRange: number;
  content: React.ReactNode;
}

function DashboardPreview() {
  return (
    <div className="w-full h-full bg-white rounded-[inherit] overflow-hidden flex flex-col">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#F5F5F4] border-b border-neutral-100">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
        <div className="flex-1 mx-2 h-3.5 rounded bg-neutral-200/80 flex items-center px-1.5">
          <span className="text-[6px] text-neutral-400 font-mono">api.gavilan.dev/dashboard</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-10 bg-[#1C1A17] flex flex-col items-center py-2 gap-2">
          <div className="w-5 h-5 rounded bg-[#C2410C]/80" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-5 h-1.5 rounded bg-white/10" />
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 p-2 bg-[#FAFAFA] flex flex-col gap-1.5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-1">
            {['#C2410C', '#1C1A17', '#6B7280'].map((c, i) => (
              <div key={i} className="rounded bg-white border border-neutral-100 p-1 shadow-sm">
                <div className="w-3 h-1 rounded mb-1" style={{ background: c, opacity: 0.7 }} />
                <div className="w-full h-3 rounded" style={{ background: `${c}15` }}>
                  <div className="h-full rounded" style={{ background: c, width: `${[75,55,85][i]}%`, opacity: 0.6 }} />
                </div>
              </div>
            ))}
          </div>
          {/* Chart area */}
          <div className="flex-1 rounded bg-white border border-neutral-100 p-1.5 shadow-sm">
            <div className="w-10 h-1 rounded bg-neutral-200 mb-1.5" />
            <div className="flex items-end gap-0.5 h-8">
              {[40, 65, 45, 80, 55, 90, 70, 60, 85, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 7 ? '#C2410C' : '#1C1A1715',
                  }}
                />
              ))}
            </div>
          </div>
          {/* Table rows */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="h-3 rounded bg-white border border-neutral-100 flex items-center px-1.5 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <div className="flex-1 h-1 rounded bg-neutral-200" />
              <div className="w-4 h-1 rounded bg-neutral-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingPreview() {
  return (
    <div className="w-full h-full bg-[#1C1A17] rounded-[inherit] overflow-hidden flex flex-col">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0F0E0C] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
        <div className="flex-1 mx-2 h-3.5 rounded bg-white/5 flex items-center px-1.5">
          <span className="text-[6px] text-white/30 font-mono">gavilan.dev</span>
        </div>
      </div>
      <div className="flex-1 p-3 flex flex-col gap-2">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <div className="w-8 h-1.5 rounded bg-white/20" />
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => <div key={i} className="w-4 h-1 rounded bg-white/10" />)}
          </div>
        </div>
        {/* Hero text */}
        <div className="flex-1 flex flex-col justify-center gap-1.5">
          <div className="w-3/4 h-3 rounded bg-white/30" />
          <div className="w-1/2 h-3 rounded bg-white/30" />
          <div className="w-full h-1.5 rounded bg-white/10 mt-1" />
          <div className="w-5/6 h-1.5 rounded bg-white/10" />
          <div className="mt-2 flex gap-1.5">
            <div className="w-10 h-4 rounded-full bg-[#C2410C]" />
            <div className="w-10 h-4 rounded-full border border-white/20" />
          </div>
        </div>
        {/* Cards row */}
        <div className="grid grid-cols-3 gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded bg-white/5 border border-white/5 p-1">
              <div className="w-3 h-3 rounded bg-[#C2410C]/40 mb-1" />
              <div className="w-full h-1 rounded bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ApiPreview() {
  return (
    <div className="w-full h-full bg-[#0D1117] rounded-[inherit] overflow-hidden flex flex-col font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#161B22] border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
        <span className="text-[6px] text-white/30 ml-2">API Explorer</span>
      </div>
      <div className="flex-1 p-2.5 flex flex-col gap-1.5">
        {[
          { method: 'GET', path: '/v1/profile', color: '#22C55E' },
          { method: 'POST', path: '/v1/projects', color: '#3B82F6' },
          { method: 'GET', path: '/v1/metrics', color: '#22C55E' },
          { method: 'PUT', path: '/v1/config', color: '#F59E0B' },
          { method: 'DELETE', path: '/v1/cache', color: '#EF4444' },
        ].map((r, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="text-[6px] font-bold w-7 shrink-0" style={{ color: r.color }}>{r.method}</span>
            <span className="text-[6px] text-white/40">{r.path}</span>
            <div className="flex-1" />
            <div className="w-5 h-1.5 rounded bg-white/5" />
          </div>
        ))}
        <div className="mt-1 rounded bg-white/3 border border-white/5 p-1.5">
          <div className="text-[6px] text-emerald-400 mb-1">200 OK</div>
          {['id: "gvl-001"', 'role: "architect"', 'status: "active"'].map((l, i) => (
            <div key={i} className="text-[5.5px] text-white/30">{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CloudPreview() {
  return (
    <div className="w-full h-full bg-white rounded-[inherit] overflow-hidden flex flex-col">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#F5F5F4] border-b border-neutral-100">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
        <span className="text-[6px] text-neutral-400 ml-2 font-mono">AWS Arch · us-east-1</span>
      </div>
      <div className="flex-1 p-2.5 bg-[#F8FAFC] relative">
        {/* Region box */}
        <div className="absolute inset-2 rounded border border-dashed border-[#C2410C]/30 bg-[#C2410C]/2 p-1.5">
          <div className="text-[5.5px] text-[#C2410C]/60 font-mono mb-1.5 uppercase tracking-wider">VPC</div>
          {/* Services */}
          <div className="grid grid-cols-3 gap-1">
            {[
              { label: 'ECS', bg: '#EFF6FF', border: '#BFDBFE', text: '#3B82F6' },
              { label: 'RDS', bg: '#FFF7ED', border: '#FED7AA', text: '#C2410C' },
              { label: 'Redis', bg: '#F0FDF4', border: '#BBF7D0', text: '#16A34A' },
              { label: 'ALB', bg: '#FDF4FF', border: '#E9D5FF', text: '#9333EA' },
              { label: 'S3', bg: '#FFF7ED', border: '#FED7AA', text: '#C2410C' },
              { label: 'SQS', bg: '#EFF6FF', border: '#BFDBFE', text: '#3B82F6' },
            ].map((s, i) => (
              <div key={i} className="rounded border px-1 py-0.5 flex items-center justify-center" style={{ background: s.bg, borderColor: s.border }}>
                <span className="text-[5.5px] font-bold" style={{ color: s.text }}>{s.label}</span>
              </div>
            ))}
          </div>
          {/* Arrows */}
          <div className="mt-1.5 flex items-center gap-0.5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex-1 h-px bg-neutral-300" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const previews = [
  {
    id: 0,
    zIndex: 10,
    top: '8%',
    left: '10%',
    width: '260px',
    height: '170px',
    rotate: -3,
    delay: 0,
    duration: 7,
    yRange: 12,
    xRange: 6,
    content: <DashboardPreview />,
  },
  {
    id: 1,
    zIndex: 20,
    top: '18%',
    left: '38%',
    width: '220px',
    height: '148px',
    rotate: 2,
    delay: 1.2,
    duration: 8.5,
    yRange: 10,
    xRange: 5,
    content: <LandingPreview />,
  },
  {
    id: 2,
    zIndex: 30,
    top: '42%',
    left: '18%',
    width: '200px',
    height: '138px',
    rotate: -1.5,
    delay: 0.6,
    duration: 9,
    yRange: 14,
    xRange: 7,
    content: <ApiPreview />,
  },
  {
    id: 3,
    zIndex: 15,
    top: '52%',
    left: '46%',
    width: '190px',
    height: '130px',
    rotate: 3,
    delay: 1.8,
    duration: 7.5,
    yRange: 11,
    xRange: 5,
    content: <CloudPreview />,
  },
];

export function FloatingPreviewStack() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full select-none pointer-events-none">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C2410C]/6 blur-3xl pointer-events-none" />

      {previews.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          animate={
            reduceMotion
              ? { opacity: 1, y: 0 }
              : {
                  opacity: 1,
                  y: [0, -p.yRange, p.yRange * 0.4, -p.yRange * 0.6, 0],
                  x: [0, p.xRange, -p.xRange * 0.5, p.xRange * 0.3, 0],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0.6, delay: p.delay }
              : {
                  opacity: { duration: 0.8, delay: p.delay },
                  y: {
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  },
                  x: {
                    duration: p.duration * 1.15,
                    delay: p.delay + 0.3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  },
                }
          }
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            width: p.width,
            height: (p as any).height,
            zIndex: p.zIndex,
            rotate: p.rotate,
          }}
          className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(28,26,23,0.12),0_2px_8px_rgba(28,26,23,0.06)] border border-white/60"
        >
          {p.content}
        </motion.div>
      ))}
    </div>
  );
}
