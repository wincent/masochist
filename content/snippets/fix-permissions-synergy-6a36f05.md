---
title: Fix permissions (Synergy, 6a36f05)
---

Fix braindead permissions that somehow creeped into the old Subversion repository (executable bits set on non-executable files), and which therefore were migrated over to the new Git repository as well.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
