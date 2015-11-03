# What

This repo contains the source code and content for my website at [wincent.com]().

Content is authored in plain-text-friendly markup formats like [Markdown]() and
served using a dynamic stack (described below). New code can be deployed and
content added or updated via `git push`.

## Stack

- [React](): Declarative, component-oriented view layer.
- [Relay](): Declarative data-management.
- [GraphQL](): Hierarchical data querying language, type system and server.
- [Git](): Main content storage.
- [Redis](): Indexing and caching.
- [memcached](): Caching.
- [MySQL](): Ancillary storage.

Supporting tools and technologies:

- [Markdown](): Preferred content markup.
- [Vim](): Content editing.
- [Marked 2](): Local content previewing.

## Questions

### Why not use a static site generator?

A static site generator would very much be the right tool for this job, however, building the site on a custom [React]()/[Relay]()/[GraphQL]() stack was much more fun, so I did that instead.

### Why the name "Masochist"?

Please see the introductory blog post, "[Introducing Masochist](https://github.com/wincent/masochist/blob/content/content/blog/masochist.md)".

[GraphQL]: http://graphql.org/
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[Marked 2]: http://marked2app.com/
[memcached]: http://memcached.org/
[MySQL]: http://mysql.com/
[React]: http://facebook.github.io/react/
[Redis]: http://redis.io/
[Relay]: http://facebook.github.io/relay/
[Vim]: https://github.com/vim/vim
[wincent.com]: https://wincent.com
