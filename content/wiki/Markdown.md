---
tags: wiki
title: Markdown
---

# References

-   Original definition: http://daringfireball.net/projects/markdown/
-   Wikipedia: https://en.wikipedia.org/wiki/Markdown
-   Standardization: https://spec.commonmark.org/

# Examples

-   Bulleted.
-   Lists.

1. Numbered.
2. Lists.

~~Strikethrough~~ (requires double `~~` on each side, as I constantly forget, having been brainwashed by Slack...)

Text with footnotes[^note].

> Block quotes.

[^note]: Well, one footnote.

# GitHub flavored markdown

## Alerts

"Note"/"Warning" (etc) ([announcement](https://github.com/orgs/community/discussions/16925), [changelog](https://github.blog/changelog/2023-12-14-new-markdown-extension-alerts-provide-distinctive-styling-for-significant-content/), [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)):

```
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```
