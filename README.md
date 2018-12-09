# What

This repo contains the source code and content for my website at [wincent.com].

Content is authored in plain-text-friendly markup formats like [Markdown] and
served using a dynamic stack (described below). New code can be deployed and
content added or updated via `git push`.

## Stack

- [React]: Declarative, component-oriented view layer.
- [Relay]: Declarative data-management.
- [GraphQL]: Hierarchical data querying language, type system and server.
- [Git]: Main content storage.
- [Redis]: Indexing and caching.
- [memcached]: Ephemeral caching.

Supporting tools and technologies:

- [Markdown]: Preferred content markup.
- [Vim]: Content editing.
- [Marked 2]: Local content previewing.

## Questions

### Why not use a static site generator?

A static site generator would very much be the right tool for this job, however, building the site on a custom [React]/[Relay]/[GraphQL] stack was much more fun, so I did that instead.

### Why the name "Masochist"?

Please see the introductory blog post, "[Introducing Masochist](https://github.com/wincent/masochist/blob/content/content/blog/masochist.md)".

# Development

## Quickstart

**Note:** In the following, `npm` can be substituted for `yarn` if desired.

### Webpack-based hot-loading workflow

```
git clone https://github.com/wincent/masochist.git
cd masochist
yarn # Or `npm install`.
yarn update-schema # Or `npm run update-schema`.
yarn update-indices # Whenever content changes.
yarn start # Or `npm run start`.
```

### Running in production-like environment

```
yarn run build # Builds files under `dist/`.
yarn start-prod # Or `npm run start-prod`.
```

### Running in production

```
export NODE_ENV=production
yarn # Or `npm install`.
gulp build
node dist/bin/updateIndices.js # Whenever content changes.
node dist/server/main.js
```

### Configuration

In `__DEV__`, Masochist will look for content in the current repo (ie. ".").

In production, it expects to find a content repo at "/var/masochist/content".

In `__DEV__`, you can override this with `npm config set`. For example, in my local development environment, I have the Masochist Git repo checked out in one folder, and a second copy of it with the "content" branch checked out within it (using `git-worktree`) at "./content" (see below for more details on this set-up). I can override the `__DEV__` default of "." with:

```
# Use npm, not yarn, for this:
npm config set masochist:content-repo './content'
```

### Deployment cheatsheet

You could do this in any number of ways but the way I'm doing it is using two local repositories as follows:

#### Local "masochist" repository

##### Structure

* `master` branch checked out.
* `origin` remote pointing at git.wincent.com.
* `github` remote pointing at [GitHub](https://github.com/wincent/masochist).
* `masochist` remote set up to do Heroku-style deploy-on-push, pointing at an Amazon EC2 instance configured using Ansible.
* `content` remote set up to do a Heroku-style update-on-push for content changes, pointing at the corresponding repository on EC2.

##### Commands

```
$ git push masochist master # Deploy app (after initial provisioning).
$ git push masochist # Subsequent deployments.
$ git push origin # Propagate code, but no deploy.
$ git push # Shorthand for `git push origin`.
$ git push github # If you can't be bothered waiting for it to auto-replicate.
```

#### Local "content" worktree

##### Structure

* `content` branch checked out.
* `content` remote configured to do Heroku-style push-to-publish.
* `origin` remote pointing at git.wincent.com.
* `github` remote pointing at [GitHub](https://github.com/wincent/masochist).

##### Commands

```
$ git push content content # First push after initial provisioning.
$ git push content # Subsequent pushes.
$ git config branch.content.merge refs/heads/content # For laziness.
$ git push # Simple.
```

##### Rollback to a prior rev `$HASH`

```
$ git push masochist +$HASH:master
```

Or just switch symlinks and `sudo monit restart masochist`.

#### Force a deploy without actual code changes

```
$ git commit -m Deploy --allow-empty
$ git push masochist
```

[Git]: https://git-scm.com/
[GraphQL]: http://graphql.org/
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[Marked 2]: http://marked2app.com/
[memcached]: http://memcached.org/
[React]: http://facebook.github.io/react/
[Redis]: http://redis.io/
[Relay]: http://facebook.github.io/relay/
[Vim]: https://github.com/vim/vim
[wincent.com]: https://wincent.com
