---
tags: clamav email
---

This is a sample of the messages blocked by [ClamAV](/wiki/ClamAV) at the [wincent.com](/wiki/wincent.com) server in a period of just under 4 days (about 96 hours) in July 2006. The output was obtained using the following:

    sudo cat /var/log/maillog* | grep clamd | grep FOUND

186 messages were blocked in total (an average of nearly 47 per day); of these 2 were classified as "exploits", 2 as "trojans", 3 as "worms", and the remainder (179) as "phishing" attempts:

    Jul  9 09:04:05 s69819 clamd[11292]: stream: HTML.Phishing.Pay-33 FOUND 
    Jul  9 11:40:02 s69819 clamd[11292]: stream: HTML.Phishing.Auction-111 FOUND 
    Jul  9 16:41:40 s69819 clamd[11292]: stream: HTML.Phishing.Pay-33 FOUND 
    Jul  9 16:45:26 s69819 clamd[11292]: stream: HTML.Phishing.Pay-33 FOUND 
    Jul  9 18:35:27 s69819 clamd[11292]: stream: HTML.Phishing.Pay-110 FOUND 
    Jul  9 21:00:06 s69819 clamd[11292]: stream: HTML.Phishing.Auction-111 FOUND 
    Jul 10 01:48:16 s69819 clamd[11292]: stream: HTML.Phishing.Pay-33 FOUND 
    Jul 10 03:35:54 s69819 clamd[11292]: stream: HTML.Phishing.Pay-110 FOUND 
    Jul 10 04:40:36 s69819 clamd[11292]: stream: HTML.Phishing.Auction-111 FOUND 
    Jul 10 06:29:49 s69819 clamd[11292]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul 10 06:30:06 s69819 clamd[11292]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul 10 16:57:19 s69819 clamd[11292]: stream: HTML.Phishing.Pay-110 FOUND 
    Jul 11 00:04:58 s69819 clamd[11292]: stream: HTML.Phishing.Pay-110 FOUND 
    Jul 11 09:00:06 s69819 clamd[11292]: stream: HTML.Phishing.Pay-110 FOUND 
    Jul 11 13:03:46 s69819 clamd[11292]: stream: HTML.Phishing.Auction-111 FOUND 
    Jul 11 19:51:21 s69819 clamd[11292]: stream: HTML.Phishing.Pay-110 FOUND 
    Jul 12 06:04:38 s69819 clamd[11292]: stream: HTML.Phishing.Pay-130 FOUND 
    Jul 12 13:41:55 s69819 clamd[11292]: stream: Worm.SomeFool.P FOUND 
    Jul 12 21:20:03 s69819 clamd[11292]: stream: HTML.Phishing.Pay-147 FOUND 
    Jul  2 06:34:56 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul  2 14:31:45 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul  2 17:50:54 s69819 clamd[11292]: stream: HTML.Phishing.Bank-497 FOUND 
    Jul  3 19:00:44 s69819 clamd[11292]: stream: HTML.Phishing.Auction-93 FOUND 
    Jul  4 02:57:06 s69819 clamd[11292]: stream: HTML.Phishing.Pay-51 FOUND 
    Jul  4 09:32:26 s69819 clamd[11292]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul  4 11:20:08 s69819 clamd[11292]: stream: HTML.Phishing.Bank-475 FOUND 
    Jul  4 17:27:51 s69819 clamd[11292]: stream: HTML.Phishing.Pay-6 FOUND 
    Jul  4 19:01:05 s69819 clamd[11292]: stream: HTML.Phishing.Bank-490 FOUND 
    Jul  5 12:35:44 s69819 clamd[11292]: stream: Worm.SomeFool.P FOUND 
    Jul  5 16:42:24 s69819 clamd[11292]: stream: Exploit.HTML.IFrame FOUND 
    Jul  5 17:23:46 s69819 clamd[11292]: stream: Worm.SomeFool.Gen-2 FOUND 
    Jul  5 18:10:58 s69819 clamd[11292]: stream: HTML.Phishing.Pay-51 FOUND 
    Jul  5 20:27:00 s69819 clamd[11292]: stream: HTML.Phishing.Bank-546 FOUND 
    Jul  6 02:28:58 s69819 clamd[11292]: stream: HTML.Phishing.Bank-551 FOUND 
    Jul  6 15:16:18 s69819 clamd[11292]: stream: HTML.Phishing.Pay-37 FOUND 
    Jul  6 19:08:46 s69819 clamd[11292]: stream: HTML.Phishing.Pay-37 FOUND 
    Jul  7 05:20:35 s69819 clamd[11292]: stream: HTML.Phishing.Pay-130 FOUND 
    Jul  7 07:49:16 s69819 clamd[11292]: stream: HTML.Phishing.Pay-37 FOUND 
    Jul  7 17:25:14 s69819 clamd[11292]: stream: HTML.Phishing.Pay-33 FOUND 
    Jul  7 18:21:56 s69819 clamd[11292]: stream: HTML.Phishing.Pay-106 FOUND 
    Jul  8 04:30:32 s69819 clamd[11292]: stream: HTML.Phishing.Auction-102 FOUND 
    Jul  8 08:51:46 s69819 clamd[11292]: stream: HTML.Phishing.Pay-33 FOUND 
    Jul  8 10:15:01 s69819 clamd[11292]: stream: HTML.Phishing.Pay-152 FOUND 
    Jul  8 16:24:46 s69819 clamd[11292]: stream: HTML.Phishing.Pay-33 FOUND 
    Jul  8 22:48:39 s69819 clamd[11292]: stream: HTML.Phishing.Auction-102 FOUND 
    Jul  9 01:02:45 s69819 clamd[11292]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 25 11:24:03 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 25 17:02:53 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 25 22:17:08 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 25 22:54:54 s69819 clamd[20016]: stream: HTML.Phishing.Pay-51 FOUND 
    Jun 25 23:09:52 s69819 clamd[20016]: stream: HTML.Phishing.Pay-51 FOUND 
    Jun 26 01:09:28 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 26 07:14:21 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 26 10:11:00 s69819 clamd[20016]: stream: HTML.Phishing.Bank-505 FOUND 
    Jun 26 19:48:43 s69819 clamd[20016]: stream: HTML.Phishing.Bank-159 FOUND 
    Jun 27 09:08:44 s69819 clamd[20016]: stream: HTML.Phishing.Bank-362 FOUND 
    Jun 27 17:00:29 s69819 clamd[20016]: stream: HTML.Phishing.Bank-409 FOUND 
    Jun 27 17:50:51 s69819 clamd[20016]: stream: HTML.Phishing.Bank-28 FOUND 
    Jun 28 08:29:30 s69819 clamd[20016]: stream: HTML.Phishing.Pay-118 FOUND 
    Jun 29 07:19:08 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 29 07:19:08 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 29 07:19:12 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 29 07:19:12 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 29 07:19:16 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 29 07:19:17 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 29 07:19:21 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 29 07:19:21 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 29 07:19:28 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 29 07:19:28 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 29 11:08:07 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 30 00:21:58 s69819 clamd[20016]: stream: HTML.Phishing.Pay-130 FOUND 
    Jun 30 01:22:02 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 30 20:24:06 s69819 clamd[20016]: stream: HTML.Phishing.Bank-376 FOUND 
    Jul  1 13:17:40 s69819 clamd[20016]: stream: HTML.Phishing.Bank-376 FOUND 
    Jul  1 14:04:03 s69819 clamd[20016]: stream: HTML.Phishing.Bank-376 FOUND 
    Jul  2 00:01:50 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul  2 00:01:50 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul  2 00:01:52 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul  2 00:01:52 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul  2 00:01:53 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul  2 00:01:53 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul  2 00:03:36 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jul  2 00:03:36 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 18 06:08:29 s69819 clamd[20016]: stream: HTML.Phishing.Bank-159 FOUND 
    Jun 18 09:06:39 s69819 clamd[20016]: stream: HTML.Phishing.Pay-37 FOUND 
    Jun 18 11:33:35 s69819 clamd[20016]: stream: HTML.Phishing.Pay-152 FOUND 
    Jun 18 11:50:43 s69819 clamd[20016]: stream: HTML.Phishing.Pay-99 FOUND 
    Jun 18 15:23:06 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 18 15:38:42 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 18 21:18:15 s69819 clamd[20016]: stream: HTML.Phishing.Pay-99 FOUND 
    Jun 19 20:44:29 s69819 clamd[20016]: stream: HTML.Phishing.Pay-135 FOUND 
    Jun 20 19:08:16 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 20 19:08:24 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:21:35 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:21:35 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:21:36 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:21:36 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:21:38 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:21:38 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:21:39 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:21:39 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:21:40 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:21:40 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 01:33:49 s69819 clamd[20016]: stream: HTML.Phishing.Bank-28 FOUND 
    Jun 21 03:58:47 s69819 clamd[20016]: stream: HTML.Phishing.Pay-152 FOUND 
    Jun 21 04:46:27 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 04:46:27 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 04:46:30 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 04:46:30 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 04:46:33 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 04:46:33 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 04:46:36 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 04:46:36 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 04:46:39 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 04:46:39 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 21 19:53:41 s69819 clamd[20016]: stream: HTML.Phishing.Pay-14 FOUND 
    Jun 21 20:05:26 s69819 clamd[20016]: stream: Exploit.HTML.IFrame FOUND 
    Jun 21 23:21:32 s69819 clamd[20016]: stream: HTML.Phishing.Pay-152 FOUND 
    Jun 22 01:36:35 s69819 clamd[20016]: stream: HTML.Phishing.Pay-152 FOUND 
    Jun 22 05:05:36 s69819 clamd[20016]: stream: HTML.Phishing.Bank-484 FOUND 
    Jun 22 09:01:22 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 22 09:35:13 s69819 clamd[20016]: stream: HTML.Phishing.Pay-37 FOUND 
    Jun 22 14:15:02 s69819 clamd[20016]: stream: HTML.Phishing.Pay-130 FOUND 
    Jun 22 19:56:06 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 23 06:23:09 s69819 clamd[20016]: stream: HTML.Phishing.Pay-130 FOUND 
    Jun 23 11:23:05 s69819 clamd[20016]: stream: HTML.Phishing.Bank-485 FOUND 
    Jun 23 15:56:10 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 23 18:58:56 s69819 clamd[20016]: stream: HTML.Phishing.Pay-130 FOUND 
    Jun 24 02:12:01 s69819 clamd[20016]: stream: HTML.Phishing.Pay-37 FOUND 
    Jun 24 04:10:41 s69819 clamd[20016]: stream: HTML.Phishing.Auction-100 FOUND 
    Jun 24 04:20:43 s69819 clamd[20016]: stream: HTML.Phishing.Auction-100 FOUND 
    Jun 24 23:25:16 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 25 02:52:07 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 11 10:44:21 s69819 clamd[20016]: stream: HTML.Phishing.Acc-4 FOUND 
    Jun 11 11:13:04 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 11 12:49:04 s69819 clamd[20016]: stream: HTML.Phishing.Pay-135 FOUND 
    Jun 11 12:49:08 s69819 clamd[20016]: stream: HTML.Phishing.Pay-135 FOUND 
    Jun 11 17:37:26 s69819 clamd[20016]: stream: HTML.Phishing.Bank-159 FOUND 
    Jun 11 17:37:26 s69819 clamd[20016]: stream: HTML.Phishing.Bank-159 FOUND 
    Jun 12 07:38:06 s69819 clamd[20016]: stream: HTML.Phishing.Pay-135 FOUND 
    Jun 12 12:48:02 s69819 clamd[20016]: stream: HTML.Phishing.Bank-159 FOUND 
    Jun 12 15:55:23 s69819 clamd[20016]: stream: HTML.Phishing.Auction-102 FOUND 
    Jun 12 19:36:22 s69819 clamd[20016]: stream: HTML.Phishing.Bank-159 FOUND 
    Jun 13 05:51:28 s69819 clamd[20016]: stream: HTML.Phishing.Pay-144 FOUND 
    Jun 13 06:46:29 s69819 clamd[20016]: stream: HTML.Phishing.Pay-135 FOUND 
    Jun 13 07:00:51 s69819 clamd[20016]: stream: HTML.Phishing.Bank-459 FOUND 
    Jun 13 07:00:55 s69819 clamd[20016]: stream: HTML.Phishing.Bank-459 FOUND 
    Jun 13 11:33:24 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 13 12:03:05 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 13 13:35:41 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 13 14:44:10 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 13 15:56:24 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 13 16:55:19 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 13 21:26:22 s69819 clamd[20016]: stream: HTML.Phishing.Pay-144 FOUND 
    Jun 14 04:47:05 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 14 05:51:19 s69819 clamd[20016]: stream: HTML.Phishing.Pay-110 FOUND 
    Jun 14 17:13:15 s69819 clamd[20016]: stream: HTML.Phishing.Pay-144 FOUND 
    Jun 14 22:14:55 s69819 clamd[20016]: stream: HTML.Phishing.Bank-28 FOUND 
    Jun 14 22:14:55 s69819 clamd[20016]: stream: HTML.Phishing.Bank-28 FOUND 
    Jun 15 07:51:23 s69819 clamd[20016]: stream: HTML.Phishing.Pay-152 FOUND 
    Jun 15 07:51:24 s69819 clamd[20016]: stream: HTML.Phishing.Pay-152 FOUND 
    Jun 15 10:42:38 s69819 clamd[20016]: stream: HTML.Phishing.Bank-490 FOUND 
    Jun 15 13:18:53 s69819 clamd[20016]: stream: HTML.Phishing.Pay-35 FOUND 
    Jun 15 13:18:54 s69819 clamd[20016]: stream: HTML.Phishing.Pay-35 FOUND 
    Jun 15 13:35:44 s69819 clamd[20016]: stream: HTML.Phishing.Bank-28 FOUND 
    Jun 15 13:35:45 s69819 clamd[20016]: stream: HTML.Phishing.Bank-28 FOUND 
    Jun 15 23:32:55 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 15 23:47:35 s69819 clamd[20016]: stream: HTML.Phishing.Bank-362 FOUND 
    Jun 16 01:26:11 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 16 01:30:00 s69819 clamd[20016]: stream: HTML.Phishing.Pay-33 FOUND 
    Jun 16 03:03:41 s69819 clamd[20016]: stream: HTML.Phishing.Bank-490 FOUND 
    Jun 16 09:40:24 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:40:24 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:41:22 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:41:22 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:42:18 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:42:18 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:42:46 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:42:46 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:43:20 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:43:20 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:43:50 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 09:43:50 s69819 clamd[20016]: stream: HTML.Phishing.Pay-16 FOUND 
    Jun 16 13:48:49 s69819 clamd[20016]: stream: Trojan.Downloader.Bagle-15 FOUND 
    Jun 16 13:48:52 s69819 clamd[20016]: stream: Trojan.Downloader.Bagle-15 FOUND 
    Jun 17 15:17:03 s69819 clamd[20016]: stream: HTML.Phishing.Auction-100 FOUND

# See also

For other efficacy statistics see [combatting spam](/wiki/combatting_spam).