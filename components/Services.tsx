'use client'
import { useReveal } from '@/hooks/useReveal'

const services = [
  {
    num: '01',
    title: 'Anahtar Teslim İnşaat',
    desc: 'Projenizin ilk taşından anahtarınıza kadar tüm süreci tek elden yönetiyoruz. Planlama, uygulama, kontrol.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Villa & Özel Konut Projeleri',
    desc: 'Müşteriye özel mimari tasarım ve uygulama. Her detay, konfor ve estetiği bir arada sunmak için planlanır.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Ticari Yapılar',
    desc: 'Ofis, mağaza, otel, alışveriş merkezi — kurumsal kimliğinizi yansıtan işlevsel ve modern ticari mekanlar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 20h20M4 20V10l8-6 8 6v10M8 20v-5h3v5M13 20v-5h3v5" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Tadilat & Yenileme',
    desc: 'Mevcut yapıyı yeniden değerlendiriyoruz. Mimari uyum, malzeme kalitesi ve işçilikle yapınızı dönüştürüyoruz.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Kaba İnşaat Uygulamaları',
    desc: 'Temel, kolon, kiriş, döşeme ve duvar sistemleri — yapısal sağlamlık her şeyin önünde gelir.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="14" width="20" height="8" />
        <path d="M6 14V6M10 14V6M14 14V6M18 14V6" />
        <line x1="2" y1="6" x2="22" y2="6" />
        <line x1="4" y1="6" x2="4" y2="2" />
        <line x1="20" y1="6" x2="20" y2="2" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'İnce İşler & Son Teslim',
    desc: 'Alçı, boya, döşeme, sıhhi tesisat ve elektrik montajı. Son dokunuşlar projenizin değerini belirler.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Mimari Uygulama',
    desc: 'Mimari projeyi sahaya taşıyoruz. Tasarımı eksiksiz hayata geçiren teknik bilgi ve deneyimle.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    num: '08',
    title: 'Şantiye Yönetimi',
    desc: 'Sürekli saha kontrolü, iş programı takibi ve raporlama. Her aşamada şeffaf iletişim.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
]

export default function Services() {
  const containerRef = useReveal()

  return (
    <section id="hizmetler" className="py-28 md:py-40 bg-dark-900 relative">
      <div className="absolute inset-0 bg-grid-white bg-grid-lg opacity-100" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 md:mb-28" ref={containerRef}>
          <div>
            <div className="flex items-center gap-3 mb-6" data-reveal>
              <span className="section-label">Hizmetler</span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white"
              data-reveal
              data-delay="100"
            >
              Her Yapı Türü,<br />
              <span className="text-gradient-gold">Tek Adres</span>
            </h2>
          </div>
          <div className="flex items-end" data-reveal data-delay="200">
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
              Konuttan ticariye, kabadan inceye — tüm inşaat hizmetlerini entegre bir sistem
              içinde sunuyoruz.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
        >
          {services.map((s, i) => (
            <div
              key={s.num}
              className="bg-dark-900 p-7 md:p-8 card-glow border border-transparent group cursor-default"
              data-reveal
              data-delay={`${(i % 4) * 100}`}
            >
              {/* Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-gold/50 tracking-widest">{s.num}</span>
                <div className="text-gold/40 group-hover:text-gold transition-colors duration-300">
                  {s.icon}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/6 mb-6 group-hover:bg-gold/20 transition-colors duration-300" />

              <h3 className="text-white font-semibold text-base mb-3 leading-snug group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>

              {/* Hover arrow */}
              <div className="mt-6 flex items-center gap-2 text-gold/0 group-hover:text-gold/60 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6H11M7 2L11 6L7 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs tracking-wide">Detay</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
