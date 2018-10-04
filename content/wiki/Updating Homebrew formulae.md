---
tags: homebrew wiki
---

These are some notes made trying to update [the Clipper recipe](https://github.com/Homebrew/homebrew-core/blob/63966af9c41a16540cfedad660689ef0420cf3a4/Formula/clipper.rb) for the v2.0.0 release.

After testing the build and ensuring the release was tagged *and published* in the releases tab on GitHub, I confirmed the download URL:

```shell
wget https://github.com/wincent/clipper/archive/2.0.0.tar.gz
```

and grabbed the SHA256 hash:

```shell
openssl sha256 2.0.0.tar.gz
```

When I tried to run `brew bump-formula-pr`, it told me I needed a GitHub API token, so I got one of those and tried again:

```shell
HOMEBREW_GITHUB_API_TOKEN=$REDACTED brew bump-formula-pr \
  --sha256=9c9fa0b198d11513777d40c88e2529b2f2f84d7045a500be5946976a5cdcfe83 \
  --url=https://github.com/wincent/clipper/archive/2.0.0.tar.gz \
  clipper
```

This failed:

```
Username for 'https://github.com': wincent
Password for 'https://wincent@github.com':
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/wincent/homebrew-core.git/'
Error: Failure while executing; `git push --set-upstream https://github.com/wincent/homebrew-core.git clipper-2.0.0:clipper-2.0.0` exited with 128.
```

I found that I couldn't try again without first resetting the repo (because the first attempt had created a `clipper-2.0.0` branch and subsequent attempts claimed the version had already been bumped):

```shell
cd /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core
git co master # "co" is an alias for "checkout"
git br -D clipper-2.0.0 # "br" is an aliase for "branch"
```

Seeing it not work a second time, I just manually pushed the commit:

```shell
git push --set-upstream github.com:/wincent/homebrew-core.git clipper-2.0.0:clipper-2.0.0
```

(Note the pushing over SSH here because I can't push over HTTPS.)

This created [this PR](https://github.com/Homebrew/homebrew-core/pull/32700), which had a checklist in it which I dutifully marked off. Specifically, I had to do these:

```shell
brew install --build-from-source clipper
brew audit --strict clipper
```

Overall, this was broken enough that I will probably just produce a manual PR again next time.
