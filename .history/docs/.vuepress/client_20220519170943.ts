import { defineClientConfig } from "@vuepress/client";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    console.log("app: ", app);
    app.use(ElementPlus);
  },
  setup() {},
  rootComponents: [],
});
