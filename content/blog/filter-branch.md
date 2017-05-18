---
description: The story of how I rewrote a slow git-filter-branch task, reducing the run-time from a projected 42 days down to around an hour.
fb: https://www.facebook.com/glh/posts/10154279236886307
tags: git site masochist blog
title: A tale of three filter-branches
twitter: https://twitter.com/wincent/status/863640786381922305
---

> **TL;DR:** I used `git-filter-branch` to rewrite the history of the repo containing this website's files, processing 4,980 commits and transforming 3,702 wikitext files to Markdown along the way. I wrote three separate versions: the first would have taken as long as 42 days to complete, the second perhaps 3 to 4 days, and the third and final version completed in about an hour.

This is the tale of how I spent a few hours implementing and re-implementing a slow transformation, reducing the runtime from a projected 42 days to an actual runtime of an hour, experiencing a joyful reminder of the thrill of problem-solving that makes me love programming so much.

# The background

For a bunch of [self-indulgent reasons](/blog/masochist), the material for this website lives as a collection of Markdown documents in [the `content` branch](https://github.com/wincent/masochist/tree/content) of [a Git Repo](https://github.com/wincent/masochist). That "Markdown" bit wasn't always true though. As a result of an unfortunate choice, I'd actually [accumulated thousands of wikitext documents](/blog/betting-on-the-wrong-horse) over the years, and I'd been serving them with a Rails app and a very fast [wikitext translator gem](https://github.com/wincent/wikitext).

When I got rid of the Rails app and moved the content out of a database and into Git, I wanted to preserve exactly the same output when rendered to HTML, so I made a "[wikiserve](https://github.com/wincent/masochist/tree/a9ec76e1c6633d1cc50259cd0b525a6118f50da8/wikiserve)" microservice in Ruby that simply wrapped the wikitext gem, and I had my Node [GraphQL](http://graphql.org) server hit the microservice whenever it needed to turn wikitext into HTML.

This worked remarkably well, but after leaving the whole thing untouched for a year or more I found that I couldn't run the microservice locally on my new laptop. You see, frustrated by the bitrot and flakiness that comes with the added complexity of having multiple installed Rubies (one from Apple, one via Homebrew, a bunch installed by ruby-install and switched between using chruby), I decided to just say "screw it" and uninstall all but the stock Apple one that comes baked into the system. There is simply no reason for me to muck about chasing anything like the bleeding edge of the Ruby ecosystem: I want it to be a dependable, stable, cross-platform workhorse that I can count on to get shit done. I rely on Ruby to power [Command-T](https://github.com/wincent/command-t) inside Vim (which I use many dozens of times a day), to [process outbound email](https://github.com/wincent/wincent/blob/1e904a957ff9f766f13aa937f78922b0355d7b3b/roles/dotfiles/files/.mutt/scripts/msmtp.rb) for me [from mutt](/blog/email), and to [handle things like encrypted content](https://github.com/wincent/git-cipher) in my Git repos. In short, I am seldom actively iterating on any of this stuff, but I want it to just work, just like I do when I plug a fridge into the wall and expect it to dependably keep things cold for me.

The catch is that Apple introduced a thing called ["System Integrity Protection"](https://en.wikipedia.org/wiki/System_Integrity_Protection) (SIP) with El Capitan which effectively breaks installation of any Ruby gem that has an executable component. These gems try to install their binaries under `/usr/bin/`, but that is off limits under SIP, even for the root user.

Ugh. There are workarounds, of course — disabling SIP temporarily or permanently, explicitly setting `GEM_HOME` and `GEM_PATH` to install into another location, or specifying `-n /usr/local/bin` when running `gem install` — but I was just left with the feeling that I wanted to accelerate [my plan](https://github.com/wincent/masochist/issues/17) to reduce my dependency on Ruby on macOS by getting my website content out of wikitext and into Markdown.

# Modeling content using Git primitives

This is a terrible but fun idea. When I created Masochist I took all of my content out of a database — with its indices, associations, efficient searches and cheap `ORDER BY` clauses — and shoved it into a bunch of plain text files sitting in a Git repo. There are some really nice properties of this design:

- You get content versioning "for free".
- Minimal vendor lock-in effects, only minor ones in terms of format (seeing as Markdown is easily translated into other formats).
- Easy, distributed backups: just push to another (free) Git host, such as [GitHub](https://github.com/wincent/masochist), [GitLab](https://gitlab.com/wincent/masochist), [Bitbucket](https://bitbucket.org/ghurrell/masochist) etc or [your own server](https://git.wincent.com/masochist.git).

Nevertheless, there are some complications too. The first one is that you have to decide how you are going to model the content metadata that previously lived in your neat little DB tables: things like "created at" and "deleted at" timestamps, or which tags apply to which pieces of content.

Let's just consider the timestamps angle for a second. Some of your alternatives include:

- **Ignore it:** Lose all the history and only ever look at the current state of the content tree. This is the dumbest and simplest thing that could possibly work, but it is a bit sad to lose or obscure the richness that an immutable history record can provide.
- **Shove it in headers inside the content documents:** This would be relatively easy to access and index, but updating it would be a pain: Do you set up editor hooks to update the timestamps when you save a file? Do you have a separate pre-commit tool that enforces timestamps are correctly updated?
- **Treat the Git history itself as the source of metadata:** That is, infer the "created at" timestamp by detecting when an item first entered the repository and the "updated at" timestamp by looking at when it was last modified. Note that you have to do it this way because Git doesn't manage timestamps on files, so you can't rely on the filesystem timestamps to tell you anything useful; even if they were always correct and consistent on your laptop (a big "if") there's not a chance they'll be right when you start `push`-ing, `pull`-ing and `clone`-ing as part of your deploy process.

That last one sure sounds the most elegant, doesn't it? But it also obliges us to accept a reality about Git's object database: it's made to be blazingly fast for certain common operations (`git status`, `git commit` etc) but not others. For example, answering that question of "detecting when an item first entered the repository" could require you to traverse back from the current `HEAD` all the way back to the root commit of the repository, which could mean examining a thousands-long commit chain. And note, even if you know how Git works and seek to minimize the number of `git` processes that you need fork and the number of commits that you actually need to examine (eg. by limiting `git log` with a pathspec), Git's internals will still need to traverse that thousands-long chain in the worst case.

We're going to need a secondary index then. For that, we'll use Redis, shoving in there all the things needed to make operations that Git would be slow at fast. Updating this index is complicated (you know the saying about cache invalidation and this is no exception).

 And that's just timestamps. We haven't even talked about tags indices yet. If we stick the tags in the content document headers, we'll need to index those too. And we'll need to make sure that we carefully handle all sorts of workflows, some of them quite edge-case-y: adding tags, removing tags, removing the last instance of a tag anywhere in the repo, and so on.

The code to update these indices is [hideous and gnarly](https://github.com/wincent/masochist/blob/a9ec76e1c6633d1cc50259cd0b525a6118f50da8/app/src/bin/updateIndices.js). Note: the project is called Masochist for good reason. At least I can console myself that nobody else has to understand it...

# Back to `filter-branch`

Given this architecture, if we want to port all our wikitext files to Markdown, we can't just do it in place. That will blow away our precious timestamp information. Moving "foo.wikitext" to "foo.markdown" would effectively look like the "foo" content coming into existence today.

We have to go back and re-write the history. This is why [the README](https://github.com/wincent/masochist/blob/content/README.md) on [the "content" branch](https://github.com/wincent/masochist/tree/content) has a big disclaimer in it:

> ## WARNING
>
> The content and history of this branch may be re-written at any time.

We're going to use `git-filter-branch` to go back over the entire history. For every commit that deals with a ".wikitext" file in any way, we're going to edit that file in place, renaming and porting it into an ".md" file, and we're going to recreate the commit with all the other metadata intact, timestamps and all. It will be as if the whole wikitext mistake never happened...

First thing is figuring out how to turn wikitext into Markdown as cheaply as possible. I wrote [the wikitext parser](https://github.com/wincent/wikitext/blob/4bb2e23eebaf25c6f1dddb721f074f69375d222a/ext/wikitext/parser.c) in the wikitext gem; it is about 2,600 lines of hand-tweaked, performance-oriented C code. I don't want to have to turn all that into something that emits Markdown instead of HTML. It certainly could be done, but I am too impatient. I just want to bang something out as cheaply as possible while maintaining correctness.

The result is [this abomination of a script](https://github.com/wincent/masochist/blob/605eee357f410c842f58cc1774fb957172ad122a/scripts/wiki-to-markdown). It's a Ruby script that forks out to `node` to read in files and make use of [the `unpack-content` package](https://github.com/wincent/unpack-content) (so that I wouldn't have to rewrite the error-prone logic for dealing with document metadata headers). It gets back JSON, parses it, preprocesses the markup with a [nasty regex](https://github.com/wincent/masochist/blob/605eee357f410c842f58cc1774fb957172ad122a/scripts/wiki-to-markdown#L55-L71) (and a copy-pasta'd one at that), translates the wikitext to HTML using the wikitext gem, turns the HTML into Markdown using `pandoc`, applies another layer of [ugly postprocessing](https://github.com/wincent/masochist/blob/605eee357f410c842f58cc1774fb957172ad122a/scripts/wiki-to-markdown#L92-L99), and finally glues back on the metadata headers before spitting the result back out. Definitely an inglorious hack, but I felt delighted at the quality of the result I was able to get with such a quick little ditty of a script. Additionally, the way I could inject my custom pre-and-post processing so easily into the flow — among other things, fixing a number of long-broken links — meant that the quality of the results is arguably *better* than if I had done it the "right" way and taught the wikitext gem how to produce Markdown instead of HTML. I would say "[worse is better](https://en.wikipedia.org/wiki/Worse_is_better)", but that would be distorting the intent of the originator of the phrase.

My favorite function from the script is this 180-column monstrosity, which will surely break the layout on whatever device you happen to be reading this on:

```ruby
# Prerequisite:
#
#     npm install -g unpack-content
#
def read(file)
  if file == '-'
    safe_file = '/dev/stdin'
  else
    safe_file = Shellwords.shellescape(file)
  end
  JSON[%x{NODE_PATH=/usr/local/lib/node_modules node -e "process.stdout.write(JSON.stringify(require('unpack-content').default(require('fs').readFileSync('#{safe_file}').toString())))"}]
end
```

This really exemplifies the spirit of the script. Hard-coded to assume a global install in a specific location, a single long line because I was too lazy to break it up, with only two small winks in the direction of software development professionalism: care taken to escape unsafe characters in the shell, and the flexibility to read from standard input rather than from a file on the disk.

With this in place and tested, we can move on to the real business: calling this thing from inside `git-filter-branch`.

## Take 1: Render it like it's React, baby

My first try used the `--tree-filter` option, which basically allows you to mutate the filesystem any way you want, and which will drop you into a directory with a checked out work tree corresponding to each and every revision in the entire history, in order, one at a time.

[The code](https://github.com/wincent/masochist/blob/605eee357f410c842f58cc1774fb957172ad122a/scripts/wiki-to-markdown-filter#L66-L80) looks more or less like this:

```ruby
paths = Dir['content/**/*.wikitext']
paths.each_with_index do |path, idx|
  basename = File.basename(path)
  basename_without_extension = File.basename(basename, File.extname(basename))
  dirname = File.dirname(path)
  type = File.basename(dirname)
  safe_src = escape(path)
  safe_dest = escape("#{dirname}/#{basename_without_extension}.md")
  %x{wiki-to-markdown #{safe_src} > #{safe_dest}}
  FileUtils.rm path
end
```

Basically, it's going to find every file with a ".wikitext" extension and turn it into a transformed one with an ".md" extension. Couldn't be simpler. (When I first wrote it, I also had this copy each pre-transform file into an "archive" directory, because I was worried about losing it forever once I'd done a forced update of the "content" branch. I later realized that I could just create [a separate "archive" branch](https://github.com/wincent/masochist/tree/archive/content-2017-05-13) and rely on its immutable history to keep the original state around for me forever.)

When I ran this with a bunch of logging in place to see what was happening — and also inspecting the `.git-rewrite` directory in which these temporary work trees were being manipulated, I realized something disturbing. If commit `A` added a wikitext file and I created a rewritten commit `A'` with a markdown file instead, when I came to the next commit — `B`, which also added a wikitext file — I'd find that the changes I'd made in `A'` weren't visible in `B` so I had to redo them. In other words, if the first commit transformed 1 file, then 100th commit ended up transforming 100 files, 99 of which it had already previously transformed (and not just once, either).

Of course, this should have been obvious to me. If you rewrite a chain of commits `A → B → C → D` to `A' → B' → C' → D'`, you are operating at each step on `A`, then `B`, then `C` and so on, rather than `A'`, `B'`, `C'` etc. Evidently, it *has* to be this way. Git isn't magically going to merge changes from `A → A'` into `B` before handing the work tree over to you. On repos above a trivial size threshold, `--tree-filter` techniques are only going to scale if you can run your side-effects in basically constant time.

### The verdict

Faced between the options of going to bed with the intention of seeing if the run had finished in the morning, or doing a back-of-the-napkin calculation right there to see whether the design was viable, I did the math.

The worst-case runtime of this approach is `O(nm)`, where `n = 4,980` (commits) and `m = 3,702` (wikitext files). That's in the ballpark of 18 million transforms, and at about 5 transforms per second (the speed of my shitty conversion script), we're looking at 42 days to complete the filter run. Clearly unacceptable, and even more so when you consider that any bug discovered later in the run would require it to be restarted all the way from the beginning again.

This approach is pretty much like re-rendering the world for every frame from the top down. Super simple to reason about, but doesn't necessarily scale so well. Like in [React](https://facebook.github.io/react/), right? And just like in React, we need to find our way to short-circuit in `shouldComponentUpdate` and do less work. (Apologies to any non-JS-programming readers who might find this analogy non-illuminating. All should become clear in the next section.)

So, instead of going to bed, I decided to try another strategy.

## Take 2: In which the author embraces stateful computation

Clearly we only want to run each transform once per unique wikitext input. That is, most files don't have edits, so they should get transformed exactly once, and the others should get transformed only as many times as they were edited.

To effect this magic, we need to maintain state about what things we've previously transformed. This is tricky though, because our script is going to be called separately, 4,980 times; once for each commit. Where to store the state in between invocations? Dump it to YAML or JSON and read it in and out? Sounds slow.

[The approach I took](https://github.com/wincent/masochist/blob/605eee357f410c842f58cc1774fb957172ad122a/scripts/wiki-to-markdown-filter#L83-L131) is much more complicated than my initial attempt. The core idea is to use `git ls-tree -r` to [get a list of files](https://github.com/wincent/masochist/blob/605eee357f410c842f58cc1774fb957172ad122a/scripts/wiki-to-markdown-filter#L43-L49):

```ruby
def ls(rev)
  tree = `git ls-tree -r -z #{rev}`.split("\u0000")
  tree.each_with_object({}) do |line, memo|
    mode, type, hash, name = line.match(/^(\d+) (\w+) ([a-f0-9]+)\t(.+)/).captures
    memo[name] = GitObject.new(mode, type, hash, name)
  end
end
```

And we do that for the current commit (the one being rewritten), the parent of the current commit, and the last commit that we actually rewrote. We know that if nothing changed about a file between the parent and the current revision, then we don't have to retransform it; we can just grab the blob from the last-rewritten commit.

The logic to do this kind of update is satisfyingly low-level and looks something like this (paraphrasing):

```ruby
# Remove the ".wikitext" file from the index.
%x{git rm --cached -- #{escape(name)}}

# Shove the pre-existing blob into the index at the right place.
info = escape("#{mode},#{hash},#{markdown_file(name)}")
%x{git update-index --add --cacheinfo #{info}}
```

On those occasions when we do need to perform a transform (because a new file was added, or an existing one was edited) we do this, more or less:

```ruby
# Get the contents of the previous source blob,
# transform it on the fly (no temporary files, just stdin/stdout and pipes),
# then add it to Git's object database.
hash = %x{
  git cat-file blob #{hash} |
  wiki-to-markdown - |
  git hash-object -w --stdin
}.chomp
```

Once we have obtained a hash in this way, we can perform an update like we did above using `git update-index` and `--cacheinfo`.

All of this is happening in the index, not in the worktree (there is no worktree now, as we're using `--index-filter` instead of `--tree-filter`) so this is much faster.

### The verdict

Again we have the choice: go to bed and see whether this thing is done when I wake up, or do some estimation and make a judgment call.

This approach is much better, but still not fast enough. We now get through about 50 files per second because most of the files we look at don't need to be transformed. At that rate, we're now looking at just over 4 days in the worst case. Significantly better than our initial 42-day estimate, but still not good enough. Even if we note that the real total of files that we'll have to look at is closer to `n(n + 1) / 2` (ie. the sum of consecutive integers between 1 and the number of commits, seeing as most commits add just one new file), we're still in the vicinity of 12 million operations, which adds up to nearly 3 days at our rate of 50 operations per second.


Back to the ol' drawing board. Bed can wait.

## Take 3: In which we burn the haystack

One of my former colleagues said this:

> Optimization problems are like finding a needle in a haystack: you can either try to find a way to sort through the hay faster, or you can burn the fucking haystack down.

I don't know where he originally got this from, but I like how visually evocative it is of one of the fundamental insights of performance optimization: rather than trying to work *faster*, it's better to not do the work in the first place. Avoided work is infinitely fast. You can't do better than that.

Here we're going to drastically reduce the number of operations we need to do from about 14 million down to around `n` (4,980, or the number of commits). What we want to do, in essence, is look *only* at files which actually got touched by a particular commit, and have our changes to all the other files carry forward automatically.

There is some hand-waving here as I'm essentially writing off the cost that `git diff-tree` incurs when we ask it to compare two tree objects and tell us what changed. It *is* a non-zero cost, but it ends up being insignificant in our use case because there are a number of tricks Git can and does employ to prune the search space (there you go, burning that haystack): specifically, Git can do things like shortcircuit traversal any time it encounters identical subtrees, and it can do *that* very fast indeed thanks to the use of SHA-1 digests to identify objects. If tree `a/b` has the same digest in two revisions then we know we need not recurse into it: no matter how large or deep it is, we know that the entire thing is the same in both revs just by looking at the hash. We could try implementing similar tricks in our user-land code, but the truth is that delegating to Git's highly optimized C implementation here is going to be as good as it gets and we can consider it effectively free for the purposes of evaluating our algorithm.

Again, we'll be using `--index-filter` for speed, and again we'll rely on access to the last-rewritten commit (seeing as we need to perform a bulk copy of it as cheaply as possible, then apply only our modifications on top of it, we need to know *what* to copy). The key trick here is making use of the `map` function that is available in the scope of the script text that `git-filter-branch` will `eval` each time it visits a commit. Unlike our first `--tree-filter`-based attempt which was as easily invoked as this:

```shell
git filter-branch \
  --tree-filter ~/bin/wiki-to-markdown-filter \
  HEAD
```

With the second and third `--index-filter`-based strategies our invocation is going to look like this:

```shell
git filter-branch --index-filter \
  'PREV=$(map $(git rev-parse -q --verify $GIT_COMMIT^)); ~/bin/wiki-to-markdown-filter $PREV' \
  HEAD

# Or, more naturally written without explicit $PREV:
git filter-branch --index-filter \
  '~/bin/wiki-to-markdown-filter $(map $(git rev-parse -q --verify $GIT_COMMIT^))' \
  HEAD
```

Our goal here is to calculate the value for this `PREV` variable: the hash of the last-rewritten commit. `$GIT_COMMIT` is the commit that's currently being rewritten and `$GIT_COMMIT^` is its parent (we can use `^` here with impunity because the `content` branch has no multi-parent — ie. merge — commits). If there is no parent, `git rev-parse -q --verify` will just return an empty string, and our filter script — which will be performing the same check — won't bother with looking at that `$PREV` argument.

The `map` function is the secret sauce here. It takes that parent commit hash and, if the parent was rewritten, gives us the rewritten hash, which is exactly what we want. If it was not rewritten, it gives us the hash back as-is. Because commit hashes are invalidated by any change, changing the parent commit's hash by rewriting it will cause all of its descendent commits to by rewritten as well. This means that `map` will return the parent hash as-is only at the beginning of the filter run; as soon as we rewrite one commit, `map` will start returning rewritten parent commit hashes from there on.

From this point, it's easy. With `$PREV`, we can use `git reset` to set the index to look just like the last-rewritten commit looked like. We then use `git diff-tree` to get the changed files, and we apply our transformation to anything that needs it, and let anything else that changed but which does not need transformation go through unmodified. We are effectively doing something like a rebase with an additional, optional, automated transform along the way.

Just to be sure I wasn't going to be bitten by edge cases, I used `git whatchanged --diff-filter=RD` to find all commits that moved or deleted files. It turned out that there were only a few, [noted in the comments](https://github.com/wincent/masochist/blob/605eee357f410c842f58cc1774fb957172ad122a/scripts/wiki-to-markdown-filter#L152-L172), and that [some simple logic](https://github.com/wincent/masochist/blob/605eee357f410c842f58cc1774fb957172ad122a/scripts/wiki-to-markdown-filter#L173-L200) would handle all cases. Perhaps the only remaining "gotcha" here is that `git diff-tree` doesn't report similarity statuses (eg. `R91`) like `git whatchanged` does, but rather shows them as paired `A` (add) and `D` (delete) operations. In the end, it all comes out in the wash.

### The verdict

Version 3 gets us down to about 1 hour to rewrite the whole history. You can see [the results on the current `content` branch](https://github.com/wincent/masochist/commits/605eee357f410c842f58cc1774fb957172ad122a) (although if I ever rewrite the history again — something which is likely — you can expect that link to be broken; [this](https://github.com/wincent/masochist/commits/content) is the evergreen link to the branch as it currently exists). I expect the next big `filter-branch` rewrite will be when I go back and [scrape my oldest blog posts](https://github.com/wincent/masochist/issues/82) — which currently only exist as mirrored PHP/HTML files — and turn those into Markdown too, at which point I'll want to "prepend" them to my `content` branch, invalidating all the existing commits in the process.

# Concluding remarks: in which our author revels in the joy of programming

So, we got a projected 42-day runtime down to an hour using nothing but simple techniques and reasoning. There's no genius in this, but damn is it rewarding. Not bad for a Friday night's work. This is a very strong reminder of why I enjoy programming in the first place: the ability to transport the intractable into the realm of the practical, and seemingly effortlessly. It doesn't always work out so easily — and I'm definitely spoilt here by the power and flexibility of the Git tools, which allowed me to solve the same problem in three significantly different ways — but when it does, it is magic.

And now, the icing on the cake: I get to rip out the "wikiserve" microservice. Deleting code is *almost* as much fun as making code run faster.

<small><em>Discuss: [Facebook](https://www.facebook.com/glh/posts/10154279236886307) - [Twitter](https://twitter.com/wincent/status/863640786381922305)</em></small>
