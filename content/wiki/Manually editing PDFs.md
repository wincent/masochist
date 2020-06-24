---
tags: wiki pdf
title: Manually editing PDFs
---

You can edit using a tool like [Hex Fiend](https://ridiculousfish.com/hexfiend/).

As per [this tip](https://unix.stackexchange.com/questions/17220/how-to-view-and-edit-the-code-of-a-pdf-file), `qpdf` can be used to decompress streams in order to see the raw text as opposed to binary:

    brew install qpdf
    qpdf --qdf --object-streams=disable input.pdf output.pdf

Note that, to play it safe, it is best to preserve string lengths (so as not to break any offset-based access into parts of the file). You may have to adjust positional offsets in the file as well to make layout look correct (needed, for example, if you add spaces in order to preserve length).
