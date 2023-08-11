import { defineStore } from "pinia";

export const useContextStore = defineStore("context", {
  state: () => ({
    data: {
      terminalBackgroundColor: {
        label: "Terminal background color",
        value: { default: "#4a4a4a" },
      },
      terminalTextColor: {
        label: "Terminal text color",
        value: { default: "#fefefe" },
      },
      action: {
        label: "Has an ongoing Git action",
        value: { default: false },
      },
      ahead: {
        label: "Is ahead of the remote",
        value: { default: false },
      },
      assumeUnchanged: {
        label: "Has files with the assume-unchanged bit set",
        value: { default: false },
      },
      behind: {
        label: "Is behind the remote",
        value: { default: false },
      },
      conflicted: {
        label: "Has conflicts",
        value: { default: false },
      },
      git: {
        label: "In a Git repo",
        value: { default: false },
      },
      deletedStaged: {
        label: "Has staged deleted files",
        value: { default: false },
      },
      deleted: {
        label: "Has unstaged deleted files",
        value: { default: false },
      },
      branch: {
        label: "There is a branch pointing to the checked out commit",
        value: { default: false },
      },
      modifiedStaged: {
        label: "Has staged modified files",
        value: { default: false },
      },
      modified: {
        label: "Has unstaged modified files",
        value: { default: false },
      },
      new: {
        label: "Has (staged) new files",
        value: { default: false },
      },
      pushAhead: {
        label: "Is ahead of the push remote",
        value: { default: false },
      },
      pushBehind: {
        label: "Is behind the push remote",
        value: { default: false },
      },
      push: {
        label: "Has a distinct push remote",
        value: { default: false },
      },
      defaultPushRemote: {
        label: "Push remote branch is on the default push remote",
        value: { default: true },
      },
      // not supported by git-status
      // sameNamePushRemoteBranch: {
      //   label: "Push remote branch has the same name as the local branch",
      //   value: { default: true },
      // },
      remote: {
        label: "Has a remote",
        value: { default: false },
      },
      defaultRemote: {
        label: "Remote branch is on the default remote",
        value: { default: true },
      },
      sameNameRemoteBranch: {
        label: "Remote branch has the same name as the local branch",
        value: { default: true },
      },
      skipWorktree: {
        label: "Has files with the skip-worktree bit set",
        value: { default: false },
      },
      stashes: {
        label: "Has stashes",
        value: { default: false },
      },
      tag: {
        label: "There is a tag pointing to the checked out commit",
        value: { default: false },
      },
      untracked: {
        label: "Has (unstaged) untracked files",
        value: { default: false },
      },
      hiddenUser: {
        label: "The current user is hidden",
        value: { default: false },
      },
      hiddenHost: {
        label: "The current host is hidden",
        value: { default: false },
      },
      root: {
        label: "Current user is root",
        value: { default: false },
      },
      failed: {
        label: "Previous command failed",
        value: { default: false },
      },
    },
  }),
});
