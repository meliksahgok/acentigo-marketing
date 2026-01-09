import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#F75700] to-[#FF8C42] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sistemimizi İnceleyin
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Demo hesap ile tüm özellikleri keşfedin veya bizimle iletişime geçin. 
          Size özel çözümler sunmaktan mutluluk duyarız.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/iletisim"
            className="bg-white text-[#F75700] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Demo Talep Et
          </Link>
          <Link
            href="/iletisim"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </section>
  )
}
