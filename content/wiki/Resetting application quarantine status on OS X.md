---
tags: os.x
---

To avoid a recurring "X is an application downloaded from the internet" warning:

```
sudo xattr -d com.apple.quarantine /Applications/Arq.app
```
