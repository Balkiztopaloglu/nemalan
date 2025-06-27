'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Mobil Menü Butonu */}
      <button 
        onClick={toggleMenu}
        className="p-3 rounded-2xl text-gray-700 hover:text-sky-600 hover:bg-white/50 transition-all duration-300"
        aria-label="Menüyü aç/kapat"
      >
        <svg 
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobil Menü */}
      <div className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-white/20 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-6 py-4 space-y-3">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="block py-3 text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:bg-white/30 rounded-xl px-3"
          >
            Ana Sayfa
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="block py-3 text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:bg-white/30 rounded-xl px-3"
          >
            Hakkımızda
          </Link>
          <Link 
            href="/#products" 
            onClick={() => setIsOpen(false)}
            className="block py-3 text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:bg-white/30 rounded-xl px-3"
          >
            En İyi Ürünler
          </Link>
          <Link 
            href="/bebek-odasi" 
            onClick={() => setIsOpen(false)}
            className="block py-3 text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:bg-white/30 rounded-xl px-3"
          >
            Bebek Odası
          </Link>
          <Link 
            href="/tavsiyeler" 
            onClick={() => setIsOpen(false)}
            className="block py-3 text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:bg-white/30 rounded-xl px-3"
          >
            Tavsiyeler
          </Link>
          <Link 
            href="/sss" 
            onClick={() => setIsOpen(false)}
            className="block py-3 text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 hover:bg-white/30 rounded-xl px-3"
          >
            SSS
          </Link>
        </div>
      </div>
    </div>
  );
} 