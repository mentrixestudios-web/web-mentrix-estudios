"use client";

import React, { useState } from "react";
import { MENTRIX_GAMES } from "@/config/games";
import GameCard from "./GameCard";
import { Gamepad2, Sparkles, PlusCircle } from "lucide-react";

export default function GamesGrid() {
  const [filter, setFilter] = useState<"all" | "available" | "coming_soon">("all");

  const filteredGames = MENTRIX_GAMES.filter((game) => {
    if (filter === "available") return game.status === "available";
    if (filter === "coming_soon") return game.status === "in_development" || game.status === "coming_soon";
    return true;
  });

  return (
    <section id="juegos" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#0a051d]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-700/40 text-purple-300 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Catálogo Oficial de Juegos</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Nuestros <span className="text-gradient-purple">Títulos y Experiencias</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Cada título de Mentrix Estudios está pensado para poner a prueba tu agilidad mental, memoria y conocimientos en formatos dinámicos y divertidos.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "all"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40"
              }`}
            >
              Todos los Títulos ({MENTRIX_GAMES.length})
            </button>

            <button
              onClick={() => setFilter("available")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "available"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40"
              }`}
            >
              Disponibles Ahora
            </button>

            <button
              onClick={() => setFilter("coming_soon")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "coming_soon"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40"
              }`}
            >
              Próximos Lanzamientos
            </button>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}

          {/* Card: Próximo juego en incubadora */}
          <div className="rounded-3xl border-2 border-dashed border-purple-800/40 bg-purple-950/10 p-8 flex flex-col items-center justify-center text-center hover:border-purple-600/60 transition-colors group min-h-[420px]">
            <div className="w-16 h-16 rounded-2xl bg-purple-900/30 border border-purple-700/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PlusCircle className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
              En Incubadora
            </span>

            <h3 className="font-display font-bold text-2xl text-white mb-3">
              Nuevos Títulos en Camino
            </h3>

            <p className="text-slate-400 text-sm max-w-xs leading-relaxed mb-6">
              El estudio está diseñando nuevos juegos de lógica, velocidad y enigmas que se sumarán a este catálogo.
            </p>

            <a
              href="#contacto"
              className="text-xs font-semibold text-purple-300 hover:text-white underline underline-offset-4"
            >
              ¿Tienes una sugerencia o idea de juego?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
