import { defineClientConfig } from "@vuepress/client";
import { createPinia } from "pinia";
import "a11y-dialog";
const pinia = createPinia();
import OptionsConfigurationComponent from "./components/OptionsConfigurationComponent.vue";
import ContextComponent from "./components/ContextComponent.vue";
import PromptComponent from "./components/PromptComponent.vue";
import ColorComponent from "./components/ColorComponent.vue";
import ColorOptionsComponent from "./components/ColorOptionsComponent.vue";
import GitOptionsComponent from "./components/GitOptionsComponent.vue";
import UserOptionsComponent from "./components/UserOptionsComponent.vue";
import ResetOptionsComponent from "./components/ResetOptionsComponent.vue";
import ConfigComponent from "./components/ConfigComponent.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.use(pinia);
    app.component(
      "OptionsConfigurationComponent",
      OptionsConfigurationComponent
    );
    app.component("ContextComponent", ContextComponent);
    app.component("PromptComponent", PromptComponent);
    app.component("ColorOptionsComponent", ColorOptionsComponent);
    app.component("ColorComponent", ColorComponent);
    app.component("GitOptionsComponent", GitOptionsComponent);
    app.component("UserOptionsComponent", UserOptionsComponent);
    app.component("ResetOptionsComponent", ResetOptionsComponent);
    app.component("ConfigComponent", ConfigComponent);
  },
});
