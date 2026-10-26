"use client";

import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Laptop,
  CheckCircle2,
  X,
  ExternalLink,
  Sparkles,
  WifiOff,
  Zap,
  BookOpen,
  Share2,
  PlusSquare,
  MoreVertical,
  Layers,
  ArrowRight,
} from "lucide-react";

interface PwaInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  appUrl?: string;
}

export default function PwaInstallModal({
  isOpen,
  onClose,
  appUrl = "https://mentrix-estudio-biblico.vercel.app",
}: PwaInstallModalProps) {
  const [activeTab, setActiveTab] = useState<"android" | "ios" | "pc">("android");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border border-cyan-500/40 bg-[#0d0724] p-5 sm:p-8 shadow-2xl shadow-cyan-950/80 text-white custom-scrollbar">
        {/* Top decorative gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-purple-950/60 border border-purple-700/40 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header: App Brand + PWA Badge */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
          <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-purple-600/30 to-indigo-900 border border-cyan-400/50 p-2 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mascota-menti-biblia.png"
              alt="Menti Biblia"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            />
            <div className="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow">
              PWA
            </div>
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Globe className="w-3 h-3 text-cyan-400" />
                Disponible en Web
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3 h-3 text-purple-400" />
                Instalación Directa
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Mentrix Biblia Interactiva
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Aprende la Biblia jugando, lee el plan anual, reflexiona cada día y desafía tu mente. ¡Ahora disponible directamente en tu navegador sin descargas pesadas!
            </p>
          </div>
        </div>

        {/* Big Action CTA Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-purple-950/60 to-indigo-950/60 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-0.5">
              Acceso Rápido y Gratuito
            </span>
            <p className="text-xs text-slate-300">
              Compatible con Android, iPhone, iPad, Windows y Mac.
            </p>
          </div>

          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shrink-0"
          >
            <span>Abrir / Instalar Aplicación</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Step by step installation tabs */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <span>¿Cómo instalar en tu dispositivo?</span>
            </h4>
            <span className="text-[11px] text-slate-400">100% Gratis · Sin Play Store</span>
          </div>

          {/* Platform Tabs Selector */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button
              onClick={() => setActiveTab("android")}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "android"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400/50"
                  : "bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Android</span>
            </button>

            <button
              onClick={() => setActiveTab("ios")}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "ios"
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 border border-cyan-400/50"
                  : "bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>iPhone / iOS</span>
            </button>

            <button
              onClick={() => setActiveTab("pc")}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "pc"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/50"
                  : "bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40"
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>PC / Mac</span>
            </button>
          </div>

          {/* Tab Content: Android */}
          {activeTab === "android" && (
            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-800/50 space-y-3 animate-fadeIn">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <p className="text-xs sm:text-sm text-slate-300">
                  Abre el enlace de la app en <strong>Google Chrome</strong> en tu celular.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <p className="text-xs sm:text-sm text-slate-300">
                  En el banner que aparece abajo presiona <strong>«Instalar aplicación»</strong> o toca el menú de opciones (<MoreVertical className="w-3.5 h-3.5 inline mx-0.5 text-slate-200" /> arriba a la derecha).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <p className="text-xs sm:text-sm text-slate-300">
                  Selecciona <strong>«Instalar aplicación»</strong> o <strong>«Agregar a la pantalla principal»</strong>.
                </p>
              </div>

              <div className="flex items-start gap-3 pt-1 border-t border-purple-900/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-300 font-semibold">
                  ¡Listo! Se agregará el icono de Menti Biblia en tu pantalla y se abrirá a pantalla completa como una app nativa.
                </p>
              </div>
            </div>
          )}

          {/* Tab Content: iOS (iPhone / iPad) */}
          {activeTab === "ios" && (
            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-800/50 space-y-3 animate-fadeIn">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <p className="text-xs sm:text-sm text-slate-300">
                  Abre la web en tu iPhone o iPad usando el navegador <strong>Safari</strong>.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1 flex-wrap">
                  Toca el botón <strong>Compartir</strong> (<Share2 className="w-3.5 h-3.5 inline mx-0.5 text-cyan-400" /> en la barra inferior de Safari).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1 flex-wrap">
                  Desliza hacia abajo y presiona <strong>«Agregar al inicio»</strong> (<PlusSquare className="w-3.5 h-3.5 inline mx-0.5 text-cyan-400" />).
                </p>
              </div>

              <div className="flex items-start gap-3 pt-1 border-t border-purple-900/40">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs text-cyan-300 font-semibold">
                  Presiona «Agregar» arriba a la derecha. ¡Ya tienes la app instalada en tu iPhone sin pasar por la App Store!
                </p>
              </div>
            </div>
          )}

          {/* Tab Content: PC / Mac */}
          {activeTab === "pc" && (
            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-800/50 space-y-3 animate-fadeIn">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <p className="text-xs sm:text-sm text-slate-300">
                  Abre la aplicación en <strong>Chrome, Edge o Brave</strong> en tu computador.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <p className="text-xs sm:text-sm text-slate-300">
                  En la barra superior de direcciones (a la derecha), haz clic en el icono <strong>Instalar aplicación (⊕)</strong>.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <p className="text-xs sm:text-sm text-slate-300">
                  O haz clic en el menú (<MoreVertical className="w-3.5 h-3.5 inline mx-0.5 text-slate-200" />) y selecciona <em>«Instalar Mentrix Estudio Bíblico»</em>.
                </p>
              </div>

              <div className="flex items-start gap-3 pt-1 border-t border-purple-900/40">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <p className="text-xs text-indigo-300 font-semibold">
                  Se abrirá en su propia ventana de escritorio optimizada con panel amplio y barra lateral.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 mb-6 text-xs">
          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-900/30">
            <Layers className="w-4 h-4 text-cyan-400 mb-1" />
            <div className="font-bold text-white">Diseño Adaptable</div>
            <div className="text-[11px] text-slate-400">Modo app en móvil y panel completo en PC.</div>
          </div>

          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-900/30">
            <WifiOff className="w-4 h-4 text-emerald-400 mb-1" />
            <div className="font-bold text-white">Caché Offline</div>
            <div className="text-[11px] text-slate-400">Funciona sin gastar datos con Service Worker.</div>
          </div>

          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-900/30">
            <BookOpen className="w-4 h-4 text-amber-400 mb-1" />
            <div className="font-bold text-white">Contenido Íntegro</div>
            <div className="text-[11px] text-slate-400">365 devocionales, trivias y plan RVR1960.</div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-purple-900/40">
          <a
            href="https://play.google.com/store/apps/details?id=com.mentrix.biblia&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
          >
            <span>¿Prefieres la versión de Google Play Store? Clic aquí</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs transition-colors w-full sm:w-auto cursor-pointer"
          >
            Cerrar Guía
          </button>
        </div>
      </div>
    </div>
  );
}
