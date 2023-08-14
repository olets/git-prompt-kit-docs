import { defineStore } from "pinia";

export const useContextStore = defineStore("context", {
  state: () => ({
    data: {
      terminalBackgroundColor: {
        label: "Terminal background color",
        value: { default: "#4a4a4a" },
        type: "color",
      },
      terminalTextColor: {
        label: "Terminal text color",
        value: { default: "#fefefe" },
        type: "color",
      },
      action: {
        label: "Has an ongoing Git action",
        value: { default: false },
        type: "boolean",
      },
      ahead: {
        label: "Is ahead of the remote",
        value: { default: false },
        type: "boolean",
      },
      assumeUnchanged: {
        label: "Has files with the assume-unchanged bit set",
        value: { default: false },
        type: "boolean",
      },
      behind: {
        label: "Is behind the remote",
        value: { default: false },
        type: "boolean",
      },
      conflicted: {
        label: "Has conflicts",
        value: { default: false },
        type: "boolean",
      },
      git: {
        label: "In a Git repo",
        value: { default: false },
        type: "boolean",
      },
      deletedStaged: {
        label: "Has staged deleted files",
        value: { default: false },
        type: "boolean",
      },
      deleted: {
        label: "Has unstaged deleted files",
        value: { default: false },
        type: "boolean",
      },
      branch: {
        label: "There is a branch pointing to the checked out commit",
        value: { default: false },
        type: "boolean",
      },
      modifiedStaged: {
        label: "Has staged modified files",
        value: { default: false },
        type: "boolean",
      },
      modified: {
        label: "Has unstaged modified files",
        value: { default: false },
        type: "boolean",
      },
      new: {
        label: "Has (staged) new files",
        value: { default: false },
        type: "boolean",
      },
      pushAhead: {
        label: "Is ahead of the push remote",
        value: { default: false },
        type: "boolean",
      },
      pushBehind: {
        label: "Is behind the push remote",
        value: { default: false },
        type: "boolean",
      },
      push: {
        label: "Has a distinct push remote",
        value: { default: false },
        type: "boolean",
      },
      defaultPushRemote: {
        label: "Push remote branch is on the default push remote",
        value: { default: true },

        type: "boolean",
      },
      // not supported by git-status
      // <sa></sa>meNamePushRemoteBranch: {
      //   label: "Push remote branch has the same name as the local branch",
      //   value: { default: true },
      // type: "boolean",
      // },
      remote: {
        label: "Has a remote",
        value: { default: false },
        type: "boolean",
      },
      defaultRemote: {
        label: "Remote branch is on the default remote",
        value: { default: true },

        type: "boolean",
      },
      sameNameRemoteBranch: {
        label: "Remote branch has the same name as the local branch",
        value: { default: true },

        type: "boolean",
      },
      skipWorktree: {
        label: "Has files with the skip-worktree bit set",
        value: { default: false },
        type: "boolean",
      },
      stashes: {
        label: "Has stashes",
        value: { default: false },
        type: "boolean",
      },
      tag: {
        label: "There is a tag pointing to the checked out commit",
        value: { default: false },
        type: "boolean",
      },
      untracked: {
        label: "Has (unstaged) untracked files",
        value: { default: false },
        type: "boolean",
      },
      hiddenUser: {
        label: "The current user is hidden",
        value: { default: false },
        type: "boolean",
      },
      hiddenHost: {
        label: "The current host is hidden",
        value: { default: false },
        type: "boolean",
      },
      root: {
        label: "Current user is root",
        value: { default: false },
        type: "boolean",
      },
      failed: {
        label: "Previous command failed",
        value: { default: false },
        type: "boolean",
      },
    },
  }),
});
