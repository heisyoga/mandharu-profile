import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools({ 
      // Configure imagetools
      // For example, to always use webp and reduce quality for jpg/png
      defaultDirectives: (url) => {
        const directives = new URLSearchParams();
        // Apply default compression for all images if not already specified
        if (!url.searchParams.has('format') && (url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg') || url.pathname.endsWith('.png'))) {
          directives.append('format', 'webp');
        }
        if (!url.searchParams.has('quality') && (url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg') || url.pathname.endsWith('.png'))) {
          directives.append('quality', '80');
        }
        return directives;
      },
    }),
  ],
})
