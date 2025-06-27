import { products } from "../../../products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetail({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50">
      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-sky-600 transition-colors">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/#products" className="hover:text-sky-600 transition-colors">
                Ürünler
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {product.brand}
                </div>
              </div>
              
              {/* Product Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium">
                  Kapasite: {product.capacity}
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                  ✓ Stokta
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                  ⭐ 4.8/5
                </span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">{product.description}</p>
              
              <div className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent mb-6">
                {product.price}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Öne Çıkan Özellikler</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Teknik Özellikler</h3>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Marka</span>
                    <p className="font-semibold text-gray-900">{product.brand}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Kapasite</span>
                    <p className="font-semibold text-gray-900">{product.capacity}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Enerji Sınıfı</span>
                    <p className="font-semibold text-gray-900">A+</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Ses Seviyesi</span>
                    <p className="font-semibold text-gray-900">45 dB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                Şimdi Satın Al
              </a>
              
              <Link
                href="/#products"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-white transition-all duration-300"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Diğer Ürünleri İncele
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <h4 className="font-semibold text-gray-900 mb-4">Güvenli Alışveriş</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Hızlı Teslimat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Güvenli Ödeme</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">2 Yıl Garanti</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Kolay İade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 