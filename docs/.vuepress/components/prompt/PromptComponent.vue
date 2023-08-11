<script>
import { useOptionsStore } from "../../stores/options";
import { useContextStore } from "../../stores/context";
import { hexColor } from "../../utils/ansiToHex.js";
import valueOf from "../../utils/valueOf";
import PromptSegmentComponent from "./PromptSegmentComponent.vue";

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
    hexColor,
    valueOf,
    segment(color, text) {
      return `
        <span style="color: ${color};">
          ${text}
        </span>
      `;
    },
  },
};
</script>

<template>
  <div
    id="prompt"
    data-module="git-prompt-kit"
    :style="`background-color: ${hexColor(
      valueOf(store.context.data.terminalBackgroundColor)
    )}; color: ${hexColor(valueOf(store.context.data.terminalTextColor))};
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    margin: 1rem;
    border-radius: .25rem;`"
  >
    <div style="display: flex; gap: var(--prompt-gap)">
      <span
        id="not-git"
        style="display: flex; gap: var(--prompt-gap)"
      >
        <div>
          <PromptSegmentComponent
            v-if="!valueOf(store.context.data.hiddenUser)"
            color-option="GIT_PROMPT_KIT_COLOR_USER"
            text="olets"
          />

          <PromptSegmentComponent
            v-if="!valueOf(store.context.data.hiddenHost)"
            color-option="GIT_PROMPT_KIT_COLOR_HOST"
            text="@dev"
          />
        </div>

        <PromptSegmentComponent text="4:07:47" />

        <!-- GIT_PROMPT_KIT_WORKDIR -->
        <div style="display: flex; gap: var(--prompt-gap)">
          <PromptSegmentComponent
            color-option="GIT_PROMPT_KIT_COLOR_WORKDIR"
            :text="`~/olets${valueOf(store.context.data.git) ? '/' : ''}`"
          />

          <PromptSegmentComponent
            v-if="valueOf(store.context.data.git)"
            color-option="GIT_PROMPT_KIT_COLOR_WORKDIR"
            style="text-decoration: underline"
            text="git-prompt-kit"
          />
        </div>
      </span>

      <span
        v-if="valueOf(store.context.data.git)"
        id="git-ref"
        style="display: flex; gap: var(--prompt-gap)"
      >
        <PromptSegmentComponent
          v-if="!valueOf(store.options.data.GIT_PROMPT_KIT_HIDE_TOOL_NAMES)"
          text="Git"
        />

        <span
          id="head"
          style="display: flex; gap: var(--prompt-gap)"
        >
          <!-- branch -->
          <PromptSegmentComponent
            v-if="valueOf(store.context.data.branch)"
            color-option="GIT_PROMPT_KIT_COLOR_HEAD"
            :text="`${
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_BRANCH) || ''
            }main`"
          />

          <!-- commit -->
          <PromptSegmentComponent
            v-if="!valueOf(store.context.data.branch)"
            color-option="GIT_PROMPT_KIT_COLOR_HEAD"
            :text="`${
              valueOf(
                valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_COMMIT)
              ) || ''
            }1234567`"
          />
        </span>

        <!-- local -->
        <span
          v-if="
            valueOf(store.context.data.branch) &&
              !valueOf(store.context.data.remote)
          "
          :style="`color: ${hexColor(
            valueOf(store.options.data.GIT_PROMPT_KIT_COLOR_REMOTE)
          )};`"
        >
          {{ valueOf(store.options.data.GIT_PROMPT_KIT_LOCAL) }}
        </span>

        <!-- upstream -->
        <span
          v-if="valueOf(store.context.data.remote)"
          id="upstream"
        >
          <!-- remote symbol -->
          <!-- TODO is this the real logic? if not should it be? -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.ahead) ||
                valueOf(store.context.data.behind) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.ahead) ||
                valueOf(store.context.data.behind)
                ? 'GIT_PROMPT_KIT_COLOR_REMOTE'
                : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
            "
            :text="
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_REMOTE) || ''
            "
          />

          <!-- remote and remote branch -->
          <PromptSegmentComponent
            v-if="
              !valueOf(store.context.data.defaultRemote) ||
                !valueOf(store.context.data.sameNameRemoteBranch)
            "
            color-option="GIT_PROMPT_KIT_COLOR_REMOTE"
            :text="`${
              valueOf(store.context.data.defaultRemote) ? '' : 'upstream/'
            }${
              valueOf(store.context.data.sameNameRemoteBranch) ? '' : 'trunk'
            }`"
          />

          <!-- remote ahead -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.ahead) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.ahead)
                ? 'GIT_PROMPT_KIT_COLOR_REMOTE'
                : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
            "
            :text="`${
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_AHEAD) || ''
            }${valueOf(store.context.data.ahead) ? '2' : ''}`"
          />

          <!-- remote behind -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.behind) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.behind)
                ? 'GIT_PROMPT_KIT_COLOR_REMOTE'
                : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
            "
            :text="`${
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_BEHIND) || ''
            }${valueOf(store.context.data.behind) ? '2' : ''}`"
          />
        </span>

        <!-- push remote -->
        <span
          v-if="valueOf(store.context.data.push)"
          id="push"
        >
          <!-- push remote symbol -->
          <!-- TODO is this the real logic? if not should it be? -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.pushAhead) ||
                valueOf(store.context.data.pushBehind) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.pushAhead) ||
                valueOf(store.context.data.pushBehind)
                ? 'GIT_PROMPT_KIT_COLOR_PUSH_REMOTE'
                : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
            "
            :text="
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_PUSH_REMOTE) ||
                ''
            "
          />

          <!-- push remote -->
          <!-- note: no push remote branch -->
          <PromptSegmentComponent
            v-if="
              !valueOf(store.context.data.defaultPushRemote) ||
                !valueOf(store.context.data.sameNamePushRemoteBranch)
            "
            color-option="GIT_PROMPT_KIT_COLOR_PUSH_REMOTE"
            :text="
              valueOf(store.context.data.defaultPushRemote) ? '' : 'upstream'
            "
          />

          <!-- push remote ahead -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.pushAhead) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.pushAhead)
                ? 'GIT_PROMPT_KIT_COLOR_PUSH_REMOTE'
                : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
            "
            :text="`${
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_AHEAD) || ''
            }${valueOf(store.context.data.pushAhead) ? '2' : ''}`"
          />

          <!-- push remote behind -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.pushBehind) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.pushBehind)
                ? 'GIT_PROMPT_KIT_COLOR_PUSH_REMOTE'
                : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
            "
            :text="`${
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_BEHIND) || ''
            }${valueOf(store.context.data.pushBehind) ? '2' : ''}`"
          />
        </span>

        <!-- tag -->
        <PromptSegmentComponent
          v-if="valueOf(store.context.data.tag)"
          color-option="GIT_PROMPT_KIT_COLOR_TAG"
          :text="`${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_TAG) || ''
          }v9000`"
        />
      </span>
    </div>

    <span
      id="git-status"
      style="display: flex; gap: var(--prompt-gap)"
    >
      <span
        id="extended"
        style="display: flex; gap: var(--prompt-gap)"
      >
        <!-- stash -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.stashes) ||
              valueOf(
                store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS
              )
          "
          :color-option="
            valueOf(store.context.data.stashes)
              ? 'GIT_PROMPT_KIT_COLOR_STASH'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.stashes) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_STASH) || ''
          }`"
        />

        <!-- assume-unchanged -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.assumeUnchanged) ||
              valueOf(
                store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS
              )
          "
          :color-option="
            valueOf(store.context.data.assumeUnchanged)
              ? 'GIT_PROMPT_KIT_COLOR_ASSUME_UNCHANGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.assumeUnchanged) ? '2' : ''}${
            valueOf(
              store.options.data.GIT_PROMPT_KIT_SYMBOL_ASSUME_UNCHANGED
            ) || ''
          }`"
        />

        <!-- skip-worktree -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.skipWorktree) ||
              valueOf(
                store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS
              )
          "
          :color-option="
            valueOf(store.context.data.skipWorktree)
              ? 'GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.skipWorktree) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE) ||
            ''
          }`"
        />
      </span>

      <span
        id="status"
        style="display: flex; gap: var(--prompt-gap)"
      >
        <!-- untracked -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.untracked) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.untracked)
              ? 'GIT_PROMPT_KIT_COLOR_UNSTAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.untracked) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_UNTRACKED) || ''
          }`"
        />

        <!-- conflicted -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.conflicted) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.conflicted)
              ? 'GIT_PROMPT_KIT_COLOR_UNSTAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.conflicted) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_CONFLICTED) || ''
          }`"
        />

        <!-- deleted -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.deleted) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.deleted)
              ? 'GIT_PROMPT_KIT_COLOR_UNSTAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.deleted) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_DELETED) || ''
          }`"
        />

        <!-- modified -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.modified) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.modified)
              ? 'GIT_PROMPT_KIT_COLOR_UNSTAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.modified) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_MODIFIED) || ''
          }`"
        />

        <!-- new -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.new) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.new)
              ? 'GIT_PROMPT_KIT_COLOR_STAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.new) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_NEW) || ''
          }`"
        />

        <!-- staged deleted -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.deletedStaged) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.deletedStaged)
              ? 'GIT_PROMPT_KIT_COLOR_STAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.deletedStaged) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_DELETED_STAGED) ||
            ''
          }`"
        />

        <!-- staged modified -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.modifiedStaged) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.modifiedStaged)
              ? 'GIT_PROMPT_KIT_COLOR_STAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.modifiedStaged) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED) ||
            ''
          }`"
        />
      </span>

      <!-- action -->
      <PromptSegmentComponent
        v-if="valueOf(store.context.data.action)"
        color-option="GIT_PROMPT_KIT_COLOR_ACTION"
        text="merge"
      />
    </span>

    <span id="char" />
  </div>
</template>
