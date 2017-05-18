---
tags: iptables firewall wiki
cache_breaker: 1
---

# See

-   Official site: <http://www.netfilter.org/projects/iptables/index.html>
-   Official [RHEL](/wiki/RHEL) 5 documentation on [IPTables](/wiki/IPTables): <http://www.redhat.com/docs/manuals/enterprise/RHEL-5-manual/Deployment_Guide-en-US/ch-iptables.html>
-   Tutorials:
    -   "Simple Firewall Configuration Using NetFilter/iptables": <http://www.novell.com/coolsolutions/feature/18139.html>
    -   "How To Set Up A Debian Linux Firewall": <http://www.aboutdebian.com/firewall.htm>
    -   <http://www.cyberciti.biz/faq/howto-rhel-linux-open-port-using-iptables/>
-   Example configs:
    -   <http://www.avforums.com/forums/linux/733858-iptables-common-port-settings.html>
    -   <http://forums.devshed.com/security-and-cryptography-17/iptables-block-mysql-port-to-everybody-but-just-one-ip-182005.html>
-   Some random firewall article found on the web: <http://www.linuxtopia.org/online_books/rhel5/rhel5_administration/rhel5_ch-fw.html>

# Default [RHEL](/wiki/RHEL) ruleset

Explained [here](http://www.sns.ias.edu/~jns/wp/2006/02/09/confusing-rules-in-the-default-iptables-configuration-under-fedora-and-redhat-enterprise-linux/) and [here](http://www.cyberciti.biz/faq/centos-linux-ipsec-firewall-rules/):

    # Firewall configuration written by system-config-securitylevel
    # Manual customization of this file is not recommended.
    *filter
    :INPUT ACCEPT [0:0]
    :FORWARD ACCEPT [0:0]
    :OUTPUT ACCEPT [0:0]
    :RH-Firewall-1-INPUT - [0:0]
    -A INPUT -j RH-Firewall-1-INPUT
    -A FORWARD -j RH-Firewall-1-INPUT
    -A RH-Firewall-1-INPUT -i lo -j ACCEPT
    -A RH-Firewall-1-INPUT -p icmp --icmp-type any -j ACCEPT
    -A RH-Firewall-1-INPUT -p 50 -j ACCEPT
    -A RH-Firewall-1-INPUT -p 51 -j ACCEPT
    -A RH-Firewall-1-INPUT -p udp --dport 5353 -d 224.0.0.251 -j ACCEPT
    -A RH-Firewall-1-INPUT -p udp -m udp --dport 631 -j ACCEPT
    -A RH-Firewall-1-INPUT -p tcp -m tcp --dport 631 -j ACCEPT
    -A RH-Firewall-1-INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
    -A RH-Firewall-1-INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
    -A RH-Firewall-1-INPUT -j REJECT --reject-with icmp-host-prohibited
    COMMIT

In short:

-   all inbound packets on the loopback interface are accepted
-   all ICMP (ping) traffic is accepted
-   ports 50 and 51 are related to IPSec and are accepted:

<!-- -->

    esp     50      IPSEC-ESP       # Encap Security Payload [RFC2406]
    ah      51      IPSEC-AH        # Authentication Header [RFC2402]

-   port 5353 is Apple's Digital Audio Access Protocol (DAAP) and is accepted
-   port 631 is for CUPS, the "Common UNIX Print System":

<!-- -->

    ipp             631/tcp                         # Internet Printing Protocol
    ipp             631/udp                         # Internet Printing Protocol

-   packets pertaining or related to established connections are accepted
-   inbound connections to port 22 (SSH) are accepted
-   everything else is rejected

# Related articles in this [wiki](/wiki)

-   [Using at to safely try out iptables configuration changes](/wiki/Using_at_to_safely_try_out_iptables_configuration_changes)
