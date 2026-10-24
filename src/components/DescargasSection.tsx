"use client";

import React from "react";
import {
  Download,
  Smartphone,
  ShieldCheck,
  Sparkles,
  WifiOff,
  CheckCircle2,
  ExternalLink,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";

export default function DescargasSection() {
  const games = [
    {
      id: "mqem",
      title: "Mentrix: ¿Quién está en mi mente?",
      tagline: "El juego definitivo de deducción psicológica y pistas estratégicas.",
      version: "v1.2.0 · Oficial",
      rating: "4.9",
      category: "Deducción & Trivia",
      accent: "from-purple-600 via-indigo-600 to-cyan-500",
      accentBorder: "border-purple-500/40 hover:border-purple-400",
      accentBadge: "bg-purple-500/20 text-purple-200 border-purple-500/30",
      glowBg: "bg-purple-600/10",
      image: "/games/mind-game-splash.png",
      mascotThumb: "/mascota-menti-original.png",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.mentrix.quienestaenmente&pcampaignid=web_share",
      spotlightHref: "#mqem",
      specs: [
        { label: "Plataforma", val: "Android 8.0 o superior" },
        { label: "Conexión", val: "100% Offline (Sin internet)" },
        { label: "Precio", val: "Gratis en Google Play" },
        { label: "Contenido", val: "210+ Personajes / 7 Categorías" },
      ],
      highlights: [
        "4 niveles de pistas estratégicas con monedas",
        "Modos: Fiesta, Contrarreloj y Supervivencia (3 vidas)",
        "Creador integrado de personajes personalizados",
      ],
    },
    {
      id: "estudio-biblico",
      title: "Mentrix: Estudio Bíblico",
      tagline: "Aprende, memoriza y profundiza en las Sagradas Escrituras.",
      version: "v1.0.4 · Edición Especial",
      rating: "5.0",
      category: "Educación & Fe",
      accent: "from-cyan-500 via-indigo-600 to-purple-600",
      accentBorder: "border-cyan-500/40 hover:border-cyan-400",
      accentBadge: "bg-cyan-500/20 text-cyan-200 border-cyan-500/30",
      glowBg: "bg-cyan-600/10",
      image: "/games/mentrix-biblia.png",
      mascotThumb: "/mascota-menti-biblia.png",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.mentrix.biblia&pcampaignid=web_share",
      spotlightHref: "#estudio-biblico",
      specs: [
        { label: "Plataforma", val: "Android 8.0 o superior" },
        { label: "Conexión", val: "100% Offline (Sin internet)" },
        { label: "Precio", val: "Gratis en Google Play" },
        { label: "Contenido", val: "12 Categorías / Citas Bíblicas" },
      ],
      highlights: [
        "12 categorías temáticas estructuradas por libros y personajes",
        "Referencias cruzadas con respaldo bíblico Reina-Valera",
        "Modo estudio para familias, escuelas y grupos de jóvenes",
      ],
    },
  ];

  return (
    <section id="descargas" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#09041a]">
      {/* Background ambient cosmic glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-700/50 text-purple-300 text-xs sm:text-sm font-semibold mb-4 shadow-inner backdrop-blur-md">
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span>Zona de Descargas Oficial</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Descarga Nuestros Juegos en{" "}
            <span className="text-gradient-purple">Google Play</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Instala gratis las aplicaciones oficiales de <strong className="text-white">Mentrix Estudios</strong> directamente desde la tienda de Google Play. Disfruta de partidas 100% offline, seguras y diseñadas para ejercitar tu mente.
          </p>
        </div>

        {/* Available Games Download Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {games.map((g) => (
            <div
              key={g.id}
              className={`relative rounded-3xl bg-gradient-to-b from-[#130b2c] via-[#0e0722] to-[#080316] border-2 ${g.accentBorder} p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between`}
            >
              {/* Corner badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${g.accentBadge}`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  {g.category}
                </span>

                <div className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-[#1d123d] px-2.5 py-1 rounded-full border border-amber-500/30">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{g.rating}</span>
                  <span className="text-slate-400 font-normal">/ 5.0</span>
                </div>
              </div>

              {/* Main Info with Mascot and Title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-purple-900/40 to-slate-900 border border-purple-500/30 p-2 shrink-0 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.mascotThumb}
                    alt={g.title}
                    className="w-full h-full object-contain filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)]"
                  />
                  <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow">
                    Oficial
                  </div>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-wide mb-1.5">
                    {g.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {g.tagline}
                  </p>
                  <div className="text-[11px] font-semibold text-purple-300">
                    {g.version}
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-purple-950/30 border border-purple-900/50 text-xs mb-6">
                {g.specs.map((s) => (
                  <div key={s.label}>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      {s.label}
                    </span>
                    <span className="text-slate-200 font-semibold">{s.val}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-8">
                {g.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Play Store Button + Spotlight Link */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-purple-900/40">
                {/* Official Google Play Store Button */}
                <a
                  href={g.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-slate-950 hover:bg-slate-900 border-2 border-purple-500/50 hover:border-cyan-400 text-white font-bold transition-all shadow-xl hover:shadow-cyan-500/20 group/btn"
                >
                  {/* Google Play Triangle SVG */}
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3.609 1.813L13.792 12 3.61 22.187C3.262 21.824 3 21.286 3 20.61V3.39c0-.676.262-1.214.609-1.577z"
                      fill="#00E5FF"
                    />
                    <path
                      d="M17.217 8.577L13.792 12l3.425 3.423 3.864-2.213c1.107-.633 1.107-1.666 0-2.3L17.217 8.577z"
                      fill="#FFD600"
                    />
                    <path
                      d="M3.609 1.813l10.183 10.187 3.425-3.423L6.038.749C5.031.173 4.148.455 3.61 1.813z"
                      fill="#00E676"
                    />
                    <path
                      d="M17.217 15.423l-3.425-3.423L3.61 22.187c.538 1.358 1.42 1.64 2.428 1.064l11.179-6.828z"
                      fill="#FF1744"
                    />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Disponible en
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white tracking-wide">
                      Google Play
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover/btn:text-cyan-400 ml-auto" />
                </a>

                {/* Secondary Pill Button */}
                <a
                  href={g.spotlightHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-purple-950/50 hover:bg-purple-900/60 border border-purple-800/60 text-purple-300 hover:text-white text-xs font-semibold transition-colors"
                >
                  <span>Ver Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 3rd Game: Línea de Tiempo - Próximo Lanzamiento */}
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-[#180e28] to-purple-950/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
            <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 p-1.5 shrink-0 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mascota-menti-tiempo.png"
                alt="Menti Tiempo"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-3 h-3 text-amber-400" />
                Próximamente en Google Play
              </div>
              <h3 className="font-display font-extrabold text-xl text-white mb-1">
                Mentrix: Línea de Tiempo
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                El estudio está completando la calibración histórica de más de 500 cartas para su estreno en Google Play Store este 2026.
              </p>
            </div>
          </div>

          <a
            href="#linea-de-tiempo"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all shrink-0 w-full md:w-auto"
          >
            <span>Conocer Mecánica</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>
        </div>

        {/* Security & Offline Guarantees Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-purple-900/30 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-purple-950/20 border border-purple-900/30">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Google Play Protect</div>
              <div className="text-[11px] text-slate-400">Verificado y libre de software malicioso</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-purple-950/20 border border-purple-900/30">
            <WifiOff className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">100% Juego Offline</div>
              <div className="text-[11px] text-slate-400">Juega donde quieras sin consumir tus datos</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-purple-950/20 border border-purple-900/30">
            <Sparkles className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Actualizaciones Gratuitas</div>
              <div className="text-[11px] text-slate-400">Nuevos personajes y modos continuos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
