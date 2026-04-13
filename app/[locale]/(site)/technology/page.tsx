import dynamic from 'next/dynamic'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { buildPageMetadata } from '@/lib/buildPageMetadata'

const LiquidMetalSection = dynamic(() => import('@/components/LiquidMetalSection'), { ssr: false })

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props) {
  return buildPageMetadata(params.locale, 'technology', 'technology')
}

export default async function TechnologyPage({ params }: Props) {
  setRequestLocale(params.locale)
  const t = await getTranslations('technologyPage')
  const features = t.raw('features') as { icon: string; title: string; description: string }[]
  const stats = t.raw('stats') as { value: string; label: string }[]
  const bullets = t.raw('visualBullets') as string[]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative pt-24 md:pt-32 pb-12 md:pb-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
              {t('badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms]">{t('title')}</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">{t('intro')}</p>
          </div>
        </div>
      </div>

      <div className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <LiquidMetalSection />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up [animation-delay:200ms]">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('visualTitle')}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">{t('visualBody')}</p>
              <ul className="space-y-3 text-gray-300">
                {bullets.map((line, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full shrink-0"></span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('gridTitle')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('gridSub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <p className="text-center text-gray-500 text-sm mb-8">{t('statsTitle')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-xs mt-8 max-w-xl mx-auto">{t('statsNote')}</p>
        </div>
      </div>
    </div>
  )
}
