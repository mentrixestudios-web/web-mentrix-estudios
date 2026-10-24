import React from "react";
import { STUDIO_INFO } from "@/config/games";
import { Mail, MapPin } from "lucide-react";

export default function MentrixFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="bg-[#05020f] border-t border-purple-950 text-slate-400 pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0c0822] rounded-[10px] flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-mentrix-emblema.png"
                    alt="Mentrix Estudios"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="font-display font-extrabold text-xl text-white tracking-wider">
                MENTRIX <span className="text-purple-400 text-sm font-semibold">ESTUDIOS</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-purple-300/90 italic">
              "Juega pensando. Piensa jugando."
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {STUDIO_INFO.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>{STUDIO_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links: Juegos */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Nuestros Juegos
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#mqem" className="hover:text-purple-400 transition-colors">
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
                <a href="#descargas" className="text-purple-300 hover:text-white font-semibold transition-colors flex items-center gap-1">
                  <span>⚡ Descargas Google Play</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Estudio */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Estudio
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#estudio" className="hover:text-purple-400 transition-colors">
                  Sobre Mentrix
                </a>
              </li>
              <li>
                <a href="#mascotas" className="hover:text-purple-400 transition-colors">
                  Mascotas Menti
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_INFO.agencyPartner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  ENLACE Soluciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Support */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Contacto & Comunidad
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${STUDIO_INFO.contactEmail}`}
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <span>{STUDIO_INFO.contactEmail}</span>
                </a>
              </li>
              <li className="text-slate-400 text-xs">
                Soporte a jugadores y sugerencias de personajes
              </li>
            </ul>
          </div>
        </div>

        {/* Firma Oficial Agencia Red-Enlace (1:1 con estándar Bajo Deslinde) */}
        <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-xs text-white/80 md:flex-row md:items-center md:justify-between">
          <div>© {year} {STUDIO_INFO.name}. Todos los derechos reservados.</div>
          <a
            href="https://redenlace.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/red-enlace-logo.png"
              alt="Logo Red-Enlace"
              width={20}
              height={20}
              className="h-4 w-auto opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
            />
            <span>Desarrollado por Red-Enlace Soluciones Digitales</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
