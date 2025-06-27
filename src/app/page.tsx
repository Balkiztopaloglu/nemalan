import type { Metadata } from "next";
import { products } from "../products";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nem Alma Cihazı Tavsiyeleri 2024 - En İyi Nem Alma Cihazları",
  description: "2024'ün en iyi nem alma cihazları, fiyatları ve tavsiyeleri. DeLonghi, Arçelik, Beko, Philips nem alma cihazı karşılaştırması. Bebek odası için nem alma cihazı önerileri.",
  keywords: [
    "nem alma cihazı",
    "nem alma cihazı tavsiyeleri",
    "en iyi nem alma cihazları",
    "nem alma cihazı fiyatları",
    "bebek odası nem alma cihazı",
    "dehumidifier",
    "nem alma cihazı alırken dikkat edilecekler",
    "nem alma cihazı markaları",
    "arcelik nem alma cihazı",
    "beko nem alma cihazı",
    "delonghi nem alma cihazı",
    "philips nem alma cihazı"
  ],
  openGraph: {
    title: "Nem Alma Cihazı Tavsiyeleri 2024 - En İyi Nem Alma Cihazları",
    description: "2024'ün en iyi nem alma cihazları, fiyatları ve tavsiyeleri. Uzman önerileriyle doğru nem alma cihazını seçin.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-emerald-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent mb-8 leading-tight">
              Sağlıklı Yaşam Alanı
              <br />
              <span className="text-4xl lg:text-6xl">İçin Nem Alma Cihazları</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              2024&apos;ün en iyi nem alma cihazları, uzman tavsiyeleri ve detaylı karşılaştırmaları ile 
              evinizde ideal nem seviyesini koruyun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                En İyi Ürünleri İncele
              </a>
              <Link
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-white transition-all duration-300"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Fiyatları Karşılaştır
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Uzman Tavsiyeleri</h3>
              <p className="text-gray-600">
                Deneyimli uzmanlarımızın özenle seçtiği en iyi nem alma cihazları ve detaylı incelemeleri.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">En İyi Fiyatlar</h3>
              <p className="text-gray-600">
                Güncel fiyatlar ve karşılaştırmalar ile bütçenize en uygun nem alma cihazını bulun.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Güvenilir Alışveriş</h3>
              <p className="text-gray-600">
                Güvenli affiliate linkleri ile güvenle alışveriş yapın, hızlı teslimat garantisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent mb-6">
              En İyi Nem Alma Cihazları 2024
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uzmanlarımızın özenle seçtiği, en çok tercih edilen ve en yüksek puan alan nem alma cihazları.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.brand}
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {product.rating}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      Kapasite: {product.capacity}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                      Satın Al
                    </a>
                    <Link
                      href={`/product/${product.id}`}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-white transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Detayları İncele
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nem Alma Cihazı Alırken Dikkat Edilecekler</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Oda büyüklüğüne uygun kapasite seçimi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Enerji verimliliği (A+ sınıfı tercih edin)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Ses seviyesi (40-50 dB ideal)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Filtre değişim kolaylığı</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Garanti süresi ve servis ağı</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nem Alma Cihazının Faydaları</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Küf ve mantar oluşumunu önler</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Alerjik reaksiyonları azaltır</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Solunum yolu hastalıklarını önler</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Eşyaların ömrünü uzatır</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Daha temiz ve ferah hava sağlar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
