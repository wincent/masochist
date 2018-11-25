---
tags: wiki gmail
---

# Targeting mailing list messages *except* those send directly to you

This allows me to move everything sent to the Git mailing list into a folder, except for messages sent directly to me (in the `to:`, `cc:` or `bcc:` fields), which stay in my inbox:

```
list:(<git.vger.kernel.org>) -{to:(greg@hurrell.net) cc:(greg@hurrell.net) bcc:(greg@hurrell.net) to:(win@wincent.com) cc:(win@wincent.com) bcc:(win@wincent.com)}
```
