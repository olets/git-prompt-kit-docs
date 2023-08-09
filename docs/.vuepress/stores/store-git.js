import { defineStore } from "pinia";
import { configFromState } from "../utils/configFromState.js";

export const useGitStore = defineStore("git", {
  state: () => ({
    options: {
      GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND: {
        custom: null,
        default: "1",
        type: "integer (boolean)",
      },
      GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS: {
        custom: null,
        default: "1",
        type: "integer (boolean)",
      },
      GIT_PROMPT_KIT_HIDE_TOOL_NAMES: {
        custom: null,
        default: "1",
        type: "integer (boolean)",
      },
      GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS: {
        custom: null,
        default: "1",
        type: "integer (boolean)",
      },
      GIT_PROMPT_KIT_SYMBOL_AHEAD: {
        custom: null,
        default: "+",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_ASSUME_UNCHANGED: {
        custom: null,
        default: "⥱ ",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_BEHIND: {
        custom: null,
        default: "-",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_BRANCH: {
        custom: null,
        default: "",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_COMMIT: {
        custom: null,
        default: "",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_CONFLICTED: {
        custom: null,
        default: "UU",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_DELETED: {
        custom: null,
        default: "_D",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_DELETED_STAGED: {
        custom: null,
        default: "D_",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_HOST: {
        custom: null,
        default: "@",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_MODIFIED: {
        custom: null,
        default: "_M",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED: {
        custom: null,
        default: "M_",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_NEW: {
        custom: null,
        default: "A_",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_PUSH_REMOTE: {
        custom: null,
        default: "@{push}",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_REMOTE: {
        custom: null,
        default: "@{u}",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE: {
        custom: null,
        default: "⤳ ",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_STASH: {
        custom: null,
        default: "⇲",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_TAG: {
        custom: null,
        default: "@",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_UNTRACKED: {
        custom: null,
        default: "??",
        type: "string",
      },
      GIT_PROMPT_KIT_DEFAULT_PUSH_REMOTE_NAME: {
        custom: null,
        default: "upstream",
        type: "string",
      },
      GIT_PROMPT_KIT_DEFAULT_REMOTE_NAME: {
        custom: null,
        default: "origin",
        type: "string",
      },
      GIT_PROMPT_KIT_CWD_TRAILING_COUNT: {
        custom: null,
        default: "1",
        type: "integer",
      },
      GIT_PROMPT_KIT_ROOT_TRAILING_COUNT: {
        custom: null,
        default: "1",
        type: "integer",
      },
      GIT_PROMPT_KIT_LOCAL: {
        custom: null,
        default: "local",
        type: "string",
      },
    },
  }),
  getters: {
    customizations: ({ options }) => configFromState(options),
  },
});
