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
      const subdirectories = ["website", "docs", "demo"];
      const cwd = "subdirectory";

      let segments = [];

      if (
        valueOf(
          this.store.options.data
            .GIT_PROMPT_KIT_REPO_SUBDIRECTORY_MAX_TRAILING_COUNT
        ) < 0 ||
        valueOf(
          this.store.options.data
            .GIT_PROMPT_KIT_REPO_SUBDIRECTORY_MAX_TRAILING_COUNT
        ) >= subdirectories.length
      ) {
        segments = subdirectories;
      } else {
        segments = [
          ...segments,
          "...",
          ...subdirectories.slice(
            subdirectories.length -
              valueOf(
                this.store.options.data
                  .GIT_PROMPT_KIT_REPO_SUBDIRECTORY_MAX_TRAILING_COUNT
              )
          ),
        ];
      }

      segments.push(cwd);

      return segments.join("/");
    },
    valueOf,
  },
};
</script>

<template>
  <PromptSegmentComponent
    v-if="valueOf(store.context.data.directoryGitSubdirectory)"
    color-option="GIT_PROMPT_KIT_COLOR_CWD"
    :text="path()"
  />
</template>
