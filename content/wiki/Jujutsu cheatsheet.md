---
tags: wiki jj jujutsu
title: Jujutsu cheatsheet
---

# Creating a new repo

```
# Create a new repo backed by Git.
jj git init

# Colocate a jj repository on top of an existing Git repo.
jj git init --colocate

# See colocation status.
jj git colocation status
```

# Configuring

```
# Set user.name and user.email.
jj config set --user user.name "Some One"
jj config set --user user.email "someone@example.com"

# Set `jj log` as the default command to run when you do `jj` without arguments.
jj config set --user ui.default-command log

# Stop hints to set ui.diff-editor; always use the built-in one.
jj config set --user ui.diff-editor :builtin

# Use GPG for signing commits.
jj config set --user signing.behavior own
jj config set --user signing.backend gpg

# See configured settings.
jj config list # Just the overrides.
jj config list --include-defaults # Everything.
```

# Editing

```
# Discard working copy changes.
jj restore foo/bar/baz

# Take working copy changes from foo/bar/baz and fold them into a prior rev.
jj squash --into <rev> -- foo/bar/baz

# Take selected working copy changes and fold them into the parent rev.
jj squash -i

# Discard a revision.
jj abandon -r <rev>

# Moving to another revision.
jj edit -r <rev>
```

In my initial experiments with `jj` I was using `git commit -p` to selectively commit changes from the working directory, then `jj git import` to have it register the changes. This ended up creating "orphan" changesets with no descendants and no descriptions (ie. `jj` would keep the snapshot of the current working directory, then create a new snapshot of everything that wasn't included in the new commit). These orphaned revisions are pretty much useless, hence `jj abandon`.

# Dealing with detached HEADs

If a `jj` operation leaves you on a detached HEAD (as reported by `git status`), even though you expect to be on `main`, you can reset your `HEAD` to point at `main` without touching the worktree at all with:

```
git symbolic-ref HEAD refs/heads/main
```

Once you fully commit to `jj`, you may as well resign yourself to being in a detached HEAD state almost all of the time.

In general, it appears that bookmarks don't update unless you tell them to, so you may need to do this to push:

```
jj bookmark set main -r <rev>
jj push # Push to origin.
jj push --remote github # Push to mirror.
```

# Bookmarks

```
# Delete local bookmark and will propagate deletion of corresponding branch to remote on next push.
jj bookmark delete some/bookmark

# Delete local bookmark (won't do anything to remote on next push).
jj bookmark forget some/bookmark
```

# Updating

```
jj git fetch
jj rebase -d <target> # where <target> would be "main" or some bookmark
```

# Force-pushing

If you try to edit published history, `jj` will complain, and you'll have to use `--ignore-immutable`.

```
$ jj squash -i -r @
Error: Commit 23e29b9b15de is immutable
Hint: Could not modify commit: twtqmoru 23e29b9b main | (empty) fix: turn regular file into a symlink
Hint: Immutable commits are used to protect shared history.
Hint: For more information, see:
      - https://jj-vcs.github.io/jj/latest/config/#set-of-immutable-commits
      - `jj help -k config`, "Set of immutable commits"
Hint: This operation would rewrite 1 immutable commits.
$ jj squash -i -r @ --ignore-immutable
```


# Bibliography

- https://zerowidth.com/2025/jj-tips-and-tricks/
- https://andre.arko.net/2025/09/28/stupid-jj-tricks/
