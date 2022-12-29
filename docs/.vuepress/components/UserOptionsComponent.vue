<script>
import { useUserStore } from "../stores/store-user";
import ConfiguratorComponent from "./ConfiguratorComponent.vue";

export default {
  components: { ConfiguratorComponent },
  setup() {
    const store = useUserStore();
    return { store };
  },
};
</script>

<template>
  <ConfiguratorComponent :store="store"></ConfiguratorComponent>
</template>
