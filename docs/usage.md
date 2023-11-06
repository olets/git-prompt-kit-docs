# Usage

Git Prompt Kit takes the work out of add high-performance Git information to your custom prompt.

Say you want your prompt to show the current working directory; the Git branch if you're in a Git repo and on a branch, the Git commit if you're in a repo and not on a branch, colored if the working tree is dirty; and `%` when you aren't root but a `#` when you are, colored depending on whether the previous command succeeded or failed.

:::tip
In the examples below,

- the construct `${x:+y}` is "print `$y` if `$x` is not null". In the context of prompt building, this is useful for conditionally adding spaces: `${x:+$x }` is "print `$x ` if `$x` is not null".
- colors are always customized. That's never required. In the example which doesn't use Git Prompt Kit, you could leave out the coloring and have a monochrome prompt. In the examples which use Git Prompt Kit, you could leave out the color definitions and you'd get the [default Git Prompt Kit colors](/options.html#color-options).
  :::

You could add a `preexec` hook, and write some logic to get the branch with a commit SHA fallback.

```shell
# ~/.zshrc
set_prompt_vars() {
  # define prompt_git_head
  # define prompt_git_dirty only if the working tree is dirty
}
autoload -Uz add-zsh-hook
add-zsh-hook precmd set_git_head
prompt_directory_color=#…
prompt_git_head_color=#…
prompt_failure_color=#…
prompt_success_color=#…
PROMPT='%F{$prompt_directory_color}%1d%f '
PROMPT+='${prompt_git_head:+ ${prompt_git_dirty:+%F{$prompt_git_head_color}}$prompt_git_head%f }'
PROMPT+='%F{%(?.$prompt_success_color.$prompt_failure_color)}%(!.#.$)%f '
```

(In theory breaking <code>PROMPT</code> into multiple lines like that might impact performance. But it won't be noticeable, so the code clarity is worth it.)

Or you could use Git Prompt Kit's Git HEAD component. It's colored when the working tree is dirty, and shows a branch if one is checked out or the SHA if HEAD is detached.

```shell
# ~/.zshrc
# optional
GIT_PROMPT_KIT_COLOR_HEAD=#…
# load Git Prompt Kit
prompt_directory_color=#…
prompt_failure_color=#…
prompt_success_color=#…
PROMPT='%F{$prompt_directory_color}%1d%f '
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'
PROMPT+='%F{%(?.$prompt_success_color.$prompt_failure_color)}%(!.#.$)%f '
```

Using Git Prompt Kit's current working directory component will add some fanciness. You'll know immediately whether or not you're in a Git repo, because the component underlines Git root directories. And if you're in subdirectory of a repo, you'll know which repo you're in, because the component prepends the repo root (underlined, of course) to PWD.

```shell
# ~/.zshrc
# optional
GIT_PROMPT_KIT_COLOR_CWD=#…
# optional
GIT_PROMPT_KIT_COLOR_HEAD=#…
# load Git Prompt Kit
prompt_failure_color=#…
prompt_success_color=#…
PROMPT='$GIT_PROMPT_KIT_CWD '
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'
PROMPT+='%F{%(?.$prompt_success_color.$prompt_failure_color)}%(!.#.$)%f '
```

Using Git Prompt Kit's prompt character component leaves it all cleaned up.

```shell
# ~/.zshrc
# optional
GIT_PROMPT_KIT_COLOR_CWD=#…
# optional
GIT_PROMPT_KIT_COLOR_FAILED=#…
# optional
GIT_PROMPT_KIT_COLOR_HEAD=#…
# optional
GIT_PROMPT_KIT_COLOR_SUCCEEDED=#…
# load Git Prompt Kit
PROMPT='$GIT_PROMPT_KIT_CWD '
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'
PROMPT+='$GIT_PROMPT_KIT_CHAR '
```

In the above examples, the entire prompt could be built out of Git Prompt Kit components. But as the middle two show, using Git Prompt Kit components doesn't limit you to _only_ using Git Prompt Kit components. Say for example you wanted to add the time, and to put the prompt character on its own line. Do just as you would if you didn't have Git Prompt Kit:

```shell
PROMPT='%* '
PROMPT+='$GIT_PROMPT_KIT_CWD'
PROMPT+='${GIT_PROMPT_KIT_HEAD:+ $GIT_PROMPT_KIT_HEAD}'
PROMPT+=$'\n'
PROMPT+='$GIT_PROMPT_KIT_CHAR '
```
