<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { valueOf } from "../utils/valueOf";
import AssumedUnchangedComponent from "./AssumedUnchangedComponent.vue";
import PromptSegmentComponent from "./prompt/PromptSegmentComponent.vue";
import SkipWorktreeComponent from "./SkipWorktreeComponent.vue";
import StashesComponent from "./StashesComponent.vue";

export default {
  components: [
    AssumedUnchangedComponent,
    PromptSegmentComponent,
    SkipWorktreeComponent,
    StashesComponent,
  ],
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
    v-if="
      valueOf(store.context.data.directoryGitRepo) &&
        (valueOf(store.context.data.extendedGitStatusStashes) ||
          valueOf(store.context.data.extendedGitStatusAssumeUnchanged) ||
          valueOf(store.context.data.extendedGitStatusSkipWorktree) ||
          !valueOf(
            store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS
          ))
    "
    id="extended"
    style="display: flex; gap: var(--prompt-gap)"
  >
    <StashesComponent />

    <AssumedUnchangedComponent />

    <SkipWorktreeComponent />
  </span>
</template>
