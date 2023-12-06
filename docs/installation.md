# Installation

## Package

Git Prompt Kit is available on Homebrew. Run

```shell:no-line-numbers
brew install olets/tap/git-prompt-kit
```

and follow the post-install instructions logged to the terminal.

## Plugin

You can install Git Prompt Kit with a zsh plugin manager. Each has their own way of doing things. See your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

After adding the plugin to the manager, it will be available in all new terminals. To use it in an already-open terminal, restart zsh in that terminal:

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

You can use Git Prompt Kit to create a custom, high-performance section in your zsh prompt manager. Starting points for Spaceship and Starship are in [Integrations](integrations.md).
