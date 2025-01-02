import type { Metadata } from "next";
import type { Viewport } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const jura = localFont({
  src: [
    {
      path: './fonts/Jura-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Jura-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Jura-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Jura-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Jura-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--jura',
  preload: true,
  display: 'swap',
})

export const metadata: Metadata = {
  title: "[Andrés R.W. | Frontend Engineer]",
  description: "Habilidades, proyectos y desarrollos",
  authors: [{ name: "Andrés R.W.", url: "andresrw.com" }],
  keywords: ["Andrés R.W.",
    "Frontend Engineer",
    "React", "Next.js",
    "NestJS", "Types Script",
    "JavaScript", "HTML", "CSS",
    "Node", "Tailwind"],
  creator: "1508.agency",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      </head>
      <body className={`${jura.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
