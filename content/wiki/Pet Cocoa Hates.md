---
tags: wiki
---

The `containsObject:` method in `NSArray` determines object equality using `isEqual:`.

The method of the same name in `NSSet` appears to use a pointer comparison.

To achieve the same effect using `NSSet` you must use the `member:` method.

I find this inconsistency to be an annoying trap waiting for the unwary programmer. In addition to the lack of consistency there's also the fact that the naming of the `containsObject:` and `member:` methods of `NSSet` seems arbitrary rather than intuitive.
