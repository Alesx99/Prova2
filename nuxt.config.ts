// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  // Configurazione semplificata per GitHub Pages
  ssr: false,
  app: {
    baseURL: '/TutorialSviluppo/'
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
