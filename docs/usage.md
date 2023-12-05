# Usage

Git Prompt Kit takes the work out of adding high-performance Git information to your custom zsh theme.

Say you want your prompt to show

- the current working directory, colorized
- if you're in a Git repo, the checked out branch of (if HEAD is detached) commit, colors according to whether or not the working tree is dirty
- `%` when you aren't root and `#` when you are, colored according to whether or not the previous command errored.

Here's a vanilla implementation. It requires knowledge of zsh function autoloading, hooks, arrays, conditionals, output redirection and coloring, `psvar`, and prompt expansion; and knowledge of Git commands for checked-out branch's name, the checked-out commit's SHA, and whether the working tree is dirty.

```shell
# ~/.zshrc

set_prompt_vars() {
  psvar=( )

  git_branch=$(git branch --show-current 2>/dev/null)

  if [[ -n $git_branch ]]; then
    psvar+=( $git_branch )
  else
    psvar+=( $(git rev-parse --short 2>/dev/null) )
  fi

  if [[ $(git status --porcelain 2>/dev/null) ]]; then
    psvar+=( magenta )
  fi
}

autoload -Uz add-zsh-hook
add-zsh-hook precmd set_prompt_vars

# directory
PROMPT='%F{blue}%2~%f '

# Git HEAD
PROMPT+="%(2V.%F{%2v}.)%1v%f%(1V. .)"

# prompt char
PROMPT+='%F{%(?.green.red)}%#%f '
```

Using Git Prompt Kit's Git HEAD component, which shows a branch if one is checked out or the SHA if HEAD is detached, and gets a color when the working tree is dirty, simplifies things. This implementation requires much less special knowledge: a Git Prompt Kit component name, zsh output coloring, zsh prompt expansion, and the construct `${x:+y}` for "`$y` if `$x` is not null".

```shell
# ~/.zshrc

# load Git Prompt Kit and then

# directory
PROMPT='%F{blue}%2~%f '

# Git HEAD
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'

# prompt char
PROMPT+='%F{%(?.green.red)}%#%f '
```

Using Git Prompt Kit's current working directory component adds some nice enhancements: Git root directories are underlined, and shown even when you're in a subdirectory inside a repo.

```shell
# ~/.zshrc

# load Git Prompt Kit and then

PROMPT='$GIT_PROMPT_KIT_CWD '
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'

# prompt char
PROMPT+='%F{%(?.green.red)}%#%f '
```

Git Prompt Kit's prompt character component shows one symbol for root and another for not-root, and uses one color if the previous command errored and another if it didn't. This implementation only requires knowledge of three Git Prompt Kit component names and the construct `${x:+y}` for "`$y` if `$x` is not null".

```shell
# ~/.zshrc

# load Git Prompt Kit and then

PROMPT='$GIT_PROMPT_KIT_CWD '
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'
PROMPT+='$GIT_PROMPT_KIT_CHAR '
```

::: tip Perfomance boost
In benchmarks, this Git Prompt Kit implementation is **over five times as fast** as the vanilla implementation, and —unlike the vanilla implementation— fast enough that you are unlikely to perceive any delay.
:::

The above examples use [Git Prompt Kit's default colors](/options.html#color-options). But they can all be customized to your liking:

```shell
GIT_PROMPT_KIT_COLOR_CWD=your_value_here
GIT_PROMPT_KIT_COLOR_FAILED=your_value_here
GIT_PROMPT_KIT_COLOR_HEAD=your_value_here
GIT_PROMPT_KIT_COLOR_SUCCEEDED=your_value_here
```

Using Git Prompt Kit components doesn't limit you to _only_ using Git Prompt Kit components. Say for example you wanted to add the time, static content, dynamic content, and to put the prompt character on its own line. Do just as you would if you didn't have Git Prompt Kit:

```shell
# ~/.zshrc

set_prompt_vars() {
  psvar=( $(my_cool_command 2>/dev/null) )
}

autoload -Uz add-zsh-hook
add-zsh-hook precmd set_prompt_vars

# load Git Prompt Kit and then

PROMPT='%* hello world%(1V. .)%1v'
PROMPT+='$GIT_PROMPT_KIT_CWD'
PROMPT+='${GIT_PROMPT_KIT_HEAD:+ $GIT_PROMPT_KIT_HEAD}'
PROMPT+='\n'
PROMPT+='$GIT_PROMPT_KIT_CHAR '
```
