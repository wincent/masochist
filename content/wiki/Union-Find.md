---
tags: data.structures
cache_breaker: 1
---

The [Union-Find](/wiki/Union-Find) data structure, also known as the [Disjoint-set](/wiki/Disjoint-set) data structure, can be used to track and manage membership within partitions of a set.

Each member has a pointer to a "leader" element that identifies the partition. The leader's leader pointer points to itself. This is maintained as an invariant throughout.

# Operations

-   **Union**: Given two partitions, fuse them into a single partition. This is an *O(n)* operation in the worst case, although in specific applications it can amortize to be *O(log n)* globally over the course of an algorithm
-   **Find**: Given an element, return the "leader" identifying the partition to which the element belongs. This is an *O(1)* operation.

## Union

If we store a "size" value for each partition, we can make sure we always pick the smallest partition during a union operation and update that partition's members' leader pointers. This means updating *n/2* pointers in the worst case.

In an algorithm like [Kruskal's Algorithm](/wiki/Kruskal%27s_Algorithm), the union cost amortizes to *O(log n)* over the course of the algorithm because, if we always pick the smallest partition to update, we know that each partition will at least double in size with every fusion. This in turn means that we update each vertex at most *log n* times over the course of the algorithm, and the total cost of maintaining our invariant is *O(n log n)*; the running time of the algorithm, overall, then, is dominated by the *O(m log n)* sorting step.

# Example applications

-   The [Union-Find](/wiki/Union-Find) data structure can be used to speed up [Kruskal's Algorithm](/wiki/Kruskal%27s_Algorithm) for computing [Minimum Spanning Trees](/wiki/Minimum_Spanning_Trees) (making it run in *O(m log n)*, compared with *O(mn)* for the naïve approach)

# Optimizations of the Union-Find data structure

## Lazy Union

Instead of updating the "leader" pointers of all members in a partition, we can merely update the pointer of the old root to point at the new leader. This makes the union operation fast at the cost of making the find operation slower (as it potentially has to traverse one or more parent links before finding the definitive leader).

In the degenerate case, both union and find operations devolve into linear operations, because we can wind up with a deep and narrow tree that is essentially a linked list. Find becomes an *O(n)* operation, and union does as well (because internally, union must invoke find to identify the leaders of the two partitions being merged).

## Union by Rank

By adding a "rank" measure to each node we can make good choices about which subtree should be made a child of which root.

We define leaf nodes to have rank 0, and each parent has rank 1 more than its child. When merging, we always attach the shallowest subtree as child of the other subtree's root node. This is known as "union by rank".

With this approach, find is at worst an *O(log n)* operation, and union is also (because it depends on find under the covers).

## Path Compression

Here we reduce the cost of repeated find operations by updating the parent pointers of any nodes whose parent links we traverse on the way to finding a leader. We leave the root node and children of the root node untouched. This is effectively like "transplanting" the lengthier chains higher up into the tree, making the tree shallower.

We do not update the rank information of any nodes at all (which is nice as it frees us from having to explore the subtrees).

Via the Hopcroft-Ullman analysis, the cost of performing *m* union or find operations on such a data structure is *O(m log\*n)*, where *log\*n* is the "iterated logarithm operator" (ie. how many times you need to apply log to *n* before the result is 1 or less). This is an extremely slow-growing function, and for all practical purposes is 5 or less for all imaginable values of *n*.

Tarjan came up with an even tighter analysis, putting the bound at *O(m α(n))* where *α(n)* ("alpha(n)") is the inverse Ackermann function, an even more slowly growing function than the iterated log function.

## Implementation notes

In most implementations, an underlying array implementation would be used to store the parent links and rank values.

# See also

-   [Wikipedia](/wiki/Wikipedia) article on [disjoint-sets](/wiki/disjoint-sets): <http://en.wikipedia.org/wiki/Disjoint-set_data_structure>

