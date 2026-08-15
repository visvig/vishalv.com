---
published: "Error: `format` can only be applied to dates. Tried for format object"
added: "2026-06-21"
modified: "2026-07-21"
authors: Tim Roughgarden, Gregory Valiant
abstract: "No abstract available."
---

# CS168: The Modern Algorithmic Toolbox Lectures #11: Spectral Graph Theory, I

[URL]()

## Tags
#✅


## Notes

<span style="color:
#A7F3A7;">
1) represent the graph as a matrix</span>
([](zotero://open-pdf/library/items/FDSGGVVE?page=&annotation=BEN94RHS))










<span style="color:
#A7F3A7;">
2) study the eigenvectors/eigenvalues of that matrix</span>
([](zotero://open-pdf/library/items/FDSGGVVE?page=&annotation=WRUU6HQQ))










<span style="color:
#A7F3A7;">
we will consider undirected, and unweighted graphs (i.e. all edges have weight 1), that do not have any self-loops</span>
([](zotero://open-pdf/library/items/FDSGGVVE?page=&annotation=LPXD46VA))










<span style="color:
#A7F3A7;">
Most of the definitions and techniques will extend to both directed graphs, as well as weighted graphs</span>
([](zotero://open-pdf/library/items/FDSGGVVE?page=&annotation=IAN5ZMCK))










### 1 Graphs as Matrices










<span style="color:
#A7F3A7;">
Laplacian matrix associated to G is an n × n matrix LG = D − A</span>
([](zotero://open-pdf/library/items/FDSGGVVE?page=&annotation=DCS8XSUL))





> A derived matrix that aims to capture the local variation of node values (signals) on a graph


#laplacian




<span style="color:
#A7F3A7;">
D is the degree matrix</span>
([](zotero://open-pdf/library/items/FDSGGVVE?page=&annotation=6PSM9NH2))





> Can be derived from matrix A





<span style="color:
#A7F3A7;">
D(i, i) is the degree of the ith node</span>
([2](zotero://open-pdf/library/items/FDSGGVVE?page=2&annotation=B62ZUT64))










<span style="color:
#A7F3A7;">
A is the adjacency matrix</span>
([2](zotero://open-pdf/library/items/FDSGGVVE?page=2&annotation=AF4XSIPT))





> Matrix A itself. Captures all about the connectivity of the graph.


#adjacency-matrix




<span style="color:
#A7F3A7;">
A(i, j) = 1 if and only if (i, j) ∈ E</span>
([2](zotero://open-pdf/library/items/FDSGGVVE?page=2&annotation=27CC29WF))











![research-notes/images/roughgardenCS168ModernAlgorithmic/image-2-x214-y621.png](research-notes/images/roughgardenCS168ModernAlgorithmic/image-2-x214-y621.png)

> L_G is a matrix. Its elements are either deg(i) or -1 or 0.





<span style="color:
#A7F3A7;">
consider what happens to a vector when we multiply it by L: if Lv = w</span>
([2](zotero://open-pdf/library/items/FDSGGVVE?page=2&annotation=R85KBQWJ))











![research-notes/images/roughgardenCS168ModernAlgorithmic/image-2-x159-y509.png](research-notes/images/roughgardenCS168ModernAlgorithmic/image-2-x159-y509.png)

> deg(i)v(i): think of adding the v(i) for deg(i) times because deg(i) is the number of edges (i,j) going from node i





<span style="color:
#A7F3A7;">
ith element of the product Lv is the sum of the differences between v(i) and the indices of v corresponding to the neighbors of i in the graph G</span>
([2](zotero://open-pdf/library/items/FDSGGVVE?page=2&annotation=VMMK8EUT))










<span style="color:
#A7F3A7;">
quadratic form, vtLv</span>
([2](zotero://open-pdf/library/items/FDSGGVVE?page=2&annotation=FT6EUCAU))











![research-notes/images/roughgardenCS168ModernAlgorithmic/image-2-x149-y281.png](research-notes/images/roughgardenCS168ModernAlgorithmic/image-2-x149-y281.png)






<span style="color:
#A7F3A7;">
if one interprets the vector v as assigning a number to each vertex in the graph G, the quantity vtLv is exactly the sum of the squares of the differences between the values of neighboring nodes</span>
([2](zotero://open-pdf/library/items/FDSGGVVE?page=2&annotation=YRLRNUVP))





> v is the value given (signal) on the nodes





<span style="color:
#A7F3A7;">
if one were to place the vertices of the graph on the real numberline, with the ith node placed at location v(i), then vtLv is precisely the sum of the squares of the lengths of all the edges of the graph</span>
([2](zotero://open-pdf/library/items/FDSGGVVE?page=2&annotation=7G3PPRGD))





> vTLv is a scalar called Dirichlet Energy





### 2 The Eigenvalues and Eigenvectors of the Laplacian










<span style="color:
#A7F3A7;">
L is a real-valued symmetric matrix, all of its eigenvalues are real numbers, and its eigenvectors are orthogonal to eachother</span>
([2](zotero://open-pdf/library/items/FDSGGVVE?page=2&annotation=ZBRIAVC5))





> Because undirected graphs have symmetric information.





<span style="color:
#A7F3A7;">
The eigenvalues of L contain information about the structure (or, more precisely, information about the extent to which the graph has structure)</span>
([3](zotero://open-pdf/library/items/FDSGGVVE?page=3&annotation=6GZ9RKF7))





> vTLv = Lambda_v * vTv

Collection of laplacian eigenvalues of a graph is called spectrum. 

Two graphs with the same set of spectrum are called co-spectral graphs.

Consider, the operation done on a graph that makes the original co-spectral with the output, that was a spectrum preserving operation and can tell things about the graph the spectrum could not reveal.





### 2.1 The zero eigenvalue










<span style="color:
#A7F3A7;">
The laplacian always has at least one eigenvalue that is 0</span>
([3](zotero://open-pdf/library/items/FDSGGVVE?page=3&annotation=MKHZYP7Z))





> Since every row and column of L sums to zero.

Operating L on any constant vector (every component is same) will result in a zero vector. Then that constant vector is the eigenvector with eigenvalue 0.





<span style="color:
#A7F3A7;">
multiplicity of the zeroth eigenvalue reveals the number of connected components of the graph</span>
([3](zotero://open-pdf/library/items/FDSGGVVE?page=3&annotation=C4M3N6HB))










<span style="color:
#A7F3A7;">
The number of zero eigenvalues of the Laplacian LG (i.e. the multiplicity of the 0 eigenvalue) equals the number of connected components of the graph G</span>
([3](zotero://open-pdf/library/items/FDSGGVVE?page=3&annotation=RU4PHUNE))










### 2.2 Intuition of lowest and highest eigenvalues/eigenvectors










<span style="color:
#A7F3A7;">
vtLv = P  (i,j)∈E,i&lt;j(v(i) − v(j))2 is the sum of the squares of the distances between neighbors</span>
([3](zotero://open-pdf/library/items/FDSGGVVE?page=3&annotation=RYMXAR2W))





> Sum of squares of edge lengths





<span style="color:
#A7F3A7;">
eigenvectors corresponding to the lowest eigenvalues correspond to vectors for which neighbors have similar values</span>
([3](zotero://open-pdf/library/items/FDSGGVVE?page=3&annotation=6CBGP5ED))





> vTLv is Lambda. Lambda is eigenvalue of eigenvector v





<span style="color:
#A7F3A7;">
Eigenvectors with eigenvalue 0 are constant on each connected component</span>
([3](zotero://open-pdf/library/items/FDSGGVVE?page=3&annotation=X9BW4Q5Q))





> say 6 nodes.

1-2-3 
4-5-6

eigenvector (1,1,1,-1,-1,-1) with eigenvalue 0

1,1,1 is a constant vector
-1,-1,-1 is a constant vector





<span style="color:
#A7F3A7;">
smallest nonzero eigenvector will be the vector that minimizes this squared distance between neighbors, subject to being a unit vector that is orthogonal to all zero eigenvectors</span>
([3](zotero://open-pdf/library/items/FDSGGVVE?page=3&annotation=W8PR8MEU))





> second smallest eigenvalue, because 0 is the smallest for every L





<span style="color:
#A7F3A7;">
The maximum eigenvalue max||v||=1 vtLv will try to maximize the discrepancy between neighbors’ values of v</span>
([4](zotero://open-pdf/library/items/FDSGGVVE?page=4&annotation=ZACYCQTX))











![research-notes/images/roughgardenCS168ModernAlgorithmic/image-4-x99-y245.png](research-notes/images/roughgardenCS168ModernAlgorithmic/image-4-x99-y245.png)






<span style="color:
#A7F3A7;">
Spectral embeddings of the cycle on 20 nodes (top two figures), and the 20 × 20 grid (bottom two figures)</span>
([4](zotero://open-pdf/library/items/FDSGGVVE?page=4&annotation=XQYMCRKW))










<span style="color:
#A7F3A7;">
The left two plots show the embeddings onto the eigenvectors corresponding to the second and third smallest eigenvalues; namely, the ith node is plotted at the point (v2(i), v3(i)) where vk is the eigenvector corresponding to the kth largest eigenvalue</span>
([4](zotero://open-pdf/library/items/FDSGGVVE?page=4&annotation=AS9HSZXK))










<span style="color:
#A7F3A7;">
The right two plots show the embeddings onto the eigenvectors corresponding to the largest and second–largest eigenvalues</span>
([4](zotero://open-pdf/library/items/FDSGGVVE?page=4&annotation=G4UBD7NF))










### 3 Applications of Spectral Graph Theory










### 3.1 Visualizing a graph: Spectral Embeddings










<span style="color:
#A7F3A7;">
the embedding onto the smallest two eigenvectors really does correspond to the “natural”/“intuitive” way to represent the graph in 2-dimensions</span>
([5](zotero://open-pdf/library/items/FDSGGVVE?page=5&annotation=XBX23KJ3))





> Euclidean tools can be applied now.





### 3.2 Spectral Clustering/Partitioning










<span style="color:
#A7F3A7;">
partition the graph into several large components so as to minimize the number of edges that cross between the components</span>
([5](zotero://open-pdf/library/items/FDSGGVVE?page=5&annotation=BFD8GN5R))










<span style="color:
#A7F3A7;">
metrics for the quality of a given cluster or partition of a graph, and give some quantitative bounds on these metrics in terms of the second eigenvalue of the graph Laplacian</span>
([5](zotero://open-pdf/library/items/FDSGGVVE?page=5&annotation=MLNQS82Y))










<span style="color:
#A7F3A7;">
eigenvectors corresponding to small eigenvalues are, in some sense, trying to find good partitions of the graph</span>
([5](zotero://open-pdf/library/items/FDSGGVVE?page=5&annotation=E7NESXW3))










### 3.3 Graph Coloring










<span style="color:
#A7F3A7;">
If two radio stations have overlapping regions of broadcast, then they cannot be assigned the same bandwidth (otherwise there will be interference for some listeners). On the other hand, if two stations are very far apart, they can broadcast on the same bandwidth without worrying about interference from each other</span>
([6](zotero://open-pdf/library/items/FDSGGVVE?page=6&annotation=Z6IEUKEJ))










<span style="color:
#A7F3A7;">
problem of k-coloring a graph</span>
([6](zotero://open-pdf/library/items/FDSGGVVE?page=6&annotation=QCC5NMMZ))










<span style="color:
#A7F3A7;">
nodes of the graph will represent radio stations, and there will be an edge between two stations if their broadcast ranges overlap</span>
([6](zotero://open-pdf/library/items/FDSGGVVE?page=6&annotation=662MAUBF))










<span style="color:
#A7F3A7;">
problem of finding a k-color, or even deciding whether a k-coloring of a graph exists, is NP-hard</span>
([6](zotero://open-pdf/library/items/FDSGGVVE?page=6&annotation=J9B9WQL9))










<span style="color:
#A7F3A7;">
k-coloring heuristic as follows:</span>
([6](zotero://open-pdf/library/items/FDSGGVVE?page=6&annotation=G3JQUBI7))










<span style="color:
#A7F3A7;">
1) plot the embedding of the graph onto the top 2 or 3 eigenvectors of the Laplacian</span>
([6](zotero://open-pdf/library/items/FDSGGVVE?page=6&annotation=LCHRXSM2))










<span style="color:
#A7F3A7;">
2) locally partition the points in this space into k regions, e.g. using k-means, or a kd-tree</span>
([6](zotero://open-pdf/library/items/FDSGGVVE?page=6&annotation=TRUMNIZB))










<span style="color:
#A7F3A7;">
3) assign all the points in each region the same color</span>
([6](zotero://open-pdf/library/items/FDSGGVVE?page=6&annotation=5CAFGBK4))









