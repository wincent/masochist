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
- Problem manifests both on and off the corporate VPN.
- Problem manifests on multiple network SSIDs (verified on both 2.4 GHz and 5 GHz networks).
- Problem manifests even entirely _within_ home network (ie. SSH-ing into another host on my local network).
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

Oddly enough, even a lowly `ping` of a host on the local network fails this hard when the network goes down; ie. first some request timeouts, then a broken pipe:

```
...
64 bytes from 192.168.1.131: icmp_seq=692 ttl=64 time=5.543 ms
64 bytes from 192.168.1.131: icmp_seq=693 ttl=64 time=87.783 ms
Request timeout for icmp_seq 694
Request timeout for icmp_seq 695
Request timeout for icmp_seq 696
Request timeout for icmp_seq 697
zsh: broken pipe  ping example.local
```

On another occasion, it suddenly started claiming `no route to host`:

```
64 bytes from 192.168.1.131: icmp_seq=648 ttl=64 time=68.470 ms
Request timeout for icmp_seq 649
Request timeout for icmp_seq 650
Request timeout for icmp_seq 651
Request timeout for icmp_seq 652
ping: sendto: No route to host
Request timeout for icmp_seq 653
ping: sendto: No route to host
Request timeout for icmp_seq 654
ping: sendto: No route to host
```

Eventually, it recovered (ie. exited with a broken pipe, but I was able to resume/reconnect straight afterwards). Note that when this happens, I can't even ping my _router_ IP.

Looking into ARP (Address Resolution Protocol), the cached mapping between IP addresses and Ethernet (MAC, or "Media Access Control") addresses.

`arp -a` on 2.5 GHz WiFi:

```
? (192.168.1.1) at e0:19:54:5d:d1:b0 on en0 ifscope [ethernet]
? (192.168.1.129) at a0:78:17:9e:71:bd on en0 ifscope permanent [ethernet]
? (224.0.0.251) at 1:0:5e:0:0:fb on en0 ifscope permanent [ethernet]
```

