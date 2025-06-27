import type { Metadata } from "next";
import { products } from "../../products";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bebek Odası Nem Alma Cihazı - En İyi Bebek Odası Nem Alma Cihazları",
  description: "Bebek odası için en iyi nem alma cihazları ve tavsiyeleri. Bebek sağlığı için ideal nem seviyesi ve güvenli nem alma cihazı önerileri.",
  keywords: [
    "bebek odası nem alma cihazı",
    "bebek için nem alma cihazı",
    "bebek sağlığı nem alma",
    "bebek odası nem kontrolü",
    "bebek alerjisi nem alma cihazı",
    "bebek odası nem seviyesi"
  ],
  openGraph: {
    title: "Bebek Odası Nem Alma Cihazı - En İyi Bebek Odası Nem Alma Cihazları",
    description: "Bebek odası için en iyi nem alma cihazları ve tavsiyeleri.",
  },
};

export default function BebekOdasiPage() {
  // Bebek odası için uygun ürünleri filtrele
  const bebekOdasiUrunleri = products.filter(product => 
    product.name.toLowerCase().includes('bebek') || 
    product.capacity.includes('5') || 
    product.capacity.includes('6') ||
    product.brand === 'Vestel' ||
    product.brand === 'Beko'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50">
      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent mb-6">
            Bebek Odası İçin Nem Alma Cihazları
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bebeğinizin sağlığı için ideal nem seviyesini koruyun. Bebek odası için özel olarak 
            seçilmiş, sessiz ve güvenli nem alma cihazları.
          </p>
        </div>

        {/* Bebek Sağlığı Bilgileri */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bebek Sağlığı İçin Neden Önemli?</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-900">Solunum Yolu Sağlığı</span>
                  <p className="text-gray-600 text-sm">İdeal nem seviyesi bebeğin solunum yollarını korur</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-900">Alerji Önleme</span>
                  <p className="text-gray-600 text-sm">Küf ve akarların oluşumunu engeller</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-900">Uyku Kalitesi</span>
                  <p className="text-gray-600 text-sm">Rahat nefes alma ile daha iyi uyku</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-900">Cilt Sağlığı</span>
                  <p className="text-gray-600 text-sm">Bebeğin hassas cildini korur</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bebek Odası İçin Özellikler</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-900">Sessiz Çalışma</span>
                  <p className="text-gray-600 text-sm">40 dB altında çalışan modeller</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-900">Kompakt Boyut</span>
                  <p className="text-gray-600 text-sm">Küçük odalara uygun tasarım</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-900">Güvenlik Özellikleri</span>
                  <p className="text-gray-600 text-sm">Çocuk kilidi ve devrilme koruması</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-900">Kolay Kullanım</span>
                  <p className="text-gray-600 text-sm">Tek tuşla çalıştırma</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* İdeal Nem Seviyesi */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bebek Odası İçin İdeal Nem Seviyesi</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">%30</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Çok Düşük</h3>
              <p className="text-gray-600 text-sm">Kuru hava, solunum problemlerine neden olabilir</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">%40-60</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">İdeal Seviye</h3>
              <p className="text-gray-600 text-sm">Bebek sağlığı için en uygun nem oranı</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">%70+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Çok Yüksek</h3>
              <p className="text-gray-600 text-sm">Küf ve akar oluşumuna neden olur</p>
            </div>
          </div>
        </div>

        {/* Bebek Odası Ürünleri */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Bebek Odası İçin Önerilen Nem Alma Cihazları
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bebekOdasiUrunleri.map((product) => (
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

        {/* Kullanım İpuçları */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bebek Odası Nem Alma Cihazı Kullanım İpuçları</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kurulum Önerileri</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Bebeğin yatağından en az 1 metre uzakta konumlandırın</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Duvardan 20-30 cm mesafede tutun</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Hava akışını engelleyecek eşyalar koymayın</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Elektrik kablosunu bebeğin ulaşamayacağı yere saklayın</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bakım ve Temizlik</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Su tankını günde bir kez boşaltın</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Filtreleri haftada bir temizleyin</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Cihazı ayda bir genel temizlik yapın</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Nem seviyesini günde bir kontrol edin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 