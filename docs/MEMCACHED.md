# memcached cheatsheet

## Keys

memcached supports keys [up to 250 bytes long](https://github.com/memcached/memcached/blob/1b3b8555734f9b7b8d979924c7f8d6cf82194ba8/memcached.h#L70). Keys are built from a cache-breaker (currently `2`) plus a prefix based on the file's subdirectory, the file's name, and the current `HEAD` commit on the `content` branch:

- Base-64 encoding of: `Post`, `Page`, `Snippet`, or `Article` type, followed by a colon (`:`), followed by the file name without an extension.
- Colon (`:`) separator.
- Head commit hash.
- Colon (`:`) separator.
- `content` suffix
- Cache-breaker (currently `2` in production, and "randomized"[^randomized] on every start in development; in the sample below, generated in development, it's `ltipp4yu`)

[^randomized]: Not really randomized, but rather a Base-36 encoding of the current timestamp, created with `Date.now().toString(36)`. So, the `ltipp4yu` cache-breaker is the result of starting with `2024-03-08T13:48:08.166Z`, which is a timestamp of `1709905688166` (milliseconds since the UNIX epoch), and Base-36 encoding it.

Here is an example for generating the cache key for the snippet with ID `xcode-2.1` and `content` branch `HEAD` value of `d65c83b49bfe586889ad16899b361fa29b11e329`:

```js
prefix = Buffer.from('Snippet:xcode-2.1', 'utf8').toString('base64');
```

That gives us a `prefix` of `U25pcHBldDp4Y29kZS0yLjE=`. And:

```js
key = prefix + ':' + 'd65c83b49bfe586889ad16899b361fa29b11e329' + ':content' +
  'ltipp4yu';
```

gives us the key, `U25pcHBldDp4Y29kZS0yLjE=:d65c83b49bfe586889ad16899b361fa29b11e329:contentltipp4yu`, which as seen in the examples below, we can use to look up the content using the `get` command.

## Getting all keys interactively

Connect to the local instance:

```
telnet 127.0.0.1 11211
```

Obtain the key dump:

```
lru_crawler metadump all
```

## Getting all keys non-interactively

```
echo lru_crawler metadump all | nc localhost 11211 > all-keys.txt
```

# Getting all cached versions of an object

Given knowledge of the key structure, you can take a common prefix like `U25pcHBldDp4Y29kZS0yLjE=` (`Snippet:xcode-2.1`), URL encode it (ie. to `U25pcHBldDp4Y29kZS0yLjE%3D`), and use that to obtain a list of all cached versions of a specific object. For example:

```
echo lru_crawler metadump all | nc localhost 11211 | grep U25pcHBldDp4Y29kZS0yLjE%3D
```

Produces:

```
key=U25pcHBldDp4Y29kZS0yLjE%3D%3A614e6c960fd8b114b1d60c550d663c354311aa5d%3Acontentltipp4yu exp=-1 la=1709905970 cas=33560 fetch=no cls=8 size=402
key=U25pcHBldDp4Y29kZS0yLjE%3D%3A614e6c960fd8b114b1d60c550d663c354311aa5d~%3Acontentltipp4yu exp=-1 la=1709905970 cas=33561 fetch=no cls=8 size=393
key=U25pcHBldDp4Y29kZS0yLjE%3D%3Ad65c83b49bfe586889ad16899b361fa29b11e329%3Acontentltipp4yu exp=-1 la=1709906056 cas=38567 fetch=yes cls=8 size=392
```

Indicating that there are versions cached for:

- `614e6c960fd8b114b1d60c550d663c354311aa5d`
- `614e6c960fd8b114b1d60c550d663c354311aa5d~`
- `d65c83b49bfe586889ad16899b361fa29b11e329`

The latter corresponds to the initial import of the snippet:

```
commit d65c83b49bfe586889ad16899b361fa29b11e329
Author: Greg Hurrell <greg@hurrell.net>
Date:   Tue Jun 7 07:13:00 2005 +0000

    Import content/snippets/xcode-2.1.md
```

And the former to an update:

```
commit 614e6c960fd8b114b1d60c550d663c354311aa5d
Author: Greg Hurrell <greg@hurrell.net>
Date:   Thu May 18 08:06:29 2017 -0700

    Tag all articles by type
```

And its parent:

```
commit db1c5449ef54228ad9365fe6c91370c765fccac5
Author: Greg Hurrell <greg@hurrell.net>
Date:   Thu May 18 08:03:10 2017 -0700

    scripts: add tag-by-type script

    Adds "wiki", "blog", "snippets" tags to all existing content.

    Yes, this is going to bump the updated at of everything in the repo. I'm
    fine with that.

    This is going to enable some compact listings for free at "/tags/blog"
    and "/tags/snippet" (we already have compact "/wiki", but "/tags/wiki"
    will work too). I already have all pages tagged and visible at
    "/tags/pages". Will also be able to leverage this to do scoped
    searching (eg. "blog posts tagged with vim" will be "/tags/blog+vim").
```

I'm not actually sure where that last rev (with the `~` suffix) came from, but it could have come from anywhere (because `loadContent()`, the function that writes to the cache on cache-miss, takes an arbitrary `commit` option. One example of this would be if an item is deleted then our `updateIndices` script can call `loadContent()` with `$commit~` argument in order to look up the tags that the item had before it got deleted.)

## Getting the value of a key

Taking an entry from the `lru_crawler` output:

```
key=U25pcHBldDp4Y29kZS0yLjE%3D%3Ad65c83b49bfe586889ad16899b361fa29b11e329%3Acontentltipp4yu exp=-1 la=1709906056 cas=38567 fetch=no cls=8 size=392
```

We find this key:

```
U25pcHBldDp4Y29kZS0yLjE%3D%3Ad65c83b49bfe586889ad16899b361fa29b11e329%3Acontentltipp4yu
```

With URL-encoding removed, the key is:

```
U25pcHBldDp4Y29kZS0yLjE=:d65c83b49bfe586889ad16899b361fa29b11e329:contentltipp4yu
```

So we can query for it with:

```
get U25pcHBldDp4Y29kZS0yLjE=:d65c83b49bfe586889ad16899b361fa29b11e329:contentltipp4yu
```

Yielding result (formatted for readability):

```json
{
  "id": "xcode-2.1",
  "body": "\nXcode 2.1 looks like a ripper update with some great features. Can't wait to start using it...\n",
  "format": "md",
  "createdAt": "2005-06-07T07:13:00.000Z",
  "updatedAt": "2017-05-18T15:06:29.000Z",
  "tags": [],
  "title": "Xcode 2.1"
}
```

## Quitting a telnet session

```
quit
```

## Thoughts for future iterations of cache key design

- Probably don't need to map directories (eg. `wiki/`) to prefixes (eg. `Article`); could just use the entire path.
- Probably should include `main` branch `HEAD` in key as well, not just `content` branch.
- Should probably throw an error when get asked to generate a key for an object that would produce an over-length key.
- Cache-breaker suffix is lacking a separator.
