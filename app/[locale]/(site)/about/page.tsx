import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { buildPageMetadata } from '@/lib/buildPageMetadata'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props) {
  return buildPageMetadata(params.locale, 'about', 'about')
}

export default async function AboutPage({ params }: Props) {
  setRequestLocale(params.locale)
  const t = await getTranslations('aboutPage')
  const values = t.raw('values') as { title: string; desc: string; icon: string }[]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      <div className="relative pt-24 md:pt-32 pb-12 md:pb-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm mb-6 animate-fade-in-up backdrop-blur-sm">
              {t('badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms]">{t('title')}</h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">{t('intro')}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-20 relative z-10">
        <div className="space-y-12 animate-fade-in-up [animation-delay:300ms]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('missionTitle')}</h2>
              <p className="text-gray-400 leading-relaxed">{t('missionBody')}</p>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('visionTitle')}</h2>
              <p className="text-gray-400 leading-relaxed">{t('visionBody')}</p>
            </section>
          </div>

          <section className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('valuesTitle')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-start p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <span className="text-3xl mr-4">{val.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{val.title}</h3>
                    <p className="text-sm text-gray-400">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center py-12">
            <h2 className="text-3xl font-bold text-white mb-6">{t('whyTitle')}</h2>
            <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8 text-lg">{t('whyBody')}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-hover hover:scale-105 transition-all shadow-[0_0_20px_rgba(229,61,21,0.4)]"
            >
              <span>{t('cta')}</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
