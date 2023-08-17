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
  <div
    v-if="
      !valueOf(store.context.data.userHiddenUser) ||
        !valueOf(store.context.data.userHiddenHost)
    "
  >
    <PromptSegmentComponent
      v-if="!valueOf(store.context.data.userHiddenUser)"
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_USER"
      text="olets"
    />

    <PromptSegmentComponent
      v-if="!valueOf(store.context.data.userHiddenHost)"
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_HOST"
      text="@dev"
    />
  </div>
</template>
