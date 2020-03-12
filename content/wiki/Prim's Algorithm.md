---
tags: algorithms wiki
cache_breaker: 1
---

[Prim's Algorithm](/wiki/Prim%27s_Algorithm) is a fast algorithm for computing the [MST](/wiki/MST) ([minimum spanning tree](/wiki/minimum_spanning_tree)) of a connected graph.

# Algorithm description

Given a graph _G_ described by a set of vertices _V_ and edges between those vertices _E_:

1.  Pick a vertex _s_ arbitrarily from _V_
2.  Create set _X_, containing only _s_; _X_ is the set of vertices spanned so far
3.  Create empty tree _T_; _T_ is the partial MST that will be built up as the "while" loop executes
4.  While _X_ != _V_
    1.  Pick an edge _e_ between points _u_ and _v_ that is the cheapest edge of the graph, where _u_ is in _X_ and _v_ is not in _X_ (ie. crossing the boundary between the already-connected and not-yet-connected parts of the graph)
    2.  Add _e_ to _T_
    3.  Add _v_ to _X_

## Runtime of naïve implementation

In the naïve implementation:

-   _O(n)_ iterations of the "while" loop (where _n_ is the number of vertices)
-   _O(m)_ time per iteration (where _m_ is the number of edges)
-   _O(mn)_ overall

## Performance improvements using the [heap](/wiki/heap) data structure

The [heap](/wiki/heap) data structure is good for doing repeated "extract min" operations, so if we use a heap to store the edges, with the keys being the edge costs, we can get our runtime down to _O(m log n)_.

Two invariants must be maintained:

1.  The heap contains the vertices of _V_ less those already pulled into _X_ (ie. _V - X_)
2.  For an element _v_ in the _V - X_ heap, the key for _v_ must be the cheapest edge _(u, v)_ with _u_ in _X_; if no such edge exists, then cost is _+infinity_

With those in place, doing an extract-min produces the next vertex _v_ that is not in _X_ and corresponding edge _(u, v)_ crossing from _X_ to _V - X_ that should be added to _X_ and _T_ respectively.

In order to maintain the second invariant, we do the following when adding _v_ to _X_:

1.  For each edge _(v, w)_ in _E_
    1.  If _w_ is in _V - X_
        1.  Delete _w_ from the heap (requires some additional book-keeping, so that we know the position of each vertex within the heap)
        2.  Recompute the key for _w_ to be the lesser of its former value or cost of the edge _(v, w)_
        3.  Reinsert _w_ into the heap

## Runtime of [heap](/wiki/heap)-based implementation

-   Heap operations dominate:
    -   _n - 1_ inserts during preprocessing
    -   _n - 1_ "extract-min" operations (one for each iteration of "while" loop)
    -   _m_ delete + insert operations (one for each edge, as its first endpoint gets pulled into _X_)

So we're looking at _O(m)_ for heap operations (as _m &gt;= n - 1_ in a connected graph), and an overall runtime of _O(m log n_).

# Notes

Unlike [Kruskal's Algorithm](/wiki/Kruskal%27s_Algorithm), [Prim's Algorithm](/wiki/Prim%27s_Algorithm) only works on connected graphs.

# See also

-   [Wikipedia](/wiki/Wikipedia) article on [Prim's Algorithm](/wiki/Prim%27s_Algorithm): <http://en.wikipedia.org/wiki/Prim%27s_algorithm>
