---
tags: mldonkey wiki
---

Be sure to change the [max_hard_download_rate](/wiki/max_hard_download_rate) from the default value of 50 to something higher (1000, for example). You should also raise the [max_hard_upload_rate](/wiki/max_hard_upload_rate) from its default (10) to something higher as well (40, for example); apart from being the right thing to do, in general connecting clients will give you more data if you give them more data. In both cases the values for [max_hard_download_rate](/wiki/max_hard_download_rate) and [max_hard_upload_rate](/wiki/max_hard_upload_rate) should be about 80 percent of the maximum downstream and upstream bandwidth provided by your link.

The default values for [max_opened_connections](/wiki/max_opened_connections), [max_connections_per_second](/wiki/max_connections_per_second) and [max_concurrent_downloads](/wiki/max_concurrent_downloads) are probably all acceptable.
