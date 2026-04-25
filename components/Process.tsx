'use client'
import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Keşif & İhtiyaç Analizi',
    desc: 'Projenizin kapsamını, bütçe beklentilerinizi ve teknik gereksinimlerinizi dinleyerek başlıyoruz. Saha incelemesi ve ön değerlendirme bu aşamada yapılır.',
    tags: ['Saha Ziyareti', 'İhtiyaç Raporu', 'Teknik Ön Değerlendirme'],
  },
  {
    num: '02',
    title: 'Mimari ve Teknik Planlama',
    desc: 'Mimari proje, statik hesaplar, mekanik ve elektrik planlaması hazırlanır. Gerekli resmi izinler bu süreçte alınır.',
    tags: ['Mimari Proje', 'Statik Hesap', 'İzin Süreci'],
  },
  {
    num: '03',
    title: 'Bütçe & İş Programı',
    desc: 'Şeffaf malzeme ve işçilik maliyetleri çıkarılır. Aşama aşama iş takvimi hazırlanarak proje başlangıcı planlanır.',
    tags: ['Keşif Cetveli', 'İş Programı', 'Sözleşme'],
  },
  {
    num: '04',
    title: 'Kaba İnşaat',
    desc: 'Temel, taşıyıcı sistem, çatı ve dış duvar çalışmaları gerçekleştirilir. Yapının iskelet kısmı tamamlanır.',
    tags: ['Temel', 'Taşıyıcı Sistem', 'Çatı'],
  },
  {
    num: '05',
    title: 'İnce İşler',
    desc: 'İç mekan kaplamaları, sıhhi tesisat, elektrik tesisatı, alçı ve boyama işlemleri titizlikle uygulanır.',
    tags: ['Kaplama', 'Tesisat', 'Elektrik', 'Boya'],
  },
  {
    num: '06',
    title: 'Kontrol & Teslim',
    desc: 'Son kontroller yapılır, eksikler tamamlanır. İskan belgesi alınarak proje sahibine resmi teslim gerçekleştirilir.',
    tags: ['Final Kontrol', 'İskan', 'Anahtar Teslim'],
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((el, i) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => [...prev, i])
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      const line = lineRef.current
      if (!section || !line) return
      const rect = section.getBoundingClientRect()
      const windowH = window.innerHeight
      const progress = Math.min(
        Math.max((-rect.top + windowH * 0.3) / (section.offsetHeight * 0.85), 0),
        1
      )
      line.style.height = `${progress * 100}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="surec" className="py-28 md:py-40 bg-dark-800 relative overflow-hidden">
      {/* Background blueprint lines */}
      <div className="absolute inset-0 bg-grid-gold bg-grid-lg opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 md:mb-28">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="section-label">Süreç</span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white">
              Projeyi Baştan Sona<br />
              <span className="text-gradient-gold">Biz Yönetiriz</span>
            </h2>
          </div>
          <div className="flex items-end lg:justify-end">
            <div className="max-w-sm">
              <div className="h-px w-full bg-gold/15 mb-4" />
              <p className="text-white/45 text-sm leading-relaxed">
                Her adım, önceden tanımlanmış standartlara göre yürütülür.
                Şeffaf iletişim ve sürekli raporlamayla her aşamadan haberdar olursunuz.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/6 hidden md:block timeline-line">
            <div ref={lineRef} className="timeline-progress" style={{ height: '0%' }} />
          </div>

          <div className="space-y-0 md:pl-12">
            {steps.map((step, i) => {
              const isVisible = visibleSteps.includes(i)
              return (
                <div
                  key={step.num}
                  ref={(el) => { stepRefs.current[i] = el }}
                  className={`group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 md:py-12 border-b border-white/5 last:border-0 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Step number */}
                  <div className="lg:col-span-2 flex items-start gap-4 md:gap-0">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute -left-[17px] mt-1 w-8 h-8 items-center justify-center">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          isVisible ? 'bg-gold' : 'bg-dark-400'
                        }`}
                        style={{ boxShadow: isVisible ? '0 0 12px rgba(200,153,42,0.5)' : 'none' }}
                      />
                    </div>
                    <span className="text-5xl md:text-6xl font-bold text-gold/8 group-hover:text-gold/15 transition-colors duration-400 leading-none select-none">
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-white/45 text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Tags */}
                  <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end items-start content-start">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 border border-white/8 text-white/40 text-xs font-mono tracking-wider group-hover:border-gold/20 group-hover:text-gold/50 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
