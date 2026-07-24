import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * items: array of either
 *   - string (URL da imagem)
 *   - { type: 'image' | 'video', src }
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const normalized = items.map((item) =>
    typeof item === 'string' ? { type: 'image', src: item } : item,
  )
  const current = normalized[index]
  const hasMultiple = normalized.length > 1

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + normalized.length) % normalized.length)
  }, [index, normalized.length, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((index + 1) % normalized.length)
  }, [index, normalized.length, onNavigate])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasMultiple) goPrev()
      if (e.key === 'ArrowRight' && hasMultiple) goNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, goPrev, goNext, hasMultiple])

  if (!current) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-dusk/95 backdrop-blur-sm px-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 rounded-full border border-gold/30 p-2 text-cream/80 hover:text-gold-light hover:border-gold transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              aria-label="Anterior"
              className="absolute left-3 sm:left-6 rounded-full border border-gold/30 p-2 text-cream/80 hover:text-gold-light hover:border-gold transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              aria-label="Seguinte"
              className="absolute right-3 sm:right-6 rounded-full border border-gold/30 p-2 text-cream/80 hover:text-gold-light hover:border-gold transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <motion.div
          key={current.src}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-3xl w-full max-h-[85vh] flex items-center justify-center"
        >
          {current.type === 'video' ? (
            <video
              src={current.src}
              controls
              autoPlay
              className="max-h-[85vh] w-auto rounded-2xl shadow-2xl"
            />
          ) : (
            <img
              src={current.src}
              alt="Memória ampliada"
              className="max-h-[85vh] w-auto rounded-2xl shadow-2xl object-contain"
            />
          )}
        </motion.div>

        {hasMultiple && (
          <span className="absolute bottom-5 text-xs tracking-widest text-cream/50 font-body">
            {index + 1} / {normalized.length}
          </span>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
