export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  affiliateUrl: string;
  price: string;
  brand: string;
  capacity: string;
  features: string[];
  rating: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "DeLonghi DNC 65",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "20m²'ye kadar odalar için ideal, sessiz çalışan ve enerji tasarruflu nem alma cihazı. Akıllı sensör teknolojisi ile otomatik nem kontrolü.",
    affiliateUrl: "https://www.hepsiburada.com/arama?q=delonghi+nem+alma+cihazi",
    price: "2.499 TL",
    brand: "DeLonghi",
    capacity: "20m²",
    features: ["Sessiz çalışma", "Akıllı sensör", "Enerji tasarruflu", "Kolay taşıma"],
    rating: "4.8"
  },
  {
    id: "2",
    name: "Arçelik 9 KG Nem Alma Cihazı",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Geniş alanlar için yüksek kapasiteli, 9 kg/gün nem alma kapasitesi ile büyük odalar ve ofisler için ideal.",
    affiliateUrl: "https://www.trendyol.com/sr?q=arcelik+nem+alma+cihazi",
    price: "4.199 TL",
    brand: "Arçelik",
    capacity: "9 kg/gün",
    features: ["Yüksek kapasite", "Geniş alan", "Dijital ekran", "Otomatik çalışma"],
    rating: "4.7"
  },
  {
    id: "3",
    name: "Beko 6 KG Nem Alma Cihazı",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description: "Orta boy odalar için uygun, 6 kg/gün kapasiteli, kompakt tasarım ve uygun fiyatlı nem alma cihazı.",
    affiliateUrl: "https://www.amazon.com.tr/s?k=beko+nem+alma+cihazi",
    price: "1.799 TL",
    brand: "Beko",
    capacity: "6 kg/gün",
    features: ["Kompakt tasarım", "Uygun fiyat", "Kolay kullanım", "Sessiz"],
    rating: "4.5"
  },
  {
    id: "4",
    name: "Philips Series 2000 Nem Alma Cihazı",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=80",
    description: "Premium kalite, 12 kg/gün kapasiteli, akıllı bağlantı özellikli ve filtre teknolojisi ile üstün performans.",
    affiliateUrl: "https://www.vatanbilgisayar.com/arama?q=philips+nem+alma+cihazi",
    price: "5.899 TL",
    brand: "Philips",
    capacity: "12 kg/gün",
    features: ["Premium kalite", "Akıllı bağlantı", "Filtre teknolojisi", "Geniş alan"],
    rating: "4.9"
  },
  {
    id: "5",
    name: "Samsung 8 KG Nem Alma Cihazı",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
    description: "8 kg/gün kapasiteli, inverter teknolojisi ile enerji tasarruflu ve sessiz çalışan nem alma cihazı.",
    affiliateUrl: "https://www.mediamarkt.com.tr/tr/search.html?query=samsung+nem+alma+cihazi",
    price: "3.299 TL",
    brand: "Samsung",
    capacity: "8 kg/gün",
    features: ["Inverter teknolojisi", "Enerji tasarruflu", "Sessiz çalışma", "Dijital kontrol"],
    rating: "4.6"
  },
  {
    id: "6",
    name: "Vestel 5 KG Nem Alma Cihazı",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80",
    description: "Küçük odalar ve bebek odaları için ideal, 5 kg/gün kapasiteli, kompakt ve sessiz nem alma cihazı.",
    affiliateUrl: "https://www.n11.com/arama?q=vestel+nem+alma+cihazi",
    price: "1.299 TL",
    brand: "Vestel",
    capacity: "5 kg/gün",
    features: ["Bebek odası uygun", "Kompakt", "Sessiz", "Ekonomik"],
    rating: "4.3"
  }
]; 