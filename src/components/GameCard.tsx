import React from "react";
import Image from "next/image";
import { GameItem } from "@/types/game";
import {
  Download,
  Smartphone,
  Globe,
  Monitor,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface GameCardProps {
  game: GameItem;
}

export default function GameCard({ game }: GameCardProps) {
  const isAvailable = game.status === "available";

  const badgeStyles = {
    purple: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    amber: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  }[game.badgeAccent || "purple"];

  return (
    <div
      id={game.slug}
      className={`relative rounded-3xl bg-gradient-to-b from-[#120a2e] to-[#0a051d] border transition-all duration-300 flex flex-col overflow-hidden group ${
        game.highlight
          ? "border-purple-600/40 hover:border-purple-500/70 shadow-xl shadow-purple-950/30 hover:shadow-purple-900/50"
          : "border-purple-900/30 hover:border-purple-700/50 shadow-lg shadow-black/40"
      }`}
    >
      {/* Top Banner / Cover */}
      <div className="relative h-56 sm:h-64 w-full bg-[#080417] overflow-hidden flex items-center justify-center p-6 border-b border-purple-900/30">
        {/* Glow behind cover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120a2e] to-transparent z-10" />
        
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={game.coverImage}
          alt={game.title}
          className="max-h-full max-w-full object-contain relative z-0 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges on top of cover */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-md uppercase tracking-wider ${badgeStyles}`}
          >
            {game.statusBadge}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
            {game.category}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2 group-hover:text-purple-300 transition-colors">
            {game.title}
          </h3>

          {/* Tagline */}
          <p className="text-purple-300/90 text-sm font-medium mb-4 italic">
            "{game.tagline}"
          </p>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {game.description}
          </p>

          {/* Quick Stats Grid */}
          {game.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3 rounded-2xl bg-purple-950/30 border border-purple-900/40 text-center">
              {game.stats.map((stat) => (
                <div key={stat.label} className="p-1">
                  <div className="font-display font-extrabold text-base sm:text-lg text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Features List */}
          <div className="mb-6 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
              Características Principales:
            </h4>
            {game.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer of the Card: Platforms & Actions */}
        <div className="pt-6 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
          {/* Platforms */}
          <div className="flex items-center gap-2 text-slate-400 text-xs w-full sm:w-auto">
            <span className="font-medium">Plataforma:</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              {game.platforms.includes("android") && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800/40">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Android</span>
                </span>
              )}
              {game.platforms.includes("web") && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800/40">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Web</span>
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="w-full sm:w-auto flex items-center gap-2">
            {isAvailable ? (
              <a
                href={game.downloads?.apkUrl || game.downloads?.playStoreUrl || "#"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-purple-900/40 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Juego</span>
              </a>
            ) : (
              <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold text-xs sm:text-sm cursor-default">
                <Clock className="w-4 h-4 text-amber-400 animate-spin" />
                <span>En Desarrollo Activo</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
