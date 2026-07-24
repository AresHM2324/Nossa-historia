import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Music2 } from 'lucide-react'
import nossaMusica from '../assets/audio/nossa-musica.mp3'

// 🎵 A vossa música — "Toxic", de RealestK.
// Para trocar no futuro, basta substituir o ficheiro em
// src/assets/audio/nossa-musica.mp3 por outro mp3 com o mesmo nome.

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => {
        // Alguns navegadores bloqueiam autoplay; o clique do utilizador resolve isto.
      })
    }
    setIsPlaying((prev) => !prev)
  }

  return (
    <>
      <audio ref={audioRef} src={nossaMusica} loop preload="none" />

      <motion.button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? 'Pausar música do casal' : 'Tocar música do casal'}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-gold/30 bg-dusk-light/90 backdrop-blur-md px-4 py-3 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.6)]"
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-4 w-4">
            <span className="w-[3px] h-full bg-gold-light rounded-full origin-bottom animate-wave1" />
            <span className="w-[3px] h-full bg-gold-light rounded-full origin-bottom animate-wave2" />
            <span className="w-[3px] h-full bg-gold-light rounded-full origin-bottom animate-wave3" />
          </div>
        ) : (
          <Music2 className="h-4 w-4 text-gold-light" />
        )}

        <span className="text-xs text-cream/80 font-body hidden sm:inline">
          {isPlaying ? 'A tocar a nossa música' : 'Nossa música'}
        </span>

        <span className="grid place-items-center rounded-full bg-wine/70 h-6 w-6">
          {isPlaying ? (
            <Pause className="h-3 w-3 text-cream" fill="currentColor" />
          ) : (
            <Play className="h-3 w-3 text-cream ml-[1px]" fill="currentColor" />
          )}
        </span>
      </motion.button>
    </>
  )
}
