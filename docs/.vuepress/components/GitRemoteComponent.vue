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
  <!-- local -->
  <span
    v-if="
      valueOf(store.context.data.gitRefBranch) &&
        !valueOf(store.context.data.gitRefRemote)
    "
    :style="`color: ${hexColor(
      valueOf(store.options.data.GIT_PROMPT_KIT_COLOR_REMOTE)
    )};`"
  >
    {{ valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_LOCAL) }}
  </span>
  <!-- upstream -->
  <span
    v-if="valueOf(store.context.data.gitRefRemote)"
    id="upstream"
    style="display: flex; gap: var(--prompt-gap)"
  >
    <!-- remote symbol -->
    <span
      v-if="
        valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_REMOTE) &&
          valueOf(store.context.data.gitPushRefPush)
      "
    >
      <PromptSegmentComponent
        v-if="
          valueOf(store.context.data.gitRefAhead) ||
            valueOf(store.context.data.gitRefBehind) ||
            !valueOf(store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND)
        "
        :key="useVerboseDefaults()"
        :color-option="
          valueOf(store.context.data.gitRefAhead) ||
            valueOf(store.context.data.gitRefBehind)
            ? 'GIT_PROMPT_KIT_COLOR_REMOTE'
            : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
        "
        :text="valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_REMOTE)"
      />
    </span>

    <!-- remote and remote branch -->
    <PromptSegmentComponent
      v-if="
        !valueOf(store.context.data.gitRefDefaultRemote) ||
          !valueOf(store.context.data.gitRefSameNameRemoteBranch)
      "
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_REMOTE"
      :text="`${
        !valueOf(store.context.data.gitRefDefaultRemote) ? 'upstream' : ''
      }${
        !valueOf(store.context.data.gitRefDefaultRemote) &&
        !valueOf(store.context.data.gitRefSameNameRemoteBranch)
          ? '/'
          : ''
      }${
        !valueOf(store.context.data.gitRefSameNameRemoteBranch) ? 'trunk' : ''
      }`"
    />
  </span>
</template>
