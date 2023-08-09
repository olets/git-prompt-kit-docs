<script>
import { useColorStore } from "../stores/store-color";
import { ansiOrHexColor, hexColor } from "../utils/ansiToHex.js";

export default {
  setup() {
    const store = useColorStore();
    return { store };
  },
  methods: {
    ansiOrHexColor,
    configure(key, value) {
      this.store.options[key].custom = value;
    },
    hexColor,
    reset() {
      this.store.$reset;
    },
  },
};
</script>

<template>
  <p
    v-if="store.customizations"
    style="color: red"
  >
    Modified from default
  </p>
  <p v-if="!store.customizations">
    Not modified from default
  </p>

  <button
    style="margin-top: 20px"
    @click="store.$reset"
  >
    Reset
  </button>

  <p>
    Each color configuration variable can be either an
    <a href="https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit">8-bit ANSI color escape code</a>
    or a
    <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet">hexadecimal</a>
    triplet.
  </p>

  <form style="display: grid; gap: 8px">
    <table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Default</th>
          <th>Type</th>
          <th>Value</th>
          <th>Picker</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(value, key) in store.options"
          :key="key"
        >
          <td>
            <label :for="`field-${key}`">
              <code>{{ key }}</code>
            </label>
          </td>

          <td>{{ value.default }}</td>
          <td>{{ value.type }}</td>

          <td>
            <input
              style="text-align: right"
              type="text"
              :value="value.custom || value.default"
              @input="
                (event) => (store.options[key].custom = event.target.value)
              "
            >
          </td>

          <td>
            <input
              type="color"
              :value="hexColor(value.custom || value.default)"
              @input="
                (event) =>
                  (store.options[key].custom = ansiOrHexColor(
                    event.target.value
                  ))
              "
            >
          </td>
        </tr>
      </tbody>
    </table>
  </form>

  {{ store.customizations }}
</template>
