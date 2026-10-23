import React from "react";
import MentrixNavbar from "@/components/MentrixNavbar";
import MentrixHero from "@/components/MentrixHero";
import GamesGrid from "@/components/GamesGrid";
import LineaDeTiempoSpotlight from "@/components/LineaDeTiempoSpotlight";
import MascotasShowcase from "@/components/MascotasShowcase";
import StudioAbout from "@/components/StudioAbout";
import MentrixFooter from "@/components/MentrixFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070412] text-slate-100 flex flex-col">
      {/* 1. Header Navigation con Logo Oficial y Slogan */}
      <MentrixNavbar />

      {/* 2. Hero Principal con Identidad Oficial y Slogan */}
      <MentrixHero />

      {/* 3. Catálogo de Juegos (Modular y Dinámico) */}
      <GamesGrid />

      {/* 4. Spotlight Especial: Mentrix Línea de Tiempo */}
      <LineaDeTiempoSpotlight />

      {/* 5. Fichas de Mascotas: El Universo de Menti */}
      <MascotasShowcase />

      {/* 6. Sobre el Estudio y Visión */}
      <StudioAbout />

      {/* 7. Banner Final CTA y Footer Homologado ENLACE */}
      <MentrixFooter />
    </main>
  );
}
