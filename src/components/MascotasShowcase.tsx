import React from "react";
import Image from "next/image";
import { Sparkles, HelpCircle, Clock, BookOpen, Star, Compass } from "lucide-react";

export default function MascotasShowcase() {
  const mascots = [
    {
      id: "menti-pregunta",
      name: "Menti Pregunta",
      alias: "Menti Original",
      title: "El Estratega de la Mente",
      game: "Mentrix: ¿Quién está en mi mente? (MQEM)",
      gameBadge: "Disponible",
      gameBadgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      icon: HelpCircle,
      accentColor: "border-purple-500/40 from-purple-950/40 to-[#0e0724]",
      iconBg: "bg-purple-600/20 text-purple-400 border-purple-500/40",
      quote: "Una buena pregunta vale más que diez respuestas al azar.",
      role: "El cerebro maestro que custodia las 210 identidades secretas. Evalúa tus preguntas, gestiona tus pistas y te reta en cada deducción.",
      traits: ["Curioso", "Analítico", "Estratégico"],
    },
    {
      id: "menti-tiempo",
      name: "Menti Tiempo",
      alias: "Menti Cronos",
      title: "El Guardián de las Eras",
      game: "Mentrix: Línea de Tiempo",
      gameBadge: "Próximo Estreno",
      gameBadgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      icon: Clock,
      accentColor: "border-amber-500/40 from-amber-950/30 to-[#0e0724]",
      iconBg: "bg-amber-600/20 text-amber-400 border-amber-500/40",
      quote: "El tiempo no se detiene, pero quien conoce la historia puede dominarlo.",
      role: "Equipado con su casco clásico, lupa temporal y reloj de arena. Te ayuda a ordenar civilizaciones, descubrimientos e hitos mundiales.",
      traits: ["Historiador", "Preciso", "Aventurero"],
    },
    {
      id: "menti-biblia",
      name: "Menti Biblia",
      alias: "Menti Sabiduría",
      title: "El Explorador de las Escrituras",
      game: "Mentrix: Estudio Bíblico (MEB)",
      gameBadge: "Edición Especial",
      gameBadgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      icon: BookOpen,
      accentColor: "border-cyan-500/40 from-cyan-950/30 to-[#0e0724]",
      iconBg: "bg-cyan-600/20 text-cyan-400 border-cyan-500/40",
      quote: "Aprender de las historias del pasado ilumina los pasos del presente.",
      role: "Con aureola dorada y vestiduras clásicas, acompaña a los jugadores a través de 12 categorías bíblicas, referencias y mapas sagrados.",
      traits: ["Sereno", "Didáctico", "Inspirador"],
    },
  ];

  return (
    <section id="mascotas" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#070314] border-t border-purple-900/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/50 text-purple-300 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>El Universo de Menti · Identidad del Estudio</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Conoce a nuestras <span className="text-gradient-purple">Mascotas Oficiales</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Cada videojuego de Mentrix Estudios cuenta con una versión única de <strong>Menti</strong>, adaptada a la temática, mecánica y personalidad de su propio mundo.
          </p>
        </div>

        {/* Mascot Panorama Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-purple-500/40 shadow-2xl shadow-purple-950/40 mb-14 group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#070314] via-transparent to-transparent z-10" />
          
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mascotas-mentrix.jpg"
            alt="Mascotas Oficiales de Mentrix Estudios: Menti Biblia, Menti Pregunta y Menti Tiempo"
            className="w-full max-h-[460px] object-cover object-center transition-transform duration-700 group-hover:scale-102"
          />

          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0a051d]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-purple-500/30">
            <div>
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <span>La Trinidad Cerebral de Mentrix</span>
                <span className="text-xs font-normal text-purple-300 px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/30">
                  3 Mundos · 3 Mecánicas
                </span>
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Desde la fe y la historia sagrada, hasta la deducción mental y el dominio de la línea temporal.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 text-xs font-semibold text-purple-300">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                Mascotas 100% Originales
              </span>
            </div>
          </div>
        </div>

        {/* 3 Detailed Mascot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {mascots.map((m) => {
            const IconComp = m.icon;
            return (
              <div
                key={m.id}
                className={`rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${m.accentColor} border shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${m.gameBadgeColor}`}>
                      {m.gameBadge}
                    </span>
                    <div className={`p-2 rounded-xl border ${m.iconBg}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Mascot Names */}
                  <h3 className="font-display font-extrabold text-2xl text-white mb-1">
                    {m.name}
                  </h3>
                  <div className="text-xs font-semibold text-purple-300 mb-3">
                    {m.title}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xs text-slate-300 italic border-l-2 border-purple-500/50 pl-3 py-1 mb-5">
                    "{m.quote}"
                  </blockquote>

                  {/* Role */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {m.role}
                  </p>
                </div>

                <div>
                  {/* Game Association */}
                  <div className="pt-4 border-t border-purple-900/40">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Acompañante en:
                    </div>
                    <div className="text-xs font-bold text-white mb-3">
                      {m.game}
                    </div>

                    {/* Traits tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {m.traits.map((trait) => (
                        <span
                          key={trait}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-purple-900/30 text-purple-200 border border-purple-800/40"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
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
