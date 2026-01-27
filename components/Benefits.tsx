const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Hızlı ve Kolay',
    description: 'Kurulum gerektirmez, hemen kullanmaya başlayın. Sezgisel arayüz ile kolay öğrenilir ve hızlıca adapte olunur.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Üst Düzey Güvenlik',
    description: 'Verileriniz endüstri standartlarında şifrelenir. Düzenli yedekleme ve gelişmiş güvenlik önlemleri ile işiniz hep güvende.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Tam Ölçeklenebilir',
    description: 'Küçük acentelerden büyük işletmelere kadar her ölçekte sorunsuz çalışır. İşiniz büyüdükçe sistem sizinle büyür.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Maliyet Avantajı',
    description: 'Yazılım lisansı, sunucu ve bakım maliyetlerinden tasarruf edin. Sürpriz maliyetler olmadan şeffaf fiyatlandırma.',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 bg-black relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Neden <span className="text-primary">Acentigo?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Modern teknoloji ve kullanıcı odaklı tasarım ile işinizi bir adım öne taşıyın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6 p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 hover:border-primary/30 transition-all duration-300 group">
              <div className="shrink-0 w-16 h-16 rounded-xl bg-zinc-800 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
