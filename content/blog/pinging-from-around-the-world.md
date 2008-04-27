---
title: Pinging from around the world
tags: net
---

A friend of mine just told me about [just-ping.com](http://just-ping.com/), a free site that will ping any domain name or IP address that you specify from multiple locations around the world. Not sure how scientific or reliable this is, but it can give a general indication of the "reachability" of your site from different places around the globe.

Some sample results follow.

## wincent.com

    location                  result               min. rrt  avg. rrt  max. rrt 
    Vancouver, Canada         Okay                     85.1      85.3      85.6 
    Santa Clara, U.S.A.       Okay                     76.8      83.6     110.2 
    New York, U.S.A.          Okay                     11.8      12.1      12.6 
    Florida, U.S.A.           Okay                     37.0      37.3      37.9 
    Austin2, U.S.A.           Okay                     60.6      60.7      61.1 
    San Francisco, U.S.A.     Okay                     81.1      84.0      85.5 
    Austin, U.S.A.            Okay                     60.0      60.2      60.5 
    Amsterdam3, Netherlands   Okay                     89.4     100.1     108.9 
    London, United Kingdom    Okay                     86.3      86.8      87.3 
    Stockholm, Sweden         Okay                    106.2     109.6     112.7 
    Madrid, Spain             Okay                    111.3     111.7     112.1 
    Sydney, Australia         Okay                    219.8     220.2     221.2 
    Amsterdam, Netherlands    Okay                     93.4      96.7      97.7 
    Cologne, Germany          Okay                    101.1     101.5     101.8 
    Munchen, Germany          Okay                    101.1     101.5     101.8 
    Kraków, Poland            Okay                    125.2     125.6     125.8 
    Lille, France             Okay                     90.1      90.6      91.6 
    Cagliari, Italy           Okay                    128.0     128.3     128.6 
    Copenhagen, Denmark       Okay                    101.0     104.5     107.6 
    Hong Kong, China          Okay                    230.7     244.9     259.2 
    Melbourne, Australia      Okay                    246.8     247.4     248.5 
    Singapore, Singapore      Okay                    261.5     261.7     261.9 
    Amsterdam2, Netherlands   Okay                     89.6      99.8     109.2 
    Porto Alegre, Brazil      Okay                    153.2     159.0     161.9 
    Paris, France             Okay                    107.8     112.2     117.6 
    Shanghai, China           Packets lost (10%)      299.7     300.6     303.4

## Example of a site suffering connectivity problems

    Vancouver, Canada         Packets lost (70%)       65.1      65.5      65.7 
    San Francisco, U.S.A.     Packets lost (40%)       42.6      42.8      43.0 
    Florida, U.S.A.           Packets lost (80%)       26.0      26.1      26.2 
    New York, U.S.A.          Packets lost (70%)       55.4      55.5      55.5 
    Austin2, U.S.A.           Packets lost (60%)        9.6       9.7       9.8 
    Austin, U.S.A.            Packets lost (30%)        9.6       9.7       9.8 
    Santa Clara, U.S.A.       Packets lost (50%)       50.0      82.0     209.1 
    Amsterdam3, Netherlands   Packets lost (40%)      129.2     129.3     129.4 
    Sydney, Australia         Packets lost (90%)      191.9     191.9     191.9 
    Amsterdam2, Netherlands   Packets lost (70%)      129.5     129.6     129.6 
    Amsterdam, Netherlands    Packets lost (80%)      125.8     127.8     129.7 
    Madrid, Spain             Packets lost (90%)      149.6     149.6     149.6 
    Lille, France             Packets lost (30%)      137.0     138.9     142.7 
    Munchen, Germany          Packets lost (60%)      132.0     132.1     132.3 
    Copenhagen, Denmark       Packets lost (50%)      141.8     141.9     142.1 
    Hong Kong, China          Packets lost (70%)      238.9     251.1     257.6 
    Cagliari, Italy           Packets lost (40%)      179.1     186.1     205.5 
    Paris, France             Packets lost (30%)      136.8     139.4     140.6 
    Singapore, Singapore      Packets lost (60%)      232.3     235.3     237.1 
    Shanghai, China           Packets lost (60%)      273.3     273.6     274.0 
    London, United Kingdom    Packets lost (30%)      106.4     106.8     107.1 
    Porto Alegre, Brazil      Packets lost (20%)      165.8     171.5     176.5 
    Stockholm, Sweden         Packets lost (100%)                               
    Cologne, Germany          Packets lost (100%)                               
    Kraków, Poland            Packets lost (90%)      165.9     165.9     165.9 
    Melbourne, Australia      Packets lost (90%)      220.3     220.3     220.3
