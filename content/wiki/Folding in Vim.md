---
tags: vim folds wiki
---

# Overview

-   `:set foldmethod=indent`: turn on indentation-based folding
-   `:set foldmethod=syntax`: turn on syntax-based folding
-   `:set foldmethod=manual`: turn on manual folding (the default)
-   `zj`: move down to next fold
-   `zk`: move up to previous fold
-   `zo`: open fold at cursor
-   `zO`: open all folds at cursor (recursively)
-   `zc`: close current fold
-   `zC`: close all folds
-   `za`: toggle fold at cursor
-   `zA`: toggle all folds
-   `zm`: increase fold level by one (mnemonic: "\[m\]ore folds")
-   `zM`: increase fold level to maximum, closing all folds
-   `zr`: reduce fold level by one (mnemonic: "\[r\]educe folds")
-   `zR`: reduce fold level to zero, opening and removing *all* folds
-   `zd`: delete fold at cursor
-   `zi`: enable/disable folding (same as `:set foldenable` or `:set nofoldenable`)

# Settings

```vim
set foldmethod=syntax " local to window
set foldlevel=1       " local to window
set foldlevelstart=1  " global
```

# See also

-   <http://www.linux.com/archive/feature/114138>
