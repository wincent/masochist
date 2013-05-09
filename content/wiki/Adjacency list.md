---
tags: data.structures graph
cache_breaker: 1
---

Used to store [graphs](/wiki/graphs), especially sparse graphs. (For dense graphs, see "[Adjacency matrix](/wiki/Adjacency_matrix)".)

Typically implemented in terms of arrays; eg:

-   one array records the vertices: each vertex contains pointers to its edges
-   one array records the edges: each edge contains pointers to its endpoints

Edges may be directed (in which case the end points are ordered) or undirected (in which case the end points are unordered), weighted (in which case we need to store an additional measure, the weight, in the tuple) or unweighted. If two vertices have multiple (parallel) edges, then the edges array must store one entry for each edge.

# Operations

-   enumerating the edges of a vertex (linear in the number of edges)
-   enumerating the endpoints of an edge (constant)

# See also

-   [Wikipedia](/wiki/Wikipedia) article on [adjacency lists](/wiki/adjacency_lists): <http://en.wikipedia.org/wiki/Adjacency_list>

