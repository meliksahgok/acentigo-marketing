'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setErrorMessage(data.error ?? 'Gönderilemedi. Lütfen tekrar deneyin.')
        setStatus('error')
        return
      }
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch {
      setErrorMessage('Bağlantı hatası. İnternetinizi kontrol edin.')
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="relative pt-24 md:pt-32 pb-12 md:pb-16 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">İletişim</h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              Sorularınız için bizimle iletişime geçin veya ücretsiz demo talep ederek platformu yakından tanıyın.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 align-start">
          <div className="lg:col-span-1 space-y-8 animate-fade-in-up [animation-delay:200ms]">
            <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-primary/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mr-3 text-sm">
                  ✉️
                </span>
                E-posta
              </h3>
              <a
                href="mailto:info@acentigo.com"
                className="text-gray-300 hover:text-primary transition-colors block text-lg"
              >
                info@acentigo.com
              </a>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-primary/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mr-3 text-sm">
                  📞
                </span>
                Telefon
              </h3>
              <a href="tel:+905531440661" className="text-gray-300 hover:text-primary transition-colors block text-lg">
                +90 (553) 144 06 61
              </a>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-primary/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary mr-3 text-sm">
                  🕒
                </span>
                Çalışma Saatleri
              </h3>
              <div className="text-gray-300">
                <p className="flex items-center gap-2">
                  <span>Pazartesi - Cuma:</span>
                  <span className="text-white">09:00 - 18:00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 animate-fade-in-up [animation-delay:400ms]">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8">Demo Talep Formu</h2>

              {status === 'success' ? (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 text-green-200 px-4 py-4 mb-6">
                  Başvurunuz alındı. En kısa sürede sizinle iletişime geçeceğiz.
                </div>
              ) : null}
              {status === 'error' && errorMessage ? (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 text-red-200 px-4 py-4 mb-6">
                  {errorMessage}
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors"
                    >
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="ornek@sirket.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="0555 123 45 67"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Şirket Adı
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Şirketinizin Adı"
                    />
                  </div>
                </div>
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Bize iletmek istediğiniz mesaj..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(229,61,21,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {status === 'loading' ? 'Gönderiliyor…' : 'Gönder'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
