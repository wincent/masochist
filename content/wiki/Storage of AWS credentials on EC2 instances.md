---
tags: aws wiki
cache_breaker: 1
---

**Update:** *[IAM roles](http://aws.typepad.com/aws/2012/06/iam-roles-for-ec2-instances-simplified-secure-access-to-aws-service-apis-from-ec2.html) are a new feature added to EC2 which make much of the following discussion mostly moot; these enable you to set up a predefined set of relatively fine-grained access privileges that will be made transparently available to an instance that you launch. The original content of this article follows below for historical reference.*

[This article](http://www.shlomoswidler.com/2009/08/how-to-keep-your-aws-credentials-on-ec2.html) goes into great detail weighing up the pros and cons of storing your [AWS](/wiki/AWS) credentials on your [EC2](/wiki/EC2) instances (although it was written before the introduction of AMIs bootable from [EBS](/wiki/EBS) volumes it is still highly relevant), and [this one](http://www.elastician.com/2009/06/managing-your-aws-credentials-part-2.html) proposes an approach which at least mitigates some of the most insecure aspects of the alternatives.

Note that there really is no way to "cheat" and "hide" the keys on the instance itself without them being recoverable in the event of a total compromise of the instance; even if the keys are encrypted or "hidden" elsewhere, the knowledge of how to decrypt or otherwise obtain the keys must reside somewhere on the instance.

# Example scenario: Backup via [EBS](/wiki/EBS) snapshot

**Scenario:** *in order to backup the [EBS](/wiki/EBS) volumes attached to an [EC2](/wiki/EC2) instance you need your [AWS](/wiki/AWS) credentials.*

In order for the backup to be fully automatic, unattended, and initiated via a [cron](/wiki/cron) job within the instance, you need to somehow store the credentials inside the instance in some way.

If the instance is ever compromised an attacker could use the credentials to purchase AWS resources or launch new instances, or destroy instances, EBS volumes/snapshots, and data stored on S3.

On the other hand, if you do not wish to risk storing the credentials on the instance itself you need to initiate the backups from outside the instance (for example, over [SSH](/wiki/SSH)). In this case you either have to initiate the backups manually, or even if automated, at least accept the risk that the backup won't happen in the event of a network interruption between your local machine and the remote instance.

At least for my own needs, the assessment of these two options is as follows:

## Keys stored on instances

-   Risk of server being compromised: low, if properly configured and maintained
-   Potential cost if server is compromised: enormous
-   Reliability of backups: total
-   Cost if a backup is delayed or skipped: low (data does not change frequently)

## Keys stored remotely

-   Risk of server being compromised: same as above (low)
-   Potential cost if server is compromised: typical/normal for such compromises (data/privacy loss on instance)
-   Reliability of backups: moderate
-   Cost if a backup is delayed or skipped: as above (low)

## Conclusion

Weighing up these options, the trade-off of storing the keys remotely (increased security at the risk of occasionally missing a backup or performing it late) seems to be the best choice.

Bear in mind that even when initiating such backups from outside the instance, the keys shouldn't really ever reside inside the instance, even temporarily, because in the event of a full compromise it would be possible for an attacker to recover the keys at that moment.

This means that all privileged operations which require the access credentials (such as `ec2-create-snapshot`) should be initiated remotely.
