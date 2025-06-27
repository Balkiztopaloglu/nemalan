import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Nemalan - En İyi Nem Alma Cihazları ve Tavsiyeler',
    template: '%s | Nemalan'
  },
  description: 'En iyi nem alma cihazları, profesyonel tavsiyeler ve detaylı incelemeler. Sağlıklı yaşam için nem kontrolü çözümleri.',
  keywords: ['nem alma cihazı', 'dehumidifier', 'nem kontrolü', 'sağlıklı yaşam', 'ev nemi'],
  authors: [{ name: 'Nemalan' }],
  creator: 'Nemalan',
  publisher: 'Nemalan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nemalan.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nemalan - En İyi Nem Alma Cihazları ve Tavsiyeler',
    description: 'En iyi nem alma cihazları, profesyonel tavsiyeler ve detaylı incelemeler. Sağlıklı yaşam için nem kontrolü çözümleri.',
    url: 'https://nemalan.com',
    siteName: 'Nemalan',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nemalan - En İyi Nem Alma Cihazları ve Tavsiyeler',
    description: 'En iyi nem alma cihazları, profesyonel tavsiyeler ve detaylı incelemeler.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/logo-simple-nemalan.svg"
              alt="Nemalan Logo"
              width={240}
              height="52"
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Menü */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105">Ana Sayfa</Link>
            <Link href="/about" className="text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105">Hakkımızda</Link>
            <Link href="/#products" className="text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105">En İyi Ürünler</Link>
            <Link href="/bebek-odasi" className="text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105">Bebek Odası</Link>
            <Link href="/tavsiyeler" className="text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105">Tavsiyeler</Link>
            <Link href="/sss" className="text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105">SSS</Link>
          </div>

          {/* Tablet Menü */}
          <div className="hidden md:flex lg:hidden items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105">Ana Sayfa</Link>
            <Link href="/about" className="text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105">Hakkımızda</Link>
            <Link href="/#products" className="text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105">Ürünler</Link>
            <Link href="/tavsiyeler" className="text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105">Tavsiyeler</Link>
          </div>

          {/* Mobil Menü */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/logo-icon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-icon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/logo-icon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/logo-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
