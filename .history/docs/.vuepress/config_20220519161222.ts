import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { searchPlugin } from "@vuepress/plugin-search";
import { localTheme } from "./theme";
export default defineUserConfig({
  lang: "zh-CN",
  title: "SK的小文档",
  theme: localTheme({
    // 默认主题配置项
  }),
  plugins: [backToTopPlugin(), searchPlugin()],
  theme: defaultTheme({
    sidebar: [
      {
        text: "Vue3文档",
        link: "/guide/vue3/",
      },
      {
        text: "Element-plus文档",
        link: "/guide/element-plus/",
      },
    ],
  }),
});
