"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

/* ─── Orbital constants ────────────────────────────────────────────────────
   Right column ≈ 494 px wide on 1280 px viewport.
   RADIUS_X = 210 → side-cards enter/exit at ±210 px from column center,
   creating a clean entrance-from-right / exit-to-right effect when the
   column clips with overflow-hidden.
─────────────────────────────────────────────────────────────────────────── */
const CARD_W = 370;
const CARD_H = 222;
const RADIUS_X = 210;
const RADIUS_Y = 76;
const SPEED = 0.00015; // rad / ms ≈ 42-second full rotation

/* ─── Card mockups at 370 × 222 px ────────────────────────────────────────
   No browser chrome. Light, clean, real-page layouts.
─────────────────────────────────────────────────────────────────────────── */

function ProjectDashboard() {
  const bars = [38, 55, 42, 78, 60, 87, 70, 55, 84, 64, 94, 75];
  return (
    <div className="w-full h-full flex overflow-hidden bg-[#F7F8FA]">
      {/* Sidebar */}
      <div className="w-12 bg-[#1C1A17] flex flex-col items-center py-4 gap-3 flex-shrink-0">
        <div className="w-7 h-7 rounded-xl bg-[#C2410C]" />
        <div className="w-px h-2 bg-white/10" />
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-6 h-6 rounded-lg"
            style={{
              background:
                i === 0 ? "rgba(194,65,12,.22)" : "rgba(255,255,255,.05)",
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col p-4 gap-2.5 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div>
            <div className="w-20 h-3 rounded bg-neutral-700 mb-1" />
            <div className="w-28 h-2 rounded bg-neutral-300" />
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-7 rounded-xl border border-neutral-200 bg-white" />
            <div className="w-20 h-7 rounded-xl bg-[#1C1A17]" />
          </div>
        </div>
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2">
          {(["#22C55E", "#3B82F6", "#C2410C"] as const).map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-neutral-100 p-2.5 shadow-sm"
            >
              <div className="flex justify-between items-center mb-1.5">
                <div className="w-10 h-1.5 rounded bg-neutral-300" />
                <div
                  className="w-3.5 h-3.5 rounded-md"
                  style={{ background: c + "20" }}
                />
              </div>
              <div className="w-12 h-3.5 rounded bg-neutral-800 mb-1.5" />
              <div className="h-1 w-full rounded-full bg-neutral-100 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${[78, 55, 90][i]}%`, background: c }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div className="flex-1 bg-white rounded-xl border border-neutral-100 p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="w-20 h-2 rounded bg-neutral-700" />
            <div className="flex gap-1">
              {["1D", "7D", "30D"].map((t, i) => (
                <div
                  key={t}
                  className="w-7 rounded flex items-center justify-center text-[6.5px] font-mono"
                  style={{
                    height: 18,
                    background: i === 1 ? "#1C1A17" : "#F3F3F3",
                    color: i === 1 ? "#fff" : "#9CA3AF",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-px" style={{ height: 46 }}>
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i === 10 ? "#C2410C" : "#1C1A1711",
                }}
              />
            ))}
          </div>
        </div>
        {/* Row */}
        <div className="bg-white rounded-lg border border-neutral-100 h-8 flex items-center px-3 gap-2 shadow-sm">
          <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-300 flex-shrink-0" />
          <div className="flex-1 h-1.5 rounded bg-neutral-200" />
          <div className="w-12 h-1.5 rounded bg-neutral-200" />
          <div className="w-14 h-5 rounded-full bg-emerald-50 border border-emerald-200" />
        </div>
      </div>
    </div>
  );
}

function LandingPageCard() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#1C1A17]" />
          <div className="w-16 h-2 rounded bg-neutral-700" />
        </div>
        <div className="flex items-center gap-4">
          {[40, 32, 36, 28].map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded bg-neutral-200"
              style={{ width: w }}
            />
          ))}
        </div>
        <div className="w-20 h-7 rounded-full bg-neutral-900" />
      </div>
      {/* Hero */}
      <div className="flex-1 flex flex-col px-5 py-4 justify-between">
        <div>
          <div
            className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-2.5 mb-3"
            style={{ paddingTop: 3, paddingBottom: 3 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C2410C]" />
            <div className="w-16 h-1 rounded bg-[#C2410C]/40" />
          </div>
          <div className="space-y-2 mb-3">
            <div className="h-5 w-full rounded-lg bg-neutral-800" />
            <div className="h-5 w-5/6 rounded-lg bg-neutral-800" />
            <div className="h-5 w-3/5 rounded-lg bg-[#C2410C]" />
          </div>
          <div className="space-y-1.5 mb-4">
            <div className="h-2 w-full rounded bg-neutral-200" />
            <div className="h-2 w-11/12 rounded bg-neutral-200" />
          </div>
          <div className="flex gap-2.5">
            <div className="h-9 w-28 rounded-full bg-neutral-900" />
            <div className="h-9 w-28 rounded-full border-2 border-neutral-200" />
          </div>
        </div>
        {/* Feature strip */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { c: "#C2410C", bg: "#FFF7ED" },
            { c: "#3B82F6", bg: "#EFF6FF" },
            { c: "#10B981", bg: "#ECFDF5" },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-xl p-2.5"
              style={{ background: f.bg }}
            >
              <div
                className="w-7 h-7 rounded-lg mb-1.5 flex items-center justify-center"
                style={{ background: f.c + "20" }}
              >
                <div
                  className="w-3.5 h-3.5 rounded"
                  style={{ background: f.c, opacity: 0.72 }}
                />
              </div>
              <div
                className="w-12 h-1.5 rounded mb-1"
                style={{ background: f.c + "50" }}
              />
              <div className="w-full h-1 rounded bg-neutral-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SaasProductCard() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Dark header */}
      <div
        className="flex-shrink-0 px-5 py-4"
        style={{
          background:
            "linear-gradient(135deg,#1C1A17 0%,#2D2520 55%,#3D1F0E 100%)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#C2410C]" />
            <div className="w-16 h-2 rounded bg-white/30" />
          </div>
          <div className="flex items-center gap-3">
            {[32, 28, 30].map((w, i) => (
              <div
                key={i}
                className="h-1.5 rounded bg-white/20"
                style={{ width: w }}
              />
            ))}
            <div className="w-16 h-6 rounded-full bg-white/8 border border-white/12" />
          </div>
        </div>
        <div className="space-y-1.5 mb-3">
          <div className="h-4 w-2/3 rounded bg-white/25" />
          <div className="h-4 w-1/2 rounded bg-white/20" />
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-20 rounded-full bg-[#C2410C]" />
          <div className="h-7 w-20 rounded-full border border-white/20" />
        </div>
      </div>
      {/* Feature 2×2 */}
      <div className="flex-1 grid grid-cols-2 gap-2.5 p-3.5">
        {[
          { c: "#C2410C", bg: "#FFF7ED", bd: "#FED7AA" },
          { c: "#3B82F6", bg: "#EFF6FF", bd: "#BFDBFE" },
          { c: "#10B981", bg: "#ECFDF5", bd: "#A7F3D0" },
          { c: "#8B5CF6", bg: "#F5F3FF", bd: "#DDD6FE" },
        ].map((f, i) => (
          <div
            key={i}
            className="rounded-2xl p-3 flex flex-col gap-1.5"
            style={{ background: f.bg, border: `1px solid ${f.bd}` }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: f.c + "18" }}
            >
              <div
                className="w-4 h-4 rounded"
                style={{ background: f.c, opacity: 0.72 }}
              />
            </div>
            <div
              className="w-16 h-1.5 rounded"
              style={{ background: f.c + "50" }}
            />
            <div className="w-full h-1 rounded bg-neutral-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ApiExplorerCard() {
  const rows = [
    { m: "GET", c: "#22C55E" },
    { m: "POST", c: "#3B82F6" },
    { m: "GET", c: "#22C55E" },
    { m: "PUT", c: "#F59E0B" },
    { m: "DEL", c: "#EF4444" },
  ];
  return (
    <div className="w-full h-full bg-[#0D1117] flex flex-col overflow-hidden">
      <div className="bg-[#161B22] border-b border-white/6 px-4 py-3 flex items-center gap-2.5 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#C2410C]" />
        <div className="w-24 h-2 rounded bg-white/20" />
        <div className="flex-1" />
        <div className="w-16 h-5 rounded-lg bg-white/6 border border-white/8" />
      </div>
      <div className="flex-1 flex overflow-hidden">
        {/* Endpoint list */}
        <div className="w-36 border-r border-white/6 p-3 flex flex-col gap-1 flex-shrink-0">
          <div className="w-16 h-1.5 rounded bg-white/15 mb-1.5" />
          {rows.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 rounded-lg px-2 py-1"
              style={{
                background: i === 0 ? "rgba(255,255,255,.05)" : "transparent",
              }}
            >
              <span
                className="text-[7px] font-bold font-mono w-7 flex-shrink-0"
                style={{ color: r.c }}
              >
                {r.m}
              </span>
              <div className="h-1 flex-1 rounded bg-white/8" />
            </div>
          ))}
        </div>
        {/* Response */}
        <div className="flex-1 p-3.5 flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-full px-2 py-0.5 bg-emerald-900/40 border border-emerald-700/30">
              <span className="text-[6.5px] font-mono text-emerald-400 font-bold">
                200 OK
              </span>
            </div>
            <div className="w-16 h-1.5 rounded bg-white/10" />
          </div>
          <div className="flex-1 rounded-xl bg-white/[.03] border border-white/6 p-3">
            <div className="space-y-1.5">
              {[
                { ml: 0, w: 20, o: 0.15 },
                { ml: 12, w: 64, o: 0.26 },
                { ml: 12, w: 76, o: 0.26 },
                { ml: 12, w: 56, o: 0.2 },
                { ml: 12, w: 68, o: 0.2 },
                { ml: 0, w: 16, o: 0.12 },
              ].map((l, i) => (
                <div key={i} className="flex" style={{ paddingLeft: l.ml }}>
                  <div
                    className="h-1.5 rounded"
                    style={{
                      width: l.w,
                      background: `rgba(255,255,255,${l.o})`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <div className="w-24 h-1 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioCard() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-neutral-900" />
          <div className="w-20 h-2 rounded bg-neutral-600" />
        </div>
        <div className="flex gap-3">
          {[32, 40, 32].map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded bg-neutral-200"
              style={{ width: w }}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex gap-4 p-4 overflow-hidden">
        {/* Text */}
        <div
          className="flex flex-col justify-between flex-shrink-0"
          style={{ width: 160 }}
        >
          <div>
            <div
              className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 mb-3"
              style={{ paddingTop: 3, paddingBottom: 3 }}
            >
              <div className="w-1 h-1 rounded-full bg-neutral-400" />
              <div className="w-10 h-1 rounded bg-neutral-400" />
            </div>
            <div className="space-y-2 mb-2.5">
              <div className="h-4 w-full rounded-lg bg-neutral-800" />
              <div className="h-4 w-5/6 rounded-lg bg-neutral-800" />
            </div>
            <div className="space-y-1.5 mb-4">
              <div className="h-1.5 w-full rounded bg-neutral-200" />
              <div className="h-1.5 w-5/6 rounded bg-neutral-200" />
              <div className="h-1.5 w-3/4 rounded bg-neutral-200" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-20 rounded-full bg-neutral-900" />
              <div className="h-8 w-20 rounded-full border border-neutral-200" />
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {[44, 52, 36].map((w, i) => (
              <div
                key={i}
                className="h-4 rounded-full bg-neutral-100 border border-neutral-200"
                style={{ width: w }}
              />
            ))}
          </div>
        </div>
        {/* Mosaic */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2">
          <div
            className="col-span-2 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg,#FFF7ED,#FFEDD5)",
              border: "1px solid #FED7AA",
            }}
          >
            <div
              className="w-14 h-10 rounded-xl"
              style={{
                background: "rgba(194,65,12,.12)",
                border: "1px solid rgba(194,65,12,.12)",
              }}
            />
          </div>
          <div
            className="rounded-2xl"
            style={{
              background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)",
              border: "1px solid #BFDBFE",
            }}
          />
          <div
            className="rounded-2xl"
            style={{
              background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)",
              border: "1px solid #BBF7D0",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard() {
  const bars = [44, 60, 46, 74, 56, 88, 70, 54, 82, 66, 94, 76];
  return (
    <div className="w-full h-full bg-[#F7F8FA] flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3.5 bg-white border-b border-neutral-100 flex-shrink-0">
        <div>
          <div className="w-20 h-2.5 rounded bg-neutral-700 mb-1" />
          <div className="w-28 h-1.5 rounded bg-neutral-300" />
        </div>
        <div className="flex gap-1.5">
          {["Today", "7D", "30D"].map((t, i) => (
            <div
              key={t}
              className="px-2 h-6 rounded-lg flex items-center text-[6.5px] font-mono"
              style={{
                background: i === 1 ? "#1C1A17" : "#F3F3F3",
                color: i === 1 ? "#fff" : "#9CA3AF",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      {/* KPI */}
      <div className="grid grid-cols-3 gap-2 px-4 pt-3 pb-2">
        {[
          { c: "#22C55E", p: 80 },
          { c: "#3B82F6", p: 55 },
          { c: "#C2410C", p: 90 },
        ].map((k, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-neutral-100 p-2.5 shadow-sm"
          >
            <div className="w-10 h-1.5 rounded bg-neutral-300 mb-1.5" />
            <div className="w-12 h-3.5 rounded bg-neutral-800 mb-1.5" />
            <div className="h-1 w-full rounded-full bg-neutral-100 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${k.p}%`, background: k.c }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Chart */}
      <div className="flex-1 mx-4 mb-4 bg-white rounded-xl border border-neutral-100 p-3 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="w-20 h-2 rounded bg-neutral-700" />
          <div className="flex items-center gap-2">
            {["#C2410C", "#3B82F6"].map((c, i) => (
              <div key={i} className="flex items-center gap-1">
                <div
                  className="w-2.5 h-1.5 rounded-full"
                  style={{ background: c }}
                />
                <div className="w-10 h-1 rounded bg-neutral-300" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-end gap-px" style={{ height: 46 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: i === 10 ? "#C2410C" : "#C2410C18",
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5 px-0.5">
          {["Jan", "Apr", "Jul", "Oct", "Dec"].map((l) => (
            <div key={l} className="h-1 w-4 rounded bg-neutral-200" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Items ──────────────────────────────────────────────────────────────── */

const ITEMS = [
  { id: "dash", node: <ProjectDashboard /> },
  { id: "landing", node: <LandingPageCard /> },
  { id: "saas", node: <SaasProductCard /> },
  { id: "api", node: <ApiExplorerCard /> },
  { id: "portfolio", node: <PortfolioCard /> },
  { id: "analytics", node: <AnalyticsCard /> },
];

/* ─── Main export ────────────────────────────────────────────────────────── */

export function HeroOrbitalShowcase() {
  const [rotation, setRotation] = useState(0);

  useAnimationFrame((time) => {
    setRotation(time * SPEED);
  });

  return (
    /*
     * Fills the right column (absolute inset-0).
     * perspective creates 3-D depth for rotateY on each card.
     * The parent column has overflow-hidden — cards that exit left/right
     * are clipped cleanly, creating the entrance-from-right Taste Skill effect.
     */
    <div
      className="pointer-events-none absolute inset-0"
      style={{ perspective: "1000px", perspectiveOrigin: "50% 50%" }}
    >
      {/* Subtle warm glow at orbit centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(194,65,12,0.05) 0%, transparent 70%)",
        }}
      />

      {ITEMS.map((item, index) => {
        const total = ITEMS.length;
        const angle = rotation + (index / total) * Math.PI * 2;

        const x = Math.cos(angle) * RADIUS_X;
        const y = Math.sin(angle) * RADIUS_Y;
        // sin(angle) ∈ [-1, 1]: -1 = back (top), +1 = front (bottom)
        const depth = (Math.sin(angle) + 1) / 2; // 0 … 1

        const scale = 0.65 + depth * 0.4; // 0.65 → 1.05
        const opacity = 0.25 + depth * 0.75; // 0.25 → 1.00
        const zIndex = Math.round(depth * 100) + 1;
        const blur = depth < 0.35 ? 2 : 0;

        return (
          <motion.div
            key={item.id}
            className="absolute overflow-hidden rounded-[22px] border border-black/[0.07] bg-white"
            animate={{
              x,
              y,
              scale,
              opacity,
              filter: `blur(${blur}px)`,
              rotateY: (1 - depth) * -14, // back cards tilt in Y for perspective
              rotateZ: Math.cos(angle) * 3, // slight tilt as cards orbit
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              mass: 0.9,
            }}
            style={{
              zIndex,
              width: CARD_W,
              height: CARD_H,
              top: "50%",
              left: "50%",
              marginLeft: -CARD_W / 2,
              marginTop: -CARD_H / 2,
              transformStyle: "preserve-3d",
              boxShadow: `0 ${10 + depth * 30}px ${20 + depth * 50}px rgba(0,0,0,${(0.05 + depth * 0.1).toFixed(2)})`,
            }}
          >
            {item.node}
          </motion.div>
        );
      })}
    </div>
  );
}
