import { Outfit} from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/Header";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/StairTransition";

// Cargando la fuente Outfit correctamente
const outfit = Outfit({
  variable: "--font-outfit", // Definir la variable CSS que usaremos para esta fuente
  subsets: ["latin"], // Usamos 'latin' para asegurar compatibilidad con los caracteres comunes
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"], // Especificamos los pesos de las fuentes
  style: "normal", // Especificamos el estilo de las fuentes
  stretch: 100, // Especificamos el ajuste de las fuentes
  fallbacks: ["sans-serif"], // Especificamos las fuentes alternativas      
});

export const metadata = {
  title: "Elias Silva - Portfolio",
  description: "Portfolio for to work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
