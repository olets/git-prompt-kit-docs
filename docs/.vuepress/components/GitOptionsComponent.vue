<script>
import { useGitStore } from "../stores/store-git";
import ConfiguratorComponent from "./ConfiguratorComponent.vue";

export default {
  components: { ConfiguratorComponent },
  setup() {
    const store = useGitStore();
    return { store };
  },
  methods: {
    configure(key, value) {
      this.store.options[key].custom = value;
    },
    reset() {
      this.store.$reset;
    },
  },
};
</script>

<template>
  <ConfiguratorComponent :store="store" />
</template>
