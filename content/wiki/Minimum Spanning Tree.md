---
tags: algorithms
---

A [minimum spanning tree](/wiki/minimum_spanning_tree) is a tree that, for a connected graph ***G***:

-   is a subgraph of ***G***; that
-   spans the entire graph (ie. connects all vertices in ***G***); and
-   has minimum cost (where cost is based on edge weights); and
-   is free of cycles

Algorithms for computing [minimum spanning trees](/wiki/minimum_spanning_trees) include:

-   [Prim's Algorithm](/wiki/Prim%27s_Algorithm): a [greedy algorithm](/wiki/greedy_algorithm) that can run — for a graph with *m* edges and *n* vertices — in *O(m log n)* time (using a [heap](/wiki/heap) data structure), or *O(mn)* for the naïve approach
-   [Kruskal's Algorithm](/wiki/Kruskal%27s_Algorithm): another greedy algorithm with performance comparable to Prim's Algorithm, ie. *O(m log n)* (using a [Union-Find](/wiki/Union-Find) data structure) or *O(mn)* for the naïve approach
-   [Karger, Klein & Targen's Expected linear time MST algorithm](/wiki/Karger%2c_Klein_%26_Targen%27s_Expected_linear_time_MST_algorithm): is a randomized, greedy, divide-and-conquer algorithm with an expected *O(n)* running time

# See also

-   [Wikipedia](/wiki/Wikipedia) article on [minimum spanning trees](/wiki/minimum_spanning_trees): <http://en.wikipedia.org/wiki/Minimum_spanning_tree>
-   [Wikipedia](/wiki/Wikipedia) article on [Karger, Klein & Targen's Expected linear time MST algorithm](/wiki/Karger%2c_Klein_%26_Targen%27s_Expected_linear_time_MST_algorithm): <http://en.wikipedia.org/wiki/Expected_linear_time_MST_algorithm>

