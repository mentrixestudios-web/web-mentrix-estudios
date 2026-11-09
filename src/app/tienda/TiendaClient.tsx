"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MentrixNavbar from "@/components/MentrixNavbar";
import MentrixFooter from "@/components/MentrixFooter";
import { 
  Coins, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  ExternalLink,
  Loader2,
  Crown,
  Smartphone
} from "lucide-react";

export const PAQUETES_WEB = [
  {
    id: "pack_starter",
    nombre: "Pack de Bienvenida Mentrix",
    subtitulo: "Oferta Única para Nuevos Jugadores",
    monedas: 1000,
    precioCLP: 990,
    precioUSD: "1.10",
    badge: "80% DESCUENTO 🔥",
    destacado: true,
    icono: "🪙",
    beneficios: [
      "1.000 Monedas Billetera Global",
      "Válido en los 3 juegos de la trilogía",
      "Acreditación inmediata en tu cuenta",
    ],
  },
  {
    id: "pack_200",
    nombre: "Puñado de Monedas",
    subtitulo: "Iniciación de Aventurero",
    monedas: 200,
    precioCLP: 990,
    precioUSD: "1.10",
    badge: "Básico",
    destacado: false,
    icono: "🪙",
    beneficios: [
      "200 Monedas Globales",
      "Ideal para pistas rápidas",
      "Soporte inmediato",
    ],
  },
  {
    id: "pack_650",
    nombre: "Bolsa de Sabio",
    subtitulo: "500 + 150 monedas de regalo",
    monedas: 650,
    precioCLP: 2490,
    precioUSD: "2.70",
    badge: "+30% GRATIS ⚡",
    destacado: false,
    icono: "💰",
    beneficios: [
      "650 Monedas Globales",
      "Bonus 150 monedas extra gratis",
      "Poderes y comodines en juego",
    ],
  },
  {
    id: "pack_1800",
    nombre: "Cofre Estratégico",
    subtitulo: "1.200 + 600 monedas de regalo",
    monedas: 1800,
    precioCLP: 5990,
    precioUSD: "6.50",
    badge: "MÁS ELEGIDO ⭐",
    destacado: true,
    icono: "💎",
    beneficios: [
      "1.800 Monedas Globales",
      "Bonus 600 monedas extra gratis",
      "Suficiente para dominar temporadas",
    ],
  },
  {
    id: "pack_4500",
    nombre: "Bóveda Legendaria",
    subtitulo: "2.500 + 2.000 monedas de regalo",
    monedas: 4500,
    precioCLP: 12990,
    precioUSD: "13.90",
    badge: "MEJOR VALOR 👑",
    destacado: false,
    icono: "👑",
    beneficios: [
      "4.500 Monedas Globales",
      "Bonus gigantesco de +80% GRATIS",
      "Acceso ilimitado a pistas y vidas",
    ],
  },
];

