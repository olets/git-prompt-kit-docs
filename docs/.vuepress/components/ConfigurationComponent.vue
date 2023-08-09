<script>
import { useOptionsStore } from "../stores/options";
import { ansiOrHexColor, hexColor } from "../utils/ansiToHex.js";

export default {
  setup() {
    const store = useOptionsStore();
    return { store };
  },
  methods: {
    ansiOrHexColor,
    hexColor,
    set(key, value, isColor = false) {
      if (isColor) {
        this.store.options[key].custom = ansiOrHexColor(value);
        return;
      }

      this.store.options[key].custom = value;
    },
    reset() {
      this.store.$reset;
    },
  },
};
</script>

<template>
  <p v-if="store.customizations" style="color: red">Modified from default</p>
  <p v-if="!store.customizations">Not modified from default</p>

  <p>
    Each color configuration variable can be either an
    <a href="https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit"
      >8-bit ANSI color escape code</a
    >
    or a
    <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet"
      >hexadecimal</a
    >
    triplet.
  </p>

  <button style="margin-top: 20px" @click="reset">Reset</button>

  <form style="display: grid; gap: 8px">
    <table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Default</th>
          <th>Type</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in store.options" :key="key">
          <td>
            <label :for="`field-${key}`">
              <code>{{ key }}</code>
            </label>
          </td>

          <td>{{ value.default }}</td>
          <td>{{ value.type }}</td>

          <td style="display: flex; gap: 1rem">
            <input
              :max="value.type.includes('boolean') ? 1 : null"
              min="0"
              :name="`field-${key}`"
              :placeholder="value.default"
              style="text-align: right; flex-grow: 1"
              :type="value.type.includes('integer') ? 'number' : 'text'"
              :value="value.custom || value.default"
              @input="({ target }) => set(key, target.value)"
            />

            <input
              v-if="value.type.includes('hex')"
              type="color"
              :value="hexColor(value.custom || value.default)"
              @input="({ target }) => set(key, target.value, true)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </form>

  {{ store.customizations }}
</template>
