"use client";

import React, { useState } from "react";
import { Brain, Sparkles, Users, Flame, Trophy, HelpCircle, CheckCircle2, Download, RefreshCw, MessageSquare, ArrowRight, Eye, ShieldAlert } from "lucide-react";

interface MysteryCharacter {
  name: string;
  category: string;
  avatar: string;
  clues: string[];
  solvedText: string;
}

const MYSTERY_CHARACTERS: MysteryCharacter[] = [
  {
    name: "Albert Einstein",
    category: "Ciencia & Física",
    avatar: "🧪",
    clues: [
      "1. Físico teórico nacido en Alemania en 1879.",
      "2. Formuló la teoría de la relatividad y la ecuación E = mc².",
      "3. Ganó el Premio Nobel de Física en 1921 por el efecto fotoeléctrico.",
    ],
    solvedText: "¡Exacto! El genio que transformó nuestra comprensión del universo.",
  },
  {
    name: "Leonardo da Vinci",
    category: "Arte, Invención & Historia",
    avatar: "🎨",
    clues: [
      "1. Polímata florentino del Renacimiento italiano.",
      "2. Pintó obras universales como La Gioconda y La Última Cena.",
      "3. Diseñó prototipos visionarios de helicópteros, tanques y paracaídas.",
    ],
    solvedText: "¡Brillante deducción! Uno de los mayores inventores de la historia.",
  },
  {
    name: "Juana de Arco",
    category: "Historia Universal & Liderazgo",
    avatar: "⚔️",
    clues: [
      "1. Joven campesina francesa que lideró tropas en la Guerra de los Cien Años.",
      "2. Afirmaba recibir visiones del arcángel San Miguel.",
      "3. Heroína nacional de Francia apodada la 'Doncella de Orleans'.",
    ],
    solvedText: "¡Correcto! Una de las líderes más legendarias y valientes.",
  },
];

const MENTI_ORIGINAL_DIALOGUES = [
  "¿Crees que puedes vencerme? Inténtalo. Tengo 210 personajes esperando. 😏",
  "Mi cerebro nunca duerme... ¿El tuyo ya empezó a razonar? 🧠",
  "Cada pista que pidas demuestra que me necesitas. 💡",
  "Aquí no hay trampa ni cartón: solo tu mente, tus deducciones y yo. 😈",
  "¡Modo Fiesta activado! Pásale el teléfono a tu amigo a ver si sabe más que tú. 🎉",
  "3 vidas en Supervivencia... ¿o te vas a rendir en la primera ronda? 💀",
];

