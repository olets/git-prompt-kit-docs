# Integrations

:::warning
These are the docs for v4, which is not yet released.
:::

[[toc]]

### Spaceship

:::warning
Last tested with Spaceship v3.11.2. Contributions are welcome.
:::

Git Prompt Kit comes with a [Spaceship](https://github.com/denysdovhan/spaceship-prompt) section which shows `GIT_PROMPT_KIT_REF`, `GIT_PROMPT_KIT_STATUS_EXTENDED`, `GIT_PROMPT_KIT_STATUS`, and `GIT_PROMPT_KIT_ACTION`. It has been clocked at 50% faster than Spaceship's built in Git section.\*

```shell
# .zshrc

# Configure Spaceship
SPACESHIP_PROMPT_ORDER=(
  # any other sections
  spaceship_git_prompt_kit
  # any other sections
)

# Configure Git Prompt Kit and any Git-Prompt-Kit config options
# For example
GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS=0

# Use Git Prompt Kit and Spaceship
# Load olets/git-prompt-kit/git-prompt-kit.spaceship.zsh
# Load olets/git-prompt-kit
# Load denysdovhan/spaceship-prompt
```

See <https://spaceship-prompt.sh/zh/config/prompt/#Prompt-order> for Spaceship's default order.

### Starship

:::warning
Last tested with Starship v0.43 or perhaps a close earlier minor version. Contributions are welcome.
:::

You can use Git Prompt Kit with [Starship](https://starship.rs/) (tested with zsh). The Git Prompt Kit Starship module has been clocked at about 10% to 30% faster than Starship's built in Git module.

```shell
# shell rc file

# Configure Git Prompt Kit and any Git-Prompt-Kit config options
# For example
GIT_PROMPT_KIT_SHOW_INACTIVE_STATUS=0
GIT_PROMPT_KIT_USE_DEFAULT_PROMPT=0

# Load Git Prompt Kit (will differ depending on installation method)

eval "$(starship init zsh)"
```

```toml
# starship.toml

[git_branch]
disabled = true

[git_commit]
disabled = true

[git_state]
disabled = true

[git_status]
disabled = true

[custom.git_prompt_kit]
# Customize to your liking. For example, here is
# GIT_PROMPT_KIT_REF, GIT_PROMPT_KIT_STATUS_EXTENDED, GIT_PROMPT_KIT_STATUS, GIT_PROMPT_KIT_ACTION,
# separated by spaces.
command = "print -P '${GIT_PROMPT_KIT_REF:+$GIT_PROMPT_KIT_REF }${GIT_PROMPT_KIT_STATUS_EXTENDED:+$GIT_PROMPT_KIT_STATUS_EXTENDED }${GIT_PROMPT_KIT_STATUS:+$GIT_PROMPT_KIT_STATUS }${GIT_PROMPT_KIT_ACTION}'"
shell = ["zsh"]
when = "true"
prefix = ""
```

See <https://starship.rs/config/#prompt> for Starship's default order.

---

\* Documentation for how I reached that number is lost to the sands of time. Contributions are, again, welcome.
