import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANTE para o GitHub Pages:
// troca 'nossa-linha-do-tempo' pelo NOME EXATO do teu repositório no GitHub.
// Ex: se o repo for github.com/teu-user/historia-da-gente, coloca '/historia-da-gente/'
export default defineConfig({
  base: '/nossa-historia/',
  plugins: [react()],
})
