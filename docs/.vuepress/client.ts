import { defineClientConfig } from "@vuepress/client";
import { createPinia } from "pinia";
const pinia = createPinia();
import GitPromptKit from "./components/GitPromptKit.vue";
import ColorOptionsComponent from "./components/ColorOptionsComponent.vue";
import GitOptionsComponent from "./components/GitOptionsComponent.vue";
import UserOptionsComponent from "./components/UserOptionsComponent.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.use(pinia);
    app.component("GitPromptKit", GitPromptKit);
    app.component("ColorOptionsComponent", ColorOptionsComponent);
    app.component("GitOptionsComponent", GitOptionsComponent);
    app.component("UserOptionsComponent", UserOptionsComponent);
  },
});
