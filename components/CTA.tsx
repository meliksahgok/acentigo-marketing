import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-primary"></div>

      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>

      {/** Glowing orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/40 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight animate-fade-in-up">
          İşinizi Büyütmeye <br className="hidden md:block" />
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Hazır Mısınız?</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          Acentigo ile operasyonlarınızı dijitalleştirin, verimliliğinizi artırın.
          Hemen ücretsiz demo talep edin, farkı yaşayın.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:400ms]">
          <Link
            href="/iletisim"
            className="group relative bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <span className="relative z-10">Demo Talep Et</span>
            <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>

          <Link
            href="/iletisim"
            className="group px-10 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold text-lg transition-all hover:bg-white/10 hover:border-white hover:scale-105 backdrop-blur-sm"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </section>
  )
}
