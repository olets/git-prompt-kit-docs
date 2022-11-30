import { defineClientConfig } from "@vuepress/client";
import { createPinia } from "pinia";
const pinia = createPinia();
import GitPromptKit from "./components/GitPromptKit.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.use(pinia);
    app.component("GitPromptKit", GitPromptKit);
  },
});
