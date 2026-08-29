---
title: "Laplacian Eigenmaps and Spectral Techniques for Embedding and Clustering"
date: "2026-07-21"
tags:
  - "laplacian"
draft: false
summary: "Drawing on the correspondence between the graph Laplacian, the Laplace-Beltrami operator on a manifold , and the connections to the heat equation , we propose a geometrically motivated algorithm for constructing a representation for data sampled from a low dimensional manifold..."
---
{/* Generated from data/frontiers/research-notes. Edit the source file, then run `yarn publish:research-notes`. */}

[URL](https://direct.mit.edu/books/book/2485/chapter/66411/Laplacian-Eigenmaps-and-Spectral-Techniques-for)

## Notes

### Abstract










> we propose a geometrically motivated algorithm for constructing a representation for data sampled from a low dimensional manifold embedded in a higher dimensional space
([1](zotero://open-pdf/library/items/RIK6GUT4?page=1&annotation=6IW9HAH2))





data points are in euclidean space (some higher dimensional space) and it might be from an underlying manifold (a lower dimensional space)





> gray scale n x n images of a fixed object taken with a moving camera yield data points in rn: n2 . However , the intrinsic dimensionality of the space of all images of t he same object is the number of degrees of freedom of the camera - in fact the space has the natural structure of a manifold embedded in rn: n2
([1](zotero://open-pdf/library/items/RIK6GUT4?page=1&annotation=EFPKFRKB))





assumption is that the object / scene is not changing. then the degrees of freedom of the camera is all that matters.

degrees of freedom of camera is the intrinsic dimension of the space of images (which then is the dimensions of the manifold).





> The Laplacian of the graph obtained from the data points may be viewed as an approximation to the Laplace-Beltrami operator defined on the manifold
([1](zotero://open-pdf/library/items/RIK6GUT4?page=1&annotation=FYRLEZY3))





Laplace-Beltrami operator is for manifolds which does a similar operation as Laplacian does for graphs.






> The locality preserving character of the Laplacian Eigenmap algorithm makes it relatively insensitive to outliers and noise. A byproduct of this is that the algorithm implicitly emphasizes the natural clusters in the data
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=65WX3XB8))










### 1 The Algorithm





Laplacian Eigenmap Algorithm.





> k points Xl , ... , Xk in ]]\{ I
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=QA8YJUDQ))










> Step 1. [Constru cting th e Graph] We put an edge between nodes i and j if  Xi and Xj are &quot;close&quot;
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=APBIZ2MV))










> two variations:
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=6H5UXCT6))










> (a) [-neighborhoods. [parameter [ E ]]\{] Nodes i and j are connected by an  edge if Ilxi - Xj 112 &lt; f
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=ICJT7N6K))










> (b) n nearest neighbors. [parameter n E 1&#39;::1] Nodes i and j are connected by  an edge if i is among n nearest neighbors of j or j is among n nearest neighbors of i
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=P49KLABI))










> Step 2. [Choosing the weights]
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=WIFI7QBB))










> two variations for  weighting the edges:
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=YIWH292T))










> (a) Heat kernel. [param eter t E ]]\{]. If nodes i and j are connected
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=X83HJ44G))











![research-notes/images/belkinLaplacianEigenmapsSpectral2002/image-2-x281-y208.png](/static/research-notes/images/belkinLaplacianEigenmapsSpectral2002/image-2-x281-y208.png)






> (b) Simple-minded. [No parameters]. W ij = 1 if and only if vertices i an d  j are connected by an edge.
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=AAS8UCK8))










> Step 3. [Eigenmaps] Assume the graph G, constructed above, is connected ,  otherwise proceed with Step 3 for each connected component
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=GJGYFZHY))










> Compute eigenvalues and eigenvectors for the generalized eigenvector
([3](zotero://open-pdf/library/items/RIK6GUT4?page=3&annotation=EPRP34TX))











![research-notes/images/belkinLaplacianEigenmapsSpectral2002/image-3-x294-y461.png](/static/research-notes/images/belkinLaplacianEigenmapsSpectral2002/image-3-x294-y461.png)






> D is diagonal weight matrix
([3](zotero://open-pdf/library/items/RIK6GUT4?page=3&annotation=V432BZZZ))










> L = D - W is the Laplacian matrix
([3](zotero://open-pdf/library/items/RIK6GUT4?page=3&annotation=LAXLGJPS))










> Yo , ... , Y k -1 be the solutions of equation 1, ordered according to their eigenvalues with Yo having the smallest eigenvalue (in fact 0). The image of X i under the embedding into the lower dimensional space :Il\{m is given by (y1 ( i) , . . . , ym (i)).
([3](zotero://open-pdf/library/items/RIK6GUT4?page=3&annotation=EU9Z975N))










### 2 Justification










> Consider the problem of mapping the weighted connected graph G to a line so that connected points stay as close together as possible
([3](zotero://open-pdf/library/items/RIK6GUT4?page=3&annotation=5VTKCX4A))





line is a vector in R of dimension 1





### 2.1 The Laplace-Beltrami Operator
