<script>
import { useOptionsStore } from "../stores/options";
import { ansiOrHexColor } from "../utils/ansiToHex.js";
import InputComponent from "./InputComponent.vue";

export default {
  components: [InputComponent],
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
            <label
              :for="`field-${optionKey}`"
              style="display: block"
            >
              <code>{{ optionKey }}</code>
            </label>
          </td>

          <td>{{ option.value.default }}</td>

          <td>{{ option.type }}</td>

          <td>{{ option.notes }}</td>

          <td>
            <InputComponent
              :the-key="optionKey"
              :value="option"
              @set="set"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
