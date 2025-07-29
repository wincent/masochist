---
tags: wiki
title: Jujutsu
---

[Jujutsu] is a [Git]-compatible [version control system] from [Google] with some novel ideas:

- No index (staging area). Every modification is automatically included in the current change.
- Conflicts don't prevent operations from completing (ie. you can fully rebase a stack of changes and resolve conflicts as a separate, posterior step).
- Rebasing of dependent changes happens automatically (note that previous point about conflict handling is important for this to be viable).
- Many commands exists for common stacked workflows; for example, for inserting changes before (`jj new --before`) and after (`jj new --after`) other changes, even changes with multiple parents or children (see [`jj new`](https://jj-vcs.github.io/jj/latest/cli-reference/#jj-new)). See also [`jj absorb`](https://jj-vcs.github.io/jj/latest/cli-reference/#jj-absorb), which automatically distributes the contents from a revision to the closest relevant ancestors (similar to [`git-absorb`](https://github.com/tummychow/git-absorb), and [`jj next`](https://jj-vcs.github.io/jj/latest/cli-reference/#jj-next)/[`jj prev`](https://jj-vcs.github.io/jj/latest/cli-reference/#jj-prev) for moving between revisions.

I would love to see some of these ideas to be baked into Git, proper, although Git is (necessarily) slow-moving so it may be a while... In the meantime, migrating to `jj` is not without its challenges, because the Git-compatibility is only partial at this time (eg. no support for submodules etc).

# See

- Official repository on GitHub: https://github.com/jj-vcs/jj

<!-- References -->

[Jujutsu]: /wiki/Jujutsu
[version control system]: /wiki/version_control_system
[Git]: /wiki/Git
[Google]: /wiki/Google
