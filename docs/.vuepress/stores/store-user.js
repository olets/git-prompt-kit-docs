import { defineStore } from "pinia";
import { configFromState } from "../utils/configFromState.js";

export const useUserStore = defineStore("user", {
  state: () => ({
    options: {
      GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL: {
        custom: null,
        default: "%%",
        type: "Prompt string",
      },
      GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT: {
        custom: null,
        default: "#",
        type: "String",
      },
      GIT_PROMPT_KIT_HIDDEN_HOSTS: {
        custom: null,
        default: "()",
        type: "Array",
      },
      GIT_PROMPT_KIT_HIDDEN_USERS: {
        custom: null,
        default: "()",
        type: "Array",
      },
    },
  }),
  getters: {
    customizations: ({ options }) => configFromState(options),
  },
});
