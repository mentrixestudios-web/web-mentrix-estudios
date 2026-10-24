"use client";

import React, { useEffect, useRef } from "react";

/**
 * Fondo cósmico 100% procedural (sin imágenes) para el banner de Mentrix Estudios.
 *
 * Capas (de atrás hacia adelante):
 *  1. Nebulosa volumétrica: ruido fractal 3D (nubes + venas "ridged") animado en el tiempo.
 *  2. Motas de energía flotando dentro de la nebulosa.
 *  3. Campo estelar denso: miles de estrellas diminutas, pocas brillantes, parpadeo sutil y parallax.
 *  4. Rayos eléctricos ramificados que aparecen y se desvanecen dentro de la nebulosa.
 *  5. Estrella fugaz ocasional.
 */

interface CosmicBackgroundProps {
  mouseRef: React.MutableRefObject<{ nx: number; ny: number }>;
  focusRef: React.RefObject<HTMLElement | null>;
}

/* ───────────────────────── Ruido de valor 3D ───────────────────────── */

const PERM = new Uint8Array(512);
(() => {
  const p = Array.from({ length: 256 }, (_, i) => i);
  let s = 1337;
  for (let i = 255; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    const tmp = p[i];
    p[i] = p[j];
    p[j] = tmp;
  }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255];
})();

const fade = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smoothstep = (a: number, b: number, v: number) => {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};

function vnoise3(x: number, y: number, z: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const zi = Math.floor(z);
  const X = xi & 255;
  const Y = yi & 255;
  const Z = zi & 255;
  const u = fade(x - xi);
  const v = fade(y - yi);
  const w = fade(z - zi);

  const a = PERM[X] + Y;
  const b = PERM[X + 1] + Y;
  const aa = PERM[a] + Z;
  const ab = PERM[a + 1] + Z;
  const ba = PERM[b] + Z;
  const bb = PERM[b + 1] + Z;

  const x00 = lerp(PERM[aa], PERM[ba], u);
  const x10 = lerp(PERM[ab], PERM[bb], u);
  const x01 = lerp(PERM[aa + 1], PERM[ba + 1], u);
  const x11 = lerp(PERM[ab + 1], PERM[bb + 1], u);
  return lerp(lerp(x00, x10, v), lerp(x01, x11, v), w) / 255;
}

/* ───────────────────────── Tipos ───────────────────────── */

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  color: string;
  depth: number;
  twSpeed: number;
  twPhase: number;
  twAmp: number;
  glow: boolean;
}

interface Pt {
  x: number;
  y: number;
}

interface Bolt {
  main: Pt[];
  branches: Pt[][];
  life: number;
  maxLife: number;
  cx: number;
  cy: number;
  tint: string;
}

