"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Gamepad2, Sparkles, Menu, X, Rocket, Download } from "lucide-react";

export default function MentrixNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "Juegos", href: "#juegos" },
    { label: "Descargas", href: "#descargas" },
    { label: "¿Quién en mi mente?", href: "#mqem" },
    { label: "Línea de Tiempo", href: "#linea-de-tiempo" },
    { label: "Estudio Bíblico", href: "#estudio-biblico" },
    { label: "Mascotas", href: "#mascotas" },
    { label: "El Estudio", href: "#estudio" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070412]/85 backdrop-blur-xl border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
            <div className="w-full h-full bg-[#0a0618] rounded-[10px] flex items-center justify-center overflow-hidden">
              <Image
                src="/logo-mentrix-emblema.png"
                alt="Logo Mentrix Estudios"
                width={44}
                height={44}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-display font-extrabold text-xl tracking-wider text-white flex items-center gap-1.5 leading-none">
              <span>MENTRIX</span>
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-widest">
                Estudios
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide mt-0.5">
              Juega pensando. Piensa jugando.
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-5 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#descargas"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-cyan-200" />
            <span>Descargar en Google Play</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-purple-950/40 border border-purple-800/40 text-slate-300 hover:text-white"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a061c]/95 border-b border-purple-900/40 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-purple-400 text-base font-medium py-2 border-b border-purple-950/60"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#descargas"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30"
            >
              <Download className="w-4 h-4" />
              <span>Descargar en Google Play</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
