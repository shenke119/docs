import { defineUserConfig } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { searchPlugin } from "@vuepress/plugin-search";
import run from "vuepress-plugin-run";
import MarkdownIt from "markdown-it";
import { localTheme } from "./theme";
export default defineUserConfig({
  lang: "zh-CN",
  title: "SK的小文档",
  markdown: {
    config: (md: MarkdownIt) => run(md),
  },
  plugins: [backToTopPlugin(), searchPlugin()],
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
