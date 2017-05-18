---
title: Enhancements to UpdateXibs script (buildtools, 30cf542)
tags: snippets
---

The script now performs multiple functions: creates/updates strings files in the base language if required; creates xibs in the target languages if required; creates/updates strings files in the target languages if required; merges new strings from the base language strings files into the target language strings files; extracts incremental strings files (containing new and untranslated strings in the target language); and combines incremental strings files with existing translations.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
