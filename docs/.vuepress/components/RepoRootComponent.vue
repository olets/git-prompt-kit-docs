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
    path() {
      const aboveRoot = ["~", "projects", "olets"];
      const root = `<span style="text-decoration: underline">git-prompt-kit</span>`;

      let segments = [];

      if (
        valueOf(this.store.options.data.GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT) <
          0 ||
        valueOf(
          this.store.options.data.GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT
        ) >= aboveRoot.length
      ) {
        segments = aboveRoot;
      } else {
        segments = aboveRoot.slice(
          aboveRoot.length -
            valueOf(
              this.store.options.data.GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT
            )
        );
      }

      segments.push(root);

      return segments.join("/");
    },
    valueOf,
  },
};
</script>

<template>
  <PromptSegmentComponent
    v-if="valueOf(store.context.data.directoryGitRepo)"
    color-option="GIT_PROMPT_KIT_COLOR_CWD"
    :text="path()"
  />
</template>
