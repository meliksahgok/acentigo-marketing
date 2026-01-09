const features = [
  {
    icon: '✈️',
    title: 'Tur Yönetimi',
    description: 'Tur oluşturma, tarih yönetimi, fiyatlandırma ve kontenjan takibi. Yetişkin, çocuk ve bebek fiyatlandırması desteği ile esnek yapılandırma.',
  },
  {
    icon: '📅',
    title: 'Rezervasyon Sistemi',
    description: 'Online rezervasyon formu, müşteri bilgileri, yaş doğrulama ve kapasite kontrolü ile sorunsuz rezervasyon süreci.',
  },
  {
    icon: '💳',
    title: 'Ödeme Entegrasyonu',
    description: 'Güvenli ödeme altyapısı, peşin/veresiye seçenekleri, ödeme takibi ve otomatik fatura yönetimi.',
  },
  {
    icon: '🏨',
    title: 'Otel Yönetimi',
    description: 'Otel tanımları, oda yönetimi, fiyatlandırma ve rezervasyon entegrasyonu ile kapsamlı otel yönetimi.',
  },
  {
    icon: '📊',
    title: 'Muhasebe & Raporlama',
    description: 'Detaylı satış raporları, komisyon takibi, gelir-gider analizleri, ajans defteri ve nakit kasa yönetimi.',
  },
  {
    icon: '👥',
    title: 'Müşteri Yönetimi',
    description: 'Müşteri kayıtları, rezervasyon geçmişi, iletişim bilgileri ve müşteri segmentasyonu ile ilişki yönetimi.',
  },
  {
    icon: '🚌',
    title: 'Transfer & Araç',
    description: 'Transfer rezervasyonları, araç tanımları ve transfer fiyatlandırması ile ulaşım yönetimi.',
  },
  {
    icon: '📱',
    title: 'Mobil Uyumlu',
    description: 'Responsive tasarım ile tüm cihazlardan erişim. Müşterileriniz her yerden rezervasyon yapabilir.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Kapsamlı Özellikler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acenteniz için ihtiyacınız olan tüm araçlar tek platformda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all border border-gray-200 hover:border-[#F75700] group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#F75700] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
