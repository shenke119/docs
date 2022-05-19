import { defineUserConfig } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { searchPlugin } from "@vuepress/plugin-search";
import { localTheme } from "./theme";
import path from "path";
export default defineUserConfig({
  lang: "zh-CN",
  title: "SK的小文档",
  plugins: [
    [
      require("vuepress-plugin-demo-container-vue3"),
      {
        componentsDir: path.resolve(__dirname, "./../examples"),
      },
    ],
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
