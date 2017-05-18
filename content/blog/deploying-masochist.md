---
title: Deploying Masochist
tags: masochist site blog
fb: https://www.facebook.com/glh/posts/10153087065236307
reddit: https://www.reddit.com/r/git/comments/3xa91u/deploying_via_git_push/
twitter: https://twitter.com/wincent/status/677636911800938496
---

A couple posts back, I [introduced Masochist](/blog/masochist), the software that powers this website. Now I want to talk about some novelties in how it's deployed.

# The old way

The site was a [Rails] app running on an [EC2] instance. There were a few moving pieces &mdash;  [memcached], [nginx], [Git] repo mirrors, [Monit] monitoring, the app itself etc &mdash; so the provisioning of the instance was powered by [Ansible].

Most of the data was stored in a MySQL database, some of it was on the filesystem (uploaded images, for example), and some of it came from a Git repo. As such, there were multiple sources of truth, and at least a couple of them resided on the instance itself. This in turn meant that the instance was stateful, that state was important, and regular backups were critical.

Deployment was originally via [Capistrano], and later by a simple (and much more robust) shell script.

# The new way

The source of truth is now a Git repo, and both content and source are publicly visible. This means we can go fully stateless on the EC2 instance because we can spin up a new one whenever we need, backups are not needed, and the data is safely distributed across multiple Git repos.

Inspired by Heroku, there is no deploy script; instead, you publish via `git push`. The work of setting up and running the new version of this application is handled via a `post-receive` hook (essentially still a shell script, but now running on the server instead of the client).

As the content now lives in Git, publishing that is also done via `git push`.

# Details, details, show me the details!

## Provisioning

The server itself is set up using [Ansible]. Here's a sample "role" that shows how [memcached] gets set up:

```
---
- name: memcached | create memcached group
  group: gid={{ user_ids.memcached }} name=memcached system=yes
  become: yes

- name: memcached | create memcached user
  user:
    comment='Distributed memory object caching system'
    group=memcached
    home=/var/run/memcached
    name=memcached
    shell=/sbin/nologin
    system=yes
    uid={{ user_ids.memcached }}
  become: yes

- name: memcached | ensure package installed
  yum: name=memcached state=present
  become: yes

- name: memcached | configure memcached
  template: dest=/etc/sysconfig/memcached src=memcached-sysconfig.j2
  become: yes
  notify: memcached | restart

- name: memcached | set up monit configuration
  template: dest=/etc/monit.d/memcached src=memcached-monit.j2
  become: yes
  notify: monit | restart

- name: memcached | ensure enabled and running
  service: name=memcached enabled=yes state=started
  become: yes
```

You can think of this as a declarative syntax for how the server should look, although like most declarative specifications, in practice it maps to a set of imperative steps (which execute in the order shown in the role). The end result of this declarative/imperative hybrid is an idempotent task that you can run to provision a brand new server, or bring an existing server back into line with the desired configuration: only the steps that actually need to be run end up performing any kind of mutative action on the server.

In this way we set up memcached, [Redis], [nginx], and related supporting tooling like [Monit]. We also set up the users, groups and directory structures from where we'll be running the applications (one of these being the main "Masochist" [Node.js] app, and another being the "wikiserve" microservice which is a small [Ruby] app that translates wikitext markup into HTML).

## Deploying

One curiosity of storing our content in Git is that it's not a real database and we need some secondary index structures in order to make some kinds of lookup sufficiently fast (for example, paginating through lists, or finding content based on tags). As such, we're augmenting the Git storage with an indexing layer stored in Redis.

You can think of this Git-plus-Redis layer as reinventing the database, and that's exactly what is. Like all of the most fun engineering projects, this one is a terrible idea, and I thoroughly enjoyed building it. To get a sense of the hacking involved, [see the `updateIndices.js` script](https://github.com/wincent/masochist/blob/466d4751da4ea427a87e8f6560763d553a4cde66/app/src/bin/updateIndices.js) (at the time of writing, 378 lines of fast-and-loose JavaScript).

When we push new content, our `post-receive` hook, conveniently installed for us by Ansible, runs. It looks something like this:

