"use client";

import React, { useState } from "react";
import { Sparkles, Gamepad2, ArrowRight, Brain, Trophy, Zap, ChevronLeft, ChevronRight, Clock, BookOpen, HelpCircle, Search, Wand2, Compass } from "lucide-react";

interface MascotSkin {
  id: string;
  name: string;
  role: string;
  subtitle: string;
  game: string;
  gameHref: string;
  image: string;
  accentClass: string;
  badgeText: string;
  badgeStyle: string;
  dotColor: string;
  glowShadow: string;
  borderColor: string;
  borderHover: string;
  tabIcon: React.ReactNode;
  tabLabel: string;
}

const MASCOT_SKINS: MascotSkin[] = [
  {
    id: "original",
    name: "MENTI ORIGINAL",
    role: "El Estratega de la Mente",
    subtitle: "Tu compañero inteligente en cada deducción y desafío mental",
    game: "Mentrix: ¿Quién está en mi mente?",
    gameHref: "#mqem",
    image: "/mascota-menti-original.png",
    accentClass: "text-purple-400",
    badgeText: "Mascota Oficial · MQEM",
    badgeStyle: "bg-purple-500/20 text-purple-200 border-purple-400/50",
    dotColor: "bg-purple-500",
    glowShadow: "rgba(168,85,247,0.45)",
    borderColor: "border-purple-500/50",
    borderHover: "border-purple-500/60",
    tabIcon: <HelpCircle className="w-3.5 h-3.5" />,
    tabLabel: "Original",
  },
  {
    id: "tiempo",
    name: "MENTI TIEMPO",
    role: "El Guardián de las Eras",
    subtitle: "Domina civilizaciones, descubrimientos e hitos de la historia mundial",
    game: "Mentrix: Línea de Tiempo",
    gameHref: "#linea-de-tiempo",
    image: "/mascota-menti-tiempo.png",
    accentClass: "text-amber-400",
    badgeText: "Próximo Estreno · Cronos",
    badgeStyle: "bg-amber-500/20 text-amber-200 border-amber-400/50",
    dotColor: "bg-amber-500",
    glowShadow: "rgba(245,158,11,0.45)",
    borderColor: "border-amber-500/50",
    borderHover: "border-amber-500/60",
    tabIcon: <Clock className="w-3.5 h-3.5" />,
    tabLabel: "Tiempo",
  },
  {
    id: "biblia",
    name: "MENTI BIBLIA",
    role: "El Explorador de las Escrituras",
    subtitle: "Acompaña tu aprendizaje con historias de fe, mapas y sabiduría sagrada",
    game: "Mentrix: Estudio Bíblico",
    gameHref: "#estudio-biblico",
    image: "/mascota-menti-biblia.png",
    accentClass: "text-cyan-400",
    badgeText: "Edición Especial · Sabiduría",
    badgeStyle: "bg-cyan-500/20 text-cyan-200 border-cyan-400/50",
    dotColor: "bg-cyan-500",
    glowShadow: "rgba(6,182,212,0.45)",
    borderColor: "border-cyan-500/50",
    borderHover: "border-cyan-500/60",
    tabIcon: <BookOpen className="w-3.5 h-3.5" />,
    tabLabel: "Biblia",
  },
  {
    id: "detective",
    name: "MENTI SHERLOCK",
    role: "El Detective de Pistas Ocultas",
    subtitle: "Ningún acertijo ni identidad secreta escapa de su lupa deductiva",
    game: "Modo Pistas Limitadas · MQEM",
    gameHref: "#mascotas",
    image: "/mascota-menti-detective.png",
    accentClass: "text-amber-300",
    badgeText: "Unidad Especial · Detective",
    badgeStyle: "bg-amber-500/20 text-amber-200 border-amber-400/50",
    dotColor: "bg-amber-400",
    glowShadow: "rgba(251,191,36,0.45)",
    borderColor: "border-amber-500/50",
    borderHover: "border-amber-400/60",
    tabIcon: <Search className="w-3.5 h-3.5" />,
    tabLabel: "Detective",
  },
  {
    id: "mago",
    name: "MENTI MAGO",
    role: "El Hechicero del Conocimiento",
    subtitle: "Domina los misterios de la ciencia, la alquimia y la fantasía épica",
    game: "Universo Menti · Colección",
    gameHref: "#mascotas",
    image: "/mascota-menti-mago.png",
    accentClass: "text-indigo-300",
    badgeText: "Unidad Especial · Arcano",
    badgeStyle: "bg-indigo-500/20 text-indigo-200 border-indigo-400/50",
    dotColor: "bg-indigo-400",
    glowShadow: "rgba(129,140,248,0.45)",
    borderColor: "border-indigo-500/50",
    borderHover: "border-indigo-400/60",
    tabIcon: <Wand2 className="w-3.5 h-3.5" />,
    tabLabel: "Mago",
  },
  {
    id: "pirata",
    name: "MENTI PIRATA",
    role: "El Corsario de los Siete Mares",
    subtitle: "Navega por rutas históricas y conquista monedas en cada partida",
    game: "Universo Menti · Colección",
    gameHref: "#mascotas",
    image: "/mascota-menti-pirata.png",
    accentClass: "text-rose-400",
    badgeText: "Unidad Especial · Corsario",
    badgeStyle: "bg-rose-500/20 text-rose-200 border-rose-400/50",
    dotColor: "bg-rose-500",
    glowShadow: "rgba(244,63,94,0.45)",
    borderColor: "border-rose-500/50",
    borderHover: "border-rose-400/60",
    tabIcon: <Compass className="w-3.5 h-3.5" />,
    tabLabel: "Pirata",
  },
];

