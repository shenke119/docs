import { defineUserConfig } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { searchPlugin } from "@vuepress/plugin-search";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { localTheme } from "./theme";
import path from "path";
const demoContainer = require("vuepress-plugin-demo-container-vue3");
export default defineUserConfig({
  base: "/docs/",
  lang: "zh-CN",
  title: "SK的小文档",
  plugins: [
    demoContainer({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
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
