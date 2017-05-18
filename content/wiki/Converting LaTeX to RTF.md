---
tags: wiki
---

I was recently looking for a copy of the [GPL](/wiki/GPL) version 3 in [RTF](/wiki/RTF) format but the [FSF](/wiki/FSF) website only provides copies in plain text, [LaTeX](/wiki/LaTeX) or [Texinfo](/wiki/Texinfo) formats ([see here](http://www.gnu.org/licenses/gpl-3.0.html)).

The reason I wanted an RTF version is that I was hoping for a soft-wrapped version that would look nice when displayed in [Apple](/wiki/Apple)'s installer, but I didn't want to install the enormous [TeX](/wiki/TeX)/LaTeX machinery in order to work with the formats provided by the FSF.

I found [this](http://sourceforge.net/projects/latex2rtf/) handy tool, `latex2rtf`, which is able to work largely independently.

    # download and extract
    curl -O "http://jaist.dl.sourceforge.net/sourceforge/latex2rtf/latex2rtf-1.9.16a.tar.gz"
    tar xzvf latex2rtf-1.9.16a.tar.gz 
    cd latex2rtf-1.9.16a

    # build
    make

    # check: fails miserably unless you install it first
    make check

    # try it out on the GPL (fails miserably)
    curl -O http://www.gnu.org/licenses/gpl-3.0.tex
    ./latex2rtf gpl-3.0.tex 

    # seems you have to install it first to get it to work
    sudo make install

    # now check fails less spectacularly
    make check

    # and the conversion works
    latex2rtf gpl-3.0.tex

However, in the end the generated RTF still had the unwanted hard wrapping in some sections, so I ended up just undoing the wrapping in [TextMate](/wiki/TextMate) (Control-Option-Q) and then adding appropriate styling in TextEdit.
