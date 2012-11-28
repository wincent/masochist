---
tags: aws s3
---

Previously, you couldn't delete a non-empty bucket from Amazon's [AWS](/wiki/AWS) management console, but you could easily do it via an [SDK](/wiki/SDK):

```shell
$ sudo gem install aws-sdk
$ irb -r rubygems -r aws-sdk
> AWS.config(:access_key_id => '...', :secret_access_key => '...')
> bucket = AWS::S3.new.buckets['...']
> bucket.delete! # objects deleted in batches of 1k; then bucket itself deleted
```

As of February 2014, it appears that you can delete non-empty buckets from the management console.
