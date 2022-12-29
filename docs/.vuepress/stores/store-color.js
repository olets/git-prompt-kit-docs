import { defineStore } from "pinia";
import { configFromState } from "../utils/configFromState.js";

export const useColorStore = defineStore("color", {
  state: () => ({
    options: {
      GIT_PROMPT_KIT_COLOR_ACTION: {
        custom: null,
        default: "199",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_ASSUME_UNCHANGED: {
        custom: null,
        default: "81",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_FAILED: {
        custom: null,
        default: "88",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_HEAD: {
        custom: null,
        default: "140",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_HOST: {
        custom: null,
        default: "109",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_INACTIVE: {
        custom: null,
        default: "247",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_PUSH_REMOTE: {
        custom: null,
        default: "111",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_REMOTE: {
        custom: null,
        default: "216",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE: {
        custom: null,
        default: "81",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_STAGED: {
        custom: null,
        default: "120",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_STASH: {
        custom: null,
        default: "81",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_SUCCEEDED: {
        custom: null,
        default: "76",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_TAG: {
        custom: null,
        default: "86",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_UNSTAGED: {
        custom: null,
        default: "162",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_USER: {
        custom: null,
        default: "109",
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_WORKDIR: {
        custom: null,
        default: "39",
        type: "string (ANSI or hex)",
      },
    },
  }),
  getters: {
    customizations: ({ options }) => configFromState(options),
  },
});
