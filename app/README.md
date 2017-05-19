# Quickstart

## Webpack-based hot-loading workflow

```
git clone https://github.com/wincent/masochist.git
cd masochist/app
npm install
npm run update-schema
npm run update-indices # Whenever content changes.
npm run start
```

## Running in production-like environment

```
npm run build # builds files under `dist/`
npm run start-prod
```

## Running in production

```
export NODE_ENV=production
npm install
gulp build
node dist/bin/updateIndices.js # Whenever content changes.
node dist/server/main.js
```

## Configuration

In `__DEV__`, Masochist will look for content in the current repo (ie. ".").

In production, it expects to find a content repo at "/var/masochist/content".

In both cases, you can override this with `npm config set`. For example, in my local development environment, I have the Masochist Git repo checked out in one folder, and a second copy of it with the "content" branch checked out alongside it at "../masochist-pages" (see below for more details on this set-up). I can override the `__DEV__` default of "." with:

```
npm config set masochist:content-repo '../masochist-pages'
```

## Deployment cheatsheet

You could do this in any number of ways but the way I'm doing it is using two local repositories as follows:

### Local "masochist" repository

#### Structure

* `master` branch checked out.
* `origin` remote pointing at git.wincent.com.
* `github` remote pointing at [GitHub](https://github.com/wincent/masochist).
* `masochist` remote set up to do Heroku-style deploy-on-push, pointing at an Amazon EC2 instance configured using Ansible.

#### Commands

```
$ git push masochist master # Deploy app (after initial provisioning).
$ git push masochist # Subsequent deployments.
$ git push origin # Propagate code, but no deploy.
$ git push # Shorthand for `git push origin`.
$ git push github # If you can't be bothered waiting for it to auto-replicate.
```

### Local "masochist-pages" repository

#### Structure

* `content` branch checked out.
* `content` remote configured to do Heroku-style push-to-publish.
* `origin` remote pointing at git.wincent.com.
* `github` remote pointing at [GitHub](https://github.com/wincent/masochist).

#### Commands

```
$ git push content content # First push after initial provisioning.
$ git push content # Subsequent pushes.
$ git config branch.content.merge refs/heads/content # For laziness.
$ git push # Simple.
```

#### Rollback to a prior rev `$HASH`

```
$ git push masochist +$HASH:master
```

Or just switch symlinks and `sudo monit restart masochist`.

#### Force a deploy without actual code changes

```
$ git commit -m Deploy --allow-empty
$ git push masochist
```
