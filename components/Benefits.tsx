const benefits = [
  {
    icon: '⚡',
    title: 'Hızlı ve Kolay',
    description: 'Kurulum gerektirmez, hemen kullanmaya başlayın. Sezgisel arayüz ile kolay öğrenilir.',
  },
  {
    icon: '🔒',
    title: 'Güvenli',
    description: 'Verileriniz güvende. Düzenli yedekleme ve güvenlik önlemleri ile işiniz korunur.',
  },
  {
    icon: '📈',
    title: 'Ölçeklenebilir',
    description: 'Küçük acentelerden büyük işletmelere kadar her ölçekte çalışır.',
  },
  {
    icon: '💰',
    title: 'Maliyet Etkin',
    description: 'Yazılım lisansı, sunucu ve bakım maliyetlerinden tasarruf edin.',
  },
]

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Neden AcentiGo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern teknoloji ile işinizi büyütün
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-200 hover:border-[#F75700] hover:shadow-lg transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#F75700] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
