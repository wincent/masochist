---
tags: cheetah.template.engine wiki
---

# Obtaining [Cheetah](/wiki/Cheetah)

<http://cheetahtemplate.org/download.html>

    wget http://belnet.dl.sourceforge.net/sourceforge/cheetahtemplate/Cheetah-2.0rc7.tar.gz
    tar zxvf Cheetah-2.0rc7.tar.gz

# Installing on [Mac OS X Tiger](/wiki/Mac_OS_X_Tiger) [10.4.8](/wiki/10.4.8)

<http://cheetahtemplate.org/docs/users_guide_html_multipage/gettingStarted.install.html>

    cd Cheetah-2.0rc7
    sudo python setup.py install

In reality this installs into `/System/Library/Frameworks/Python.framework/Versions/2.3/bin` (alongside) python so it makes sense to add this to the path then run the tests:

    PATH=$PATH:/System/Library/Frameworks/Python.framework/Versions/2.3/bin
    cheetah test

All tests should pass:

    Ran 2050 tests in 31.012s

# Uninstalling

    sudo rm -rf /Library/Python/2.3/site-packages/Cheetah
    sudo rm /System/Library/Frameworks/Python.framework/Versions/2.3/bin/cheetah
    sudo rm /System/Library/Frameworks/Python.framework/Versions/2.3/bin/cheetah-compile

# Installing with Python 2.5

After [installing Python 2.5](/wiki/installing_Python_2.5) I re-installed Cheetah:

    cd Cheetah-2.0rc7
    sudo python setup.py install
    cheetah test

This installs the `cheetah` and `cheetah-compile` binaries into `/usr/local/bin/` and the other [Cheetah](/wiki/Cheetah) files into `/usr/local/lib/python2.5/site-packages/Cheetah/`.
