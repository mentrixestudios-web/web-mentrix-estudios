import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mentrixestudios.com"),
  title: "Mentrix Estudios · Videojuegos y Experiencias Interactivas",
  description:
    "Estudio de desarrollo de videojuegos independientes, trivias inteligentes y retos de deducción en Chile. Creadores de Mentrix: ¿Quién está en mi mente?, Línea de Tiempo y Estudio Bíblico.",
  keywords: [
    "Mentrix Estudios",
    "Mentrix Mind Game",
    "videojuegos Chile",
    "juegos de deducción",
    "trivia inteligente",
    "Mentrix Línea de Tiempo",
    "juegos de historia",
    "Estudio Bíblico interactivo",
    "desarrollo indie",
  ],
  authors: [{ name: "ENLACE Soluciones Digitales", url: "https://redenlace.cl" }],
  creator: "ENLACE Soluciones Digitales",
  publisher: "ENLACE Soluciones Digitales",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png" },
    ],
  },
  openGraph: {
    title: "Mentrix Estudios · Videojuegos y Experiencias Interactivas",
    description:
      "Desafía tu mente con videojuegos de deducción, trivias y retos que expanden tu conocimiento.",
    siteName: "Mentrix Estudios",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/mentrix-mascot.webp",
        width: 512,
        height: 512,
        alt: "Mentrix Estudios",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#070412] text-slate-100 antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
