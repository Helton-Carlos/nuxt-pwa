// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/main.css'],
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    manifest: {
      name: "Nuxt3 PWA",
      short_name: "Nuxt3 PWA",
      description: "Testing Nuxt3 PWA",
      icons: [
        {
          src: "icons/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "icons/android-chrome-140x140.png",
          sizes: "140x140",
          type: "image/png",
        },
        {
          src: "icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});