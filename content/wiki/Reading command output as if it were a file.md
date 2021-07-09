---
tags: wiki shell
title: Reading command output as if it were a file
---

```bash
# Example: open a file in Vim as it looked in a particular commit:
vim <(git show upstream/master:modules/apps/frontend-js/frontend-js-aui-web/src/main/resources/META-INF/resources/liferay/xml_formatter.js)
```
