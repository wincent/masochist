---
tags: algorithms wiki
cache_breaker: 1
---

A [minimum spanning tree](/wiki/minimum_spanning_tree) is a tree that, for a connected graph **_G_**:

-   is a subgraph of **_G_**; that
-   spans the entire graph (ie. connects all vertices in **_G_**); and
-   has minimum cost (where cost is based on edge weights); and
-   is free of cycles

Algorithms for computing [minimum spanning trees](/wiki/minimum_spanning_trees) include:

-   [Prim's Algorithm](/wiki/Prim%27s_Algorithm): a [greedy algorithm](/wiki/greedy_algorithm) that can run — for a graph with _m_ edges and _n_ vertices — in _O(m log n)_ time (using a [heap](/wiki/heap) data structure), or _O(mn)_ for the naïve approach
-   [Kruskal's Algorithm](/wiki/Kruskal%27s_Algorithm): another greedy algorithm with performance comparable to Prim's Algorithm, ie. _O(m log n)_ (using a [Union-Find](/wiki/Union-Find) data structure) or _O(mn)_ for the naïve approach
-   [Karger, Klein & Targen's Expected linear time MST algorithm](/wiki/Karger%2c_Klein_%26_Targen%27s_Expected_linear_time_MST_algorithm): is a randomized, greedy, divide-and-conquer algorithm with an expected _O(n)_ running time

# See also

-   [Wikipedia](/wiki/Wikipedia) article on [minimum spanning trees](/wiki/minimum_spanning_trees): <http://en.wikipedia.org/wiki/Minimum_spanning_tree>
-   [Wikipedia](/wiki/Wikipedia) article on [Karger, Klein & Targen's Expected linear time MST algorithm](/wiki/Karger%2c_Klein_%26_Targen%27s_Expected_linear_time_MST_algorithm): <http://en.wikipedia.org/wiki/Expected_linear_time_MST_algorithm>
