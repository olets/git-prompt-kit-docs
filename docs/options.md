# Options

:::warning
These are the docs for v4, which is not yet released.
:::

Set variables in `.zshrc`. For example, to only show the user if _not_ `me`, only show the host if _not_ `my-computer` or `my-other-computer`, and use symbols to distinguish between branches and commits:

```shell
# ~/.zshrc
# --- snip ---
GIT_PROMPT_KIT_HIDDEN_HOSTS=( my-computer my-other-computer )
GIT_PROMPT_KIT_HIDDEN_USERS=( me )
GIT_PROMPT_KIT_SYMBOL_BRANCH="#"
GIT_PROMPT_KIT_SYMBOL_COMMIT="•"
# Load Git Prompt Kit (will differ depending on installation method)
```

To output your configuration, for example for sharing, run

```shell:no-line-numbers
git-prompt-kit-config
```

(The exporter makes an effort to get quoting right, but if you use a custom configuration with quotation marks it's worth double checking that the exported value is correct.)

## Behavior options

| Name                                           | Type   | Description                                                                                                                                  | Default |
| ---------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `GIT_PROMPT_KIT_HIDE_INACTIVE_AHEAD_BEHIND`    | number | Hide dimmed symbols for the commits ahead of and commits behind the upstream branch when the count is zero? (HIDE if non-zero, SHOW if zero) | `1`     |
| `GIT_PROMPT_KIT_HIDE_INACTIVE_EXTENDED_STATUS` | number | Hide dimmed Git stash, assumed-unchanged, and skip-worktree symbols when the count is zero? (HIDE if non-zero, SHOW if zero)                 | `1`     |
| `GIT_PROMPT_KIT_HIDE_TOOL_NAMES`               | number | Do not show the word "Git" before the Git ref info? (HIDE if non-zero, SHOW if zero)                                                         | `1`     |
| `GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS`          | number | Show Git status symbols (dimmed) when the count is zero? (SHOW if non-zero, HIDE if zero)                                                    | `1`     |

## Color options

Colors can be

- one of zsh's eight color names (`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan` and `white`; see http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#Character-Highlighting)
- an integer 1-255 for an 8-bit color (see https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit)
- or a #-prefixed 3- or 6-character hexadecimal value for 24-bit color (e.g. `#fff`, `#34d5eb`)

Support varies by terminal emulator.

> Tip: To check a color it can be useful to run `print -P %F{<color>}<text>%f`, for example `print -P %F{199}●%f`.

See [Issue #1: README appendix: default colors' swatches](https://github.com/olets/git-prompt-kit/issues/1) for the following table but with swatches. They may appear differently in your terminal.

To visualize the configured colors, run

```shell:no-line-numbers
git-prompt-kit-colors
```

To print the configured values, run

```shell:no-line-numbers
git-prompt-kit-config
```

| Name                                    | Type   | Description                                                       | Default |
| --------------------------------------- | ------ | ----------------------------------------------------------------- | ------- |
| `GIT_PROMPT_KIT_COLOR_ACTION`           | string | Color of the Git action segment                                   | `199`   |
| `GIT_PROMPT_KIT_COLOR_ASSUME_UNCHANGED` | string | Color of the Git assumed unchaged files segment                   | `81`    |
| `GIT_PROMPT_KIT_COLOR_FAILED`           | string | Color of the prompt character when the previous command failed    | `88`    |
| `GIT_PROMPT_KIT_COLOR_HEAD`             | string | Color of the Git HEAD segment when the working tree is dirty      | `140`   |
| `GIT_PROMPT_KIT_COLOR_HOST`             | string | Color of the host segment                                         | `109`   |
| `GIT_PROMPT_KIT_COLOR_INACTIVE`         | string | Color of inactive segments                                        | `247`   |
| `GIT_PROMPT_KIT_COLOR_PUSH_REMOTE`      | string | Color of the Git push remote and its commits-ahead files segment  | `111`   |
| `GIT_PROMPT_KIT_COLOR_REMOTE`           | string | Color of the Git remote and its commits-ahead files segment       | `216`   |
| `GIT_PROMPT_KIT_COLOR_SKIP_WORKTREE`    | string | Color of the Git skip-worktree files segment                      | `81`    |
| `GIT_PROMPT_KIT_COLOR_STAGED`           | string | Color of Git staged files segment                                 | `120`   |
| `GIT_PROMPT_KIT_COLOR_STASH`            | string | Color of the Git stashes segment                                  | `81`    |
| `GIT_PROMPT_KIT_COLOR_SUCCEEDED`        | string | Color of the prompt character when the previous command succeeded | `76`    |
| `GIT_PROMPT_KIT_COLOR_TAG`              | string | Color of Git tag segment                                          | `86`    |
| `GIT_PROMPT_KIT_COLOR_UNSTAGED`         | string | Color of Git unstaged files segment                               | `162`   |
| `GIT_PROMPT_KIT_COLOR_USER`             | string | Color of the user                                                 | `109`   |
| `GIT_PROMPT_KIT_COLOR_CWD`              | string | Color of the directory segment                                    | `39`    |

## Content options

To print the configured values, run

```shell:no-line-numbers
git-prompt-kit-config
```

| Name                                                  | Type    | Description                                                                                                                                                         | Default    |
| ----------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `GIT_PROMPT_KIT_CWD_MAX_TRAILING_COUNT`               | integer | The maximum number of trailing path components in the `GIT_PROMPT_KIT_CWD`. Additional components will be ellided with `...`. If less than zero, show all           | `1`        |
| `GIT_PROMPT_KIT_DEFAULT_PUSH_REMOTE_NAME`             | string  | The default Git push remote                                                                                                                                         | `upstream` |
| `GIT_PROMPT_KIT_DEFAULT_REMOTE_NAME`                  | string  | The default Git remote                                                                                                                                              | `origin`   |
| `GIT_PROMPT_KIT_HIDDEN_HOSTS`                         | array   | The hosts that will not be included in the prompt                                                                                                                   | `()`       |
| `GIT_PROMPT_KIT_HIDDEN_USERS`                         | array   | The users that will not be included in the prompt                                                                                                                   | `()`       |
| `GIT_PROMPT_KIT_LOCAL`                                | string  | Shown if the checked-out branch has no upstream                                                                                                                     | `local`    |
| `GIT_PROMPT_KIT_REPO_SUBDIRECTORY_MAX_TRAILING_COUNT` | integer | The maximum number of trailing path components in `GIT_PROMPT_KIT_REPO_SUBDIRECTORY`. Additional components will be ellided with `...`. If less than zero, show all | `1`        |

## Symbol options

To print the configured values, run

```shell:no-line-numbers
git-prompt-kit-config
```

The default symbols should work well in any font.

The default Git file status symbols are based on [Git's own short format](https://git-scm.com/docs/git-status#_short_format) (underscore `_` represents empty columns in `git-status --short`'s output). The alternate "verbose" set of default symbols take up more space, but their meaning may be clearer.

| Name                                     | Type   | Description                                                     | Default / verbose           |
| ---------------------------------------- | ------ | --------------------------------------------------------------- | --------------------------- |
| `GIT_PROMPT_KIT_VERBOSE_DEFAULT_SYMBOLS` | string | Set to a non-empty string to enable the verbose default symbols | empty string                |
|                                          |        |
| `GIT_PROMPT_KIT_SYMBOL_AHEAD`            | string | Precedes the Git commits-ahead segment                          | `+` / `ahead `              |
| `GIT_PROMPT_KIT_SYMBOL_ASSUME_UNCHANGED` | string | Follows the Git assume-unchanged segment                        | `⥱ ` / `assumed unchanged`  |
| `GIT_PROMPT_KIT_SYMBOL_BEHIND`           | string | Precedes the Git commits-behind segment                         | `-` / `behind `             |
| `GIT_PROMPT_KIT_SYMBOL_BRANCH`           | string | Precedes the Git branch                                         | none / `branch: `           |
| `GIT_PROMPT_KIT_SYMBOL_CHAR_NORMAL`      | string | Character shown at end of prompt for normal users               | `%%` \* / `commit: `        |
| `GIT_PROMPT_KIT_SYMBOL_CHAR_ROOT`        | string | Character shown at end of prompt for root users                 | `#` /                       |
| `GIT_PROMPT_KIT_SYMBOL_COMMIT`           | string | Precedes the Git commit                                         | none / `commit: `           |
| `GIT_PROMPT_KIT_SYMBOL_CONFLICTED`       | string | Follows the Git conflicted files segment                        | `UU` / ` conflicted`        |
| `GIT_PROMPT_KIT_SYMBOL_DELETED_STAGED`   | string | Follows the Git unstaged deleted file segment                   | `D_` / ` staged deleted`    |
| `GIT_PROMPT_KIT_SYMBOL_DELETED`          | string | Follows the Git unstaged deleted file segment                   | `_D` / ` deleted`           |
| `GIT_PROMPT_KIT_SYMBOL_HOST`             | string | Precedes the host                                               | `@` / `host:`               |
| `GIT_PROMPT_KIT_SYMBOL_MODIFIED_STAGED`  | string | Follows the Git staged modified file segment                    | `M_` / ` modified staged`   |
| `GIT_PROMPT_KIT_SYMBOL_MODIFIED`         | string | Follows the Git unstaged modified file segment                  | `_M` / ` modified`          |
| `GIT_PROMPT_KIT_SYMBOL_NEW`              | string | Follows Git new file segment                                    | `A_` / ` new`               |
| `GIT_PROMPT_KIT_SYMBOL_PUSH_REMOTE`      | string | Precedes the Git push remote                                    | `@{push}` / `push remote: ` |
| `GIT_PROMPT_KIT_SYMBOL_REMOTE`           | string | Precedes the Git remote                                         | `@{u}` / `remote: `         |
| `GIT_PROMPT_KIT_SYMBOL_SKIP_WORKTREE`    | string | Follows the Git skip-worktree file segment                      | `⤳` / ` skip worktree`      |
| `GIT_PROMPT_KIT_SYMBOL_STASH`            | string | Follows the Git stash segment                                   | `⇲` / ` stashes`            |
| `GIT_PROMPT_KIT_SYMBOL_TAG`              | string | Precedes the Git tag                                            | `@` / `tag: `               |
| `GIT_PROMPT_KIT_SYMBOL_UNTRACKED`        | string | Follows Git untracked file segment                              | `??` / ` untracked`         |

\* `%%` expands as `%` in the zsh prompt.
