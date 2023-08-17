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
    v-if="
      valueOf(store.context.data.directoryGitRepo) &&
        (valueOf(store.context.data.gitStatusDeleted) ||
          valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS))
    "
    :key="useVerboseDefaults()"
    :color-option="
      valueOf(store.context.data.gitStatusDeleted)
        ? 'GIT_PROMPT_KIT_COLOR_UNSTAGED'
        : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
    "
    :text="`${valueOf(store.context.data.gitStatusDeleted) ? '2' : ''}${
      valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_DELETED) || ''
    }`"
  />
</template>
