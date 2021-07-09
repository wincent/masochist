---
tags: wiki wifi
title: Listing wifi networks from the command-line
---

```bash
/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -s
```

Sample output:

```
              SSID BSSID             RSSI CHANNEL HT CC SECURITY (auth/unicast/group)
      MiFibra-0174 86:6a:b0:1c:01:77 -87  112     Y  ES WPA2(PSK/AES/AES)
     MOVISTAR_47EE c6:d4:a1:1f:47:f7 -81  52      Y  ES WPA2(PSK/AES/AES)
MOVISTAR_PLUS_47EE cc:d4:a1:1f:47:f7 -80  52      Y  ES WPA2(PSK/AES/AES)
     MOVISTAR_8890 e4:ab:89:1c:88:91 -78  10      Y  -- WPA2(PSK/AES/AES)
MOVISTAR_PLUS_1F55 b0:ea:bc:45:1f:63 -76  36      Y  ES WPA2(PSK/AES/AES)
     MOVISTAR_1F55 a6:ea:bc:45:1f:63 -76  36      Y  ES WPA2(PSK/AES/AES)
         WLAN_7664 e2:41:36:5c:de:10 -71  11      Y  -- WPA2(PSK/AES/AES)
  TP-Link_Extender 98:da:c4:9a:12:96 -70  11      Y  DE WPA(PSK/TKIP,AES/TKIP) WPA2(PSK/TKIP,AES/TKIP)
     MOVISTAR_47EE cc:d4:a1:1f:47:ef -67  11      Y  -- WPA2(PSK/AES/AES)
               SYX e6:3e:d7:a4:d1:09 -67  112     Y  ES WPA2(PSK/AES/AES)
           SYX -5G ee:3e:d7:a4:d1:09 -67  112     Y  ES WPA2(PSK/AES/AES)
       Orange-249C e4:3e:d7:f0:24:9e -64  11      Y  ES WPA2(PSK/AES/AES)
               SYX e4:3e:d7:a4:d1:08 -53  1       Y  ES WPA2(PSK/AES/AES)
           SYX-24G 72:3e:d7:a4:d1:0a -52  1       Y  ES WPA2(PSK/AES/AES)
     MOVISTAR_DA4D 86:aa:9c:33:da:56 -48  44      Y  ES WPA2(PSK/AES/AES)
MOVISTAR_PLUS_DA4D 84:aa:9c:33:da:56 -48  44      Y  ES WPA2(PSK/AES/AES)
```
