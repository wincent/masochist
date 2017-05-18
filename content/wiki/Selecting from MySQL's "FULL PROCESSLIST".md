---
tags: mysql wiki
cache_breaker: 1
---

Starting with [MySQL](/wiki/MySQL) 5.1.7 you can do:

    SELECT * FROM information_schema.PROCESSLIST;

You can apply a `where` clause or any other clause legal in a `SELECT` statement.
