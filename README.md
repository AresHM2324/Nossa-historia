# A Nossa História — Linha do Tempo Interativa 💌

Um "digital scrapbook" romântico feito com React, Vite, Tailwind CSS e Framer Motion.

## 🚀 Instalação e execução

```bash
# 1. Instalar dependências
npm install

# 2. Correr em ambiente de desenvolvimento
npm run dev

# 3. Gerar build de produção
npm run build
npm run preview
```

O projeto abre por defeito em `http://localhost:5173`.

## 📦 Dependências principais

Já estão listadas no `package.json`, mas se precisares de instalar manualmente:

```bash
npm install react react-dom
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
npm install framer-motion lucide-react canvas-confetti
```

## ✏️ Como personalizar

### 1. Data de início do relacionamento (contador)
Edita `src/components/Counter.jsx`:
```js
const START_DATE = new Date('2021-02-14T00:00:00')
```

### 2. Momentos da linha do tempo
Edita `src/data/momentsData.js` — adiciona, remove ou altera quantos momentos quiseres.
Cada momento pode revelar uma **foto** (`revealType: 'image'`) ou uma **mensagem secreta**
(`revealType: 'message'`).

Para usar fotos próprias em vez dos placeholders (`picsum.photos`):
```js
import foto1 from '../assets/foto1.jpg'
// ...
{ id: 1, ..., revealType: 'image', image: foto1 }
```
(cria a pasta `src/assets/` e coloca lá as tuas fotos)

### 3. Música do casal
Edita `src/components/AudioPlayer.jsx` e troca a constante `SAMPLE_AUDIO_URL` pelo
ficheiro final:
```js
import trilha from '../assets/nossa-musica.mp3'
// ...
<audio ref={audioRef} src={trilha} loop preload="none" />
```

### 4. Cores e tipografia
O tema (bordô, rosa pastel, creme, dourado, fundo escuro) está definido em
`tailwind.config.js`, e as fontes (Playfair Display, Cormorant Garamond, Inter) são
carregadas via Google Fonts em `index.html`.

## 🗂️ Estrutura do projeto

```
src/
├── data/
│   └── momentsData.js      # dados dos momentos (fácil de editar)
├── components/
│   ├── Header.jsx          # hero + título + contador
│   ├── Counter.jsx         # contador de tempo juntos (dias/h/min/s)
│   ├── AudioPlayer.jsx     # player flutuante da música do casal
│   ├── Timeline.jsx        # eixo vertical + lista de momentos
│   ├── TimelineCard.jsx    # cartão com "carta retrátil"
│   └── Footer.jsx          # encerramento + botão "Te Amo" com confetes
├── App.jsx
├── main.jsx
└── index.css
```

## 💡 Notas

- O player de áudio usa `preload="none"` e só carrega/reproduz após o primeiro clique,
  por causa das políticas de autoplay dos navegadores.
- `prefers-reduced-motion` é respeitado — quem tiver essa preferência no sistema verá
  as transições praticamente instantâneas.
- Todo o texto está em português europeu; ajusta livremente o tom para o vosso estilo.

Feito com ❤️ para contar uma história que vale a pena guardar.
