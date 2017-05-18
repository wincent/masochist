---
tags: rails mysql wiki
cache_breaker: 1
---

## Manually clearing

Something like this should do the trick:

    DELETE FROM sessions WHERE updated_at < STR_TO_DATE('20.08.2008',GET_FORMAT(DATE,'EUR'));

Or making the hard-coded cut-off date a little more dynamic (deleting sessions not updated in the last 30 days):

    DELETE FROM sessions WHERE updated_at < DATE_SUB(CURDATE(), INTERVAL 30 DAY);

You can also use the [Rails](/wiki/Rails)-provided `rake db:sessions:clear` task, which essentially boils down to:

    DELETE FROM sessions;

When I first tried these techniques I found that the query took *forever* on my rather large sessions table (2.5 million rows), presumably due to lock contention with visitors to the site resulting in updates to the `sessions` table and interrupting the `DELETE` query:

    $ mysqladmin processlist -u root -p
    Enter password:
    +-----+----------+-----------+----------+---------+-------+----------+----------------------+
    | Id  | User     | Host      | db       | Command | Time  | State    | Info                 |
    +-----+----------+-----------+----------+---------+-------+----------+----------------------+
    | 446 | foo      | localhost | foo      | Query   | 26762 | updating | delete from sessions |
    | 457 | root     | localhost |          | Query   | 0     |          | show processlist     |
    +-----+----------+-----------+----------+---------+-------+----------+----------------------+

Note that at that point the query had been running for over 26 thousand seconds! I found that hitting Control-C in the [MySQL](/wiki/MySQL) console aborted the query:

    Query aborted by Ctrl+C

But the corresponding thread lingered on in the MySQL instance for a long time. For example:

    +-----+----------+-----------+----------+---------+-------+-------+----------------------+
    | Id  | User     | Host      | db       | Command | Time  | State | Info                 |
    +-----+----------+-----------+----------+---------+-------+-------+----------------------+
    | 446 | foo      | localhost | foo      | Query   | 45449 | end   | delete from sessions |
    | 470 | root     | localhost |          | Query   | 0     |       | show processlist     |
    +-----+----------+-----------+----------+---------+-------+-------+----------------------+

So I tried killing the thread:

    $ mysqladmin -u root -p kill 446
    Enter password: 
    $ mysqladmin processlist -u root -p
    Enter password: 
    +-----+----------+-----------+----------+---------+-------+-------+----------------------+
    | Id  | User     | Host      | db       | Command | Time  | State | Info                 |
    +-----+----------+-----------+----------+---------+-------+-------+----------------------+
    | 446 | foo      | localhost | foo      | Killed  | 45474 | end   | delete from sessions |
    | 472 | root     | localhost |          | Query   | 0     |       | show processlist     |
    +-----+----------+-----------+----------+---------+-------+-------+----------------------+

But even after killing the thread took a long, long time to disappear:

    +-----+----------+-----------+----------+---------+-------+-------+----------------------+
    | Id  | User     | Host      | db       | Command | Time  | State | Info                 |
    +-----+----------+-----------+----------+---------+-------+-------+----------------------+
    | 446 | foo      | localhost | foo      | Killed  | 53490 | end   | delete from sessions |
    | 482 | root     | localhost |          | Query   | 0     |       | show processlist     |
    +-----+----------+-----------+----------+---------+-------+-------+----------------------+

Finally, the thread finalized when I tried running a `TRUNCATE sessions` and then aborted *that* query with Control-C; I'm not sure if this was a coincidence or not.

In the end, once the unwanted thread finally went away and the lock contention issues were over I was able to disable public access to the site, shut down the [Mongrel](/wiki/Mongrel) instances, and perform the `TRUNCATE` very rapidly:

    mysql> TRUNCATE sessions;
    Query OK, 2544634 rows affected (0.13 sec)

So the moral of the story is, clear your sessions table early and often, before it gets too large to efficiently prune.

## Automated clearing

From a cron job, for example. Currently working on setting this up; see [ticket \#1142](/issues/1142).
