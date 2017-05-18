---
tags: s3 arq wiki
cache_breaker: 1
---

[Arq](/wiki/Arq) is a great little [Mac OS X](/wiki/Mac_OS_X) application for backing up your personal data to [Amazon](/wiki/Amazon) [S3](/wiki/S3). It provides transparent, automatic, incremental, encrypted backup to S3 using a solid application with fine control over inclusion/exclusion criteria and nice little bonuses like S3 budget and network throughput preferences.

The developer definitely seems to have the right idea: he "stole" the design for a content-addressable storage system from [Git](/wiki/Git) and provides an [open source](/wiki/open_source) restore tool called `arq_restore` to assuage any doubts you might have about vendor lock-in (the [Arq S3 data format](/wiki/Arq_S3_data_format) is publicly documented).

# Links

-   Official site: <http://www.haystacksoftware.com/arq/index.php>
-   [Open source](/wiki/Open_source) restore tool: <http://sreitshamer.github.com/arq_restore/>
