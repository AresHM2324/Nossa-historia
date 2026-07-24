/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Fundo escuro aconchegante (base near-black com nuance de vinho)
        dusk: {
          DEFAULT: '#160D10',
          light: '#231016',
          soft: '#2E151C',
        },
        // Bordô / vinho — cor de destaque principal
        wine: {
          DEFAULT: '#6B1F32',
          light: '#8B2C42',
          dark: '#4A1522',
        },
        // Rosa pastel
        blush: {
          DEFAULT: '#F2C6D4',
          light: '#FAE1E9',
          dark: '#E2A3B8',
        },
        // Creme
        cream: {
          DEFAULT: '#F8EFE3',
          dark: '#EDE0CC',
        },
        // Dourado suave
        gold: {
          DEFAULT: '#CBA35B',
          light: '#E4CB94',
          dark: '#9C7B3E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        wave1: 'wave 0.9s ease-in-out infinite',
        wave2: 'wave 0.9s ease-in-out 0.15s infinite',
        wave3: 'wave 0.9s ease-in-out 0.3s infinite',
        shimmer: 'shimmer 3s linear infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, #CBA35B 0%, #F3E1B8 25%, #CBA35B 50%, #F3E1B8 75%, #CBA35B 100%)',
      },
    },
  },
  plugins: [],
}
