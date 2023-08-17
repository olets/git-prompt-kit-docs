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
  <span
    id="head"
    style="display: flex; gap: var(--prompt-gap)"
  >
    <!-- branch -->
    <PromptSegmentComponent
      v-if="valueOf(store.context.data.gitRefBranch)"
      :key="useVerboseDefaults()"
      :color-option="
        valueOf(store.context.data.gitRefAhead) ||
          valueOf(store.context.data.gitRefBehind)
          ? 'GIT_PROMPT_KIT_COLOR_HEAD'
          : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
      "
      :text="`${
        valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_BRANCH) || ''
      }main`"
    />

    <!-- commit -->
    <!-- TODO color should be conditional -->
    <PromptSegmentComponent
      v-if="!valueOf(store.context.data.gitRefBranch)"
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_HEAD"
      :text="`${
        valueOf(valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_COMMIT)) || ''
      }1234567`"
    />
  </span>
</template>
