---
tags: nginx wiki
---

From the official announcement:

    Greetings!

    Changes in version 2.0.12:
    * Fixed bug: keepalive connection was hanging after upload has been completed;
    * Change: if request method is not POST return HTTP 405 in order to simplify configuration.

    This release fixes annoying keepalive issue and introduces a small change which allows to process non-POST request in alternative location:

    location /upload {
       upload_pass @a;

       [...]

       error_page 404  =  @non_post_request;
    }

    location @non_post_request {
       # process non-POST requests here

       [...]
    }

    Please see this page for details:
    http://www.grid.net.ru/nginx/upload.en.html
