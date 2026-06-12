import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { LangProvider } from "./lib/i18n";
import CookieConsent from "./components/CookieConsent";
import { LANG_COOKIE, type Lang } from "./lib/detect-locale";

const SITE_URL = "https://www.mrconsultores.com"; // TODO: reemplazar por el dominio real

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MR Consultores · Talento y tecnología en una sola firma",
    template: "%s · MR Consultores",
  },
  description:
    "MR Consultores — Firma integral de capital humano: tecnología, selección, desarrollo organizacional, legal y psicología. Tu socio estratégico de transformación.",
  keywords: [
    "capital humano",
    "recursos humanos",
    "selección de personal",
    "desarrollo organizacional",
    "psicología laboral",
    "legal laboral",
    "tecnología RRHH",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "MR Consultores" }],
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo-mr-mono.png",
    shortcut: "/logo-mr-mono.png",
    apple: "/logo-mr-mono.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "MR Consultores",
    title: "MR Consultores · Talento y tecnología en una sola firma",
    description:
      "Firma integral de capital humano: tecnología, selección, desarrollo organizacional, legal y psicología. Tu socio estratégico de transformación.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MR Consultores · Talento y tecnología en una sola firma",
    description:
      "Firma integral de capital humano: tecnología, selección, desarrollo organizacional, legal y psicología.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MR Consultores",
  description:
    "Firma integral de capital humano: tecnología, selección, desarrollo organizacional, legal y psicología.",
  url: SITE_URL,
  email: "mriverorrhh@hotmail.com",
  telephone: "+543516546850",
  areaServed: "AR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressCountry: "AR",
  },
  knowsAbout: [
    "Recursos Humanos",
    "Desarrollo Organizacional",
    "Psicología Laboral",
    "Legal Laboral",
    "Tecnología y Automatización",
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieLang = (await cookies()).get(LANG_COOKIE)?.value;
  const initialLang: Lang = cookieLang === "en" ? "en" : "es";

  return (
    <html lang={initialLang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LangProvider initialLang={initialLang}>
          {children}
          <CookieConsent />
        </LangProvider>
      </body>
    </html>
  );
}
