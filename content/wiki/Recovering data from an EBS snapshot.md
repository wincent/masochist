---
tags: aws ebs wiki
---

# Overview

Here are some notes made while restoring selected files from an EBS snapshot. In this particular procedure we attach a specific snapshot to a running instance so that we can choose specific files to be restored (copied from the snapshot to some other volume on the instance).

The exact details are specific to my particular set-up, but they give an indication of the basic idea that could be applied to any AWS instance that uses EBS snapshots as backups.

# Detailed procedure

Given that I have daily backups set up for two different volumes on each of two instances, I have a lot of snapshots hanging around at any one time. To find a suitable restore point I use `ec2-describe-snapshots` combined with some `grep` invocations:

    ec2-describe-snapshots | grep zenyatta | grep sdh | grep 2010-06

So here we're narrowing it down to snapshots for the "zenyatta" instance, the "sdh" (data) device, in the month of June 2010.

Now we also get the instance ID (e.g. "i-1234abcd") and zone (e.g. "us-east-1d") to which we want to attach the snapshot:

    ec2-describe-instances

So now we can create a new volume based on the selected snapshot:

    ec2-create-volume --snapshot snap-abcd1234 -z us-east-1d

This gives us a volume ID like "vol-1234abcd", which we can then use to attach to the desired instance:

    ec2-attach-volume vol-1234abcd -i i-1234abcd -d /dev/sdi

Now, on the instance itself:

    mkdir /backup
    mount -o nouuid /dev/sdi /backup

We use the `nouuid` option because the data volume in question has an XFS filesystem and without the option the `mount` will fail and `dmesg | tail` will reveal an error like:

    XFS: Filesystem sdi has duplicate UUID - can't mount

We can now restore using `cp` or similar:

    cp -R --preserve=all /backup/foo/bar /data/foo/

After restoring the desired files, clean-up with:

    umount /dev/sdi

And back on the local machine:

    ec2-detach-volume vol-1234abcd
    ec2-describe-volumes
    ec2-delete-volume vol-1234abcd
    ec2-describe-volumes
