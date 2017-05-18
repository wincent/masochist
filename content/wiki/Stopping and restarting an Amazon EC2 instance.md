---
tags: aws ec2 wiki
---

Earlier today I had trouble with an [Amazon](/wiki/Amazon) [EC2](/wiki/EC2) instance on which the [Rails](/wiki/Rails) app had become unresponsive. [Monit](/wiki/Monit) usually restarts any [Unicorn](/wiki/Unicorn) or other processes which are having trouble, but for some reason the processes wouldn't come back up. I even tried quitting [nginx](/wiki/nginx), [memcached](/wiki/memcached) and [Monit](/wiki/Monit) itself, but they all refused to die and there were a couple of zombie [Ruby](/wiki/Ruby) processes visible in the process listing.

[SSH](/wiki/SSH) still worked, luckily, but rebooting seemed to be the only answer to get the Rails app up and running again. Doing a `reboot` is not enough, as the instance itself needs to be brought down and up again (or otherwise replaced).

```shell
$ ec2-describe-instances # figure out instance id, eg. i-72eba2a1
$ ec2-stop-instances i-72eba2a1
$ ec2-start-instances i-72eba2a1
$ ec2-describe-instances 
$ ec2-associate-address 184.73.232.208 -i i-72eba2a1 # set up elastic IP again
```

The nice thing about stopping and restarting an [EC2](/wiki/EC2) instance is that, unlike terminating, your [EBS](/wiki/EBS) volumes remain attached to the instance.

I did find, however, that I had to check that [Monit](/wiki/Monit) was running properly when the server got back up. It wasn't. Well, technically Monit itself was running, but its monitored processes were showing up as "not monitored'. I think this is likely due to stale PID files left on disk from the less-than-ideal shutdown.
