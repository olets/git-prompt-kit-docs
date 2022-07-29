<script>
import Prompt from './Prompt.vue';
import { ansiOrHexColor, hexColor } from '../utils/ansiToHex.js';

export default {
  components: { Prompt },
  data() {
    return {
      config: {
        git: {
          GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND: {
            default: "1",
          },
          GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS: {
            default: "1",
          },
          GIT_PROMPT_KIT_HIDE_TOOL_NAMES: {
            default: "1",
          },
          GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS: {
            default: "1",
          },
          GIT_PROMPT_KIT_SYMBOL_AHEAD: {
            default: "+",
          },
          GIT_PROMPT_KIT_SYMBOL_ASSUME_UNCHANGED: {
            default: "⥱ ",
          },
          GIT_PROMPT_KIT_SYMBOL_BEHIND: {
            default: "-",
          },
          GIT_PROMPT_KIT_SYMBOL_BRANCH: {
            default: "",
          },
          GIT_PROMPT_KIT_SYMBOL_COMMIT: {
            default: "",
          },
          GIT_PROMPT_KIT_SYMBOL_CONFLICTED: {
            default: "UU",
          },
          GIT_PROMPT_KIT_SYMBOL_DELETED: {
            default: "_D",
          },
          GIT_PROMPT_KIT_SYMBOL_DELETED_STAGED: {
            default: "D_",
          },
          GIT_PROMPT_KIT_SYMBOL_HOST: {
            default: "@",
          },
          GIT_PROMPT_KIT_SYMBOL_MODIFIED: {
            default: "_M",
          },
          GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED: {
            default: "M_",
          },
          GIT_PROMPT_KIT_SYMBOL_NEW: {
            default: "A_",
          },
          GIT_PROMPT_KIT_SYMBOL_PUSH_REMOTE: {
            default: "@{push}",
          },
          GIT_PROMPT_KIT_SYMBOL_REMOTE: {
            default: "@{u}",
          },
          GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE: {
            default: "⤳ ",
          },
          GIT_PROMPT_KIT_SYMBOL_STASH: {
            default: "⇲",
          },
          GIT_PROMPT_KIT_SYMBOL_TAG: {
            default: "@",
          },
          GIT_PROMPT_KIT_SYMBOL_UNTRACKED: {
            default: "??",
          },
          GIT_PROMPT_KIT_DEFAULT_PUSH_REMOTE_NAME: {
            default: "upstream",
          },
          GIT_PROMPT_KIT_DEFAULT_REMOTE_NAME: {
            default: "origin",
          },
          GIT_PROMPT_KIT_CWD_TRAILING_COUNT: {
            default: "1",
          },
          GIT_PROMPT_KIT_ROOT_TRAILING_COUNT: {
            default: "1",
          },
          GIT_PROMPT_KIT_LOCAL: {
            default: "local",
          },
          GIT_PROMPT_KIT_LINEBREAK_AFTER_GIT_REF: {
            default: "1",
          },
          GIT_PROMPT_KIT_NO_LINEBREAK_BEFORE_GIT_REF: {
            default: "1",
          },
        },
        user: {
          GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL: {
            default: "%%",
          },
          GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT: {
            default: "#",
          },
          GIT_PROMPT_KIT_HIDDEN_HOSTS: {
            default: "()",
          },
          GIT_PROMPT_KIT_HIDDEN_USERS: {
            default: "()",
          },
        },
        colors: {
          GIT_PROMPT_KIT_COLOR_ACTION: {
            default: "199",
          },
          GIT_PROMPT_KIT_COLOR_ASSUME_UNCHANGED: {
            default: "81",
          },
          GIT_PROMPT_KIT_COLOR_FAILED: {
            default: "88",
          },
          GIT_PROMPT_KIT_COLOR_HEAD: {
            default: "140",
          },
          GIT_PROMPT_KIT_COLOR_HOST: {
            default: "109",
          },
          GIT_PROMPT_KIT_COLOR_INACTIVE: {
            default: "247",
          },
          GIT_PROMPT_KIT_COLOR_PUSH_REMOTE: {
            default: "111",
          },
          GIT_PROMPT_KIT_COLOR_REMOTE: {
            default: "216",
          },
          GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE: {
            default: "81",
          },
          GIT_PROMPT_KIT_COLOR_STAGED: {
            default: "120",
          },
          GIT_PROMPT_KIT_COLOR_STASH: {
            default: "81",
          },
          GIT_PROMPT_KIT_COLOR_SUCCEEDED: {
            default: "76",
          },
          GIT_PROMPT_KIT_COLOR_TAG: {
            default: "86",
          },
          GIT_PROMPT_KIT_COLOR_UNSTAGED: {
            default: "162",
          },
          GIT_PROMPT_KIT_COLOR_USER: {
            default: "109",
          },
          GIT_PROMPT_KIT_COLOR_WORKDIR: {
            default: "39",
          },
        }
      },
    }
  },
  computed: {
    gitConfig() {
      return this.configFromState(this.config.git)
    },
    userConfig() {
      return this.configFromState(this.config.user)
    },
    colorsConfig() {
      return this.configFromState(this.config.colors)
    },
    textarea() {
      this.config
      return [
        this.gitConfig,
        this.userConfig,
        this.colorsConfig,
      ].filter(v => v)
        .join('\n')
    }
  },
  methods: {
    ansiOrHexColor,
    hexColor,
    configFromState(configObj) {
      let customizedEntries = []
      
      for (let entry of Object.entries(configObj)) {
        const key = entry[0]
        const values = entry[1]
        
        if (values?.custom && values.default !== values.custom) {
          customizedEntries.push(`${key}="${values.custom}"`)
        }
      }
      
      return customizedEntries.join('\n')
    },
    reset() {
      for (let configType of Object.keys(this.config)) {
        for (let configOption of Object.keys(this.config[configType])) {
          this.config[configType][configOption].custom = null
        }
      }
    },
  }
}
</script>

