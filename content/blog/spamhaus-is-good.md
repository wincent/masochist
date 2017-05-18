---
title: Spamhaus is good
tags: blog
---

[Spamhaus](http://www.spamhaus.org/) is an anti-spam DNS-based blacklisting service. Some people in business advise against using such blacklists on the grounds that they could potentially block legitimate email and thus harm the business.

I don't agree for three reasons:

-   Spam is such a massive problem nowadays that not just private individuals, but businesses also have to take steps to protect themselves
-   Spamhaus is remarkably accurate (see below) and effective
-   It's possible to reject email based on a DNS-based blacklist and include alternative contact information in the bounce message, meaning that people will always have a means of getting in touch regardless of the filter





In the past 24 hours, for example, Spamhaus has shielded me from 479 connection attempts from known spammer IP addresses. That's several hundred messages that would otherwise have passed on to the next line of defense ([blocking non-local senders for local-only recipients](http://www.wincent.com/knowledge-base/Blocking_non-local_senders_for_local-only_recipients), 53 additional messages stopped in the last 24 hours), and the next ([SpamAssassin](http://www.wincent.com/knowledge-base/Combatting_spam)).

So it is effective. But is it accurate? Are there any false positives? A quick look at the logs indicates that a 100% accuracy rate is highly probable. Look at the rejected IP addresses below; many are forged, about a third of them don't even have reverse IP lookups, and the vast majority obviously correspond to home dialup or broadband end users, most likely compromised Windows machines turned into mail-spewing zombies for the benefit of the greedy spammers.

So if it blocks that much spam with such a high accuracy and efficacy rate, and if you can provide an alternative means of contact in the bounce message anyway, the question isn't why would you use Spamhaus but why wouldn't you?

    [121.127.167.153]
    [124.136.42.89]
    [124.28.25.53]
    [125.176.232.97]
    [125.212.117.194]
    [125.212.87.20]
    [193.231.139.172]
    [196.202.25.32]
    [196.202.35.140]
    [200.164.17.148]
    [200.251.244.139]
    [200.28.39.25]
    [200.6.171.83]
    [200.60.205.112]
    [200.91.72.106]
    [201.218.33.174]
    [201.230.254.186]
    [201.250.128.155]
    [201.37.200.38]
    [201.44.146.155]
    [201.65.109.20]
    [201.65.228.250]
    [202.155.128.239]
    [202.53.8.229]
    [202.53.9.199]
    [202.71.140.103]
    [202.83.58.142]
    [202.91.14.139]
    [203.63.158.216]
    [203.81.234.56]
    [203.84.185.114]
    [206.128.209.12]
    [207.250.71.46]
    [208.99.220.134]
    [209.194.72.195]
    [210.18.137.193]
    [210.182.103.235]
    [210.222.22.82]
    [210.4.30.218]
    [211.117.121.205]
    [211.187.207.78]
    [211.195.55.161]
    [211.213.109.136]
    [211.226.225.125]
    [212.175.12.179]
    [218.232.172.37]
    [218.37.247.50]
    [218.54.9.212]
    [218.62.36.11]
    [218.71.141.254]
    [218.75.178.201]
    [218.8.124.37]
    [218.93.120.170]
    [218.95.202.79]
    [219.129.251.162]
    [219.148.143.50]
    [219.151.42.26]
    [219.234.241.217]
    [220.195.236.91]
    [220.81.14.207]
    [220.82.226.202]
    [220.92.159.121]
    [221.139.134.8]
    [221.163.139.99]
    [221.165.193.67]
    [221.165.41.242]
    [221.208.9.184]
    [222.117.71.21]
    [222.136.71.36]
    [222.171.131.58]
    [222.210.42.38]
    [222.253.137.57]
    [222.253.18.53]
    [222.253.94.186]
    [222.40.127.119]
    [24.138.219.23]
    [58.120.6.99]
    [58.142.201.244]
    [58.239.81.45]
    [58.68.73.86]
    [59.5.229.182]
    [59.8.97.74]
    [59.93.129.205]
    [59.93.9.242]
    [59.94.104.31]
    [59.94.40.23]
    [60.195.102.196]
    [60.51.68.7]
    [60.63.254.51]
    [61.133.210.194]
    [61.141.175.187]
    [61.153.236.234]
    [61.177.74.58]
    [61.47.68.200]
    [61.83.104.29]
    [65.103.154.217]
    [68.40.223.232]
    [70.103.190.81]
    [70.151.159.194]
    [71.224.61.127]
    [71.31.210.95]
    [80.50.86.158]
    [80.51.191.54]
    [80.51.83.105]
    [80.65.66.36]
    [81.52.163.11]
    [81.84.180.19]
    [82.160.241.135]
    [84.36.3.81]
    [84.90.85.53]
    [85.101.11.213]
    [85.101.14.73]
    [85.101.61.86]
    [85.103.231.115]
    [86.125.213.146]
    [87.245.149.251]
    [88.224.148.154]
    [88.240.186.87]
    [89.136.118.132]
    113-11-116.adsl.cust.tie.cl [200.113.11.116]
    12-219-13-211.client.mchsi.com [12.219.13.211]
    12-234-138-83.libre.auna.net [83.138.234.12] (may be forged)
    145.120.101-84.rev.gaoland.net [84.101.120.145]
    165.Red-80-38-163.staticIP.rima-tde.net [80.38.163.165]
    167.pool85-59-90.dynamic.uni2.es [85.59.90.167]
    184.Red-83-36-93.dynamicIP.rima-tde.net [83.36.93.184]
    188.147.intelnet.net.gt [216.230.147.188] (may be forged)
    200-11-200-245.genericrev.cantv.net [200.11.200.245] (may be forged)
    200-163-237-003.wln.net.br [200.163.237.3]
    200-168-129-105.dsl.telesp.net.br [200.168.129.105]
    200-171-179-50.dsl.telesp.net.br [200.171.179.50]
    200-207-116-50.speedyterra.com.br [200.207.116.50] (may be forged)
    200-42-44-147.dsl.prima.net.ar [200.42.44.147]
    200.80.176.104.static.techtel.com.ar [200.80.176.104] (may be forged)
    201-10-67-222.cscgo7006.dsl.brasiltelecom.net.br [201.10.67.222] (may be forged)
    201-13-48-177.dsl.telesp.net.br [201.13.48.177]
    201-26-66-155.dsl.telesp.net.br [201.26.66.155]
    201-43-130-217.dsl.telesp.net.br [201.43.130.217]
    201-67-80-142.cpece700.dsl.brasiltelecom.net.br [201.67.80.142] (may be forged)
    201-92-112-67.dsl.telesp.net.br [201.92.112.67]
    20132207207.user.veloxzone.com.br [201.32.207.207]
    20150227108.user.veloxzone.com.br [201.50.227.108]
    20151198223.user.veloxzone.com.br [201.51.198.223]
    203-144-234-126.static.asianet.co.th [203.144.234.126]
    203-73-90-202.adsl.dynamic.seed.net.tw [203.73.90.202]
    216-160-48-104.mpls.qwest.net [216.160.48.104]
    217-133-116-157.b2b.tiscali.it [217.133.116.157]
    219-100.usachoice.net [66.71.219.100]
    220-132-216-26.HINET-IP.hinet.net [220.132.216.26]
    222-157-196-94.cctv.dynamic.lsc.net.tw [222.157.196.94] (may be forged)
    226-230-91-213.btc-net.bg [213.91.230.226] (may be forged)
    24-107-150-122.dhcp.stls.mo.charter.com [24.107.150.122]
    24-182-167-147.dhcp.stls.mo.charter.com [24.182.167.147]
    24-197-115-250.dhcp.spbg.sc.charter.com [24.197.115.250]
    241.Red-88-11-66.dynamicIP.rima-tde.net [88.11.66.241]
    5.Red-88-3-146.dynamicIP.rima-tde.net [88.3.146.5]
    50-123-3.adsl.cust.tie.cl [200.50.123.3]
    52.84-48-169.nextgentel.com [84.48.169.52]
    54.Red-88-7-78.staticIP.rima-tde.net [88.7.78.54]
    58.69.75.214.pldt.net [58.69.75.214] (may be forged)
    59-104-198-222.adsl.dynamic.seed.net.tw [59.104.198.222]
    59-115-181-141.dynamic.hinet.net [59.115.181.141]
    59-115-96-148.dynamic.hinet.net [59.115.96.148]
    61-217-212-213.dynamic.hinet.net [61.217.212.213]
    61-219-105-82.HINET-IP.hinet.net [61.219.105.82]
    61-223-2-221.dynamic.hinet.net [61.223.2.221]
    61-61-237-40.cm.ubbn.net [61.61.237.40]
    61-62-22-54-adsl-tpe.STATIC.so-net.net.tw [61.62.22.54]
    62-101-126-220.ip.fastwebnet.it [62.101.126.220]
    63-229-5-208.tukw.qwest.net [63.229.5.208]
    64-141-93-131.pathcom.ca [64.141.93.131]
    64-60-231-74.static-ip.telepacific.net [64.60.231.74]
    66-168-255-81.static.mtgm.al.charter.com [66.168.255.81]
    66-17-59-3.biz.bkfd.arrival.net [66.17.59.3]
    66-190-202-132.dhcp.thbd.la.charter.com [66.190.202.132]
    66-193-220-225.davidson.k12.nc.us [66.193.220.225] (may be forged)
    66-207-199-2.beanfield.net [66.207.199.2]
    68-112-240-215.dhcp.oxfr.ma.charter.com [68.112.240.215]
    68-113-68-140.dhcp.leds.al.charter.com [68.113.68.140]
    68-184-146-80.dhcp.stbr.ga.charter.com [68.184.146.80]
    69-175-17-128.ashbva.adelphia.net [69.175.17.128]
    71-34-39-20.mpls.qwest.net [71.34.39.20]
    72.Red-83-57-172.dynamicIP.rima-tde.net [83.57.172.72]
    81-202-79-134.user.ono.com [81.202.79.134]
    82-135-136-206.ip.zebra.lt [82.135.136.206]
    82-217-29-162.cable.quicknet.nl [82.217.29.162]
    82-39-35-32.cable.ubr01.benw.blueyonder.co.uk [82.39.35.32]
    83-131-16-90.adsl.net.t-com.hr [83.131.16.90]
    84-107-165-108.dsl.quicknet.nl [84.107.165.108]
    84-72-86-240.dclient.hispeed.ch [84.72.86.240]
    86-104-27-175.dcn.ro [86.104.27.175] (may be forged)
    88-110-102-126.dynamic.dsl.as9105.com [88.110.102.126]
    a213-22-8-228.cpe.netcabo.pt [213.22.8.228]
    adsl-065-081-066-134.sip.ard.bellsouth.net [65.81.66.134]
    adsl-195-82.37-151.net24.it [151.37.82.195]
    ADSL-200-59-107-95.capfed2.uolsinectis.com.ar [200.59.107.95]
    adsl-220-229-82-171.NH.sparqnet.net [220.229.82.171] (may be forged)
    adsl-245-196-192-81.adsl.iam.net.ma [81.192.196.245]
    adsl-59841ebb.monradsl.monornet.hu [89.132.30.187]
    adsl-75-27-90-230.dsl.chcgil.sbcglobal.net [75.27.90.230]
    adsl.hnpt.com.vn [203.210.247.182] (may be forged)
    adsl196-187-89-206-196.adsl196-3.iam.net.ma [196.206.89.187]
    adsl196-249-234-206-196.adsl196-8.iam.net.ma [196.206.234.249]
    ASte-Genev-Bois-152-1-9-21.w82-121.abo.wanadoo.fr [82.121.23.21]
    bl6-182-44.dsl.telepac.pt [82.155.182.44]
    byd170.internetdsl.tpnet.pl [83.19.7.170]
    bzq-88-155-220-237.red.bezeqint.net [88.155.220.237]
    c-24-62-228-45.hsd1.nh.comcast.net [24.62.228.45]
    c-66-176-20-68.hsd1.fl.comcast.net [66.176.20.68]
    c-68-33-48-182.hsd1.dc.comcast.net [68.33.48.182]
    c-68-37-128-166.hsd1.nj.comcast.net [68.37.128.166]
    c-68-40-95-252.hsd1.mi.comcast.net [68.40.95.252]
    c-68-82-206-26.hsd1.pa.comcast.net [68.82.206.26]
    c-71-202-55-215.hsd1.ca.comcast.net [71.202.55.215]
    c9060e7e.virtua.com.br [201.6.14.126]
    c940122a.rib.virtua.com.br [201.64.18.42] (may be forged)
    callocation16.cotilliontaiga.com [81.177.27.204]
    chello084114003180.10.14.vie.surfer.at [84.114.3.180]
    core-vulture-out.telecom.by [213.184.224.3]
    cpc2-rdng2-0-0-cust387.winn.cable.ntl.com [82.21.89.132]
    cpe-069-132-129-206.carolina.res.rr.com [69.132.129.206]
    cpe-071-075-187-041.carolina.res.rr.com [71.75.187.41]
    CPE-155-143-236-41.vic.bigpond.net.au [155.143.236.41]
    cpe-24-165-203-175.midsouth.res.rr.com [24.165.203.175]
    cpe-24-59-83-123.twcny.res.rr.com [24.59.83.123]
    cpe-66-24-7-7.stny.res.rr.com [66.24.7.7]
    cpe-68-203-135-104.houston.res.rr.com [68.203.135.104]
    cpe-70-116-148-67.houston.res.rr.com [70.116.148.67]
    cpe-72-177-226-58.houston.res.rr.com [72.177.226.58]
    data-storage-118.intelligentintensity.com [217.106.237.118]
    data-storage-121.intelligentintensity.com [217.106.237.121]
    data-storage4.scholiastbalkan.com [81.177.27.246]
    data-storage7.scholiastbalkan.com [81.177.27.249]
    delhi-203.200.111-174.static.vsnl.net.in [203.200.111.174] (may be forged)
    dhcp0598.nic.resnet.group.upenn.edu [165.123.139.80]
    dsl-189-132-168-102.prod-infinitum.com.mx [189.132.168.102] (may be forged)
    dsl-189-136-188-116.prod-infinitum.com.mx [189.136.188.116] (may be forged)
    dsl-189-140-27-216.prod-infinitum.com.mx [189.140.27.216] (may be forged)
    dsl-189-145-97-133.prod-infinitum.com.mx [189.145.97.133] (may be forged)
    dsl-189-163-219-12.prod-infinitum.com.mx [189.163.219.12] (may be forged)
    dsl-189-165-56-160.prod-infinitum.com.mx [189.165.56.160] (may be forged)
    dsl-200-67-139-213.prod-empresarial.com.mx [200.67.139.213]
    dsl-201-128-23-230.prod-infinitum.com.mx [201.128.23.230]
    dsl-MP-dynamic-057.131.144.59.airtelbroadband.in [59.144.131.57] (may be forged)
    dsl.dynamic812156144.ttnet.net.tr [81.215.61.44] (may be forged)
    dsl.dynamic8599216188.ttnet.net.tr [85.99.216.188] (may be forged)
    eu100-138-83.clientes.euskaltel.es [82.130.138.83]
    eu85-84-215-74.clientes.euskaltel.es [85.84.215.74]
    eycb01-00-brtwga-68-68-89-192.atlaga.adelphia.net [68.68.89.192]
    firewall.frosinet.com.br [200.180.99.65]
    gar13-1-82-227-28-2.fbx.proxad.net [82.227.28.2]
    gar13-2-82-239-235-70.fbx.proxad.net [82.239.235.70]
    gw.milenium.net.pl [80.48.30.1] (may be forged)
    h8441240204.dsl.speedlinq.nl [84.41.240.204]
    host-196-205-131-84.static.link.com.eg [196.205.131.84] (may be forged)
    host-81-190-87-248.gdynia.mm.pl [81.190.87.248]
    host-81.10.122.59.tedata.net [81.10.122.59] (may be forged)
    host.200.47.50.24.static.itcsa.net [200.47.50.24] (may be forged)
    host86-138-92-20.range86-138.btcentralplus.com [86.138.92.20]
    i-195-137-122-147.freedom2surf.net [195.137.122.147]
    ip67-154-148-66.z148-154-67.customer.algx.net [67.154.148.66]
    localhost [222.252.167.43] (may be forged)
    localhost [222.252.170.243] (may be forged)
    localhost [222.252.212.39] (may be forged)
    localhost [222.252.247.181] (may be forged)
    mail-par.bigfish.com [217.117.146.230]
    moves.dsl.interdart.net [217.145.120.157]
    mssql1.fascinatingquality.com [217.106.237.54]
    mx13.circuitdomains.com [66.59.92.198]
    mx21.circuitdomains.com [66.59.92.206]
    n22z159l117.broadband.ctm.net [202.86.159.117]
    net.gwbn.cq.cn [211.162.208.81] (may be forged)
    net.gwbn.cq.cn [211.162.208.83] (may be forged)
    net143-068.mclink.it [195.110.143.68]
    ntchba239225.chba.nt.ftth.ppp.infoweb.ne.jp [124.27.157.225]
    pool-141-157-232-163.ny325.east.verizon.net [141.157.232.163]
    pool-68-237-25-140.ny325.east.verizon.net [68.237.25.140]
    pool-71-105-148-168.lsanca.dsl-w.verizon.net [71.105.148.168]
    pool-71-244-49-78.dllstx.fios.verizon.net [71.244.49.78]
    ppp-58.9.137.56.revip2.asianet.co.th [58.9.137.56]
    ptil-46-121-primus-india.net [61.12.121.46] (may be forged)
    radius-free4.fascinatingquality.com [217.106.237.69]
    S01060004e235252a.ca.shawcable.net [70.77.38.61]
    S0106000cf1a064fb.cg.shawcable.net [68.144.181.145]
    S010600e02999634e.wp.shawcable.net [24.76.172.235]
    softbank219050192022.bbtec.net [219.50.192.22]
    static-151-204-189-86.pskn.east.verizon.net [151.204.189.86]
    static-67-62-102-163.dsl.cavtel.net [67.62.102.163]
    static-epm200-58-203-56.epm.net.co [200.58.203.56] (may be forged)
    ti541210a080-9640.bb.online.no [83.108.101.174]
    tky10-p171.flets.hi-ho.ne.jp [219.126.177.172]
    tm.net.my [218.111.2.148] (may be forged)
    tm.net.my [60.48.117.62] (may be forged)
    tm.net.my [60.48.63.208] (may be forged)
    tm.net.my [60.49.107.241] (may be forged)
    tm.net.my [60.49.98.208] (may be forged)
    user-12hc19a.cable.mindspring.com [69.22.5.42]
    user-12hccdq.cable.mindspring.com [69.22.49.186]
    user-12hcpb3.cable.mindspring.com [69.22.101.99]
    user213-164.enet.vn [203.190.164.213] (may be forged)
    user90.lom.cz [217.117.223.90]
    WLL-25-pppoe011.t-net.net.ve [200.31.139.11]
    wsip-24-249-152-178.cox.net [24.249.152.178] (may be forged)
    xdsl-6874.elblag.dialog.net.pl [87.105.106.218]
    zaq3dcd9082.zaq.ne.jp [61.205.144.130]
