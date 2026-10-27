import { GameItem } from "@/types/game";

export const MENTRIX_GAMES: GameItem[] = [
  {
    id: "mqem",
    slug: "mentrix-mind-game",
    title: "Mentrix: ¿Quién está en mi mente?",
    tagline: "El juego definitivo de deducción psicológica, pistas progresivas y memoria estratégica.",
    description:
      "Adivina el personaje secreto antes de que se acaben tus preguntas. Desbloquea pistas con monedas, formula preguntas clave y pon a prueba tu conocimiento con más de 210 personajes históricos, culturales y del entretenimiento en 7 categorías únicas.",
    status: "available",
    statusBadge: "Disponible en Android",
    category: "Deducción & Trivia",
    badgeAccent: "purple",
    coverImage: "/games/mind-game-splash.png",
    mascotImage: "/mentrix-mascot.webp",
    platforms: ["android", "web", "ios"],
    highlight: true,
    features: [
      "210 personajes únicos organizados en 7 categorías",
      "4 niveles de pistas estratégicas por personaje",
      "Múltiples modos: Desafío Diario, Contrarreloj, Supervivencia y Fiesta",
      "Creador de personajes personalizados",
      "Economía interna con monedas y tienda de recompensas",
      "Juego local 100% offline y PWA instalable sin tiendas",
    ],
    stats: [
      { value: "210+", label: "Personajes" },
      { value: "7", label: "Categorías" },
      { value: "PWA Web", label: "Instalable" },
      { value: "Offline", label: "Modo local" },
    ],
    downloads: {
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mentrix.quienestaenmente&pcampaignid=web_share",
      apkUrl: "https://play.google.com/store/apps/details?id=com.mentrix.quienestaenmente&pcampaignid=web_share",
      webAppUrl: "https://mentrix-mind-game.vercel.app",
    },
  },
  {
    id: "linea-de-tiempo",
    slug: "mentrix-linea-de-tiempo",
    title: "Mentrix: Línea de Tiempo",
    tagline: "Ordena los grandes hitos de la humanidad y pon a prueba tu intuición temporal.",
    description:
      "¿La invención de la imprenta ocurrió antes o después de la caída de Constantinopla? Ubica inventos, batallas, descubrimientos y eventos universales en su posición cronológica exacta sin equivocarte en la línea del tiempo.",
    status: "in_development",
    statusBadge: "Próximo Lanzamiento · En Desarrollo",
    category: "Historia & Cronología",
    badgeAccent: "amber",
    coverImage: "/games/linea-de-tiempo.png",
    platforms: ["android", "web"],
    highlight: true,
    features: [
      "Mecánica ágil de arrastrar y soltar cartas cronológicas",
      "Eras temáticas: Antigüedad, Edad Media, Revolución Científica y Mundo Moderno",
      "Modo solitario con niveles de precisión progresivos",
      "Duelos multijugador por turnos",
      "Integración de eventos universales y cultura latinoamericana",
    ],
    stats: [
      { value: "500+", label: "Hitos históricos" },
      { value: "5", label: "Eras temporales" },
      { value: "1v1", label: "Duelos por turnos" },
      { value: "2026", label: "Lanzamiento previsto" },
    ],
    downloads: {},
  },
  {
    id: "estudio-biblico",
    slug: "mentrix-estudio-biblico",
    title: "Mentrix: Estudio Bíblico",
    tagline: "Aprende, memoriza y profundiza en las escrituras con trivias interactivas y referencias cruzadas.",
    description:
      "Una poderosa herramienta de aprendizaje y trivia estructurada en 12 categorías históricas del texto bíblico. Diseñada para estudiantes, familias y amantes de la historia sagrada que buscan ejercitar su memoria y conocimiento de forma entretenida.",
    status: "available",
    statusBadge: "Edición Especial",
    category: "Educación & Fe",
    badgeAccent: "cyan",
    coverImage: "/games/mentrix-biblia.png",
    platforms: ["android", "web", "ios"],
    highlight: true,
    features: [
      "12 categorías temáticas (Apóstoles, Profetas, Reyes, Milagros, Parábolas y más)",
      "Sistema de referencias cruzadas para profundizar cada respuesta",
      "Mapas interactivos de Tierra Santa y contexto geográfico",
      "Modo memorización y estudio para escuelas y grupos familiares",
      "Funcionamiento 100% offline y PWA instalable sin tiendas",
    ],
    stats: [
      { value: "12", label: "Categorías" },
      { value: "1000+", label: "Preguntas" },
      { value: "PWA Web", label: "Instalable" },
      { value: "Offline", label: "Estudio libre" },
    ],
    downloads: {
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mentrix.biblia&pcampaignid=web_share",
      apkUrl: "https://play.google.com/store/apps/details?id=com.mentrix.biblia&pcampaignid=web_share",
      webAppUrl: "https://mentrix-estudio-biblico.vercel.app",
    },
  },
];

export const STUDIO_INFO = {
  name: "Mentrix Estudios",
  tagline: "Videojuegos, trivias inteligentes y experiencias interactivas que expanden tu mente.",
  description:
    "Estudio independiente de desarrollo de videojuegos, retos de deducción y herramientas interactivas, creado y respaldado por ENLACE Soluciones Digitales. Diseñamos dinámicas divertidas, accesibles y con valor cultural e intelectual.",
  founder: "ENLACE Soluciones Digitales",
  creator: "ENLACE Soluciones Digitales",
  location: "La Serena, Chile",
  contactEmail: "mentrix.estudios@gmail.com",
  agencyPartner: {
    name: "ENLACE Soluciones Digitales",
    url: "https://redenlace.cl",
  },
  social: {
    instagram: "https://instagram.com/mentrixestudios",
    youtube: "https://youtube.com/@mentrixestudios",
    playStore: "https://play.google.com/store/apps",
  },
};
