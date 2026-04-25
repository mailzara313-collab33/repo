'use client'
import { useInView } from '@/hooks/useInView'

const qualityBars = [
  { label: 'Yapısal Dayanım', value: 95 },
  { label: 'Malzeme Kalitesi', value: 90 },
  { label: 'Proje Teslim Hassasiyeti', value: 88 },
  { label: 'Şantiye Güvenliği', value: 98 },
  { label: 'İşçilik Standartları', value: 92 },
]

const layers = [
  { label: 'Zemin & Temel', depth: 'KAT -1', color: 'bg-gold/20', border: 'border-gold/30' },
  { label: 'Taşıyıcı Sistem', depth: 'KAT 01', color: 'bg-copper/15', border: 'border-copper/25' },
  { label: 'Kaba İnşaat', depth: 'KAT 02', color: 'bg-white/8', border: 'border-white/12' },
  { label: 'İnce İşler', depth: 'KAT 03', color: 'bg-white/5', border: 'border-white/8' },
  { label: 'Bitim & Teslim', depth: 'KAT 04', color: 'bg-gold/10', border: 'border-gold/20' },
]

const triangle = [
  { label: 'KALİTE', sub: 'Malzeme & İşçilik', top: true },
  { label: 'ZAMAN', sub: 'Programa Uyum', top: false },
  { label: 'MALİYET', sub: 'Şeffaf Bütçe', top: false },
]

