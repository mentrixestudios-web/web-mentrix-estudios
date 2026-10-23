import React from "react";
import Link from "next/link";
import { STUDIO_INFO } from "@/config/games";
import { Download, MessageCircle, MapPin, ExternalLink, Sparkles } from "lucide-react";

export default function MentrixFooter() {
  return (
    <>
      {/* 1. BANNER FINAL CTA (Homologado Arquitectura Maestra ENLACE) */}
      <section
        id="cta-final"
        className="py-20 relative overflow-hidden bg-gradient-to-b from-[#09041a] via-[#0d0726] to-[#05020f] border-t border-purple-900/40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ecosistema Mentrix Estudios · Powered by ENLACE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-6 leading-tight">
            ¿Listo para poner a prueba tu mente?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
            Descarga hoy mismo <strong className="text-white font-semibold">Mentrix: ¿Quién está en mi mente?</strong> de forma 100% gratuita o ponte en contacto con nosotros para conocer los próximos estrenos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#mqem"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-base shadow-[0_12px_35px_rgba(6,182,212,0.35)] transition-all transform hover:-translate-y-0.5 text-center"
            >
              <Download className="w-5 h-5" />
              <span>Descargar Mentrix Mind Game</span>
            </a>

            <a
              href="https://wa.me/56941278725"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-[0_10px_25px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-0.5 text-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Directo (+56 9 4127 8725)</span>
            </a>
          </div>

          <p className="text-xs text-slate-400">
            Juegos optimizados para Android con funcionamiento 100% local sin conexión obligatoria.
          </p>
        </div>
      </section>

      {/* 2. FOOTER OFICIAL (4 Columnas + Barra Inferior Homologada ENLACE) */}
      <footer
        id="contacto"
        className="w-full bg-[#05020f] border-t border-[hsl(220,55%,26%)] pt-14 pb-8 px-6 text-slate-300 font-sans box-border"
      >
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Grid de 4 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Columna 1: Marca y descripción */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3 no-underline group">
                <div className="w-12 h-12 rounded-xl bg-[#090518] border border-cyan-500/40 p-1 flex items-center justify-center overflow-hidden shadow-lg shadow-cyan-500/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-mentrix-oficial.jpg"
                    alt="Mentrix Estudios"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="font-display font-black text-xl text-white tracking-wider leading-none">
                    MENTRIX
                  </div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mt-0.5">
                    ESTUDIOS
                  </div>
                </div>
              </Link>

              <p className="text-xs font-semibold text-cyan-300 mt-3 italic">
                "Juega pensando. Piensa jugando."
              </p>

              <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-xs">
                Estudio independiente de desarrollo de videojuegos, retos de deducción y plataformas interactivas en Chile.
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 mt-3">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>La Serena · Coquimbo · Chile</span>
              </div>
            </div>

            {/* Columna 2: Juegos & Apps */}
            <div>
              <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
                Nuestros Juegos
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm list-none p-0 m-0">
                <li>
                  <a href="#mqem" className="hover:text-cyan-400 transition-colors">
                    ¿Quién está en mi mente?
                  </a>
                </li>
                <li>
                  <a href="#linea-de-tiempo" className="hover:text-amber-400 transition-colors">
                    Mentrix: Línea de Tiempo
                  </a>
                </li>
                <li>
                  <a href="#estudio-biblico" className="hover:text-cyan-400 transition-colors">
                    Mentrix: Estudio Bíblico
                  </a>
                </li>
                <li>
                  <a href="#juegos" className="hover:text-purple-400 transition-colors">
                    Catálogo Completo
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: El Universo Menti */}
            <div>
              <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
                El Universo Menti
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm list-none p-0 m-0">
                <li>
                  <a href="#mascotas" className="hover:text-purple-400 transition-colors">
                    Menti Pregunta (MQEM)
                  </a>
                </li>
                <li>
                  <a href="#mascotas" className="hover:text-amber-400 transition-colors">
                    Menti Tiempo (Cronos)
                  </a>
                </li>
                <li>
                  <a href="#mascotas" className="hover:text-cyan-400 transition-colors">
                    Menti Biblia (Escrituras)
                  </a>
                </li>
                <li>
                  <a href="#estudio" className="hover:text-slate-200 transition-colors">
                    Sobre el Estudio
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto y Ecosistema ENLACE */}
            <div>
              <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
                Contacto y Ecosistema
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm list-none p-0 m-0">
                <li>
                  <a
                    href="https://wa.me/56941278725"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>WhatsApp: +56 9 4127 8725</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@redenlace.cl"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    info@redenlace.cl
                  </a>
                </li>
                <li>
                  <a
                    href="https://redenlace.cl/red-social"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Red Social ENLACE
                  </a>
                </li>
                <li>
                  <a
                    href="https://redenlace.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors font-semibold flex items-center gap-1"
                  >
                    <span>Agencia ENLACE (Inicio)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Barra inferior común homologada ENLACE */}
          <div className="mt-12 pt-6 border-t border-[hsl(220,55%,26%)] flex flex-wrap justify-between items-center gap-4 text-xs text-slate-400">
            <p className="m-0">
              © 2026 Mentrix Estudios · Una iniciativa del ecosistema ENLACE Soluciones Digitales · Bajo Deslinde SPA
            </p>
            <div className="flex items-center gap-4">
              <span className="text-slate-400">Ecosistema ENLACE</span>
              <a
                href="https://redenlace.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(209,96%,56%)] hover:underline font-semibold"
              >
                redenlace.cl
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
