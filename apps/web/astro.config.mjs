import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Keep the original visual components and transitions, but generate a self-contained
// public portfolio rather than depending on the previous owner's Sanity and Vercel.
export default defineConfig({
  output: 'static',
  integrations: [react()],
  vite: {
    ssr: { noExternal: ['shared'] },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    },
  },
  build: { inlineStylesheets: 'auto' },
});
