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
      valueOf(store.context.data.extendedGitStatusSkipWorktree) ||
        !valueOf(store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS)
    "
    :key="useVerboseDefaults()"
    :color-option="
      valueOf(store.context.data.extendedGitStatusSkipWorktree)
        ? 'GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE'
        : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
    "
    :text="`${
      valueOf(store.context.data.extendedGitStatusSkipWorktree) ? '2' : ''
    }${valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE) || ''}`"
  />
</template>
