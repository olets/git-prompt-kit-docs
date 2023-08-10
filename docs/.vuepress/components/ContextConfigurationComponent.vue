<script>
import { useContextStore } from "../stores/context";
import valueOf from "../utils/valueOf";

export default {
  setup() {
    const store = useContextStore();
    return { store };
  },
  methods: {
    set(key, target) {
      this.store.data[key].value.custom = target.checked;
    },
    reset() {
      this.store.$reset();
    },
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
          :class="valueOf(item) ? 'customized' : null"
        >
          <td>
            <label :for="`field-${key}`">
              {{ item.label }}
            </label>
          </td>

          <td>
            <input
              :id="`field-${key}`"
              type="checkbox"
              :checked="valueOf(item)"
              @change="set(key, $event.target)"
            >
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
