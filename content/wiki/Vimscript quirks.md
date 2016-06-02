---
tags: vim
cache_breaker: 1
---

* `map()` mutates the collection in place; if you want to avoid this you have to make a copy first.
* `'some string' == 0` evaluates to true (`1`).
* Line-continuation markers (`\`) occur at the beginning of the continuation instead of the end of the continued line, unlike every other language.
* There are no implicit line-continuations (ie. you cannot split a long list over multiple lines after the commas; you have to use explicit line-continuation markers).
* Lists and dictionaries do not permit optional trailing commas after the last item, unlike many other languages.
* Output captured with `redir` will include wrapping (ie. newlines) based on how wide the screen was at runtime.
* `echoerr` [aborts the current function](http://stackoverflow.com/a/30405896/2103996), leading Vim to "not see" any pending `:endif` constructs and complain of `E171: Missing :endif`; if you just want to append to the `message-history` then use `:echomsg` instead.
* The `&` modifier (described in `:h :s_flags`) is supposedly for applying the flags from the "previous substitute command", but "previous" doesn't mean "most recently executed" but rather "last seen in file, even if seen inside an `if` block body that wasn't executed because its conditional was false".
* Many types cannot be coerced: for example, given a function `Foo` that may return a Dictionary or nothing, you cannot do `if Foo()` without getting the error `E728: Using a Dictionary as a Number`; instead you have to do `if type(Foo()) == 4`.
* Function naming is inconsistent: for example you have `getline()`, `matchend()` and `deepcopy()`, but also `job_start()`, `remote_send()` and `assert_match()`.
* Despite its name `<sfile>` means something completely different when evaluated inside a function.
