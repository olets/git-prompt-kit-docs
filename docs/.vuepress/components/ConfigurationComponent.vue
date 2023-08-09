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
    getPattern(type) {
      const patt = type === "array" ? "\\(.*\\)" : null;
      return patt;
    },
    hexColor,
    set(key, target, isColor = false) {
      const valid = !target.validity.patternMismatch;
      const pattern = target.getAttribute("pattern");

      target.setCustomValidity("");
      target.reportValidity();

      if (!valid) {
        target.setCustomValidity(
          `Invalid: must match the pattern /${pattern}/`
        );
        target.reportValidity();
        return;
      }

      if (isColor) {
        this.store.options[key].value.custom = ansiOrHexColor(target.value);
        return;
      }

      this.store.options[key].value.custom = target.value;
    },
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

  <p>
    Each color configuration variable can be either an
    <a href="https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit">8-bit ANSI color escape code</a>
    or a
    <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet">hexadecimal</a>
    triplet.
  </p>

  <button
    style="margin-top: 20px"
    @click="reset"
  >
    Reset
  </button>

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
        <tr
          v-for="(option, key) in store.options"
          :key="key"
          :class="
            option.value.custom && option.value.custom != option.value.default
              ? 'customized'
              : null
          "
        >
          <td>
            <label :for="`field-${key}`">
              <code>{{ key }}</code>
            </label>
          </td>

          <td>{{ option.value.default }}</td>
          <td>{{ option.type }}</td>

          <td>
            <div style="display: flex; gap: 1rem">
              <input
                :max="option.type.includes('boolean') ? 1 : null"
                min="0"
                :name="`field-${key}`"
                :placeholder="option.value.default"
                style="text-align: right; flex-grow: 1"
                :type="option.type.includes('integer') ? 'number' : 'text'"
                :value="option.value.custom || option.value.default"
                :pattern="getPattern(option.type)"
                @change="({ target }) => set(key, target)"
              >

              <input
                v-if="option.type.includes('hex')"
                type="color"
                :value="hexColor(option.value.custom || option.value.default)"
                @input="({ target }) => set(key, target, true)"
              >
            </div>

            <div
              v-if="getPattern(option.type)"
              class="validity"
            >
              Must match /{{ getPattern(option.type) }}/
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </form>

  {{ store.customizations }}
</template>
