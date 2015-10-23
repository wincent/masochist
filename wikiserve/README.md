# Quickstart

```
bundle install --path vendor/bundle
bundle exec unicorn
curl \
  -H 'Content-Type: application/json' \
  -X POST -d '[{"wikitext": "= Hello, world! =", "baseHeadingLevel": 3}]' \
  http://localhost:8080/wikitext
```

# "Redlink" support via Redis dependency

The "masochist:wiki-index" sorted set is pulled from Redis and used as the basis
for a "known links" set, which is used to apply a "redlink" class to
unrecognized target links.
