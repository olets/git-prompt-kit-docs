# Hometown Prompt ![GitHub release (latest by date)](https://img.shields.io/github/v/release/olets/hometown-prompt)

![splash card: the text 'Hometown Prompt' as green neon lettering](/images/hometown-prompt-splash-card.png)

**Hometown is a feature rich, high performance Git-aware zsh theme** with segments for the user, host, time, the current working directory and its parent, and —within a Git repo— detailed Git status. It is carefully designed to show a lot of information clearly.

> Get a feel for how the components respond to context and how the options work by playing with the [interactive demo](./demo.md).

&nbsp;

![screenshot of Hometown Prompt example](/images/hometown-prompt-example.jpg)

Hometown shows, in this order

Always:

- The current user, if not one you've configured as hidden
- The current host, if not one you've configured as hidden
- The time the prompt was drawn
- User-configured content
- The current working directory
  - The number of path segments before the CWD is configurable.

If in a Git repo:

- If the current working directory is a subdirectory in a Git repo, the Git root is shown (prefixed by the configured number of path segments) followed by the current working directory (prefixed by a separately-configured number of path segments between the Git root and the CWD). The Git repo's root is underlined. For example, "git-parent/g͟i͟t͟-͟r͟o͟o͟t/git-child", "git-parent/g͟i͟t͟-͟r͟o͟o͟t/.../git-grandchild/git-great-grandchild-cwd".
- If HEAD is detached, the checked out commit, colored if the index is dirty
- If a branch is checked out:
  - Its name, colored if the index is dirty
  - If it does not have a remote tracking branch, the word "local"
  - If it has an upstream (that is, [`@{upstream}`](https://www.git-scm.com/docs/gitrevisions#Documentation/gitrevisions.txt-emltbranchnamegtupstreamemegemmasterupstreamememuem)),
    - The number of commits ahead of the upstream the local branch is, if any
    - The number of commits behind the upstream the local branch is, if any
    - The upstream's remote, if different from the user-configured default
    - The upstream's name, if different from the local branch's
    - Color is dependent on context and status:
      - If no distinct push remote, colored if the local is either ahead or behind
      - If there a distinct push remote, colored if the local is behind
  - If it has a push remote (that is, [`@{push}`](https://www.git-scm.com/docs/gitrevisions#Documentation/gitrevisions.txt-emltbranchnamegtpushemegemmasterpushemempushem)) different from the upstream,
    - The number commits ahead of the push remote the local branch is, if any
    - The number commits behind the push remote the local branch is, if any
    - The push remote's remote, if different from the user-configured default
    - (The push branch's name is not shown. Want it to be? Weigh in at at [romkatv/gitstatus/#291](https://github.com/romkatv/gitstatus/issues/291))
- The first tag pointing to the current commit, if there is one
- The number of stashes
- The number of files with the assume-unchanged bit set
- The number of files with the skip-worktree bit set
- The number of untracked ("new") files
- The number of conflicted files
- The number of unstaged deleted files
- The number of unstaged modified files
- The number of staged new files
- The number of staged deleted files
- The number of staged modified files
- The name of the ongoing action (for example "rebase") if any
