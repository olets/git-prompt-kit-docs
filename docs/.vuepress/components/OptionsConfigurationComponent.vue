<script>
import { useOptionsStore } from "../stores/options";

export default {
  props: {
    group: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useOptionsStore();
    return { store };
  },
  computed: {
    options() {
      return Object.fromEntries(
        Object.entries(this.store.options).filter(
          // eslint-disable-next-line no-unused-vars
          ([_k, v]) => v.group.toLowerCase() === this.group.toLowerCase()
        )
      );
    },
  },
  methods: {
    set(key, value) {
      this.store.options[key].value.custom = value;
    },
  },
};
</script>

<template>
  <ConfigurationTableComponent
    :options="options"
    @set="set"
  />
</template>