export default function TiendaClient() {
  const [comprandoId, setComprandoId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleComprar = async (paquete: (typeof PAQUETES_WEB)[0]) => {
    try {
      setComprandoId(paquete.id);
      setErrorMsg(null);

      const res = await fetch("/api/mercadopago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: paquete.id,
          title: paquete.nombre,
          description: `${paquete.monedas} Monedas Globales Mentrix`,
          price: paquete.precioCLP,
          backUrl: window.location.origin,
        }),
      });

      const data = await res.json();

      if (data.ok && data.init_point) {
        window.location.href = data.init_point;
      } else {
        setErrorMsg(data.error || "No se pudo iniciar la compra en este momento.");
      }
    } catch (err: any) {
      console.error("Error al procesar compra:", err);
      setErrorMsg("Ocurrió un error de conexión con la pasarela de pago.");
    } finally {
      setComprandoId(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#070412] text-slate-100 flex flex-col selection:bg-purple-500/30">
      <MentrixNavbar />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full flex-1">
        {/* Glow ambient background */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 left-1/3 w-[400px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors bg-purple-950/30 px-3.5 py-1.5 rounded-lg border border-purple-800/30 backdrop-blur"
          >
            <ArrowLeft className="w-4 h-4 text-purple-400" />
            Volver a la portada
          </Link>
        </div>

        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-widest mb-4">
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            Billetera Global Mentrix
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display mb-4">
            Tienda Oficial de <span className="bg-gradient-to-r from-amber-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Monedas Mentrix</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Adquiere monedas con <strong className="text-white">Mercado Pago</strong> de forma 100% segura. Tus monedas se sincronizan automáticamente con tu cuenta de Mentrix para usarlas en <strong className="text-cyan-300">Línea de Tiempo</strong>, <strong className="text-purple-300">¿Quién está en mi mente?</strong> y <strong className="text-amber-300">Estudio Bíblico</strong>.
          </p>

          {/* Banner de Garantía y Pago Seguro */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-6 px-5 py-2.5 rounded-2xl bg-purple-900/20 border border-purple-700/30 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <ShieldCheck className="w-4 h-4" /> Pago 100% Protegido
            </div>
            <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <CreditCard className="w-4 h-4" /> Tarjetas Débito / Crédito / Mercado Pago
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
              <Zap className="w-4 h-4" /> Acreditación Inmediata
            </div>
          </div>

          {errorMsg && (
            <div className="mt-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-sm">
              {errorMsg}
            </div>
          )}
        </div>

        {/* Grid de Paquetes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PAQUETES_WEB.map((pack) => {
            const isSelected = comprandoId === pack.id;
            return (
              <div
                key={pack.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  pack.destacado
                    ? "bg-gradient-to-b from-[#180e36] via-[#100a26] to-[#0a0618] border-2 border-purple-500/60 shadow-xl shadow-purple-500/20 transform hover:-translate-y-1.5"
                    : "bg-[#0f0922]/80 border border-purple-900/40 hover:border-purple-600/50 shadow-lg shadow-black/40 hover:-translate-y-1"
                }`}
              >
                {/* Badge Superior */}
                {pack.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-purple-600 text-white shadow-md shadow-purple-600/40 border border-amber-300/40">
                      {pack.badge}
                    </span>
                  </div>
                )}

                {/* Info Principal */}
                <div>
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <span className="text-4xl p-2 rounded-2xl bg-purple-950/60 border border-purple-800/40">
                      {pack.icono}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                        ${pack.precioCLP.toLocaleString("es-CL")} CLP
                      </div>
                      <div className="text-xs text-slate-400">~{pack.precioUSD} USD</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{pack.nombre}</h3>
                  <p className="text-xs text-purple-300/80 mb-5">{pack.subtitulo}</p>

                  <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-800/30 mb-5 flex items-center justify-between">
                    <div className="text-xs font-semibold text-slate-300">Cantidad Total:</div>
                    <div className="text-lg font-black text-amber-300 flex items-center gap-1.5">
                      <Coins className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                      {pack.monedas.toLocaleString("es-CL")} Monedas
                    </div>
                  </div>

                  {/* Beneficios */}
                  <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
                    {pack.beneficios.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de Compra */}
                <button
                  onClick={() => handleComprar(pack)}
                  disabled={isSelected}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                    pack.destacado
                      ? "bg-gradient-to-r from-amber-500 via-purple-600 to-cyan-500 hover:from-amber-400 hover:to-cyan-400 text-white shadow-purple-600/30"
                      : "bg-purple-900/60 hover:bg-purple-800 text-white border border-purple-600/40 hover:border-purple-500"
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Conectando con Mercado Pago...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 text-amber-300" />
                      <span>Comprar con Mercado Pago</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Nota explicativa de la Billetera Cloud */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-purple-950/40 border border-purple-800/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Smartphone className="w-7 h-7 text-cyan-300" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  ¿Cómo se reflejan las monedas en tu celular o tablet?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Al completar el pago, tus monedas se añaden a tu cuenta Mentrix vinculada con tu correo electrónico. Simplemente abre tu juego favorito en el móvil o computador y tu saldo se actualizará al instante.
                </p>
              </div>
            </div>
            <Link
              href="/#juegos"
              className="px-5 py-2.5 rounded-xl bg-purple-900/40 border border-purple-700/50 hover:bg-purple-800/50 text-xs font-semibold text-white whitespace-nowrap transition-colors"
            >
              Ver Catálogo de Juegos
            </Link>
          </div>
        </div>
      </section>

      <MentrixFooter />
    </main>
  );
}
