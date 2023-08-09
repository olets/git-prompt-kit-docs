import { defineStore } from "pinia";
import { configFromState } from "../utils/configFromState.js";

export const useOptionsStore = defineStore("color", {
  state: () => ({
    options: {
      GIT_PROMPT_KIT_COLOR_ACTION: {
        category: "Color",
        value: {
          custom: null,
          default: "199",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_ASSUME_UNCHANGED: {
        category: "Color",
        value: {
          custom: null,
          default: "81",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_FAILED: {
        category: "Color",
        value: {
          custom: null,
          default: "88",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_HEAD: {
        category: "Color",
        value: {
          custom: null,
          default: "140",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_HOST: {
        category: "Color",
        value: {
          custom: null,
          default: "109",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_INACTIVE: {
        category: "Color",
        value: {
          custom: null,
          default: "247",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_PUSH_REMOTE: {
        category: "Color",
        value: {
          custom: null,
          default: "111",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_REMOTE: {
        category: "Color",
        value: {
          custom: null,
          default: "216",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE: {
        category: "Color",
        value: {
          custom: null,
          default: "81",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_STAGED: {
        category: "Color",
        value: {
          custom: null,
          default: "120",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_STASH: {
        category: "Color",
        value: {
          custom: null,
          default: "81",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_SUCCEEDED: {
        category: "Color",
        value: {
          custom: null,
          default: "76",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_TAG: {
        category: "Color",
        value: {
          custom: null,
          default: "86",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_UNSTAGED: {
        category: "Color",
        value: {
          custom: null,
          default: "162",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_USER: {
        category: "Color",
        value: {
          custom: null,
          default: "109",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_COLOR_WORKDIR: {
        category: "Color",
        value: {
          custom: null,
          default: "39",
        },
        type: "string (ANSI or hex)",
      },
      GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND: {
        category: "Git",
        value: {
          custom: null,
          default: "1",
        },
        type: "integer (boolean)",
      },
      GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS: {
        category: "Git",
        value: {
          custom: null,
          default: "1",
        },
        type: "integer (boolean)",
      },
      GIT_PROMPT_KIT_HIDE_TOOL_NAMES: {
        category: "Git",
        value: {
          custom: null,
          default: "1",
        },
        type: "integer (boolean)",
      },
      GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS: {
        category: "Git",
        value: {
          custom: null,
          default: "1",
        },
        type: "integer (boolean)",
      },
      GIT_PROMPT_KIT_SYMBOL_AHEAD: {
        category: "Git",
        value: {
          custom: null,
          default: "+",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_ASSUME_UNCHANGED: {
        category: "Git",
        value: {
          custom: null,
          default: "⥱ ",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_BEHIND: {
        category: "Git",
        value: {
          custom: null,
          default: "-",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_BRANCH: {
        category: "Git",
        value: {
          custom: null,
          default: "",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_COMMIT: {
        category: "Git",
        value: {
          custom: null,
          default: "",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_CONFLICTED: {
        category: "Git",
        value: {
          custom: null,
          default: "UU",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_DELETED: {
        category: "Git",
        value: {
          custom: null,
          default: "_D",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_DELETED_STAGED: {
        category: "Git",
        value: {
          custom: null,
          default: "D_",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_HOST: {
        category: "Git",
        value: {
          custom: null,
          default: "@",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_MODIFIED: {
        category: "Git",
        value: {
          custom: null,
          default: "_M",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED: {
        category: "Git",
        value: {
          custom: null,
          default: "M_",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_NEW: {
        category: "Git",
        value: {
          custom: null,
          default: "A_",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_PUSH_REMOTE: {
        category: "Git",
        value: {
          custom: null,
          default: "@{push}",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_REMOTE: {
        category: "Git",
        value: {
          custom: null,
          default: "@{u}",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE: {
        category: "Git",
        value: {
          custom: null,
          default: "⤳ ",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_STASH: {
        category: "Git",
        value: {
          custom: null,
          default: "⇲",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_TAG: {
        category: "Git",
        value: {
          custom: null,
          default: "@",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_UNTRACKED: {
        category: "Git",
        value: {
          custom: null,
          default: "??",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_DEFAULT_PUSH_REMOTE_NAME: {
        category: "Git",
        value: {
          custom: null,
          default: "upstream",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_DEFAULT_REMOTE_NAME: {
        category: "Git",
        value: {
          custom: null,
          default: "origin",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_CWD_TRAILING_COUNT: {
        category: "Git",
        value: {
          custom: null,
          default: "1",
        },
        type: "integer",
      },
      GIT_PROMPT_KIT_ROOT_TRAILING_COUNT: {
        category: "Git",
        value: {
          custom: null,
          default: "1",
        },
        type: "integer",
      },
      GIT_PROMPT_KIT_LOCAL: {
        category: "Git",
        value: {
          custom: null,
          default: "local",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL: {
        category: "Prompt character",
        value: {
          custom: null,
          default: "%%",
        },
        type: "prompt string",
      },
      GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT: {
        category: "Prompt character",
        value: {
          custom: null,
          default: "#",
        },
        type: "string",
      },
      GIT_PROMPT_KIT_HIDDEN_HOSTS: {
        category: "User",
        value: {
          custom: null,
          default: "()",
        },
        type: "array",
      },
      GIT_PROMPT_KIT_HIDDEN_USERS: {
        category: "User",
        value: {
          custom: null,
          default: "()",
        },
        type: "array",
      },
    },
  }),
  getters: {
    customizations: ({ options }) => configFromState(options),
  },
});
