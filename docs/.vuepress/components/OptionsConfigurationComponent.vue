<script>
import { useOptionsStore } from "../stores/options";
import { ansiOrHexColor, hexColor } from "../utils/ansiToHex.js";
import valueOf from "../utils/valueOf";

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
        Object.entries(this.store.data).filter(
          // eslint-disable-next-line no-unused-vars
          ([_k, v]) => v.group.toLowerCase() === this.group.toLowerCase()
        )
      );
    },
  },
  methods: {
    ansiOrHexColor,
    getMax(type) {
      return type.includes("bit") ? 1 : null;
    },
    getPattern(type) {
      return type === "array" ? "\\(.*\\)" : null;
    },
    getType(type) {
      return type.includes("integer") ? "number" : "text";
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
        this.store.data[key].value.custom = ansiOrHexColor(target.value);
        return;
      }

      this.store.data[key].value.custom = target.value;
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
          <th>Option</th>
          <th>Default</th>
          <th>Type</th>
          <th>Notes</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(option, optionKey) in options"
          :key="optionKey"
          :class="
            option.value.custom && option.value.custom != option.value.default
              ? 'customized'
              : null
          "
        >
          <td>
            <label :for="`field-${optionKey}`">
              <code>{{ optionKey }}</code>
            </label>
          </td>

          <td>{{ option.value.default }}</td>

          <td>{{ option.type }}</td>

          <td>{{ option.notes }}</td>

          <td>
            <div style="display: flex; gap: 1rem">
              <input
                :max="getMax(option?.type)"
                min="0"
                :name="`field-${optionKey}`"
                :placeholder="option.value.default"
                style="text-align: right; flex-grow: 1"
                :type="getType(option?.type)"
                :value="valueOf(option)"
                :pattern="getPattern(option?.type)"
                @change="({ target }) => set(optionKey, target)"
              >

              <input
                v-if="option.group === 'Color'"
                type="color"
                :value="hexColor(valueOf(option))"
                @input="({ target }) => set(optionKey, target, true)"
              >
            </div>

            <div
              v-if="getPattern(option?.type)"
              class="validity"
            >
              Must match /{{ getPattern(option?.type) }}/
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
