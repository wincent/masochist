---
tags: spotify
---

There is a long thread about this [here](http://community.spotify.com/t5/Help-Desktop-Linux-Mac-and/spotify-unable-to-initialize-the-storage-of-temporary-files/td-p/30293).

In my case, the necessary steps to fix were:

1.  Delete `/Applications/Spotify.app`
2.  Delete `~/Library/Caches/com.spotify.*`
3.  Delete `~/Library/Application Support/Spotify`
4.  Log out and log in again (a full reboot wasn't required)
5.  Run the Spotify installer

Probably unrelated, but my machine was sluggish and unresponsive after logging in again, so I ended up rebooting anyway.
