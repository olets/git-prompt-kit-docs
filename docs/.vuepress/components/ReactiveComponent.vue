<!-- <script>
import { store } from "./store.js";
</script> -->

<script>
import { useCounterStore } from "../stores/store-pinia";

export default {
  setup() {
    const store = useCounterStore();
    return { store };
  },
};
</script>

<template>
  {{ store.count }}, {{ store.double }},
  <button @click="store.increment">
    increment
  </button>,
  <button @click="store.$reset">
    reset
  </button>
</template>
