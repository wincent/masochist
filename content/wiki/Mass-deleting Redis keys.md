---
tags: redis wiki
---

# Example

```shell
redis-cli --scan --pattern "masochist:[12345]:*" | xargs -L 100 redis-cli DEL
```

For more context, see [this issue](https://github.com/wincent/masochist/issues/115).

For alternative means, see [this Stack Overflow question](http://stackoverflow.com/questions/4006324/how-to-atomically-delete-keys-matching-a-pattern-using-redis).

You can delete *everything* easily with ([via Stack Overflow](https://stackoverflow.com/a/6851929/2103996)):

```shell
redis-cli flushall
```
