---
tags: at os.x
---

```shell
$ at 8:58pm
dialog -message 'foo'
job 3 at Sun Jul 28 20:58:00 2013
```

(Use `<Control-D>` to finish entering the job.)

Alternatively, if you don't have `dialog` command (and you probably don't because I haven't made it easy to get; see [this feature request](/issues/1502)), you can use the built-in `osascript`:

     osascript -e 'tell app "System Events" to display dialog "foo"'

**Note:** In order for any of this to work, you need to enable `at` jobs to run; see `man atrun`:

```shell
$ sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.atrun.plist
```

# Other handy commands

-   `atq`: see what is in the `at` queue
-   `atrm`: remove jobs from the `at` queue

