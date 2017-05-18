---
title: Locale settings
tags: snippets
---

I'm not longer using `LC_ALL` to have stuff in Spanish (`es_ES.UTF-8`) because it can cause garbled characters to appear in my source code when I do automated build date updating (for example, *sábado*, the Spanish name for "Saturday" includes a non-ASCII character). So now I'm setting `LANG` to Spanish and `LC_TIME` to `en_US.UTF-8`; this should give me Spanish everything, except for dates.
