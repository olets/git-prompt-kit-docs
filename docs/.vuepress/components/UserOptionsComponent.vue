<script>
import { useUserStore } from "../stores/store-user";
import ConfiguratorComponent from "./ConfiguratorComponent.vue";

export default {
  components: { ConfiguratorComponent },
  setup() {
    const store = useUserStore();
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
