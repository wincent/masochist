# Quickstart

## Configuration

```
cp config.example.json config.json
```

## Webpack-based hot-loading workflow

```
npm install
npm run update-schema # same as `babel-node src/bin/updateSchema.js`
npm run update-indices # whenever content changes
npm run start # same as `babel-node src/server/main.js`
```

## Running in production-like environment

```
npm install
gulp build # builds files under `dist/`
npm run start-prod # same as `NODE_ENV=production node dist/server/main.js`
```

## Running in production

```
export NODE_ENV=production
npm install
gulp build
node dist/bin/updateIndices.js # whenever content changes
node dist/server/main.js
```

## Deployment cheatsheet

You could do this in any number of ways but the way I'm doing it is using two
local repositories as follows:

### Local "masochist" repository

#### Structure

* `master` branch checked out.
* `origin` remote pointing at git.wincent.com.
* `github` remote pointing at [GitHub](https://github.com/wincent/masochist).
* `masochist` remote set up to do Heroku-style deploy-on-push, pointing at an Amazon EC2 instance configured using Ansible.
* `wikiserve` remote also set up to do Heroku-style deploy-on-push.

#### Commands

```
$ git push masochist master # Deploy app (after initial provisioning).
$ git push masochist # Subsequent deployments.
$ git push wikiserve master # Deploy microservice (after initial provisioning).
$ git push wikiserve # Subsequent deployments.
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
