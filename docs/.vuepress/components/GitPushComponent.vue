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
    v-if="valueOf(store.context.data.gitPushRefPush)"
    id="push"
  >
    <!-- push remote symbol -->
    <PromptSegmentComponent
      v-if="
        valueOf(store.context.data.gitPushRefPushAhead) ||
          valueOf(store.context.data.gitPushRefPushBehind) ||
          !valueOf(store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND)
      "
      :key="useVerboseDefaults()"
      :color-option="
        valueOf(store.context.data.gitPushRefPushAhead) ||
          valueOf(store.context.data.gitPushRefPushBehind)
          ? 'GIT_PROMPT_KIT_COLOR_PUSH_REMOTE'
          : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
      "
      :text="
        valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_PUSH_REMOTE) || ''
      "
    />

    <!-- push remote -->
    <!-- note: no push remote branch -->
    <PromptSegmentComponent
      v-if="
        !valueOf(store.context.data.gitPushRefDefaultPushRemote) ||
          !valueOf(store.context.data.gitPushRefSameNamePushRemoteBranch)
      "
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_PUSH_REMOTE"
      :text="
        valueOf(store.context.data.gitPushRefDefaultPushRemote)
          ? ''
          : 'upstream'
      "
    />
  </span>
</template>
