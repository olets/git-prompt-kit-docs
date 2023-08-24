import { valueOf } from "./valueOf.js";

export function dirty({
  directoryGitRepo,
  gitStatusConflicted,
  gitStatusDeleted,
  gitStatusDeletedStaged,
  gitStatusModified,
  gitStatusModifiedStaged,
  gitStatusNew,
  gitStatusUntracked,
}) {
  if (!directoryGitRepo) {
    return 0;
  }

  const dirty =
    [
      gitStatusConflicted,
      gitStatusDeleted,
      gitStatusDeletedStaged,
      gitStatusModified,
      gitStatusModifiedStaged,
      gitStatusNew,
      gitStatusUntracked,
    ]
      .map((context) => valueOf(context))
      .filter((val) => !!val).length > 0;

  return Number(dirty);
}
