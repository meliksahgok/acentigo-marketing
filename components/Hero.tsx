import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 md:py-28 relative overflow-hidden">
      {/* Orange accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F75700]/20 via-transparent to-[#FF8C42]/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Acenteniz İçin
            <br />
            <span className="text-[#F75700]">Profesyonel Tur Satış Sistemi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Tur yönetimi, rezervasyon takibi, ödeme entegrasyonu ve muhasebe işlemlerinizi 
            tek platformda yönetin. Modern, güvenli ve kullanıcı dostu çözüm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-[#F75700] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FF8C42] transition-colors text-center shadow-lg shadow-[#F75700]/30"
            >
              Demo Talep Et
            </Link>
            <Link
              href="/ozellikler"
              className="bg-transparent border-2 border-[#F75700] text-[#F75700] px-8 py-3 rounded-lg font-semibold hover:bg-[#F75700] hover:text-white transition-colors text-center"
            >
              Özellikleri İncele
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
