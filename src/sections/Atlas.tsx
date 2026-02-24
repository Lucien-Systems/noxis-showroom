// src/sections/Atlas.tsx
import React, { useMemo, useState } from "react";

type NodeDef = {
  id: string;
  label: string;
};

const NODES: NodeDef[] = [
  { id: "signals", label: "Signals" },
  { id: "narrative", label: "Narrative Graph" },
  { id: "audit", label: "Audit Trail" },
  { id: "analysis", label: "Analysis" },
  { id: "ingestion", label: "Ingestion" },
  { id: "anomaly", label: "Anomaly Lens" },
  { id: "governance", label: "Governance" },
];

const CENTER: NodeDef = { id: "briefing", label: "Briefing Desk" };

export default function Atlas() {
  const [scale, setScale] = useState(1);

  const layout = useMemo(() => {
    const radius = 180;
    const cx = 300;
    const cy = 230;
    const ring = NODES.map((n, i) => {
      const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
      return {
        ...n,
        x: cx + Math.cos(a) * radius,
        y: cy + Math.sin(a) * radius,
      };
    });
    const center = { ...CENTER, x: cx, y: cy };
    return { center, ring };
  }, []);

  const edges = useMemo(() => {
    // Pro jednoduchost napojíme každý vnější uzel na střed
    return NODES.map((n) => ({ from: n.id, to: CENTER.id }));
  }, []);

  return (
    <section id="atlas" className="py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-4 text-2xl font-semibold text-slate-100">Noxis Atlas</h2>

        <div className="mb-4 flex gap-2">
          <button
            className="rounded-md border border-slate-600 px-3 py-1 text-sm text-slate-200 hover:bg-slate-700"
            onClick={() => setScale((s) => Math.min(1.4, s + 0.1))}
          >
            Zoom In
          </button>
          <button
            className="rounded-md border border-slate-600 px-3 py-1 text-sm text-slate-200 hover:bg-slate-700"
            onClick={() => setScale((s) => Math.max(0.7, s - 0.1))}
          >
            Zoom Out
          </button>
          <button
            className="rounded-md border border-slate-600 px-3 py-1 text-sm text-slate-200 hover:bg-slate-700"
            onClick={() => setScale(1)}
          >
            Reset
          </button>
        </div>

        <div className="rounded-2xl border border-[#24345C] bg-[#0A132B] p-4 shadow-[0_0_0_1px_#24345C,0_0_32px_3px_rgba(233,194,91,.12)]">
          <div className="relative mx-auto max-w-full overflow-hidden">
            <svg
              viewBox="0 0 600 460"
              style={{ transform: `scale(${scale})`, transformOrigin: "50% 50%" }}
              className="h-[420px] w-full"
            >
              {/* gradient pro hrany */}
              <defs>
                <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E9C25B" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#FFD84F" stopOpacity="0.7" />
                </linearGradient>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* hrany */}
              {edges.map((e, idx) => {
                const from =
                  e.from === CENTER.id
                    ? layout.center
                    : layout.ring.find((n) => n.id === e.from)!;
                const to =
                  e.to === CENTER.id
                    ? layout.center
                    : layout.ring.find((n) => n.id === e.to)!;
                return (
                  <line
                    key={idx}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="url(#edge)"
                    strokeWidth={6}
                    opacity={0.35}
                  />
                );
              })}

              {/* střed */}
              <NodeRect x={layout.center.x} y={layout.center.y} label={layout.center.label} />

              {/* kruh uzlů */}
              {layout.ring.map((n) => (
                <NodeRect key={n.id} x={n.x} y={n.y} label={n.label} />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function NodeRect({ x, y, label }: { x: number; y: number; label: string }) {
  const rx = 110;
  const ry = 26;
  const capR = 12;
  return (
    <g filter="url(#softGlow)">
      {/* kapsle */}
      <rect
        x={x - rx}
        y={y - ry}
        width={rx * 2}
        height={ry * 2}
        rx={18}
        fill="#0F1A2B"
        stroke="#24344C"
        strokeWidth={3}
      />
      {/* neon tečka nahoře */}
      <circle cx={x} cy={y - ry - capR + 4} r={capR} fill="#0F1A2B" stroke="#E9C25B" strokeWidth={6} />
      {/* text */}
      <text
        x={x}
        y={y + 6}
        textAnchor="middle"
        className="fill-slate-100"
        style={{ fontSize: 18, fontWeight: 600 }}
      >
        {label}
      </text>
    </g>
  );
}