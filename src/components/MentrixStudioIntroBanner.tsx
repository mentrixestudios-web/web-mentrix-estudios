"use client";

import React, { useRef, useState } from "react";
import CosmicBackground from "./CosmicBackground";

export default function MentrixStudioIntroBanner() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ nx: 0, ny: 0 });
  const [pulseKey, setPulseKey] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isShockwave, setIsShockwave] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseRef.current = { nx, ny };
    setTilt({ x: -ny * 7, y: nx * 9 });
  };

  const handleMouseLeave = () => {
    mouseRef.current = { nx: 0, ny: 0 };
    setTilt({ x: 0, y: 0 });
  };

  const triggerReplay = () => {
    setPulseKey((prev) => prev + 1);
    setIsShockwave(true);
    setTimeout(() => setIsShockwave(false), 900);
  };

  // EXACT Flatter Hexagon coordinates (kept 100% intact)
  const hexPoints = "150,41 267,102 267,198 150,260 34,198 34,102";
  const rightHalfPath = "M 150 41 L 267 102 L 267 198 L 150 260";
  const leftHalfPath = "M 150 41 L 34 102 L 34 198 L 150 260";

  // Animaciones compartidas del hexágono (se dibuja desde arriba, se sella abajo, y una luz recorre el perímetro)
  const hexDrawStyle: React.CSSProperties = {
    animation: "hexDrawAndSeal 5.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
  };
  const hexRunnerStyle: React.CSSProperties = {
    animation: "hexRunner 5.2s linear infinite",
  };

  // Tipografía compartida entre el texto nítido y su resplandor
  const titleType =
    "block font-display font-black text-4xl sm:text-[54px] leading-none tracking-[0.14em] pl-[0.14em] select-none whitespace-nowrap";

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[85vh] pt-20 pb-12 flex flex-col items-center justify-center overflow-hidden select-none bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,#09133a_0%,#05071c_55%,#02030a_100%)] border-b border-sky-500/15"
    >
      <style>{`
        @keyframes brainOrganicPulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 18px rgba(56, 189, 248, 0.55)) brightness(1);
          }
          18% {
            transform: scale(1.055);
            filter: drop-shadow(0 0 32px rgba(56, 189, 248, 0.95)) drop-shadow(0 0 55px rgba(37, 99, 235, 0.75)) brightness(1.15);
          }
          32% {
            transform: scale(1.012);
            filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.65)) brightness(1.02);
          }
          48% {
            transform: scale(1.075);
            filter: drop-shadow(0 0 40px rgba(125, 211, 252, 1)) drop-shadow(0 0 70px rgba(59, 130, 246, 0.9)) brightness(1.22);
          }
          72% {
            transform: scale(0.996);
            filter: drop-shadow(0 0 16px rgba(56, 189, 248, 0.5)) brightness(0.99);
          }
        }

        @keyframes hexDrawAndSeal {
          0% {
            stroke-dashoffset: 365;
            opacity: 0.15;
          }
          8% {
            opacity: 1;
          }
          46% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          82% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          95% {
            stroke-dashoffset: -365;
            opacity: 0.25;
          }
          100% {
            stroke-dashoffset: -365;
            opacity: 0.15;
          }
        }

        @keyframes hexSealGlow {
          0%, 40% {
            opacity: 0.15;
          }
          47% {
            opacity: 1;
          }
          60%, 82% {
            opacity: 0.85;
          }
          95%, 100% {
            opacity: 0.15;
          }
        }

        /* Todo el conjunto late al mismo ritmo que el cerebro (picos al 18% y 48%) */
        @keyframes auraBeat {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          18% { transform: scale(1.1); opacity: 1; }
          32% { transform: scale(1.02); opacity: 0.9; }
          48% { transform: scale(1.14); opacity: 1; }
          72% { transform: scale(0.99); opacity: 0.8; }
        }

        @keyframes hexBeat {
          0%, 100% { opacity: 0.8; }
          18% { opacity: 1; }
          32% { opacity: 0.88; }
          48% { opacity: 1; }
          72% { opacity: 0.78; }
        }

        @keyframes mxBloom {
          0%, 100% { opacity: 0.45; }
          18% { opacity: 0.95; }
          32% { opacity: 0.6; }
          48% { opacity: 1; }
          72% { opacity: 0.5; }
        }

        /* Destello de luz que recorre el perímetro tras sellarse el hexágono */
        @keyframes hexRunner {
          0%, 44% { stroke-dashoffset: 0; opacity: 0; }
          48% { opacity: 1; }
          88% { stroke-dashoffset: -718; opacity: 1; }
          95%, 100% { stroke-dashoffset: -718; opacity: 0; }
        }

        @keyframes mxReveal {
          from { opacity: 0; transform: translateY(8px) scale(1.04); filter: blur(12px); }
          to { opacity: 1; transform: none; filter: blur(0); }
        }

        @keyframes mxFadeUp {
          from { opacity: 0; transform: translateY(6px); filter: blur(4px); }
          to { opacity: 1; transform: none; filter: blur(0); }
        }

        @keyframes mxLine {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }

        /* Destello metálico que cruza las letras de izquierda a derecha */
        @keyframes mxSweep {
          0%, 45% { background-position: 100% 0, 0 0; }
          75%, 100% { background-position: 0% 0, 0 0; }
        }

        .mx-title {
          color: transparent;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 0.5px rgba(150, 200, 255, 0.35);
          background-image:
            linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.95) 50%, transparent 60%),
            linear-gradient(180deg, #ffffff 0%, #f1f7ff 42%, #b4cff7 50%, #dce9ff 54%, #8fb3ee 100%);
          background-size: 260% 100%, 100% 100%;
          background-repeat: no-repeat;
          background-position: 100% 0, 0 0;
          -webkit-background-clip: text;
          background-clip: text;
          animation: mxSweep 7s ease-in-out 3.2s infinite;
        }

        .mx-bloom {
          color: rgba(90, 165, 255, 0.9);
          filter: blur(14px);
          animation: mxBloom 2.9s ease-in-out infinite;
          user-select: none;
        }

        .mx-reveal { animation: mxReveal 1.5s cubic-bezier(0.2, 0.7, 0.2, 1) 1.1s both; }
        .mx-fade { animation: mxFadeUp 0.9s ease-out both; }

        .mx-line-l {
          background: linear-gradient(to right, transparent, rgba(125, 211, 252, 0.95));
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.55);
          transform-origin: right center;
          animation: mxLine 1s ease-out 1.9s both;
        }
        .mx-line-r {
          background: linear-gradient(to left, transparent, rgba(125, 211, 252, 0.95));
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.55);
          transform-origin: left center;
          animation: mxLine 1s ease-out 1.9s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .mx-title, .mx-bloom, .mx-reveal, .mx-fade, .mx-line-l, .mx-line-r {
            animation: none !important;
          }
        }
      `}</style>

      {/* Fondo cósmico 100% procedural: nebulosa con venas eléctricas, estrellas, rayos y motas de energía */}
      <CosmicBackground mouseRef={mouseRef} focusRef={stageRef} />

      {/* Interactive 3D Centerpiece (Brain + Hexagon + Letters kept intact) */}
      <div
        onClick={triggerReplay}
        title="Haz clic para disparar un pulso neuronal"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.18s ease-out",
        }}
        className="relative z-10 flex flex-col items-center cursor-pointer group"
      >
        <div
          ref={stageRef}
          key={pulseKey}
          className="relative w-[290px] h-[255px] sm:w-[340px] sm:h-[295px] flex items-center justify-center"
        >
          {/* Brillo ambiental detrás del cerebro y el hexágono: late con el cerebro */}
          <div
            className="absolute w-[230px] h-[180px] rounded-full bg-blue-500/30 blur-[45px] pointer-events-none"
            style={{ animation: "auraBeat 2.9s ease-in-out infinite" }}
          />
          <div
            className="absolute w-[170px] h-[140px] rounded-full bg-cyan-400/20 blur-[32px] pointer-events-none"
            style={{ animation: "auraBeat 2.9s ease-in-out infinite" }}
          />

          {/* Shockwave on Click */}
          {isShockwave && (
            <div className="absolute w-[210px] h-[190px] rounded-full border-2 border-sky-300/90 animate-ping pointer-events-none" />
          )}

          {/* Seamless Floating Brain */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              animation: "brainOrganicPulse 2.9s ease-in-out infinite",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mentrix-brain-clean.png"
              alt="Cerebro Holográfico Mentrix"
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
          </div>

          {/* Hexágono de neón: núcleo fino y nítido + bloom por capas, destello viajero al sellarse */}
          <svg
            viewBox="0 15 300 270"
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          >
            <defs>
              <filter id="hexBlurWide" filterUnits="userSpaceOnUse" x="-60" y="-40" width="420" height="380">
                <feGaussianBlur stdDeviation="9" />
              </filter>
              <filter id="hexBlurMid" filterUnits="userSpaceOnUse" x="-60" y="-40" width="420" height="380">
                <feGaussianBlur stdDeviation="3.2" />
              </filter>
              <filter id="hexBlurTight" filterUnits="userSpaceOnUse" x="-60" y="-40" width="420" height="380">
                <feGaussianBlur stdDeviation="1.2" />
              </filter>

              <linearGradient id="hexEdge" gradientUnits="userSpaceOnUse" x1="34" y1="41" x2="267" y2="260">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="0.38" stopColor="#c4e8ff" />
                <stop offset="0.7" stopColor="#82c8ff" />
                <stop offset="1" stopColor="#eaf7ff" />
              </linearGradient>

              <radialGradient id="hexInner" gradientUnits="userSpaceOnUse" cx="150" cy="150" r="125">
                <stop offset="0" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="0.7" stopColor="#2563eb" stopOpacity="0.07" />
                <stop offset="1" stopColor="#1d4ed8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Relleno ambiental interior: el aire dentro del hexágono se ilumina al sellarse */}
            <polygon
              points={hexPoints}
              fill="url(#hexInner)"
              style={{ animation: "hexSealGlow 5.2s ease-in-out infinite" }}
            />

            {/* Guía casi invisible */}
            <polygon
              points={hexPoints}
              fill="none"
              stroke="rgba(130,195,255,0.16)"
              strokeWidth="1"
            />

            {/* Las dos mitades se dibujan desde el vértice superior y se cierran abajo */}
            <g style={{ animation: "hexBeat 2.9s ease-in-out infinite" }}>
              {[rightHalfPath, leftHalfPath].map((d, i) => (
                <g key={i}>
                  <path
                    d={d}
                    fill="none"
                    stroke="#2f6bff"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    opacity="0.55"
                    filter="url(#hexBlurWide)"
                    strokeDasharray="365"
                    style={hexDrawStyle}
                  />
                  <path
                    d={d}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    opacity="0.85"
                    filter="url(#hexBlurMid)"
                    strokeDasharray="365"
                    style={hexDrawStyle}
                  />
                </g>
              ))}
            </g>

            {/* Destello al sellarse */}
            <polygon
              points={hexPoints}
              fill="none"
              stroke="#9fdcff"
              strokeWidth="3"
              strokeLinejoin="miter"
              filter="url(#hexBlurMid)"
              style={{ animation: "hexSealGlow 5.2s ease-in-out infinite" }}
            />

            {/* Núcleo fino y nítido */}
            {[rightHalfPath, leftHalfPath].map((d, i) => (
              <g key={i}>
                <path
                  d={d}
                  fill="none"
                  stroke="url(#hexEdge)"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  strokeDasharray="365"
                  style={hexDrawStyle}
                />
                <path
                  d={d}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  strokeDasharray="365"
                  style={hexDrawStyle}
                />
              </g>
            ))}

            {/* Luz que recorre el perímetro una vez sellado el hexágono */}
            <polygon
              points={hexPoints}
              pathLength={718}
              fill="none"
              stroke="#5cc4ff"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeDasharray="34 684"
              filter="url(#hexBlurMid)"
              style={hexRunnerStyle}
            />
            <polygon
              points={hexPoints}
              pathLength={718}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeDasharray="22 696"
              style={hexRunnerStyle}
            />

            {/* Destellos exactamente sobre los vértices */}
            {[
              [34, 102],
              [150, 260],
              [267, 198],
            ].map(([x, y], i) => (
              <g
                key={i}
                style={{ animation: `hexSealGlow 5.2s ease-in-out ${i * 0.18}s infinite` }}
              >
                <circle cx={x} cy={y} r="5" fill="#9fdcff" opacity="0.55" filter="url(#hexBlurMid)" />
                <circle cx={x} cy={y} r="1.6" fill="#ffffff" />
                <path
                  d={`M ${x - 9} ${y} H ${x + 9} M ${x} ${y - 9} V ${y + 9}`}
                  stroke="#e0f4ff"
                  strokeWidth="0.6"
                  opacity="0.75"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Tipografía integrada a la escena: brillo sincronizado con el latido, destello metálico y aparición escalonada */}
        <div key={`txt-${pulseKey}`} className="relative flex flex-col items-center text-center px-4">
          {/* Luz azul que baja desde el emblema e ilumina las letras */}
          <div
            className="absolute left-1/2 -top-8 -translate-x-1/2 w-[440px] max-w-[110vw] h-[170px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(59,130,246,0.26) 0%, rgba(37,99,235,0.10) 45%, transparent 72%)",
              filter: "blur(10px)",
            }}
          />

          <div
            className="relative"
            style={{
              filter:
                "drop-shadow(0 0 1px rgba(170,215,255,0.55)) drop-shadow(0 7px 14px rgba(10,30,110,0.6))",
            }}
          >
            <div className="mx-reveal relative">
              <span aria-hidden="true" className={`${titleType} mx-bloom absolute inset-0`}>
                MENTRIX
              </span>
              <h2 className={`${titleType} mx-title relative`}>MENTRIX</h2>
            </div>
          </div>

          <div className="relative mt-3 -mx-5 sm:-mx-10 self-stretch flex items-center justify-center gap-3 sm:gap-4">
            <span className="mx-line-l h-[1.5px] flex-1" />
            <span
              className="mx-fade font-display font-bold text-xs sm:text-[15px] tracking-[0.48em] pl-[0.48em] text-[#8fd3ff] uppercase"
              style={{
                animationDelay: "2.1s",
                textShadow: "0 0 12px rgba(56,189,248,0.7), 0 0 28px rgba(37,99,235,0.45)",
              }}
            >
              ESTUDIOS
            </span>
            <span className="mx-line-r h-[1.5px] flex-1" />
          </div>

          <p
            className="mx-fade mt-3 text-sm sm:text-[17px] font-normal text-[#8cc8ff] tracking-wide"
            style={{
              animationDelay: "2.5s",
              textShadow: "0 0 14px rgba(56,140,255,0.55)",
            }}
          >
            Juega pensando. Piensa jugando.
          </p>
        </div>
      </div>
    </section>
  );
}
