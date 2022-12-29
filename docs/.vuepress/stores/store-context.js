import { defineStore } from "pinia";

export const useContextStore = defineStore("context", {
  state: () => ({
    data: {
      action: {
        label: "Has an ongoing Git action",
        checked: false,
      },
      ahead: {
        label: "Is ahead of the remote",
        checked: false,
      },
      assumeUnchanged: {
        label: "Has files with the assume-unchanged bit set",
        checked: false,
      },
      behind: {
        label: "Is behind the remote",
        checked: false,
      },
      conflicted: {
        label: "Has conflicts",
        checked: false,
      },
      git: {
        label: "In a Git repo",
        checked: false,
      },
      deletedStaged: {
        label: "Has staged deleted files",
        checked: false,
      },
      deleted: {
        label: "Has unstaged deleted files",
        checked: false,
      },
      branch: {
        label: "There is a branch pointing to the checked out commit",
        checked: false,
      },
      modifiedStaged: {
        label: "Has staged modified files",
        checked: false,
      },
      modified: {
        label: "Has unstaged modified files",
        checked: false,
      },
      new: {
        label: "Has (staged) new files",
        checked: false,
      },
      pushAhead: {
        label: "Is ahead of the push remote",
        checked: false,
      },
      pushBehind: {
        label: "Is behind the push remote",
        checked: false,
      },
      push: {
        label: "Has a distinct push remote",
        checked: false,
      },
      remote: {
        label: "Has a remote",
        checked: false,
      },
      skipWorktree: {
        label: "Has files with the skip-worktree bit set",
        checked: false,
      },
      stashes: {
        label: "Has stashes",
        checked: false,
      },
      tag: {
        label: "There is a tag pointing to the checked out commit",
        checked: false,
      },
      untracked: {
        label: "Has (unstaged) untracked files",
        checked: false,
      },
      hiddenUser: {
        label: "The current user is hidden",
        checked: false,
      },
      hiddenHost: {
        label: "The current host is hidden",
        checked: false,
      },
    },
  }),
});
