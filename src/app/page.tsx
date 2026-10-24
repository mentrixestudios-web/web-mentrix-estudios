import React from "react";
import MentrixNavbar from "@/components/MentrixNavbar";
import MentrixStudioIntroBanner from "@/components/MentrixStudioIntroBanner";
import MentrixHero from "@/components/MentrixHero";
import GamesGrid from "@/components/GamesGrid";
import DescargasSection from "@/components/DescargasSection";
import MqemSpotlight from "@/components/MqemSpotlight";
import LineaDeTiempoSpotlight from "@/components/LineaDeTiempoSpotlight";
import EstudioBiblicoSpotlight from "@/components/EstudioBiblicoSpotlight";
import MascotasShowcase from "@/components/MascotasShowcase";
import StudioAbout from "@/components/StudioAbout";
import MentrixFooter from "@/components/MentrixFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070412] text-slate-100 flex flex-col">
      {/* 1. Header Navigation con Logo Oficial y Slogan */}
      <MentrixNavbar />

      {/* 2. Banner Interactivo de Presentación Mentrix Estudios (Intro Videojuego) */}
      <MentrixStudioIntroBanner />

      {/* 3. Hero Principal con Selector de Skins de Menti */}
      <MentrixHero />

      {/* 4. Catálogo de Juegos (Modular y Dinámico) */}
      <GamesGrid />

      {/* 5. Zona Exclusiva de Descargas Google Play */}
      <DescargasSection />

      {/* 6. Spotlight: Mentrix ¿Quién está en mi mente? (con Menti Original & burbuja interactiva) */}
      <MqemSpotlight />

      {/* 6. Spotlight: Mentrix Línea de Tiempo (con Menti Tiempo & burbuja interactiva) */}
      <LineaDeTiempoSpotlight />

      {/* 7. Spotlight: Mentrix Estudio Bíblico (con Menti Biblia & burbuja interactiva) */}
      <EstudioBiblicoSpotlight />

      {/* 8. Fichas de Mascotas: El Universo de Menti */}
      <MascotasShowcase />

      {/* 9. Sobre el Estudio y Visión */}
      <StudioAbout />

      {/* 10. Footer Oficial con Firma Red-Enlace */}
      <MentrixFooter />
    </main>
  );
}
