import { defineStore } from "pinia";
import { configFromState } from "../utils/configFromState.js";

export const useOptionsStore = defineStore("color", {
  state: () => ({
    options: {
      GIT_PROMPT_KIT_COLOR_ACTION: {
        category: "Color",
        value: {
          default: "199",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_ASSUME_UNCHANGED: {
        category: "Color",
        value: {
          default: "81",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_FAILED: {
        category: "Color",
        value: {
          default: "88",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_HEAD: {
        category: "Color",
        value: {
          default: "140",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_HOST: {
        category: "Color",
        value: {
          default: "109",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_INACTIVE: {
        category: "Color",
        value: {
          default: "247",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_PUSH_REMOTE: {
        category: "Color",
        value: {
          default: "111",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_REMOTE: {
        category: "Color",
        value: {
          default: "216",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE: {
        category: "Color",
        value: {
          default: "81",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_STAGED: {
        category: "Color",
        value: {
          default: "120",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_STASH: {
        category: "Color",
        value: {
          default: "81",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_SUCCEEDED: {
        category: "Color",
        value: {
          default: "76",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_TAG: {
        category: "Color",
        value: {
          default: "86",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_UNSTAGED: {
        category: "Color",
        value: {
          default: "162",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_USER: {
        category: "Color",
        value: {
          default: "109",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_COLOR_WORKDIR: {
        category: "Color",
        value: {
          default: "39",
        },
        notes: "ANSI or hex",
        type: "string",
      },
      GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND: {
        category: "Git",
        value: {
          default: "1",
        },
        type: "integer bit",
      },
      GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS: {
        category: "Git",
        value: {
          default: "1",
        },
        type: "integer bit",
      },
      GIT_PROMPT_KIT_HIDE_TOOL_NAMES: {
        category: "Git",
        value: {
          default: "1",
        },
        type: "integer bit",
      },
      GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS: {
        category: "Git",
        value: {
          default: "1",
        },
        type: "integer bit",
      },
      GIT_PROMPT_KIT_SYMBOL_AHEAD: {
        category: "Git",
        value: {
          default: "+",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_ASSUME_UNCHANGED: {
        category: "Git",
        value: {
          default: "⥱ ",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_BEHIND: {
        category: "Git",
        value: {
          default: "-",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_BRANCH: {
        category: "Git",
        value: {
          default: "",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_COMMIT: {
        category: "Git",
        value: {
          default: "",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_CONFLICTED: {
        category: "Git",
        value: {
          default: "UU",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_DELETED: {
        category: "Git",
        value: {
          default: "_D",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_DELETED_STAGED: {
        category: "Git",
        value: {
          default: "D_",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_HOST: {
        category: "Git",
        value: {
          default: "@",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_MODIFIED: {
        category: "Git",
        value: {
          default: "_M",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED: {
        category: "Git",
        value: {
          default: "M_",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_NEW: {
        category: "Git",
        value: {
          default: "A_",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_PUSH_REMOTE: {
        category: "Git",
        value: {
          default: "@{push}",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_REMOTE: {
        category: "Git",
        value: {
          default: "@{u}",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE: {
        category: "Git",
        value: {
          default: "⤳ ",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_STASH: {
        category: "Git",
        value: {
          default: "⇲",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_TAG: {
        category: "Git",
        value: {
          default: "@",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_UNTRACKED: {
        category: "Git",
        value: {
          default: "??",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_DEFAULT_PUSH_REMOTE_NAME: {
        category: "Git",
        value: {
          default: "upstream",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_DEFAULT_REMOTE_NAME: {
        category: "Git",
        value: {
          default: "origin",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_CWD_TRAILING_COUNT: {
        category: "Git",
        value: {
          default: "1",
        },
        type: "integer",
      },
      GIT_PROMPT_KIT_ROOT_TRAILING_COUNT: {
        category: "Git",
        value: {
          default: "1",
        },
        type: "integer",
      },
      GIT_PROMPT_KIT_LOCAL: {
        category: "Git",
        value: {
          default: "local",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL: {
        category: "Prompt character",
        value: {
          default: "%%",
        },
        notes: "Rendered as a prompt string",
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT: {
        category: "Prompt character",
        value: {
          default: "#",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_HIDDEN_HOSTS: {
        category: "User",
        value: {
          default: "()",
        },
        notes: "Must be in parentheses",
        type: "array",
      },
      GIT_PROMPT_KIT_HIDDEN_USERS: {
        category: "User",
        value: {
          default: "()",
        },
        notes: "Must be in parentheses",
        type: "array",
      },
    },
  }),
  getters: {
    customizations: ({ options }) => configFromState(options),
  },
});
