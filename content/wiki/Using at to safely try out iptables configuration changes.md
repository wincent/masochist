---
tags: iptables at
cache_breaker: 1
---

Making changes to [iptables](/wiki/iptables) rules can be dangerous. If you make a mistake you could lock yourself out of your machine. A nice safety valve can be to use the `at` [command-line](/wiki/command-line) tool to save your hide in the event of a mistake.

The basic idea is to do the following:

1.  Use `at` to schedule a reboot for a few minutes into the future
2.  Manipulate the firewall
3.  If everything works, cancel the reboot; otherwise, wait for the reboot to take place and reset the firewall to its former state

For this to work you need to make sure your firewall rules don't get automatically saved to disk on shutdown; in other words, your `/etc/sysconfig/iptables-config` should include something like:

    # Save current firewall rules on stop.
    #   Value: yes|no,  default: no
    # Saves all firewall rules to /etc/sysconfig/iptables if firewall gets stopped
    # (e.g. on system shutdown).
    IPTABLES_SAVE_ON_STOP="no"

    # Save current firewall rules on restart.
    #   Value: yes|no,  default: no
    # Saves all firewall rules to /etc/sysconfig/iptables if firewall gets
    # restarted.
    IPTABLES_SAVE_ON_RESTART="no"

# Demo

Here's a demo of the concepts introduced above. Instead of rebooting we're just going to schedule `ls` to run.

Find out what the local time on the server is:

    # date
    Tue Apr 28 14:08:58 EDT 2009

Check what's in the `at` queue:

    # atq

Nothing was in the queue, so schedule a job:

    # at 14:10
    at> ls
    at> <EOT>
    job 47 at 2009-04-28 14:10

To escape the `at` "shell" use Control-D.

Now check the queue again; the job should be there:

    # atq
    47	2009-04-28 14:10 a root

Do something else (like configuring your firewall) and cancel the job:

    # atrm 47

Confirm that the queue is empty:

    # atq

# See also

-   [iptables](/wiki/iptables)

