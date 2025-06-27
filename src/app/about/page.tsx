import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Hakkımızda | Nemalan',
  description: 'Nemalan olarak nem alma cihazları konusunda uzman tavsiyeler sunuyoruz. Sağlıklı yaşam için nem kontrolü çözümleri.',
  keywords: ['nemalan', 'hakkımızda', 'nem alma cihazı', 'sağlıklı yaşam'],
  openGraph: {
    title: 'Hakkımızda | Nemalan',
    description: 'Nemalan olarak nem alma cihazları konusunda uzman tavsiyeler sunuyoruz.',
    url: 'https://nemalan.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-emerald-500 bg-clip-text text-transparent">
            Hakkında Her Şey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nemalan olarak, sağlıklı yaşam alanları oluşturmak için nem kontrolü konusunda uzman tavsiyeler sunuyoruz.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Us */}
            <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hakkımızda</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Nemalan olarak, en güncel ve güvenilir nem alma cihazlarını sizler için araştırıyor ve tanıtıyoruz. 
                  Amacımız, evinizde veya iş yerinizde sağlıklı bir ortam oluşturmanıza yardımcı olmak ve en iyi ürünleri 
                  en doğru bilgilerle sunmaktır.
                </p>
                <p className="text-lg">
                  Sitemizde yer alan ürünler, satış ortaklığı (affiliate) kapsamında önerilmektedir. 
                  Her ürün için detaylı incelemeler, kullanıcı yorumları ve satın alma linkleri bulabilirsiniz.
                </p>
                <p className="text-lg">
                  Sorularınız veya önerileriniz için bizimle iletişime geçmekten çekinmeyin. 
                  Sağlıklı ve konforlu bir yaşam için yanınızdayız!
                </p>
              </div>
            </section>

            {/* Why Dehumidifier */}
            <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Neden Nem Alma Cihazı?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sağlık İçin</h3>
                      <p className="text-gray-600">Nem oranı %60'ın üzerinde olduğunda küf, mantar ve akarlar ürer. Bu da alerji ve solunum problemlerine neden olur.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Konfor İçin</h3>
                      <p className="text-gray-600">Yüksek nem sıcaklık hissini artırır ve nefes almayı zorlaştırır. Nem alma cihazı ile daha konforlu bir ortam.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Eşyalar İçin</h3>
                      <p className="text-gray-600">Yüksek nem ahşap eşyaları, elektronik cihazları ve kıyafetleri bozar. Nem alma cihazı eşyalarınızı korur.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Enerji Tasarrufu</h3>
                      <p className="text-gray-600">Nem alma cihazları klima ihtiyacını azaltır ve enerji tasarrufu sağlar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Ideal Humidity Levels */}
            <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">İdeal Nem Oranları</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Farklı Alanlar İçin</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Ev Geneli</span>
                      <span className="text-blue-600 font-semibold">%40-60</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Bebek Odası</span>
                      <span className="text-green-600 font-semibold">%45-55</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Bodrum</span>
                      <span className="text-purple-600 font-semibold">%30-50</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">Ofis</span>
                      <span className="text-orange-600 font-semibold">%40-60</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Nem Seviyesi Etkileri</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">%70+ Yüksek Nem</div>
                      <div className="text-red-700 text-sm">Küf, mantar, akarlar ürer</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <div className="font-semibold text-green-800">%40-60 İdeal</div>
                      <div className="text-green-700 text-sm">Sağlıklı ve konforlu ortam</div>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                      <div className="font-semibold text-yellow-800">%30- Kuru Hava</div>
                      <div className="text-yellow-700 text-sm">Cilt kuruluğu, solunum problemleri</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Quick Links */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hızlı Linkler</h3>
              <div className="space-y-3">
                <Link href="/#products" className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <div className="font-semibold text-blue-900">En İyi Ürünler</div>
                  <div className="text-blue-700 text-sm">Nem alma cihazı tavsiyeleri</div>
                </Link>
                <Link href="/about" className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <div className="font-semibold text-green-900">Alıcı Rehberi</div>
                  <div className="text-green-700 text-sm">Seçim kriterleri ve ipuçları</div>
                </Link>
                <Link href="/about" className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <div className="font-semibold text-purple-900">SSS</div>
                  <div className="text-purple-700 text-sm">Sıkça sorulan sorular</div>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">İletişim</h3>
              <div className="space-y-3 text-gray-700">
                <p>Sorularınız için bizimle iletişime geçebilirsiniz.</p>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@nemalan.com</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Güvenilirlik</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Bağımsız incelemeler</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Güncel fiyatlar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Güvenli affiliate linkler</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 