---
tags: git
---

# Fixing the date on an existing commit

Let's look at the case where we only want to change the `HEAD` commit; changing previous commits is harder (using either `git rebase -i` or `git filter-branch`) and may be limited by your ability and/or willingness to rewrite published history.

```
$ D=$(ts -6d) # Move the date back six days.
$ GIT_COMMITTER_DATE="$D" git amend --date="$D" --no-edit
```

## Notes

- `amend` here is just an alias for `git commit --amend`.
- `ts` is [a script](https://github.com/wincent/wincent/blob/master/roles/dotfiles/files/.shells/bin/ts) from [my dot-files repo](https://github.com/wincent/wincent).
