// ─────────────────────────────────────────────────────────────
// momentsData.js
// Dados reais da vossa linha do tempo. Edita os textos e datas
// livremente — as imagens e vídeos já estão ligados aos ficheiros
// em src/assets/moments/.
// ─────────────────────────────────────────────────────────────

// Momento 1 — O Anel
import anel01 from '../assets/moments/anel/anel-01.jpeg'
import anel02 from '../assets/moments/anel/anel-02.jpeg'

// Momento 2 — Maio
import maio01 from '../assets/moments/maio/maio-01.jpeg'
import maio02 from '../assets/moments/maio/maio-02.jpeg'

// Momento 3 — Elegantes
import elegantes01 from '../assets/moments/elegantes/elegantes-01.jpeg'
import elegantes02 from '../assets/moments/elegantes/elegantes-02.jpeg'

// Momento 4 — Carinhosos (fotos + vídeos do dia a dia)
import car01 from '../assets/moments/carinhosos/carinhosos-01.jpeg'
import car02 from '../assets/moments/carinhosos/carinhosos-02.jpeg'
import car03 from '../assets/moments/carinhosos/carinhosos-03.jpeg'
import car04 from '../assets/moments/carinhosos/carinhosos-04.jpeg'
import car05 from '../assets/moments/carinhosos/carinhosos-05.jpeg'
import car06 from '../assets/moments/carinhosos/carinhosos-06.jpeg'
import car07 from '../assets/moments/carinhosos/carinhosos-07.jpeg'
import car08 from '../assets/moments/carinhosos/carinhosos-08.jpeg'
import car09 from '../assets/moments/carinhosos/carinhosos-09.jpeg'
import car10 from '../assets/moments/carinhosos/carinhosos-10.jpeg'
import car11 from '../assets/moments/carinhosos/carinhosos-11.jpeg'
import car12 from '../assets/moments/carinhosos/carinhosos-12.jpeg'
import carVideo01 from '../assets/moments/carinhosos/carinhosos-video-01.mp4'
import carVideo02 from '../assets/moments/carinhosos/carinhosos-video-02.mp4'

const momentsData = [
  {
    id: 1,
    icon: '💍',
    type: 'ring', // cartão com brilho + botão "Ver Detalhe do Anel"
    date: 'O início de tudo', // ✏️ troca pela data real do pedido
    title: 'O Símbolo da Nossa União',
    description:
      'O momento em que tudo se tornou oficial. As nossas mãos unidas, os nossos anéis a brilhar — o início formal de uma promessa que já vivíamos todos os dias.',
    media: [anel01, anel02],
    ringCaption:
      'Duas mãos, dois anéis, uma só decisão: caminhar juntos. Este instante ficou gravado para sempre.',
  },
  {
    id: 2,
    icon: '🏖️',
    type: 'polaroid', // cartão estilo foto Polaroid
    date: 'Uma noite em Maio', // ✏️ troca pela data real da viagem
    title: 'Kel nos primero date',
    description:
      'Areia debaixo dos pés, luzes da noite e o letreiro da ilha a testemunhar o nosso passeio. Uma daquelas noites simples que se tornaram inesquecíveis só por estarmos juntos.E UM GARRAFA QUEBRADO KKK',
    media: [maio01, maio02],
  },
  {
    id: 3,
    icon: '✨',
    type: 'reveal', // foto oculta, revela ao clicar/tocar
    date: 'Um dia k nu torna distimunha de union de outros pa nu toma ramo', // ✏️ troca pela data real
    title: 'Sempre Elegantes Juntos',
    description:
      'Arrumados, o oceano ao fundo e a certeza de que, seja qual for a ocasião, ficamos sempre bem um ao lado do outro.',
    media: [elegantes01, elegantes02],
  },
  {
    id: 4,
    icon: '🥰',
    type: 'gallery', // grade interativa de fotos e vídeos
    date: 'O nosso dia a dia',
    title: 'A cada encontro ta faze queston de dexa kel dia fixo',
    description:
      'Selfies no espelho, caretas bobas, dengo nas escadas e cafuné que só nós entendemos. As pequenas coisas que, juntas, contam a maior das histórias.',
    media: [
      { type: 'image', src: car01 },
      { type: 'image', src: car02 },
      { type: 'image', src: car03 },
      { type: 'image', src: car04 },
      { type: 'image', src: car05 },
      { type: 'image', src: car06 },
      { type: 'image', src: car07 },
      { type: 'image', src: car08 },
      { type: 'image', src: car09 },
      { type: 'image', src: car10 },
      { type: 'image', src: car11 },
      { type: 'image', src: car12 },
      { type: 'video', src: carVideo01 },
      { type: 'video', src: carVideo02 },
    ],
  },
]

export default momentsData
