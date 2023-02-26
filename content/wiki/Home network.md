---
tags: wiki
title: Home network
---

- Overall topology:
  - Fiber → ISP modem → ISP router
  - Wired connections from ISP router to:
    - Apple TV
    - Google (Nest) WiFi router(`living-room`)
  - Wired connections from Google WiFi (`living-room`) to:
    - D-Link Hub
  - Wired connections from D-Link Hub to:
    - Google (Nest) WiFi point (`master-bedroom`)
    - Two other bedrooms (inactive)
- ISP router:
  - IPv4 `192.168.1.1`, IPv6 `fe80::1` (MAC[^MAC] `e0:19:54:5d:d1:b0`)
  - Subnet mask: `255.255.255.0`
  - DNS `192.168.86.1`
  - DHCP range: `192.168.1.128` → `192.168.1.254`
  - SSID1 (2.4GHz, channel `2`): `DIGIFIBRA-Xz3f` (MAC `e0:19:54:5d:d1:b0`)
  - SSID5 (5GHz, channel `60`): `DIGIFIBRA-PLUS-Xz3f` (MAC `e0:19:54:5d:d1:b1`)
    - WiFi clients:
      - Edurnes-MBP (IPv4 `192.168.1.129`[^dhcp], MAC `dc:a9:04:85:1a:ac`)
      - quevedo (work laptop, IPv4 `192.168.1.132`, MAC `a0:78:17:9e:71:bd`)
      - retiro (personal laptop, IPv4 `192.168.1.133`, MAC `ac:bc:32:a9:85:cf`)
      - iPhone (IPv4 `192.168.1.130`, MAC `72:68:d7:fb:0e:00`)
  - Ethernet peers:
    - Apple TV (IPv4 `192.168.1.128`, MAC `1c:f2:9a:eb:2f:cd`)
    - Google WiFi (`living-room`, IPv4 `192.168.1.139`, IPv6 `fe80::e6:197f:db73:8666`, MAC `90:dd:5d:b7:9f:a2`)
- Google WiFi router:
  - IPv4 `192.168.86.1`
  - Subnet mask: `255.255.255.0`
  - DNS `192.168.86.1`
  - WiFi clients:
    - quevedo (work laptop, IPv4 `192.168.86.235`, MAC `a0:78:17:9e:71:bd`)
    - retiro (personal laptop, IPv4 `192.168.86.236`, MAC `ac:bc:32:a9:85:cf`)

[^dhcp]: Obviously, DHCP-assigned addresses are subject to change, although I have set up DHCP binding for the MAC addresses where possible (ie. on the ISP router).
[^MAC]: ["Is it dangerous to post my MAC address publicly?"](https://security.stackexchange.com/a/67896/151988)
