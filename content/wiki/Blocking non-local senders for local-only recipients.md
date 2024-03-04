---
tags: email sendmail wiki
title: Blocking non-local senders for local-only recipients
---

The → symbol (right-pointing arrow) is used to indicate a tab:

    LOCAL_CONFIG
    F{Internal}/etc/mail/internal.only
    LOCAL_RULESETS
    SLocal_check_rcpt
    R$*                      →$: <@> $>canonify $1
    R<@> $={Internal}<@$=w.> →$: <$1@$2>
    R<@> $={Internal}        →$: <$1@$j>
    R<@>$+                   →$@ OK
    R$*                      →$: $&{client_name}
    R$@                      →$@ OK
    R$*$=w                   →$@ OK
    R$*                      →$#error $@ 5.7.1 $: 551 $&f not allowed to send to recipient

See [combining rulesets](/wiki/combining_rulesets) for an example combining the functionality of this ruleset with another.

# Efficacy

The following is a [LogWatch](/wiki/LogWatch) sample taken from the [wincent.com](/wiki/wincent.com) mail server during a 24 hour period in early July 2006 showing that the custom ruleset blocked approximately 178 incoming messages. A couple of the domain names in the report have been changed to [example.com](/wiki/example.com) to protect the innocent.

    Internal users (denied):

        mail@example.com
          from [218.79.81.44]    1 time(s).
          from [58.49.252.42]    1 time(s).

        uucp@example.com
          from 136.142.180.60.broad.wz.zj.dynamic.cndata.com [60.180.142.136]    1 time(s).
          from 141.27.97-84.rev.gaoland.net [84.97.27.141]    1 time(s).
          from 201-27-179-78.dsl.telesp.net.br [201.27.179.78]    1 time(s).
          from 201-36-3-48.intelignet.com.br [201.36.3.48] (may be forged)    1 time(s).
          from 218-166-108-81.dynamic.hinet.net [218.166.108.81]    1 time(s).
          from 247.Red-83-56-186.dynamicIP.rima-tde.net [83.56.186.247]    1 time(s).
          from 34.Red-83-54-210.dynamicIP.rima-tde.net [83.54.210.34]    1 time(s).
          from 70.Red-88-8-77.dynamicIP.rima-tde.net [88.8.77.70]    1 time(s).
          from 80-195-209-192.cable.ubr14.live.blueyonder.co.uk [80.195.209.192]    1 time(s).
          from 80-219-219-60.dclient.hispeed.ch [80.219.219.60]    1 time(s).
          from 81-202-161-178.user.ono.com [81.202.161.178]    1 time(s).
          from 82-36-129-8.cable.ubr01.perr.blueyonder.co.uk [82.36.129.8]    1 time(s).
          from 82-36-130-56.cable.ubr01.perr.blueyonder.co.uk [82.36.130.56]    1 time(s).
          from 82-42-153-19.cable.ubr10.live.blueyonder.co.uk [82.42.153.19]    1 time(s).
          from 82-45-184-233.cable.ubr03.enfi.blueyonder.co.uk [82.45.184.233]    1 time(s).
          from 85-210-173-59.dsl.pipex.com [85.210.173.59]    1 time(s).
          from 85-250-201-226.bb.netvision.net.il [85.250.201.226]    1 time(s).
          from 88-111-172-134.dynamic.dsl.as9105.com [88.111.172.134]    1 time(s).
          from FNAfa-03p1-17.ppp11.odn.ad.jp [61.196.50.17]    1 time(s).
          from S01060008a15f086e.va.shawcable.net [70.69.178.241]    1 time(s).
          from SDDfi-01p2-124.ppp11.odn.ad.jp [211.121.225.124]    1 time(s).
          from [125.137.60.98]    1 time(s).
          from [125.188.133.51]    1 time(s).
          from [200.113.176.169]    1 time(s).
          from [201.37.247.202]    1 time(s).
          from [211.63.204.187]    1 time(s).
          from [218.14.43.185]    1 time(s).
          from [218.190.43.200]    1 time(s).
          from [218.191.177.121]    1 time(s).
          from [218.191.208.153]    1 time(s).
          from [218.59.204.118]    1 time(s).
          from [218.64.115.210]    1 time(s).
          from [218.80.129.185]    1 time(s).
          from [219.136.174.200]    1 time(s).
          from [220.170.158.24]    1 time(s).
          from [220.248.116.11]    1 time(s).
          from [220.83.37.214]    1 time(s).
          from [220.88.179.183]    1 time(s).
          from [221.125.6.114]    1 time(s).
          from [221.145.69.121]    1 time(s).
          from [221.148.55.123]    1 time(s).
          from [221.159.186.81]    1 time(s).
          from [221.165.134.95]    1 time(s).
          from [221.165.54.46]    1 time(s).
          from [221.233.19.159]    1 time(s).
          from [222.115.106.15]    1 time(s).
          from [59.10.159.153]    1 time(s).
          from [59.12.27.126]    1 time(s).
          from [59.25.15.201]    1 time(s).
          from [59.8.164.229]    1 time(s).
          from [59.83.39.200]    1 time(s).
          from [60.0.89.180]    1 time(s).
          from [61.172.232.243]    1 time(s).
          from [61.186.90.79]    1 time(s).
          from [61.84.25.193]    1 time(s).
          from [61.85.167.187]    1 time(s).
          from [89.34.216.74]    1 time(s).
          from chello213047187019.tirol.surfer.at [213.47.187.19] (may be forged)    1 time(s).
          from cm102-132.liwest.at [212.241.102.132]    1 time(s).
          from dau94-1-82-231-5-97.fbx.proxad.net [82.231.5.97]    1 time(s).
          from dhcp25-98.cable.conwaycorp.net [24.144.25.98] (may be forged)    1 time(s).
          from dhcp53-129.cable.conwaycorp.net [24.144.53.129] (may be forged)    1 time(s).
          from did75-15-88-160-184-79.fbx.proxad.net [88.160.184.79]    1 time(s).
          from dsl-KK-dynamic-013.4.22.125.airtelbroadband.in [125.22.4.13] (may be forged)    1 time(s).
          from dslb-084-057-193-144.pools.arcor-ip.net [84.57.193.144]    1 time(s).
          from dslb-088-064-225-113.pools.arcor-ip.net [88.64.225.113]    1 time(s).
          from dslb-088-070-004-101.pools.arcor-ip.net [88.70.4.101]    1 time(s).
          from dslb-088-073-069-207.pools.arcor-ip.net [88.73.69.207]    1 time(s).
          from glg95-1-82-233-6-183.fbx.proxad.net [82.233.6.183]    1 time(s).
          from h-66-167-180-186.chcgilgm.dynamic.covad.net [66.167.180.186]    1 time(s).
          from h-66-167-209-43.sndacagl.dynamic.covad.net [66.167.209.43]    1 time(s).
          from h8441154142.dsl.speedlinq.nl [84.41.154.142]    1 time(s).
          from hn.kd.jz.adsl [221.15.201.21] (may be forged)    1 time(s).
          from host-84-9-194-238.bulldogdsl.com [84.9.194.238]    1 time(s).
          from host-87-74-115-251.bulldogdsl.com [87.74.115.251]    1 time(s).
          from host-87-74-84-126.bulldogdsl.com [87.74.84.126]    1 time(s).
          from host108-228.pool8258.interbusiness.it [82.58.228.108]    1 time(s).
          from host190-100.pool876.interbusiness.it [87.6.100.190]    1 time(s).
          from host239-23.pool8259.interbusiness.it [82.59.23.239]    1 time(s).
          from host81-129-200-203.range81-129.btcentralplus.com [81.129.200.203]    1 time(s).
          from host86-142-170-247.range86-142.btcentralplus.com [86.142.170.247]    1 time(s).
          from ipa9.1.tellas.gr [84.254.1.9]    1 time(s).
          from lib59-4-82-239-16-249.fbx.proxad.net [82.239.16.249]    1 time(s).
          from p5006-ipbf401hodogaya.kanagawa.ocn.ne.jp [125.174.253.6]    1 time(s).
          from p549FE8F2.dip.t-dialin.net [84.159.232.242]    1 time(s).
          from pil59-1-82-226-110-177.fbx.proxad.net [82.226.110.177]    1 time(s).
          from r-202-142-229-193.commufa.jp [202.142.229.193]    1 time(s).
          from rch85-1-82-246-168-179.fbx.proxad.net [82.246.168.179]    1 time(s).
          from slo68-1-82-227-87-187.fbx.proxad.net [82.227.87.187]    1 time(s).
          from static-72-67-206-75.lsanca.dsl-w.verizon.net [72.67.206.75]    1 time(s).
          from usr024.pial118-01.wpf.im.wakwak.ne.jp [61.205.252.218]    1 time(s).
          from vev69-1-82-232-216-16.fbx.proxad.net [82.232.216.16]    1 time(s).
          from vig38-2-81-56-112-128.fbx.proxad.net [81.56.112.128]    1 time(s).
          from vit62-1-82-246-244-158.fbx.proxad.net [82.246.244.158]    1 time(s).

For other efficacy statistics see [combatting spam](/wiki/combatting_spam).
