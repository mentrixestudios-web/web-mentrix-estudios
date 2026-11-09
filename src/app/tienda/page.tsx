import { Metadata } from "next";
import TiendaClient from "./TiendaClient";

export const metadata: Metadata = {
  title: "Tienda Oficial Mentrix | Monedas y Packs Globales",
  description:
    "Adquiere monedas oficiales de Mentrix con Mercado Pago. Úsalas indistintamente en Línea de Tiempo, ¿Quién está en mi mente? y Estudio Bíblico con tu cuenta unificada.",
};

export default function TiendaPage() {
  return <TiendaClient />;
}
