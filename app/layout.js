import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://marevalux.com"),
  title: "MarevaLux | Representación comercial B2B",
  description:
    "Representación comercial B2B para fabricantes, empresas tecnológicas y proveedores de soluciones de alto valor.",
  keywords: [
    "MarevaLux",
    "representación comercial B2B",
    "desarrollo comercial",
    "alianzas estratégicas",
    "Argentina",
  ],
  authors: [{ name: "MarevaLux" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MarevaLux | Representación comercial B2B",
    description:
      "Transformamos soluciones de alto valor en oportunidades comerciales reales.",
    type: "website",
    locale: "es_AR",
    url: "https://marevalux.com",
    siteName: "MarevaLux",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
