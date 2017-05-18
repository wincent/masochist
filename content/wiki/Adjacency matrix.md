---
tags: data.structures graph wiki
---

Used to store [graphs](/wiki/graphs), especially dense graphs. (For sparse graphs, see "[Adjacency list](/wiki/Adjacency_list)").

-   for a graph with *n* vertices and *m* edges, we store an *n* by *n* matrix
-   a 1 or similar value at position *i, j* in the matrix is used to indicate the presence of an edge between vertices *i* and *j*
-   alternatively, for a weighted graph, we can use the edge weight as the value
-   directed graphs can use the sign of the value (positive or negative) to indicate the direction of the edge
-   for maximal density, we can use as little as a single bit to encode each value (in the case of an undirected, unweighted graph)

The matrix itself can be stored in any convenient way; it could be a bit string, or a multidimensional array. If the matrix is relatively sparse, we can look at using a special-purpose data structure to represent the sparse matrix.

# Operations

-   enumerating the edges of a vertex requires a linear scan of a matrix row or column (linear in the number of vertices)
-   looking up the endpoints of an edge can be done in constant time

# See also

-   [Wikipedia](/wiki/Wikipedia) article on [sparse matrices](/wiki/sparse_matrices): <http://en.wikipedia.org/wiki/Sparse_matrix>
-   Wikipedia article on [adjacency matrices](/wiki/adjacency_matrices): <http://en.wikipedia.org/wiki/Adjacency_matrix>
