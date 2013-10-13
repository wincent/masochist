---
tags: data.structures algorithms trees
---

A tree rotation, used in such data structures as [AVL trees](/wiki/AVL_trees) and [Red-Black trees](/wiki/Red-Black_trees) (so-called "self-balancing" [binary search trees](/wiki/binary_search_trees)), can be used to change the depth of a pair of subtrees while preserving the older that the elements would be visited using an in-order traversal.

Example of a right rotation:

    Before:            After:
    -----------------------------
        D                 B
       / \               / \
      B   E    -->      A   D
     / \                   / \
    A   C                 C   E

Note the traversal order (A, B, C, D, E) of an in-order [depth-first search](/wiki/depth-first_search) is the same for both trees. Likewise, if this is a [binary search tree](/wiki/binary_search_tree), the invariant — that the left subtree contains only nodes less than or equal to the subtree's root, and the right subtree contains only nodes greater than or equal to the subtree's root — is maintained.

The pseudo code shows that rotation is a constant time (*O(1)*) operation:

    # right rotation:
    pivot = root.left_child             # ie. the "pivot" (the new root) will be B
    root.left_child = pivot.right_child # ie. C
    pivot.right_child = root            # ie. root gets transplanted beneath pivot
    root = pivot                        # pivot becomes new root
      
    # left rotation (reversing the process):
    pivot = root.right_child            # this time D is the pivot
    root.right_child = pivot.left_child # ie. C
    pivot.left_child = root             # ie. root gets transplanted
    root = pivot
