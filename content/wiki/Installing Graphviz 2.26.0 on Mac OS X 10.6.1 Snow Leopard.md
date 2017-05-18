---
tags: doxygen graphviz snow.leopard wiki
---

```shell
$ curl -O http://www.graphviz.org/pub/graphviz/stable/macos/snowleopard/graphviz-2.26.0.pkg
$ open graphviz-2.26.0.pkg
```

# Note on using [Graphviz](/wiki/Graphviz) with [Doxygen](/wiki/Doxygen)

The package installs the `dot` [command line](/wiki/command_line) tool into `/usr/local/bin/`, so if you are using [Graphviz](/wiki/Graphviz) with [Doxygen](/wiki/Doxygen) you may need to ensure that your `Doxyfile` contains an entry like:

    DOT_PATH  = /usr/local/bin
