---
tags: tiger antlr wiki
---

Having downloaded the [ANTLR 3.0](/wiki/ANTLR_3.0) distribution (`antlr-3.0.tar.gz`) from the [ANTLR](/wiki/ANTLR) website, installation is straightforward.

    tar xzvf antlr-3.0.tar.gz

    # move expanded archive into position
    sudo mv antlr-3.0 /usr/local/

    # remove old symbolic link
    cd /usr/local/
    sudo rm -f antlr

    # set up new symbolic link
    sudo ln -s antlr-3.0 antlr

To actually use [ANTLR](/wiki/ANTLR) the jars must be in your classpath:

    export CLASSPATH="/usr/local/antlr/lib/antlr-3.0.jar"
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/antlr-2.7.7.jar" 
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/antlr-runtime-3.0.jar"
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/stringtemplate-3.0.jar"

These `export` statements can be added to your `~/.bash_profile` if you plan on using [ANTLR](/wiki/ANTLR) often.
