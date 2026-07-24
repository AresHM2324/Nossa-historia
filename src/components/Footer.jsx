import { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Heart } from 'lucide-react'

function fireHeartConfetti() {
  const heartShape = confetti.shapeFromText
    ? confetti.shapeFromText({ text: '❤️', scalar: 3 })
    : undefined

  const commonOptions = heartShape
    ? { shapes: [heartShape], scalar: 3 }
    : { colors: ['#6B1F32', '#F2C6D4', '#CBA35B', '#F8EFE3'] }

  const duration = 2200
  const end = Date.now() + duration

  ;(function frame() {
    confetti({
      ...commonOptions,
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
    })
    confetti({
      ...commonOptions,
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  })()

  // Uma explosão central para coroar o momento
  confetti({
    ...commonOptions,
    particleCount: 60,
    spread: 90,
    origin: { y: 0.6 },
  })
}

export default function Footer() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    fireHeartConfetti()
    setClicked(true)
  }

  return (
    <footer className="relative px-6 pb-28 pt-10 sm:pb-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <Heart className="h-8 w-8 text-wine-light mx-auto mb-6" fill="currentColor" />

        <h2 className="font-display text-3xl sm:text-5xl text-cream leading-tight mb-6">
          Obrigado por seres o meu lugar favorito nesse mundo.
        </h2>

        <p className="font-body font-light text-cream/70 text-sm sm:text-base leading-relaxed mb-10">
          De cada viagem às nossas bobeiras de todos os dias, cada capítulo com a tua
          companhia é o meu preferido. Feliz aniversário de namoro — que venham muitos mais,
          ao teu lado.
        </p>

        <motion.button
          type="button"
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 rounded-full bg-wine hover:bg-wine-light transition-colors px-8 py-4 shadow-[0_10px_40px_-10px_rgba(107,31,50,0.7)]"
        >
          <Heart className="h-5 w-5 text-blush" fill="currentColor" />
          <span className="font-display text-lg sm:text-xl text-cream">
            Clique para Celebrar o Nosso Amor! 🎉
          </span>
        </motion.button>

        {clicked && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-script italic text-blush/80 text-lg"
          >
            e é para sempre. ✨
          </motion.p>
        )}
      </motion.div>
    </footer>
  )
}
