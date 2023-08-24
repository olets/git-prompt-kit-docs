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
  computed: {
    remoteName() {
      return `${
        !valueOf(this.store.context.data.gitRefDefaultRemote) ? "upstream" : ""
      }${
        !valueOf(this.store.context.data.gitRefDefaultRemote) &&
        !valueOf(this.store.context.data.gitRefSameNameRemoteBranch)
          ? "/"
          : ""
      }${
        !valueOf(this.store.context.data.gitRefSameNameRemoteBranch)
          ? "trunk"
          : ""
      }`;
    },
    remoteSymbol() {
      return (
        valueOf(this.store.options.data.GIT_PROMPT_KIT_SYMBOL_REMOTE) &&
        valueOf(this.store.context.data.gitPushRefPush) &&
        (valueOf(this.store.context.data.gitRefAhead) ||
          valueOf(this.store.context.data.gitRefBehind) ||
          !valueOf(
            this.store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
          ))
      );
    },
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
    v-if="
      valueOf(store.context.data.gitRefRemote) && (remoteSymbol || remoteName)
    "
    id="upstream"
    style="display: flex; gap: var(--prompt-gap)"
  >
    <!-- remote symbol -->
    <PromptSegmentComponent
      v-if="remoteSymbol"
      :key="useVerboseDefaults()"
      :color-option="
        valueOf(store.context.data.gitRefAhead) ||
          valueOf(store.context.data.gitRefBehind)
          ? 'GIT_PROMPT_KIT_COLOR_REMOTE'
          : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
      "
      :text="remoteSymbol"
    />

    <!-- remote and remote branch -->
    <PromptSegmentComponent
      v-if="remoteName"
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_REMOTE"
      :text="remoteName"
    />
  </span>
</template>
