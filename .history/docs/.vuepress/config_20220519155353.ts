import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
export default defineUserConfig({
  lang: "zh-CN",
  title: "SK的小文档",
  theme: defaultTheme({
    sidebar: [
      {
        text: "Vue3文档",
        link: "/guide/vue3/",
      },
    ],
  }),
});
