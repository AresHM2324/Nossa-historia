import { motion } from 'framer-motion'
import momentsData from '../data/momentsData.js'
import TimelineCard from './TimelineCard.jsx'

export default function Timeline() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 sm:mb-24"
      >
        <p className="font-script italic text-blush/80 text-lg mb-2">Cada foto</p>
        <h2 className="font-display text-3xl sm:text-5xl text-cream">
          Nos momentos que nu vivi 
        </h2>
      </motion.div>

      {/* Eixo vertical: centralizado no desktop, à esquerda no mobile */}
      <div
        aria-hidden="true"
        className="absolute top-[11rem] bottom-24 left-6 md:left-1/2 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:-translate-x-1/2"
      />

      <div className="flex flex-col gap-16 sm:gap-24">
        {momentsData.map((moment, index) => (
          <div key={moment.id} className="pl-14 md:pl-0">
            <TimelineCard moment={moment} index={index} />
          </div>
        ))}
      </div>
    </section>
  )
}
