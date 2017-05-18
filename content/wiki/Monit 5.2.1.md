---
tags: monit wiki
---

From the official release announcement:

    Hi, again everyone!

    We have been banging our head against the wall all day. Despite severe headache we have managed to create a bug fix version of Monit 5.2. This 5.2.1 release fixes a problem with HTTP and URL protocol tests that always failed if a specific request URL was used; For instance this test would fail:

     check host mmonit.com  with address mmonit.com
        if failed port 80 with protocol http request /index.html then alert

    Please download the new bug fix release from: http://mmonit.com/monit/download/ and let us pretend this never happened. We apologize and from now on, we promise to create a big monitrc file that we will use to test every single statement in Monit before we do a release.


    Best regards from the Monit team
