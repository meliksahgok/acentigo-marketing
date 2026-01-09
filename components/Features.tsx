const features = [
  {
    icon: '✈️',
    title: 'Tur Yönetimi',
    description: 'Tur oluşturma, tarih yönetimi, fiyatlandırma ve kontenjan takibi. Yetişkin, çocuk ve bebek fiyatlandırması desteği.',
  },
  {
    icon: '📅',
    title: 'Rezervasyon Sistemi',
    description: 'Online rezervasyon formu, müşteri bilgileri, yaş doğrulama ve kapasite kontrolü ile sorunsuz rezervasyon süreci.',
  },
  {
    icon: '💳',
    title: 'Ödeme Entegrasyonu',
    description: 'Güvenli ödeme altyapısı, peşin/veresiye seçenekleri, ödeme takibi ve fatura yönetimi.',
  },
  {
    icon: '🏨',
    title: 'Otel Yönetimi',
    description: 'Otel tanımları, oda yönetimi, fiyatlandırma ve rezervasyon entegrasyonu.',
  },
  {
    icon: '📊',
    title: 'Muhasebe & Raporlama',
    description: 'Detaylı satış raporları, komisyon takibi, gelir-gider analizleri, ajans defteri ve nakit kasa yönetimi.',
  },
  {
    icon: '👥',
    title: 'Müşteri Yönetimi',
    description: 'Müşteri kayıtları, rezervasyon geçmişi, iletişim bilgileri ve müşteri segmentasyonu.',
  },
  {
    icon: '🚌',
    title: 'Transfer & Araç Yönetimi',
    description: 'Transfer rezervasyonları, araç tanımları ve transfer fiyatlandırması.',
  },
  {
    icon: '📱',
    title: 'Mobil Uyumlu',
    description: 'Responsive tasarım ile tüm cihazlardan erişim. Müşterileriniz her yerden rezervasyon yapabilir.',
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Özellikler</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Acenteniz için ihtiyacınız olan tüm araçlar tek platformda
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-[#F75700] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

