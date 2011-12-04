---
title: USB snapshot script
tags:
---
#!/usr/bin/env ruby

require 'date'
require 'fileutils'
require 'pathname'

HOME          = Pathname.new ENV['HOME']
SNAPSHOTS_DIR = Pathname.new(File.dirname(__FILE__)) + 'snapshots'

# scheme: snapshots/2011-11-27/1322445375
#    (ie: snapshots/date/UNIX-timestamp)
SNAPSHOT_DIR  = SNAPSHOTS_DIR + Date.today.to_s + Time.now.to_i.to_s

TO_COPY = [
  '.awssecret*',
  '.gem/credentials*',
  '.gnupg/*',
  '.netrc',
  '.s3cfg',
  '.ssh/*',
  '.vim_org.yml',
  'Documents/Personal/Notes/*',
  'Library/Keychains/*',
  'Backups/Personal/lastpass*.xml',
]

TO_COPY.each do |src|
  Pathname.glob(HOME + src).each do |src|
    next if src.symlink?
    next if src.socket?

    dst = SNAPSHOT_DIR + src.relative_path_from(HOME)
    dst.dirname.mkpath
    FileUtils.cp_r(src, dst)
  end
end
