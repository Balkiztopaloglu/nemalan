import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nem Alma Cihazı Tavsiyeleri - Satın Alma ve Kullanım İpuçları",
  description: "Nem alma cihazı seçerken dikkat edilmesi gerekenler, kullanım ipuçları, enerji tasarrufu ve bakım önerileri.",
  keywords: [
    "nem alma cihazı tavsiyeleri",
    "nem alma cihazı seçimi",
    "nem alma cihazı kullanım ipuçları",
    "nem alma cihazı bakım",
    "enerji tasarrufu nem alma cihazı"
  ],
  openGraph: {
    title: "Nem Alma Cihazı Tavsiyeleri - Satın Alma ve Kullanım İpuçları",
    description: "Nem alma cihazı seçerken dikkat edilmesi gerekenler, kullanım ipuçları, enerji tasarrufu ve bakım önerileri.",
  },
};

export default function TavsiyelerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50">
      <main className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent mb-6">
            Nem Alma Cihazı Tavsiyeleri
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Doğru nem alma cihazını seçmek ve verimli kullanmak için uzman ipuçları ve öneriler.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Satın Alma Tavsiyeleri</h2>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Oda büyüklüğüne uygun kapasite seçin (ör. 20m² için 5-6 kg/gün yeterli)</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Enerji verimliliği yüksek (A+) modelleri tercih edin</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Sessiz çalışan modelleri seçin (özellikle yatak ve bebek odası için)</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Otomatik kapanma ve su seviye göstergesi gibi güvenlik özelliklerine dikkat edin</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Garanti süresi ve servis ağı geniş markaları tercih edin</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kullanım İpuçları</h2>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Cihazı odanın ortasına yakın, hava akışının serbest olduğu bir yere yerleştirin</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Kapı ve pencereleri kapalı tutarak verimliliği artırın</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Su tankını düzenli olarak boşaltın ve temizleyin</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Filtreleri haftada bir kontrol edin ve temizleyin</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Cihazı uzun süre kullanmayacaksanız temizleyip kuru şekilde saklayın</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Enerji Tasarrufu ve Bakım</h2>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Enerji tasarrufu için cihazı sadece ihtiyaç duyduğunuzda çalıştırın</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Düzenli bakım cihazın ömrünü uzatır ve verimliliği artırır</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-sky-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Kullanım kılavuzundaki bakım talimatlarına uyun</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
} 