---
tags: s3 aperture
---

As a relatively early adopter of the internet, my first decade online was marked by a desire to accumulate and retain as much data as possible. I collected and never threw anything away.

My first hard drive was a 212 MB thing in an 486SX33 PC. When I switched to a Mac (a PowerMac 7600, if I recall correctly), it came with a 1 GB drive, which I later upgraded to 4 GB. A long series of successively larger external drive purchases ensued.

This was all pre-[cloud](/wiki/cloud), so my data was stored with only as much redundancy as I could procure by spreading files across volumes and burning backups to or archiving on CDs.

I've now lived outside of my home country (Australia) for 10 years — first in Spain and then in the US — and for most of that time my prime machine has been a laptop of some sort, with occasional stints with a PowerMac G5 or an iMac.

Trying to manage all these files was getting old.

So, around 2011 I resolved that I would put a hard cap on the amount of data I had in the world; I would throw away or delete the stuff that didn't matter in order to get under the cap.

The cap would be the amount of data you can fit on a current model Apple laptop of the class that I would and do purchase (right now, that means a MacBook Air). So, that meant that my 2011/2012 data limit was about 250 GB. The current models have 250 GB too, upgradable to 512 GB as an option, so if I were to buy one now my limit would grow to 512 GB. It seems likely that over the next 10 years my limit will grow to 1 TB, 2 TB, 4 TB, as flash storage in these laptops grows. I'm no longer an obsessive collector of data, so this should be more enough to keep pace with the rate at which I collect personal data (photos, documents) and work artifacts (source code etc).

A ran into a kink in the plan earlier this year when my old laptop — a [work](/wiki/work)-supplied machine — slowly ground to a halt. They kindly swapped me over to a newer model, but it only had 128 GB of storage. Suddenly fitting under the quota became much harder.

I ended up doing things like deleting megabytes of MP3s that I have accumulated over the years, but which I could continue accessing via Spotify. Lots of things were simply thrown away.

