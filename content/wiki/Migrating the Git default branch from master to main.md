---
tags: git wiki
title: Migrating the Git default branch from master to main
---

For new repositories, [set the Git `init.defaultBranch` to "main"](https://github.com/wincent/wincent/commit/8f29c77e67cdf0145461a8e2546fae3a4dca398a), overriding the Git default of "master". This affects newly created repositories.

Likewise, all major Git hosting platforms (eg. [GitHub], [GitLab](https://gitlab.com/), [BitBucket](https://bitbucket.org)) provide options in their GUI to set the preferred default branch for newly created repositories, as well as changing it for existing repositories. To my knowledge, the "default for the default" is now `main` on most or all of them.

GitHub allows you to rename a branch and "redirect" requests from the old branch to the new one. I haven't used this feature, because I am not a huge fan of the idea of requiring users who have previously cloned a repo to have to take manual steps to adjust their set-up to track your upstream configuration changes.

So, as [reported here](https://twitter.com/wincent/status/1401338775175892994), I recently "migrated" the main branch on [my dotfiles repo](https://github.com/wincent/wincent) from "master" to "main" in the following way.

1.  Create a new "main" branch locally, based on "master":

    ```
    git checkout -b main
    ```

2.  Tweak settings to make local `master` track local `main` rather than the other way around, while local `main` will track the remote `main` on the origin:

    ```
    git config branch.master.merge refs/heads/main
    git config branch.master.remote .
    git config branch.main.remote origin
    git config branch.main.merge refs/heads/main
    ```

3.  Add [a hook](https://github.com/wincent/wincent/blob/main/support/hooks/pre-push) to `.git/hooks/pre-push` that will update the local and remote `master` whenever `main` is pushed.

4.  Push `main` for the first time.

5.  Set the default branch to `main` in GitHub, GitLab, and BitBucket.

6.  On [git.wincent.com](https://git.wincent.com) where I run my own Git instance, it is necessary to update the `HEAD` so that `git clone` operations from it check out `main` instead of `master`:

    ```
    sudo -u git git symbolic-ref HEAD refs/heads/main
    ```

## Appendix: gitweb

I looked into the source code for [`gitweb`](https://git-scm.com/docs/gitweb) to see how it figures out which order to display the branch heads in the UI. At the time I write this, it's currently showing this order for my dotfiles repo:

-   `master`
-   `main`
-   `pu`
-   `next`
-   `media`

It is [using `--sort=-committerdate` in its `git_get_heads_list()` function](https://github.com/git/git/blob/c09b6306c6ca275ed9d0348a8c8014b2ff723cfb/gitweb/gitweb.perl#L3798-L3802) as seen here:

```perl
open my $fd, '-|', git_cmd(), 'for-each-ref',
    ($limit ? '--count='.($limit+1) : ()), '--sort=-committerdate',
    '--format=%(objectname) %(refname) %(subject)%00%(committer)',
    @patterns
    or return;
```

I was able to confirm the ordering by running this on the server:

```sh
sudo -u git git for-each-ref --count=10 --sort=-committerdate --format='%(objectname) %(refname) %(subject)%00%(committer)'
```

I submitted [a patch upstream](http://public-inbox.org/git/20210606085116.13739-1-greg@hurrell.net/) to change that to:

```sh
sudo -u git git for-each-ref --count=10 --sort=-committerdate --sort=-HEAD --format='%(objectname) %(refname) %(subject)%00%(committer)'
```

but I have no idea whether it is the kind of behavior change that they'll accept. We'll see.

[GitHub]: /wiki/GitHub
