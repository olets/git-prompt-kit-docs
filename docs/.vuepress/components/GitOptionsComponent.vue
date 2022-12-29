<script>
import { useGitStore } from "../stores/store-git";
import ConfiguratorComponent from "./ConfiguratorComponent.vue";

export default {
  components: { ConfiguratorComponent },
  setup() {
    const store = useGitStore();
    return { store };
  },
};
</script>

<template>
  <ConfiguratorComponent :store="store"></ConfiguratorComponent>
</template>
