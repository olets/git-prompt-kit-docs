# Installation

:::warning
These are the docs for v4, which is not yet released.
:::

Shell plugin manager is the recommended installation method.

## With a shell plugin manager

1. Install git-prompt-kit with a zsh plugin manager. Each has their own way of doing things. See your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

   After adding the plugin to the manager, restart zsh:

   ```shell:no-line-numbers
   exec zsh
   ```

## Manual

Either clone this repo and add `source path/to/git-prompt-kit.zsh` to your `.zshrc`, or

1. Download [the latest `git-prompt-kit` binary](https://github.com/olets/git-prompt-kit/releases/latest)
1. Put the file `git-prompt-kit` in a directory in your `PATH`

Then restart zsh:

```shell:no-line-numbers
exec zsh
```

## Prompt manager

You can use Git Prompt Kit to create a custom, high-performance Spaceship Git section or Starship Git module. Starting points for both are in [Recipes](recipes.md).

The Git Prompt Kit Spaceship section has been clocked at 50% faster than Spaceship's own Git section. The Git Prompt Kit Starship module has been clocked at about 10% to 30% faster than Starship's own Git module.
