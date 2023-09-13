# Options

<!-- DUPE demo.md, options.md -->

Hometown Prompt is made almost entirely of [Git Prompt Kit](https://git-prompt-kit.olets.dev) components. So almost all of configuration —color customization, symbol customization, dimming vs hiding inactive elements, the number of path segments shows, etc— is done by configuring through Git Prompt Kit. (Git Prompt Kit is bundled with Hometown Prompt, so no additional download is necessary.)

:::tip
Read about Git Prompt Kit's options in the [Git Prompt Kit's options documentation](https://git-prompt-kit.olets.dev/options.html). And play with Hometown Prompt's options _and_ Git Prompt Kit's options in the [Hometown Prompt interactive demo](./demo.md)!
:::

| Name                                          | Type            | Description                                                                                                                                                                                                           | Default |
| --------------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `HOMETOWN_PROMPT_CUSTOM`                      | prompt string\* | Displayed between the time and the working directory. In the terminal, this is printed with [prompt expansion](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html) with `PROMPT_SUBST` and `PROMPT_PERCENT` |
| `HOMETOWN_PROMPT_LINEBREAK_AFTER_GIT_REF`     | number          | If non-zero, the Git ref info\* is followed by a line break                                                                                                                                                           | `1`     |
| `HOMETOWN_PROMPT_NO_LINEBREAK_BEFORE_GIT_REF` | number          | If zero, the Git ref info\* is preceded by a line break                                                                                                                                                               | `1`     |
| `HOMETOWN_PROMPT_SHOW_EXTENDED_STATUS`        | number          | If non-zero, show the stash count, assume-unchanged file count, and skip-worktree file count                                                                                                                          | `1`     |

\* Git ref info is branch or commit, ahead/behind counts, remote name(s), and tag. See the [`GIT_PROMPT_KIT_REF` docs](https://git-prompt-kit.olets.dev/components.html).
