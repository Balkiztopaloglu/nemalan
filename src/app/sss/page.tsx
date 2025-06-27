import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

const faqs = [
  {
    question: "Nem alma cihazı ne kadar elektrik tüketir?",
    answer: "Nem alma cihazlarının elektrik tüketimi günde 0.5-2 kWh arasında değişir. Bu, aylık yaklaşık 15-60 TL elektrik faturasına denk gelir. Enerji tasarruflu modeller daha az elektrik tüketir."
  },
  {
    question: "Nem alma cihazı ne kadar süre çalıştırılmalı?",
    answer: "Nem alma cihazı, nem oranı %40-60 arasında olana kadar sürekli çalıştırılabilir. Bu süre genellikle 2-8 saat arasındadır. Nem seviyesi ideal aralığa ulaştığında cihaz otomatik olarak durur."
  },
  {
    question: "Nem alma cihazı suyu nereye boşaltılır?",
    answer: "Çoğu nem alma cihazında su toplama haznesi bulunur. Bu hazne dolduğunda cihaz otomatik olarak durur. Suyu lavaboya veya tuvalete boşaltabilirsiniz. Bazı modellerde su tahliye hortumu da bulunur."
  },
  {
    question: "Nem alma cihazı ses yapar mı?",
    answer: "Modern nem alma cihazları oldukça sessiz çalışır. Ses seviyesi genellikle 35-50 dB arasındadır. Bu, normal bir konuşma sesi seviyesidir. Yatak odası için özel sessiz modeller de mevcuttur."
  },
  {
    question: "Nem alma cihazı hangi odaya konulmalı?",
    answer: "Nem alma cihazı, nem sorunu olan odaya konulmalıdır. Genellikle bodrum, banyo, mutfak ve çamaşır odaları nemli olur. Cihazı odanın ortasına, duvarlardan uzak bir yere yerleştirin."
  },
  {
    question: "Nem alma cihazı alerjiye iyi gelir mi?",
    answer: "Evet, nem alma cihazı alerjiye iyi gelir. Yüksek nem oranı küf, mantar ve akarların üremesine neden olur. Nem alma cihazı nem oranını %40-60 arasında tutarak bu alerjenlerin üremesini engeller."
  },
  {
    question: "Nem alma cihazı kışın da kullanılır mı?",
    answer: "Evet, nem alma cihazı kışın da kullanılabilir. Kışın evlerde nem oranı düşebilir, ancak banyo ve mutfak gibi alanlarda hala yüksek nem olabilir. Cihazı sadece nemli alanlarda kullanın."
  },
  {
    question: "Nem alma cihazı kapasitesi nasıl hesaplanır?",
    answer: "Nem alma cihazı kapasitesi, odanın büyüklüğüne ve nem seviyesine göre belirlenir. 20m² oda için 6-8 kg/gün, 40m² oda için 10-12 kg/gün kapasite yeterlidir. Çok nemli ortamlar için daha yüksek kapasite seçin."
  },
  {
    question: "Nem alma cihazı filtre değişimi gerekir mi?",
    answer: "Evet, nem alma cihazlarında filtre değişimi gerekir. HEPA filtreler 6-12 ayda bir, karbon filtreler 3-6 ayda bir değiştirilmelidir. Filtre değişim süresi kullanım sıklığına ve ortamın kirliliğine bağlıdır."
  },
  {
    question: "Nem alma cihazı garanti süresi ne kadar?",
    answer: "Nem alma cihazlarının garanti süresi genellikle 2-3 yıldır. Bazı premium markalar 5 yıla kadar garanti verebilir. Garanti süresi marka ve modele göre değişiklik gösterir."
  }
];

export const metadata: Metadata = {
  title: "Nem Alma Cihazı SSS - Sık Sorulan Sorular",
  description: "Nem alma cihazı hakkında sık sorulan sorular ve cevapları. Nem alma cihazı kullanımı, bakımı ve sorun giderme.",
  keywords: [
    "nem alma cihazı sss",
    "nem alma cihazı sorular",
    "nem alma cihazı kullanımı",
    "nem alma cihazı bakımı",
    "nem alma cihazı sorunları",
    "nem alma cihazı nasıl kullanılır"
  ],
  openGraph: {
    title: "Nem Alma Cihazı SSS - Sık Sorulan Sorular",
    description: "Nem alma cihazı hakkında sık sorulan sorular ve cevapları.",
  },
};

export default function SSSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50">
      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
              Sıkça Sorulan
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
              Sorular
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nem alma cihazları hakkında en çok merak edilen soruların yanıtlarını burada bulabilirsiniz. 
            Eğer aradığınız soru burada yoksa, bizimle iletişime geçebilirsiniz.
          </p>
        </section>

        {/* FAQ Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main FAQ Content */}
          <div className="lg:col-span-2 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-12">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Links */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hızlı Linkler</h3>
              <div className="space-y-3">
                <Link href="/#products" className="block p-3 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors">
                  <div className="font-semibold text-sky-900">En İyi Ürünler</div>
                  <div className="text-sky-700 text-sm">Nem alma cihazı tavsiyeleri</div>
                </Link>
                <Link href="/about" className="block p-3 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
                  <div className="font-semibold text-emerald-900">Hakkında</div>
                  <div className="text-emerald-700 text-sm">Nem alma cihazları hakkında</div>
                </Link>
                <Link href="/rehber" className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <div className="font-semibold text-purple-900">Alıcı Rehberi</div>
                  <div className="text-purple-700 text-sm">Seçim kriterleri ve ipuçları</div>
                </Link>
              </div>
            </div>

            {/* Popular Questions */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popüler Sorular</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900">Elektrik tüketimi</div>
                  <div className="text-gray-600 text-sm">Günde 0.5-2 kWh</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900">Ses seviyesi</div>
                  <div className="text-gray-600 text-sm">35-50 dB</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900">İdeal nem oranı</div>
                  <div className="text-gray-600 text-sm">%40-60</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900">Garanti süresi</div>
                  <div className="text-gray-600 text-sm">2-3 yıl</div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Başka Sorunuz Var mı?</h3>
              <p className="text-gray-700 mb-4">
                Burada bulamadığınız sorularınız için bizimle iletişime geçebilirsiniz.
              </p>
              <div className="flex items-center space-x-2 text-sky-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">info@nemalmasitesi.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nem Alma Cihazı Satın Almaya Hazır mısınız?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Uzmanlarımızın seçtiği en iyi nem alma cihazlarını inceleyin ve size en uygun olanını seçin.
            </p>
            <Link
              href="/#products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Ürünleri İncele
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 