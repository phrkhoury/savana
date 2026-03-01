import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente (incluindo a chave do Gemini)
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: '/savana/',
    plugins: [react(), tailwindcss()],
    define: {
      // Isso "carimba" a chave no código durante o build
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
    }
  };
});
