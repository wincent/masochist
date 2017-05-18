---
tags: git wiki
---

In order to sign or verify tags with [Git](/wiki/Git) it is necessary to have [GnuPG](/wiki/GnuPG) installed. Notes on how I installed it on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger) can be found in "[Git quickstart](/wiki/Git_quickstart)".

# Problems on [Mac OS X](/wiki/Mac_OS_X) with [Git 1.5.2.3](/wiki/Git_1.5.2.3) and earlier

I was puzzled at first to find that I could never verify signatures using [Git 1.5.2.3](/wiki/Git_1.5.2.3) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger). It turns out that this has already been fixed in [this commit](http://repo.or.cz/w/git.git?a=commitdiff;h=bfc04bb9b847912ee41a21fc23110962851878b2), but I reproduce the troubleshooting information gathered below for historical reasons.

## Troubleshooting

    # create new, empty repository
    mkdir playground
    cd playground
    git-init

    # add some content
    echo 'hello, world!' > greeting.txt
    git add greeting.txt 
    git-commit

    # add tag
    git-tag -s v0.2

This appears to successfully sign the tag:

    Necesita una frase contraseña para desbloquear la clave secreta
    del usuario: "Wincent Colaiuta <win@wincent.com>"
    clave DSA de 1024 bits, ID 134D9429, creada el 2007-07-10

But verification does not work:

    # verify tag
    git tag -v v0.2

As shown below:

    object 3418e660181ac2e25dcdd561ef5aa4e584203c68
    type commit
    tag v0.2
    tagger Wincent Colaiuta <win@wincent.com> Tue Jul 10 15:58:56 2007 +0200

    Yet another tag.
    sed: 1: "/-----BEGIN PGP/Q": invalid command code Q
    gpg: Firmado el Tue Jul 10 15:59:03 2007 CEST usando clave DSA ID 134D9429
    gpg: Firma INCORRECTA de "Wincent Colaiuta <win@wincent.com>"

First, note the `sed` error ("`invalid command code Q`") and the fact that the signature is rejected ("Firma INCORRECTA").

So I tried to verify a known valid signature. This time, a recent tag from the [Git](/wiki/Git) repository itself:

    # in cloned copy of repository:
    git-tag -v v1.5.3-rc0

Output:

    object 2ecf3cee0754961401200e9f35071001ccdbbce3
    type commit
    tag v1.5.3-rc0
    tagger Junio C Hamano <gitster@pobox.com> Mon Jul 2 23:56:55 2007 -0700

    GIT 1.5.3-rc0
    sed: 1: "/-----BEGIN PGP/Q": invalid command code Q
    cat: .git/.tmp-vtag: Bad file descriptor
    gpg: Firmado el Tue Jul  3 08:56:59 2007 CEST usando clave DSA ID F3119B9A
    gpg: Imposible comprobar la firma: Clave pública no encontrada

Again note the `sed` error. Also note how it says (in Spanish) "unable to verify the signature: public key not found". I found in [this mailing list post](http://article.gmane.org/gmane.comp.version-control.git/51311) a hint on how to get Junio's public key from the repository itself (I was unable to find a home page for Junio or a public key in any of the public keyservers i know about).

    # see the public key
    git-cat-file blob junio-gpg-pub

    # import it
    git-cat-file blob junio-gpg-pub | gpg --import

Yields:

    gpg: clave F3119B9A: clave pública "Junio C Hamano <junkio@cox.net>" importada
    gpg: Cantidad total procesada: 1
    gpg:               importadas: 1</pre

    After successfully importing I again tried to verify a tag:

    <pre>git-tag -v v1.5.3-rc0

But this again failed with the same error message (in Spanish) "signature INCORRECT":

    object 2ecf3cee0754961401200e9f35071001ccdbbce3
    type commit
    tag v1.5.3-rc0
    tagger Junio C Hamano <gitster@pobox.com> Mon Jul 2 23:56:55 2007 -0700

    GIT 1.5.3-rc0
    sed: 1: "/-----BEGIN PGP/Q": invalid command code Q
    gpg: Firmado el Tue Jul  3 08:56:59 2007 CEST usando clave DSA ID F3119B9A
    cat: .git/.tmp-vtag: Bad file descriptor
    gpg: Firma INCORRECTA de "Junio C Hamano <junkio@cox.net>"

Once again, note that there is still a `sed` error.
