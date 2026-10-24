"use client";

import React, { useState } from "react";
import {
  Sparkles,
  HelpCircle,
  Clock,
  BookOpen,
  Search,
  Wand2,
  Compass,
  Map,
  Zap,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Star,
  Shield,
  RefreshCw,
} from "lucide-react";

interface MentiUnit {
  id: string;
  number: string;
  name: string;
  alias: string;
  title: string;
  image: string;
  game: string;
  gameBadge: string;
  badgeColor: string;
  cardBorder: string;
  cardGradient: string;
  glowColor: string;
  accentText: string;
  icon: React.ElementType;
  quotes: string[];
  story: string;
  role: string;
  traits: string[];
  stats: { label: string; value: number }[];
}

const MENTI_UNITS: MentiUnit[] = [
  {
    id: "menti-original",
    number: "UNIDAD #01",
    name: "Menti Original",
    alias: "Menti Pregunta",
    title: "El Estratega de la Mente",
    image: "/mascota-menti-original.png",
    game: "Mentrix: ¿Quién está en mi mente? (MQEM)",
    gameBadge: "Líder de Estudio",
    badgeColor: "bg-purple-500/20 text-purple-200 border-purple-400/50",
    cardBorder: "border-purple-500/50 hover:border-purple-400",
    cardGradient: "from-purple-950/50 via-[#12092e] to-[#0a051d]",
    glowColor: "rgba(168,85,247,0.45)",
    accentText: "text-purple-300",
    icon: HelpCircle,
    quotes: [
      "«Una buena pregunta vale más que diez respuestas al azar. ¿Aceptas el reto?» 🧠",
      "«Custodio 210 identidades secretas en mi memoria sináptica. ¡Intenta descubrir una!» 😏",
      "«Mi signo de interrogación se enciende cada vez que dudas. ¡Piensa con estrategia!» 💡",
    ],
    story:
      "Nacido de una chispa de pura curiosidad en el núcleo de Mentrix Estudios, Menti Original es el anfitrión principal del universo. Su antena en forma de signo de interrogación brilla cuando detecta un pensamiento deductivo brillante.",
    role: "Guía principal y guardián de las 210 identidades secretas en MQEM. Evalúa tus preguntas y administra tus pistas.",
    traits: ["Curioso", "Analítico", "Desafiante", "Ingenioso"],
    stats: [
      { label: "Deducción", value: 98 },
      { label: "Memoria", value: 100 },
      { label: "Sarcasmo", value: 85 },
    ],
  },
  {
    id: "menti-tiempo",
    number: "UNIDAD #02",
    name: "Menti Tiempo",
    alias: "Menti Cronos",
    title: "El Guardián de las Eras",
    image: "/mascota-menti-tiempo.png",
    game: "Mentrix: Línea de Tiempo",
    gameBadge: "Viajero Temporal",
    badgeColor: "bg-amber-500/20 text-amber-200 border-amber-400/50",
    cardBorder: "border-amber-500/50 hover:border-amber-400",
    cardGradient: "from-amber-950/45 via-[#140c2c] to-[#0a051d]",
    glowColor: "rgba(245,158,11,0.45)",
    accentText: "text-amber-300",
    icon: Clock,
    quotes: [
      "«El tiempo no se detiene, pero quien conoce la historia tiene el poder de dominarlo.» ⏳",
      "«¿Sabrías ubicar la imprenta de Gutenberg sin alterar el flujo de los siglos?» 📜",
      "«Mi reloj de arena marca el pulso de las grandes civilizaciones humanas.» 🏛️",
    ],
    story:
      "Cuando las líneas cronológicas de la historia comenzaron a mezclarse, Menti vistió el yelmo dorado de las antiguas legiones y tomó el reloj-lupa temporal para restaurar cada invento y acontecimiento a su siglo exacto.",
    role: "Custodio del orden cronológico en Mentrix: Línea de Tiempo. Te desafía a ordenar eventos desde el 2500 a.C. hasta la era digital.",
    traits: ["Historiador", "Preciso", "Estratega", "Épico"],
    stats: [
      { label: "Cronología", value: 100 },
      { label: "Sabiduría", value: 95 },
      { label: "Precisión", value: 94 },
    ],
  },
  {
    id: "menti-biblia",
    number: "UNIDAD #03",
    name: "Menti Biblia",
    alias: "Menti Sabiduría",
    title: "El Explorador de las Escrituras",
    image: "/mascota-menti-biblia.png",
    game: "Mentrix: Estudio Bíblico (MEB)",
    gameBadge: "Maestro Bíblico",
    badgeColor: "bg-cyan-500/20 text-cyan-200 border-cyan-400/50",
    cardBorder: "border-cyan-500/50 hover:border-cyan-400",
    cardGradient: "from-cyan-950/45 via-[#0e1030] to-[#0a051d]",
    glowColor: "rgba(6,182,212,0.45)",
    accentText: "text-cyan-300",
    icon: BookOpen,
    quotes: [
      "«Aprender de las historias sagradas del pasado ilumina cada paso del presente.» ✨",
      "«Lámpara es a mis pies tu palabra, y lumbrera a mi camino. (Salmos 119:105)» 📖",
      "«Recorramos juntos las 12 categorías desde el Génesis hasta el Apocalipsis.» 🕊️",
    ],
    story:
      "Revestido con el manto tradicional y coronado por una aureola de luz serena, Menti Biblia nació para transformar el estudio de las Escrituras en un viaje cercano, familiar y lleno de descubrimientos espirituales.",
    role: "Compañero devocional en Estudio Bíblico. Guía a través de 12 categorías, citas verificadas y el Camino del Discípulo.",
    traits: ["Sereno", "Didáctico", "Inspirador", "Sabio"],
    stats: [
      { label: "Sabiduría", value: 100 },
      { label: "Paz Interior", value: 99 },
      { label: "Enseñanza", value: 96 },
    ],
  },
  {
    id: "menti-detective",
    number: "UNIDAD #04",
    name: "Menti Sherlock",
    alias: "Menti Detective",
    title: "El Maestro de las Pistas Ocultas",
    image: "/mascota-menti-detective.png",
    game: "Modo Pistas Limitadas & Misterios",
    gameBadge: "Investigador Élite",
    badgeColor: "bg-yellow-500/20 text-yellow-200 border-yellow-400/50",
    cardBorder: "border-yellow-500/50 hover:border-yellow-400",
    cardGradient: "from-yellow-950/40 via-[#140e2e] to-[#0a051d]",
    glowColor: "rgba(250,204,21,0.45)",
    accentText: "text-yellow-300",
    icon: Search,
    quotes: [
      "«Elemental, mi querido jugador: cuando descartas lo imposible, lo que queda es la verdad.» 🔍",
      "«Con una sola pista me basta para deducir el personaje. ¿Cuántas necesitas tú?» 🕵️",
      "«Observa cada detalle: fechas, lugares y hazañas son las huellas del misterio.» ✨",
    ],
    story:
      "Inspirado en los grandes detectives de Baker Street, Menti Sherlock aparece cuando el jugador activa el Modo Pistas Limitadas. Con su gorra escocesa y su lupa de aumento, examina cada rastro de información.",
    role: "Especialista en deducción extrema con pistas mínimas. Premia a quienes adivinan personajes en el primer o segundo intento.",
    traits: ["Observador", "Metódico", "Perspicaz", "Implacable"],
    stats: [
      { label: "Investigación", value: 100 },
      { label: "Lógica Pura", value: 98 },
      { label: "Intuición", value: 92 },
    ],
  },
  {
    id: "menti-mago",
    number: "UNIDAD #05",
    name: "Menti Mago",
    alias: "Menti Arcano",
    title: "El Hechicero del Conocimiento",
    image: "/mascota-menti-mago.png",
    game: "Categorías de Ciencia, Arte & Fantasía",
    gameBadge: "Sabio Arcano",
    badgeColor: "bg-indigo-500/20 text-indigo-200 border-indigo-400/50",
    cardBorder: "border-indigo-500/50 hover:border-indigo-400",
    cardGradient: "from-indigo-950/50 via-[#120b34] to-[#0a051d]",
    glowColor: "rgba(129,140,248,0.45)",
    accentText: "text-indigo-300",
    icon: Wand2,
    quotes: [
      "«La verdadera magia no está en los trucos, sino en el poder infinito de una mente curiosa.» 🪄",
      "«Desde la alquimia antigua hasta la física cuántica, cada estrella de mi sombrero guarda un secreto.» ✨",
      "«¡Conjura tu memoria! Los grandes genios de la humanidad aguardan tu respuesta.» 🌙",
    ],
    story:
      "Portador del sombrero astral bordado con constelaciones y lunas doradas, Menti Mago custodia el gran grimorio de la ciencia, la literatura fantástica y los pensadores que cambiaron el mundo con ideas casi mágicas.",
    role: "Guardián de los comodines mágicos, rachas de experiencia (XP) y categorías de ciencia, mitología y cultura universal.",
    traits: ["Místico", "Creativo", "Visionario", "Brillante"],
    stats: [
      { label: "Alquimia Mental", value: 97 },
      { label: "Creatividad", value: 100 },
      { label: "Misterio", value: 95 },
    ],
  },
  {
    id: "menti-pirata",
    number: "UNIDAD #06",
    name: "Menti Pirata",
    alias: "Menti Corsario",
    title: "El Cazador de Tesoros Mentales",
    image: "/mascota-menti-pirata.png",
    game: "Tienda de Monedas & Desafíos Diarios",
    gameBadge: "Capitán Corsario",
    badgeColor: "bg-rose-500/20 text-rose-200 border-rose-400/50",
    cardBorder: "border-rose-500/50 hover:border-rose-400",
    cardGradient: "from-rose-950/40 via-[#160a2c] to-[#0a051d]",
    glowColor: "rgba(244,63,94,0.45)",
    accentText: "text-rose-300",
    icon: Compass,
    quotes: [
      "«¡Arrr, grumete! El mayor botín de los siete mares no es el oro, ¡es el conocimiento!» 🏴‍☠️",
      "«Mantén tu racha diaria activa y llenaremos el cofre de monedas Mentrix.» 🪙",
      "«Con un solo ojo veo más lejos que cualquier tripulación distraída. ¡Al abordaje!» ⚓",
    ],
    story:
      "Capitán del navío sináptico de Mentrix, Menti Pirata navega por los océanos de la historia buscando cofres de monedas, logros ocultos y recompensas diarias para los jugadores más constantes.",
    role: "Anfitrión del sistema de recompensas, cofres de monedas, rachas de fuego y desafíos de exploración audaz.",
    traits: ["Audaz", "Aventurero", "Valiente", "Carismático"],
    stats: [
      { label: "Caza de Tesoros", value: 100 },
      { label: "Coraje", value: 96 },
      { label: "Astucia", value: 93 },
    ],
  },
  {
    id: "menti-explorador",
    number: "UNIDAD #07",
    name: "Menti Explorador",
    alias: "Menti Safari",
    title: "El Descubridor de Mundos",
    image: "/mascota-menti-explorador.png",
    game: "Geografía, Naturaleza & Tierra Santa",
    gameBadge: "Expedicionario",
    badgeColor: "bg-emerald-500/20 text-emerald-200 border-emerald-400/50",
    cardBorder: "border-emerald-500/50 hover:border-emerald-400",
    cardGradient: "from-emerald-950/40 via-[#0d142c] to-[#0a051d]",
    glowColor: "rgba(16,185,129,0.45)",
    accentText: "text-emerald-300",
    icon: Map,
    quotes: [
      "«Cada continente, desierto y maravilla antigua tiene una historia esperando ser desenterrada.» 🧭",
      "«Ajusta tus gafas de expedición: hoy cruzaremos mapas históricos y tierras lejanas.» 🗺️",
      "«No hay rincón del planeta que una mente curiosa no pueda explorar.» 🌍",
    ],
    story:
      "Con su salacot de expedición y sus gafas de campo, Menti Explorador recorre ruinas arqueológicas, maravillas del mundo y mapas bíblicos para guiar a quienes disfrutan descubrir dónde ocurrieron las grandes gestas.",
    role: "Especialista en mapas, expediciones históricas, descubrimientos geográficos y la categoría Tierra Santa.",
    traits: ["Incansable", "Curioso", "Guía", "Descubridor"],
    stats: [
      { label: "Cartografía", value: 99 },
      { label: "Supervivencia", value: 95 },
      { label: "Curiosidad", value: 98 },
    ],
  },
  {
    id: "menti-ninja",
    number: "UNIDAD #08",
    name: "Menti Ninja",
    alias: "Menti Sombra",
    title: "El Maestro de la Agilidad Mental",
    image: "/mascota-menti-ninja.png",
    game: "Modo Contrarreloj 60s & Duelos Rápidos",
    gameBadge: "Gran Maestro",
    badgeColor: "bg-sky-500/20 text-sky-200 border-sky-400/50",
    cardBorder: "border-sky-500/50 hover:border-sky-400",
    cardGradient: "from-sky-950/45 via-[#0d102c] to-[#0a051d]",
    glowColor: "rgba(56,189,248,0.45)",
    accentText: "text-sky-300",
    icon: Zap,
    quotes: [
      "«En el modo Contrarreloj, dudar un segundo es perder la batalla. ¡Responde con reflejos de sombra!» ⚡",
      "«Silencio, concentración total y mente afilada: así se supera el récord.» 🥷",
      "«Mis ojos ven la respuesta antes de que termine de escribirse la pista.» 🔥",
    ],
    story:
      "Entrenado en el dojo de la velocidad sináptica, Menti Ninja aparece cuando el cronómetro corre a toda velocidad. Representa la concentración absoluta, los reflejos mentales y la precisión bajo presión.",
    role: "Maestro del Modo Contrarreloj, Supervivencia sin errores y duelos relámpago de agilidad mental.",
    traits: ["Veloz", "Concentrado", "Sigiloso", "Letal"],
    stats: [
      { label: "Velocidad Mental", value: 100 },
      { label: "Reflejos", value: 99 },
      { label: "Enfoque", value: 97 },
    ],
  },
];

