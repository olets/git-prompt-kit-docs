<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { valueOf } from "../utils/valueOf";
import PromptSegmentComponent from "./prompt/PromptSegmentComponent.vue";
import GitHeadComponent from "./GitHeadComponent.vue";
import GitRemoteComponent from "./GitRemoteComponent.vue";
import GitAheadComponent from "./GitAheadComponent.vue";
import GitBehindComponent from "./GitBehindComponent.vue";
import GitPushComponent from "./GitPushComponent.vue";
import GitPushAheadComponent from "./GitPushAheadComponent.vue";
import GitPushBehindComponent from "./GitPushBehindComponent.vue";
import GitTagComponent from "./GitTagComponent.vue";

export default {
  components: [
    GitAheadComponent,
    GitBehindComponent,
    GitHeadComponent,
    GitPushComponent,
    GitPushAheadComponent,
    GitPushBehindComponent,
    GitRemoteComponent,
    GitTagComponent,
    PromptSegmentComponent,
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
    v-if="valueOf(store.context.data.directoryGitRepo)"
    id="git-ref"
    style="display: flex; gap: var(--prompt-gap)"
  >
    <PromptSegmentComponent
      v-if="!valueOf(store.options.data.GIT_PROMPT_KIT_HIDE_TOOL_NAMES)"
      text="Git"
    />

    <GitHeadComponent />

    <GitRemoteComponent />

    <GitAheadComponent />

    <GitBehindComponent />

    <GitPushComponent />

    <GitPushAheadComponent />

    <GitPushBehindComponent />

    <GitTagComponent />
  </span>
</template>
