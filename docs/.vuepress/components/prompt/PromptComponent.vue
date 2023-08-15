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
    border-radius: .25rem;`"
  >
    <div style="display: flex; gap: var(--prompt-gap)">
      <span
        id="not-git"
        style="display: flex; gap: var(--prompt-gap)"
      >
        <div>
          <PromptSegmentComponent
            v-if="!valueOf(store.context.data.userHiddenUser)"
            color-option="GIT_PROMPT_KIT_COLOR_USER"
            text="olets"
          />

          <PromptSegmentComponent
            v-if="!valueOf(store.context.data.userHiddenHost)"
            color-option="GIT_PROMPT_KIT_COLOR_HOST"
            text="@dev"
          />
        </div>

        <PromptSegmentComponent text="4:07:47" />

        <!-- GIT_PROMPT_KIT_WORKDIR -->
        <div style="display: flex; gap: var(--prompt-gap)">
          <PromptSegmentComponent
            color-option="GIT_PROMPT_KIT_COLOR_WORKDIR"
            :text="`~/olets${
              valueOf(store.context.data.directoryGit) ? '/' : ''
            }`"
          />

          <PromptSegmentComponent
            v-if="valueOf(store.context.data.directoryGit)"
            color-option="GIT_PROMPT_KIT_COLOR_WORKDIR"
            style="text-decoration: underline"
            text="git-prompt-kit"
          />
        </div>
      </span>

      <span
        v-if="valueOf(store.context.data.directoryGit)"
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
            v-if="valueOf(store.context.data.gitRefBranch)"
            color-option="GIT_PROMPT_KIT_COLOR_HEAD"
            :text="`${
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_BRANCH) || ''
            }main`"
          />

          <!-- commit -->
          <PromptSegmentComponent
            v-if="!valueOf(store.context.data.gitRefBranch)"
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
            valueOf(store.context.data.gitRefBranch) &&
              !valueOf(store.context.data.gitRefRemote)
          "
          :style="`color: ${hexColor(
            valueOf(store.options.data.GIT_PROMPT_KIT_COLOR_REMOTE)
          )};`"
        >
          {{ valueOf(store.options.data.GIT_PROMPT_KIT_LOCAL) }}
        </span>

        <!-- upstream -->
        <span
          v-if="valueOf(store.context.data.gitRefRemote)"
          id="upstream"
        >
          <!-- remote symbol -->
          <!-- TODO is this the real logic? if not should it be? -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.gitRefAhead) ||
                valueOf(store.context.data.gitRefBehind) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.gitRefAhead) ||
                valueOf(store.context.data.gitRefBehind)
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
              !valueOf(store.context.data.gitRefDefaultRemote) ||
                !valueOf(store.context.data.gitRefSameNameRemoteBranch)
            "
            color-option="GIT_PROMPT_KIT_COLOR_REMOTE"
            :text="`${
              valueOf(store.context.data.gitRefDefaultRemote) ? '' : 'upstream/'
            }${
              valueOf(store.context.data.gitRefSameNameRemoteBranch)
                ? ''
                : 'trunk'
            }`"
          />

          <!-- remote ahead -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.gitRefAhead) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.gitRefAhead)
                ? 'GIT_PROMPT_KIT_COLOR_REMOTE'
                : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
            "
            :text="`${
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_AHEAD) || ''
            }${valueOf(store.context.data.gitRefAhead) ? '2' : ''}`"
          />

          <!-- remote behind -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.gitRefBehind) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.gitRefBehind)
                ? 'GIT_PROMPT_KIT_COLOR_REMOTE'
                : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
            "
            :text="`${
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_BEHIND) || ''
            }${valueOf(store.context.data.gitRefBehind) ? '2' : ''}`"
          />
        </span>

        <!-- push remote -->
        <span
          v-if="valueOf(store.context.data.gitPushRefPush)"
          id="push"
        >
          <!-- push remote symbol -->
          <!-- TODO is this the real logic? if not should it be? -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.gitPushRefPushAhead) ||
                valueOf(store.context.data.gitPushRefPushBehind) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.gitPushRefPushAhead) ||
                valueOf(store.context.data.gitPushRefPushBehind)
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
              !valueOf(store.context.data.gitPushRefDefaultPushRemote) ||
                !valueOf(store.context.data.gitPushRefSameNamePushRemoteBranch)
            "
            color-option="GIT_PROMPT_KIT_COLOR_PUSH_REMOTE"
            :text="
              valueOf(store.context.data.gitPushRefDefaultPushRemote)
                ? ''
                : 'upstream'
            "
          />

          <!-- push remote ahead -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.gitPushRefPushAhead) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.gitPushRefPushAhead)
                ? 'GIT_PROMPT_KIT_COLOR_PUSH_REMOTE'
                : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
            "
            :text="`${
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_AHEAD) || ''
            }${valueOf(store.context.data.gitPushRefPushAhead) ? '2' : ''}`"
          />

          <!-- push remote behind -->
          <PromptSegmentComponent
            v-if="
              valueOf(store.context.data.gitPushRefPushBehind) ||
                valueOf(
                  store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND
                )
            "
            :color-option="
              valueOf(store.context.data.gitPushRefPushBehind)
                ? 'GIT_PROMPT_KIT_COLOR_PUSH_REMOTE'
                : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
            "
            :text="`${
              valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_BEHIND) || ''
            }${valueOf(store.context.data.gitPushRefPushBehind) ? '2' : ''}`"
          />
        </span>

        <!-- tag -->
        <PromptSegmentComponent
          v-if="valueOf(store.context.data.gitRefTag)"
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
            valueOf(store.context.data.gitExtendedStatusStashes) ||
              valueOf(
                store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS
              )
          "
          :color-option="
            valueOf(store.context.data.gitExtendedStatusStashes)
              ? 'GIT_PROMPT_KIT_COLOR_STASH'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${
            valueOf(store.context.data.gitExtendedStatusStashes) ? '2' : ''
          }${valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_STASH) || ''}`"
        />

        <!-- assume-unchanged -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.gitExtendedStatusAssumeUnchanged) ||
              valueOf(
                store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS
              )
          "
          :color-option="
            valueOf(store.context.data.gitExtendedStatusAssumeUnchanged)
              ? 'GIT_PROMPT_KIT_COLOR_ASSUME_UNCHANGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${
            valueOf(store.context.data.gitExtendedStatusAssumeUnchanged)
              ? '2'
              : ''
          }${
            valueOf(
              store.options.data.GIT_PROMPT_KIT_SYMBOL_ASSUME_UNCHANGED
            ) || ''
          }`"
        />

        <!-- skip-worktree -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.gitExtendedStatusSkipWorktree) ||
              valueOf(
                store.options.data.GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS
              )
          "
          :color-option="
            valueOf(store.context.data.gitExtendedStatusSkipWorktree)
              ? 'GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${
            valueOf(store.context.data.gitExtendedStatusSkipWorktree) ? '2' : ''
          }${
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
            valueOf(store.context.data.gitStatusUntracked) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.gitStatusUntracked)
              ? 'GIT_PROMPT_KIT_COLOR_UNSTAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.gitStatusUntracked) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_UNTRACKED) || ''
          }`"
        />

        <!-- conflicted -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.gitStatusConflicted) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.gitStatusConflicted)
              ? 'GIT_PROMPT_KIT_COLOR_UNSTAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${
            valueOf(store.context.data.gitStatusConflicted) ? '2' : ''
          }${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_CONFLICTED) || ''
          }`"
        />

        <!-- deleted -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.gitStatusDeleted) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.gitStatusDeleted)
              ? 'GIT_PROMPT_KIT_COLOR_UNSTAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.gitStatusDeleted) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_DELETED) || ''
          }`"
        />

        <!-- modified -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.gitStatusModified) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.gitStatusModified)
              ? 'GIT_PROMPT_KIT_COLOR_UNSTAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.gitStatusModified) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_MODIFIED) || ''
          }`"
        />

        <!-- new -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.gitStatusNew) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.gitStatusNew)
              ? 'GIT_PROMPT_KIT_COLOR_STAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${valueOf(store.context.data.gitStatusNew) ? '2' : ''}${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_NEW) || ''
          }`"
        />

        <!-- staged deleted -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.gitStatusDeletedStaged) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.gitStatusDeletedStaged)
              ? 'GIT_PROMPT_KIT_COLOR_STAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${
            valueOf(store.context.data.gitStatusDeletedStaged) ? '2' : ''
          }${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_DELETED_STAGED) ||
            ''
          }`"
        />

        <!-- staged modified -->
        <PromptSegmentComponent
          v-if="
            valueOf(store.context.data.gitStatusModifiedStaged) ||
              valueOf(store.options.data.GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS)
          "
          :color-option="
            valueOf(store.context.data.gitStatusModifiedStaged)
              ? 'GIT_PROMPT_KIT_COLOR_STAGED'
              : 'GIT_PROMPT_KIT_COLOR_INACTIVE'
          "
          :text="`${
            valueOf(store.context.data.gitStatusModifiedStaged) ? '2' : ''
          }${
            valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED) ||
            ''
          }`"
        />
      </span>

      <!-- action -->
      <PromptSegmentComponent
        v-if="valueOf(store.context.data.gitStatusAction)"
        color-option="GIT_PROMPT_KIT_COLOR_ACTION"
        text="merge"
      />
    </span>

    <!-- prompt character -->
    <PromptSegmentComponent
      :color-option="
        valueOf(store.context.data.sessionFailed)
          ? 'GIT_PROMPT_KIT_COLOR_FAILED'
          : 'GIT_PROMPT_KIT_COLOR_SUCCEEDED'
      "
      :text="
        valueOf(store.context.data.userRoot)
          ? valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT)
          : valueOf(store.options.data.GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL)
      "
    />
  </div>
</template>
