---
tags: pkg os.x
---

It used to be the case that you could install packages on Mac OS X by using `lsbom` to inspect the list of installed files recorded in the files under `/Library/Receipts`.

In [Snow Leopard](/wiki/Snow_Leopard), that location changed to `/private/var/db/receipts`.

At some point — I'm not sure which — [Apple](/wiki/Apple) added an easier-to-use solution in the form of `pkgutil`.

```shell
$ pkgutil --pkgs # list all installed packages
$ pkgutil --files the-package-name.pkg # list installed files
```

After visually inspecting the list of files you can do something like:

```shell
$ pkgutil --pkg-info the-package-name.pkg # check the location
$ cd / # assuming the package is rooted at /...
$ pkgutil --only-files --files the-package-name.pkg | tr '\n' '\0' | xargs -n 1 -0 sudo rm -i
$ pkgutil --only-dirs --files the-package-name.pkg | tr '\n' '\0' | xargs -n 1 -0 sudo rm -ir
```

Needless to say, *extreme* care should always be taken when removing files with root privileges. Particularly, be aware that some packages may update shared system components, so uninstalling them can actually break your system by removing a necessary component.

For smaller packages it is probably safer to just manually remove the files after visually inspecting the package file listing.

Apparently, there was once an `--unlink` option available in `pkgutil`, but as of [Lion](/wiki/Lion) it is not mentioned in the man page. Perhaps it was removed because it was deemed too dangerous.

Once you've uninstalled the files, you can remove the receipt with:

```shell
$ sudo pkgutil --forget the-package-name.pkg
```

For more details, see the `pkgutil` man page.
