<script>
import { useContextStore } from "../stores/context";

export default {
  setup() {
    const store = useContextStore();
    return { store };
  },
  methods: {
    getChecked(option) {
      if (option.value?.custom !== undefined && option.value?.custom !== null) {
        return option.value?.custom;
      }
      return option.value.default;
    },
    set(key, target) {
      this.store.context[key].value.custom = target.checked;
    },
    reset() {
      this.store.$reset();
    },
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
          v-for="(item, key) in store.context"
          :key="key"
          :class="getChecked(item) ? 'customized' : null"
        >
          <td>
            <label :for="`field-${key}`">
              {{ item.label }}
            </label>
          </td>

          <td>
            <div style="display: flex; gap: 1rem">
              <input
                :id="`field-${key}`"
                type="checkbox"
                :checked="getChecked(item)"
                @change="set(key, $event.target)"
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
