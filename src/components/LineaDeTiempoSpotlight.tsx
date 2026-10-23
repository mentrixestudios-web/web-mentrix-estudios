import React from "react";
import Image from "next/image";
import { Clock, Zap, History, Milestone, Compass, Sparkles, Bell } from "lucide-react";

export default function LineaDeTiempoSpotlight() {
  const timelineSteps = [
    {
      era: "Antigüedad Clásica",
      year: "~2500 a.C. - 476 d.C.",
      event: "Construcción de monumentos, florecimiento de Grecia y el Imperio Romano",
      color: "border-amber-500/50 bg-amber-500/10 text-amber-300",
    },
    {
      era: "Edad Media & Renacimiento",
      year: "476 d.C. - 1492 d.C.",
      event: "La invención de la imprenta, rutas marítimas y el auge del conocimiento",
      color: "border-purple-500/50 bg-purple-500/10 text-purple-300",
    },
    {
      era: "Revolución Industrial",
      year: "1760 - 1900 d.C.",
      event: "Máquina de vapor, electricidad, telegrafía y transformaciones globales",
      color: "border-cyan-500/50 bg-cyan-500/10 text-cyan-300",
    },
    {
      era: "Mundo Contemporáneo",
      year: "1900 - Actualidad",
      event: "La era digital, conquista espacial, internet e inteligencia artificial",
      color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-300",
    },
  ];

  return (
    <section id="linea-de-tiempo" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#070314] border-t border-purple-900/30">
      {/* Background ambient light */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Proyecto en Desarrollo Activo · Próximo Estreno</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
              Mentrix: <span className="text-gradient-amber">Línea de Tiempo</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              ¿Sabrías decir si el telescopio de Galileo se inventó antes o después de la llegada del hombre a América? En <strong>Mentrix: Línea de Tiempo</strong> recibirás cartas con grandes sucesos, descubrimientos y personajes, y tu misión será ordenarlos cronológicamente sin cometer errores.
            </p>

            {/* Mechanics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Mecánica Drag & Drop</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Desliza cada evento a su punto exacto en la cinta temporal interactiva.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm mb-1.5">
                  <Compass className="w-4 h-4" />
                  <span>Duelos 1v1 y Solitario</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Compite contra otros jugadores por turnos o supera tus propios récords de racha.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-purple-400 font-bold text-sm mb-1.5">
                  <History className="w-4 h-4" />
                  <span>Múltiples Mazos Temáticos</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Historia Universal, Ciencia, Música, Cine, América Latina y Cronología Bíblica.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm mb-1.5">
                  <Milestone className="w-4 h-4" />
                  <span>Apto para Toda la Familia</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Diseñado para aprender jugando, perfecto para escuelas, amigos y reuniones.
                </p>
              </div>
            </div>

            {/* Callout button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Bell className="w-4 h-4" />
                <span>Suscribirse para el Lanzamiento</span>
              </a>
              <span className="text-xs text-slate-400">
                Lanzamiento previsto para 2026 en Android & Web
              </span>
            </div>
          </div>

          {/* Right Column: Visual Timeline Interactive Graphic */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#140b30] to-[#0a051d] border border-amber-500/30 shadow-2xl shadow-amber-950/20">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-purple-900/40">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Simulador de Línea Temporal</h3>
                  <p className="text-xs text-slate-400">Concepto de juego en desarrollo</p>
                </div>
                <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Clock className="w-5 h-5 animate-pulse" />
                </span>
              </div>

              {/* Vertical steps */}
              <div className="space-y-4 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-purple-500 before:to-emerald-500 pl-8">
                {timelineSteps.map((step, idx) => (
                  <div key={idx} className="relative group">
                    {/* Step marker */}
                    <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-[#0a051d] border-2 border-amber-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-900/30 hover:border-amber-500/40 transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-display font-bold text-xs text-white">
                          {step.era}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded border font-semibold tracking-wider ${step.color}">
                          {step.year}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-snug">{step.event}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom cover preview */}
              <div className="mt-6 pt-6 border-t border-purple-900/40 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/games/linea-de-tiempo.png"
                  alt="Línea de Tiempo Arte"
                  className="w-14 h-14 rounded-xl object-cover border border-amber-500/40"
                />
                <div>
                  <div className="text-xs font-bold text-white">Diseño Visual Original</div>
                  <div className="text-[11px] text-slate-400">Mazo ilustrado exclusivo de Mentrix Estudios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
