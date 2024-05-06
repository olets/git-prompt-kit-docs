# Examples

## Use Git Prompt Kit components instead of opaque code

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

Git Prompt Kit's Git HEAD component can replace the "colorful Git branch or commit" work. And it comes with a free enhancement: the color changes when the working tree is dirty.

```shell{9-10}
# ~/.zshrc

# load Git Prompt Kit and then

# directory
PROMPT='%F{blue}%2~%f '

# Git HEAD
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'

# prompt char
PROMPT+='%F{%(?.green.red)}%#%f '
```

Git Prompt Kit's current working directory component can replace the path prompt expansion code. It, too, adds free enhancement: Git repo roots are underlined, and shown even when you're in a subdirectory inside a repo.

```shell
# ~/.zshrc

# load Git Prompt Kit and then

PROMPT='$GIT_PROMPT_KIT_CWD '
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'

# prompt char
PROMPT+='%F{%(?.green.red)}%#%f '
```

Git Prompt Kit's prompt character component can replace the more manual code.

```shell
# ~/.zshrc

# load Git Prompt Kit and then

PROMPT='$GIT_PROMPT_KIT_CWD '
PROMPT+='${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }'
PROMPT+='$GIT_PROMPT_KIT_CHAR '
```

That's short enough and transparent enough that you might choose to write it as a single line!

```shell
# ~/.zshrc

# load Git Prompt Kit and then

PROMPT='$GIT_PROMPT_KIT_CWD ${GIT_PROMPT_KIT_HEAD:+$GIT_PROMPT_KIT_HEAD }$GIT_PROMPT_KIT_CHAR '
```

::: tip Perfomance boost
In benchmarks, this Git Prompt Kit implementation is **over five times as fast** as the vanilla implementation, and —unlike the vanilla implementation— fast enough that you are unlikely to perceive any delay.
:::

## Use Git Prompt Kit components to show more data without more code

The above example uses Git Prompt Kit's Git HEAD component — `GIT_PROMPT_KIT_HEAD`— to display the current Git branch (if one is checked out) or commit in a color reflecting whether the working tree is dirty or clean.

Replace that with Git Prompt Kit's Git ref component like so

```shell
PROMPT='$GIT_PROMPT_KIT_CWD '
PROMPT+='${GIT_PROMPT_KIT_REF:+$GIT_PROMPT_KIT_REF }'
PROMPT+='$GIT_PROMPT_KIT_CHAR '
```

to show additional information about the ref's state in your prompt:

- If HEAD is detached, the **checked out commit**. If a branch is checked out, the **branch name**. Text color is dependent on whether the index is dirty. (This much is what `GIT_PROMPT_KIT_HEAD` provides.)
- If a branch is checked out:
  - If the checked out branch does not have a remote tracking branch, a symbol indicating that it is **local only**
  - If the checked out branch has an upstream (that is, [`@{upstream}`](https://www.git-scm.com/docs/gitrevisions#Documentation/gitrevisions.txt-emltbranchnamegtupstreamemegemmasterupstreamememuem)),
    - The number of **commits ahead of the upstream** the local branch is. Optionally show the indicator even if the local branch is not ahead of the upstream.
    - The number of **commits behind the upstream** the local branch is. Optionally show the indicator even if the local branch is not behind the upstream.
    - The **upstream's remote**, if different from the user-configured default
    - The **upstream's name**, if different from the local branch's
    - Text color is dependent on context and status:
      - If no distinct push remote, colored if the local is either ahead or behind
      - If there a distinct push remote, colored if the local is behind
  - If the checked out branch has a push remote (that is, [`@{push}`](https://www.git-scm.com/docs/gitrevisions#Documentation/gitrevisions.txt-emltbranchnamegtpushemegemmasterpushemempushem)) different from the upstream,
    - The number **commits ahead of the push remote** the local branch is. Optionally show the indicator even if the local branch is not ahead of the push remote.
    - The number **commits behind the push remote** the local branch is. Optionally show the indicator even if the local branch is not behind the push remote.
    - The **push remote's remote**, if different from the user-configured default
    - (The push branch's name is not shown, even if it differs from the local name. Want it to be? Weigh in at [olets/hometown-prompt/#14](https://github.com/olets/hometown-prompt/issues/14))
- The first **tag** pointing to the current commit, if there is one

## Use Git Prompt Kit components alongside other content

Using Git Prompt Kit components doesn't limit you to _only_ using Git Prompt Kit components. Say for example you wanted to add the time, static content, dynamic content, and to put the prompt character on its own line. Do just as you would if you didn't have Git Prompt Kit:

```shell
# ~/.zshrc

autoload -Uz add-zsh-hook

add-zsh-hook precmd precmd_set_psvar

function precmd_set_psvar() {
  psvar=( ${psvar[1]:-''} ${psvar[2]:-''} $(my_cool_command 2>/dev/null) )
  (( psvar[2] )) && return
  (( psvar[1] )) && { psvar[2]=1; return }
  psvar[1]=1
}

# load Git Prompt Kit and then

PROMPT='%* hello world%(2V.'$'\n.)%3v'
PROMPT+='$GIT_PROMPT_KIT_CWD'
PROMPT+='${GIT_PROMPT_KIT_HEAD:+ $GIT_PROMPT_KIT_HEAD}'
PROMPT+='\n'
PROMPT+='$GIT_PROMPT_KIT_CHAR '
```