export default function TechGraphics() {
  const { ref: ref1, inView: inView1 } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: ref2, inView: inView2 } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const { ref: ref3, inView: inView3 } = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="py-28 md:py-40 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gold bg-grid-lg opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="mb-20 md:mb-28 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold/30" />
            <span className="section-label">Sistem Görünümü</span>
            <div className="h-px w-12 bg-gold/30" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white">
            Yapı, Bir <span className="text-gradient-gold">Sistemdir</span>
          </h2>
          <p className="text-white/40 mt-6 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Her katman, her aşama ve her karar, bütünün bir parçasıdır. Disiplinli bir süreç
            yönetimiyle yapı kalitesini koruyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

          {/* ─── Panel 1: Quality bars ─── */}
          <div
            ref={ref1}
            className="bg-dark-800 border border-white/6 p-8 relative overflow-hidden"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/6">
              <div>
                <div className="section-label mb-1" style={{ fontSize: '0.6rem' }}>PANEL A</div>
                <h3 className="text-white text-sm font-semibold">Kalite Göstergeleri</h3>
              </div>
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            </div>

            <div className="space-y-5">
              {qualityBars.map((bar, i) => (
                <div key={bar.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/45">{bar.label}</span>
                    <span className="text-xs font-mono text-gold/70">{bar.value}</span>
                  </div>
                  <div className="h-px bg-white/8 relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold to-copper/80 transition-all duration-1000"
                      style={{
                        width: inView1 ? `${bar.value}%` : '0%',
                        transitionDelay: `${i * 120}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Corner decoration */}
            <div className="absolute bottom-4 right-4 text-gold/10 font-mono text-xs">SY-QUAL-01</div>
          </div>

          {/* ─── Panel 2: Layered build system ─── */}
          <div
            ref={ref2}
            className="bg-dark-800 border border-white/6 p-8 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/6">
              <div>
                <div className="section-label mb-1" style={{ fontSize: '0.6rem' }}>PANEL B</div>
                <h3 className="text-white text-sm font-semibold">Katmanlı Yapı Sistemi</h3>
              </div>
              <div className="w-2 h-2 bg-gold/60" />
            </div>

            <div className="space-y-2">
              {layers.map((layer, i) => (
                <div
                  key={layer.label}
                  className={`border ${layer.border} ${layer.color} px-4 py-3 flex items-center justify-between transition-all duration-700`}
                  style={{
                    opacity: inView2 ? 1 : 0,
                    transform: inView2 ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  <span className="text-white/70 text-sm">{layer.label}</span>
                  <span className="text-gold/50 text-xs font-mono">{layer.depth}</span>
                </div>
              ))}
            </div>

            {/* Vertical depth indicator */}
            <div className="absolute right-4 top-20 bottom-8 flex flex-col items-center gap-0.5">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-px h-3 bg-gold/10" />
              ))}
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="mt-1">
                <path d="M4 0L4 8M1 5L4 8L7 5" stroke="rgba(200,153,42,0.3)" strokeWidth="0.8" />
              </svg>
            </div>

            <div className="absolute bottom-4 right-4 text-gold/10 font-mono text-xs">SY-LAYR-02</div>
          </div>

          {/* ─── Panel 3: Quality/Time/Cost triangle ─── */}
          <div
            ref={ref3}
            className="bg-dark-800 border border-white/6 p-8 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/6">
              <div>
                <div className="section-label mb-1" style={{ fontSize: '0.6rem' }}>PANEL C</div>
                <h3 className="text-white text-sm font-semibold">Proje Dengesi</h3>
              </div>
              <div className="w-2 h-2 bg-copper/60 rounded-full" />
            </div>

            {/* SVG Triangle */}
            <div className="flex justify-center items-center py-4">
              <svg
                viewBox="0 0 200 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[220px]"
              >
                {/* Outer triangle */}
                <path
                  d="M 100 15 L 185 155 L 15 155 Z"
                  stroke="rgba(200,153,42,0.35)"
                  strokeWidth="0.8"
                  fill="rgba(200,153,42,0.04)"
                  strokeDasharray="800"
                  strokeDashoffset={inView3 ? 0 : 800}
                  style={{ transition: 'stroke-dashoffset 1.5s ease 0.2s' }}
                />
                {/* Inner triangle */}
                <path
                  d="M 100 50 L 155 145 L 45 145 Z"
                  stroke="rgba(200,153,42,0.15)"
                  strokeWidth="0.5"
                  fill="rgba(200,153,42,0.02)"
                  strokeDasharray="600"
                  strokeDashoffset={inView3 ? 0 : 600}
                  style={{ transition: 'stroke-dashoffset 1.5s ease 0.5s' }}
                />
                {/* Center dot */}
                <circle
                  cx="100" cy="115"
                  r="3"
                  fill="rgba(200,153,42,0.6)"
                  opacity={inView3 ? 1 : 0}
                  style={{ transition: 'opacity 0.5s 1.5s ease' }}
                />
                {/* Lines from center to vertices */}
                {[[100, 50], [45, 145], [155, 145]].map(([x, y], i) => (
                  <line
                    key={i}
                    x1="100" y1="115" x2={x} y2={y}
                    stroke="rgba(200,153,42,0.12)"
                    strokeWidth="0.5"
                    strokeDasharray="200"
                    strokeDashoffset={inView3 ? 0 : 200}
                    style={{ transition: `stroke-dashoffset 0.8s ${1.2 + i * 0.15}s ease` }}
                  />
                ))}
                {/* Vertex labels */}
                <text x="100" y="10" textAnchor="middle" fontSize="8" fill="rgba(200,153,42,0.7)" fontFamily="monospace">
                  KALİTE
                </text>
                <text x="10" y="168" textAnchor="middle" fontSize="8" fill="rgba(200,153,42,0.5)" fontFamily="monospace">
                  ZAMAN
                </text>
                <text x="192" y="168" textAnchor="middle" fontSize="8" fill="rgba(200,153,42,0.5)" fontFamily="monospace">
                  MALİYET
                </text>
                {/* Subtitle labels */}
                <text x="100" y="20" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.2)" fontFamily="sans-serif">
                  Malzeme & İşçilik
                </text>
                <text x="8" y="176" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.2)" fontFamily="sans-serif">
                  Programa Uyum
                </text>
                <text x="194" y="176" textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.2)" fontFamily="sans-serif">
                  Şeffaf Bütçe
                </text>

                {/* Grid lines inside */}
                <line x1="15" y1="155" x2="100" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                <line x1="185" y1="155" x2="100" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
              </svg>
            </div>

            <p className="text-center text-white/30 text-xs leading-relaxed mt-2">
              Üç parametreyi aynı anda dengede tutmak için<br />sistematik proje yönetimi uyguluyoruz.
            </p>

            <div className="absolute bottom-4 right-4 text-gold/10 font-mono text-xs">SY-TRNG-03</div>
          </div>
        </div>

        {/* Bottom row: Project progress visualization */}
        <div className="mt-8 bg-dark-800 border border-white/6 p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="section-label mb-1" style={{ fontSize: '0.6rem' }}>PANEL D</div>
              <h3 className="text-white text-sm font-semibold">Şantiye Planlama Modülü</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-pulse" />
              <span className="text-xs text-white/30 font-mono">AKTİF</span>
            </div>
          </div>

          {/* Gantt-like visualization */}
          <div className="space-y-3">
            {[
              { phase: 'Hazırlık & İzinler', start: 0, width: 15, color: 'bg-gold/40' },
              { phase: 'Temel & Kaba', start: 12, width: 30, color: 'bg-gold/60' },
              { phase: 'Mekanik-Elektrik', start: 35, width: 25, color: 'bg-copper/50' },
              { phase: 'İnce İşler', start: 52, width: 28, color: 'bg-gold/40' },
              { phase: 'Bitim & Kontrol', start: 75, width: 20, color: 'bg-gold/70' },
              { phase: 'Teslim', start: 93, width: 7, color: 'bg-green-400/50' },
            ].map((row, i) => (
              <div key={row.phase} className="flex items-center gap-4">
                <span className="text-xs text-white/30 w-36 shrink-0 font-mono">{row.phase}</span>
                <div className="flex-1 h-4 bg-white/4 relative">
                  <div
                    className={`absolute h-full ${row.color} transition-all duration-1000`}
                    style={{
                      left: `${row.start}%`,
                      width: inView1 ? `${row.width}%` : '0%',
                      transitionDelay: `${300 + i * 100}ms`,
                    }}
                  />
                  {/* Phase marker lines */}
                  {[25, 50, 75].map((pct) => (
                    <div
                      key={pct}
                      className="absolute top-0 bottom-0 w-px bg-white/8"
                      style={{ left: `${pct}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Month labels */}
          <div className="flex mt-4 pl-40">
            {['A1', 'A3', 'A6', 'A9', 'A12', 'A15', 'A18'].map((m, i) => (
              <div
                key={m}
                className="flex-1 text-center text-xs font-mono text-white/15"
              >
                {m}
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 right-4 text-gold/10 font-mono text-xs">SY-GANT-04</div>
        </div>
      </div>
    </section>
  )
}
