---
tags: git github
cache_breaker: 1
---

# Dealing with a pull request from a deleted repo

**Scenario:** Somebody submits a pull request and then deletes their fork.

You can't add their fork as a remote and pull their code that way. The simplest way to get the commit (if the PR consists of a single commit) is:

```shell
$ git checkout -b gh/pull/48
$ curl -L https://github.com/wincent/Command-T/pull/48.patch | git am
```

Note the use of `-L`, which causes `curl` to follow redirects.

# Using `git hub`

I made a `git hub` command (source [here](https://github.com/wincent/wincent/blob/master/roles/dotfiles/files/.shells/bin/git-hub)) that provides the following subcommands:

          git hub get <pr>        [fetch a PR to a local branch]
          git hub link [pr]       [show web URL for PR]
          git hub merge [pr]      [merge a PR]
          git hub ls              [list open PRs]
          git hub show <pr>       [show a PR on standard out]

# See also

-   Assortment of tips/comments for working with pull requests from the [command line](/wiki/command_line): <https://gist.github.com/piscisaureus/3342247>

