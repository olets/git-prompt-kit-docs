<script>
import { useContextStore } from "../stores/store-context";

export default {
  setup() {
    const store = useContextStore();
    return { store };
  },
};
</script>

<template>
  <form style="display: grid; gap: 8px">
    <ul>
      <li
        v-for="(value, key) in store.data"
        :key="key"
      >
        <label>
          {{ value.label }}

          <input
            v-model="value.checked"
            style="text-align: right"
            type="checkbox"
          >
        </label>
      </li>
    </ul>

    <button
      type="button"
      @click="store.$reset"
    >
      Reset
    </button>
  </form>
</template>