export default function MqemSpotlight() {
  const [dialogueIdx, setDialogueIdx] = useState(0);
  const [bouncing, setBouncing] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const [cluesRevealed, setCluesRevealed] = useState(1);
  const [isRevealed, setIsRevealed] = useState(false);

  const currentChar = MYSTERY_CHARACTERS[charIdx];

  const handleMascotClick = () => {
    setBouncing(true);
    setDialogueIdx((prev) => (prev + 1) % MENTI_ORIGINAL_DIALOGUES.length);
    setTimeout(() => setBouncing(false), 500);
  };

  const handleNextClue = () => {
    if (cluesRevealed < currentChar.clues.length) {
      setCluesRevealed((prev) => prev + 1);
    } else {
      setIsRevealed(true);
    }
  };

  const handleNextChar = () => {
    setCharIdx((prev) => (prev + 1) % MYSTERY_CHARACTERS.length);
    setCluesRevealed(1);
    setIsRevealed(false);
  };

  return (
    <section id="mqem" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#070414] border-t border-purple-900/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Game Information & Mechanics */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/50 text-purple-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span>Disponible Ahora · 100% Gratuito en Android</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
              Mentrix: <span className="text-gradient-purple">¿Quién está en mi mente?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              El juego de mesa de deducción mental llevado al móvil. Hay <strong>más de 210 personajes históricos, científicos, bíblicos y de ficción</strong> ocultos en la mente de Menti. Haz preguntas clave, descarta sospechosos con lógica y adivina la identidad secreta antes de quedarte sin vidas o tiempo.
            </p>

            {/* 4 Mechanics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-purple-400 font-bold text-sm mb-1.5">
                  <Brain className="w-4 h-4" />
                  <span>210+ Personajes & Pistas</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Científicos, líderes mundiales, filósofos, artistas y personajes literarios con biografías verificadas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm mb-1.5">
                  <Users className="w-4 h-4" />
                  <span>Modo Fiesta & Multijugador</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pasa el teléfono en reuniones, compite por equipos o proyecta en pantalla para jugar en grupo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm mb-1.5">
                  <Flame className="w-4 h-4" />
                  <span>Supervivencia & Contrarreloj</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  3 vidas, pistas restringidas y rondas rápidas de 60 segundos para los estrategas más veloces.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm mb-1.5">
                  <Trophy className="w-4 h-4" />
                  <span>Editor de Personajes Propios</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Crea tus propios personajes personalizados para jugar con amigos y familiares con tus propias pistas.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.mentrix.quienestaenmente&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>Descargar en Google Play</span>
              </a>

              <a
                href="#descargas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-700/50 hover:border-cyan-400 text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <span>Centro de Descargas</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Mascot Simulator with Speech Bubble */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#160d38] via-[#100829] to-[#0a051d] border-2 border-purple-500/50 shadow-2xl shadow-purple-950/40">
              
              {/* Mascot Companion with Interactive Speech Bubble */}
              <div className="flex items-start gap-3 sm:gap-4 pb-5 mb-5 border-b border-purple-900/40">
                {/* Clickable Mascot */}
                <button
                  onClick={handleMascotClick}
                  title="¡Haz clic en Menti para hablar con él!"
                  className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 cursor-pointer group transition-transform ${
                    bouncing ? "scale-110 -translate-y-2" : "hover:scale-105"
                  }`}
                >
                  <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-xl group-hover:bg-cyan-500/40 transition-colors" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/mascota-menti-original.png"
                    alt="Menti Original"
                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_8px_16px_rgba(168,85,247,0.5)]"
                  />
                  <span className="absolute -bottom-1 -right-1 z-20 p-1 rounded-full bg-purple-600 text-white text-[10px] shadow-sm animate-pulse">
                    💬
                  </span>
                </button>

                {/* Interactive Speech Bubble */}
                <div
                  onClick={handleMascotClick}
                  className="relative flex-1 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-purple-950/90 to-[#0e0724] border border-purple-500/40 shadow-lg cursor-pointer hover:border-cyan-400 transition-all group"
                >
                  {/* Triangle pointer pointing to Menti */}
                  <div className="absolute -left-2 top-6 w-3 h-3 bg-purple-950 border-l border-b border-purple-500/40 transform rotate-45 pointer-events-none" />

                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-bold text-xs text-purple-300 flex items-center gap-1.5">
                      <span>Menti te desafía</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                      <RefreshCw className="w-2.5 h-2.5" />
                      Tocar
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-white font-medium italic leading-snug">
                    "{MENTI_ORIGINAL_DIALOGUES[dialogueIdx]}"
                  </p>
                </div>
              </div>

              {/* Interactive Mini Mystery Clues Game */}
              <div className="rounded-2xl p-4 sm:p-5 bg-[#0e0724]/90 border border-purple-800/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{currentChar.avatar}</span>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">
                        ¿Quién está en mi mente?
                      </h4>
                      <p className="text-[11px] text-purple-300">{currentChar.category}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleNextChar}
                    className="p-1.5 rounded-lg bg-purple-900/40 hover:bg-purple-800/60 text-slate-300 hover:text-white border border-purple-700/40 text-xs transition-colors flex items-center gap-1"
                    title="Cambiar personaje de prueba"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Siguiente</span>
                  </button>
                </div>

                {/* Clues List */}
                <div className="space-y-2 mb-4">
                  {currentChar.clues.map((clue, idx) => {
                    const isVisible = idx < cluesRevealed || isRevealed;
                    return (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-xl text-xs transition-all ${
                          isVisible
                            ? "bg-purple-950/60 border border-purple-500/30 text-slate-200"
                            : "bg-purple-950/20 border border-dashed border-purple-900/40 text-slate-400 blur-[2px] select-none"
                        }`}
                      >
                        {isVisible ? clue : `Pista bloqueada #${idx + 1}...`}
                      </div>
                    );
                  })}
                </div>

                {/* Reveal Box or Clue Actions */}
                {isRevealed ? (
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-900/60 to-cyan-950/60 border border-cyan-500/40 text-center animate-fade-in">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-300 block mb-0.5">
                      Identidad Revelada
                    </span>
                    <h5 className="font-display font-extrabold text-lg text-white">
                      {currentChar.name}
                    </h5>
                    <p className="text-xs text-purple-200 mt-0.5">
                      {currentChar.solvedText}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleNextClue}
                      className="flex-1 py-2 px-3 rounded-xl bg-purple-600/80 hover:bg-purple-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-900/40"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>
                        {cluesRevealed < currentChar.clues.length
                          ? `Desbloquear Pista ${cluesRevealed + 1}`
                          : "Revelar Quién Soy"}
                      </span>
                    </button>

                    <button
                      onClick={() => setIsRevealed(true)}
                      className="py-2 px-3 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-700/50 text-slate-200 hover:text-white font-semibold text-xs transition-colors flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Adivinar</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Footer Info */}
              <div className="mt-4 pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  210 identidades secretas
                </span>
                <span className="text-[11px] text-purple-300 font-semibold">
                  Juego Offline · Sin Internet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
