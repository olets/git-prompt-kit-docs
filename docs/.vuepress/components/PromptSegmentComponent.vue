<script>
import { useOptionsStore } from "../stores/options";
import { hexColor } from "../utils/ansiToHex.js";
import valueOf from "../utils/valueOf";

export default {
  props: {
    colorOption: {
      type: String,
      required: false,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useOptionsStore();
    return { store };
  },
  methods: {
    hexColor,
    valueOf,
  },
};
</script>

<template>
  <span
    :style="
      colorOption
        ? `color: ${hexColor(valueOf(store.data[colorOption]))}`
        : null
    "
  >
    {{ text }}
  </span>
</template>