Nevertheless, I am constantly running out of space, to the point where I can't even take photos any more. I could upload them to Flickr but I don't fully trust Yahoo! not to screw up the service (it's free, after all).

Amazon, on the other hand, I do trust, about as much as it's possible to trust another company with one's data. The goal is to basically dump the contents of my [Aperture](/wiki/Aperture) library to [S3](/wiki/S3) and start afresh. It's small fry we're talking here (about 25 GB of photos, seeing as I already deleted all the RAW format ones and kept only the JPEGs), but it will give me a scratch space into which I can insert new photos, until it comes time for the next dump.

Another option I looked into: mounting S3 as a filesystem in some way and letting Aperture think it was a local volume. The various posts I found on the net suggested that this didn't work very well. So, I decided to cut my losses and just do a dump using the lowest-tech solution I could get my hands on: the [open source](/wiki/open_source), [command-line](/wiki/command-line)-only `s3cmd`.

After creating a suitable IAM user and policy:

```shell
$ s3cmd --configure # first-time setup (first-time only)
$ s3cmd mb s3://yourbucket # make a new bucket
$ cd ~/Pictures/Aperture\ Library.aplibrary
$ s3cmd sync Masters s3://yourbucket/ # upload all the master files
```

Notice this is the crudest of backups; just the masters and nothing else. The assumption is that any touched-up versions which I might want to share have been shared long ago (eg. on Facebook or via email), so I'm just keeping the "negatives".

> **Update \[March 2015\]:** I've since learned that this is a silly way to do this. Aperture has the concept of "managed" and "referenced" masters: the former are stored in the Aperture library, but the others can be anywhere on disk, including volumes which may not always be mounted (Aperture keeps preview information in the library, and can reestablish the link with the original image once the volume comes back online; in fact, even if you move the image it is possible to reestablish the connections, although it is a bit fiddly to do so). Furthermore, the "versions" don't really take up any space because Aperture merely stores the metadata about the operations (filters, transforms etc) which need to be applied to the masters to produce the versions.

Do a test download; the `curl` attempt will fail because public access isn't enabled by default, the `s3cmd get` will work because it has the right access credentials:

```shell
$ curl s3.amazonaws.com/yourbucket/Masters/2012/04/22/20120422-111756/IMG_1894.JPG
$ s3cmd get s3://yourbucket/Masters/2012/04/22/20120422-111756/IMG_1894.JPG ~/Desktop/test.jpg
```

As this is not-very-sensitive data (family photos), the protection provided by the ACLs is good enough; I don't want random strangers to access this stuff and [security through obscurity](/wiki/security_through_obscurity) isn't quite good enough, but encryption would be overkill for this kind of thing.

Other useful commands:

```shell
$ s3cmd du s3://yourbucket/ # show disk usage                                                            
$ s3cmd info s3://yourbucket/ # show metadata about a bucket, including ACLs
```

# Alternative approaches

As of February 2015, [Arq](/wiki/Arq) can be [used for this purpose](http://www.haystacksoftware.com/blog/2015/02/how-to-archive-to-glacier/). This is somewhat nicer because you have a single consistent restore interface and you get encryption "for free".

## Migrating to Arq archives

1.  Create a directory at `~/Archives/` and tell Arq to ignore it when doing its usual backup runs
2.  Create a subdirectory `~/Archives/Aperture/2015-03` that will contain the images to be archived
3.  Pull down the masters previously backed up using `s3cmd sync s3://yourbucket/Masters .`
4.  Flatten folder structure (in my case, this meant taking a deeply nested folder hierarchy with about 400 folders in it and turning it into a single-level structure with about 7,000 images; I used the ghetto script below for that purpose); without this, importing the images into Aperture will require you to separately navigate to each folder
5.  Import photos back into Aperture, making sure the "Store Files" option is set to "In their current location" (ie. treat the images as "referenced" rather than "managed"); Aperture maintains previews of these referenced images even if you get rid of your local copy of the master images
6.  In Arq, add the `~/Archives/Aperture/2015-03` folder to the backup set and back it up
7.  Once that's finished, click "Detach"; at this point, the somewhat cryptic "2015-03" folder name in the Arq UI will change to "2015-03 (archived)" (you may want to name your folders something like "Aperture-2015-03" to make this clearer, but I'm not anticipating doing this for anything but Aperture for now, so I'm going with the shorter name)
8.  Repeat for each backup source (in my case, that's Amazon S3, DropBox and Google Drive)
9.  Empty the `~/Archives/Aperture/2015-03` directory
10. Delete the redundant copy still on S3 with `s3cmd del s3://yourbucket/Masters -r`

On upgrading to a new machine with more storage, you can reattach these folders as follows:

1.  Restore the backup of the archive at the original location
2.  Click "Attach..." in Arq
3.  Note that Aperture now has access to the masters again, provided you didn't change their locations

### `flatten.rb` script

This script recursively looks for all files in the current directory and moves them up to the top level. Duplicates are numbered as follows to avoid collisions: `IMG_001.JPG`, `IMG_001 (1).JPG`, `IMG_001 (2).JPG` etc.

```ruby
#!/usr/bin/env ruby

require 'fileutils'
require 'set'

files = []

Dir['**/*'].each do |path|
  if File.file?(path)
    files.push(path)
  end
end

# visit files in lexicographical order of the paths;
# this will mean we traverse directories from oldest to newest
sorted = files.sort

seen = Set.new()
sorted.each do |path|
  basename = File.basename(path)

  # eliminate dupes
  while seen.member?(basename)
    if basename =~ /(.+) \((\d+)\)(\.\w+)\z/
      name, count, ext = $~[1], $~[2], $~[3]
      basename = "#{name} (#{count.to_i + 1})#{ext}"
    else
      ext = File.extname(basename)
      name = File.basename(basename, '.*') # remove extension
      basename = "#{name} (1)#{ext}"
    end
  end

  seen.add(basename)
  FileUtils.mv path, basename, verbose: true
end
```

Note: another reason why we want a flat folder structure is because that is what we'll get when we create new archive folders from stuff that's already in Aperture:

1.  Import photos into Aperture as usual; use "managed" rather than "referenced" photos by setting the "Store Files" option to "In the Aperture Library"
2.  Edit, publish, share photos on Facebook or elsewhere as usual
3.  When it's time to create a new Archive, use "Relocate Originals..." in the "File" menu to convert the managed photos to referenced ones; this is where you'll get a flat folder structure
4.  Use Arq to upload, detach, and delete your new `~/Archives/Aperture/2015-03` archive

