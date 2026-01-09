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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    window.location.href = `mailto:info@acentigo.com?subject=Demo Talep&body=İsim: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0AŞirket: ${formData.company}%0D%0AMesaj: ${formData.message}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            İletişim
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Demo talep etmek veya sorularınız için bizimle iletişime geçin
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 space-y-6 border border-gray-200">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">E-posta</h3>
                <a
                  href="mailto:info@acentigo.com"
                  className="text-[#F75700] hover:text-[#FF8C42] transition-colors"
                >
                  info@acentigo.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Telefon</h3>
                <a
                  href="tel:+905551234567"
                  className="text-[#F75700] hover:text-[#FF8C42] transition-colors"
                >
                  +90 (555) 123 45 67
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Çalışma Saatleri</h3>
                <p className="text-gray-600 text-sm">
                  Pazartesi - Cuma: 09:00 - 18:00
                  <br />
                  Cumartesi: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 md:p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-6">
                Demo Talep Formu
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F75700] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F75700] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F75700] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Şirket Adı
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F75700] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F75700] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F75700] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF8C42] transition-colors shadow-lg shadow-[#F75700]/30"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
