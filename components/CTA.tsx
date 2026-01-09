import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Orange accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F75700]/30 via-transparent to-[#FF8C42]/30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sistemimizi İnceleyin
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Demo hesap ile tüm özellikleri keşfedin veya bizimle iletişime geçin. 
          Size özel çözümler sunmaktan mutluluk duyarız.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/iletisim"
            className="bg-[#F75700] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FF8C42] transition-colors shadow-lg shadow-[#F75700]/30"
          >
            Demo Talep Et
          </Link>
          <Link
            href="/iletisim"
            className="bg-transparent border-2 border-[#F75700] text-[#F75700] px-8 py-3 rounded-lg font-semibold hover:bg-[#F75700] hover:text-white transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </section>
  )
}
