import React from "react";
import Image from "next/image";
import { Sparkles, Gamepad2, ArrowRight, Brain, Trophy, Zap, Download } from "lucide-react";

export default function MentrixHero() {
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
            <span>Estudio Independiente de Videojuegos · La Serena, Chile</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            Desafía tu mente con{" "}
            <span className="text-gradient-purple">juegos inteligentes</span>{" "}
            y experiencias únicas
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            En <strong className="text-white font-semibold">Mentrix Estudios</strong> creamos videojuegos de deducción, trivias estratégicas y plataformas de aprendizaje interactivo. Juegos diseñados para entretener, ejercitar tu pensamiento y conectar con el conocimiento.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <a
              href="#juegos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-base shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Gamepad2 className="w-5 h-5" />
              <span>Conoce Nuestros Juegos</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#linea-de-tiempo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-700/50 hover:border-amber-500/60 text-slate-200 hover:text-white font-semibold text-base transition-all"
            >
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Próximo Estreno: Línea de Tiempo</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-purple-900/30 max-w-2xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-purple-400">210+</div>
              <div className="text-xs text-slate-400">Personajes en MQEM</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-cyan-400">100%</div>
              <div className="text-xs text-slate-400">Juego Offline local</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-amber-400">3+</div>
              <div className="text-xs text-slate-400">Títulos en el catálogo</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-emerald-400">Gratis</div>
              <div className="text-xs text-slate-400">Para la comunidad</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Graphic with Mascot */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* Animated Glow Rings */}
            <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-pulse" />
            <div className="absolute inset-12 rounded-full border border-cyan-500/20" />
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-cyan-500/30 rounded-full blur-2xl" />

            {/* Main Mascot Card */}
            <div className="relative z-10 w-72 sm:w-80 rounded-3xl p-6 bg-gradient-to-b from-[#160d38] to-[#0c0722] border border-purple-600/40 shadow-2xl shadow-purple-900/50 animate-float">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Mascota Oficial
                </span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
                </span>
              </div>

              {/* Mascot Image */}
              <div className="relative w-full aspect-square flex items-center justify-center mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mentrix-mascot.webp"
                  alt="Mascota Mentrix"
                  className="w-56 h-56 object-contain drop-shadow-[0_10px_25px_rgba(168,85,247,0.4)]"
                />
              </div>

              {/* Card Footer */}
              <div className="text-center">
                <h3 className="font-display font-bold text-lg text-white">Menti</h3>
                <p className="text-xs text-purple-300/80">Tu compañero inteligente en cada desafío</p>
              </div>
            </div>

            {/* Floating Mini Badge 1 */}
            <div className="absolute -top-2 right-4 z-20 px-3.5 py-2 rounded-xl bg-[#12082e]/90 border border-cyan-500/40 shadow-lg shadow-cyan-900/30 backdrop-blur-md flex items-center gap-2 animate-float-delayed">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-white">Entrenamiento Mental</span>
            </div>

            {/* Floating Mini Badge 2 */}
            <div className="absolute -bottom-4 left-4 z-20 px-3.5 py-2 rounded-xl bg-[#12082e]/90 border border-amber-500/40 shadow-lg shadow-amber-900/30 backdrop-blur-md flex items-center gap-2 animate-float">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-white">Logros & Monedas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
