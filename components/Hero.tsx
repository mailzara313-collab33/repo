'use client'
import { useEffect, useRef, useState } from 'react'

const heroTexts = [
  'Fikirden Teslime\nGüvenilir İnşaat\nÇözümleri',
  'Villa & Konut\nProjeleri için\nUzman Ekip',
  'Şantiyeden Teslime\nProfesyonel\nYönetim',
]

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [textIndex, setTextIndex] = useState(0)
  const [drawn, setDrawn] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setDrawn(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((i) => (i + 1) % heroTexts.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const progress = Math.min(Math.max(-rect.top / (hero.offsetHeight * 0.7), 0), 1)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallaxY = scrollProgress * 80
  const textOpacity = 1 - scrollProgress * 1.4

  const buildingParts = [
    // Ground
    { d: 'M 20 530 L 500 530', delay: 0 },
    // Left column
    { d: 'M 70 530 L 70 80', delay: 200 },
    // Right column
    { d: 'M 450 530 L 450 80', delay: 250 },
    // Interior columns
    { d: 'M 180 530 L 180 80', delay: 350 },
    { d: 'M 290 530 L 290 80', delay: 400 },
    { d: 'M 360 530 L 360 80', delay: 420 },
    // Roof line
    { d: 'M 70 80 L 450 80', delay: 550 },
    // Penthouse
    { d: 'M 160 80 L 160 40 L 360 40 L 360 80', delay: 650 },
    { d: 'M 200 40 L 200 20 L 320 20 L 320 40', delay: 750 },
    // Floor lines
    { d: 'M 70 180 L 450 180', delay: 500 },
    { d: 'M 70 280 L 450 280', delay: 520 },
    { d: 'M 70 380 L 450 380', delay: 540 },
    { d: 'M 70 460 L 450 460', delay: 560 },
    // Foundation
    { d: 'M 50 530 L 50 550 L 470 550 L 470 530', delay: 100 },
    { d: 'M 10 550 L 510 550', delay: 80 },
    // Ground texture
    { d: 'M 0 560 L 520 560', delay: 60 },
    { d: 'M 0 570 L 260 570', delay: 70, opacity: 0.2 },
  ]

  const windowRects = [
    // Ground floor bay 1 (x:70-180)
    { x: 85, y: 480, w: 75, h: 40 },
    // Ground floor bay 2 (x:180-290)
    { x: 195, y: 480, w: 75, h: 40 },
    // Ground floor bay 3 (x:290-360)
    { x: 298, y: 480, w: 48, h: 40 },
    // Ground floor bay 4 (x:360-450)
    { x: 370, y: 480, w: 65, h: 40 },
    // Floor 1 windows
    { x: 85, y: 390, w: 75, h: 55 },
    { x: 195, y: 390, w: 75, h: 55 },
    { x: 298, y: 390, w: 48, h: 55 },
    { x: 370, y: 390, w: 65, h: 55 },
    // Floor 2 windows
    { x: 85, y: 295, w: 75, h: 55 },
    { x: 195, y: 295, w: 75, h: 55 },
    { x: 298, y: 295, w: 48, h: 55 },
    { x: 370, y: 295, w: 65, h: 55 },
    // Floor 3 windows
    { x: 85, y: 195, w: 75, h: 55 },
    { x: 195, y: 195, w: 75, h: 55 },
    { x: 298, y: 195, w: 48, h: 55 },
    { x: 370, y: 195, w: 65, h: 55 },
    // Penthouse windows
    { x: 175, y: 50, w: 55, h: 22 },
    { x: 290, y: 50, w: 55, h: 22 },
  ]

  const dimensionLines = [
    // Left dimension
    { x1: 30, y1: 80, x2: 30, y2: 530 },
    { x1: 25, y1: 80, x2: 35, y2: 80 },
    { x1: 25, y1: 530, x2: 35, y2: 530 },
  ]

  const levelMarkers = [
    { y: 530, label: '±0.00' },
    { y: 460, label: '+2.80' },
    { y: 380, label: '+5.60' },
    { y: 280, label: '+8.40' },
    { y: 180, label: '+11.20' },
    { y: 80, label: '+14.00' },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-dark-950"
      id="hero"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-gold bg-grid-md opacity-100"
        style={{ transform: `translateY(${parallaxY * 0.3}px)` }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,153,42,0.04)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_50%,transparent_0%,rgba(8,8,10,0.7)_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[85vh]">

            {/* Left: Text */}
            <div
              ref={textRef}
              style={{ opacity: textOpacity, transform: `translateY(${-parallaxY * 0.2}px)` }}
            >
              <div className="flex items-center gap-3 mb-10">
                <span className="section-label">Sefir Yapı & Proje</span>
                <div className="h-px w-12 bg-gold/40" />
                <span className="text-white/25 text-xs font-mono tracking-wider">EST. 2018</span>
              </div>

              {/* Animated headline */}
              <div className="relative overflow-hidden mb-8">
                <h1
                  key={textIndex}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[5rem] font-bold leading-[1.05] tracking-tightest text-white"
                  style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards' }}
                >
                  {heroTexts[textIndex].split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {i === 1 ? (
                        <span className="text-gradient-gold">{line}</span>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
                </h1>
              </div>

              {/* Text indicator dots */}
              <div className="flex gap-2 mb-10">
                {heroTexts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTextIndex(i)}
                    className={`h-px transition-all duration-500 ${
                      i === textIndex ? 'w-8 bg-gold' : 'w-3 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <p
                className="text-white/55 text-base md:text-lg leading-relaxed max-w-lg mb-12"
                style={{ animation: 'fadeUp 0.8s 0.2s cubic-bezier(0.16,1,0.3,1) both' }}
              >
                Özel projeler, anahtar teslim uygulamalar ve profesyonel şantiye yönetimiyle
                yapınızı baştan sona planlıyor, yönetiyor ve teslim ediyoruz.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{ animation: 'fadeUp 0.8s 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
              >
                <a href="#iletisim" className="btn-primary">
                  Projeni Başlat
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#referanslar" className="btn-outline">
                  Referansları İncele
                </a>
              </div>

              {/* Minimal stats row */}
              <div
                className="flex gap-8 mt-14 pt-8 border-t border-white/6"
                style={{ animation: 'fadeUp 0.8s 0.5s cubic-bezier(0.16,1,0.3,1) both' }}
              >
                {[
                  { value: '20+', label: 'Tamamlanan Proje' },
                  { value: '15+', label: 'Uzman Ekip' },
                  { value: '8', label: 'Yıllık Deneyim' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-gradient-gold">{s.value}</div>
                    <div className="text-xs text-white/40 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Architectural SVG */}
            <div
              className="relative hidden lg:flex items-center justify-center"
              style={{ transform: `translateY(${-parallaxY * 0.4}px)` }}
            >
              {/* Glow behind SVG */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(200,153,42,0.06)_0%,transparent_70%)]" />

              <svg
                ref={svgRef}
                viewBox="0 0 520 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[520px] relative z-10"
                style={{ filter: 'drop-shadow(0 0 40px rgba(200,153,42,0.06))' }}
              >
                {/* Window grids — rendered first (background layer) */}
                {windowRects.map((r, i) => (
                  <g key={i}>
                    <rect
                      x={r.x} y={r.y} width={r.w} height={r.h}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="0.5"
                      fill="rgba(255,255,255,0.015)"
                      className={drawn ? 'opacity-100' : 'opacity-0'}
                      style={{ transition: `opacity 0.6s ${400 + i * 40}ms ease` }}
                    />
                    {/* Horizontal window divider */}
                    <line
                      x1={r.x} y1={r.y + r.h / 2}
                      x2={r.x + r.w} y2={r.y + r.h / 2}
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="0.5"
                    />
                  </g>
                ))}

                {/* Structural lines */}
                {buildingParts.map((part, i) => (
                  <path
                    key={i}
                    d={part.d}
                    stroke={`rgba(200,153,42,${part.opacity ?? 0.55})`}
                    strokeWidth="0.8"
                    className={`path-draw ${drawn ? 'drawn' : ''}`}
                    style={{
                      strokeDasharray: 2000,
                      strokeDashoffset: drawn ? 0 : 2000,
                      transition: `stroke-dashoffset 1.8s ${part.delay}ms cubic-bezier(0.16,1,0.3,1)`,
                    }}
                  />
                ))}

                {/* Dimension lines */}
                {dimensionLines.map((l, i) => (
                  <line
                    key={i}
                    x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    className={drawn ? 'opacity-100' : 'opacity-0'}
                    style={{ transition: `opacity 0.8s ${900 + i * 80}ms ease` }}
                  />
                ))}

                {/* Level markers */}
                {levelMarkers.map((m, i) => (
                  <g
                    key={i}
                    className={drawn ? 'opacity-100' : 'opacity-0'}
                    style={{ transition: `opacity 0.6s ${1000 + i * 60}ms ease` }}
                  >
                    <line
                      x1="480" y1={m.y} x2="510" y2={m.y}
                      stroke="rgba(200,153,42,0.35)"
                      strokeWidth="0.5"
                    />
                    <text
                      x="514" y={m.y + 3.5}
                      fontSize="7"
                      fill="rgba(200,153,42,0.5)"
                      fontFamily="monospace"
                    >
                      {m.label}
                    </text>
                  </g>
                ))}

                {/* Crosshair markers at column tops */}
                {[70, 180, 290, 360, 450].map((x, i) => (
                  <g
                    key={i}
                    className={drawn ? 'opacity-100' : 'opacity-0'}
                    style={{ transition: `opacity 0.5s ${1100 + i * 50}ms ease` }}
                  >
                    <circle cx={x} cy={80} r="3" stroke="rgba(200,153,42,0.6)" strokeWidth="0.7" fill="none" />
                    <line x1={x} y1={77} x2={x} y2={73} stroke="rgba(200,153,42,0.4)" strokeWidth="0.5" />
                    <line x1={x - 3} y1={80} x2={x - 7} y2={80} stroke="rgba(200,153,42,0.4)" strokeWidth="0.5" />
                  </g>
                ))}

                {/* Title label on drawing */}
                <text
                  x="260" y="588"
                  fontSize="7.5"
                  fill="rgba(255,255,255,0.2)"
                  fontFamily="monospace"
                  textAnchor="middle"
                  className={drawn ? 'opacity-100' : 'opacity-0'}
                  style={{ transition: 'opacity 1s 1500ms ease' }}
                >
                  SEFİR YAPI — ÖN CEPHE ELEVASYONu — ÖLÇEK: 1/100
                </text>

                {/* Drawing number box */}
                <rect
                  x="420" y="576" width="92" height="20"
                  stroke="rgba(200,153,42,0.2)"
                  strokeWidth="0.5"
                  fill="none"
                  className={drawn ? 'opacity-100' : 'opacity-0'}
                  style={{ transition: 'opacity 1s 1600ms ease' }}
                />
                <text
                  x="466" y="589.5"
                  fontSize="6"
                  fill="rgba(200,153,42,0.35)"
                  fontFamily="monospace"
                  textAnchor="middle"
                  className={drawn ? 'opacity-100' : 'opacity-0'}
                  style={{ transition: 'opacity 1s 1700ms ease' }}
                >
                  DWG-001 / A-01
                </text>

                {/* Scanning line animation */}
                <line
                  x1="60" y1="0" x2="60" y2="600"
                  stroke="rgba(200,153,42,0.15)"
                  strokeWidth="1"
                  style={{
                    transformOrigin: 'left center',
                    animation: drawn ? 'scanLine 6s 1.5s ease-in-out infinite alternate' : 'none',
                  }}
                />
                <style>{`
                  @keyframes scanLine {
                    from { transform: translateX(0px); opacity: 0.15; }
                    to { transform: translateX(400px); opacity: 0.04; }
                  }
                `}</style>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 1 - scrollProgress * 3 }}
      >
        <span className="section-label text-white/30" style={{ fontSize: '0.6rem' }}>
          ASAĞI KAYDIRIN
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
