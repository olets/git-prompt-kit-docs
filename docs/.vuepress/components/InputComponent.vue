<script>
import { hexColor } from "../utils/ansiToHex.js";
import { getDefault, valueOf } from "../utils/valueOf";

export default {
  props: {
    theKey: {
      type: String,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
  emits: ["set"],
  watch: {
    value(newVal, oldVal) {
      console.log("value", newVal, oldVal);
    },
  },
  methods: {
    getDefault,
    getPattern(type) {
      return type === "array" ? "\\(.*\\)" : null;
    },
    getType(type) {
      let ret;

      switch (type) {
        case "boolean":
          ret = "checkbox";
          break;
        case "integer":
          ret = "number";
          break;
        default:
          ret = "text";
          break;
      }

      return ret;
    },
    hexColor,
    valueOf,
  },
};
</script>

<template>
  <div>
    <div style="display: flex; gap: 1rem">
      <input
        :id="`field-${theKey}`"
        :name="`field-${theKey}`"
        :placeholder="getDefault(value)"
        style="text-align: right; flex-grow: 1"
        :type="getType(value?.type)"
        :value="valueOf(value) !== getDefault(value) ? valueOf(value) : ''"
        :pattern="getPattern(value?.type)"
        :checked="
          getType(value?.type) === 'checkbox' && valueOf(value) === true
            ? true
            : false
        "
        @change="$emit('set', theKey, $event.target)"
      >

      <input
        v-if="value.type === 'color'"
        type="color"
        :value="hexColor(valueOf(value))"
        @input="$emit('set', theKey, $event.target)"
      >
    </div>

    <div
      v-if="getPattern(value?.type)"
      class="validity"
    >
      Must match /{{ getPattern(value?.type) }}/
    </div>
  </div>
</template>
