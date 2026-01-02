const features = [
  {
    icon: '🚀',
    title: 'Multi-Tenant SaaS',
    description: 'Her müşteriniz için ayrı, izole ve güvenli bir platform. Tek kod tabanı, sınırsız ölçeklenebilirlik.',
  },
  {
    icon: '💼',
    title: 'Kapsamlı Yönetim',
    description: 'Tur rezervasyonları, otel yönetimi, ödeme entegrasyonları, muhasebe ve raporlama - hepsi bir arada.',
  },
  {
    icon: '🔒',
    title: 'Güvenli ve Ölçeklenebilir',
    description: 'Enterprise-grade güvenlik, otomatik yedekleme ve yüksek performanslı altyapı ile işiniz güvende.',
  },
  {
    icon: '📊',
    title: 'Gelişmiş Raporlama',
    description: 'Detaylı satış raporları, komisyon takibi, gelir analizleri ve daha fazlası ile işinizi optimize edin.',
  },
  {
    icon: '💰',
    title: 'Esnek Fiyatlandırma',
    description: 'Standart ve Enterprise plan seçenekleri ile ihtiyacınıza en uygun paketi seçin. Deneme süresi mevcut.',
  },
  {
    icon: '🌐',
    title: 'Özelleştirilebilir',
    description: 'Kendi domain\'inizi kullanın, markanıza özel görünüm ve tema seçenekleri ile markanızı yansıtın.',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-5 text-gray-800">Neden AcentiGo?</h2>
        <p className="text-xl text-center text-gray-600 mb-10">
          Modern, güvenli ve ölçeklenebilir SaaS çözümü ile turizm işletmenizi dijitalleştirin
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-xl shadow-md text-center"
            >
              <h3 className="text-2xl font-semibold text-[#F75700] mb-4">
                {feature.icon} {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

