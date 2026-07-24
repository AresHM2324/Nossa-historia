import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// 📅📅📅 IMPORTANTE: troca pela data REAL em que começaram a namorar.
// Formato: 'AAAA-MM-DDTHH:mm:ss' (ano-mês-dia + hora, se souberes).
const START_DATE = new Date('2026-05-25T13:00:00')

function getElapsed() {
  const now = new Date()
  const diff = Math.max(0, now.getTime() - START_DATE.getTime())

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

const units = [
  { key: 'days', label: 'dias' },
  { key: 'hours', label: 'horas' },
  { key: 'minutes', label: 'minutos' },
  { key: 'seconds', label: 'segundos' },
]

export default function Counter() {
  const [elapsed, setElapsed] = useState(getElapsed)

  useEffect(() => {
    const interval = setInterval(() => setElapsed(getElapsed()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
      className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto"
    >
      {units.map((unit) => (
        <div
          key={unit.key}
          className="flex flex-col items-center rounded-2xl border border-gold/20 bg-dusk-light/60 backdrop-blur-sm px-2 py-3 sm:py-4 shadow-[0_0_25px_-8px_rgba(203,163,91,0.35)]"
        >
          <span className="font-display text-2xl sm:text-4xl text-gold-light tabular-nums">
            {String(elapsed[unit.key]).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-blush/70 font-body">
            {unit.label}
          </span>
        </div>
      ))}
    </motion.div>
  )
}
