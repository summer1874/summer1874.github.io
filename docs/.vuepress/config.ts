import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  theme,
  shouldPrefetch: false,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
});
