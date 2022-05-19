import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";

export default defineUserConfig({
  lang: "zh-CN",
  title: "SK的小文档",
  plugins: [backToTopPlugin()],
  theme: defaultTheme({
    sidebar: [
      {
        text: "Vue3文档",
        link: "/guide/vue3/",
      },
    ],
  }),
});
