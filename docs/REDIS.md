# Redis cheatsheet

All the keys include a prefix (`masochist`) and a cache breaker (in this case `6`) followed by a name. Sample interactions shown below show Redis commands executed with `redis-cli` (commands are prefixed with a `>` prompt, and the textual responses follow).

## String values

Queried before indexing, to determine which revisions to look at:

```
> GET masochist:6:last-indexed-hash
"c6704713ba0189a831eb012d87cede30920a2625"
```

Updated after indexing:

```
> SET masochist:6:last-indexed-hash c6704713ba0189a831eb012d87cede30920a2625
```

## [Sorted sets](https://redis.io/docs/data-types/sorted-sets/)

These are sets that contain strings, ordered by score. We use then in Masochist for per-object-type indices:

- `masochist:6:blog-index`: score is `createdAt` timestamp.
- `masochist:6:snippets-index`: score is `createdAt` timestamp.
- `masochist:6:tags-index`: score is count of times tag is used.
- `masochist:6:wiki-index`: score is `updatedAt` timestamp.
- `masochist:6:pages-index`: score is `updatedAt`, but that choice is arbitrary as there is no index view, yet.

And also to record which objects should be associated with each tag. For example, `masochist:6:tag:vim` is a Redis set recording which objects have the "vim" tag.

#### Getting all items for a tag (in reverse order)

```
> ZRANGE masochist:6:tag:vim 0 -1 REV
  1) "wiki:Vim command line history"
  2) "blog:syntax-coloring-shoot-out"
  3) "blog:running-rspec-specs-from-inside-vim"
  ...
```

Note that the scores here are the `updatedAt` timestamp of the tagged object, which is somewhat arbitrary (it is the time when the _object_ was updated, not when the tag was added to the object). I'm including a few more lines in the sample output here because the first 3 objects all share the same timestamp because they were updated in [the same commit](https://github.com/wincent/masochist/commit/af775814ef1578047e828b1881099f84a6bfabd8):

```
> ZRANGE masochist:6:tag:vim 0 -1 REV WITHSCORES
 1) "wiki:Vim command line history"
 2) "1709678334000"
 3) "blog:syntax-coloring-shoot-out"
 4) "1709678334000"
 5) "blog:running-rspec-specs-from-inside-vim"
 6) "1709678334000"
 7) "blog:how-i-vim"
 8) "1709678334000"
 9) "wiki:MacVim fullscreen mode"
10) "1709486726000"
  ...
```

#### Adding a tag to an item

When a new object is added with a tag, or a tag is added to an existing object, we increment the count of tagged objects for the tag:

```
> ZINCRBY masochist:6:tags-index 1 $tag
```

and record that the object has the tag:

```
> ZADD masochist:6:tag:$tag wiki:$file $updatedAt
```

Object names have one of these forms:

- `blog:$file`: Where `$file` is the post title that appears in the URL, with no extension (eg. `blog:running-rspec-specs-from-inside-vim`).
- `pages:$file`: Where `$file` is the page name that appears in the URL, with no extension (eg. `pages:about`).
- `wiki:$file`: Where `$file` is the article title, with spaces, and no extension (eg. `wiki:Vim command line history`).
- `snippets:$file`: Where `$file` is the snippet filename with no extension (eg. `snippets:856`, `snippets:xcode-documentation-goodness`).

`-1` is used as a fallback if no `$updatedAt` information is available.

####  Removing a tag from an item

When an object that has a tag is removed from the repo, or a tag is removed from an object, we decrement the count tagged objects for the tag:

```
> ZINCRBY masochist:6:tags-index -1 $tag
```

and remove the record that the object has the tag:

```
> ZREM masochist:6:tag:$tag wiki:$file
```

### Getting a list of objects

#### Getting first 10 tags with most-used tags first

```
> ZRANGE masochist:6:tags-index 0 9 REV WITHSCORES
 1) "snippets"
 2) "4744"
 3) "wiki"
 4) "2467"
 5) "blog"
 6) "905"
...
```

#### Getting subsequent pages of tags

```
> ZRANGE masochist:6:tags-index 20 29 REV WITHSCORES
 1) "ruby"
 2) "117"
 3) "releases"
 4) "110"
 5) "snow.leopard"
 6) "87"
...
```

#### Getting the total count of tags

```
> ZCARD masochist:6:tags-index
(integer) 625
```

#### Getting first 10 Wiki articles with most recently-updated articles first

```
> ZRANGE masochist:6:wiki-index 0 9 REV
 1) "WOHotKey"
 2) "Serving Mac OS X installation packages over HTTP using nginx and Apache"
 3) "Signing and verifying tags with Git"
...
```

#### Getting subsequent pages of articles

```
> ZRANGE masochist:6:wiki-index 10 19 REV
 1) "Freshclam error: \"Problem with internal logger\""
 2) "macOS set-up notes (October 2017)"
 3) "Writing a WikiText plug-in for MovableType"
 4) "Wincent products"
```

#### Getting the total count of articles

```
> ZCARD masochist:6:wiki-index # how many articles are there overall?
(integer) 2466
```

#### Updating the article index

Using `createdAt`/`updatedAt` timestamps (eg. "1709678334").

When a file is added:

```
> ZADD masochist:6:wiki-index $createdAt $file
```

When a file is deleted:

```
> ZREM masochist:6:wiki-index $file
```

When a file is modified:

```
> ZADD masochist:6:wiki-index $updatedAt $file
```

Removing a tag from the index once the last reference to the tag is removed:

```
> ZREMRANGEBYSCORE masochist:6:tags-index -inf 0
```

(ie. remove all elements from the index with scores — that is, counts — between negative infinity and 0.)

## General, useful Redis commands for debugging

### Showing the type of a value given a key

```
> TYPE masochist:6:tags-index
```

### Listing all tags

```
> KEYS *
  1) "masochist:6:tag:cheetah"
  2) "masochist:6:tag:development"
  3) "masochist:6:tag:thawte"
  ...
626) "masochist:6:tag:dvd"
627) "masochist:6:tag:lbdb"
628) "masochist:6:tag:isolator"
```
