import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // O segredo está aqui: o caminho deve ser exatamente o nome do seu repositório
  base: '/savana/', 
  plugins: [react(), tailwindcss()],
  build: {
    // Garante que o build seja gerado corretamente para o GitHub
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});
