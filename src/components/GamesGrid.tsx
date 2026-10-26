"use client";

import React, { useState } from "react";
import { MENTRIX_GAMES, STUDIO_INFO } from "@/config/games";
import GameCard from "./GameCard";
import {
  Gamepad2,
  Sparkles,
  Lightbulb,
  Send,
  Rocket,
  CheckCircle2,
  X,
  MessageSquarePlus,
  Mail,
} from "lucide-react";

export default function GamesGrid() {
  const [filter, setFilter] = useState<"all" | "available" | "coming_soon">("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Nuevas Categorías de Personajes");
  const [ideaText, setIdeaText] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderContact, setSenderContact] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const filteredGames = MENTRIX_GAMES.filter((game) => {
    if (filter === "available") return game.status === "available";
    if (filter === "coming_soon") return game.status === "in_development" || game.status === "coming_soon";
    return true;
  });

  const handleOpenIdeaModal = (topic?: string) => {
    setSelectedTopic(topic || "Nuevas Categorías de Personajes");
    setIdeaText("");
    setSubmitted(false);
    setSendError("");
    setIsModalOpen(true);
  };

  const handleSubmitIdea = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaText.trim() || isSending) return;

    setIsSending(true);
    setSendError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a8f8548d-112c-4061-a70d-fb45d8dbcca7",
          subject: `[Nueva Propuesta Mentrix] ${selectedTopic}`,
          from_name: senderName || "Jugador Mentrix",
          categoria: selectedTopic,
          mensaje: ideaText,
          nombre: senderName || "No especificado",
          contacto_o_email: senderContact || "No especificado",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setSendError(result.message || "No se pudo enviar la propuesta. Intenta de nuevo.");
      }
    } catch {
      setSendError("Error de conexión al enviar. Puedes enviarla por correo directo.");
    } finally {
      setIsSending(false);
    }
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[Sugerencia Mentrix] ${selectedTopic}: ${ideaText.slice(0, 40)}...`);
    const body = encodeURIComponent(
      `Hola equipo de Mentrix Estudios,\n\n` +
      `Tengo una propuesta para el catálogo de juegos:\n` +
      `Categoría: ${selectedTopic}\n` +
      `Propuesta: ${ideaText}\n\n` +
      `De: ${senderName || "Jugador de la comunidad"}\n` +
      `Contacto: ${senderContact || "N/A"}\n\n` +
      `¡Saludos!`
    );
    return `mailto:${STUDIO_INFO.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="juegos" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#0a051d]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/50 text-purple-300 text-xs sm:text-sm font-semibold mb-4 shadow-inner backdrop-blur-md">
            <Gamepad2 className="w-4 h-4 text-purple-400" />
            <span>Catálogo Oficial de Juegos</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Nuestros <span className="text-gradient-purple">Títulos y Experiencias</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Cada título de Mentrix Estudios está pensado para poner a prueba tu agilidad mental, memoria y conocimientos en formatos dinámicos y divertidos.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
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

        {/* Games Grid (Symmetrical and complete) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Banner Horizontal: Laboratorio de Ideas & Nuevos Títulos en Incubadora */}
        <div className="relative rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-950/80 via-[#12082c]/95 to-indigo-950/80 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-purple-950/40 backdrop-blur-xl overflow-hidden group transition-all hover:border-purple-500/50">
          {/* Ambient cosmic glows */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: Mascot & Pitch */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 flex-1">
              {/* Menti Detective Avatar */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-amber-500/20 via-purple-600/20 to-indigo-700/20 border border-amber-400/40 p-1 shadow-lg shadow-amber-500/10 flex items-center justify-center relative group-hover:scale-105 transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/mascota-menti-detective.png"
                    alt="Menti Detective - Incubadora Mentrix"
                    className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                  />
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-amber-400 text-[#0c0822] text-[10px] font-black uppercase tracking-wider shadow">
                    Lab
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-2.5 max-w-2xl">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    Incubadora de Títulos & Comunidad
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-900/40 border border-purple-700/40 text-purple-300 text-xs font-medium">
                    <Rocket className="w-3 h-3 text-purple-400" />
                    Nuevos lanzamientos en diseño
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  ¿Tienes una <span className="text-gradient-amber">idea o sugerencia</span> para nuestro próximo juego?
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  En Mentrix Estudios creamos videojuegos junto a nuestra comunidad. ¿Sueñas con una categoría especial de preguntas, un nuevo reto de lógica, una era para Línea de Tiempo o una nueva habilidad para Menti? ¡Queremos escucharte y diseñar juntos!
                </p>

                {/* Quick Idea Topics / Pills */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                  <span className="text-xs text-slate-400 font-semibold mr-1 hidden sm:inline">Temas de interés:</span>
                  {[
                    { label: "💡 Nuevas Categorías", topic: "Nuevas Categorías de Personajes" },
                    { label: "⏳ Hitos para Línea de Tiempo", topic: "Hitos para Línea de Tiempo" },
                    { label: "⚔️ Modos Competitivos 1v1", topic: "Modos Competitivos y Multijugador" },
                    { label: "🎭 Nuevos Trajes de Menti", topic: "Nuevos Trajes o Personalidad de Menti" },
                  ].map((chip) => (
                    <button
                      key={chip.label}
                      onClick={() => handleOpenIdeaModal(chip.topic)}
                      className="text-xs px-3 py-1 rounded-lg bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/50 hover:border-purple-600 text-purple-200 transition-colors cursor-pointer"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0 justify-center">
              <button
                onClick={() => handleOpenIdeaModal()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Lightbulb className="w-4 h-4 text-slate-950" />
                <span>Proponer una Idea</span>
              </button>

              <a
                href={`mailto:${STUDIO_INFO.contactEmail}?subject=Propuesta%20de%20Juego%20o%20Sugerencia%20para%20Mentrix%20Estudios`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-purple-950/60 hover:bg-purple-900/70 border border-purple-700/50 hover:border-purple-500 text-purple-200 hover:text-white font-semibold text-xs tracking-wide transition-all text-center"
              >
                <Send className="w-3.5 h-3.5 text-purple-400" />
                <span>Enviar por Correo Directo</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal: Buzón de Ideas & Sugerencias */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl border border-purple-500/40 bg-[#0d0724] p-6 sm:p-8 shadow-2xl shadow-purple-950/80 text-white overflow-hidden">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-amber-400 to-cyan-500" />

            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-purple-950/60 border border-purple-700/40 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              /* Success State */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <h3 className="font-display font-extrabold text-2xl text-white">
                  ¡Recibimos tu propuesta con éxito!
                </h3>

                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Muchas gracias por colaborar con la comunidad. El equipo de <strong className="text-purple-300">Mentrix Estudios</strong> evaluará tu propuesta y, si dejaste tus datos, nos pondremos en contacto contigo para profundizar en ella.
                </p>

                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 max-w-md mx-auto text-left text-xs text-slate-300 space-y-1.5">
                  <p><strong className="text-amber-400">Categoría:</strong> {selectedTopic}</p>
                  <p><strong className="text-purple-400">Tu Idea:</strong> {ideaText}</p>
                </div>

                <div className="flex items-center justify-center pt-3">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-md cursor-pointer"
                  >
                    Entendido, cerrar
                  </button>
                </div>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmitIdea} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <MessageSquarePlus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      Buzón Creativo de la Comunidad
                    </h3>
                    <p className="text-xs text-purple-300">
                      Envía tu sugerencia de juego directamente a los creadores
                    </p>
                  </div>
                </div>

                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    ¿Sobre qué trata tu sugerencia?
                  </label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="Nuevas Categorías de Personajes">💡 Nuevas Categorías de Personajes</option>
                    <option value="Hitos para Línea de Tiempo">⏳ Hitos o Eras para Línea de Tiempo</option>
                    <option value="Idea de Juego Completamente Nuevo">🚀 Idea de Juego Completamente Nuevo</option>
                    <option value="Modos Competitivos y Multijugador">⚔️ Modos Competitivos y Multijugador</option>
                    <option value="Nuevos Trajes o Personalidad de Menti">🎭 Nuevos Trajes de Menti</option>
                    <option value="Mejora de Jugabilidad o Interfaz">✨ Mejora de Jugabilidad o Interfaz</option>
                  </select>
                </div>

                {/* Idea text */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Cuéntanos tu idea en detalle <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={ideaText}
                    onChange={(e) => setIdeaText(e.target.value)}
                    placeholder="Ej: Me gustaría un modo donde compitamos en tiempo real adivinando científicos, o una categoría de mitología nórdica..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                {/* Optional sender info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Tu nombre o alias (opcional)
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Ej: Sofía o GamerPro"
                      className="w-full px-3 py-2 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Correo o red social (opcional)
                    </label>
                    <input
                      type="text"
                      value={senderContact}
                      onChange={(e) => setSenderContact(e.target.value)}
                      placeholder="Para responderte si tu idea avanza"
                      className="w-full px-3 py-2 rounded-xl bg-purple-950/60 border border-purple-800/60 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                {sendError && (
                  <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-600/40 text-xs text-rose-300">
                    {sendError}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                  >
                    <Send className={`w-3.5 h-3.5 ${isSending ? "animate-pulse" : ""}`} />
                    <span>{isSending ? "Enviando a Mentrix..." : "Enviar Propuesta al Estudio"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
