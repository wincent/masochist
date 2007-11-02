---
tags: git
---

Sometimes you accidentally commit a change to a [Git](/wiki/Git) repository and you later want to literally obliterate (remove all traces) of it.

For example, normally you can fix a mistake in the most recent commit by using `git commit --amend`, but what if your commit included confidential information? The commit object, corresponding tree object, and corresponding file blobs are still in the repository's object database even though you've it no longer appears in the development history. This non-destructive behaviour is usually a good thing, but in the case of confidential information you really don't want it left lying around.

If you publish your repository using `git push` over [SSH](/wiki/SSH) then there is nothing to worry about because only the objects reachable from the [DAG](/wiki/DAG) will be transmitted. But what if you perform a local clone of your repository? I don't know what happens for non-local clones, but at least in the case of local clones everything gets copied.

You can run `git prune` to remove all unreferenced, unreachable objects, but your unwanted commit will survive because it will be referenced from your reflogs. A reflog is basically a journal describing how a particular `HEAD` has evolved over time. So this means that if you do the following:

    git add file
    git commit -m "Added file"
    git reset --hard HEAD^

Your reflog will show the original state (before committing), the new state (after committing), and then the original state again (after resetting).

Luckily, reflogs are per-repository only and they are used like caches to store potentially useful but not strictly necessary information. This means that they can be safely deleted. Doing so will make your unwanted commit and associated objects unreachable, and they can then be wiped out using `git prune`:

    # blow away last commit
    git reset --hard HEAD^

    # if you were on master branch, for example, kill that reflog
    rm .git/logs/refs/heads/master

    # and the HEAD reflog as well
    rm .git/logs/HEAD

    # now git-prune will get rid of everything you don't want
    git prune

If you have repacked recently you also need to do one of the following to ensure that a copy of the unwanted objects hasn't made its way into a packfile:

    git repack -a -d
    git gc
