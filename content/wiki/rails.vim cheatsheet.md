---
tags: rails vim wiki
---

# Find a file (with tab completion)

-   `:Rfind PostsController`
-   `:Rfind models/article`

# Goto file under cursor

-   `gf` (opens in current window)
-   `CTRL-W_f` (opens in split)

# Editing "alternate" files

"Alternate" files are usually specs, and their corresponding file:

-   `:A` (edit alternate file)
-   `:AS` (in split)
-   `:AV` (in vertical split)

# Editing "related" files

"Related" files are things like view templates and controllers:

-   `:R` (edit related file)
-   `:RS` (in split)
-   `:RV` (in vertical split)

# Summary of "alternate" and "related" files

-   in a **model** the "alternate" is the **spec** and the "related" is the **schema**
-   in a **controller** (method) the "alternate" is the **spec** and the "related" is the **view**
-   in a **view** the "alternate" is the **spec** and the "related" is the **controller** (method)

Less frequently used are:

-   in a **migration** the "alternate" is the **previous migration** and the "related" is the **next migration**
-   in **`config/database.yml`** the "alternate" is **`config/routes.rb`** and the "related" is **`config/environments/*.rb`**

# Explicit jumping commands

These all have tab completion, reasonable defaults, and variants for opening in splits (`:RS...`) and vertical splits (`:RV...`):

-   `:Rcontroller`
-   `:Renvironment`
-   `:Rfixtures`
-   `:Rhelper`
-   `:Rjavascript`
-   `:Rlayout`
-   `:Rlib`
-   `:Rmailer`
-   `:Rmigration`
-   `:Rmodel`
-   `:Robserver`
-   `:Rtask`
-   `:Rview`
-   `:Rspec`

# [Rake](/wiki/Rake) integration

-   `:Rake {task}`

The default is to run the spec for the file in the current buffer. (In practice not really very usable because for long-running specs you lose control of Vim for the duration.)
