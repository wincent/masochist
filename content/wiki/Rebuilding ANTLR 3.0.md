---
tags: antlr
---

While investigating a possible [ANTLR](/wiki/ANTLR) [bugfix](http://www.antlr.org:8080/pipermail/antlr-interest/2007-June/021243.html) I came to a point where I wanted to build a modified [ANTLR](/wiki/ANTLR) jar and try it out. The [instructions](http://www.antlr.org/wiki/pages/viewpage.action?pageId=732) on the [ANTLR](/wiki/ANTLR) [wiki](/wiki/wiki) were helpful but did not tell the full story.

# Initial problems

Upon executing `ant build` from the top level of the [ANTLR](/wiki/ANTLR) distribution (at the same level as the `build.xml` file, the build process failed with this output (truncated for brevity here):

    Buildfile: build.xml

    generator:

    compile:
        [mkdir] Created dir: /Users/wincent/Desktop/ANTLR/antlr-3.0/build/classes
        [javac] Compiling 112 source files to /Users/wincent/Desktop/ANTLR/antlr-3.0/build/classes
        [javac] /Users/wincent/Desktop/ANTLR/antlr-3.0/src/org/antlr/test/BaseTest.java:30: package junit.framework does not exist
        [javac] import junit.framework.TestCase;
        [javac]                        ^

    ...

        [javac] Note: Some input files use unchecked or unsafe operations.
        [javac] Note: Recompile with -Xlint:unchecked for details.
        [javac] 100 errors

    BUILD FAILED
    /Users/wincent/Desktop/ANTLR/antlr-3.0/build.xml:72: Compile failed; see the compiler error output for details.

    Total time: 12 seconds

# Installing the [JUnit](/wiki/JUnit) dependency

I headed over to the [JUnit website](http://www.junit.org/index.htm) and downloaded [the latest version](http://downloads.sourceforge.net/junit/junit4.3.1.zip?use_mirror=internap) (4.3.1 at the time of writing).

    wget http://internap.dl.sourceforge.net/sourceforge/junit/junit4.3.1.zip

Then, with the help of the [JUnit](/wiki/JUnit) [FAQ](/wiki/FAQ) ("[How do I install JUnit?](http://junit.sourceforge.net/doc/faq/faq.htm#started_2)") I installed into `/usr/local/`:

    unzip junit4.3.1.zip 
    sudo mv junit4.3.1 /usr/local/
    cd /usr/local
    sudo ln -s junit4.3.1 junit
    cd junit
    sudo ln -s junit-4.3.1.jar junit.jar

Note that to test I had to insert not only the [JUnit](/wiki/JUnit) jar itself into the `CLASSPATH`:

    export CLASSPATH="$CLASSPATH:/usr/local/junit/junit.jar"

But the installation directory itself as well:

    export CLASSPATH="$CLASSPATH:/usr/local/junit"

Only then would the self-tests work:

    java org.junit.runner.JUnitCore org.junit.tests.AllTests

Output:

    JUnit version 4.3.1
    ...............................................................................................................................................................................................................................................................I.II......................................
    Time: 3,785

    OK (294 tests)

# Building [ANTLR](/wiki/ANTLR)

Now I was able to build [ANTLR](/wiki/ANTLR) without problems (note that [JUnit](/wiki/JUnit) was still in the `CLASSPATH`):

    # from the top-level of the ANTLR distribution
    ant build

Output:

    Buildfile: build.xml

    generator:

    compile:
        [javac] Compiling 112 source files to /Users/wincent/Desktop/ANTLR/antlr-3.0/build/classes
        [javac] Note: Some input files use unchecked or unsafe operations.
        [javac] Note: Recompile with -Xlint:unchecked for details.

    version-bcel:

    version:
         [echo] Install bcel in the classpath to have automatic version in jar name

    templates:
         [copy] Copying 35 files to /Users/wincent/Desktop/ANTLR/antlr-3.0/build/classes

    build:
          [jar] Building jar: /Users/wincent/Desktop/ANTLR/antlr-3.0/lib/antlr.jar

    BUILD SUCCESSFUL
    Total time: 5 seconds

# Trying out the new build

In order to try out the new build I had to alter my `CLASSPATH` so as to use the new version.

My existing `CLASSPATH` was:

-   .
-   `/usr/local/antlr/lib/antlr-3.0.jar`
-   `/usr/local/antlr/lib/antlr-2.7.7.jar`
-   `/usr/local/antlr/lib/antlr-runtime-3.0.jar`
-   `/usr/local/antlr/lib/stringtemplate-3.0.jar`

The basic procedure then is:

    # save old CLASSPATH so we can revert to it later
    OLD_CLASSPATH="$CLASSPATH"

    # prepend new ANTLR jar to CLASSPATH
    # it appears first and so will take precedence over the old jar
    export CLASSPATH="/Users/wincent/Desktop/ANTLR/antlr-3.0/lib/antlr.jar:$CLASSPATH"

    # run the ANTLR tool (here using a Walrus grammar as an example)
    java org.antlr.Tool Walrus.g

    # put the CLASSPATH back the way it was before
    export CLASSPATH="$OLD_CLASSPATH"

# See also

-   "How do I rebuild ANTLR v3?": <http://www.antlr.org/wiki/pages/viewpage.action?pageId=732>

