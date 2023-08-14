<script>
import { useContextStore } from "../stores/context";
import valueOf from "../utils/valueOf";
import set from "../utils/set.js";
import InputComponent from "./InputComponent.vue";

export default {
  components: [InputComponent],
  setup() {
    const store = useContextStore();
    return { store };
  },
  methods: {
    reset() {
      this.store.$reset();
    },
    set,
    valueOf,
  },
};
</script>

<template>
  <form style="display: grid; gap: 8px; width: 100%">
    <table>
      <thead>
        <tr>
          <th>State</th>
          <th>True?</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in store.data"
          :key="key"
        >
          <td>
            <label
              :for="`field-${key}`"
              style="display: block"
            >
              {{ item.label }}
            </label>
          </td>

          <td>
            <InputComponent
              :the-key="key"
              :value="item"
              @set="set"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
