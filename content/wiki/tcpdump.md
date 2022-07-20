---
tags: wiki tcpdump
title: tcpdump
---

# A `tcpdump` case study

Here are some notes I made this week while trying to troubleshoot unstable SSH connections. I barely know how to meaningfully use `tcpdump`, so there are probably better resources out there, but I want to record this stuff in case it comes in handy to me in the future.

## The problem

I was seeing SSH connections to codespaces routinely die after only a few minutes, even while being actively used, as soon as I used my laptop away from my desk. The same laptop, on the same WiFi connection, could hold a stable connection to a codespace for hours if plugged into the Thunderbolt dock. This was a bit weird because the dock in question is not connected via ethernet to anything that was powered up, nor does it have any other kind of active network connection.

In the end, I never did actually get to the bottom or the mystery (🤦) but I did get some practice at using some network tools along the way. A reboot of the laptop, which had an uptime of about a month during the investigation, seemed to make things better at first, but the problems returned the next day.

Things I know:

- Problem doesn't just affect codespaces, nor just corporate-managed remote hosts, but any SSH host, including personal EC2 boxes that I have access to.
- Problem doesn't affect my personal laptop, only my work laptop (as such, I can't rule out corporate fleet management and security software as the real cause here); both of these machines are running the latest version of macOS at the time of writing (12.4 AKA Monterey).
- Problem manifests both when the connection is idle and when it is being actively used.
- Problem manifests both on and off the corporate VPN, I think...
- Problem manifests on multiple network SSIDs.
- Problem isn't about power (ie. plugging into a power adapter does _not_ make the problem go away; only the mystical properties of the dock stave off the problem).
- SSH setting `ControlMaster auto` vs `ControlMaster no` makes no difference.
- SSH setting `TCPKeepAlive no` vs `TCPKeepAlive yes` (default) makes no difference.
- When multiple connections are open (eg. 2 to a codespace, 1 to another corporate remote host, 1 to an EC2 host), all go down at the same time.
- Remote hosts all have default settings (so `TCPKeepAlive yes` potentially _is_ an issue there).

## The investigation

Via [this cheatsheet](https://danielmiessler.com/study/tcpdump/) I knew that I could identify SSH connections with this command, irrespective of ports, by looking for the banner response:

```
tcpdump 'tcp[(tcp[12]>>2):4] = 0x5353482D'
```

Here's an example of me connecting to an EC2 host:

```
12:42:02.588173 IP 192.168.1.129.55754 > unixhosts.net.ssh: Flags [P.], seq 4226760049:4226760070, ack 3514525375, win 2070, options [nop,nop,TS val 1355848698 ecr 443177270], length 21
12:42:02.705315 IP unixhosts.net.ssh > 192.168.1.129.55754: Flags [P.], seq 1:22, ack 21, win 210, options [nop,nop,TS val 443177389 ecr 1355848698], length 21
```

This won't work for codespaces, however, because when using the `gh cs ssh` tool it's doing some magic to manage and proxy the connection for you. `ps auxwww | grep ssh` reveals an SSH connection going to localhost, but if you want to see the real traffic, you have to figure out what port the `gh`-powered proxy is using to get to the remote host. I was able to do this by making educated guesses from the `netstat` output and then monitoring them for traffic.

### Other useful commands

Show all network interfaces:

```
networksetup -listallhardwareports
```

Analyzing captured traffic with `tcptrace`:

```
# Example: having identified port 63433 as interesting, capture all traffic to/from it:
sudo tcpdump -vv -i lo0 port 63433 -w /tmp/out # a bit gibberishy
brew install tcptrace
tcptrace /tmp/out
tcptrace -l /tmp/out # Shows more info.
```

Seeing hung connections in `netstat`:

```
Active Internet connections
Proto Recv-Q Send-Q  Local Address          Foreign Address        (state)
tcp4     504      0  localhost.64929        localhost.64931        ESTABLISHED
tcp4       0      0  localhost.64931        localhost.64929        ESTABLISHED
```

So, the connection is established, but `Rec-Q` shows:

> The count of bytes not copied by the user program connected to this socket.

Monitoring "alive" traffic to another host:

```
ssh -o LogLevel=DEBUG -o ControlMaster=no -o TCPKeepAlive=no -o ServerAliveCountMax=1000 -o ServerAliveInterval=1 -vvvv $SOME_EC2_HOST
netstat | grep $SOME_EC2_HOST # To get port.
sudo tcpdump -vvv -xx -i all port 59301 # To monitor; -xx prints entire packet.
```

Showing route and ping between local machine and remote:

```
sudo mtr $REMOTE_EC2_HOST
```
