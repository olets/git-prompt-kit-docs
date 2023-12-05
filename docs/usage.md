# Usage

Git Prompt Kit takes the work out of adding high-performance Git information to your custom zsh theme.

Say you want your prompt to show the current working directory; the Git branch if you're in a Git repo and on a branch, the Git commit if you're in a repo and not on a branch, colored if the working tree is dirty; and `%` when you aren't root but a `#` when you are, colored depending on whether the previous command succeeded or failed. The vanilla way is add a `preexec` hook, and write some logic to get the branch with a commit SHA fallback. That might look like the example below.

:::tip
The following examples use the construct `${x:+y}`. That's "`$y` if `$x` is not null". In the context of prompt building, this is useful for conditionally adding spaces: `${x:+$x }` is "`$x ` if `$x` is not null".
:::

```shell
# ~/.zshrc

set_prompt_vars() {
  # define prompt_git_head
  # define prompt_git_dirty only if the working tree is dirty
}

autoload -Uz add-zsh-hook
add-zsh-hook precmd set_prompt_vars

prompt_directory_color=your_value_here
prompt_git_head_color=your_value_here
prompt_failure_color=your_value_here
prompt_success_color=your_value_here

# directory
PROMPT='%F{$prompt_directory_color}%1d%f '

# Git HEAD
PROMPT+='${prompt_git_head:+ ${prompt_git_dirty:+%F{$prompt_git_head_color}}$prompt_git_head%f }'

# prompt char
PROMPT+='%F{%(?.$prompt_success_color.$prompt_failure_color)}%(!.#.$)%f '
```

(In theory breaking <code>PROMPT</code> into multiple lines like that might impact performance. But it won't be noticeable, so the code clarity is worth it.)

Or you could use Git Prompt Kit's Git HEAD component. It's colored when the working tree is dirty, and shows a branch if one is checked out or the SHA if HEAD is detached.

```shell
# ~/.zshrc

# load Git Prompt Kit and then

prompt_directory_color=your_value_here
prompt_failure_color=your_value_here
prompt_success_color=your_value_here

# directory
PROMPT='%F{$prompt_directory_color}%1d%f '

PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'

# prompt char
PROMPT+='%F{%(?.$prompt_success_color.$prompt_failure_color)}%(!.#.$)%f '
```

Using Git Prompt Kit's current working directory component will add some fanciness. You'll know immediately whether or not you're in a Git repo, because the component underlines Git root directories. And if you're in subdirectory of a repo, you'll know which repo you're in, because the component prepends the repo root (underlined, of course) to PWD.

```shell
# ~/.zshrc

# load Git Prompt Kit and then

prompt_failure_color=your_value_here
prompt_success_color=your_value_here

PROMPT='$GIT_PROMPT_KIT_CWD '
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'

# prompt char
PROMPT+='%F{%(?.$prompt_success_color.$prompt_failure_color)}%(!.#.$)%f '
```

Using Git Prompt Kit's prompt character component leaves it all cleaned up.

```shell
# ~/.zshrc

# load Git Prompt Kit and then

PROMPT='$GIT_PROMPT_KIT_CWD '
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'
PROMPT+='$GIT_PROMPT_KIT_CHAR '
```

:::tip
The above examples use [Git Prompt Kit's default colors](/options.html#color-options). But they can all be customized to your liking:

```shell
GIT_PROMPT_KIT_COLOR_CWD=your_value_here
GIT_PROMPT_KIT_COLOR_FAILED=your_value_here
GIT_PROMPT_KIT_COLOR_HEAD=your_value_here
GIT_PROMPT_KIT_COLOR_SUCCEEDED=your_value_here
```

:::

Using Git Prompt Kit components doesn't limit you to _only_ using Git Prompt Kit components. Say for example you wanted to add the time, a note, and to put the prompt character on its own line. Do just as you would if you didn't have Git Prompt Kit:

```shell
# ~/.zshrc

set_prompt_vars() {
  typeset -g MY_COOL_PROMPT_CONTENT=your_value_here
}

autoload -Uz add-zsh-hook
add-zsh-hook precmd set_prompt_vars

# load Git Prompt Kit and then

PROMPT='%* hello world ${MY_COOL_PROMPT_CONTENT:+$MY_COOL_PROMPT_CONTENT }'
PROMPT+='$GIT_PROMPT_KIT_CWD'
PROMPT+='${GIT_PROMPT_KIT_HEAD:+ $GIT_PROMPT_KIT_HEAD}'
PROMPT+=$'\n'
PROMPT+='$GIT_PROMPT_KIT_CHAR '
```
