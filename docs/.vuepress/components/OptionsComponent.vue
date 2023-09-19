<script>
import { useOptionsStore } from "../stores/options";
import { hexColor } from "../utils/ansiToHex.js";
import { getValue } from "../utils/value";

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
    hasColorOptions() {
      return Object.values(this.options).filter(
        (option) => option?.type === "color"
      ).length;
    },
    hasDescriptions() {
      return Object.values(this.options).filter((option) => option?.description)
        .length;
    },
    hasNotes() {
      return Object.values(this.options).filter((option) => option?.notes)
        .length;
    },
    hasVerboseDefaults() {
      return Object.values(this.options).filter(
        (option) => option?.value?.verboseDefault
      ).length;
    },
    getValue,
    hexColor,
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
          <th v-if="hasColorOptions()">
            Swatch
          </th>
          <th v-if="hasDescriptions()">
            Description
          </th>
          <th v-if="hasNotes()">
            Notes
          </th>
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

          <td>
            {{ option.value.default }}
          </td>

          <td v-if="hasVerboseDefaults()">
            {{ option.value.verboseDefault }}
          </td>

          <td>{{ option.type }}</td>

          <td v-if="option.type === 'color'">
            <input
              disabled
              type="color"
              :value="hexColor(getValue(option))"
            >
          </td>

          <td v-if="hasDescriptions()">
            {{ option.description }}
          </td>

          <td v-if="hasNotes()">
            {{ option.notes }}
          </td>
        </tr>
      </tbody>
    </table>
  </form>

  <div v-if="hasVerboseDefaults()">
    **The default if
    <code>GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS</code> is non-zero.
  </div>
</template>
