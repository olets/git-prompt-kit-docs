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
    useVerboseDefaults() {
      return valueOf(
        this.store.options.data.GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS
      );
    },
    valueOf,
  },
};
</script>

<template>
  <PromptSegmentComponent
    v-if="valueOf(store.context.data.gitRefTag)"
    :key="useVerboseDefaults()"
    color-option="GIT_PROMPT_KIT_COLOR_TAG"
    :text="`${
      valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_TAG) || ''
    }v1.3.3`"
  />
</template>
