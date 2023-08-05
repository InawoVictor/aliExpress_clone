// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // pages: true,
  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-icon',
    '@pinia/nuxt', 
    // '@nuxtjs/supabase',
    'nuxt-lodash', '@pinia-plugin-persistedstate/nuxt'
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  app: {
    head: {
      title: 'V-AliExpress',
      meta: [{name: 'description', content: 'Online shop'}],
      script: [
        {src: 'https://js.stripe.com/v3/', defer: true}
      ]
    }
  }
})
