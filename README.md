# Nemalan - Nemsiz, Sağlıklı Yaşam

Modern ve kullanıcı dostu nem alma cihazları affiliate web sitesi. Next.js 15, TypeScript ve Tailwind CSS ile geliştirilmiştir.

![Nemalan Logo](public/logo-simple-nemalan.svg)

## 🚀 Özellikler

### 📱 Responsive Tasarım
- Mobil, tablet ve masaüstü uyumlu
- Modern ve temiz arayüz
- Smooth scroll ve animasyonlar

### 🏠 Sayfalar
- **Ana Sayfa**: Hero section, ürün grid'i, bilgilendirme kartları
- **Hakkımızda**: Şirket bilgileri ve misyon
- **En İyi Ürünler**: Detaylı ürün karşılaştırmaları
- **Bebek Odası**: Bebek odaları için özel öneriler
- **Tavsiyeler**: Uzman tavsiyeleri ve rehberler
- **SSS**: Sık sorulan sorular

### 🛍️ Ürün Özellikleri
- Detaylı ürün sayfaları
- Fiyat karşılaştırmaları
- Affiliate linkler (Hepsiburada, Trendyol, Amazon, vb.)
- Ürün özellikleri ve teknik detaylar
- Kullanıcı değerlendirmeleri

### 🎨 Tasarım
- Mavi-yeşil gradient tema
- Modern logo tasarımı
- Blur efektleri ve glassmorphism
- Hover animasyonları
- Loading spinner'lar

### 🔧 Teknik Özellikler
- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- SEO optimizasyonu
- Meta tags ve Open Graph
- Favicon ve web manifest
- Mobile-first tasarım

## 🛠️ Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd nemalmasitesi
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
nemalmasitesi/
├── src/
│   ├── app/
│   │   ├── about/          # Hakkımızda sayfası
│   │   ├── bebek-odasi/    # Bebek odası sayfası
│   │   ├── product/        # Ürün detay sayfaları
│   │   ├── sss/           # SSS sayfası
│   │   ├── tavsiyeler/    # Tavsiyeler sayfası
│   │   ├── globals.css    # Global stiller
│   │   ├── layout.tsx     # Ana layout
│   │   └── page.tsx       # Ana sayfa
│   ├── components/        # React bileşenleri
│   │   ├── Footer.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── MobileMenu.tsx
│   └── products.ts        # Ürün verileri
├── public/               # Statik dosyalar
│   ├── logo-simple-nemalan.svg
│   ├── favicon.ico
│   └── site.webmanifest
└── package.json
```

## 🎯 Kullanılan Teknolojiler

- **Framework**: Next.js 15
- **Dil**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash
- **Deployment**: Vercel (önerilen)

## 🔗 Affiliate Programları

Site şu e-ticaret platformlarıyla entegre edilmiştir:
- Hepsiburada
- Trendyol
- Amazon
- Vatan Bilgisayar
- MediaMarkt
- N11

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Önerilen)
```bash
npm run build
```

Vercel'e deploy etmek için:
1. [Vercel](https://vercel.com)'e giriş yapın
2. GitHub repository'nizi bağlayın
3. Otomatik deploy başlayacaktır

### Diğer Platformlar
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Geliştirme

### Scripts
```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run start    # Production sunucusu
npm run lint     # ESLint kontrolü
```

### Yeni Sayfa Ekleme
1. `src/app/` altında yeni klasör oluşturun
2. `page.tsx` dosyası ekleyin
3. Layout'ta menü linkini güncelleyin

### Yeni Ürün Ekleme
1. `src/products.ts` dosyasını düzenleyin
2. Ürün verilerini ekleyin
3. Affiliate linkini güncelleyin

## 📊 SEO

- Meta tags optimizasyonu
- Open Graph desteği
- Structured data
- Sitemap (gelecek özellik)
- Robots.txt (gelecek özellik)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Website**: [nemalan.com](https://nemalan.com)
- **Email**: info@nemalan.com
- **Proje**: [GitHub Repository](https://github.com/your-username/nemalmasitesi)

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org) ekibine
- [Tailwind CSS](https://tailwindcss.com) ekibine
- [Vercel](https://vercel.com) ekibine
- Tüm açık kaynak topluluğuna

---

**Nemalan** - Nemsiz, sağlıklı yaşam için en iyi nem alma cihazları 🏠💧
