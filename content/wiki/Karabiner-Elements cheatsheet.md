---
tags: macos karabiner wiki cheatsheet
title: Karabiner-Elements cheatsheet
---

# `to_if_alone_timeout_milliseconds`

-   **Default:** 1000ms
-   **Example:**
    -   Set to 500ms with _Caps Lock_ mapped `to_if_alone` to _Backspace_, _Control_ otherwise.
    -   Press for 495ms: see _Control_ down, _Control_ up, _Backspace_ down, _Backspace_ up.
    -   Press for 505ms: see _Control_ down, _Control_ up.
    -   Chord with other key:
        -   With rollover: see _Control_ down, _Other_ down, _Control_ up, _Other_ up.
        -   Without rollover: see _Control_ down, _Other_ down, _Other_ up, _Control_ up.
