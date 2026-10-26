export type GameStatus = "available" | "in_development" | "coming_soon";

export type Platform = "android" | "ios" | "web" | "pc";

export interface GameStat {
  value: string;
  label: string;
}

export interface GameItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: GameStatus;
  statusBadge: string;
  category: string;
  badgeAccent?: "purple" | "cyan" | "amber" | "emerald";
  coverImage: string;
  mascotImage?: string;
  platforms: Platform[];
  features: string[];
  stats?: GameStat[];
  downloads?: {
    playStoreUrl?: string;
    apkUrl?: string;
    webDemoUrl?: string;
    webAppUrl?: string;
  };
  highlight?: boolean;
}
