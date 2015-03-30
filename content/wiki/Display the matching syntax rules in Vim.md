---
tags: vim
---

# Mapping to show matching highlight rules at current position

    map <F10> :echo "hi<" . synIDattr(synID(line("."),col("."),1),"name") . '> trans<' . synIDattr(synID(line("."),col("."),0),"name") . "> lo<" . synIDattr(synIDtrans(synID(line("."),col("."),1)),"name") . ">"<CR>

## Source

<http://vim.wikia.com/wiki/Identify_the_syntax_highlighting_group_used_at_the_cursor>
