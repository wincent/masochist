```shell
SCRIPTS=scripts/attic/03-legacy-importer
$SCRIPTS/importer > legacy.json   # Scrapes website.
$SCRIPTS/import-planner           # Makes legacy-plan.json.
$SCRIPTS/import-prep-images       # Downloads and renames images (under "public").
$SCRIPTS/import-prep-redirects    # Creates redirect stubs (under "a").
$SCRIPTS/import-preview           # Creates Markdown previews (under "preview").

# For actually running the importer, install the filter script
# and clean the worktree.
cp legacy-plan.json $SCRIPTS/import-filter ~/bin
git stash -u
git br archive/content-$(date +%Y-%m-%d)

# Actual rewrite the history.
git filter-branch -f --parent-filter ~/bin/import-filter HEAD

# Finally, bump `redisCacheVersion` etc.
# (follow instructions in main "content" branch README.md).
# And use scp/rsync to move redirects and images into place on server
# and on "master" branch.
```
