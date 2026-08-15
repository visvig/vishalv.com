---
published: "2002-11-08"
added: "2026-06-27"
modified: "2026-07-21"
authors: Mikhail Belkin, Partha Niyogi
abstract: "Drawing on the correspondence between the graph Laplacian, the Laplace-Beltrami operator on a manifold , and the connections to the heat equation , we propose a geometrically motivated algorithm for constructing a representation for data sampled from a low dimensional manifold embedded in a higher dimensional space. The algorithm provides a computationally efficient approach to nonlinear dimensionality reduction that has locality preserving properties and a natural connection to clustering. Several applications are considered."
---

# Laplacian Eigenmaps and Spectral Techniques for Embedding and Clustering

[URL](https://direct.mit.edu/books/book/2485/chapter/66411/Laplacian-Eigenmaps-and-Spectral-Techniques-for)

## Tags


## Notes

### Abstract










<span style="color:
#FFF176;">
we propose a geometrically motivated algorithm for constructing a representation for data sampled from a low dimensional manifold embedded in a higher dimensional space</span>
([](zotero://open-pdf/library/items/RIK6GUT4?page=&annotation=6IW9HAH2))





> data points are in euclidean space (some higher dimensional space) and it might be from an underlying manifold (a lower dimensional space)





<span style="color:
#FFF176;">
gray scale n x n images of a fixed object taken with a moving camera yield data points in rn: n2 . However , the intrinsic dimensionality of the space of all images of t he same object is the number of degrees of freedom of the camera - in fact the space has the natural structure of a manifold embedded in rn: n2</span>
([](zotero://open-pdf/library/items/RIK6GUT4?page=&annotation=EFPKFRKB))





> assumption is that the object / scene is not changing. then the degrees of freedom of the camera is all that matters.

degrees of freedom of camera is the intrinsic dimension of the space of images (which then is the dimensions of the manifold).





<span style="color:
#FFF176;">
The Laplacian of the graph obtained from the data points may be viewed as an approximation to the Laplace-Beltrami operator defined on the manifold</span>
([](zotero://open-pdf/library/items/RIK6GUT4?page=&annotation=FYRLEZY3))





> Laplace-Beltrami operator is for manifolds which does a similar operation as Laplacian does for graphs.


#laplacian




<span style="color:
#FFF176;">
The locality preserving character of the Laplacian Eigenmap algorithm makes it relatively insensitive to outliers and noise. A byproduct of this is that the algorithm implicitly emphasizes the natural clusters in the data</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=65WX3XB8))










### 1 The Algorithm





> Laplacian Eigenmap Algorithm.





<span style="color:
#FFF176;">
k points Xl , ... , Xk in ]]{ I</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=QA8YJUDQ))










<span style="color:
#FFF176;">
Step 1. [Constru cting th e Graph] We put an edge between nodes i and j if  Xi and Xj are &quot;close&quot;</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=APBIZ2MV))










<span style="color:
#FFF176;">
two variations:</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=6H5UXCT6))










<span style="color:
#FFF176;">
(a) [-neighborhoods. [parameter [ E ]]{] Nodes i and j are connected by an  edge if Ilxi - Xj 112 &lt; f</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=ICJT7N6K))










<span style="color:
#FFF176;">
(b) n nearest neighbors. [parameter n E 1&#39;::1] Nodes i and j are connected by  an edge if i is among n nearest neighbors of j or j is among n nearest neighbors of i</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=P49KLABI))










<span style="color:
#FFF176;">
Step 2. [Choosing the weights]</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=WIFI7QBB))










<span style="color:
#FFF176;">
two variations for  weighting the edges:</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=YIWH292T))










<span style="color:
#FFF176;">
(a) Heat kernel. [param eter t E ]]{]. If nodes i and j are connected</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=X83HJ44G))











![research-notes/images/belkinLaplacianEigenmapsSpectral2002/image-2-x281-y208.png](research-notes/images/belkinLaplacianEigenmapsSpectral2002/image-2-x281-y208.png)






<span style="color:
#FFF176;">
(b) Simple-minded. [No parameters]. W ij = 1 if and only if vertices i an d  j are connected by an edge.</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=AAS8UCK8))










<span style="color:
#FFF176;">
Step 3. [Eigenmaps] Assume the graph G, constructed above, is connected ,  otherwise proceed with Step 3 for each connected component</span>
([2](zotero://open-pdf/library/items/RIK6GUT4?page=2&annotation=GJGYFZHY))










<span style="color:
#FFF176;">
Compute eigenvalues and eigenvectors for the generalized eigenvector</span>
([3](zotero://open-pdf/library/items/RIK6GUT4?page=3&annotation=EPRP34TX))











![research-notes/images/belkinLaplacianEigenmapsSpectral2002/image-3-x294-y461.png](research-notes/images/belkinLaplacianEigenmapsSpectral2002/image-3-x294-y461.png)






<span style="color:
#FFF176;">
D is diagonal weight matrix</span>
([3](zotero://open-pdf/library/items/RIK6GUT4?page=3&annotation=V432BZZZ))










<span style="color:
#FFF176;">
L = D - W is the Laplacian matrix</span>
([3](zotero://open-pdf/library/items/RIK6GUT4?page=3&annotation=LAXLGJPS))










<span style="color:
#FFF176;">
Yo , ... , Y k -1 be the solutions of equation 1, ordered according to their eigenvalues with Yo having the smallest eigenvalue (in fact 0). The image of X i under the embedding into the lower dimensional space :Il{m is given by (y1 ( i) , . . . , ym (i)).</span>
([3](zotero://open-pdf/library/items/RIK6GUT4?page=3&annotation=EU9Z975N))










### 2 Justification










<span style="color:
#FFF176;">
Consider the problem of mapping the weighted connected graph G to a line so that connected points stay as close together as possible</span>
([3](zotero://open-pdf/library/items/RIK6GUT4?page=3&annotation=5VTKCX4A))





> line is a vector in R of dimension 1





### 2.1 The Laplace-Beltrami Operator









