import React from "react";
import { STUDIO_INFO } from "@/config/games";
import { Code, Heart, Sparkles, Shield, Cpu, ExternalLink } from "lucide-react";

export default function StudioAbout() {
  return (
    <section id="estudio" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#0a051e] border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-700/40 text-purple-300 text-xs font-semibold mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nuestra Visión</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-6">
              Crear juegos que <span className="text-gradient-purple">despierten la mente</span> y perduren
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              <strong>{STUDIO_INFO.name}</strong> nació con una convicción clara: los videojuegos móviles pueden ser profundamente entretenidos sin perder su valor intelectual y formativo.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Desde La Serena, Chile, diseñamos y programamos mecánicas de deducción, trivias y acertijos donde el jugador es el verdadero protagonista. Nos apasiona la historia, la cultura, la ciencia y la tecnología, plasmándolas en juegos dinámicos, accesibles y con mecánicas pensadas al detalle.
            </p>

            {/* Core Values */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-purple-900/30 text-purple-400 border border-purple-700/40 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Desarrollo Propio e Independiente</h4>
                  <p className="text-xs text-slate-400">
                    Control total sobre el diseño, el arte, la base de datos de preguntas y la experiencia de usuario.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-purple-900/30 text-cyan-400 border border-purple-700/40 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Privacidad & Experiencia Limpia</h4>
                  <p className="text-xs text-slate-400">
                    Juegos que respetan al usuario, con modos locales offline y sin barreras abusivas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Card & Ecosystem Link */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-br from-[#150b33] to-[#0d0724] border border-purple-600/30 p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-purple-900/40">
                <div className="w-14 h-14 rounded-2xl bg-[#090518] border border-purple-500/40 flex items-center justify-center p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mentrix-mascot.webp" alt="Mascota" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Mentrix Estudios</h3>
                  <p className="text-xs text-purple-300">Desarrollo de Software & Entretenimiento Inteligente</p>
                </div>
              </div>

              {/* Creator details */}
              <div className="space-y-3 mb-8 text-sm text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-purple-950">
                  <span className="text-slate-400">Estudio Creador:</span>
                  <span className="font-semibold text-white">{STUDIO_INFO.founder}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-purple-950">
                  <span className="text-slate-400">Ubicación:</span>
                  <span className="font-semibold text-white">{STUDIO_INFO.location}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-purple-950">
                  <span className="text-slate-400">Títulos Activos:</span>
                  <span className="font-semibold text-white">3 Proyectos en Desarrollo</span>
                </div>
              </div>

              {/* ENLACE Agency connection banner */}
              <div className="rounded-2xl bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-slate-900/40 border border-blue-600/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400 mb-1 flex items-center gap-1.5">
                    <span>Ecosistema de Soluciones</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-sm">
                    Parte de la red tecnológica ENLACE
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Respaldado por la arquitectura y desarrollo de ENLACE Soluciones Digitales.
                  </p>
                </div>

                <a
                  href={STUDIO_INFO.agencyPartner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-semibold transition-all"
                >
                  <span>Visitar Agencia</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
