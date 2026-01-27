import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Özellikler - Acentigo',
  description: 'Acentigo tur satış sisteminin tüm özelliklerini keşfedin. Tur yönetimi, rezervasyon, ödeme, muhasebe ve daha fazlası.',
}

const features = [
  {
    category: 'Tur Yönetimi',
    items: [
      {
        title: 'Tur Oluşturma ve Düzenleme',
        description: 'Kolay tur tanımlama, detaylı açıklamalar, görsel ekleme ve kategorilendirme.',
      },
      {
        title: 'Tarih ve Fiyatlandırma',
        description: 'Esnek tarih yönetimi, yetişkin/çocuk/bebek fiyatlandırması, erken rezervasyon indirimleri.',
      },
      {
        title: 'Kontenjan Yönetimi',
        description: 'Minimum ve maksimum kapasite kontrolü, otomatik kontenjan takibi ve rezervasyon limitleri.',
      },
    ],
  },
  {
    category: 'Rezervasyon Sistemi',
    items: [
      {
        title: 'Online Rezervasyon Formu',
        description: 'Müşterileriniz kolayca rezervasyon yapabilir. Mobil uyumlu, hızlı ve güvenli.',
      },
      {
        title: 'Yaş Doğrulama',
        description: 'Otomatik yaş hesaplama ve doğrulama. Yetişkin, çocuk ve bebek kategorileri için doğru fiyatlandırma.',
      },
      {
        title: 'Rezervasyon Durumu',
        description: 'Onaylı, bekleyen, iptal edilmiş rezervasyonların takibi ve durum yönetimi.',
      },
    ],
  },
  {
    category: 'Ödeme ve Fatura',
    items: [
      {
        title: 'Güvenli Ödeme',
        description: 'Entegre ödeme sistemleri ile güvenli ödeme alımı. Peşin ve veresiye seçenekleri.',
      },
      {
        title: 'Fatura Yönetimi',
        description: 'Otomatik fatura oluşturma, e-fatura entegrasyonu ve fatura takibi.',
      },
      {
        title: 'Ödeme Takibi',
        description: 'Ödeme geçmişi, bekleyen ödemeler ve ödeme planı yönetimi.',
      },
    ],
  },
  {
    category: 'Otel Yönetimi',
    items: [
      {
        title: 'Otel Tanımları',
        description: 'Otel bilgileri, oda tipleri, fiyatlandırma ve görsel yönetimi.',
      },
      {
        title: 'Oda Rezervasyonu',
        description: 'Oda müsaitlik kontrolü, rezervasyon yönetimi ve oda bazlı fiyatlandırma.',
      },
      {
        title: 'Otel Entegrasyonu',
        description: 'Tur rezervasyonları ile otel rezervasyonlarının entegre yönetimi.',
      },
    ],
  },
  {
    category: 'Muhasebe ve Raporlama',
    items: [
      {
        title: 'Satış Raporları',
        description: 'Detaylı satış analizleri, dönem bazlı raporlar ve performans metrikleri.',
      },
      {
        title: 'Komisyon Takibi',
        description: 'Komisyon hesaplama, takip ve ödeme yönetimi.',
      },
      {
        title: 'Gelir-Gider Analizi',
        description: 'Kapsamlı finansal analiz, kar-zarar raporları ve bütçe takibi.',
      },
      {
        title: 'Ajans Defteri',
        description: 'Tüm finansal işlemlerin kaydı, ajans defteri ve muhasebe entegrasyonu.',
      },
    ],
  },
  {
    category: 'Müşteri Yönetimi',
    items: [
      {
        title: 'Müşteri Kayıtları',
        description: 'Müşteri bilgileri, iletişim detayları ve rezervasyon geçmişi.',
      },
      {
        title: 'Müşteri Segmentasyonu',
        description: 'Müşteri grupları, özel fiyatlandırma ve kampanya yönetimi.',
      },
      {
        title: 'İletişim Yönetimi',
        description: 'E-posta ve SMS bildirimleri, otomatik hatırlatmalar.',
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="fixed inset-0 bg-gradient-radial from-zinc-900 to-black pointer-events-none"></div>

      {/* Header */}
      <div className="relative pt-32 pb-20 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            Kapsamlı Çözümler
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms]">
            Özellikler
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Acentigo, acentenizin tüm ihtiyaçlarını karşılayan kapsamlı bir tur satış sistemidir.
            İşte sistemimizin sunduğu modern özellikler:
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-20">
        <div className="space-y-20">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${300 + categoryIndex * 100}ms` }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
                  {category.category}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
