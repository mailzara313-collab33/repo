'use client'
import { useInView } from '@/hooks/useInView'
import { useCounter } from '@/hooks/useCounter'

const stats = [
  { value: 20, suffix: '+', label: 'Tamamlanan Proje', desc: 'Konuttan ticariye farklı proje tiplerinde' },
  { value: 15, suffix: '+', label: 'Uzman Ekip', desc: 'Mühendis, mimar ve usta kadrosu' },
  { value: 100, suffix: '%', label: 'Şantiye Takibi', desc: 'Sürekli kontrol ve günlük raporlama' },
  { value: 8, suffix: '', label: 'Yıllık Deneyim', desc: 'Sektörde kanıtlanmış birikim' },
]

function StatItem({ stat, started }: { stat: (typeof stats)[0]; started: boolean }) {
  const count = useCounter(stat.value, 2200, started)
  return (
    <div className="py-10 md:py-14 px-8 md:px-10 group">
      <div className="mb-3 flex items-end gap-1">
        <span className="text-5xl md:text-6xl xl:text-7xl font-bold text-gradient-gold stat-number leading-none">
          {count}
        </span>
        <span className="text-3xl md:text-4xl font-bold text-gold/60 mb-1">{stat.suffix}</span>
      </div>
      <div className="h-px w-8 bg-gold/30 mb-4 group-hover:w-14 transition-all duration-500" />
      <h3 className="text-white font-semibold text-base mb-1">{stat.label}</h3>
      <p className="text-white/35 text-sm leading-relaxed">{stat.desc}</p>
    </div>
  )
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section className="py-0 bg-dark-800 relative overflow-hidden">
      {/* Top architectural line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(200,153,42,0.03)_0%,transparent_70%)]" />

      <div
        className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10"
        ref={ref}
      >
        {/* Section label */}
        <div className="flex items-center gap-4 pt-16 pb-4">
          <span className="section-label">Rakamlarla Sefir</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/5">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} started={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