export default function MascotasShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [quoteIdxMap, setQuoteIdxMap] = useState<Record<string, number>>({});
  const [bouncingId, setBouncingId] = useState<string | null>(null);

  const activeMenti = MENTI_UNITS[activeIdx];
  const prevIdx = activeIdx === 0 ? MENTI_UNITS.length - 1 : activeIdx - 1;
  const nextIdx = activeIdx === MENTI_UNITS.length - 1 ? 0 : activeIdx + 1;

  const prevMenti = MENTI_UNITS[prevIdx];
  const nextMenti = MENTI_UNITS[nextIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? MENTI_UNITS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === MENTI_UNITS.length - 1 ? 0 : prev + 1));
  };

  const cycleQuote = (id: string, totalQuotes: number) => {
    setBouncingId(id);
    setQuoteIdxMap((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % totalQuotes,
    }));
    setTimeout(() => setBouncingId(null), 450);
  };

  const selectUnit = (idx: number) => {
    setActiveIdx(idx);
    const el = document.getElementById("menti-stage");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const activeQuoteIdx = quoteIdxMap[activeMenti.id] || 0;

  return (
    <section id="mascotas" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#070314] border-t border-purple-900/30">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/50 text-purple-300 text-xs sm:text-sm font-semibold mb-4 shadow-inner backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>El Universo de Menti · 8 Unidades con Identidad Propia</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Conoce a nuestras <span className="text-gradient-purple">Mascotas Oficiales</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            <strong>Menti</strong> no es solo una mascota: es un cerebro vivo que adopta distintos trajes, personalidades y poderes según el desafío mental al que te enfrentes. Explora cada unidad en el carrusel o en sus fichas individuales.
          </p>
        </div>

        {/* =====================================================================
            1. CARRUSEL INTERACTIVO PANORÁMICO (CON VISTAS LATERALES VISIBLES)
           ===================================================================== */}
        <div id="menti-stage" className="mb-20">
          {/* Quick Selector Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {MENTI_UNITS.map((unit, idx) => {
              const IconComp = unit.icon;
              const isSelected = idx === activeIdx;
              return (
                <button
                  key={unit.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? `${unit.badgeColor} border shadow-lg scale-105`
                      : "bg-purple-950/40 text-slate-300 hover:text-white border border-purple-900/40 hover:border-purple-600/50"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={unit.image} alt={unit.name} className="w-5 h-5 object-contain" />
                  <span>{unit.name.replace("Menti ", "")}</span>
                </button>
              );
            })}
          </div>

          {/* 3-Column Carousel Track: [Previous Visible Card] + [Active Expanded Dossier] + [Next Visible Card] */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Peek Card: Previous Menti in Carousel (Clearly visible & clickable) */}
            <div
              onClick={handlePrev}
              className="hidden lg:flex lg:col-span-3 rounded-3xl p-5 bg-gradient-to-b from-[#130a2e]/90 to-[#090418]/90 border border-purple-800/40 hover:border-cyan-400/60 flex-col items-center justify-between text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 group shadow-xl"
            >
              <div className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-cyan-300">
                <span className="flex items-center gap-1">
                  <ChevronLeft className="w-4 h-4" /> Anterior
                </span>
                <span>{prevMenti.number}</span>
              </div>

              <div className="relative my-4 w-36 h-36 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-50 group-hover:opacity-90 transition-opacity"
                  style={{ background: prevMenti.glowColor }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prevMenti.image}
                  alt={prevMenti.name}
                  className="w-32 h-32 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div>
                <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border mb-1.5 ${prevMenti.badgeColor}`}>
                  {prevMenti.gameBadge}
                </span>
                <h4 className="font-display font-extrabold text-lg text-white group-hover:text-cyan-200 transition-colors">
                  {prevMenti.name}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {prevMenti.title}
                </p>
              </div>
            </div>

            {/* Center Main Spotlight Dossier Card */}
            <div
              className={`lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-gradient-to-b ${activeMenti.cardGradient} border-2 ${activeMenti.cardBorder} shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-500`}
            >
              {/* Ambient glow inside main card */}
              <div
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-40"
                style={{ background: activeMenti.glowColor }}
              />

              {/* Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${activeMenti.badgeColor}`}>
                    {activeMenti.number} · {activeMenti.gameBadge}
                  </span>
                </div>

                {/* Mobile / Tablet Prev-Next Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-purple-950/70 hover:bg-purple-800 border border-purple-600/40 text-white transition-all cursor-pointer"
                    aria-label="Anterior Menti"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold text-slate-300 px-1">
                    {activeIdx + 1} / {MENTI_UNITS.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-purple-950/70 hover:bg-purple-800 border border-purple-600/40 text-white transition-all cursor-pointer"
                    aria-label="Siguiente Menti"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Character Split: Image + Lore */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center relative z-10 mb-6">
                {/* Character Portrait */}
                <div className="sm:col-span-5 flex flex-col items-center">
                  <button
                    onClick={() => cycleQuote(activeMenti.id, activeMenti.quotes.length)}
                    title="¡Toca a Menti para que hable!"
                    className={`relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center cursor-pointer transition-transform ${
                      bouncingId === activeMenti.id ? "scale-110 -translate-y-2" : "animate-float hover:scale-105"
                    }`}
                  >
                    <div
                      className="absolute inset-2 rounded-full blur-2xl opacity-70"
                      style={{ background: activeMenti.glowColor }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeMenti.image}
                      alt={activeMenti.name}
                      className="w-full h-full object-contain relative z-10"
                      style={{
                        filter: `drop-shadow(0 14px 28px ${activeMenti.glowColor})`,
                      }}
                    />
                  </button>

                  {/* Traits pills */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
                    {activeMenti.traits.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/70 text-purple-200 border border-purple-700/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Character Story & Stats */}
                <div className="sm:col-span-7 text-center sm:text-left">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                    Alias: {activeMenti.alias}
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-1">
                    {activeMenti.name}
                  </h3>
                  <div className={`text-sm font-bold mb-3 ${activeMenti.accentText}`}>
                    {activeMenti.title}
                  </div>

                  {/* Story Lore */}
                  <div className="p-3.5 rounded-2xl bg-[#090418]/70 border border-purple-800/40 mb-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-purple-300 mb-1">
                      Historia & Origen:
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {activeMenti.story}
                    </p>
                  </div>

                  {/* Stats Bars */}
                  <div className="space-y-2">
                    {activeMenti.stats.map((st) => (
                      <div key={st.label}>
                        <div className="flex justify-between text-[11px] font-semibold mb-0.5">
                          <span className="text-slate-300">{st.label}</span>
                          <span className={activeMenti.accentText}>{st.value}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-purple-950/80 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-amber-400 transition-all duration-500"
                            style={{ width: `${st.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Speech Bubble */}
              <div
                onClick={() => cycleQuote(activeMenti.id, activeMenti.quotes.length)}
                className="relative z-10 p-4 rounded-2xl bg-[#0b051e]/90 border border-purple-500/40 hover:border-cyan-400 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-cyan-300 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Voz de {activeMenti.name}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 group-hover:text-white flex items-center gap-1">
                    <RefreshCw className="w-3 h-3" />
                    Cambiar frase ({activeQuoteIdx + 1}/{activeMenti.quotes.length})
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white italic font-medium">
                  {activeMenti.quotes[activeQuoteIdx]}
                </p>
              </div>
            </div>

            {/* Right Peek Card: Next Menti in Carousel (Clearly visible & clickable) */}
            <div
              onClick={handleNext}
              className="hidden lg:flex lg:col-span-3 rounded-3xl p-5 bg-gradient-to-b from-[#130a2e]/90 to-[#090418]/90 border border-purple-800/40 hover:border-cyan-400/60 flex-col items-center justify-between text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 group shadow-xl"
            >
              <div className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-cyan-300">
                <span>{nextMenti.number}</span>
                <span className="flex items-center gap-1">
                  Siguiente <ChevronRight className="w-4 h-4" />
                </span>
              </div>

              <div className="relative my-4 w-36 h-36 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-50 group-hover:opacity-90 transition-opacity"
                  style={{ background: nextMenti.glowColor }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={nextMenti.image}
                  alt={nextMenti.name}
                  className="w-32 h-32 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div>
                <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border mb-1.5 ${nextMenti.badgeColor}`}>
                  {nextMenti.gameBadge}
                </span>
                <h4 className="font-display font-extrabold text-lg text-white group-hover:text-cyan-200 transition-colors">
                  {nextMenti.name}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {nextMenti.title}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            2. COLECCIÓN COMPLETA: CARTAS INDIVIDUALES DE CADA MENTI
           ===================================================================== */}
        <div className="mb-8 text-center">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
            Galería de <span className="text-gradient-purple">Fichas Individuales</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Cada versión de Menti tiene su propia historia, misión y personalidad dentro de nuestros juegos. Haz clic en cualquier carta para interactuar con su diálogo o verla en el escenario principal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTI_UNITS.map((m, idx) => {
            const IconComp = m.icon;
            const isCurrent = idx === activeIdx;
            const unitQuoteIdx = quoteIdxMap[m.id] || 0;

            return (
              <div
                key={m.id}
                className={`rounded-3xl p-6 bg-gradient-to-b ${m.cardGradient} border-2 ${
                  isCurrent ? "border-cyan-400 shadow-2xl shadow-cyan-950/40" : m.cardBorder
                } flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden`}
              >
                {/* Top Glow */}
                <div
                  className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity"
                  style={{ background: m.glowColor }}
                />

                <div>
                  {/* Header Badge & Unit Number */}
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${m.badgeColor}`}>
                      {m.gameBadge}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      {m.number}
                    </span>
                  </div>

                  {/* Individual Mascot Portrait */}
                  <div
                    onClick={() => selectUnit(idx)}
                    className="relative w-full h-44 flex items-center justify-center my-2 cursor-pointer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-36 h-36 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        filter: `drop-shadow(0 10px 20px ${m.glowColor})`,
                      }}
                    />
                  </div>

                  {/* Name & Title */}
                  <div className="text-center mb-3">
                    <h4 className="font-display font-extrabold text-xl text-white">
                      {m.name}
                    </h4>
                    <div className={`text-xs font-bold ${m.accentText}`}>
                      {m.title}
                    </div>
                  </div>

                  {/* Lore / Story */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 text-center">
                    {m.story}
                  </p>

                  {/* Interactive Quote Box inside card */}
                  <div
                    onClick={() => cycleQuote(m.id, m.quotes.length)}
                    className="p-3 rounded-2xl bg-[#080316]/80 border border-purple-800/40 hover:border-cyan-400/60 cursor-pointer transition-colors mb-4"
                  >
                    <div className="flex items-center justify-between text-[10px] text-purple-300 font-semibold mb-1">
                      <span className="flex items-center gap-1">
                        <IconComp className="w-3 h-3" /> Frase de Menti
                      </span>
                      <span className="text-slate-400 hover:text-white flex items-center gap-0.5">
                        <RefreshCw className="w-2.5 h-2.5" /> Tocar
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-200 italic leading-snug">
                      {m.quotes[unitQuoteIdx]}
                    </p>
                  </div>
                </div>

                {/* Footer: Game & Traits */}
                <div className="pt-3 border-t border-purple-900/40">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                    Aparición destacada:
                  </div>
                  <div className="text-xs font-bold text-white mb-2.5">
                    {m.game}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {m.traits.map((trait) => (
                      <span
                        key={trait}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-950/60 text-purple-200 border border-purple-800/40"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
