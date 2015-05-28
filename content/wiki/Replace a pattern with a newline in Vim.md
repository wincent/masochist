---
tags: vim
---

# Example: Replace `\n` with actual newlines

## Method one

Use `\r` as a replacement value:

    :%s/\\n/\r/g

## Method two

Type a literal newline in the replacement:

    :%s/\\n/<C-v><Enter>/g
