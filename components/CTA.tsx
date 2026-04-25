'use client'
import { useInView } from '@/hooks/useInView'

export default function CTA() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section id="iletisim" className="py-28 md:py-40 bg-dark-950 relative overflow-hidden">
      {/* Architectural background lines */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grid lines */}
          {[...Array(14)].map((_, i) => (
            <line
              key={`v${i}`}
              x1={100 * i} y1="0" x2={100 * i} y2="600"
              stroke="rgba(200,153,42,0.04)"
              strokeWidth="0.5"
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <line
              key={`h${i}`}
              x1="0" y1={100 * i} x2="1400" y2={100 * i}
              stroke="rgba(200,153,42,0.04)"
              strokeWidth="0.5"
            />
          ))}
          {/* Abstract building outline */}
          <path
            d="M 200 500 L 200 150 L 400 150 L 400 100 L 700 100 L 700 150 L 900 150 L 900 200 L 1200 200 L 1200 500"
            stroke="rgba(200,153,42,0.08)"
            strokeWidth="0.8"
            fill="none"
            strokeDasharray={inView ? '2000' : '0 2000'}
            strokeDashoffset={inView ? '0' : '2000'}
            style={{ transition: 'stroke-dasharray 2s ease, stroke-dashoffset 2s ease' }}
          />
          {/* Horizontal accent */}
          <line x1="0" y1="500" x2="1400" y2="500" stroke="rgba(200,153,42,0.06)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(200,153,42,0.05)_0%,transparent_70%)]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`flex items-center justify-center gap-3 mb-10 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="h-px w-12 bg-gold/30" />
            <span className="section-label">Projenizi Başlatalım</span>
            <div className="h-px w-12 bg-gold/30" />
          </div>

          <h2
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter text-white mb-6 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Yeni projenizi<br />
            <span className="text-gradient-gold">birlikte planlayalım.</span>
          </h2>

          <p
            className={`text-white/45 text-base md:text-lg leading-relaxed mb-12 max-w-lg mx-auto transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Arsanız, fikriniz veya mevcut yapınız için profesyonel keşif ve uygulama süreci
            başlatalım.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a href="mailto:info@sefiryapi.com" className="btn-primary text-sm px-8 py-4">
              Teklif Al
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="tel:+905001234567" className="btn-outline text-sm px-8 py-4">
              Hemen Ara
            </a>
          </div>

          {/* Contact info row */}
          <div
            className={`mt-16 pt-10 border-t border-white/6 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm transition-all duration-700 delay-400 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="mailto:info@sefiryapi.com"
              className="text-white/35 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="2" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1" />
                <path d="M1 4L7 8.5L13 4" stroke="currentColor" strokeWidth="1" />
              </svg>
              info@sefiryapi.com
            </a>
            <div className="h-px w-4 bg-white/15 hidden sm:block rotate-90" />
            <a
              href="tel:+905001234567"
              className="text-white/35 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 1h3l1 3-1.5 1.5C5.5 7.5 6.5 8.5 8.5 9.5L10 8l3 1v3a1 1 0 0 1-1 1C5 13 1 9 1 2a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1" />
              </svg>
              +90 500 123 45 67
            </a>
            <div className="h-px w-4 bg-white/15 hidden sm:block rotate-90" />
            <span className="text-white/25 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4.24 1 2 3.24 2 6c0 3.5 5 8 5 8s5-4.5 5-8c0-2.76-2.24-5-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
              İstanbul & Türkiye Geneli
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
