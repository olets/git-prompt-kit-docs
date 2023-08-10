import { defineClientConfig } from "@vuepress/client";
import { createPinia } from "pinia";
import "a11y-dialog";
const pinia = createPinia();
import OptionsConfigurationComponent from "./components/OptionsConfigurationComponent.vue";
import ContextConfigurationComponent from "./components/ContextConfigurationComponent.vue";
import PromptComponent from "./components/PromptComponent.vue";
import ResetOptionsComponent from "./components/ResetOptionsComponent.vue";
import ConfigComponent from "./components/ConfigComponent.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.use(pinia);
    app.component(
      "OptionsConfigurationComponent",
      OptionsConfigurationComponent
    );
    app.component(
      "ContextConfigurationComponent",
      ContextConfigurationComponent
    );
    app.component("PromptComponent", PromptComponent);
    app.component("ResetOptionsComponent", ResetOptionsComponent);
    app.component("ConfigComponent", ConfigComponent);
  },
});
