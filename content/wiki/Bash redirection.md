---
tags: bash wiki
---

`man bash` has a wealth of information on redirection (grep for `REDIRECTION`) but here is a quick cheat sheet:

# Redirect nothing

```shell
$ command
```

# Redirect standard out

```shell
$ command > target
```

# Redirect standard error

```shell
$ command 2> target
```

# Redirect standard error and standard out

```shell
$ command > target &2>1
```

Or, as short-hand:

```shell
$ command &> target
```

Redirecting to a command rather than a file or device:

```shell
$ command 2>&1 | mail username@localhost
```

Redirecting *and* displaying, using `tee`:

```shell
$ command 2>&1 | tee target
```

Appending rather than clobbering:

```shell
$ command >> target &2>1
```
