---
tags: aws ebs wiki
cache_breaker: 1
---

# Example: deleting all or some snapshots from a prior month

## Using Amazon's Java-based [command line](/wiki/command_line) tools

These tools have a tremendously long startup time and slam the CPU for as long as you're running them; for example, deleting a couple months' of snapshots (about 4 per day, so let's say 240 snapshots will peg your CPUs at 100% for half an hour or more). For an alternative, see further down for the procedure with the lightweight [aws](/wiki/aws) tool.

### Get a date-sorted overview of all snapshots

```shell
$ ec2-describe-snapshots | sort -k 5
```

### Delete all snapshots from the specified prior month

```shell
$ # list all snapshots   | sort by date | target month  | get snapshot ID  | delete snapshots 1 at a time 
$ ec2-describe-snapshots | sort -k 5    | grep 2010-03- | awk '{print $2}' | xargs -n 1 -t ec2-delete-snapshot
```

### Delete all snapshots for the month but keep the first four

We can add `sed 1,4d` to the pipeline (in this example I keep the first four because I have 2 instances and 2 volumes on each instance):

```shell
$ ec2-describe-snapshots | sort -k 5 | grep 2010-03- | sed 1,4d | awk '{print $2}' | xargs -n 1 -t ec2-delete-snapshot
```

### Delete all snapshots except from the current month

Here we exclude 2011-07 in this example:

```shell
$ ec2-describe-snapshots | grep -v 2011-07- | awk '{print $2}' | xargs -n 1 -t ec2-delete-snapshot
```

### Get another overview of all remaining snapshots

```shell
$ ec2-describe-snapshots | sort -k 5
```

## Using the [aws](/wiki/aws) script

Using Tim Kay's [aws](https://github.com/timkay/aws) script is literally an order of magnitude faster than using the Java command line tools. Not only is the rate at which snapshots can be deleted higher, the CPU usage during the run is less than half, making the machine much more pleasant to use while the process is going on.

### Overview

```shell
$ aws describe-snapshots
```

### Delete all snapshots except from the current month

```shell
$ aws describe-snapshots | grep -v 2011-09- | grep snap- | awk '{print $2}' | xargs -n 1 -t aws delete-snapshot
```

**Beware:** You probably want to filter to target a specific subset of images, rather than blindly deleting *all* older snapshots. For example, if your backup snapshots contain the text "backup" in the description, you could add a `grep backup` step:

```shell
$ aws describe-snapshots | grep backup | grep -v 2011-09- | grep snap- | awk '{print $2}' | xargs -n 1 -t aws delete-snapshot
```
