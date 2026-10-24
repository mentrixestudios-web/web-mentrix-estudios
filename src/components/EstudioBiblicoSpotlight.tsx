"use client";

import React, { useState } from "react";
import { BookOpen, Sparkles, Heart, Shield, Award, CheckCircle2, Download, RefreshCw, Sun, Compass, ExternalLink } from "lucide-react";

interface BiblicalQuestion {
  category: string;
  question: string;
  options: string[];
  correctIdx: number;
  verseRef: string;
  explanation: string;
}

const BIBLICAL_QUESTIONS: BiblicalQuestion[] = [
  {
    category: "Héroes de la Fe",
    question: "¿Quién guió al pueblo de Israel a través del Mar Rojo hacia la libertad?",
    options: ["El Rey David", "Moisés", "Abraham", "El Sabio Salomón"],
    correctIdx: 1,
    verseRef: "Éxodo 14:21-22",
    explanation: "Moisés extendió su vara sobre el mar y Dios dividió las aguas para que Israel cruzara en seco.",
  },
  {
    category: "Milagros & Señales",
    question: "¿Dónde realizó Jesús su primer milagro transformando el agua en vino?",
    options: ["En el Templo de Jerusalén", "En las Bodas de Caná", "A orillas del Mar de Galilea", "En Nazaret"],
    correctIdx: 1,
    verseRef: "Juan 2:1-11",
    explanation: "Fue en Caná de Galilea donde Jesús manifestó su gloria ante sus discípulos y su madre María.",
  },
  {
    category: "Mujeres de Valor",
    question: "¿Qué reina arriesgó su vida diciendo 'si perezco, que perezca' para salvar a su pueblo?",
    options: ["Rut", "Débora", "La Reina Ester", "Sara"],
    correctIdx: 2,
    verseRef: "Ester 4:16",
    explanation: "Ester ayunó junto a su pueblo y se presentó ante el rey Asuero sin ser convocada para salvar a los judíos.",
  },
];

const MENTI_BIBLIA_DIALOGUES = [
  "¡La paz sea contigo! La sabiduría de las Escrituras ilumina cada paso de tu camino. ✨",
  "«Lámpara es a mis pies tu palabra, y lumbrera a mi camino.» (Salmos 119:105) 📖",
  "Pon a prueba tu conocimiento y descubre la valentía de los Héroes de la Fe. 🕊️",
  "«El amor es paciente, es bondadoso... el amor nunca deja de ser.» (1 Corintios 13:4-8) 💛",
  "12 categorías y cientos de versículos para ejercitar tu mente y alimentar tu espíritu. 🌿",
  "¿Listo para la lectura diaria? El Camino del Discípulo te espera con nuevas historias. 🌟",
];

