---
tags: tiger git updates os.x
---

These notes were made while upgrading to [Git 1.5.3](/wiki/Git_1.5.3) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger), using a local clone of the central [Git](/wiki/Git) repository.

# Updating the local repository

From inside the local repository:

    git pull

# Verification

Now we can check the signature on the tag:

    git tag -v v1.5.3

## Output

    object 86bab9615c3516d4ac7756ae3c1285d331b78f04
    type commit
    tag v1.5.3
    tagger Junio C Hamano <gitster@pobox.com> 1188716400 -0700

    GIT 1.5.3
    gpg: Firmado el Sun Sep  2 02:56:52 2007 CEST usando clave DSA ID F3119B9A
    gpg: Firma correcta de "Junio C Hamano <junkio@cox.net>"
    gpg:                 alias "[jpeg image of size 1513]"
    gpg: ATENCIÓN: ¡Esta clave no está certificada por una firma de confianza!
    gpg:           No hay indicios de que la firma pertenezca al propietario.
    Huellas dactilares de la clave primaria: 3565 2A26 2040 E066 C9A7  4A7D C0C6 D9A4 F311 9B9A

Note that you may actually get an error when verifying on [Mac OS X](/wiki/Mac_OS_X) using an older version of [Git](/wiki/Git), due to non-portable [sed](/wiki/sed) usage in older versions of Git. If you retry the verification after upgrading verification should complete successfully.

# Rebuilding, testing and installing

    # switching working tree to 1.5.3
    git checkout v1.5.3

    # clean up any cruft that might be lying around
    make clean

    # build
    make prefix=/usr/local all

    # run tests
    make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install

# Installing the documentation

As before I didn't bother building the documentation myself -- it just takes too long; instead I just downloaded and installed it:

    # get man pages
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.3.tar.bz2.sign git-manpages-1.5.3.tar.bz2

    # install
    cd /usr/local/man
    sudo tar xjvf full_path_to_manpages_archive/git-manpages-1.5.3.tar.bz2
