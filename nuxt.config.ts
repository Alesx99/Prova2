// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
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
  // Configurazione per GitHub Pages
  ssr: false, // Disabilita SSR per GitHub Pages
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  experimental: {
    payloadExtraction: false
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/TutorialSviluppo/' : '/',
    buildAssetsDir: process.env.NODE_ENV === 'production' ? '/TutorialSviluppo/_nuxt/' : '/_nuxt/'
  }
})
