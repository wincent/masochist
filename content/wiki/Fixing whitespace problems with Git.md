---
tags: git wiki
cache_breaker: 1
---

This was posted to the [Git mailing list](/wiki/Git_mailing_list) by Larry D'Anna:

```shell
$ xargs -0 -I: <<'EOF' git config --file ~/.gitconfig alias.wsfix :
!
. "$(git --exec-path)"/git-sh-setup
if git-diff --quiet --exit-code; then
   if git diff --cached --check >/dev/null; then
       exit 0;
   fi
   echo fixing
   git diff --cached > $GIT_DIR/wsfix.diff
   git apply -R $GIT_DIR/wsfix.diff
   git apply --whitespace=fix $GIT_DIR/wsfix.diff
   rm -f $GIT_DIR/wsfix.diff
else
   echo working tree is dirty\!
fi
EOF
```

This was a follow-up to a couple of aliases suggested previously by Andreas Ericsson:

    [alias]
            wsfix = !git diff HEAD >P.diff && git reset --hard && git apply --whitespace=fix P.diff && rm -f P.diff
            wsfixi = !git diff --cached >P.diff && git reset && git apply --whitespace=fix P.diff && rm -f P.diff

> `wsfixi` is the one that applies staged stuff. `wsfix` fixes all whitespace errors since the last commit and stages all changes in the index.
