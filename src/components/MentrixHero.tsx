import React from "react";
import Image from "next/image";
import { Sparkles, Gamepad2, ArrowRight, Brain, Trophy, Zap, Download } from "lucide-react";

export default function MentrixHero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background radial glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f133815_1px,transparent_1px),linear-gradient(to_bottom,#1f133815_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Estudio Independiente de Videojuegos · La Serena, Chile</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-4">
            Mentrix Estudios
          </h1>

          {/* Official Slogan */}
          <div className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-gradient-purple mb-6">
            "Juega pensando. Piensa jugando."
          </div>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            Creamos videojuegos de deducción, trivias estratégicas y plataformas de aprendizaje interactivo. Experiencias diseñadas para entretener, ejercitar tu mente y conectar con el conocimiento.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <a
              href="#juegos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-base shadow-lg shadow-cyan-600/30 hover:shadow-cyan-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Gamepad2 className="w-5 h-5" />
              <span>Ver Nuestros Juegos</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#mascotas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-700/50 hover:border-cyan-400/60 text-slate-200 hover:text-white font-semibold text-base transition-all"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Conoce a Menti & Mascotas</span>
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
              <div className="font-display font-black text-2xl sm:text-3xl text-amber-400">3+</div>
              <div className="text-xs text-slate-400">Títulos en el catálogo</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-emerald-400">Chile</div>
              <div className="text-xs text-slate-400">Desarrollo nacional</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Graphic with Official Logo Emblem */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-md flex flex-col items-center justify-center">
            {/* Animated Glow Rings */}
            <div className="absolute inset-4 rounded-3xl border border-cyan-500/20 animate-pulse" />
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-cyan-600/30 via-indigo-600/20 to-purple-500/30 rounded-full blur-2xl" />

            {/* Official Logo Display Card */}
            <div className="relative z-10 w-full sm:w-96 rounded-3xl p-5 bg-gradient-to-b from-[#130b30] to-[#090518] border border-cyan-500/40 shadow-2xl shadow-cyan-950/40 animate-float overflow-hidden">
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-cyan-500/30 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-mentrix-oficial.jpg"
                  alt="Logo Oficial Mentrix Estudios: Juega pensando. Piensa jugando."
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Footer Info */}
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[11px] font-bold uppercase tracking-widest mb-1.5">
                  Identidad Oficial
                </span>
                <h3 className="font-display font-bold text-lg text-white">Mentrix Estudios</h3>
                <p className="text-xs text-purple-300/90 italic mt-0.5">
                  "Juega pensando. Piensa jugando."
                </p>
              </div>
            </div>

            {/* Floating Mini Badge: Mascota link */}
            <a
              href="#mascotas"
              className="absolute -bottom-4 right-4 z-20 px-3.5 py-2 rounded-xl bg-[#12082e]/95 border border-purple-500/40 shadow-lg shadow-purple-900/40 backdrop-blur-md flex items-center gap-2 animate-float-delayed hover:border-cyan-400 transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mentrix-mascot.webp" alt="Mascota" className="w-5 h-5 object-contain" />
              <span className="text-xs font-bold text-white">Ver Mascotas de Menti →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
