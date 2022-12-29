import "dotenv/config";
import { defaultTheme, defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  // https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    // social metas
    ["meta", { property: "og:title", content: "git-prompt-kit" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "A configurable set of components for creating feature rich, high performance Git-aware zsh prompts.",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://git-prompt-kit.olets.dev/",
      },
    ],
    ["meta", { property: "og:site_name", content: "git-prompt-kit" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:title", content: "git-prompt-kit" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "A configurable set of components for creating feature rich, high performance Git-aware zsh prompts.",
      },
    ],
  ],

  // site config
  // https://v2.vuepress.vuejs.org/guide/configuration.html#site-config
  lang: "en-US",
  title: "git-prompt-kit",
  description:
    "A configurable set of components for creating feature rich, high performance Git-aware zsh prompts.",

  markdown: {
    links: {
      externalAttrs: {
        class: "external-link",
        rel: "",
        target: "",
      },
    },
  },

  // default theme config
  // https://v2.vuepress.vuejs.org/guide/theme.html#default-theme
  theme: defaultTheme({
    repo: "olets/git-prompt-kit",
    docsDir: "docs",
    docsRepo: "olets/git-prompt-kit-docs",
    sidebar: {
      "/": [
        {
          text: "Introduction",
          link: "/",
        },
        {
          text: "Options",
          children: [
            {
              text: "Color",
              link: "/color",
            },
            {
              text: "Git",
              link: "/git",
            },
            {
              text: "User",
              link: "/user",
            },
          ],
        },
        "/configuration/",
      ],
    },
    sidebarDepth: 3,
    themePlugins: {
      externalLinkIcon: false,
    },
  }),

  plugins: [
    [
      // https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html
      docsearchPlugin({
        apiKey: process.env.SEARCH_KEY,
        appId: process.env.APPLICATION_ID,
        indexName: process.env.INDEX_NAME,
      }),
    ],
  ],
});
