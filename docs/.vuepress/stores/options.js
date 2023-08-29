import { defineStore } from "pinia";
import configFromState from "../utils/configFromState.js";

export const optionsData = {
  // GROUP: Hometown Prompt content
  HOMETOWN_PROMPT_CUSTOM: {
    group: "Hometown Prompt content",
    value: { default: "" },
    notes:
      "In the terminal, this is printed with <a href='https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html'>prompt expansion</a> with <code>PROMPT_SUBST</code> and <code>PROMPT_PERCENT</code>",
    type: "string",
  },
  HOMETOWN_PROMPT_SHOW_EXTENDED_STATUS: {
    group: "Hometown Prompt content",
    value: { default: "1" },
    type: "integer",
  },
  // GROUP: Hometown Prompt layout
  HOMETOWN_PROMPT_LINEBREAK_AFTER_GIT_REF: {
    group: "Hometown Prompt layout",
    value: { default: "1" },
    type: "integer",
  },
  HOMETOWN_PROMPT_NO_LINEBREAK_BEFORE_GIT_REF: {
    group: "Hometown Prompt layout",
    value: { default: "1" },
    type: "integer",
  },
  // GROUP: COLOR
  GIT_PROMPT_KIT_COLOR_ACTION: {
    group: "Color",
    value: { default: "199" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_ASSUME_UNCHANGED: {
    group: "Color",
    value: { default: "81" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_CWD: {
    group: "Color",
    value: { default: "39" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_FAILED: {
    group: "Color",
    value: { default: "88" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_HEAD: {
    group: "Color",
    value: { default: "140" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_HOST: {
    group: "Color",
    value: { default: "109" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_INACTIVE: {
    group: "Color",
    value: { default: "247" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_PUSH_REMOTE: {
    group: "Color",
    value: { default: "111" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_REMOTE: {
    group: "Color",
    value: { default: "216" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE: {
    group: "Color",
    value: { default: "81" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_STAGED: {
    group: "Color",
    value: { default: "120" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_STASH: {
    group: "Color",
    value: { default: "81" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_SUCCEEDED: {
    group: "Color",
    value: { default: "76" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_TAG: {
    group: "Color",
    value: { default: "86" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_UNSTAGED: {
    group: "Color",
    value: { default: "162" },
    notes: "ANSI or hex",
    type: "color",
  },
  GIT_PROMPT_KIT_COLOR_USER: {
    group: "Color",
    value: { default: "109" },
    notes: "ANSI or hex",
    type: "color",
  },

  // GROUP: BEHAVIOR
  GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND: {
    group: "Behavior",
    value: { default: "1" },
    type: "integer",
  },
  GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS: {
    group: "Behavior",
    value: { default: "1" },
    type: "integer",
  },
  GIT_PROMPT_KIT_HIDE_TOOL_NAMES: {
    group: "Behavior",
    value: { default: "1" },
    type: "integer",
  },
  GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS: {
    group: "Behavior",
    value: { default: "1" },
    type: "integer",
  },

  // GROUP: SYMBOL
  GIT_PROMPT_KIT_SYMBOL_AHEAD: {
    group: "Symbol",
    value: {
      default: "+",
      verboseDefault: "ahead",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_ASSUME_UNCHANGED: {
    group: "Symbol",
    value: {
      default: "⥱ ",
      verboseDefault: "assumed unchanged",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_BEHIND: {
    group: "Symbol",
    value: {
      default: "-",
      verboseDefault: "behind",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_BRANCH: {
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "branch: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL: {
    group: "Symbol",
    value: {
      default: "%%",
    },
    notes: "Rendered as a prompt string",
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT: {
    group: "Symbol",
    value: {
      default: "#",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_COMMIT: {
    group: "Symbol",
    value: {
      default: "",
      verboseDefault: "commit: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_CONFLICTED: {
    group: "Symbol",
    value: {
      default: "UU",
      verboseDefault: " conflicted",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_DELETED: {
    group: "Symbol",
    value: {
      default: "_D",
      verboseDefault: " deleted",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_DELETED_STAGED: {
    group: "Symbol",
    value: {
      default: "D_",
      verboseDefault: " staged deleted",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_HOST: {
    group: "Symbol",
    value: {
      default: "@",
      verboseDefault: " host: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_LOCAL: {
    group: "Content",
    value: {
      default: "local",
      verboseDefault: "",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_MODIFIED: {
    group: "Symbol",
    value: {
      default: "_M",
      verboseDefault: " modified",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED: {
    group: "Symbol",
    value: {
      default: "M_",
      verboseDefault: " modified staged",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_NEW: {
    group: "Symbol",
    value: {
      default: "A_",
      verboseDefault: " new",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_PUSH_REMOTE: {
    group: "Symbol",
    value: {
      default: "@{push}",
      verboseDefault: "push remote: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_REMOTE: {
    group: "Symbol",
    value: {
      default: "@{u}",
      verboseDefault: "remote: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE: {
    group: "Symbol",
    value: {
      default: "⤳ ",
      verboseDefault: " skip worktree",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_STASH: {
    group: "Symbol",
    value: {
      default: "⇲",
      verboseDefault: " stashes",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_TAG: {
    group: "Symbol",
    value: {
      default: "@",
      verboseDefault: "tag: ",
    },
    type: "string",
  },
  GIT_PROMPT_KIT_SYMBOL_UNTRACKED: {
    group: "Symbol",
    value: {
      default: "??",
      verboseDefault: " untracked",
    },
    type: "string",
  },

  // GROUP: CONTENT
  GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT: {
    group: "Content",
    value: { default: 1 },
    type: "integer",
  },
  GIT_PROMPT_KIT_DEFAULT_PUSH_REMOTE_NAME: {
    group: "Content",
    value: { default: "upstream" },
    type: "string",
  },
  GIT_PROMPT_KIT_DEFAULT_REMOTE_NAME: {
    group: "Content",
    value: { default: "origin" },
    type: "string",
  },
  GIT_PROMPT_KIT_HIDDEN_HOSTS: {
    group: "Content",
    value: { default: "()" },
    notes: "Must be in parentheses",
    type: "array",
  },
  GIT_PROMPT_KIT_HIDDEN_USERS: {
    group: "Content",
    value: { default: "()" },
    notes: "Must be in parentheses",
    type: "array",
  },
  GIT_PROMPT_KIT_REPO_SUBDIRECTORY_MAX_TRAILING_COUNT: {
    group: "Content",
    value: { default: "1" },
    type: "integer",
  },
  GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS: {
    group: "Content",
    value: { default: "0" },
    type: "integer",
  },
};

export const useOptionsStore = defineStore("color", {
  state: () => ({
    data: optionsData,
  }),
  getters: {
    customizations: ({ data }) => configFromState(data),
  },
});
