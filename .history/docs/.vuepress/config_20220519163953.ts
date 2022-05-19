import { defineUserConfig } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { searchPlugin } from "@vuepress/plugin-search";
import { containerPlugin } from "@vuepress/plugin-container";
import run from "vuepress-plugin-run";
import { localTheme } from "./theme";
export default defineUserConfig({
  lang: "zh-CN",
  title: "SK的小文档",
  plugins: [
    "run",
    containerPlugin({
      type: "run",
    }),
    backToTopPlugin(),
    searchPlugin(),
  ],
  theme: localTheme({
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
