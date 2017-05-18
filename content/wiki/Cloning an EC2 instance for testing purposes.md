---
tags: aws ebs ec2 wiki
---

These are notes made while creating a clone of an existing [EC2](/wiki/EC2) instance, based on [EBS](/wiki/EBS) snapshots, for testing purposes. Although the notes are specific to my set-up, they give an indication of the kind of procedure that could be applied to any EBS-backed EC2 instance.

First up we look at our running instances:

    ec2-describe-instances

We'll need this information in order to create an exact clone of the instance:

-   zone (eg `us-east-1d`)
-   AMI (eg `ami-84db39ed`)
-   kernel (eg `aki-94c527fd`)
-   ramdisk (eg `ari-96c527ff`)

Now we look at our snapshots and pick a recent one (sorting by date, filtering by host "mondatta"); we pick the two latest snapshots because there are actually two EBS volumes attached to this instance:

    ec2-describe-snapshots | grep mondatta | sort -k 5 | tail -n 2

You can't just spin up a new instance by feeding these snapshot IDs into `ec2-run-instances`. You instead must register a snapshot to be used as a basis for a new AMI:

    ec2-register \
      -n rails-snapshot-2010-06-07 \
      -d 'Rails instance snapshot 2010-06-07' \
      --root-device-name /dev/sda1 \
      -b /dev/sda1=snap-feedface

This gives us a new AMI ID that we an feed in to `ec2-run-instances`:

    ec2-run-instances -z us-east-1d \
      --key ec2instancekey \
      -b /dev/sdh=snap-deadbeef \
      -g rails \
      --kernel aki-94c527fd \
      --ramdisk ari-96c527ff \
      ami-abcd1234

Note how we don't need to specify the block device mapping for the root volume (at `/dev/sda1`) because that was effectively done using `ec2-register`; we only specify the second block device mapping for the data volume (at `/dev/sdh`).

Note also how we pass in explicit `--kernel` and `--ramdisk` values. In my initial attempt at doing this I skipped these and found that the resulting instance couldn't mount the XFS `/data` volume, and trying to do so manually failed:

```shell
# mount /data
mount: unknown filesystem type 'xfs'
# modprobe xfs
FATAL: Could not load /lib/modules/2.6.16-xenU/modules.dep: No such file or directory
```

As soon as the instance is running, we get the hostname via `ec2-describe-instances` and log in via [SSH](/wiki/SSH):

    ec2-describe-instances
    ssh -i ~/.ec2/ec2instancekey.pem root@ec2-184-73-120-54.compute-1.amazonaws.com

We want to stop [sendmail](/wiki/sendmail) so that any stale mail which might be in the queue on the snapshot doesn't get sent out again, and likewise we stop [cron](/wiki/cron) so that backup jobs (additional EBS snapshots and Git mirrors) don't run:

    service sendmail stop
    service crond stop

Once we've finished testing on the instance, we terminate it:

    ec2-terminate-instances i-1234abcd

We can list our AMIs:

    ec2-describe-images -o self

And clean up the AMI that we created earlier:

    ec2-deregister ami-abcd1234
