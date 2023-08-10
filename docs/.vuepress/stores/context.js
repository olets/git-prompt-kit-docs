import { defineStore } from "pinia";

export const useContextStore = defineStore("context", {
  state: () => ({
    context: {
      action: {
        label: "Has an ongoing Git action",
        value: { default: true },
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
      remote: {
        label: "Has a remote",
        value: { default: false },
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
    },
  }),
});
