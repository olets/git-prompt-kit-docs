<script>
import { hexColor } from "../utils/ansiToHex.js";
import valueOf from "../utils/valueOf";

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
    hexColor,
    valueOf,
  },
};
</script>

<template>
  <div>
    <div style="display: flex; gap: 1rem">
      <input
        :max="getMax(value?.type)"
        min="0"
        :name="`field-${theKey}`"
        :placeholder="value.value.default"
        style="text-align: right; flex-grow: 1"
        :type="getType(value?.type)"
        :value="valueOf(value)"
        :pattern="getPattern(value?.type)"
        @change="$emit('set', theKey, $event.target)"
      >

      <input
        v-if="value.group === 'Color'"
        type="color"
        :value="hexColor(valueOf(value))"
        @input="$emit('set', theKey, $event.target, true)"
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
