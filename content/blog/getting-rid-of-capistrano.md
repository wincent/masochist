---
title: Getting rid of Capistrano
tags: capistrano snow.leopard blog
---

For a long while now I've been rather dissatisfied with [Capistrano](/wiki/Capistrano). In a nutshell, updating Capistrano is like playing Russian roulette with your ability to deploy: every point release brings with it the risk of breakage. This is not what you want; if you have to suddenly deploy you want to be able to type `deploy` and have it work in a failsafe manner. With Capistrano there are no such guarantees.

I've posted quite a few times on this very topic. Check out my various blog posts and tweets [tagged with "capistrano"](/tags/capistrano) if you feel like some good rant-reading.

Perhaps the added complexity is justified for people running ultra-popular websites which span enormous clusters of server farms, but in my case I run a site with modest traffic (just under 30 gigs per month) which is easily handled by a single box. For some time now I've been tempted to replace my brittle Capistrano set-up with a simple shell script.

With the update to [Snow Leopard](/wiki/Snow_Leopard) and a clean [OS](/wiki/OS) install things were brought to a head.

Either [I could install the last known-working version](/wiki/Installing_Capistrano_2.2.0_on_Mac_OS_X_10.6_Snow_Leopard) of Capistrano (2.2.0) and force it to be used rather than the later version which ships with Snow Leopard (2.5.2) by invoking it with an explicit version parameter (eg. `cap _2.2.0_ deploy:update`), or I could make a clean break and write that simple [shell](/wiki/shell) script I'd been thinking about.

# The result

I couldn't be happier with the result. I've replaced over 5,700 lines of Ruby code (Capistrano 2.2.0) plus nearly 250 lines of Capistrano customization in `config/deploy.rb` with a 268-line shell script (that's including usage documentation and settings).

The script won't break when I touch my [gems](/wiki/gems). It won't break when I update my operating system on my workstation. It won't break when I update the operating system on the server either. It's just simple [Bash](/wiki/Bash) code calling on totally stable [POSIX](/wiki/POSIX)/[UNIX](/wiki/UNIX) tools like `rm`, `ln`, `cp`, `ssh` and `test`.

Goodbye all the magic. Goodbye all the post-step and pre-step hooks. It just does what you need in the right order, and bails if there's a problem.

This is what my Capistrano workflow used to look like:

```shell
$ cap deploy:unlock       # relax permissions (necessary to deploy)
$ cap deploy:check        # check dependencies
$ cap deploy:update       # deploy latest, no restart, no migrations
$ cap deploy:migrate_test # run the migrations on the test database
$ cap spec                # run the spec suite
$ cap deploy:web:disable  # display a maintenance page
$ cap deploy:migrate_all  # run all other migrations
$ cap deploy:restart      # restart server (changes go live)
$ cap deploy:web:enable   # remove maintenance page
$ cap deploy:lockdown     # tighten permissions again
```

I did it in this multi-step fashion partly because I didn't (couldn't) trust Capistrano to stop in the event of a problem. The Capistrano output was so darn chatty that it was difficult to discern the critical information from the superfluous noise. For example, the output of the `deploy:check` command, for example, was:

```shell
$ cap staging deploy:check
  * executing `staging'
    triggering start callbacks for `deploy:check'
  * executing `check_target_environment'
  * executing `deploy:check'
  * executing "test -d /site/deploy/releases"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "test -w /site/deploy"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "test -w /site/deploy/releases"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "which git"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "which gem"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "gem specification --version '>= 0.6' hpricot 2>&1 | awk 'BEGIN { s = 0 } /^name:/ { s = 1; exit }; END { if(s == 0) exit 1 }'"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "gem specification --version '>= 1.3.1' rubygems-update 2>&1 | awk 'BEGIN { s = 0 } /^name:/ { s = 1; exit }; END { if(s == 0) exit 1 }'"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "gem specification --version '>= 0.4.0' rack 2>&1 | awk 'BEGIN { s = 0 } /^name:/ { s = 1; exit }; END { if(s == 0) exit 1 }'"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "test -d /site/deploy"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "test -d /site/deploy/shared"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "which git"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
  * executing "which monit"
    servers: ["wincent.com"]
    [wincent.com] executing command
    command finished
You appear to have all necessary dependencies installed
  * executing `after_check'
*** master differs from origin/master: did you remember to 'git push'? ***
```

The output of the new script for the same operation is:

```shell
$ script/deploy staging check
Environment for this session: staging
Processing command: check
  checking: directories exist and are writable
  checking: executables exist
  checking: gem versions
  checking: local branch vs remote branch
  checking: currently checked out branch
```

The output of Capistrano for the `spec` task was:

```shell
$ cap staging spec
  * executing `staging'
    triggering start callbacks for `spec'
  * executing `check_target_environment'
  * executing `spec'
  * executing "cd /site/deploy/current && RAILS_ENV=test rake spec"
    servers: ["wincent.com"]
    [wincent.com] executing command
 ** [out :: wincent.com] (in /site/deploy/releases/20090114203112)
 ** [out :: wincent.com] .
 ** [out :: wincent.com] .
 ** [out :: wincent.com] .
```

(The output continues for over 1,000 lines like that: emitting one dot for each spec.)

The output of the new script for the same operation is:

```shell
$ script/deploy staging check
Environment for this session: staging
Processing command: spec
.........................................................................................................
```

(Output continues with one dot for each spec, all on the same line.)

With this script I can basically employ a two-step deployment process:

1.  Run all my steps up to and including running the spec suite
2.  If that goes well, run the remaining steps

It looks like this; note that even if you change the order of the parameters it still does things in the correct order:

```shell
$ script/deploy unlock check deploy migrate_test spec
$ script/deploy disable migrate switch restart enable lockdown
```

There's nothing stopping me from adding a couple of "meta" commands for doing these two things in a less verbose fashion:

```shell
$ script/deploy prep
$ script/deploy finalize
```

Being dead-simple Bash code, give me two minutes in [Vim](/wiki/Vim) and that'll be done.

You'll note that I added a "switch" step because I don't like the way Capistrano would update my `current` symlink before I had even run the migrations or the spec suite. It now changes the symlink only at the very end of the process, right before restarting the cluster.

And as an added bonus, the script supports the `--rev` switch, allowing you to specify a specific [Git](/wiki/Git) tag, branch or commit to deploy.

This thing works and it'll be drop-dead easy to maintain. It took only a few hours to put together. If only I hadn't wasted all that time with Capistrano.
