<script>
import { useOptionsStore } from "../stores/options";
import { useContextStore } from "../stores/context";
import { getValue } from "../utils/value";
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
      return getValue(
        this.store.options.data.GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS
      );
    },
    getValue,
  },
};
</script>

<template>
  <div
    v-if="
      !getValue(store.context.data.userHiddenUser) ||
        !getValue(store.context.data.userHiddenHost)
    "
  >
    <PromptSegmentComponent
      v-if="!getValue(store.context.data.userHiddenUser)"
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_USER"
      text="olets"
    />

    <PromptSegmentComponent
      v-if="!getValue(store.context.data.userHiddenHost)"
      :key="useVerboseDefaults()"
      color-option="GIT_PROMPT_KIT_COLOR_HOST"
      text="@dev"
    />
  </div>
</template>
