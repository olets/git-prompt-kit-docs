<script>
// import ConfigurationComponent from "./ConfigurationComponent.vue";
// import ConfiguratorComponent from "./ConfiguratorComponent.vue";
import ReactiveComponent from "./ReactiveComponent.vue";
// import PromptComponent from "./PromptComponent.vue";

// import { store } from "./store.js";
export default {
  components: {
    // ConfigurationComponent,
    // ConfiguratorComponent,
    // PromptComponent,
    ReactiveComponent,
  },
};
</script>

<template>
  <div id="app">
    <ReactiveComponent />
    <!-- <details>
      <summary>Interactive configurator</summary>
      <ConfiguratorComponent />
    </details> -->

    <!-- <details>
      <summary>Components</summary>
      <PromptComponent />
    </details> -->

    <!-- <details>
      <summary>Config to paste into .zshrc</summary>
      <ConfigurationComponent></ConfigurationComponent>
    </details> -->
  </div>
</template>
