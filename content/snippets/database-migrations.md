---
title: Database migrations
tags: snippets
---

I've just discovered that one of my database tables in a custom system really should have included a "created" column containing a datetime value (it already contains a "ts" column containing a "last updated" timestamp value). Wonder how painful it is going to be to transition... In hindsight, it was braindead of me not to include this column from the beginning, but I was young, innocent, reckless, foolhardy... Hope this won't be too painful.
