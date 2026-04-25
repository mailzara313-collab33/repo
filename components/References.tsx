'use client'
import { useReveal } from '@/hooks/useReveal'

const references = [
  {
    name: 'Akdeniz Villa Projesi',
    location: 'Antalya, Konyaaltı',
    type: 'Villa & Özel Konut',
    status: 'Tamamlandı',
    area: '320 m²',
    year: '2024',
    desc: '4+1 müstakil villa. Bahçe düzenlemesi, havuz yapımı ve iç dekorasyon dahil tam anahtar teslim uygulama.',
  },
  {
    name: 'Meridian Ofis Katı',
    location: 'İstanbul, Ataşehir',
    type: 'Ofis Tadilat',
    status: 'Tamamlandı',
    area: '680 m²',
    year: '2024',
    desc: 'Açık plan ofis dönüşümü. Teknik altyapı yenileme, asma tavan sistemi ve kurumsal kimlik entegrasyonu.',
  },
  {
    name: 'Çamlık Konut Sitesi',
    location: 'Ankara, Çankaya',
    type: 'Toplu Konut',
    status: 'Tamamlandı',
    area: '2.400 m²',
    year: '2023',
    desc: '12 daireli butik site. Anahtar teslim, bodrum otopark ve sosyal alan dahil eksiksiz yapım.',
  },
  {
    name: 'Forma Showroom',
    location: 'İzmir, Alsancak',
    type: 'Ticari Yapı',
    status: 'Tamamlandı',
    area: '240 m²',
    year: '2023',
    desc: 'Mobilya showroom. Özel teknik aydınlatma sistemi, mantonel kaplama ve vitrin cephe çalışması.',
  },
  {
    name: 'Biga Endüstriyel Yapı',
    location: 'Çanakkale, Biga',
    type: 'Endüstriyel',
    status: 'Tamamlandı',
    area: '1.800 m²',
    year: '2023',
    desc: 'Üretim ve depolama tesisi. Çelik konstrüksiyon, yalıtım ve yangın güvenliği sistemleri dahil.',
  },
  {
    name: 'Sahil Rezidans',
    location: 'Muğla, Bodrum',
    type: 'Villa & Özel Konut',
    status: 'Devam Ediyor',
    area: '480 m²',
    year: '2025',
    desc: 'Deniz manzaralı lüks villa. Mimari proje uygulaması, peyzaj entegrasyonu ve özel havuz yapımı.',
  },
]

const statusColors: Record<string, string> = {
  'Tamamlandı': 'text-green-400/70 border-green-400/20',
  'Devam Ediyor': 'text-gold/70 border-gold/20',
}

export default function References() {
  const containerRef = useReveal()

  return (
    <section id="referanslar" className="py-28 md:py-40 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white bg-grid-lg" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-6" data-reveal>
            <span className="section-label">Referans Projeler</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white"
              data-reveal
              data-delay="100"
            >
              Teslim Ettiğimiz<br />
              <span className="text-gradient-gold">İşler Konuşuyor</span>
            </h2>
            <p className="text-white/45 text-sm md:text-base max-w-sm leading-relaxed" data-reveal data-delay="200">
              Her projeyi, proje sahibinin ihtiyaçlarına göre özel olarak planlıyor
              ve eksiksiz teslim ediyoruz.
            </p>
          </div>
        </div>

        {/* Reference cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/4">
          {references.map((ref, i) => (
            <div
              key={ref.name}
              className="bg-dark-950 p-7 md:p-8 group card-glow border border-transparent cursor-default"
              data-reveal
              data-delay={`${(i % 3) * 100}`}
            >
              {/* Status badge */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className={`text-xs font-mono tracking-widest border px-2.5 py-1 ${statusColors[ref.status] ?? 'text-white/40 border-white/10'}`}
                >
                  {ref.status}
                </span>
                <span className="text-gold/35 text-xs font-mono">{ref.year}</span>
              </div>

              {/* Project name */}
              <h3 className="text-white font-semibold text-lg leading-snug mb-2 group-hover:text-white transition-colors">
                {ref.name}
              </h3>

              {/* Meta row */}
              <div className="flex flex-wrap gap-3 mb-5">
                <div className="flex items-center gap-1.5 text-white/35 text-xs">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 0.5C3.07 0.5 1.5 2.07 1.5 4c0 2.5 3.5 6 3.5 6s3.5-3.5 3.5-6C8.5 2.07 6.93 0.5 5 0.5z" stroke="currentColor" strokeWidth="0.8" fill="none" />
                    <circle cx="5" cy="4" r="1" stroke="currentColor" strokeWidth="0.8" fill="none" />
                  </svg>
                  {ref.location}
                </div>
                <div className="flex items-center gap-1.5 text-white/35 text-xs">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <rect x="1" y="1" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
                    <path d="M1 4H9M4 1V9" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                  {ref.area}
                </div>
              </div>

              {/* Type */}
              <div className="mb-4">
                <span className="text-xs text-gold/50 font-mono tracking-wide border border-gold/12 px-2 py-1">
                  {ref.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed">{ref.desc}</p>

              {/* Bottom line */}
              <div className="mt-6 h-px w-0 bg-gold/25 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
