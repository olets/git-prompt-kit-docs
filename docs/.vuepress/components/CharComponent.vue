<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { valueOf } from "../utils/valueOf";
import PromptSegmentComponent from "./prompt/PromptSegmentComponent.vue";

export default {
  components: [PromptSegmentComponent],
  setup() {
    const store = {
      context: useContextStore(),
      options: useOptionsStore(),
    };
    return { store };
  },
  methods: {
    valueOf,
  },
};
</script>

<template>
  <PromptSegmentComponent
    :color-option="
      valueOf(store.context.data.sessionFailed)
        ? 'GIT_PROMPT_KIT_COLOR_FAILED'
        : 'GIT_PROMPT_KIT_COLOR_SUCCEEDED'
    "
    :text="
      valueOf(store.context.data.userRoot)
        ? valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT)
        : valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL)
    "
  />
</template>
