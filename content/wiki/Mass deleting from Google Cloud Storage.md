---
tags: google wiki
---

I wanted to delete a huge [Arq](/wiki/Arq) backup set, but that was taking forever in the Arq UI with no real feedback, so I tried to do the same from [Google's web UI](https://console.cloud.google.com/) and that just timed out interminably as well. The solution is to use the CLI tool.

1. Download [the official Cloud Tools](https://cloud.google.com/sdk/docs/).
2. Unpack, then authorize: `./bin/gcloud init`
3. List the bucket you want to delete with `gsutil ls` (eg. `./bin/gsutil ls gs://arq-arq-backup-data-1023`).
4. Delete it with `gsutil -m rm -r` (eg. `./bin/gsutil -m rm -r gs://arq-arq-backup-data-1023`).

Note the use of the `-m` flag, which makes the `rm` operation run in parallel, and about an order of magnitude faster.
