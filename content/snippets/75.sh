---
title: git-daemon init.d script
tags: git snippets
cache_breaker: 1
---

#!/bin/sh
#
# git git-daemon
#
# chkconfig: - 80 20
# description: Git daemon
#
# Based on guidelines at:
#   http://fedoraproject.org/wiki/Packaging:SysVInitScript

### BEGIN INIT INFO
# Provides: git
# Required-Start: $local_fs $network
# Required-Stop: $local_fs $network
# Short-Description: start and stop git-daemon
# Description: Git is a stupid content tracker
### END INIT INFO

# Source function library.
. /etc/rc.d/init.d/functions

prog=git-daemon
exec=/usr/bin/git
repos=/pub/git/repos
args="daemon --verbose --detach --reuseaddr --port=9418 --user=git --group=git --pid-file=/var/run/$prog --base-path=$repos -- $repos"

[ -e /etc/sysconfig/$prog ] && . /etc/sysconfig/$prog

# Check that networking is up.
[ "${NETWORKING}" = "no" ] && exit 1

lockfile=/var/lock/subsys/$prog

start() {
    [ -x $exec ] || exit 5
    echo -n $"Starting $prog: "
    daemon $exec $args
    retval=$?
    echo
    [ $retval -eq 0 ] && touch $lockfile
    return $retval
}

stop() {
    echo -n $"Stopping $prog: "
    killproc $prog
    retval=$?
    echo
    [ $retval -eq 0 ] && rm -f $lockfile
    return $retval
}

restart() {
    stop
    start
}

reload() {
    restart
}

force_reload() {
    restart
}

rh_status() {
    # run checks to determine if the service is running or use generic status
    status $prog
}

rh_status_q() {
    rh_status >/dev/null 2>&1
}


case "$1" in
    start)
        rh_status_q && exit 0
        $1
        ;;
    stop)
        rh_status_q || exit 0
        $1
        ;;
    restart)
        $1
        ;;
    reload)
        rh_status_q || exit 7
        $1
        ;;
    force-reload)
        force_reload
        ;;
    status)
        rh_status
        ;;
    condrestart|try-restart)
        rh_status_q || exit 0
        restart
        ;;
    *)
        echo $"Usage: $0 {start|stop|status|restart|condrestart|try-restart|reload|force-reload}"
        exit 2
esac
exit $?