```
#!/usr/bin/env ruby
#
# post-receive hook to update Masochist indices when new content is published.

def cd(dir)
  puts "$ cd #{dir}"
  Dir.chdir(dir)
end

def run(*args)
  puts "$ #{args.join(' ')}"
  system(*args)
  status = $?.exitstatus
  if !$?.exited?
    puts 'error: process failed to exit'
    exit 1
  elsif !status.zero?
    puts "error: aborting due to non-zero exit status (#{status})"
    exit status
  end
end

while line = gets
  old_rev, new_rev, ref_name = line.split
  next unless ref_name == 'refs/heads/content'

  # Allow access to `node`.
  ENV['PATH'] = ENV['HOME'] + '/bin:' + ENV['PATH']
  ENV['NODE_ENV'] = 'production'

  # Avoid chicken and egg problem: app can only be deployed if content has
  # been deployed, but content can only be indexed if app has been deployed.
  if File.exist?('/var/masochist/deploy/current')
    # Note that even though we run the current indexer from the code repo, it's
    # the content repo that gets indexed due to configuration on disk.
    cd '/var/masochist/deploy/current/app'
    run 'node', 'dist/bin/updateIndices.js'
  end

  # Content branch images get merged into a shared location (in the event of a
  # collision, last-deployed revision wins by overwriting).
  run 'sh', '-c',
    "env -i git -C /var/masochist/content archive --prefix=images/ #{new_rev}:content/images | tar xf - -C /var/masochist/shared/system/"
end
```

In short, this runs our `updateIndices.js` script for us and uses `git` to copy the latest versions of the static images from the content branch into the actual filesystem, where they can be served.

Similar `post-receive` hooks exist for the Masochist app itself (clones the new revision into a staging area, runs `npm install`, `gulp build`, and if all went well switches some symlinks to point at the new version of the app and restarts it) and the wikiserve microservice (runs `bundle install`, sets up symlinks and restarts).

There is some additional complexity in there which I am eliding here (such as using digests and caching to avoid the expense of a full `npm install`, and pruning away old deploy directories), but it all works pretty well. Deploying a new version of Masochist takes well under a minute, even on a gutless t2.micro [EC2] instance, and content or wikiserve updates take mere seconds.

## Repo layout

Even though the code for the two apps resides in [a single repo](https://github.com/wincent/masochist), along with all the content (albeit on [a separate branch](https://github.com/wincent/masochist/tree/content)), with a little bit of organization I've been able to produce quite a simple workflow.

On the remote machine, Ansible sets up two users so that the Node.js and Ruby apps can run as separate users, out of separate directories. There is a third repo set up as well that is dedicated to content alone. In this way, I have three different Git "remotes" that I can push to and thus have granular control over what gets pushed and when:

- Push to the "masochist" remote to deploy a new version of the app (ie. `git push masochist`).
- Push to the "wikiserve" remote to deploy a new version of the wikiserve microservice (ie. `git push wikiserve`).
- Push to the "origin" remote (ie. `git push origin`, or simply `git push`) to do a code-only push without a deploy; this sends the code up to git.wincent.com, and from there it gets mirrored to GitHub, GitLab and Bitbucket automatically.

A nice perk of this is that the `--decorate` functionality of `git-log` can show me at a glance what I have deployed and to where:

```
* 466d475 (HEAD -> master, origin/master, masochist/master, github/master) Fix unwanted page reloads on some transitions (5 hours ago) <Greg Hurrell>
* 2e1fdbd (wikiserve/master) Add shared/common.json (17 hours ago) <Greg Hurrell>
* a299c81 Freshen up a comment (17 hours ago) <Greg Hurrell>
```

For convenience, I have a separate copy of the repo on my local machine, with the "content" branch checked out, that I use for editing content. Publishing this is a simple `git push` (shorthand for `git push content`). Here again I can choose to do a Git-only push to distribute the content upstream to GitHub and elsewhere (without actually making it go live on wincent.com yet) by doing `git push origin`. From there it will be mirrored onwards, or I can do a `git push github`, `git push gitlab` or `git push bitbucket` (if I am too impatient for the hourly mirror to kick in).

Overall I am very happy so far with this set up, and am tweaking my Vim-based editing set-up to give me the kinds of niceties and shortcuts that come in handy for content editing. This will serve me well until I embark on my next crazy adventure, which will be [making a desktop application](https://github.com/wincent/masochist/issues/35) to provide myself with a slick local editing experience.

Sounds like a terrible idea? Sign me up right away!

<small><em>Discuss: [Facebook](https://www.facebook.com/glh/posts/10153087065236307) - [Twitter](https://twitter.com/wincent/status/677636911800938496) - [Reddit](https://www.reddit.com/r/git/comments/3xa91u/deploying_via_git_push/)</em></small>

[Ansible]: /wiki/Ansible
[Capistrano]: /wiki/Capistrano
[EC2]: /wiki/EC2
[Git]: /wiki/Git
[Monit]: /wiki/Monit
[Node.js]: /wiki/Node.js
[Rails]: /wiki/Rails
[Redis]: /wiki/Redis
[Ruby]: /wiki/Ruby
[memcached]: /wiki/memcached
[nginx]: /wiki/nginx