export default function MentrixHero() {
  const [currentSkinIdx, setCurrentSkinIdx] = useState(0);

  const prevSkin = () => {
    setCurrentSkinIdx((prev) => (prev === 0 ? MASCOT_SKINS.length - 1 : prev - 1));
  };

  const nextSkin = () => {
    setCurrentSkinIdx((prev) => (prev === MASCOT_SKINS.length - 1 ? 0 : prev + 1));
  };

  const currentSkin = MASCOT_SKINS[currentSkinIdx];
  const prevIdx = currentSkinIdx === 0 ? MASCOT_SKINS.length - 1 : currentSkinIdx - 1;
  const nextIdx = currentSkinIdx === MASCOT_SKINS.length - 1 ? 0 : currentSkinIdx + 1;

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background radial glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f133815_1px,transparent_1px),linear-gradient(to_bottom,#1f133815_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/50 text-purple-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Estudio Indie de Videojuegos · La Serena, Chile</span>
          </div>

          {/* Main Heading with vibrant color highlight */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            Desafía tu mente con{" "}
            <span className="text-gradient-purple">juegos inteligentes</span>{" "}
            y experiencias únicas
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            En <strong className="text-white font-semibold">Mentrix Estudios</strong> creamos videojuegos de deducción, trivias estratégicas y plataformas de aprendizaje interactivo. Juegos diseñados para entretener, ejercitar tu pensamiento y conectar con el conocimiento.
          </p>

          {/* Action buttons (Rounded-xl) */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <a
              href="#juegos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-base shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Gamepad2 className="w-5 h-5 text-cyan-200" />
              <span>Conoce Nuestros Juegos</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#linea-de-tiempo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-700/50 hover:border-amber-400 text-slate-200 hover:text-white font-semibold text-base transition-all"
            >
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Próximo Estreno: Línea de Tiempo</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-purple-900/30 max-w-2xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-cyan-400">210+</div>
              <div className="text-xs text-slate-400">Personajes en MQEM</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-purple-400">100%</div>
              <div className="text-xs text-slate-400">Juego Offline local</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-amber-400">8</div>
              <div className="text-xs text-slate-400">Versiones de Menti</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-emerald-400">Chile</div>
              <div className="text-xs text-slate-400">Desarrollo nacional</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Graphic with Interactive Mascot Skin Card */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-md sm:max-w-lg flex items-center justify-center">
            {/* Animated Glow Rings */}
            <div className="absolute -inset-4 rounded-full border border-purple-500/20 animate-pulse pointer-events-none" />
            <div className="absolute inset-8 rounded-full border border-cyan-500/20 pointer-events-none" />
            <div
              className="absolute w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-700"
              style={{
                background: `radial-gradient(circle, ${currentSkin.glowShadow} 0%, rgba(12,7,34,0) 70%)`,
              }}
            />

            {/* Main Interactive Mascot Card (Enlarged and Rounded-3xl) */}
            <div className={`relative z-10 w-full rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#180e3c] via-[#100829] to-[#0a051d] border-2 ${currentSkin.borderColor} shadow-2xl transition-all duration-500 hover:${currentSkin.borderHover}`}>
              
              {/* Top Header: Badge + Live Skin Counter */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border transition-colors ${currentSkin.badgeStyle}`}>
                  {currentSkin.badgeText}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-slate-400">
                    Skin <span className="text-white font-bold">{currentSkinIdx + 1}</span>/{MASCOT_SKINS.length}
                  </span>
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentSkin.dotColor} opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${currentSkin.dotColor}`} />
                  </span>
                </div>
              </div>

              {/* Interactive Mascot Carousel Stage (Visible Full-Color Side Previews) */}
              <div className="relative w-full h-64 sm:h-72 flex items-center justify-center my-2 select-none">
                
                {/* Previous Skin Clearly Visible on Left */}
                <button
                  onClick={prevSkin}
                  aria-label="Ver skin anterior"
                  className="absolute -left-2 sm:left-0 z-10 w-24 h-24 sm:w-28 sm:h-28 opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-purple-950/50 border border-purple-500/30 group-hover:border-cyan-400 p-1.5 flex items-center justify-center shadow-lg backdrop-blur-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={MASCOT_SKINS[prevIdx].image}
                      alt={MASCOT_SKINS[prevIdx].name}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="mt-1 text-[10px] font-bold text-purple-200 group-hover:text-cyan-300 bg-[#0d0724]/90 px-2 py-0.5 rounded-full border border-purple-700/40">
                    ← {MASCOT_SKINS[prevIdx].tabLabel}
                  </span>
                </button>

                {/* Left Arrow Control */}
                <button
                  onClick={prevSkin}
                  aria-label="Anterior"
                  className="absolute left-16 sm:left-20 z-30 p-2 rounded-full bg-[#0d0724]/95 hover:bg-purple-600 border border-purple-400/50 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Central Main Active Mascot */}
                <div
                  key={currentSkin.id}
                  className="relative z-20 w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center animate-float"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentSkin.image}
                    alt={currentSkin.name}
                    className="w-full h-full object-contain transition-all duration-500"
                    style={{
                      filter: `drop-shadow(0 14px 28px ${currentSkin.glowShadow})`,
                    }}
                  />
                </div>

                {/* Right Arrow Control */}
                <button
                  onClick={nextSkin}
                  aria-label="Siguiente"
                  className="absolute right-16 sm:right-20 z-30 p-2 rounded-full bg-[#0d0724]/95 hover:bg-purple-600 border border-purple-400/50 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Next Skin Clearly Visible on Right */}
                <button
                  onClick={nextSkin}
                  aria-label="Ver skin siguiente"
                  className="absolute -right-2 sm:right-0 z-10 w-24 h-24 sm:w-28 sm:h-28 opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-purple-950/50 border border-purple-500/30 group-hover:border-cyan-400 p-1.5 flex items-center justify-center shadow-lg backdrop-blur-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={MASCOT_SKINS[nextIdx].image}
                      alt={MASCOT_SKINS[nextIdx].name}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="mt-1 text-[10px] font-bold text-purple-200 group-hover:text-cyan-300 bg-[#0d0724]/90 px-2 py-0.5 rounded-full border border-purple-700/40">
                    {MASCOT_SKINS[nextIdx].tabLabel} →
                  </span>
                </button>
              </div>

              {/* Skin Selector Buttons (Tabs) */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
                {MASCOT_SKINS.map((skin, idx) => {
                  const isActive = idx === currentSkinIdx;
                  return (
                    <button
                      key={skin.id}
                      onClick={() => setCurrentSkinIdx(idx)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                        isActive
                          ? `${skin.badgeStyle} shadow-md scale-105`
                          : "bg-purple-950/40 text-slate-400 hover:text-white border border-purple-900/50 hover:border-purple-700/60"
                      }`}
                    >
                      {skin.tabIcon}
                      <span>{skin.tabLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Card Footer: Dynamic Mascot Details */}
              <div className="text-center pt-3 border-t border-purple-900/40">
                <div className="flex items-center justify-center gap-2 mb-0.5">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-wide">
                    {currentSkin.name}
                  </h3>
                </div>

                <div className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${currentSkin.accentClass}`}>
                  {currentSkin.role}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {currentSkin.subtitle}
                </p>

                <a
                  href={currentSkin.gameHref}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-purple-300 hover:text-white transition-colors"
                >
                  <span>Explorar ficha en {currentSkin.game}</span>
                  <ArrowRight className="w-3 h-3 text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Floating Mini Badge 1 (Top Right) */}
            <div className="absolute -top-3 -right-2 sm:right-2 z-20 px-3.5 py-2 rounded-xl bg-[#12082e]/95 border border-cyan-400/50 shadow-lg shadow-cyan-900/40 backdrop-blur-md flex items-center gap-2 animate-float-delayed pointer-events-none">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-white">Entrenamiento Mental</span>
            </div>

            {/* Floating Mini Badge 2 (Bottom Left) */}
            <div className="absolute -bottom-4 -left-2 sm:left-2 z-20 px-3.5 py-2 rounded-xl bg-[#12082e]/95 border border-amber-400/50 shadow-lg shadow-amber-900/40 backdrop-blur-md flex items-center gap-2 animate-float pointer-events-none">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-white">Logros & Monedas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
