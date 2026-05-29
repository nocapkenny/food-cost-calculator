// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  runtimeConfig: {
    public: {
      apiBase: "https://api.foodcostcalc.ru/api/v1"
    }
  },
  components: [
    {
      path: "~/components/common",
      pathPrefix: false,
    },
    {
      path: "~/components/pages/home",
      pathPrefix: false,
    },
    {
      path: "~/components/pages/login",
      pathPrefix: false,
    },
    {
      path: "~/components/pages/register",
      pathPrefix: false,
    },
    {
      path: "~/components/pages/profile",
      pathPrefix: false,
    },
    {
      path: "~/components/ui",
      prefix: "Ui",
      pathPrefix: true,
    },
  ],
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@vee-validate/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_vars.scss" as *;',
        },
      },
    },
  },
});
