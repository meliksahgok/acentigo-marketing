import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#F75700] to-[#FF8C42] text-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Acenteniz İçin
            <br />
            <span className="text-yellow-200">Profesyonel Tur Satış Sistemi</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Tur yönetimi, rezervasyon takibi, ödeme entegrasyonu ve muhasebe işlemlerinizi 
            tek platformda yönetin. Modern, güvenli ve kullanıcı dostu çözüm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-white text-[#F75700] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Demo Talep Et
            </Link>
            <Link
              href="/ozellikler"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Özellikleri İncele
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
