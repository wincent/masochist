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
being generated. When passed, the 40-character digest is appended to an
`X-Wikitext-Corpus-Targets:` prefix to produce a memcache key that can be used
to look up the corresponding "known links" set. (Note that Redis would probably
be better suited for this, but I already have `memcached` up and running in my
infrastructure, so I am going with that.)
