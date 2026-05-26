import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauricio Gavilán | Backend Architect & Senior Software Engineer",
  description: "Portfolio profesional de Mauricio Gavilán, Ingeniero de Software Senior y Arquitecto Backend especializado en microservicios escalables, integraciones cloud de alto rendimiento y automatización inteligente.",
  keywords: ["Mauricio Gavilan", "Backend Architect", "Software Engineer", ".NET", "NestJS", "AWS", "SQL Server", "Arquitectura Hexagonal", "IA OCR"],
  authors: [{ name: "Mauricio Gavilán" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${plusJakarta.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-orange-700 selection:text-white bg-[#FAF8F5] text-[#1C1A17]">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for(let registration of registrations) {
                    registration.unregister().then(function(boolean) {
                      if (boolean) {
                        console.log('Old Service Worker cleared successfully.');
                        window.location.reload();
                      }
                    });
                  }
                });
              }
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
