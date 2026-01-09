import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Özellikler - AcentiGo',
  description: 'AcentiGo tur satış sisteminin tüm özelliklerini keşfedin. Tur yönetimi, rezervasyon, ödeme, muhasebe ve daha fazlası.',
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Özellikler
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            AcentiGo, acentenizin tüm ihtiyaçlarını karşılayan kapsamlı bir tur satış sistemidir. 
            İşte sistemimizin sunduğu özellikler:
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
        <div className="space-y-16">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#F75700] hover:shadow-lg transition-all group"
                  >
                    <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#F75700] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
