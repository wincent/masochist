---
tags: xcode wiki
cache_breaker: 1
---

Factory templates can be found in `/Developer/Library/Xcode/`.

# File templates

For example, the Cocoa Objective-C class template is stored at `/Developer/Library/Xcode/File Templates/Cocoa Class/Objective-C class/Objective-C class.pbfiletemplate/`.

To make a custom template, copy the appropriate `.pbfiletemplate` folder into `~/Library/Application Support/Developer/Shared/Xcode/` and modify it.

For example, I have a customized version of the Cocoa Objective-C class template that includes the BSD license boilerplate at `~/Library/Application Support/Developer/Shared/Xcode/File Templates/Cocoa Class/Objective-C class/Objective-C class with BSD license.pbfiletemplate/`.

# Project templates

Example:

-   `/Developer/Library/Xcode/Project Templates/Framework & Library/Bundle/Cocoa Bundle`

Becomes:

-   `~/Library/Application Support/Developer/Shared/Xcode/Project Templates/Framework & Library/Bundle/Cocoa Bundle`
