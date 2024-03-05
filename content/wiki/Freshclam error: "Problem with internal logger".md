---
tags: email wiki
title: Freshclam error: "Problem with internal logger"
---

Confirm that there are hung [freshclam](/wiki/freshclam) processes on the system:

    ps auxww | grep fresh

Kill hung processes:

    sudo killall freshclam

Confirm that hung processes are no longer present:

    ps auxww | grep fresh

Perform a manual update:

    sudo /usr/local/bin/freshclam

Inspect the log:

    sudo less /var/log/freshclam.log

# See also

<https://typechecked.net/a/knowledge-base/archives/2006/06/freshclam_probl.php>
