import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "[Andrés R.W. | Frontend Engineer]",
  description: "Habilidades, proyectos y desarrollos",
  authors: [{ name: "Andrés R.W.", url: "https://andresrw.com" }],
  keywords: ["Andrés R.W.",
    "Frontend Engineer",
    "React", "Next.js",
    "NestJS", "Types Script",
    "JavaScript", "HTML", "CSS",
    "Node", "Tailwind"],
  creator: "1508.agency",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://programmer.andresrw.com/",
    siteName: "Andrés R.W.",
    title: "[Andrés R.W. | Frontend Engineer]",
    description: "Habilidades, proyectos y desarrollos",
    images: [
      {
        url: "https://programmer.andresrw.com/og-image.jpg",
      }],
    countryName: "Colombia",
    emails: "contact@andresrw.com",
    ttl: 86400,
    determiner: "auto",
  },
  category: "Tecnología", // Ejemplo de categoría
  twitter: {
    title: "[Andrés R.W. | Frontend Engineer]",
    creator: "@andresrw",
    site: "@andresrw",
    description: "Habilidades, proyectos y desarrollos de Andrés R.W.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
