// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  app: {
    head: {
      title: "Petrus Ariaa - eclipseron.dev",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type:"image/png", href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type:"image/png", href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type:"image/png", href: '/favicon-64x64.png', sizes: '64x64' },
        { rel: 'icon', type:"image/png", href: '/favicon-180x180.png', sizes: '180x180' },
        { rel: 'apple-touch-icon', type: "image/png", href: "/apple-touch-icon-180x180.png", sizes: "180x180" }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  }
})