<template>
	<details>
    <summary>Interactive configurator</summary>
  	<form style="display: grid; gap: 8px">
    <details>
      <summary :style="this.gitConfig ? 'color: red' : ''">Git</summary>
      <label v-for="(value, key) in config.git" style="display: flex; gap: 4px; ">
        <code>{{ key }}</code>

        <span v-if="value.default">(default: <code>{{ value.default}}</code>)</span>

        <input  type="text" v-model="value.custom" :data-config-key="key" :placeholder="value.default">
      </label>
    </details>
    
    <details>
      <summary :style="this.colorsConfig ? 'color: red' : ''">Colors</summary>
      <label v-for="(value, key) in config.colors" style="display: flex; gap: 4px; ">
        <code>{{ key }}</code>

        <span v-if="value.default">(default: <code>{{ value.default }}</code>)</span>

        <input
               type="text"
               :value="value.custom"
               :data-config-key="key" 
               :placeholder="value.default"          
               @input="event => value.custom = ansiOrHexColor(event.target.value)"
				>

        <input
          type="color"
          :value="hexColor(value.custom || value.default)"
          @input="event => value.custom = ansiOrHexColor(event.target.value)"
        >
      </label>
    </details>

    <details>
      <summary :style="this.userConfig ? 'color: red' : ''">User</summary>
      <label v-for="(value, key) in config.user" style="display: flex; gap: 4px; ">
        <code>{{ key }}</code>

        <span v-if="value.default">(default: <code>{{ value.default}}</code>)</span>

        <input  type="text" v-model="value.custom" :data-config-key="key" :placeholder="value.default">
      </label>
    </details>
        
    <div>
      <button type="button" @click="reset">
        reset defaults
      </button>
    </div>
  </form>
  </details>
  
  <details>
    	<summary>Components</summary>
      <Prompt v-bind="config"></Prompt>
  </details>
  
  <details>
    <summary :style="textarea ? 'color: red' : ''">Config to paste into .zshrc</summary>
	  <textarea v-model="textarea" readonly spellcheck="false" rows="10" style="resize: vertical; width: 100%" id="textarea"></textarea>
  </details>
</template>