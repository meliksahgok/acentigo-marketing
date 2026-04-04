import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const LiquidMetalSection = dynamic(() => import('@/components/LiquidMetalSection'), { ssr: false })

export const metadata: Metadata = {
    title: 'Teknolojimiz - Acentigo',
    description: 'Acentigo altyapısı hakkında bilgi edinin. Bulut tabanlı sistem, CDN, güvenlik ve performans.',
}

const techFeatures = [
    {
        title: 'Bulut Tabanlı Altyapı',
        description: 'Sistemimiz %100 bulut üzerinde çalışır. Sunucu kurulumu, bakım veya güncelleme derdi yok. Her zaman en güncel sürüme otomatik erişim.',
        icon: '☁️',
    },
    {
        title: 'Global CDN Ağı',
        description: 'Dünya genelinde dağıtılmış CDN sunucuları sayesinde, nerede olursanız olun milisaniyeler içinde veri erişimi sağlanır.',
        icon: '🌍',
    },
    {
        title: 'Yüksek Performans',
        description: 'Optimize edilmiş veritabanı sorguları ve önbellekleme mekanizmaları ile saniyenin altında sayfa yükleme süreleri.',
        icon: '⚡',
    },
    {
        title: 'Otomatik Ölçeklendirme',
        description: 'Yoğun dönemlerde sistem otomatik olarak kapasitesini artırır. Yavaşlama veya çökme riski minimum.',
        icon: '📈',
    },
    {
        title: '7/24 Erişilebilirlik',
        description: '%99.9 uptime garantisi ile sisteminiz her zaman çalışır durumda. Planlı bakımlar bile sıfır kesinti ile gerçekleştirilir.',
        icon: '🔄',
    },
    {
        title: 'Güvenlik Öncelikleri',
        description: 'SSL/TLS şifreleme, DDoS koruması, düzenli güvenlik denetimleri ve KVKK uyumlu veri saklama politikaları.',
        icon: '🔒',
    },
]

export default function TechnologyPage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

            {/* Header */}
            <div className="relative pt-24 md:pt-32 pb-12 md:pb-20 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                    <div className="text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
                            Altyapı & Performans
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms]">
                            Teknolojimiz
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                            Acentigo, en son teknolojilerle donatılmış, yüksek performanslı ve güvenli bir bulut altyapısı üzerine inşa edilmiştir.
                        </p>
                    </div>
                </div>
            </div>

            {/* Liquid Metal Visual Section */}
            <div className="relative py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 animate-fade-in-up">
                            <LiquidMetalSection />
                        </div>
                        <div className="order-1 lg:order-2 animate-fade-in-up [animation-delay:200ms]">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Akışkan, <span className="text-primary">Esnek</span>, Güçlü
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Tıpkı bu görsel gibi, Acentigo altyapısı da dinamik ve esnektir.
                                İhtiyaçlarınıza göre şekil alır, yoğunluğa göre genişler ve her koşulda
                                performansından ödün vermez.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Dinamik kaynak yönetimi
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Anlık ölçeklendirme
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Kesintisiz güncellemeler
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Features Grid */}
            <div className="relative py-20 border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Neden Acentigo Altyapısı?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Modern turizm işletmeleri için tasarlanmış, kurumsal düzeyde teknoloji.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 animate-fade-in-up"
                                style={{ animationDelay: `${300 + index * 100}ms` }}
                            >
                                <span className="text-4xl mb-4 block">{feature.icon}</span>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative py-20 border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '%99.9', label: 'Uptime Garantisi' },
                            { value: '<100ms', label: 'Ortalama Yanıt Süresi' },
                            { value: '50+', label: 'Global CDN Noktası' },
                            { value: '256-bit', label: 'SSL Şifreleme' },
                        ].map((stat, index) => (
                            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
