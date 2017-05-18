---
tags: vim wiki
cache_breaker: 1
---

A [modal text editor](/wiki/modal_text_editor) is a, nowadays rare, text editor that offers multiple interaction modes which are optimized for specific types of action and interaction. The rationale is that each mode is a finely-tuned tool which allows the user to realize their objectives in an efficient and powerful manner. This does require more learning than you might be accustomed to as a user of a non-modal editor, but the reward is hopefully increased efficiency and power.

For example, [Vim](/wiki/Vim) has various modes such as:

-   Insert mode: this is the mode you use for inserting (typing) most text.
-   Visual mode: this is the mode you use for selecting text; it has various submodes which are especially for selecting characterwise, linewise, and even blockwise (that is, non-contiguous selections defined by a rectangle on the screen)
-   Normal mode: this is the mode you use for issuing basic commands for doing things like copying, pasting, deleting, moving the cursor and so on.
-   Command mode: this is the mode you use for issuing commands, such as opening and closing files, writing files to disk, and performing find-and-replace.
-   Search mode: probably requires no explanation.

The idea here is that you make a trade-off of complexity for power. (To be more precise, each mode is often more *simple* because it is generally optimized for a specific task of reduced scope, but the number of different modes can make the system as a whole seem more complex.)

[Vi](/wiki/Vi) and [Vim](/wiki/Vim) are probably the most famous [modal editors](/wiki/modal_editors).

Most text editors are non-modal. [Emacs](/wiki/Emacs) is an example. Non-modal editors are generally much easier to use for beginners who come to editing with a set of expectations conditioned by their prior experiences (due to the ubiquity of non-modal editors, most users have experience only with them). The downside, however, is that this easy-to-use but dumbed-down design makes it harder for the user to achieve optimally efficient and powerful workflows. In order to become efficient and do powerful things the user must learn complex keyboard incantations and become proficient in editor customization and programming. Here, [Emacs](/wiki/Emacs) is the epitome of the powerful-but-complex non-modal editor.

Most agree that neither approach is inherently superior and that it ultimately boils down to a matter of taste.