export default function EstudioBiblicoSpotlight() {
  const [dialogueIdx, setDialogueIdx] = useState(0);
  const [bouncing, setBouncing] = useState(false);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQ = BIBLICAL_QUESTIONS[questionIdx];

  const handleMascotClick = () => {
    setBouncing(true);
    setDialogueIdx((prev) => (prev + 1) % MENTI_BIBLIA_DIALOGUES.length);
    setTimeout(() => setBouncing(false), 500);
  };

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
  };

  const handleNextQuestion = () => {
    setQuestionIdx((prev) => (prev + 1) % BIBLICAL_QUESTIONS.length);
    setSelectedOption(null);
  };

  return (
    <section id="estudio-biblico" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#07051a] border-t border-purple-900/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Game Information */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Disponible en Android · 12 Categorías Bíblicas</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
              Mentrix: <span className="text-gradient-purple">Estudio Bíblico</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Aprende, memoriza y profundiza en las Sagradas Escrituras jugando. Una experiencia didáctica y espiritual para toda la familia, jóvenes y congregaciones, con <strong>12 categorías temáticas</strong>, devocionales interactivos y el plan <em>Biblia en un Año</em>.
            </p>

            {/* 4 Mechanics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm mb-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>12 Categorías Bíblicas</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Reyes, Héroes de la Fe, Apóstoles, Mujeres de Valor, Profetas, Parábolas, Milagros y Tierra Santa.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-purple-400 font-bold text-sm mb-1.5">
                  <Sun className="w-4 h-4" />
                  <span>Modo Estudio & Devocionales</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Preguntas con respaldo de citas y referencias verificadas de la Reina-Valera y contexto histórico.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm mb-1.5">
                  <Compass className="w-4 h-4" />
                  <span>El Camino del Discípulo</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Aventura de progresión bíblica por eras desde el Génesis hasta el Apocalipsis con retos semanales.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-900/40">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm mb-1.5">
                  <Award className="w-4 h-4" />
                  <span>Duelos Bíblicos & Racha Diaria</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Compite con amigos de la iglesia, forja hábitos diarios de lectura y gana coronas de sabiduría.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.mentrix.biblia&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>Descargar en Google Play</span>
              </a>

              <a
                href="#descargas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-700/50 hover:border-cyan-400 text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Zona de Descargas</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Mascot Simulator with Speech Bubble */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#140e36] via-[#0e0828] to-[#09041a] border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/40">
              
              {/* Mascot Companion with Interactive Speech Bubble */}
              <div className="flex items-start gap-3 sm:gap-4 pb-5 mb-5 border-b border-purple-900/40">
                {/* Clickable Mascot */}
                <button
                  onClick={handleMascotClick}
                  title="¡Haz clic en Menti Biblia para recibir sabiduría!"
                  className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 cursor-pointer group transition-transform ${
                    bouncing ? "scale-110 -translate-y-2" : "hover:scale-105"
                  }`}
                >
                  <div className="absolute inset-0 bg-cyan-600/30 rounded-full blur-xl group-hover:bg-amber-400/40 transition-colors" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/mascota-menti-biblia.png"
                    alt="Menti Biblia"
                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_8px_16px_rgba(6,182,212,0.5)]"
                  />
                  <span className="absolute -bottom-1 -right-1 z-20 p-1 rounded-full bg-cyan-600 text-white text-[10px] shadow-sm animate-pulse">
                    ✨
                  </span>
                </button>

                {/* Interactive Speech Bubble */}
                <div
                  onClick={handleMascotClick}
                  className="relative flex-1 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-cyan-950/80 to-[#0e0724] border border-cyan-500/40 shadow-lg cursor-pointer hover:border-amber-400 transition-all group"
                >
                  {/* Triangle pointer */}
                  <div className="absolute -left-2 top-6 w-3 h-3 bg-cyan-950 border-l border-b border-cyan-500/40 transform rotate-45 pointer-events-none" />

                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-bold text-xs text-cyan-300 flex items-center gap-1.5">
                      <span>Menti Biblia te acompaña</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                      <RefreshCw className="w-2.5 h-2.5" />
                      Tocar
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-white font-medium italic leading-snug">
                    "{MENTI_BIBLIA_DIALOGUES[dialogueIdx]}"
                  </p>
                </div>
              </div>

              {/* Interactive Biblical Challenge Widget */}
              <div className="rounded-2xl p-4 sm:p-5 bg-[#0a051d]/90 border border-cyan-800/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📜</span>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">
                        Desafío Bíblico Interactivo
                      </h4>
                      <p className="text-[11px] text-cyan-300">{currentQ.category}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleNextQuestion}
                    className="p-1.5 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/60 text-slate-300 hover:text-white border border-cyan-700/40 text-xs transition-colors flex items-center gap-1"
                    title="Ver otra pregunta bíblica"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Otra</span>
                  </button>
                </div>

                {/* Question */}
                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-xs sm:text-sm text-white font-medium mb-3">
                  {currentQ.question}
                </div>

                {/* Options List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQ.correctIdx;
                    let btnStyle = "bg-purple-950/40 border-purple-800/40 text-slate-300 hover:border-cyan-400/60 hover:text-white";

                    if (selectedOption !== null) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-950/80 border-emerald-400 text-emerald-200 shadow-md shadow-emerald-950/50";
                      } else if (isSelected) {
                        btnStyle = "bg-red-950/80 border-red-500 text-red-200";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={selectedOption !== null}
                        className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation feedback */}
                {selectedOption !== null && (
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/80 to-purple-950/80 border border-cyan-500/50 text-xs leading-relaxed animate-fade-in">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-cyan-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {currentQ.verseRef}
                      </span>
                      <span className="text-[10px] text-amber-300 font-semibold">
                        Cita Verificada
                      </span>
                    </div>
                    <p className="text-slate-200">{currentQ.explanation}</p>
                  </div>
                )}
              </div>

              {/* Bottom Footer Info */}
              <div className="mt-4 pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  12 categorías & 500+ preguntas
                </span>
                <span className="text-[11px] text-cyan-300 font-semibold">
                  Plan Biblia en un Año
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
