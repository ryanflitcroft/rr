// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  components: [
    { path: "~/components" },
    // {
    //   path: "~/components/DesignSystem",
    //   pathPrefix: false,
    // },
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/global.scss", "~/assets/scss/main.scss"],
   // Uncomment to use Global Mixins & Varriables - each line is a partial to include
   vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "./assets/scss/partial/animation.scss";
            @import "./assets/scss/partial/media-query.scss";
            @import "./assets/scss/partial/mixins.scss";
            @import "./assets/scss/partial/variables.scss";
          `
        }
      }
    }
  }
});
