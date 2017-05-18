---
tags: wiki
---

[Server load](/wiki/Server_load) or simply [load](/wiki/load) is a measure of resource usage commonly used to indicate the intensity of demands upon an [Internet](/wiki/Internet) server. The number is an indication of the number of waiting processes waiting to get a slice of the processor time at the moment the load measurement was taken. A load average close to 0.0 indicates that the machine is only very lightly loaded and (almost) no processes have to wait when they want a slice of processor time. Ideally load averages should be kept down near 0, 1 or 2. As the load average gets higher system responsiveness is reduced. Load averages over 10 are very high, and averages over 20 are extremely high.

[Load](/wiki/Load) can also be measured on desktop machines running operating systems such as [Mac OS X](/wiki/Mac_OS_X). For example, open up a [Terminal](/wiki/Terminal) window and use the `uptime` tool to view the load averages over the last minute, 5 minutes and 15 minutes:

    $ uptime
    18:05  up  5:49, 4 users, load averages: 0,34 0,40 0,42

In this example, the load average over the last minute was 0.34 (appearing as `0,34` in this case because in the Spanish locale the comma is used as a decimal separator), load average during the last five minutes was 0.40, and load average over the last fifteen minutes was 0.42.

For comparison, here is some output from a server running [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux):

    11:10:41  up 233 days,  2:00,  2 users,  load average: 0.03, 0.06, 0.59

Load averages can also be monitored in realtime using `top` or `w` (in [Mac OS X](/wiki/Mac_OS_X) as well) or `tload` (only in [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux)).

Slightly more sophisticated load average reports can be obtained using a command like the following:

    sar -Hqt         | \
     cut -f3,6 -d';' | \
     tr  ' ;' ',,'   | \
     cut -f2,3 -d ','|
     mail -s "Today's load levels" user@example.com

This does the following:

-   Get a list of load averages for the day at 10 minute intervals
-   Cut all but the 3rd and 6th columns of the input (columns delimited by a semicolon)
-   Replace spaces and semicolons with commas (useful for importing into a database or spreadsheet)
-   Further cut the input, leaving only the 2nd and 3rd columns (now delimited by a comma)
-   Mail the output to the specified email address
