import React from "react";

export default function HowViz({ step }: { step: number | "signals" | "analysis" | "graphs" | "brief" | "audit" }) {
  const map = ["signals","analysis","graphs","brief","audit"] as const;
  const k = typeof step === "number" ? map[Math.max(1, Math.min(5, step)) - 1] : step;

  return (
    <div className="w-full h-full grid place-items-center bg-panel">
      {k === "signals" && (
        <svg viewBox="0 0 600 260" className="w-full h-full">
          <defs>
            <linearGradient id="gl1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1EE9A6"/><stop offset="100%" stopColor="#FFCC55"/>
            </linearGradient>
          </defs>
          <path d="M20 150 C120 120, 220 180, 320 140 S520 160, 580 130" fill="none" stroke="url(#gl1)" strokeWidth="4" />
          {Array.from({length:10}).map((_,i)=>(
            <circle key={i} cx={40 + i*55} cy={150 + Math.sin(i)*12} r="4" fill="#1EE9A6" />
          ))}
        </svg>
      )}
      {k === "analysis" && (
        <svg viewBox="0 0 600 260" className="w-full h-full">
          {[[120,70],[240,40],[360,80],[180,180],[320,170],[460,120]].map(([x,y],i)=>(
            <g key={i}>
              <circle cx={x} cy={y} r="8" fill="#1EE9A6"/>
              <circle cx={x} cy={y} r="16" fill="none" stroke="#244057" />
            </g>
          ))}
          <path d="M120 70 L240 40 L360 80 L320 170 L180 180 Z" stroke="#FFCC55" fill="none" />
        </svg>
      )}
      {k === "graphs" && (
        <svg viewBox="0 0 600 260" className="w-full h-full">
          {[[120,140],[200,90],[280,150],[360,110],[440,160],[520,120]].map(([x,y],i)=>(
            <g key={i}>
              <circle cx={x} cy={y} r="7" fill="#1EE9A6"/>
              {i>0 && <line x1={x} y1={y} x2={120+(i-1)*80} y2={[140,90,150,110,160][i-1]} stroke="#3AAAE0" strokeWidth="2"/>}
            </g>
          ))}
        </svg>
      )}
      {k === "brief" && (
        <svg viewBox="0 0 600 260" className="w-3/4 h-3/4">
          <rect x="150" y="40" width="300" height="180" rx="12" ry="12" fill="none" stroke="#FFCC55" strokeWidth="3"/>
          <line x1="170" y1="80" x2="430" y2="80" stroke="#1EE9A6" strokeWidth="4"/>
          <line x1="170" y1="110" x2="430" y2="110" stroke="#244057" strokeWidth="3"/>
          <line x1="170" y1="140" x2="380" y2="140" stroke="#244057" strokeWidth="3"/>
          <line x1="170" y1="170" x2="410" y2="170" stroke="#244057" strokeWidth="3"/>
        </svg>
      )}
      {k === "audit" && (
        <svg viewBox="0 0 600 260" className="w-3/4 h-3/4">
          <circle cx="300" cy="120" r="70" fill="none" stroke="#FFCC55" strokeWidth="4"/>
          <circle cx="300" cy="120" r="90" fill="none" stroke="#1EE9A6" strokeWidth="2" />
          <path d="M270 120 l20 20 l40 -40" fill="none" stroke="#1EE9A6" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      )}
    </div>
  );
}
