---
tags: mldonkey wiki
---

Be sure to change the [max\_hard\_download\_rate](/wiki/max_hard_download_rate) from the default value of 50 to something higher (1000, for example). You should also raise the [max\_hard\_upload\_rate](/wiki/max_hard_upload_rate) from its default (10) to something higher as well (40, for example); apart from being the right thing to do, in general connecting clients will give you more data if you give them more data. In both cases the values for [max\_hard\_download\_rate](/wiki/max_hard_download_rate) and [max\_hard\_upload\_rate](/wiki/max_hard_upload_rate) should be about 80 percent of the maximum downstream and upstream bandwidth provided by your link.

The default values for [max\_opened\_connections](/wiki/max_opened_connections), [max\_connections\_per\_second](/wiki/max_connections_per_second) and [max\_concurrent\_downloads](/wiki/max_concurrent_downloads) are probably all acceptable.
