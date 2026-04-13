import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { buildPageMetadata } from '@/lib/buildPageMetadata'
import { organizationJsonLd } from '@/lib/site'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props) {
  return buildPageMetadata(params.locale, 'contact', 'contact')
}

export default async function ContactPage({ params }: Props) {
  setRequestLocale(params.locale)
  const t = await getTranslations('contactPage')
  const to = organizationJsonLd.email
  const mailtoHref = `mailto:${to}?subject=${encodeURIComponent(t('mailSubject'))}&body=${encodeURIComponent(t('mailBody'))}`

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="relative pt-24 md:pt-32 pb-12 md:pb-16 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">{t('intro')}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 align-start">
          <div className="lg:col-span-1 space-y-8 animate-fade-in-up [animation-delay:200ms]">
            <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-primary/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mr-3 text-sm">✉️</span>
                {t('emailTitle')}
              </h3>
              <a href={`mailto:${to}`} className="text-gray-300 hover:text-primary transition-colors block text-lg">
                {to}
              </a>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-primary/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mr-3 text-sm">📞</span>
                {t('phoneTitle')}
              </h3>
              <a href="tel:+905531440661" className="text-gray-300 hover:text-primary transition-colors block text-lg">
                +90 (553) 144 06 61
              </a>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-primary/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mr-3 text-sm">🕒</span>
                {t('hoursTitle')}
              </h3>
              <div className="text-gray-300">
                <p className="flex flex-col gap-1">
                  <span>{t('hoursLine')}</span>
                  <span className="text-white">{t('hoursValue')}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 animate-fade-in-up [animation-delay:400ms]">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">{t('ctaTitle')}</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">{t('ctaDescription')}</p>
              <a
                href={mailtoHref}
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(229,61,21,0.4)] transition-all duration-300"
              >
                {t('mailButton')}
              </a>
              <p className="mt-6 text-sm text-gray-500">{t('mailHint')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
