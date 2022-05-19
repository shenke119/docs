import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
export default defineUserConfig({
  lang: "zh-CN",
  title: "SK的小文档",
  theme: defaultTheme({
    repo: "vuejs/vuepress",
    navbar: [
      {
        text: "Vue3",
        link: "/guide/vue3/",
      },
    ],
  }),
});
