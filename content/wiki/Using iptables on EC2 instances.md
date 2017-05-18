---
tags: firewall ec2 wiki
cache_breaker: 1
---

Most of the time you don't need to worry about using a host-level firewall such as iptables when running Amazon EC2, because Amazon allows you to run instances inside a "security group", which is effectively a firewall policy that you use to specify which connections from the outside world should be allowed to reach the instance.

However, this is a "whitelist" approach, and it is not straightforward to use it for "blacklisting" purposes on a running instance.

# Example scenario

A bot is trying a bruteforce attack, annoyingly driving up the system load and filling your logs with crap like this (dozens of lines per second):

    pop3[22145]: badlogin: fc.df.84ae.static.theplanet.com [174.132.223.252] plaintext branden SASL(-13): authentication failure: checkpass failed

You want to drop all connections from that IP until the attack is over.

## Temporarily blocking a single IP

For this purpose, temporarily turning on the host-level firewall and setting up a rule is probably the simplest way to go.

First up, check the existing rules; by default they will allow all traffic:

```shell
# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination     
```

Now set up a rule to drop all packets from the attacker; you can run `iptables -L` again to see the results:

```shell
# iptables -I INPUT -s 174.132.223.252 -j DROP
# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         
DROP       all  --  fc.df.84ae.static.theplanet.com  anywhere            

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination     
```

See the iptables man page for details on the other kinds of rules you can specify. You can do things like rate-limiting, and matching on specific ports, and a lot of much more complicated variations than just dropping all packets like in the example above.

As iptables probably isn't running (you can check this with `service --status-all`) you'll need to start it:

```shell
# service iptables start
```

Note that it most likely isn't configured to start up at boot either (check with `chkconfig --list`); if you want it to be permanent you'll have to use `chkconfig` to set that up.

Once the attack is over you can drop the rule with `iptables -D INPUT` and the full specification of the rule:

```shell
# iptables -D INPUT -s 174.132.223.252 -j DROP
```

Or by referencing it's rule number (1 in this case):

```shell
# iptables -D INPUT 1
```

## Dynamically detecting attacks

```shell
# iptables -N bansshee
# iptables -A bansshee -p tcp --dport 110 -m state --state NEW -m recent --set --name pop3connect
# iptables -A bansshee -p tcp --dport 110 -m state --state NEW -m recent --rcheck --seconds 60 --hitcount 10 --name pop3connect -j DROP
# iptables -I INPUT -j bansshee
# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
bansshee   all  --  anywhere             anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination

Chain bansshee (1 references)
target     prot opt source               destination
           tcp  --  anywhere             anywhere            tcp dpt:pop3 state NEW recent: SET name: pop3connect side: source
DROP       tcp  --  anywhere             anywhere            tcp dpt:pop3 state NEW recent: CHECK seconds: 60 hit_count: 10 name: pop3connect side: source
```

Basically:

-   Create a custom "bansshee" chain which can easily be added or removed from default INPUT chain
-   Record the IP addresses making any new POP connections in a list named "pop3connect"
-   If any IP address makes more than 10 such new connections in any 60 second period, drop the packets on the floor
-   Insert the "bansshee" chain in the default INPUT chain

### Source

-   <http://pbxinaflash.com/forum/showthread.php?t=5018>

## Making the configuration permanent

```shell
# service iptables save # writes config to /etc/sysconfig/iptables
# chkconfig iptables on
```
