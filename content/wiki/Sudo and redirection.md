---
tags: unix wiki
---

If you've ever wanted to write text to a root-owned file you may have been frustrated to see that:

    # overwriting
    sudo echo foo > bar

    # appending
    sudo echo foo >> bar

doesn't work. It fails because only `echo` is executed with root privileges and by the time we get to the redirection we are back to running with the privileges of the user that owns the shell.

# The `tee` workaround

    # overwriting
    echo foo | sudo tee bar

    # appending
    echo foo | sudo tee -a bar

# The `sh -c` workaround

     # overwriting
    sudo sh -c "echo foo > bar"

    # appending
    sudo sh -c "echo foo >> bar"
