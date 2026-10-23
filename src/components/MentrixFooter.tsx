import React from "react";
import Link from "next/link";
import { STUDIO_INFO } from "@/config/games";
import { Heart, Sparkles, Mail, MapPin } from "lucide-react";

export default function MentrixFooter() {
  return (
    <footer id="contacto" className="bg-[#05020f] border-t border-purple-950 text-slate-400 py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-950/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0c0822] rounded-[10px] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mentrix-mascot.webp" alt="Mentrix Mascot" className="w-8 h-8 object-contain" />
                </div>
              </div>
              <div className="font-display font-extrabold text-xl text-white tracking-wider">
                MENTRIX <span className="text-purple-400 text-sm font-semibold">ESTUDIOS</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {STUDIO_INFO.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
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
                <a href="#hero" className="hover:text-purple-400 transition-colors">
                  Mascota Menti
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {STUDIO_INFO.name}. Desarrollado por {STUDIO_INFO.founder}.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Diseñado con pasión por los videojuegos y el conocimiento</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
