import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import csp from "vite-plugin-csp-guard";

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    csp({
      algorithm: "sha256",
      dev: {
        run: true, 
      },
      policy: {
        "script-src": ["'self'", "https://www.google-analytics.com"],
        "style-src": ["'self'", "https://fonts.googleapis.com"], 
      },
    }),
  ],
})

export default config
