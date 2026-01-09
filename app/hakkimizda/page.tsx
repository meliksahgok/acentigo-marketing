import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hakkımızda - AcentiGo',
  description: 'AcentiGo hakkında bilgi edinin. Turizm sektöründe dijital dönüşüm için çalışıyoruz.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hakkımızda
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Turizm sektöründe dijital dönüşüm için çalışıyoruz
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              AcentiGo olarak, turizm acentelerinin dijital dönüşümüne öncülük ediyoruz. 
              Modern teknoloji ile geleneksel turizm işletmelerini güçlendirerek, 
              sektörde verimliliği artırmayı ve müşteri deneyimini iyileştirmeyi hedefliyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
            <p className="text-gray-600 leading-relaxed">
              Türkiye'nin önde gelen tur satış sistemi olmak ve acentelerin 
              başarısına katkıda bulunmak. Teknoloji ile turizm sektörünü 
              birleştirerek, sürdürülebilir büyüme sağlamak.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#F75700] mr-2">•</span>
                <span><strong className="text-gray-900">Güvenilirlik:</strong> Müşterilerimizin verilerini ve işlerini güvende tutmak en öncelikli değerimizdir.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#F75700] mr-2">•</span>
                <span><strong className="text-gray-900">İnovasyon:</strong> Sürekli gelişen teknoloji ile sistemimizi güncel tutuyoruz.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#F75700] mr-2">•</span>
                <span><strong className="text-gray-900">Müşteri Odaklılık:</strong> Her kararımızda müşterilerimizin ihtiyaçlarını ön planda tutuyoruz.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#F75700] mr-2">•</span>
                <span><strong className="text-gray-900">Basitlik:</strong> Karmaşık işlemleri basit ve anlaşılır hale getiriyoruz.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Neden AcentiGo?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              AcentiGo, turizm acentelerinin ihtiyaçlarını derinlemesine anlayarak geliştirilmiştir. 
              Sistemimiz, sektördeki deneyimimiz ve teknoloji uzmanlığımızın birleşimidir.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Küçük acentelerden büyük işletmelere kadar her ölçekte çalışan, 
              ölçeklenebilir ve güvenilir bir çözüm sunuyoruz.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200">
            <Link
              href="/iletisim"
              className="inline-block bg-[#F75700] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c2410c] transition-colors"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
