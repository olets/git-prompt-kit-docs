<script>
import { useOptionsStore } from "../stores/options";

export default {
  setup() {
    const store = useOptionsStore();
    return { store };
  },
};
</script>

<template>
  <section id="config">
    <h2>Your Configuration</h2>
    <p>Copy and paste into your <code>.zshrc</code></p>
    <textarea
      v-model="store.customizations"
      :disabled="!store.customizations"
      style="width: 100%"
      readonly
    />
  </section>
</template>
