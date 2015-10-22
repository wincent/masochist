# Quickstart

```
bundle install --path vendor/bundle
bundle exec unicorn
curl \
  -H 'Content-Type: application/json' \
  -H 'X-Wikitext-Corpus-Digest: 1a859b390e17890e933c37a84568ee677fa1c7cb' \
  -X POST -d '[{"wikitext": "= Hello, world! =", "baseHeadingLevel": 3}]' \
  http://localhost:8080/wikitext
```

The optional `X-Wikitext-Corpus-Digest` header can be used do pass a SHA-1
digest identifing the version of the wikitext corpus for which the markup is
being generated. When passed, the 40-character digest is used to check Redis for
 a match with the "masochist:last-indexed-hash" value, and if there is a match,
 the "masochist:wiki-index" sorted set is pulled. This is used as the basis for
 a "known links" set.
