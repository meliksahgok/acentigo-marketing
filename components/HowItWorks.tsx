const steps = [
  {
    number: '01',
    title: 'Hesap Oluşturun',
    description: 'Hızlı ve kolay kayıt işlemi ile hemen başlayın. Demo hesap ile tüm özellikleri deneyebilirsiniz.',
  },
  {
    number: '02',
    title: 'Turlarınızı Ekleyin',
    description: 'Tur tanımlarınızı oluşturun, tarihleri belirleyin, fiyatlandırma yapın ve kontenjanları ayarlayın.',
  },
  {
    number: '03',
    title: 'Rezervasyon Alın',
    description: 'Müşterileriniz online rezervasyon formu ile kolayca rezervasyon yapabilir. Tüm işlemler otomatik takip edilir.',
  },
  {
    number: '04',
    title: 'Yönetin ve Raporlayın',
    description: 'Rezervasyonları yönetin, ödemeleri takip edin ve detaylı raporlarla işinizi analiz edin.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Sadece 4 adımda acentenizi dijitalleştirin
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-[#F75700] to-[#FF8C42] text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-[#F75700]/30">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