interface Mote {
  ox: number;
  oy: number;
  speed: number;
  phase: number;
  wobble: number;
  size: number;
  span: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

/* ───────────────────────── Rayos ───────────────────────── */

function lightningPath(x1: number, y1: number, x2: number, y2: number, disp: number): Pt[] {
  const pts: Pt[] = [{ x: x1, y: y1 }];
  const subdivide = (ax: number, ay: number, bx: number, by: number, d: number) => {
    const len = Math.hypot(bx - ax, by - ay);
    if (len < 7) {
      pts.push({ x: bx, y: by });
      return;
    }
    const mx = (ax + bx) / 2 + (-(by - ay) / len) * (Math.random() - 0.5) * d;
    const my = (ay + by) / 2 + ((bx - ax) / len) * (Math.random() - 0.5) * d;
    subdivide(ax, ay, mx, my, d * 0.55);
    subdivide(mx, my, bx, by, d * 0.55);
  };
  subdivide(x1, y1, x2, y2, disp);
  return pts;
}

function makeBolt(cx: number, cy: number, w: number): Bolt {
  const k = Math.min(1, Math.max(0.45, w / 1300));
  const side = Math.random() < 0.5 ? -1 : 1;
  const sx = cx + side * (170 + Math.random() * 280) * k;
  const sy = cy + (Math.random() - 0.35) * 120 * k;
  const ang = (side < 0 ? Math.PI : 0) + (Math.random() - 0.5) * 0.9;
  const len = (90 + Math.random() * 190) * k;
  const ex = sx + Math.cos(ang) * len;
  const ey = sy + Math.sin(ang) * len * 0.7;

  const main = lightningPath(sx, sy, ex, ey, len * 0.28);
  const branches: Pt[][] = [];
  const bc = 2 + Math.floor(Math.random() * 3);
  for (let b = 0; b < bc; b++) {
    const o = main[2 + Math.floor(Math.random() * Math.max(1, main.length - 4))];
    const ba = ang + (Math.random() - 0.5) * 1.8;
    const bl = len * (0.18 + Math.random() * 0.28);
    const sub = lightningPath(o.x, o.y, o.x + Math.cos(ba) * bl, o.y + Math.sin(ba) * bl, bl * 0.3);
    branches.push(sub);
    // Sub-ramificación fina
    if (Math.random() < 0.55 && sub.length > 4) {
      const so = sub[Math.floor(sub.length / 2)];
      const sa = ba + (Math.random() - 0.5) * 1.6;
      const sl = bl * 0.5;
      branches.push(lightningPath(so.x, so.y, so.x + Math.cos(sa) * sl, so.y + Math.sin(sa) * sl, sl * 0.3));
    }
  }

  return {
    main,
    branches,
    life: 0,
    maxLife: 16 + Math.floor(Math.random() * 26),
    cx: (sx + ex) / 2,
    cy: (sy + ey) / 2,
    tint: Math.random() < 0.7 ? "120, 200, 255" : "170, 160, 255",
  };
}

/* ───────────────────────── Componente ───────────────────────── */

export default function CosmicBackground({ mouseRef, focusRef }: CosmicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Lienzo pequeño donde se pinta la nebulosa (se escala suavemente a pantalla completa)
    const NW = 256;
    const NH = 128;
    const nebCanvas = document.createElement("canvas");
    nebCanvas.width = NW;
    nebCanvas.height = NH;
    const nebCtx = nebCanvas.getContext("2d");
    if (!nebCtx) return;
    const nebImg = nebCtx.createImageData(NW, NH);

    // Sprite de brillo suave reutilizable (motas de energía y estrellas brillantes)
    const glowSprite = document.createElement("canvas");
    glowSprite.width = glowSprite.height = 64;
    {
      const g = glowSprite.getContext("2d");
      if (g) {
        const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, "rgba(255,255,255,1)");
        grad.addColorStop(0.18, "rgba(190,225,255,0.65)");
        grad.addColorStop(0.5, "rgba(90,160,255,0.16)");
        grad.addColorStop(1, "rgba(60,120,255,0)");
        g.fillStyle = grad;
        g.fillRect(0, 0, 64, 64);
      }
    }

    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;
    let stars: Star[] = [];
    const motes: Mote[] = Array.from({ length: 22 }, () => ({
      ox: (Math.random() - 0.5) * 1.1,
      oy: (Math.random() - 0.5) * 0.5,
      speed: 0.00035 + Math.random() * 0.0009,
      phase: Math.random() * Math.PI * 2,
      wobble: 6 + Math.random() * 16,
      size: 5 + Math.random() * 11,
      span: 0.55 + Math.random() * 0.5,
    }));
    const bolts: Bolt[] = [];
    let meteor: Meteor | null = null;

    let visible = true;
    let raf = 0;
    let t = 0;
    let parX = 0;
    let parY = 0;

    const computeFocus = () => {
      const el = focusRef.current;
      if (!el) {
        cx = width / 2;
        cy = height * 0.42;
        return;
      }
      const r = el.getBoundingClientRect();
      const cr = canvas.getBoundingClientRect();
      cx = r.left - cr.left + r.width / 2;
      cy = r.top - cr.top + r.height / 2;
    };

