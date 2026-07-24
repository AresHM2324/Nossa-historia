import { useState } from 'react'
import { motion } from 'framer-motion'
import { Gem, Play, Sparkles } from 'lucide-react'
import Lightbox from './Lightbox.jsx'

// ── Sub-render: Momento tipo "ring" ──────────────────────────
function RingContent({ moment, openLightbox }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-3xl bg-gold/10 blur-2xl animate-shimmer bg-gold-shimmer bg-[length:200%_100%] opacity-40"
      />
      <div className="relative flex flex-col items-center gap-4 rounded-2xl border border-gold/25 bg-dusk/50 p-5">
        <img
          src={moment.media[0]}
          alt="As nossas mãos com os anéis"
          className="h-40 w-40 sm:h-48 sm:w-48 rounded-xl object-cover shadow-[0_0_35px_-5px_rgba(203,163,91,0.5)]"
        />
        <motion.button
          type="button"
          onClick={() => openLightbox(0)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-xs sm:text-sm uppercase tracking-widest text-gold-light hover:bg-gold/10 transition-colors"
        >
          <Gem className="h-3.5 w-3.5" />
          Ver Detalhe do Anel
        </motion.button>
      </div>
    </div>
  )
}

// ── Sub-render: Momento tipo "polaroid" ──────────────────────
function PolaroidContent({ moment, openLightbox }) {
  const rotations = ['-rotate-3', 'rotate-2']
  return (
    <div className="flex flex-wrap justify-center gap-5 py-2">
      {moment.media.map((src, i) => (
        <motion.button
          key={src}
          type="button"
          onClick={() => openLightbox(i)}
          whileHover={{ scale: 1.05, rotate: 0 }}
          className={`${rotations[i % rotations.length]} bg-cream p-2.5 pb-6 rounded-sm shadow-[0_10px_25px_-8px_rgba(0,0,0,0.5)] transition-transform`}
        >
          <img
            src={src}
            alt="Momento na praia do Maio"
            className="h-36 w-28 sm:h-44 sm:w-36 object-cover"
          />
        </motion.button>
      ))}
    </div>
  )
}

// ── Sub-render: Momento tipo "reveal" ────────────────────────
function RevealContent({ moment }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {moment.media.map((src, i) => (
        <button
          key={src}
          type="button"
          onClick={() => setRevealed(true)}
          onMouseEnter={() => setRevealed(true)}
          className="relative h-40 w-32 sm:h-52 sm:w-40 overflow-hidden rounded-xl border border-gold/20"
        >
          <img
            src={src}
            alt="Momento elegante à beira-mar"
            className={`h-full w-full object-cover transition-all duration-700 ${
              revealed ? 'blur-0 scale-100' : 'blur-md scale-105 brightness-50'
            }`}
          />
          {!revealed && (
            <span className="absolute inset-0 flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-widest text-cream/90">
              <Sparkles className="h-3.5 w-3.5" />
              revelar
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

// ── Sub-render: Momento tipo "gallery" ───────────────────────
function GalleryContent({ moment, openLightbox }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {moment.media.map((item, i) => (
        <motion.button
          key={item.src}
          type="button"
          onClick={() => openLightbox(i)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative aspect-square overflow-hidden rounded-lg border border-gold/15"
        >
          {item.type === 'video' ? (
            <>
              <video src={item.src} className="h-full w-full object-cover" muted preload="metadata" />
              <span className="absolute inset-0 flex items-center justify-center bg-dusk/40">
                <Play className="h-5 w-5 text-cream" fill="currentColor" />
              </span>
            </>
          ) : (
            <img src={item.src} alt="Momento do dia a dia" className="h-full w-full object-cover" />
          )}
        </motion.button>
      ))}
    </div>
  )
}

export default function TimelineCard({ moment, index }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const isEven = index % 2 === 0

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)

  return (
    <motion.article
      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
        <span className="h-3.5 w-3.5 rounded-full bg-gold-light ring-4 ring-dusk shadow-[0_0_12px_2px_rgba(203,163,91,0.5)]" />
      </div>

      <div className="md:w-1/2 w-full">
        <div className="rounded-3xl border border-gold/15 bg-dusk-light/70 backdrop-blur-sm p-6 sm:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
          <p className="font-script italic text-blush/90 text-base sm:text-lg mb-1">
            {moment.icon} {moment.date}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-cream mb-3">{moment.title}</h3>
          <p className="font-body font-light text-cream/70 text-sm sm:text-base leading-relaxed mb-5">
            {moment.description}
          </p>

          {moment.type === 'ring' && <RingContent moment={moment} openLightbox={openLightbox} />}
          {moment.type === 'polaroid' && (
            <PolaroidContent moment={moment} openLightbox={openLightbox} />
          )}
          {moment.type === 'reveal' && <RevealContent moment={moment} />}
          {moment.type === 'gallery' && (
            <GalleryContent moment={moment} openLightbox={openLightbox} />
          )}
        </div>
      </div>

      <div className="hidden md:block md:w-1/2" aria-hidden="true" />

      {lightboxIndex !== null && (
        <Lightbox
          items={moment.media}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </motion.article>
  )
}
