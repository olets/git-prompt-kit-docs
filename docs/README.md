# Hometown Prompt ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/hometown-prompt)

![splash card: the text 'Hometown Prompt' as green neon lettering](/images/hometown-prompt-splash-card.png)

**Hometown is a feature rich, high performance Git-aware zsh theme** with segments for the user, host, time, the current working directory and its parent, and —within a Git repo— detailed Git status. It is carefully designed to show a lot of information clearly.

Get a feel for how the components respond to context and how the options work by playing with the [interactive demo](./demo.md).

&nbsp;

![screenshot of Hometown Prompt example](/images/hometown-prompt-example.jpg)

By dynamically colorizing and hiding/revealing content, Hometown packs a lot of data into a concise and user-friendly prompt. It displays, in 1-3 lines depending on the layout configuration…

Always:

- The current user, if not one you've configured as hidden
- The current host, if not one you've configured as hidden
- The time the prompt was drawn
- User-configured content
- The current working directory (the number of path segments before the CWD is configurable)

If in a Git repo:

- the repo root directory (the maximum number of path segments is configurable)
- If in a subdirectory of the repo
  - the current working directory (the maximum number of path segments listed between the Git root and the CWD is configurable)
  - The Git repo's root is underlined
- If HEAD is detached, the checked out commit. Text color is dependent on whether or not the index is dirty
- If a branch is checked out:
  - The checked out branch's name. Text color is dependent on whether or not the index is dirty
  - If the checked out branch does not have a remote tracking branch, a symbol indicating that fact
  - If the checked out branch has an upstream (that is, [`@{upstream}`](https://www.git-scm.com/docs/gitrevisions#Documentation/gitrevisions.txt-emltbranchnamegtupstreamemegemmasterupstreamememuem)),
    - The number of commits ahead of the upstream the local branch is, if any
    - The number of commits behind the upstream the local branch is, if any
    - The upstream's remote, if different from the user-configured default
    - The upstream's name, if different from the local branch's
    - Text color is dependent on context and status:
      - If no distinct push remote, colored if the local is either ahead or behind
      - If there a distinct push remote, colored if the local is behind
  - If the checked out branch has a push remote (that is, [`@{push}`](https://www.git-scm.com/docs/gitrevisions#Documentation/gitrevisions.txt-emltbranchnamegtpushemegemmasterpushemempushem)) different from the upstream,
    - The number commits ahead of the push remote the local branch is, if any
    - The number commits behind the push remote the local branch is, if any
    - The push remote's remote, if different from the user-configured default
    - (The push branch's name is not shown, even if it differs from the local name. Want it to be? Weigh in at at [romkatv/gitstatus/#291](https://github.com/romkatv/gitstatus/issues/291))
- The first tag pointing to the current commit, if there is one
- The number of untracked ("new") files. Whether or not to show the accompanying symbol when there are no such files is configurable.
- The number of conflicted files. Whether or not to show the accompanying symbol when there are no such files is configurable.
- The number of unstaged deleted files. Whether or not to show the accompanying symbol when there are no such files is configurable.
- The number of unstaged modified files. Whether or not to show the accompanying symbol when there are no such files is configurable.
- The number of staged new files. Whether or not to show the accompanying symbol when there are no such files is configurable.
- The number of staged deleted files. Whether or not to show the accompanying symbol when there are no such files is configurable.
- The number of staged modified files. Whether or not to show the accompanying symbol when there are no such files is configurable.
- The name of the ongoing action (for example "rebase") if any
- Optionally:
  - The number of stashes. Whether or not to show the accompanying symbol when there are no such files is configurable.
  - The number of files with the assume-unchanged bit set. Whether or not to show the accompanying symbol when there are no such files is configurable.
  - The number of files with the skip-worktree bit set. Whether or not to show the accompanying symbol when there are no such files is configurable.
