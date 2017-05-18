---
title: Server issues
tags: blog
---

Apologies to any who had trouble accessing the server earlier this evening. The file-system filled up due to a rogue process (or processes) run by another user on the system. The server continued to operate throughout the incident, but you may have had trouble connecting to the server during the period. I don't know if any mail got bounced but if it did I imagine it will be automatically redelivered. For the curious, you can read on for the full story of what happened.





I noticed a few hours ago that I couldn't send outgoing email. Thinking it was just a transitory network failure between here (Spain) and the server (in Australia) I didn't worry about it. A few hours later I noticed that it still wasn't working and connected to the server to investigate.

At that point I very quickly realized that the file system was full. This was quite alarming as it was only 50% full the day before and had been sitting at that level for some time. I run the server with an "if it ain't broke don't fix it" philosophy, which means that it gets security patches but other than that I keep it as static as possible. The last time I rebooted it for a security update it had been running continuously for well over 400 days. I don't change configuration files. I don't tinker. Stuff like this shouldn't happen.

The first thing I tried to do was delete some files to give me some breathing room. That's when I started to get worried, because the file system was filing up as fast as I cleared space. For example, I would delete a directory containing a few hundred megabytes of temporary files, and by the time I typed "df -h" the system had completely filled up again!

The operating system is smart enough that it never lets the file system get truly full. It maintains some space free so that the kernel can perform operations even when user processes cannot. So in this case I had about 2GB free of real space, but 0% "available". Given that something was writing to the disk at a rate of a hundred or so meg per second I am very glad the kernel does that otherwise the server would have crashed like a stone, a fairly annoying outcome given that I am physically about as far away from the server as is possible to be.

So there I was, thousands of miles away from my server, with no breathing room and a little nervous. The first thing I did was check the "/var" directory, looked for any runaway log files, looked at all my websites, and everything seemed to be in order. I then turned my attention to the other users on the server (for some years now I have donated hosting to a non-profit student organization of which I used to be a member).

By using the "du -d 1 -h" command I was able to find where all the usage was occurring. Another user on the system (actually in a separate jail) was writing gigabytes of data to "/var/mod\_gzip/" continuously. I stopped Apache for that jail, deleted the files and the problem was solved. I still don't know *why* this happened, but at least I know where and when. I won't be restarting Apache in that jail until I have a very good idea of what's going on. Needless to say, mod\_gzip will not be enabled.
