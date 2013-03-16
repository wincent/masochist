---
tags: vpn cisco ipsec
cache_breaker: 1
---

Found [here](https://discussions.apple.com/thread/3275811):

> 1.  Connect to the VPN (so OSX generates the racoon configuration file)
> 2.  Copy the generated configuration file to /etc/racoon: `$ sudo cp /var/run/racoon/1.1.1.1.conf /etc/racoon`
> 3.  Edit the racoon configuration file with your favorite editor (vim): `$ sudo vim /etc/racoon/racoon.conf`
> 4.  At the bottom of the file comment out the line: `include "/var/run/racoon/*.conf" ;`
> 5.  ... and instead include the copied file (which we will edit): `include "/etc/racoon/1.1.1.1.conf" ;`
> 6.  Edit the generated configuration file with your favorite editor (vim): `$ sudo vim /etc/racoon/1.1.1.1.conf`
> 7.  Disable dead peer detection: `dpd_delay 0;`
> 8.  Change proposal check to claim from obey: `proposal_check claim;`
> 9.  Change the proposed lifetime in each proposal (24 hours instead of 3600 seconds): `lifetime time 24 hours;`
> 10. Disconnect and reconnect (this time racoon will use your custom configuration)
> 11. Use the VPN for at least 45 minutes and hopefully it won't drop!

In my case "24 hours" didn't work (and even "12 hours" was too much) but "8 hours" worked just fine.

Also, disabling dead peer detection wasn't necessary for me (and possibly not a good idea anyway).

This is an inglorious hack, but beats having to manually reenter your credentials every 45 minutes.
