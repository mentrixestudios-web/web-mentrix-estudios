import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mentrixestudios.com"),
  title: {
    default: "Mentrix Estudios · Videojuegos y Experiencias Interactivas",
    template: "%s | Mentrix Estudios",
  },
  description:
    "Estudio de desarrollo de videojuegos independientes, trivias inteligentes y retos de deducción en Chile. Juega gratis a Mentrix: ¿Quién está en mi mente?, Línea de Tiempo y Estudio Bíblico en Web PWA y Google Play.",
  keywords: [
    "Mentrix Estudios",
    "Mentrix",
    "Mentrix Mind Game",
    "¿Quién está en mi mente?",
    "Mentrix Línea de Tiempo",
    "Mentrix Estudio Bíblico",
    "videojuegos Chile",
    "juegos de deducción",
    "trivia inteligente",
    "juegos de historia",
    "PWA juegos gratis",
    "desarrollo indie Chile",
    "videojuegos La Serena",
  ],
  authors: [{ name: "ENLACE Soluciones Digitales", url: "https://redenlace.cl" }],
  creator: "ENLACE Soluciones Digitales",
  publisher: "ENLACE Soluciones Digitales",
  alternates: {
    canonical: "https://mentrixestudios.com/",
  },
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
      "Desafía tu mente con videojuegos de deducción, trivias y retos que expanden tu conocimiento. Juegos indie chilenos jugables al instante en Web PWA y Google Play.",
    url: "https://mentrixestudios.com/",
    siteName: "Mentrix Estudios",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/logo-mentrix-oficial.jpg",
        width: 1200,
        height: 630,
        alt: "Mentrix Estudios · Videojuegos y Experiencias Interactivas",
      },
      {
        url: "/mascota-menti-original.png",
        width: 800,
        height: 800,
        alt: "Menti · Mascota Oficial de Mentrix Estudios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentrix Estudios · Videojuegos y Experiencias Interactivas",
    description:
      "Estudio indie de videojuegos, trivias inteligentes y retos mentales en Chile. Juega gratis en Web PWA y Google Play.",
    images: ["/logo-mentrix-oficial.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mentrixestudios.com/#organization",
      "name": "Mentrix Estudios",
      "url": "https://mentrixestudios.com",
      "email": "contacto@mentrixestudios.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mentrixestudios.com/logo-mentrix-emblema.png",
        "width": 512,
        "height": 512,
      },
      "image": "https://mentrixestudios.com/logo-mentrix-oficial.jpg",
      "description":
        "Estudio indie de desarrollo de videojuegos, retos deductivos y trivias inteligentes en Chile.",
      "founder": {
        "@type": "Organization",
        "name": "ENLACE Soluciones Digitales",
        "url": "https://redenlace.cl",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://mentrixestudios.com/#website",
      "url": "https://mentrixestudios.com",
      "name": "Mentrix Estudios",
      "description":
        "Portal oficial de videojuegos y experiencias interactivas de Mentrix Estudios.",
      "publisher": {
        "@id": "https://mentrixestudios.com/#organization",
      },
      "inLanguage": "es-CL",
    },
    {
      "@type": "VideoGame",
      "name": "Mentrix: ¿Quién está en mi mente?",
      "description":
        "Juego definitivo de deducción psicológica, pistas progresivas y memoria estratégica con más de 210 personajes.",
      "genre": ["Deducción", "Trivia", "Puzzle"],
      "gamePlatform": ["Web Browser", "Android", "iOS", "PC"],
      "operatingSystem": ["Android", "iOS", "Windows", "macOS"],
      "applicationCategory": "Game",
      "url": "https://mentrixestudios.com/#mqem",
      "playMode": "SinglePlayer",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    },
    {
      "@type": "VideoGame",
      "name": "Mentrix: Línea de Tiempo",
      "description":
        "Juego interactivo cronológico donde ordenas hitos históricos, inventos y civilizaciones sin equivocarte.",
      "genre": ["Historia", "Trivia", "Estrategia"],
      "gamePlatform": ["Web Browser", "Android", "iOS", "PC"],
      "operatingSystem": ["Android", "iOS", "Windows", "macOS"],
      "applicationCategory": "Game",
      "url": "https://tiempo.mentrixestudios.com",
      "playMode": "MultiPlayer",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    },
    {
      "@type": "VideoGame",
      "name": "Mentrix: Estudio Bíblico",
      "description":
        "Herramienta interactiva de aprendizaje bíblico con referencias cruzadas, 12 categorías y devocionales diarios.",
      "genre": ["Educación", "Trivia", "Fe"],
      "gamePlatform": ["Web Browser", "Android", "iOS", "PC"],
      "operatingSystem": ["Android", "iOS", "Windows", "macOS"],
      "applicationCategory": "Game",
      "url": "https://mentrixestudios.com/#estudio-biblico",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070412] text-slate-100 antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
