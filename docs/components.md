# Components

To use Git Prompt Kit's components in a custom prompt, load Git Prompt Kit and then refer to any of its components.

For example, to create the minimal prompt `<current working directory> [<Git HEAD> ]% `:

Minimal configuration, using Git Prompt Kit for the Git part only:

```shell
# ~/.zshrc
# --- snip ---
# Load Git Prompt Kit (will differ depending on installation method)
PROMPT='%1d ${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }%% '
```

Using Git Prompt Kit for everything

```shell
# ~/.zshrc
# --- snip ---
# Load Git Prompt Kit (will differ depending on installation method)
PROMPT='$GIT_PROMPT_KIT_CWD ${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }$GIT_PROMPT_KIT_CHAR '
```

## Atom components

| Name                               | Type          | Description                                                                                                                                                        |
| ---------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `GIT_PROMPT_KIT_ACTION`            | prompt string | Git: current action (e.g. "rebase")                                                                                                                                |
| `GIT_PROMPT_KIT_AHEAD`             | prompt string | Git: commits ahead of the upstream                                                                                                                                 |
| `GIT_PROMPT_KIT_ASSUMED_UNCHANGED` | prompt string | Git: assume-unchanged files count                                                                                                                                  |
| `GIT_PROMPT_KIT_BEHIND`            | prompt string | Git: commits behind the upstream                                                                                                                                   |
| `GIT_PROMPT_KIT_CHAR`              | prompt string | Prompt character                                                                                                                                                   |
| `GIT_PROMPT_KIT_CONFLICTED`        | prompt string | Git: conflicted files count                                                                                                                                        |
| `GIT_PROMPT_KIT_DELETED`           | prompt string | Git: unstaged deleted files count                                                                                                                                  |
| `GIT_PROMPT_KIT_DELETED_STAGED`    | prompt string | Git: staged deleted files count                                                                                                                                    |
| `GIT_PROMPT_KIT_HEAD`              | prompt string | Git: HEAD (branch or commit)                                                                                                                                       |
| `GIT_PROMPT_KIT_MODIFIED`          | prompt string | Git: unstaged modified files count                                                                                                                                 |
| `GIT_PROMPT_KIT_MODIFIED_STAGED`   | prompt string | Git: staged modified files count                                                                                                                                   |
| `GIT_PROMPT_KIT_NEW`               | prompt string | Git: (staged) new files count                                                                                                                                      |
| `GIT_PROMPT_KIT_PUSH_AHEAD`        | prompt string | Git: commits ahead of the push remote                                                                                                                              |
| `GIT_PROMPT_KIT_PUSH_BEHIND`       | prompt string | Git: commits behind the push remote                                                                                                                                |
| `GIT_PROMPT_KIT_PUSH`              | prompt string | Git: push remote if not the default                                                                                                                                |
| `GIT_PROMPT_KIT_REMOTE`            | prompt string | Git: `GIT_PROMPT_KIT_LOCAL` if no upstream; upstream branch if the name differs from the local branch; upstream remote and branch if the remote is not the default |
| `GIT_PROMPT_KIT_REPO_ROOT`         | prompt string | Git root directory, underlined, with trailing directories.                                                                                                         |
| `GIT_PROMPT_KIT_REPO_SUBDIRECTORY` | prompt string | Subdirectory relative to the Git root                                                                                                                              |
| `GIT_PROMPT_KIT_SKIP_WORKTREE`     | prompt string | Git: skip-worktree files count                                                                                                                                     |
| `GIT_PROMPT_KIT_STASHES`           | prompt string | Git: stash count                                                                                                                                                   |
| `GIT_PROMPT_KIT_TAG`               | prompt string | Git: up to one tag at HEAD                                                                                                                                         |
| `GIT_PROMPT_KIT_UNTRACKED`         | prompt string | Git: untracked (not staged) files count                                                                                                                            |
| `GIT_PROMPT_KIT_USERHOST`          | prompt string | User (if not configured as hidden) and host (if not configured as hidden)                                                                                          |

## Molecule components

| Name                             | Type          | Description                                                                                                                                                                                                 |
| -------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GIT_PROMPT_KIT_CHAR`            | prompt string | `GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL` or `GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT`                                                                                                                                    |
| `GIT_PROMPT_KIT_CWD`             | prompt string | If in a Git repo, `GIT_PROMPT_KIT_REPO_ROOT` and `GIT_PROMPT_KIT_REPO_SUBDIRECTORY`. Otherwise current working directory with trailing directories.                                                         |
| `GIT_PROMPT_KIT_REF`             | prompt string | `GIT_PROMPT_KIT_HEAD`, `GIT_PROMPT_KIT_AHEAD`, `GIT_PROMPT_KIT_BEHIND`, `GIT_PROMPT_KIT_REMOTE`, `GIT_PROMPT_KIT_PUSH`, `GIT_PROMPT_KIT_PUSH_AHEAD`, `GIT_PROMPT_KIT_PUSH_BEHIND`, and `GIT_PROMPT_KIT_TAG` |
| `GIT_PROMPT_KIT_STATUS`          | prompt string | `GIT_PROMPT_KIT_UNTRACKED`, `GIT_PROMPT_KIT_CONFLICTED`, `GIT_PROMPT_KIT_DELETED`, `GIT_PROMPT_KIT_MODIFIED`, `GIT_PROMPT_KIT_NEW`, `GIT_PROMPT_KIT_DELETED_STAGED`, and `GIT_PROMPT_KIT_MODIFIED_STAGED`   |
| `GIT_PROMPT_KIT_STATUS_EXTENDED` | prompt string | `GIT_PROMPT_KIT_STASHES`, `GIT_PROMPT_KIT_ASSUMED_UNCHANGED`, and `GIT_PROMPT_KIT_SKIP_WORKTREE`                                                                                                            |

## Other components

| Name                   | Type   | Description                               |
| ---------------------- | ------ | ----------------------------------------- |
| `GIT_PROMPT_KIT_DIRTY` | number | Equal to `1` if the Git worktree is dirty |
