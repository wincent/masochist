---
tags: os.x karabiner wiki
---

# `to_if_alone_timeout_milliseconds`

- **Default:** 1000ms
- **Example:**
  - Set to 500ms with *Caps Lock* mapped `to_if_alone` to *Backspace*, *Control* otherwise.
  - Press for 495ms: see *Control* down, *Control* up, *Backspace* down, *Backspace* up.
  - Press for 505ms: see *Control* down, *Control* up.
  - Chord with other key:
    - With rollover: see *Control* down, *Other* down, *Control* up, *Other* up.
    - Without rollover: see *Control* down, *Other* down, *Other* up, *Control* up.
