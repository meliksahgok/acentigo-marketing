export default function CTA() {
  return (
    <section className="bg-white py-20 text-center">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-4xl font-bold mb-5 text-gray-800">Platformumuzu Deneyin</h2>
        <p className="text-xl text-gray-600 mb-10">
          14 günlük ücretsiz deneme ile başlayın. Kredi kartı gerektirmez.
        </p>
        <a
          href="https://app.acentigo.com/auth/login"
          className="inline-block px-10 py-4 bg-[#F75700] text-white text-lg font-semibold rounded-lg transition-colors hover:bg-[#c2410c]"
        >
          SaaS Admin Paneline Giriş Yap
        </a>
      </div>
    </section>
  )
}

