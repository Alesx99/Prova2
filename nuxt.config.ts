// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Private keys are only available on the server
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'
    }
  },
  // Configurazione per GitHub Pages
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/Prova2/' : '/TutorialSviluppo/'
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  // Disabilita funzionalità che potrebbero richiedere oxc-parser
  experimental: {
    payloadExtraction: false
  },
  vite: {
    optimizeDeps: {
      exclude: ['oxc-parser']
    }
  }
})
