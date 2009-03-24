---
tags: sudo
---

If you are logged in as user `john` and run this command:

    $ sudo monit summary

Then `sudo` will use `john`'s `PATH` to find the `monit` executable.

If you instead do:

    $ sudo -s
    # monit summary

Then you might find yourself in a root shell with an emaciated `PATH` that doesn't include `/usr/local/bin` (where the `monit` executable is typically installed).

Your alternative here is to instead do:

    $ sudo -i
    # monit summary

This will run the usual shell startup files (`/root/.bash_profile`, for example), so you can set up your `PATH` appropriately.
