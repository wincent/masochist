---
title: Synergy Advance r368, 37 items changed
tags: snippets
---

Refactoring of Dock code: support for Code Signing in Leopard requires us to abandon the self-modifying Info.plist trick for hiding the Dock icon, but the alternatives (Carbon TransformProcessType API and/or separate Dock helper application) impose unacceptable limitations; so have removed the ability to hide the Dock icon while keeping existing Dock code bundled as a separate plug-in and will be adding more functionality to justify the investment in Dock "real estate". Added preferences UI for modifying color and transparency of various elements.
