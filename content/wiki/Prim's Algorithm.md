---
tags: algorithms
---

[Prim's Algorithm](/wiki/Prim%27s_Algorithm) is a fast algorithm for computing the [MST](/wiki/MST) ([minimum spanning tree](/wiki/minimum_spanning_tree)) of a connected graph.

# Algorithm description

Given a graph *G* described by a set of vertices *V* and edges between those vertices *E*:

1.  Pick a vertex *s* arbitrarily from *V*
2.  Create set *X*, containing only *s*; *X* is the set of vertices spanned so far
3.  Create empty tree *T*; *T* is the partial MST that will be built up as the "while" loop executes
4.  While *X* != *V*
    1.  Pick an edge *e* between points *u* and *v* that is the cheapest edge of the graph, where *u* is in *X* and *v* is not in *X* (ie. crossing the boundary between the already-connected and not-yet-connected parts of the graph)
    2.  Add *e* to *T*
    3.  Add *v* to *X*

## Runtime of naïve implementation

In the naïve implementation:

-   *O(n)* iterations of the "while" loop (where *n* is the number of vertices)
-   *O(m)* time per iteration (where *m* is the number of edges)
-   *O(mn)* overall

## Performance improvements using the [heap](/wiki/heap) data structure

The [heap](/wiki/heap) data structure is good for doing repeated "extract min" operations, so if we use a heap to store the edges, with the keys being the edge costs, we can get our runtime down to *O(m log n)*.

Two invariants must be maintained:

1.  The heap contains the vertices of *V* less those already pulled into *X* (ie. *V - X*)
2.  For an element *v* in the *V - X* heap, the key for *v* must be the cheapest edge *(u, v)* with *u* in *X*; if no such edge exists, then cost is *+infinity*

With those in place, doing an extract-min produces the next vertex *v* that is not in *X* and corresponding edge *(u, v)* crossing from *X* to *V - X* that should be added to *X* and *T* respectively.

In order to maintain the second invariant, we do the following when adding *v* to *X*:

1.  For each edge *(v, w)* in *E*
    1.  If *w* is in *V - X*
        1.  Delete *w* from the heap (requires some additional book-keeping, so that we know the position of each vertex within the heap)
        2.  Recompute the key for *w* to be the lesser of its former value or cost of the edge *(v, w)*
        3.  Reinsert *w* into the heap

## Runtime of [heap](/wiki/heap)-based implementation

-   Heap operations dominate:
    -   *n - 1* inserts during preprocessing
    -   *n - 1* "extract-min" operations (one for each iteration of "while" loop)
    -   *m* delete + insert operations (one for each edge, as its first endpoint gets pulled into *X*)

So we're looking at *O(m)* for heap operations (as *m &gt;= n - 1* in a connected graph), and an overall runtime of *O(m log n*).

# Notes

Unlike [Kruskal's Algorithm](/wiki/Kruskal%27s_Algorithm), [Prim's Algorithm](/wiki/Prim%27s_Algorithm) only works on connected graphs.

# See also

-   [Wikipedia](/wiki/Wikipedia) article on [Prim's Algorithm](/wiki/Prim%27s_Algorithm): <http://en.wikipedia.org/wiki/Prim%27s_algorithm>

