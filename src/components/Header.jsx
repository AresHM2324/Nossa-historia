import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Counter from './Counter.jsx'

export default function Header() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Corações ambiente flutuando ao fundo — sutil, não distrai */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-wine/20 animate-floatSlow"
            style={{
              left: `${12 + i * 15}%`,
              top: `${15 + (i % 3) * 22}%`,
              animationDelay: `${i * 0.8}s`,
              width: 22 + (i % 3) * 10,
              height: 22 + (i % 3) * 10,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-script italic text-blush text-lg sm:text-xl tracking-wide mb-4"
      >
       Bu ta lembra de kes dias li??
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
        className="font-display text-4xl sm:text-6xl md:text-7xl text-cream leading-tight max-w-3xl"
      >
        Hm ca Squeci nao kkk, <span className="text-gold-light">Nha G</span> ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-6 max-w-xl text-blush/80 text-sm sm:text-base font-body font-light"
      >
        Cada encontro hm faze questond e paral na tempo pam aprecia , arrasta pra cima pou revives.
      </motion.p>

      <div className="mt-10 w-full">
        <Counter />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-gold/60"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-body">rolar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-[1px] bg-gradient-to-b from-gold/80 to-transparent"
        />
      </motion.div>
    </header>
  )
}
