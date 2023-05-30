import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import generouted from "@generouted/react-router/plugin"
import { viteSingleFile } from "vite-plugin-singlefile"
import sassGlobImports from "vite-plugin-sass-glob-import"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"
import eslint from "vite-plugin-eslint"

export default defineConfig({
  plugins: [
    react(),
    generouted(),
    viteSingleFile(),
    sassGlobImports(),
    cssInjectedByJsPlugin(),
    eslint({
      lintOnStart: true,
      fix: true,
      include: "**/*.tsx",
      failOnError: false,
    }),
  ],
  build: {
    outDir: "./dist",
    manifest: true,
    rollupOptions: {
      input: ["./src/main.tsx"],
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  resolve: { alias: { "@": "/src" } },
})
