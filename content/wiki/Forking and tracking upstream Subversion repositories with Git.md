---
tags: subversion git wiki
cache_breaker: 1
---

Elsewhere I've written about how to take code from a [Subversion](/wiki/Subversion) repository and migrate it (permanently) to [Git](/wiki/Git) repository (see "[Migrating Subversion repositories to Git](/wiki/Migrating_Subversion_repositories_to_Git)").

In this article I want to talk about forking a third-party project that is hosted with [Subversion](/wiki/Subversion), tracking its progress on an ongoing basis, but actually maintaining your own modifications in a separate branch of a [Git](/wiki/Git) repository that you control.

As an example, here's what I did to maintain a fork of the Google [Breakpad](/wiki/Breakpad) project.

# Clone the upstream history

```shell
$ mkdir google-breakpad
$ cd google-breakpad
$ mkdir src
$ cd src
$ git svn init --stdlayout http://google-breakpad.googlecode.com/svn
$ git svn fetch
```

# Create a repo on a publicly accesible "origin" server that you control

For other people to actually see your fork you have to be able to push it somewhere:

```shell
$ git remote add origin git.example.com:/pub/git/path-to-public-repos/google-breakpad.git
$ git config branch.master.remote origin
$ git config branch.master.merge refs/heads/master
```

Actually setting up the remote repo on the other machine is described in "[Setting up a brand new public Git repository](/wiki/Setting_up_a_brand_new_public_Git_repository)".

# Publish the repo to your own public "origin"

We're going to keep our local changes on the "wincent" branch so that the default "master" branch can just track the upsteam (Google) Subversion repo:

```shell
$ git branch wincent
$ git push --all
```

# Staying up-to-date

To pull down new changes from Google:

```shell
$ git co master
$ git svn fetch
```

(Note that `git co` is an alias I have set up for `git checkout`.)

To keep our local mods up-to-date, either:

```shell
$ git co wincent
$ git rebase master
```

If we have only unpublished changes that we can rewrite; or:

```shell
$ git co wincent
$ git merge master
```

If our changes have already been pushed to our remote origin and therefore can't be re-written.
