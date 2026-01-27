'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'

const HeroBackground = dynamic(() => import('./HeroBackground'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white pt-20">
      {/* Three.js Background */}
      <HeroBackground />

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-0 pointer-events-none"></div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          <div className="inline-block animate-fade-in-up">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-gray-300 backdrop-blur-sm">
              🚀 Acenteniz için en gelişmiş çözüm
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up [animation-delay:200ms]">
            Acenteniz İçin
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 drop-shadow-[0_0_30px_rgba(229,61,21,0.3)]">
              Profesyonel Tur Satış Sistemi
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            Tur yönetimi, rezervasyon takibi, ödeme entegrasyonu ve muhasebe işlemlerinizi
            tek platformda yönetin. Modern, güvenli ve kullanıcı dostu.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-fade-in-up [animation-delay:600ms]">
            <Link
              href="/iletisim"
              className="group relative px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(229,61,21,0.5)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative">Demo Talep Et</span>
            </Link>

            <Link
              href="/ozellikler"
              className="group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105"
            >
              Özellikleri İncele
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
