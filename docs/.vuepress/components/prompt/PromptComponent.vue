<script>
import { useOptionsStore } from "../../stores/options";
import { useContextStore } from "../../stores/context";
import { hexColor } from "../../utils/ansiToHex.js";
import { valueOf } from "../../utils/valueOf";
import PromptSegmentComponent from "./PromptSegmentComponent.vue";
import ActionComponent from "../ActionComponent.vue";
import CwdComponent from "../CwdComponent.vue";
import UserhostComponent from "../UserhostComponent.vue";
import GitRefComponent from "../GitRefComponent.vue";
import StatusExtendedComponent from "../StatusExtendedComponent.vue";
import StatusComponent from "../StatusComponent.vue";
import CharComponent from "../CharComponent.vue";

export default {
  components: [
    ActionComponent,
    CharComponent,
    CwdComponent,
    GitRefComponent,
    PromptSegmentComponent,
    StatusExtendedComponent,
    StatusComponent,
    UserhostComponent,
  ],
  setup() {
    const store = {
      context: useContextStore(),
      options: useOptionsStore(),
    };
    return { store };
  },
  methods: {
    hexColor,
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
    id="prompt"
    :style="`background-color: ${hexColor(
      valueOf(store.context.data.terminalBackgroundColor)
    )}; color: ${hexColor(valueOf(store.context.data.terminalTextColor))};
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: .25rem;`"
  >
    <div style="display: flex; gap: var(--prompt-gap)">
      <span
        id="not-git"
        style="display: flex; gap: var(--prompt-gap)"
      >
        <UserhostComponent />

        <div>4:07:47</div>

        <CwdComponent />
      </span>
      <GitRefComponent />
    </div>

    <div style="display: flex; gap: var(--prompt-gap)">
      <StatusExtendedComponent />

      <StatusComponent />

      <ActionComponent />
    </div>

    <!-- prompt character -->
    <CharComponent />
  </div>
</template>
