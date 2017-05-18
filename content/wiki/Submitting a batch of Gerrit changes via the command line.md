---
tags: gerrit wiki
---

The Gerrit docs would suggest that you can do something like:

```shell
$ ssh -p 29418 $USER@gerrit.example.com gerrit review \
  -m '"Some explanatory message"' \
  --verified +1 \
  --code-review +1 \
  --submit \
  --project foobar \
  $(git rev-list --reverse origin/master..HEAD)
```

But this will effectively merge the commits in arbitrary order, leading to merge conflicts (especially if your project is using the "cherry-pick" integration model.

In this scenario, the right thing to do is use the shell to submit the changes in order:

```shell
$ for REV in $(git rev-list --reverse origin/master..HEAD); do
> ssh -p 29418 $USER@gerrit.example.com gerrit review \
>   -m '"Some explanatory message"' \
>   --verified +1 \
>   --code-review +1 \
>   --submit \
>   --project foobar \
>   $REV
> done
```