    const buildStars = () => {
      const count = Math.round(Math.min(1500, Math.max(320, (width * height) / 1250)));
      const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
      stars = Array.from({ length: count }, () => {
        const r = Math.random();
        const size = r < 0.8 ? 0.35 + Math.random() * 0.4 : r < 0.955 ? 0.75 + Math.random() * 0.5 : 1.25 + Math.random() * 0.75;
        const cr = Math.random();
        const color =
          cr < 0.7
            ? pick(["#ffffff", "#dbe8ff", "#b9d2ff"])
            : cr < 0.82
              ? pick(["#c7b6ff", "#d9b3ff"])
              : cr < 0.92
                ? pick(["#ffe4bd", "#ffc9d6"])
                : "#9fe6ff";
        const big = size > 1.25;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          alpha: big ? 0.8 + Math.random() * 0.2 : 0.25 + Math.random() * 0.6,
          color,
          depth: 0.15 + Math.random() * 0.85,
          twSpeed: 0.01 + Math.random() * 0.03,
          twPhase: Math.random() * Math.PI * 2,
          twAmp: Math.random() < 0.45 ? 0.55 : 0.1,
          glow: big,
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (!width || !height) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      computeFocus();
      buildStars();
    };

    /* ── Nebulosa: nubes fractales + venas eléctricas finas ── */
    const paintNebula = () => {
      const data = nebImg.data;
      const aspect = width / height;
      const cxN = cx / width;
      const cyN = cy / height;
      const T = t;

      for (let j = 0; j < NH; j++) {
        const ny = (j + 0.5) / NH;
        const dy = ny - cyN;
        const vy = Math.exp(-(dy * dy) / (2 * 0.15 * 0.15));
        for (let i = 0; i < NW; i++) {
          const idx = (j * NW + i) * 4;
          const nx = (i + 0.5) / NW;
          const adx = Math.abs(nx - cxN);
          const hx = (0.4 + 0.6 * smoothstep(0.05, 0.2, adx)) * (1 - smoothstep(0.3, 0.52, adx));
          const mask = vy * hx;

          if (mask < 0.02) {
            data[idx] = data[idx + 1] = data[idx + 2] = 0;
            data[idx + 3] = 255;
            continue;
          }

          const X = nx * aspect * 2.6 + T * 0.0022;
          const Y = ny * 2.6;
          const Z = T * 0.0032;

          // Nubes (fbm)
          let cloud = 0;
          let amp = 0.5;
          let f = 1;
          for (let o = 0; o < 4; o++) {
            cloud += amp * vnoise3(X * f, Y * f, Z * f + o * 7.1);
            amp *= 0.5;
            f *= 2.1;
          }
          const density = Math.pow(clamp01((cloud - 0.34) / 0.5), 1.5);

          // Venas eléctricas (ridged noise con distorsión de dominio)
          const warp = vnoise3(X * 0.9 + 5.2, Y * 0.9 + 1.3, Z * 1.3) - 0.5;
          const rx = X * 2.2 + warp * 1.7 - T * 0.002;
          const ry = Y * 2.2 + warp * 1.2;
          let ridge = 0;
          let ra = 0.6;
          let rf = 1;
          for (let o = 0; o < 3; o++) {
            const n = vnoise3(rx * rf, ry * rf, Z * 2 * rf + 3.7);
            ridge += ra * (1 - Math.abs(2 * n - 1));
            ra *= 0.5;
            rf *= 2.0;
          }
          let wisp = Math.pow(clamp01((ridge / 1.05 - 0.7) / 0.3), 2.2);
          wisp *= (0.3 + 0.7 * density) * (0.78 + 0.22 * Math.sin(T * 0.025 + X * 3.1));

          // Matiz violeta en zonas
          const tint = clamp01((vnoise3(X * 0.7 + 20, Y * 0.7 + 9, Z * 0.8) - 0.5) * 2);

          const d = density * 0.85;
          const r = mask * (d * (16 + 42 * tint) + wisp * 80);
          const g = mask * (d * (36 + 10 * tint) + wisp * 165);
          const b = mask * (d * (112 + 38 * tint) + wisp * 255);
          data[idx] = r > 255 ? 255 : r;
          data[idx + 1] = g > 255 ? 255 : g;
          data[idx + 2] = b > 255 ? 255 : b;
          data[idx + 3] = 255;
        }
      }
      nebCtx.putImageData(nebImg, 0, 0);
    };

    const drawPath = (pts: Pt[]) => {
      ctx.beginPath();
      for (let i = 0; i < pts.length; i++) {
        if (i === 0) ctx.moveTo(pts[i].x, pts[i].y);
        else ctx.lineTo(pts[i].x, pts[i].y);
      }
      ctx.stroke();
    };

    const render = () => {
      raf = requestAnimationFrame(render);
      if (!visible || !width || !height) return;
      t += 1;

      if (t % 90 === 0) computeFocus();

      // Parallax suave
      parX += (mouseRef.current.nx - parX) * 0.05;
      parY += (mouseRef.current.ny - parY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Nebulosa
      if (t % 3 === 1) paintNebula();
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.globalAlpha = 0.95;
      const pad = 30;
      ctx.drawImage(nebCanvas, -pad - parX * 14, -pad - parY * 9, width + pad * 2, height + pad * 2);
      ctx.restore();

      // 2. Motas de energía
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const m of motes) {
        const prog = (m.ox + 0.5 + t * m.speed) % 1;
        const mx = cx + (prog - 0.5) * width * m.span + parX * -10;
        const my = cy + m.oy * height * 0.6 + Math.sin(t * 0.012 + m.phase) * m.wobble;
        const edge = Math.sin(prog * Math.PI);
        const pulse = 0.55 + 0.45 * Math.sin(t * 0.04 + m.phase);
        const s = m.size * (0.8 + 0.4 * pulse);
        ctx.globalAlpha = 0.5 * edge * pulse;
        ctx.drawImage(glowSprite, mx - s, my - s, s * 2, s * 2);
      }
      ctx.restore();

      // 3. Estrellas
      for (const s of stars) {
        const px = s.x - parX * 20 * s.depth;
        const py = s.y - parY * 13 * s.depth;
        const tw = 1 - s.twAmp + s.twAmp * (0.5 + 0.5 * Math.sin(t * s.twSpeed + s.twPhase));
        const a = s.alpha * tw;

        if (s.glow) {
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.globalAlpha = a * 0.55;
          const gs = s.size * 6;
          ctx.drawImage(glowSprite, px - gs, py - gs, gs * 2, gs * 2);
          ctx.globalAlpha = a;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(px, py, s.size * 0.7, 0, Math.PI * 2);
          ctx.fill();
          // Destello fino en cruz, apenas perceptible
          ctx.globalAlpha = a * 0.35;
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 0.5;
          const sp = s.size * 5;
          ctx.beginPath();
          ctx.moveTo(px - sp, py);
          ctx.lineTo(px + sp, py);
          ctx.moveTo(px, py - sp);
          ctx.lineTo(px, py + sp);
          ctx.stroke();
          ctx.restore();
        } else {
          ctx.globalAlpha = a;
          ctx.fillStyle = s.color;
          ctx.fillRect(px, py, s.size, s.size);
        }
      }
      ctx.globalAlpha = 1;

      // 4. Rayos eléctricos dentro de la nebulosa
      if (Math.random() < 0.065 && bolts.length < 3) bolts.push(makeBolt(cx, cy, width));

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = bolts.length - 1; i >= 0; i--) {
        const b = bolts[i];
        b.life++;
        if (b.life >= b.maxLife) {
          bolts.splice(i, 1);
          continue;
        }
        const p = b.life / b.maxLife;
        const env = p < 0.15 ? p / 0.15 : Math.pow(1 - (p - 0.15) / 0.85, 1.7);
        const flick = 0.45 + 0.55 * Math.random();
        const A = env * flick;

        // Resplandor que ilumina la nebulosa alrededor del rayo
        const fr = 120;
        ctx.globalAlpha = 0.2 * env;
        ctx.drawImage(glowSprite, b.cx - fr, b.cy - fr * 0.7, fr * 2, fr * 1.4);

        for (const path of [b.main, ...b.branches]) {
          const isMain = path === b.main;
          ctx.strokeStyle = `rgba(${b.tint}, 1)`;
          ctx.globalAlpha = 0.1 * A;
          ctx.lineWidth = isMain ? 6 : 3.5;
          drawPath(path);
          ctx.globalAlpha = 0.3 * A;
          ctx.lineWidth = isMain ? 2.4 : 1.4;
          drawPath(path);
          ctx.strokeStyle = "rgba(235, 247, 255, 1)";
          ctx.globalAlpha = 0.85 * A;
          ctx.lineWidth = isMain ? 0.9 : 0.55;
          drawPath(path);
        }
      }
      ctx.restore();

      // 5. Estrella fugaz ocasional
      if (!meteor && Math.random() < 0.0016) {
        const ang = Math.PI * (0.78 + Math.random() * 0.08);
        const sp = 9 + Math.random() * 5;
        meteor = {
          x: width * (0.45 + Math.random() * 0.55),
          y: height * (0.02 + Math.random() * 0.25),
          vx: Math.cos(ang) * sp,
          vy: Math.sin(ang) * -sp * -1,
          life: 0,
          maxLife: 55 + Math.random() * 25,
        };
      }
      if (meteor) {
        meteor.life++;
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        const p = meteor.life / meteor.maxLife;
        const a = Math.sin(Math.min(1, p) * Math.PI);
        const tail = 14;
        const grad = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - meteor.vx * tail,
          meteor.y - meteor.vy * tail
        );
        grad.addColorStop(0, `rgba(255,255,255,${0.9 * a})`);
        grad.addColorStop(0.3, `rgba(150,200,255,${0.4 * a})`);
        grad.addColorStop(1, "rgba(120,170,255,0)");
        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.3;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x - meteor.vx * tail, meteor.y - meteor.vy * tail);
        ctx.stroke();
        ctx.restore();
        if (meteor.life >= meteor.maxLife) meteor = null;
      }
    };

    resize();
    paintNebula();
    raf = requestAnimationFrame(render);

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [mouseRef, focusRef]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}
