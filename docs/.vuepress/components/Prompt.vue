<script>
export default {
  props: {
    git: Object,
    user: Object,
    colors: Object,
  },
  computed: {
    gitPromptKitAction() {
      return 'GIT_PROMPT_KIT_ACTION'
    },
    gitPromptKitAhead() {
      return 'GIT_PROMPT_KIT_AHEAD'
    },
    gitPromptKitAssumedUnchanged() {
      return 'GIT_PROMPT_KIT_ASSUMED_UNCHANGED'
    },
    gitPromptKitBehind() {
      return 'GIT_PROMPT_KIT_BEHIND'
    },
    gitPromptKitChar() {
      return 'GIT_PROMPT_KIT_CHAR'
    },
    gitPromptKitConflicted() {
      return 'GIT_PROMPT_KIT_CONFLICTED'
    },
    gitPromptKitCwd() {
      return 'GIT_PROMPT_KIT_CWD'
    },
    gitPromptKitDeletedStaged() {
      return 'GIT_PROMPT_KIT_DELETED_STAGED'
    },
    gitPromptKitDeleted() {
      return 'GIT_PROMPT_KIT_DELETED'
    },
    gitPromptKitHead() {
      return 'GIT_PROMPT_KIT_HEAD'
    },
    gitPromptKitModifiedStaged() {
      return 'GIT_PROMPT_KIT_MODIFIED_STAGED'
    },
    gitPromptKitModified() {
      return 'GIT_PROMPT_KIT_MODIFIED'
    },
    gitPromptKitNew() {
      return 'GIT_PROMPT_KIT_NEW'
    },
    gitPromptKitPushAhead() {
      return 'GIT_PROMPT_KIT_PUSH_AHEAD'
    },
    gitPromptKitPushBehind() {
      return 'GIT_PROMPT_KIT_PUSH_BEHIND'
    },
    gitPromptKitPush() {
      return 'GIT_PROMPT_KIT_PUSH'
    },
    gitPromptKitRemote() {
      return 'GIT_PROMPT_KIT_REMOTE'
    },
    gitPromptKitRoot() {
      return 'GIT_PROMPT_KIT_ROOT'
    },
    gitPromptKitSkipWorktree() {
      return 'GIT_PROMPT_KIT_SKIP_WORKTREE'
    },
    gitPromptKitStashes() {
      return 'GIT_PROMPT_KIT_STASHES'
    },
    gitPromptKitTag() {
      return 'GIT_PROMPT_KIT_TAG'
    },
    gitPromptKitUntracked() {
      return 'GIT_PROMPT_KIT_UNTRACKED'
    },
    gitPromptKitUserhost() {
      return 'GIT_PROMPT_KIT_USERHOST'
    },
    gitPromptKitRef() {
      return this.gitPromptKitHead + this.gitPromptKitAhead + this.gitPromptKitRemote + this.gitPromptKitPush + this.gitPromptKitTag
    },
    gitPromptKitStatusExtended() {
      return this.gitPromptKitStashes + this.gitPromptKitAssumedUnchanged + this.gitPromptKitSkipWorktree
    },
    gitPromptKitStatus() {
      return this.gitPromptKitUntracked + this.gitPromptKitConflicted + this.gitPromptKitDeleted + this.gitPromptKitModified + this.gitPromptKitNew + this.gitPromptKitDeletedStaged + this.gitPromptKitModifiedStaged
    },
    gitPromptKitWorkdir() {
      return this.gitPromptKitRoot + this.gitPromptKitCwd
    },
  },
  methods: {},
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Component</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>GIT_PROMPT_KIT_ACTION</td>
        <td>{{ gitPromptKitAction }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_AHEAD</td>
        <td>{{ gitPromptKitAhead }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_ASSUMED_UNCHANGED</td>
        <td>{{ gitPromptKitAssumedUnchanged }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_BEHIND</td>
        <td>{{ gitPromptKitBehind }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_CHAR</td>
        <td>{{ gitPromptKitChar }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_CONFLICTED</td>
        <td>{{ gitPromptKitConflicted }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_CWD</td>
        <td>{{ gitPromptKitCwd }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_DELETED_STAGED</td>
        <td>{{ gitPromptKitDeletedStaged }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_DELETED</td>
        <td>{{ gitPromptKitDeleted }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_HEAD</td>
        <td>{{ gitPromptKitHead }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_MODIFIED_STAGED</td>
        <td>{{ gitPromptKitModifiedStaged }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_MODIFIED</td>
        <td>{{ gitPromptKitModified }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_NEW</td>
        <td>{{ gitPromptKitNew }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_PUSH_AHEAD</td>
        <td>{{ gitPromptKitPushAhead }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_PUSH_BEHIND</td>
        <td>{{ gitPromptKitPushBehind }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_PUSH</td>
        <td>{{ gitPromptKitPush }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_REMOTE</td>
        <td>{{ gitPromptKitRemote }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_ROOT</td>
        <td>{{ gitPromptKitRoot }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_SKIP_WORKTREE</td>
        <td>{{ gitPromptKitSkipWorktree }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_STASHES</td>
        <td>{{ gitPromptKitStashes }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_TAG</td>
        <td>{{ gitPromptKitTag }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_UNTRACKED</td>
        <td>{{ gitPromptKitUntracked }}</td>
      </tr>
      <tr>
        <td>GIT_PROMPT_KIT_USERHOST</td>
        <td>{{ gitPromptKitUserhost }}</td>
      </tr>

        <tr></tr>

        <tr>
          <td>GIT_PROMPT_KIT_REF</td>
          <td>{{ gitPromptKitRef }}</td>
        </tr>
        <tr>
          <td>GIT_PROMPT_KIT_STATUS_EXTENDED</td>
          <td>{{ gitPromptKitStatusExtended }}</td>
        </tr>
        <tr>
          <td>GIT_PROMPT_KIT_STATUS</td>
          <td>{{ gitPromptKitStatus }}</td>
        </tr>
        <tr>
          <td>GIT_PROMPT_KIT_WORKDIR</td>
          <td>{{ gitPromptKitWorkdir }}</td>
        </tr>
    </tbody>
  </table>
</template>