- 192.168.1.1 is the router.
- 192.168.1.129 is the problem laptop.
- [The 224.0.0.251 address](https://networkengineering.stackexchange.com/a/51958) is [for multicast on the local network](https://en.wikipedia.org/wiki/Multicast_address).

`arp -a` on 5 GHz WiFi:

```
? (192.168.1.1) at e0:19:54:5d:d1:b0 on en0 ifscope [ethernet]
? (192.168.1.131) at a4:b1:c1:91:47:9f on en0 ifscope [ethernet]
? (192.168.1.255) at ff:ff:ff:ff:ff:ff on en0 ifscope [ethernet]
? (224.0.0.251) at 1:0:5e:0:0:fb on en0 ifscope permanent [ethernet]
? (239.255.255.250) at 1:0:5e:7f:ff:fa on en0 ifscope permanent [ethernet]
```

- 192.168.1.131 is the local network test host that I've been `ping`-ing.
- 192.168.1.255 is a broadcast address; not sure why the other network didn't have that.
- 239.255.255.250 is also a ["Organization-Local Scope" multicast address](https://www.iana.org/assignments/multicast-addresses/multicast-addresses.xhtml); at first I thought that was because I'm on a VPN on this network, but it turns out that the VPN dropped anyway (although it's possible that it's cached); in any case, if I `ping -c 239.255.255.250` I get a reply back from my laptop.
- Note the laptop is gone. It appears if I re-run `arp -a` after a `ping 192.168.1.129`:

From [RFC 2365](https://www.rfc-editor.org/rfc/rfc2365.html), here's a definition of what the "administratively scoped multicast address" (ie. the "organization-local scope") means:

> The key properties of administratively scoped IP multicast are that (i). packets addressed to administratively scoped multicast addresses do not cross configured administrative boundaries, and (ii). administratively scoped multicast addresses are locally assigned, and hence are not required to be unique across administrative boundaries.

Running again:

```
192.168.1.1 (192.168.1.1) at e0:19:54:5d:d1:b0 on en0 ifscope [ethernet]
192.168.1.129 (192.168.1.129) at a0:78:17:9e:71:bd on en0 ifscope permanent [ethernet]
192.168.1.131 (192.168.1.131) at a4:b1:c1:91:47:9f on en0 ifscope [ethernet]
192.168.1.255 (192.168.1.255) at ff:ff:ff:ff:ff:ff on en0 ifscope [ethernet]
? (224.0.0.251) at 1:0:5e:0:0:fb on en0 ifscope permanent [ethernet]
? (239.255.255.250) at 1:0:5e:7f:ff:fa on en0 ifscope permanent [ethernet]
```

Evidently this cache is pretty short-lived; running a few minutes later I get the following (the broadcast address is now gone)[^again]:

```
192.168.1.1 (192.168.1.1) at e0:19:54:5d:d1:b0 on en0 ifscope [ethernet]
192.168.1.129 (192.168.1.129) at a0:78:17:9e:71:bd on en0 ifscope permanent [ethernet]
192.168.1.131 (192.168.1.131) at a4:b1:c1:91:47:9f on en0 ifscope [ethernet]
? (224.0.0.251) at 1:0:5e:0:0:fb on en0 ifscope permanent [ethernet]
? (239.255.255.250) at 1:0:5e:7f:ff:fa on en0 ifscope permanent [ethernet]
```

[^again]: And if I run it again a few minutes later, the broadcast address is back.

So I tried watching ping and low-level network traffic at same time (hard to do this to router, as there is too much traffic and I don't know how to filter it without discarding something potentially useful as well):

```
sudo -v # cache credentials, so I can background tcpdump without missing the prompt
sudo tcpdump -nle host 192.168.1.131 &
ping 192.168.1.131
```

Ping times to router are lower than to test host, but probably not suspiciously so.

Here is a section where we see pings fail for a while and then recover:

```
12:25:07.762590 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1357, length 64
12:25:07.769030 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1357, length 64
64 bytes from 192.168.1.131: icmp_seq=1357 ttl=64 time=6.559 ms
12:25:08.767718 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1358, length 64
12:25:08.777983 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype ARP (0x0806), length 42: Request who-has 192.168.1.129 tell 192.168.1.131, length 28
12:25:08.777999 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype ARP (0x0806), length 42: Reply 192.168.1.129 is-at a0:78:17:9e:71:bd, length 28
12:25:08.778343 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1358, length 64
64 bytes from 192.168.1.131: icmp_seq=1358 ttl=64 time=10.723 ms
12:25:09.772538 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1359, length 64
12:25:09.786172 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1359, length 64
64 bytes from 192.168.1.131: icmp_seq=1359 ttl=64 time=13.930 ms
12:25:10.777786 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1360, length 64
12:25:10.788516 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1360, length 64
64 bytes from 192.168.1.131: icmp_seq=1360 ttl=64 time=10.880 ms
12:25:11.779034 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1361, length 64
12:25:11.789565 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1361, length 64
64 bytes from 192.168.1.131: icmp_seq=1361 ttl=64 time=10.700 ms
12:25:12.779423 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1362, length 64
12:25:12.790992 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1362, length 64
64 bytes from 192.168.1.131: icmp_seq=1362 ttl=64 time=11.658 ms
12:25:13.782962 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1363, length 64
Request timeout for icmp_seq 1363
12:25:14.785192 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1364, length 64
Request timeout for icmp_seq 1364
12:25:15.789028 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1365, length 64
Request timeout for icmp_seq 1365
12:25:16.794274 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1366, length 64
12:25:17.392594 a4:b1:c1:91:47:9f > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Probe 192.168.1.131, length 28
12:25:17.797743 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1367, length 64
Request timeout for icmp_seq 1366
12:25:18.735528 a4:b1:c1:91:47:9f > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Probe 192.168.1.131, length 28
Request timeout for icmp_seq 1367
12:25:18.802211 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1368, length 64
12:25:19.807496 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1369, length 64
Request timeout for icmp_seq 1368
12:25:20.066677 a4:b1:c1:91:47:9f > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Probe 192.168.1.131, length 28
12:25:20.812751 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1370, length 64
Request timeout for icmp_seq 1369
Request timeout for icmp_seq 1370
12:25:21.817957 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1371, length 64
12:25:22.073416 a4:b1:c1:91:47:9f > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Announcement 192.168.1.131, length 28
12:25:22.124744 a4:b1:c1:91:47:9f > 01:00:5e:00:00:fb, ethertype IPv4 (0x0800), length 128: 192.168.1.131.5353 > 224.0.0.251.5353: 0*- [0q] 2/0/0 PTR _ssh._tcp.local., PTR example._ssh._tcp.local. (86)
12:25:22.136400 a4:b1:c1:91:47:9f > 01:00:5e:00:00:fb, ethertype IPv4 (0x0800), length 308: 192.168.1.131.5353 > 224.0.0.251.5353: 0 [4q] [6n] ANY (QM)? f.9.7.4.1.9.e.f.f.f.1.c.1.b.6.a.0.0.0.2.f.0.a.3.0.8.a.5.c.0.a.2.ip6.arpa. ANY (QM)? example.local. ANY (QM)? 131.1.168.192.in-addr.arpa. ANY (QM)? example._ssh._tcp.local. (266)
12:25:22.217480 a4:b1:c1:91:47:9f > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Request who-has 192.168.1.1 tell 192.168.1.131, length 28
12:25:22.386168 a4:b1:c1:91:47:9f > 01:00:5e:00:00:fb, ethertype IPv4 (0x0800), length 308: 192.168.1.131.5353 > 224.0.0.251.5353: 0 [4q] [6n] ANY (QM)? f.9.7.4.1.9.e.f.f.f.1.c.1.b.6.a.0.0.0.2.f.0.a.3.0.8.a.5.c.0.a.2.ip6.arpa. ANY (QM)? example.local. ANY (QM)? 131.1.168.192.in-addr.arpa. ANY (QM)? example._ssh._tcp.local. (266)
12:25:22.637545 a4:b1:c1:91:47:9f > 01:00:5e:00:00:fb, ethertype IPv4 (0x0800), length 308: 192.168.1.131.5353 > 224.0.0.251.5353: 0 [4q] [6n] ANY (QM)? f.9.7.4.1.9.e.f.f.f.1.c.1.b.6.a.0.0.0.2.f.0.a.3.0.8.a.5.c.0.a.2.ip6.arpa. ANY (QM)? example.local. ANY (QM)? 131.1.168.192.in-addr.arpa. ANY (QM)? example._ssh._tcp.local. (266)
12:25:22.823180 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1372, length 64
Request timeout for icmp_seq 1371
12:25:22.830066 a4:b1:c1:91:47:9f > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Request who-has 192.168.1.129 tell 192.168.1.131, length 28
12:25:22.830082 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype ARP (0x0806), length 42: Reply 192.168.1.129 is-at a0:78:17:9e:71:bd, length 28
12:25:22.835745 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1372, length 64
64 bytes from 192.168.1.131: icmp_seq=1372 ttl=64 time=12.746 ms
12:25:23.238850 a4:b1:c1:91:47:9f > 01:00:5e:00:00:fb, ethertype IPv4 (0x0800), length 128: 192.168.1.131.5353 > 224.0.0.251.5353: 0*- [0q] 2/0/0 PTR _ssh._tcp.local., PTR example._ssh._tcp.local. (86)
12:25:23.828594 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1373, length 64
12:25:23.834858 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1373, length 64
64 bytes from 192.168.1.131: icmp_seq=1373 ttl=64 time=6.597 ms
12:25:23.885733 a4:b1:c1:91:47:9f > 01:00:5e:00:00:fb, ethertype IPv4 (0x0800), length 284: 192.168.1.131.5353 > 224.0.0.251.5353: 0*- [0q] 6/0/0 (Cache flush) PTR example.local., (Cache flush) A 192.168.1.131, (Cache flush) PTR example.local., (Cache flush) SRV example.local.:22 0 0, (Cache flush) TXT "", (Cache flush) AAAA 2a0c:5a80:3a0f:2000:a6b1:c1ff:fe91:479f (242)
12:25:24.040434 a4:b1:c1:91:47:9f > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Announcement 192.168.1.131, length 28
12:25:24.833884 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1374, length 64
12:25:24.839788 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1374, length 64
64 bytes from 192.168.1.131: icmp_seq=1374 ttl=64 time=6.047 ms
12:25:25.041102 a4:b1:c1:91:47:9f > 01:00:5e:7f:ff:fa, ethertype IPv4 (0x0800), length 215: 192.168.1.131.41083 > 239.255.255.250.1900: UDP, length 173
12:25:25.221810 a4:b1:c1:91:47:9f > 01:00:5e:00:00:fb, ethertype IPv4 (0x0800), length 213: 192.168.1.131.5353 > 224.0.0.251.5353: 0*- [0q] 6/0/0 PTR _ssh._tcp.local., PTR example._ssh._tcp.local., (Cache flush) TXT "", (Cache flush) SRV example.local.:22 0 0, (Cache flush) AAAA 2a0c:5a80:3a0f:2000:a6b1:c1ff:fe91:479f, (Cache flush) A 192.168.1.131 (171)
12:25:25.837533 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1375, length 64
12:25:25.849384 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1375, length 64
64 bytes from 192.168.1.131: icmp_seq=1375 ttl=64 time=12.101 ms
12:25:25.934094 a4:b1:c1:91:47:9f > 01:00:5e:00:00:fb, ethertype IPv4 (0x0800), length 284: 192.168.1.131.5353 > 224.0.0.251.5353: 0*- [0q] 6/0/0 (Cache flush) PTR example.local., (Cache flush) A 192.168.1.131, (Cache flush) PTR example.local., (Cache flush) SRV example.local.:22 0 0, (Cache flush) TXT "", (Cache flush) AAAA 2a0c:5a80:3a0f:2000:a6b1:c1ff:fe91:479f (242)
12:25:26.041937 a4:b1:c1:91:47:9f > 01:00:5e:7f:ff:fa, ethertype IPv4 (0x0800), length 215: 192.168.1.131.41083 > 239.255.255.250.1900: UDP, length 173
12:25:26.842985 a0:78:17:9e:71:bd > a4:b1:c1:91:47:9f, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.131: ICMP echo request, id 41734, seq 1376, length 64
12:25:26.848228 a4:b1:c1:91:47:9f > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.131 > 192.168.1.129: ICMP echo reply, id 41734, seq 1376, length 64
64 bytes from 192.168.1.131: icmp_seq=1376 ttl=64 time=5.633 ms
```

Around the same time we see two dropped packets for our `ping` to the router, but it recovers quickly:

```
12:25:13.779771 a0:78:17:9e:71:bd > e0:19:54:5d:d1:b0, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.1: ICMP echo request, id 23047, seq 1208, length 64
12:25:14.785050 a0:78:17:9e:71:bd > e0:19:54:5d:d1:b0, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.1: ICMP echo request, id 23047, seq 1209, length 64
Request timeout for icmp_seq 1208
Request timeout for icmp_seq 1209
12:25:15.790220 a0:78:17:9e:71:bd > e0:19:54:5d:d1:b0, ethertype IPv4 (0x0800), length 98: 192.168.1.129 > 192.168.1.1: ICMP echo request, id 23047, seq 1210, length 64
12:25:15.794422 e0:19:54:5d:d1:b0 > a0:78:17:9e:71:bd, ethertype IPv4 (0x0800), length 98: 192.168.1.1 > 192.168.1.129: ICMP echo reply, id 23047, seq 1210, length 64
64 bytes from 192.168.1.1: icmp_seq=1210 ttl=64 time=4.309 ms
```

As another test, I am running a ping from the Linux box to the router to see if that one is stable or not... I confirmed that when the Mac lost its network connection, the Linux box did not (that is, on reconnecting to it, and getting back into the tmux session with the `ping` commands running, I could see no lost packets).

Other things I notice:

- Ping times to router are fast (1 to 4 ms).
- Ping times to M1 laptop are slower, but also highly variable (7 to 8 ms as median, but regularly spiking as high as 200ms).
- Ping times to Google (IPv6) are a steady 7 to 8 ms (due to their [extensive use](https://serverfault.com/questions/423668/why-is-ping-to-google-servers-and-google-dns-so-low) of local ["Anycast" addresses](https://en.wikipedia.org/wiki/Anycast)).

I compared ping times to my other Mac laptop to see if they were as variable, and it looks like they are just as variable, and additionally they're also slower, although there don't seem to be as many lost packets... Snippets from `mtr`:

```
# M1

  Packets               Pings
Loss%   Snt   Last   Avg  Best  Wrst StDev
 0.4%   247    5.5   7.5   3.3 107.2  11.1

# Mid-2015

  Packets               Pings
Loss%   Snt   Last   Avg  Best  Wrst StDev
 0.0%   129    3.5  41.6   2.7 114.0  36.5
```

Ping times in the reverse direction (from either laptop to the Linux host) seem prone to bursts of variability as well:

```
# M1

  Packets               Pings
Loss%   Snt   Last   Avg  Best  Wrst StDev
 0.0%   127   75.9  31.2   4.6 138.5  35.3

# Mid-2015
  Packets               Pings
Loss%   Snt   Last   Avg  Best  Wrst StDev
 0.0%   166    3.9  21.7   3.2 151.6  33.2
 ```

They're definitely bursts, as can be seen in this output, where we see a run of low times (5 to 6 ms) followed by turbulence (up to about 55ms) and then back to the low times again:

```
64 bytes from 192.168.1.131: icmp_seq=58 ttl=64 time=5.459 ms
64 bytes from 192.168.1.131: icmp_seq=59 ttl=64 time=5.624 ms
64 bytes from 192.168.1.131: icmp_seq=60 ttl=64 time=6.023 ms
64 bytes from 192.168.1.131: icmp_seq=61 ttl=64 time=5.698 ms
64 bytes from 192.168.1.131: icmp_seq=62 ttl=64 time=5.717 ms
64 bytes from 192.168.1.131: icmp_seq=63 ttl=64 time=5.335 ms
64 bytes from 192.168.1.131: icmp_seq=64 ttl=64 time=5.387 ms
64 bytes from 192.168.1.131: icmp_seq=65 ttl=64 time=5.428 ms
64 bytes from 192.168.1.131: icmp_seq=66 ttl=64 time=5.376 ms
64 bytes from 192.168.1.131: icmp_seq=67 ttl=64 time=6.500 ms
64 bytes from 192.168.1.131: icmp_seq=68 ttl=64 time=5.400 ms
64 bytes from 192.168.1.131: icmp_seq=69 ttl=64 time=5.440 ms
64 bytes from 192.168.1.131: icmp_seq=70 ttl=64 time=55.086 ms
64 bytes from 192.168.1.131: icmp_seq=71 ttl=64 time=54.000 ms
64 bytes from 192.168.1.131: icmp_seq=72 ttl=64 time=53.275 ms
64 bytes from 192.168.1.131: icmp_seq=73 ttl=64 time=19.669 ms
64 bytes from 192.168.1.131: icmp_seq=74 ttl=64 time=38.539 ms
64 bytes from 192.168.1.131: icmp_seq=75 ttl=64 time=5.856 ms
64 bytes from 192.168.1.131: icmp_seq=76 ttl=64 time=38.230 ms
64 bytes from 192.168.1.131: icmp_seq=77 ttl=64 time=34.529 ms
64 bytes from 192.168.1.131: icmp_seq=78 ttl=64 time=5.740 ms
64 bytes from 192.168.1.131: icmp_seq=79 ttl=64 time=29.116 ms
64 bytes from 192.168.1.131: icmp_seq=80 ttl=64 time=5.447 ms
64 bytes from 192.168.1.131: icmp_seq=81 ttl=64 time=26.327 ms
64 bytes from 192.168.1.131: icmp_seq=82 ttl=64 time=5.848 ms
64 bytes from 192.168.1.131: icmp_seq=83 ttl=64 time=13.509 ms
64 bytes from 192.168.1.131: icmp_seq=84 ttl=64 time=20.434 ms
64 bytes from 192.168.1.131: icmp_seq=85 ttl=64 time=16.210 ms
64 bytes from 192.168.1.131: icmp_seq=86 ttl=64 time=16.166 ms
64 bytes from 192.168.1.131: icmp_seq=87 ttl=64 time=13.697 ms
64 bytes from 192.168.1.131: icmp_seq=88 ttl=64 time=5.900 ms
64 bytes from 192.168.1.131: icmp_seq=89 ttl=64 time=6.822 ms
64 bytes from 192.168.1.131: icmp_seq=90 ttl=64 time=6.101 ms
64 bytes from 192.168.1.131: icmp_seq=91 ttl=64 time=5.579 ms
64 bytes from 192.168.1.131: icmp_seq=92 ttl=64 time=7.068 ms
64 bytes from 192.168.1.131: icmp_seq=93 ttl=64 time=5.545 ms
64 bytes from 192.168.1.131: icmp_seq=94 ttl=64 time=5.908 ms
64 bytes from 192.168.1.131: icmp_seq=95 ttl=64 time=6.005 ms
64 bytes from 192.168.1.131: icmp_seq=96 ttl=64 time=6.119 ms
64 bytes from 192.168.1.131: icmp_seq=97 ttl=64 time=5.904 ms
64 bytes from 192.168.1.131: icmp_seq=98 ttl=64 time=6.391 ms
64 bytes from 192.168.1.131: icmp_seq=99 ttl=64 time=6.026 ms
```

In general, the macOS network stack doesn't seem up to snuff, as seen in this short burst of "flood" traffic:

```shell
$ sudo ping -c 1000 -f localhost
1000 packets transmitted, 737 packets received, 26.3% packet loss
round-trip min/avg/max/stddev = 0.015/0.024/0.097/0.008 ms
```

vs Linux, which handles a longer flood with zero packet loss:

```shell
$ sudo ping -c 10000 -f localhost
10000 packets transmitted, 10000 received, 0% packet loss, time 66ms
rtt min/avg/max/mdev = 0.001/0.002/0.025/0.000 ms, ipg/ewma 0.006/0.001 ms
```

Searching for "WiFi ping spikes macOS" and such turns up some gems among an absolute deluge of garbage results — suggesting that Mac networking problems like this, and variations on it, are commonplace — which mostly consist of [advice which is almost certain to do nothing but waste a bunch of time, like seen on this thread](https://discussions.apple.com/thread/253352921) to:

1. Delete temporary internet files.
2. Restart router.
3. Boot in safe mode.
4. Create a new admin user.
5. Reset NVRAM.
6. Remove Login Items.
7. Scan for malware.
8. Restore from backup.
9. Reinstall macOS.

Others like [this one](https://developer.apple.com/forums/thread/97805) unhelpfully dismiss the spikes as normal with the following observation:

> Most Wi-Fi hardware only has a single radio, and that radio must be tuned to a specific channel. Thus, the hardware can only work on one channel at a time.
>
> However, there are situations where a STA need to switch channels ... While it’s on that temporary channel, the STA can’t be on the channel it’s using to communicating with the AP, and thus you see spikes in latency.

Anyway, some example gems include:

- https://apple.stackexchange.com/questions/263638/macbook-pro-experiencing-ping-spikes-to-local-router
- https://stackoverflow.com/questions/19587701/what-is-awdl-apple-wireless-direct-link-and-how-does-it-work

Which together provide some handy tips:

If we run `ping` with a low interval (`-i 0.25`) and (`--apple-time`) to show timestamps, we can run until we see a connection interruption:

```
13:44:04.257858 64 bytes from 192.168.1.131: icmp_seq=1266 ttl=64 time=80.101 ms
13:44:04.463640 64 bytes from 192.168.1.131: icmp_seq=1267 ttl=64 time=31.052 ms
13:44:04.770186 64 bytes from 192.168.1.131: icmp_seq=1268 ttl=64 time=82.272 ms
ping: sendto: No route to host
Request timeout for icmp_seq 1269
ping: sendto: No route to host
Request timeout for icmp_seq 1270
zsh: broken pipe  ping 192.168.1.131 -i 0.25 --apple-time
```

Meanwhile on the remote host, we run something so we can see when the connection freezes (eg. `watch --differences=permanent -n 0.1 date`):

```
Every 0.1s: date                                 example: Fri Jul 22 13:43:55 2022

Fri 22 Jul 2022 13:43:55 CEST
```

On the Mac, hold down option and click on the WiFi menu, then select "Enable Wi-Fi Logging..." and `tail -f /var/log/wifi.log` shows us:

```
Fri Jul 22 13:43:47.012 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <25>, Clamshell Mode <0>
Fri Jul 22 13:43:47.012 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 13:43:47.013
Fri Jul 22 13:43:49.719 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 13:43:51.891 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 13:43:51.891 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: ON, Num HID Devices is <1>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <25>, LWM <5>, HWM <26>
Fri Jul 22 13:43:51.891 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <25>, Clamshell Mode <0>
Fri Jul 22 13:43:51.892 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 13:43:51.892
Fri Jul 22 13:43:54.732 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 13:43:57.011 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 13:43:57.011 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: ON, Num HID Devices is <1>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <25>, LWM <5>, HWM <26>
Fri Jul 22 13:43:57.012 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <25>, Clamshell Mode <0>
Fri Jul 22 13:43:57.012 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 13:43:57.012
Fri Jul 22 13:43:59.743 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 13:44:03.091 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 13:44:03.092 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: ON, Num HID Devices is <1>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <25>, LWM <5>, HWM <26>
Fri Jul 22 13:44:03.092 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <25>, Clamshell Mode <0>
Fri Jul 22 13:44:03.092 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 13:44:03.093
Fri Jul 22 13:44:04.755 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 13:44:05.455 Assoc: <airport[70292]> <en0> REACHABILITY [reachable=no, ipv4Primary=yes, ipv6Primary=yes]
Fri Jul 22 13:44:05.455 Assoc: <airport[70292]> <ap1> REACHABILITY [reachable=no, ipv4Primary=no, ipv6Primary=no]
Fri Jul 22 13:44:05.456 Assoc: <airport[70292]> <awdl0> REACHABILITY [reachable=no, ipv4Primary=no, ipv6Primary=no]
Fri Jul 22 13:44:06.209 Assoc: <airport[70292]> <en0> REACHABILITY [reachable=no, ipv4Primary=yes, ipv6Primary=yes]
Fri Jul 22 13:44:06.209 Assoc: <airport[70292]> <ap1> REACHABILITY [reachable=no, ipv4Primary=no, ipv6Primary=no]
Fri Jul 22 13:44:06.210 Assoc: <airport[70292]> <awdl0> REACHABILITY [reachable=no, ipv4Primary=no, ipv6Primary=no]
Fri Jul 22 13:44:06.443 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 13:44:06.443 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: ON, Num HID Devices is <1>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <25>, LWM <5>, HWM <26>
Fri Jul 22 13:44:06.444 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <25>, Clamshell Mode <0>
Fri Jul 22 13:44:06.444 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 13:44:06.444
Fri Jul 22 13:44:06.498 Assoc: <airport[70292]> <en0> REACHABILITY [reachable=yes, ipv4Primary=yes, ipv6Primary=yes]
Fri Jul 22 13:44:06.498 Info: <airport[70292]> airportdProcessDpsEvent: DPS event: 5 on interface en0 type:1
Fri Jul 22 13:44:06.498 Info: <airport[70292]> airportdProcessDpsEvent: currentNetworkName:DIGIFIBRA-PLUS-Xz3f, currentBssid:e0:19:54:5d:d1:b1, channelInfo:{
Fri Jul 22 13:44:06.498     CHANNEL = 44;
Fri Jul 22 13:44:06.499     "CHANNEL_FLAGS" = 1040;
Fri Jul 22 13:44:06.499 }
Fri Jul 22 13:44:06.499 Assoc: <airport[70292]> <ap1> REACHABILITY [reachable=no, ipv4Primary=no, ipv6Primary=no]
Fri Jul 22 13:44:06.499 Assoc: <airport[70292]> <awdl0> REACHABILITY [reachable=no, ipv4Primary=no, ipv6Primary=no]
Fri Jul 22 13:44:06.499 <airport[70292]> -[dpsManager handleDPSEventWithType:eventInfo:networkName:BSSID:channelInfo:isCriticalAppInUse:]_block_invoke: Ignoring non-dps events while not in monitoring period/ Ignoring DPS event while in monitoring period
Fri Jul 22 13:44:09.781 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 13:44:13.086 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 13:44:13.086 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: ON, Num HID Devices is <1>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <25>, LWM <5>, HWM <26>
Fri Jul 22 13:44:13.086 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <25>, Clamshell Mode <0>
Fri Jul 22 13:44:13.087 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 13:44:13.087
Fri Jul 22 13:44:14.804 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 13:44:16.462 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 13:44:16.463 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: ON, Num HID Devices is <1>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <25>, LWM <5>, HWM <26>
Fri Jul 22 13:44:16.463 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <25>, Clamshell Mode <0>
Fri Jul 22 13:44:16.463 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
```

FWIW, I think all the `APPLE80211_M_RSSI_CHANGED` events are innocuous (RSSI stands for "Received Signal Strength Indicator"), but it remains a mystery why `reachable` would go to `no` like that.

Additional info can be seen with `sudo log stream | grep -iE --color 'location|wireless|awdl|phone|rapport|sharing|handoff'` (although sadly, no smoking gun).

I was initially suspicious that AWDL (responsible for AirDrop and other "magic") might be at fault, but stopping it with `sudo ifconfig awdl0 down` did not seem to help. Likewise, I don't think any location-based services as mentioned in the Stack Overflow link above are at play, as there is nothing in the logs to corroborate and I have almost nothing turned on.

Trying to catch it again, but other (non-starter) ideas include seeing if it is Bluetooth related.

We see this right when the `ping` dies:

```
Fri Jul 22 14:25:56.128 Info: <airport[70292]> QUERY ALL WIFI NETWORKS request received from pid 71927 (com.apple.preference.network.remoteservice)
Fri Jul 22 14:25:56.131 Info: <airport[70292]> QUERY AUTO HOTSPOT MODE request received from pid 71927 (com.apple.preference.network.remoteservice)
Fri Jul 22 14:25:56.145 Info: <airport[70292]> QUERY ALL WIFI NETWORKS request received from pid 71927 (com.apple.preference.network.remoteservice)
Fri Jul 22 14:25:56.152 Info: <airport[70292]> QUERY ALL WIFI NETWORKS request received from pid 71927 (com.apple.preference.network.remoteservice)
Fri Jul 22 14:25:56.483 Assoc: <airport[70292]> <en0> REACHABILITY [reachable=no, ipv4Primary=yes, ipv6Primary=yes]
Fri Jul 22 14:25:56.483 Assoc: <airport[70292]> <ap1> REACHABILITY [reachable=no, ipv4Primary=no, ipv6Primary=no]
Fri Jul 22 14:25:56.483 Assoc: <airport[70292]> <awdl0> REACHABILITY [reachable=no, ipv4Primary=no, ipv6Primary=no]
```

I think it is unrelated... I'll close Network preferences pane (which kills the `com.apple.preference.network.remoteservice` process) and see if I can repro. I can, this time we see this at the time the `ping` dies:

```
Fri Jul 22 14:34:15.535 <airport[70292]> _SC_callback: Changed keys = { 'State:/Network/Global/IPv4' 'State:/Network/Global/IPv6' }
Fri Jul 22 14:34:15.536 SC: <airport[70292]> airportdProcessSystemConfigurationEvent: Processing 'State:/Network/Global/IPv4'
Fri Jul 22 14:34:15.536 SC: <airport[70292]> airportdProcessSystemConfigurationEvent: Processing 'State:/Network/Global/IPv6'
Fri Jul 22 14:34:15.559 Assoc: <airport[70292]> <en0> IPv4/ROUTER ASSIGNED [ip=192.168.1.129, router=192.168.1.1]
Fri Jul 22 14:34:15.565 Info: <WiFiAge[617]> Wi-Fi Health is enabled in osx-21F79
Fri Jul 22 14:34:16.946 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 14:34:16.946 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: ON, Num HID Devices is <1>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <25>, LWM <5>, HWM <26>
Fri Jul 22 14:34:16.946 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <25>, Clamshell Mode <0>
Fri Jul 22 14:34:16.946 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
```

Again:

```
Fri Jul 22 14:38:18.330 <airport[70292]> _SC_callback: Changed keys = { 'State:/Network/Global/IPv4' 'State:/Network/Global/IPv6' }
Fri Jul 22 14:38:18.332 SC: <airport[70292]> airportdProcessSystemConfigurationEvent: Processing 'State:/Network/Global/IPv4'
Fri Jul 22 14:38:18.332 SC: <airport[70292]> airportdProcessSystemConfigurationEvent: Processing 'State:/Network/Global/IPv6'
Fri Jul 22 14:38:18.356 Assoc: <airport[70292]> <en0> IPv4/ROUTER ASSIGNED [ip=192.168.1.129, router=192.168.1.1]
Fri Jul 22 14:38:18.367 Info: <WiFiAge[617]> Wi-Fi Health is enabled in osx-21F79
Fri Jul 22 14:38:19.236 Assoc: <airport[70292]> <en0> REACHABILITY [reachable=yes, ipv4Primary=yes, ipv6Primary=yes]
Fri Jul 22 14:38:19.236 Info: <airport[70292]> airportdProcessDpsEvent: DPS event: 5 on interface en0 type:1
Fri Jul 22 14:38:19.237 Info: <airport[70292]> airportdProcessDpsEvent: currentNetworkName:DIGIFIBRA-PLUS-Xz3f, currentBssid:e0:19:54:5d:d1:b1, channelInfo:{
Fri Jul 22 14:38:19.237     CHANNEL = 44;
Fri Jul 22 14:38:19.237     "CHANNEL_FLAGS" = 1040;
Fri Jul 22 14:38:19.237 }
```

Just in case iStat menus is involved, I removed current location from clock menu, and removed its access to location services:

```
2022-07-22 14:38:29.466974+0200 0x473dfd   Default     0x183640             351    0    locationd: [com.apple.locationd.Core:Client] {"msg":"client getting effective client name", "bundleId":"com.bjango.istatmenus.status", "bundlePath":""}
```

Nope, it happened again:

```
Fri Jul 22 14:43:56.929
Fri Jul 22 14:44:00.597 Assoc: <airport[70292]> <en0> REACHABILITY [reachable=no, ipv4Primary=yes, ipv6Primary=yes]
```

Unclear corroboration in `log stream`:

```
2022-07-22 14:43:52.277383+0200 0x4746ac   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Scan options changed: 1
  executable          = /usr/sbin/WirelessRadioManagerd
  executable location = /usr/sbin/WirelessRadioManagerd
  executable          = /usr/libexec/sharingd
  executable location = /usr/libexec/sharingd
  executable          = /usr/libexec/rapportd
  executable location = /usr/libexec/rapportd
  executable          = /System/Library/PrivateFrameworks/WirelessDiagnostics.framework/Support/awdd
  executable location = /System/Library/PrivateFrameworks/WirelessDiagnostics.framework/Support/awdd
  executable          = /usr/libexec/locationd
  executable location = /usr/libexec/locationd
2022-07-22 14:43:57.832798+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService: Received at daemon:     event type 1    path:  /usr/sbin/WirelessRadioManagerd    pid:    70293    ppid:   1    timestamp:  133029631320000000    exit:   116444736000000000    uid:    0    event type: 0    event filter: 0    process event type 0
2022-07-22 14:43:57.867800+0200 0x20e1     Default     0x0                  336    0    CbOsxSensorService: Received at daemon:     event type 1    path:  /usr/libexec/sharingd    pid:    676    ppid:   1    timestamp:  133027236580000000    exit:   116444736000000000    uid:    501    event type: 0    event filter: 0    process event type 0
2022-07-22 14:43:57.870954+0200 0x20e0     Default     0x0                  336    0    CbOsxSensorService: Received at daemon:     event type 1    path:  /usr/libexec/rapportd    pid:    600    ppid:   1    timestamp:  133027236560000000    exit:   116444736000000000    uid:    501    event type: 0    event filter: 0    process event type 0
2022-07-22 14:43:57.875484+0200 0x20e0     Default     0x0                  336    0    CbOsxSensorService: Received at daemon:     event type 1    path:  /System/Library/PrivateFrameworks/WirelessDiagnostics.framework/Support/awdd    pid:    451    ppid:   1    timestamp:  133027236520000000    exit:   116444736000000000    uid:    0    event type: 0    event filter: 0    process event type 0
2022-07-22 14:43:57.877046+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService: Received at daemon:     event type 1    path:  /usr/libexec/locationd    pid:    351    ppid:   1    timestamp:  133027236510000000    exit:   116444736000000000    uid:    205    event type: 0    event filter: 0    process event type 0
2022-07-22 14:44:00.614814+0200 0x474f8e   Default     0x184a3a             487    0    searchpartyd: (CoreLocation) [com.apple.locationd.Core:Client] {"msg":"CLClientIsLocationServicesEnabled", "event":"activity"}
```

Turning off Bluetooth (well, removed "Bluetooth PAN" from Networks preferences pane) did not work:

```
Fri Jul 22 14:53:21.940 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <25>, Clamshell Mode <0>
Fri Jul 22 14:53:21.940 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 14:53:21.940
Fri Jul 22 14:53:23.597 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 14:53:23.700 Assoc: <airport[70292]> <en0> REACHABILITY [reachable=no, ipv4Primary=yes, ipv6Primary=yes]
```

Corroboration:

```
2022-07-22 14:53:21.417196+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Passively scanning for devices of types: 2 18 (Window: 30/Interval: 300)
2022-07-22 14:53:21.417306+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] About to scan for type: 18 - rssi: -100 - range: 0 - payload: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - mask: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - peers: 0, bundleID: (null)
2022-07-22 14:53:21.417402+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] About to scan for type: 2 - rssi: -90 - range: 0 - payload: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - mask: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - peers: 0, bundleID: <private>
2022-07-22 14:53:21.417567+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Scan options changed: 1
2022-07-22 14:53:21.417979+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Start scanning for process sharingd (676) with scan request of type 15, blob: {length = 0, bytes = 0x}, mask {length = 0, bytes = 0x}, active: 0, duplicates: 1, screen on: 300, screen off: 966, locked: 1,  rssi: -70, peers: (
2022-07-22 14:53:21.418065+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Adding scan request called
2022-07-22 14:53:21.418205+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Adding scan request scan request of type 15, blob: {length = 22, bytes = 0x00000000000000000000000000000000000000000000}, mask {length = 22, bytes = 0x00000000000000000000000000000000000000000000}, active: 0, duplicates: 1, screen on: 300, screen off: 966, locked: 1,  rssi: -70, peers: (
2022-07-22 14:53:21.418350+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Passively scanning for devices of types: 2 15 18 (Window: 30/Interval: 300)
2022-07-22 14:53:21.418396+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] About to scan for type: 18 - rssi: -100 - range: 0 - payload: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - mask: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - peers: 0, bundleID: (null)
2022-07-22 14:53:21.418517+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] About to scan for type: 2 - rssi: -90 - range: 0 - payload: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - mask: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - peers: 0, bundleID: <private>
2022-07-22 14:53:21.418613+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] About to scan for type: 15 - rssi: -70 - range: 0 - payload: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - mask: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - peers: 0, bundleID: <private>
2022-07-22 14:53:21.418736+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Scan options changed: 1
2022-07-22 14:53:21.967129+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 14:53:21.967167+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 14:53:23.700731+0200 0x476897   Default     0x18681d             487    0    searchpartyd: (CoreLocation) [com.apple.locationd.Core:Client] {"msg":"CLClientIsLocationServicesEnabled", "event":"activity"}
```

_Actually_ turning it off is going to be problematic (due to headphones + Trackpad), but we test it anyway:

```
2022-07-22 14:53:21.417196+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Passively scanning for devices of types: 2 18 (Window: 30/Interval: 300)
2022-07-22 14:53:21.417306+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] About to scan for type: 18 - rssi: -100 - range: 0 - payload: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - mask: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - peers: 0, bundleID: (null)
2022-07-22 14:53:21.417402+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] About to scan for type: 2 - rssi: -90 - range: 0 - payload: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - mask: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - peers: 0, bundleID: <private>
2022-07-22 14:53:21.417567+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Scan options changed: 1
2022-07-22 14:53:21.417979+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Start scanning for process sharingd (676) with scan request of type 15, blob: {length = 0, bytes = 0x}, mask {length = 0, bytes = 0x}, active: 0, duplicates: 1, screen on: 300, screen off: 966, locked: 1,  rssi: -70, peers: (
2022-07-22 14:53:21.418065+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Adding scan request called
2022-07-22 14:53:21.418205+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Adding scan request scan request of type 15, blob: {length = 22, bytes = 0x00000000000000000000000000000000000000000000}, mask {length = 22, bytes = 0x00000000000000000000000000000000000000000000}, active: 0, duplicates: 1, screen on: 300, screen off: 966, locked: 1,  rssi: -70, peers: (
2022-07-22 14:53:21.418350+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Passively scanning for devices of types: 2 15 18 (Window: 30/Interval: 300)
2022-07-22 14:53:21.418396+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] About to scan for type: 18 - rssi: -100 - range: 0 - payload: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - mask: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - peers: 0, bundleID: (null)
2022-07-22 14:53:21.418517+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] About to scan for type: 2 - rssi: -90 - range: 0 - payload: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - mask: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - peers: 0, bundleID: <private>
2022-07-22 14:53:21.418613+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] About to scan for type: 15 - rssi: -70 - range: 0 - payload: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - mask: {length = 22, bytes = 0x00000000000000000000000000000000000000000000} - peers: 0, bundleID: <private>
2022-07-22 14:53:21.418736+0200 0x476130   Default     0x0                  366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Scan options changed: 1
2022-07-22 14:53:21.967129+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 14:53:21.967167+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 14:53:23.700731+0200 0x476897   Default     0x18681d             487    0    searchpartyd: (CoreLocation) [com.apple.locationd.Core:Client] {"msg":"CLClientIsLocationServicesEnabled", "event":"activity"}
```

Even with Bluetooth off, WiFi logs show a bunch of Bluetooth-related messages (albeit, one of them at least says `BT: OFF`):

```
Fri Jul 22 14:58:21.949 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 14:58:21.950 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: OFF, Num HID Devices is <0>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <0>, LWM <5>, HWM <26>
Fri Jul 22 14:58:21.950 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <0>, Clamshell Mode <0>
Fri Jul 22 14:58:21.950 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
```

This, too, failed:

```
Fri Jul 22 15:02:21.952 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: OFF, Num HID Devices is <0>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <0>, LWM <5>, HWM <26>
Fri Jul 22 15:02:21.953 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <0>, Clamshell Mode <0>
Fri Jul 22 15:02:21.953 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 15:02:21.953
Fri Jul 22 15:02:25.216 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 15:02:27.089 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 15:02:27.089 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: OFF, Num HID Devices is <0>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <0>, LWM <5>, HWM <26>
Fri Jul 22 15:02:27.090 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <0>, Clamshell Mode <0>
Fri Jul 22 15:02:27.090 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 15:02:27.090
Fri Jul 22 15:02:27.699 Assoc: <airport[70292]> <en0> REACHABILITY [reachable=no, ipv4Primary=yes, ipv6Primary=yes]
```

Corroboration:

```
2022-07-22 15:02:24.908706+0200 0x20e0     Default     0x0                  336    0    CbOsxSensorService: Received at daemon:     event type 1    path:  /usr/sbin/WirelessRadioManagerd    pid:    70293    ppid:   1    timestamp:  133029631320000000    exit:   116444736000000000    uid:    0    event type: 0    event filter: 0    process event type 0
2022-07-22 15:02:24.937382+0200 0x20e1     Default     0x0                  336    0    CbOsxSensorService: Received at daemon:     event type 1    path:  /usr/libexec/sharingd    pid:    676    ppid:   1    timestamp:  133027236580000000    exit:   116444736000000000    uid:    501    event type: 0    event filter: 0    process event type 0
2022-07-22 15:02:24.941176+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService: Received at daemon:     event type 1    path:  /usr/libexec/rapportd    pid:    600    ppid:   1    timestamp:  133027236560000000    exit:   116444736000000000    uid:    501    event type: 0    event filter: 0    process event type 0
2022-07-22 15:02:24.944186+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService: Received at daemon:     event type 1    path:  /System/Library/PrivateFrameworks/WirelessDiagnostics.framework/Support/awdd    pid:    451    ppid:   1    timestamp:  133027236520000000    exit:   116444736000000000    uid:    0    event type: 0    event filter: 0    process event type 0
2022-07-22 15:02:24.945565+0200 0x20e0     Default     0x0                  336    0    CbOsxSensorService: Received at daemon:     event type 1    path:  /usr/libexec/locationd    pid:    351    ppid:   1    timestamp:  133027236510000000    exit:   116444736000000000    uid:    205    event type: 0    event filter: 0    process event type 0
2022-07-22 15:02:27.165787+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 15:02:27.165871+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 15:02:27.701022+0200 0x4780fd   Default     0x1872fe             487    0    searchpartyd: (CoreLocation) [com.apple.locationd.Core:Client] {"msg":"CLClientIsLocationServicesEnabled", "event":"activity"}
```

Now comparing what I see in the logs when docked. Not sure what logs I could include here as I'm looking for a negative result... Really, nothing much happens other than this (perhaps only this):

```
Fri Jul 22 15:14:22.130 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 15:14:27.141 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 15:14:28.199 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 15:14:28.199 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: OFF, Num HID Devices is <0>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <0>, LWM <5>, HWM <26>
Fri Jul 22 15:14:28.200 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <0>, Clamshell Mode <0>
Fri Jul 22 15:14:28.200 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 15:14:28.200
Fri Jul 22 15:14:32.153 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 15:14:33.199 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 15:14:33.199 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: OFF, Num HID Devices is <0>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <0>, LWM <5>, HWM <26>
Fri Jul 22 15:14:33.199 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <0>, Clamshell Mode <0>
Fri Jul 22 15:14:33.200 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 15:14:33.200
Fri Jul 22 15:14:37.165 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 15:14:38.199 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 15:14:38.199 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: OFF, Num HID Devices is <0>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <0>, LWM <5>, HWM <26>
Fri Jul 22 15:14:38.199 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <0>, Clamshell Mode <0>
Fri Jul 22 15:14:38.199 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
```

`log stream` shows lots of Carbon Black stuff:

```
2022-07-22 15:17:52.029552+0200 0x20e0     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
```

Those happen roughly every 5 seconds, and correspond to these messages in the mentioned log file:

```
07/22/22 15:19:52.004 [70293] <COEX_Public>: BT powerState(0 -> 0) SCO (0 -> 0) A2DP (0 -> 0) HID (0 -> 0), BT Antenna desensed(0 -> 0)
07/22/22 15:19:52.004 [70293] <COEX_Trace>: just returns with no change occurred
```

So, undocking again to see if that sheds any light (3:20 PM).

```
07/22/22 15:21:01.365 [70293] <COEX_Trace>: Received Clamshell notifcation callback
```

Doesn't seem related.

```
Fri Jul 22 15:25:33.197
Fri Jul 22 15:25:33.795 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 15:25:38.197 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 15:25:38.198 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: OFF, Num HID Devices is <0>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <0>, LWM <5>, HWM <26>
Fri Jul 22 15:25:38.198 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <0>, Clamshell Mode <0>
Fri Jul 22 15:25:38.198 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 15:25:38.199
Fri Jul 22 15:25:38.807 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 15:25:43.195 BTC: <airport[70292]> BluetoothCoexStatusMonitoringCallback: Bluetooth Status Notification
Fri Jul 22 15:25:43.195 BTC: <airport[70292]> BluetoothCoexStatusNotificationProcess: BT: OFF, Num HID Devices is <0>, Num SCO Devices is <0>, Num A2DP Devices is <0>, Bluetooth Bandwidth Utilization is <0>, LWM <5>, HWM <26>
Fri Jul 22 15:25:43.195 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: <en0> Handle Bluetooth Coex: FrequencyBand <0>, Bluetooth Bandwidth Utilization <0>, Clamshell Mode <0>
Fri Jul 22 15:25:43.196 BTC: <airport[70292]> __BluetoothCoexHandleUpdateForNode: Driver supports APPLE80211_CAP_COEX_PROFILE_OFFLOAD. Airportd won't BluetoothCoexModeSet() and defer coex profile loading to UDM coex manager (UCM/WRM) ...
Fri Jul 22 15:25:43.196
Fri Jul 22 15:25:43.819 Driver Event: <airport[70292]> _bsd_80211_event_callback: APPLE80211_M_RSSI_CHANGED (en0)
Fri Jul 22 15:25:45.695 Assoc: <airport[70292]> <en0> REACHABILITY [reachable=no, ipv4Primary=yes, ipv6Primary=yes]
```

and in the `log stream`:

```
2022-07-22 15:25:28.001389+0200 0x47c549   Default     0x18ccf4             598    0    routined: (CoreLocation) [com.apple.locationd.Core:Client] {"msg":"CLLocationManager", "event":"activity", "_cmd":"desiredAccuracy", "self":"0x158e14030"}
2022-07-22 15:25:28.002422+0200 0x47c549   Default     0x18ccf5             598    0    routined: (CoreLocation) [com.apple.locationd.Core:Client] {"msg":"CLLocationManager", "event":"activity", "_cmd":"stopUpdatingLocation", "self":"0x158e14030"}
2022-07-22 15:25:28.002503+0200 0x47c549   Default     0x18ccf5             598    0    routined: (CoreLocation) [com.apple.locationd.Core:Core] {"msg":"state transition", "event":"state_transition", "state":"LocationManager", "id":"0x158e14030", "property":"updatingLocation", "old":1, "new":0}
2022-07-22 15:25:28.003936+0200 0x47c549   Default     0x18ccf7             598    0    routined: (CoreLocation) [com.apple.locationd.Core:Client] {"msg":"CLClientIsLocationServicesEnabled", "event":"activity"}
2022-07-22 15:25:28.004911+0200 0x47c573   Activity    0x18b908             351    0    locationd: CL: Incoming message
2022-07-22 15:25:28.004991+0200 0x47c573   Default     0x18b908             351    0    locationd: [com.apple.locationd.Core:Client] {"msg":"Incoming message", "event":"activity", "name":"kCLConnectionMessageLocation", "this":"0x14105d8a0", "registrationReceived":1, "isRegistrationless":0}
2022-07-22 15:25:28.005316+0200 0x47c573   Default     0x18b908             351    0    locationd: [com.apple.locationd.Core:Client] client '/System/Library/LocationBundles/Routine.bundle' unsubscribing from location
2022-07-22 15:25:28.005372+0200 0x47c573   Default     0x18b908             351    0    locationd: [com.apple.locationd.Position:GeneralCLX] @ClxClient, unsubscribe, /System/Library/LocationBundles/Routine.bundle
2022-07-22 15:25:28.198351+0200 0x20e0     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 15:25:28.198644+0200 0x20e0     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 15:25:33.209771+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 15:25:33.209940+0200 0x1fc2     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 15:25:38.235453+0200 0x20e0     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 15:25:38.235647+0200 0x20e0     Default     0x0                  336    0    CbOsxSensorService:     event type 5    filepath:  /private/var/root/Library/Logs/WirelessRadioManager/WirelessRadioManager.log    pid:    70293    base address: 0
2022-07-22 15:25:45.700488+0200 0x47bc63   Default     0x1884ff             487    0    searchpartyd: (CoreLocation) [com.apple.locationd.Core:Client] {"msg":"CLClientIsLocationServicesEnabled", "event":"activity"}
2022-07-22 15:25:45.706959+0200 0x47c529   Default     0x18cd41             366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] WPDSearchPartyAgent beaconManager state changed to YES
2022-07-22 15:25:45.707038+0200 0x47c54b   Default     0x18cd41             366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] ObjectDiscovery Start advertising for process bluetoothd (366) of type 18 with advertising interval 3200 (2000.00 ms)
2022-07-22 15:25:45.707073+0200 0x47c54b   Default     0x18cd41             366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] ObjectDiscovery updated advertising options: <private>
2022-07-22 15:25:45.707119+0200 0x47c54b   Default     0x18cd41             366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] ObjectDiscovery advertising data has changed: YES
2022-07-22 15:25:45.707185+0200 0x47c54b   Error       0x18cd41             366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] ObjectDiscovery -[WPDObjectDiscoveryManager updateAdvertiser] updated with error: Trying to update advertiser but peripheral manager isn't powered on
2022-07-22 15:25:45.707246+0200 0x47c54b   Error       0x18cd41             366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] Trying to update advertiser but peripheral manager isn't powered on
2022-07-22 15:25:45.707319+0200 0x47c54b   Error       0x18cd41             366    0    bluetoothd: (WPDaemon) [com.apple.bluetooth:WirelessProximity] ObjectDiscovery Advertising failed to start with error: Error Domain=WPErrorDomain Code=26 "Trying to update advertiser but peripheral manager isn't powered on" UserInfo={NSLocalizedDescription=Trying to update advertiser but peripheral manager isn't powered on}
```

Carbon Black error log (under `/private/var/lib/cb`):

```
W0722 15:25:32.163869 1811689472 DnsCache.cpp:90] LookupNameFromIp: DnsCache could not find name for IP[(IPv6) 2a00:1450:4003:80c::2003]
W0722 15:25:32.163967 1811689472 sensor_network_event_monitor.cpp:1091] LookupNameByIpFromProcessDnsCache: Unable to locate dns cache for pid[1171], ip[(IPv6) 2a00:1450:4003:80c::2003], system cache also had no entry.
E0722 15:26:37.398607 1812262912 sensor_service_comm_wrappers.cpp:1954] check-in failed -- error code received from Server: 80c80006
E0722 15:27:06.750054 1812262912 sensor_service_comm_wrappers.cpp:1954] check-in failed -- error code received from Server: 80c80006
W0722 15:27:33.647924 1810542592 optimistic_uploader.cpp:125] Comm error in reserve capacity result: 0x80cb0036
W0722 15:28:03.721377 1810542592 optimistic_uploader.cpp:125] Comm error in reserve capacity result: 0x80cb0036
E0722 15:28:06.822163 1812262912 sensor_service_comm_wrappers.cpp:1954] check-in failed -- error code received from Server: 80c80006
W0722 15:28:33.763022 1810542592 optimistic_uploader.cpp:125] Comm error in reserve capacity result: 0x80cb0036
```

Seeing if I can rule out Carbon Black by sending it `SIGSTOP` and monitoring for a while.

```
ps auxww | grep CbOsxSensorService # see there's only one match
kill -STOP <pid> # at around 15:35
kill -CONT <pid> # at end of test, around 15:40
```

It wasn't Carbon Black, so no smoking gun. (At least, it wasn't the sensor process; although there are other processes.)

Remaining things to try:

- Turn off Location Services (wholesale); this can't remain like that due to corporate policy, but I can do a test at least.
- Turn off auto-joining (require admin to make changes too).
- Do WiFi log analysis on personal laptop, for comparison.

## Final "resolution"

This is immensely unsatisfying, but I did "resolve" the issue in the end without really understanding the root cause. I did this by deleting some preference files and rebooting.

These are the files I got rid of:

- `/Library/Preferences/SystemConfiguration/NetworkInterfaces.plist`
- `/Library/Preferences/SystemConfiguration/com.apple.airport.preferences.plist`
- `/Library/Preferences/SystemConfiguration/com.apple.wifi.message-tracer.plist`
- `/Library/Preferences/SystemConfiguration/preferences.plist`

I even did a textual diff to see what changed between those files and the new files created by the operating system; while there was some churn, nothing in there looked overtly suspicious (and it's a corporate machine so I don't want to post the actual diffs here in case I inadvertently disclose something sensitive), so I might never know what the root cause really was.

# Appendix

Other tools:

- `networkQuality -s`
