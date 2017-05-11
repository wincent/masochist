# Quickstart

```
bundle install --path vendor/bundle
bundle exec unicorn
curl \
  -H 'Content-Type: application/json' \
  -X POST -d '[{"wikitext": "= Hello, world! =", "baseHeadingLevel": 3}]' \
  http://localhost:8080/wikitext
```

# Deployment

Make a remote.

Note that on very first push after provisioning, may have to do:

```
git push wikiserve $COMMIT:refs/heads/master
```

If you are content to just push master:

```
git push wikiserve master
```

# "Redlink" support via Redis dependency

The "masochist:wiki-index" sorted set is pulled from Redis and used as the basis
for a "known links" set, which is used to apply a "redlink" class to
unrecognized target links.
