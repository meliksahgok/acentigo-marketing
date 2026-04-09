import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { buildPageMetadata } from '@/lib/buildPageMetadata'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props) {
  return buildPageMetadata(params.locale, 'features', 'features')
}

export default async function FeaturesPage({ params }: Props) {
  setRequestLocale(params.locale)
  const t = await getTranslations('featuresPage')
  const categories = t.raw('categories') as {
    category: string
    items: { title: string; description: string }[]
  }[]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-radial from-zinc-900 to-black pointer-events-none"></div>

      <div className="relative pt-32 pb-20 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            {t('badge')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms]">{t('title')}</h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">{t('intro')}</p>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-20">
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-in-up"
              style={{ animationDelay: `${300 + categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">{category.category}</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
