export default function CTA() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="container mx-auto px-5 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Sistemimizi İnceleyin</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Demo hesap ile tüm özellikleri keşfedin veya bizimle iletişime geçin
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@acentigo.com"
            className="inline-block px-8 py-3 bg-[#F75700] text-white text-base font-semibold rounded-lg transition-colors hover:bg-[#c2410c]"
          >
            Demo Talep Et
          </a>
          <a
            href="tel:+905551234567"
            className="inline-block px-8 py-3 bg-gray-100 text-gray-800 text-base font-semibold rounded-lg transition-colors hover:bg-gray-200"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  )
}

