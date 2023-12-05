# Options

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

<OptionsComponent group="behavior"/>

## Color options

Colors can be

- one of zsh's eight color names (`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan` and `white`; see <http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#Character-Highlighting>)
- an integer 1-255 for an 8-bit color (see <https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit>)
- or a #-prefixed 3- or 6-character hexadecimal value for 24-bit color (e.g. `#fff`, `#34d5eb`)

Support varies by terminal emulator.

To visualize the configured colors, run

```shell:no-line-numbers
git-prompt-kit-colors
```

To print the configured values, run

```shell:no-line-numbers
git-prompt-kit-config
```

:::tip
Colors may appear differently in your terminal. To check, it can be useful to run `print -P %F{<color>}<text>%f`, for example `print -P %F{199}●%f` or `print -P %F{#34d5eb}●%f`.
:::

<OptionsComponent group="color"/>

## Content options

To print the configured values, run

```shell:no-line-numbers
git-prompt-kit-config
```

<OptionsComponent group="content"/>

## Symbol options

To print the configured values, run

```shell:no-line-numbers
git-prompt-kit-config
```

The default symbols should work well in any font.

The default Git file status symbols are based on [Git's own short format](https://git-scm.com/docs/git-status#_short_format) (underscore `_` represents empty columns in `git-status --short`'s output). The alternate "verbose" set of default symbols take up more space, but their meaning may be clearer.

<OptionsComponent group="symbol"/>

\* `%%` expands as `%` in the zsh prompt.
