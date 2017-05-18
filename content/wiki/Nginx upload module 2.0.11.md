---
tags: nginx wiki
---

From the official announcement published to the [nginx](/wiki/nginx) mailing list:

    Greetings!

    Changes in version 2.0.11:
    * Fixed bug: segfault in request body reception code (thanks to Andrew Filonov);
    * Fixed bug: dummy field did not appear whenever form contained only non-file fields;
    * Added feature: variable $upload_file_number which indicates ordinal number of file in request body
    * Change: compatibility with nginx API 0.8.25 and greater.

    NOTE: in changelogs of previous version read occurrences of "compatibility with nginx API 0.x.x" as "compatibility with nginx API 0.x.x and greater".

    Please see this page for details:
    http://www.grid.net.ru/nginx/upload.en.html
