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
      valueOf(store.context.data.gitPushRefPush) &&
        (valueOf(store.context.data.gitPushRefPushBehind) ||
          !valueOf(store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND))
    "
    :key="useVerboseDefaults()"
    :color-option="
      valueOf(store.context.data.gitPushRefPushBehind)
        ? 'GIT_PROMPT_KIT_COLOR_PUSH_REMOTE'
        : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
    "
    :text="`${valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_BEHIND) || ''}${
      valueOf(store.context.data.gitPushRefPushBehind) ? '2' : ''
    }`"
  />
</template>
