<script>
import { useOptionsStore } from "../stores/options";
import set from "../utils/set.js";
import InputComponent from "./InputComponent.vue";
import { getValue } from "../utils/value";

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
    getMax(type) {
      return type.includes("bit") ? 1 : null;
    },
    getPattern(type) {
      return type === "array" ? "\\(.*\\)" : null;
    },
    getType(type) {
      return type.includes("integer") ? "number" : "text";
    },
    hasNotes() {
      return Object.values(this.options).filter((option) => option.notes)
        .length;
    },
    hasVerboseDefaults() {
      return Object.values(this.options).filter(
        (option) => option.value.verboseDefault
      ).length;
    },
    set,
    reset() {
      this.store.$reset();
    },
    useVerboseDefaults() {
      return getValue(this.store.data.GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS);
    },
    getValue,
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
          <th v-if="hasVerboseDefaults()">
            Verbose Default
          </th>
          <th>Type</th>
          <th v-if="hasNotes()">
            Notes
          </th>
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

          <td v-if="hasVerboseDefaults()">
            {{ option.value.verboseDefault }}
          </td>

          <td>{{ option.type }}</td>

          <td v-if="hasNotes()">
            {{ option.notes }}
          </td>

          <td>
            <InputComponent
              :key="`${optionKey}-${useVerboseDefaults()}`"
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
