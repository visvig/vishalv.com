---
published: "Error: `format` can only be applied to dates. Tried for format object"
added: "2026-06-27"
modified: "2026-07-21"
authors: Keenan Crane
abstract: "No abstract available."
---

# DISCRETE DIFFERENTIAL GEOMETRY: AN APPLIED INTRODUCTION

[URL]()

## Tags


## Notes

### CHAPTER 2  Combinatorial Surfaces










<span style="color:
#A7F3A7;">
combinatorial surfaces, or descriptions of shapes that only tell you how surfaces are connected up and not where they are in space</span>
([8](zotero://open-pdf/library/items/4P3UXTZT?page=8&annotation=C2H4M2GZ))










<span style="color:
#A7F3A7;">
In discrete differential geometry, combinatorial surfaces effectively play the same role that topological surfaces do in the smooth setting</span>
([8](zotero://open-pdf/library/items/4P3UXTZT?page=8&annotation=DLKM8QNP))










<span style="color:
#A7F3A7;">
several different ways to encode the connectivity of combinatorial surfaces: using an abstract simplicial complex, adjacency matrices, and a halfedge mesh</span>
([8](zotero://open-pdf/library/items/4P3UXTZT?page=8&annotation=9E52CA2V))










<span style="color:
#A7F3A7;">
The basic simplifying assumption of differential geometry is that the shapes we want to study are manifold</span>
([8](zotero://open-pdf/library/items/4P3UXTZT?page=8&annotation=PQ4Z3D5Z))





> In continuous domain the shapes are manifolds. Differential geometry can be studied for both continuous and discrete domains.





<span style="color:
#A7F3A7;">
many distinct ways in which a shape can “look like Euclidean space,” leading to many distinct sub-areas of differential geometry (differential topology, conformal geometry, Riemannian geometry, . . . )</span>
([9](zotero://open-pdf/library/items/4P3UXTZT?page=9&annotation=TF6QJLHX))










<span style="color:
#A7F3A7;">
around any point you can find a small neighborhood that is a topological disk</span>
([9](zotero://open-pdf/library/items/4P3UXTZT?page=9&annotation=7DSFY2KP))










<span style="color:
#A7F3A7;">
abstract simplicial complex, which breaks a shape up into simple pieces like edges, triangles, and tetrahedra</span>
([9](zotero://open-pdf/library/items/4P3UXTZT?page=9&annotation=CJTNK9RZ))










<span style="color:
#A7F3A7;">
abstract simplicial complex can be encoded by incidence matrices</span>
([9](zotero://open-pdf/library/items/4P3UXTZT?page=9&annotation=WVZACDDQ))










<span style="color:
#A7F3A7;">
halfedge mesh, which is specifically tailored to two-dimensional surfaces, and can easily describe surfaces with general polygonal faces (rather than just triangles)</span>
([9](zotero://open-pdf/library/items/4P3UXTZT?page=9&annotation=J3ZHXY4F))










### 2.1. Abstract Simplicial Complex





> Just simplicial complex from topology.

Worded as "abstract" to differentiate from "geometric simplicial complex" that people from computer graphics and geometry are familiar with.


#simplicial-complex




<span style="color:
#A7F3A7;">
focus purely on connectivity: which pieces of the surface are connected to each other, and how</span>
([9](zotero://open-pdf/library/items/4P3UXTZT?page=9&annotation=2PIKVVIG))











![research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-10-x91-y534.png](research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-10-x91-y534.png)

> Shaded is for triangles. Otherwise its just edges.

Dotted line to show tetrahedron.





<span style="color:
#A7F3A7;">
simplicial complex—which in in fact can encode much more complicated objects than just surfaces</span>
([10](zotero://open-pdf/library/items/4P3UXTZT?page=10&annotation=BJUDPPVA))





> These are more generalized structures than necessary to encode just surfaces.





<span style="color:
#A7F3A7;">
start out with a set V of vertices</span>
([10](zotero://open-pdf/library/items/4P3UXTZT?page=10&annotation=BKX6C2LT))










<span style="color:
#A7F3A7;">
idea of a simplicial complex is to specify subsets of these vertices that are “right next to each-other,” called k-simplices</span>
([10](zotero://open-pdf/library/items/4P3UXTZT?page=10&annotation=TI3BHS2L))










<span style="color:
#A7F3A7;">
k-simplex is a set of (k + 1) distinct vertices</span>
([10](zotero://open-pdf/library/items/4P3UXTZT?page=10&annotation=I2GMWKCE))










<span style="color:
#A7F3A7;">
we call these simplices abstract—they don’t pin down some concrete shape in space, but just tell us (abstractly) how vertices are connected up</span>
([10](zotero://open-pdf/library/items/4P3UXTZT?page=10&annotation=SRG85862))










<span style="color:
#A7F3A7;">
Any (nonempty) subset of a simplex is another simplex, which we call a face; a strict subset is called a proper face. For instance, {2, 3} is a proper face of {3, 4, 2}, and {2, 3, 4} is a face of {3, 4, 2}, but not a proper one</span>
([10](zotero://open-pdf/library/items/4P3UXTZT?page=10&annotation=PDD7EAZF))










<span style="color:
#A7F3A7;">
abstract simplicial complex is, roughly speaking, just a collection of abstract simplices</span>
([10](zotero://open-pdf/library/items/4P3UXTZT?page=10&annotation=LPVS4VH8))










<span style="color:
#A7F3A7;">
a collection of simplices K is a simplicial complex if for every simplex</span>
([10](zotero://open-pdf/library/items/4P3UXTZT?page=10&annotation=2WL3DUB6))





> If graph G = (V,E), simplicial complex K = (S) where S is collection of simplices.

Vertex is 0-simplex
Edge is 1-simplex
Triangle is 2-simplex
Tetrahedron is 3-simplex
so on.

Simplicial complex is like a graph but with higher dimensional edges / edge equivalents which connected not just nodes but simplices.

aka

A collection of simplices where every face of every simplex is also included.





<span style="color:
#A7F3A7;">
σ ∈ K, every face σ′ ⊆ σ is also contained in K</span>
([11](zotero://open-pdf/library/items/4P3UXTZT?page=11&annotation=4A28I9ZX))










<span style="color:
#A7F3A7;">
subcomplex K′ of a simplicial complex K is a subset that is also a simplicial complex</span>
([11](zotero://open-pdf/library/items/4P3UXTZT?page=11&annotation=6LLBWCJV))










<span style="color:
#A7F3A7;">
complex K is a pure k-simplicial complex if every simplex σ′ ∈ K is contained in some simplex of degree k (possibly itself)</span>
([11](zotero://open-pdf/library/items/4P3UXTZT?page=11&annotation=IPJWEGPU))





> If its a vertex, it should be part of a line, which should be part of some triangle, which should be some part of a tetrahedron and so on.

Notice there's no tetrahedron here. Only vertex, edge and triangles. This is a pure 2-simplicial complex - and all vertexes (0-simplex) are part of some edge (1-simplex) and is part of some triangle (2-simplex) in the simplicial complex.






![research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-11-x150-y422.png](research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-11-x150-y422.png)

> pure simplicial complex only has triangles. No vertex only, edge only, tetrahedron only observed. So, every vertex, edge are part of some triangle.





<span style="color:
#A7F3A7;">
To do discrete differential geometry we’ll eventually need to associate some kind of shape with a simplicial complex</span>
([11](zotero://open-pdf/library/items/4P3UXTZT?page=11&annotation=J7NZ4ZBZ))










### 2.2. Anatomy of a Simplicial Complex: Star, Closure, and Link










<span style="color:
#A7F3A7;">
vertex i ∈ V. The (simplicial) star of this vertex, denoted St(i) is the collection of all simplices σ ∈ K such that i ∈ σ</span>
([11](zotero://open-pdf/library/items/4P3UXTZT?page=11&annotation=HIWULI6S))










<span style="color:
#A7F3A7;">
St(i) is sort of the “local neighborhood” of i. However, this neighborhood is not itself a simplicial complex, since it doesn’t contain the “outer” edges</span>
([12](zotero://open-pdf/library/items/4P3UXTZT?page=12&annotation=XLFUBIHV))





> The vertex i, all the edges going out, and the triangles are part of the star. but explicitly the outer edges (1-simplex-es) are not part of the star since they do not contain i.

So, star is not generally a simplicial complex.





<span style="color:
#A7F3A7;">
closure Cl of St(i), which is the smallest subcomplex of K containing St(i)</span>
([12](zotero://open-pdf/library/items/4P3UXTZT?page=12&annotation=47VFGMEY))





> Explicitly a simplicial complex by definition. Hence will contain those outer edges.





<span style="color:
#A7F3A7;">
{i} has no proper faces, the closure is just the vertex itself</span>
([12](zotero://open-pdf/library/items/4P3UXTZT?page=12&annotation=YXAYLKW5))










<span style="color:
#A7F3A7;">
St(Cl(i)) = St(i)</span>
([12](zotero://open-pdf/library/items/4P3UXTZT?page=12&annotation=BSI55II8))





> Star of closure of a vertex is just the star of the vertex.





<span style="color:
#A7F3A7;">
ing of outer edges that was initially missing from our subcomplex. We give this set a special name: the link</span>
([12](zotero://open-pdf/library/items/4P3UXTZT?page=12&annotation=7KP94LPQ))










<span style="color:
#A7F3A7;">
Lk(i) = Cl(St(i)) &#92; St(Cl(i))</span>
([12](zotero://open-pdf/library/items/4P3UXTZT?page=12&annotation=FK7L2JKL))





> Link is set difference between closure of star of i and star of closure of i.





<span style="color:
#A7F3A7;">
subset S of a simplicial complex K (not necessarily a subcomplex) we have the following definitions:</span>
([12](zotero://open-pdf/library/items/4P3UXTZT?page=12&annotation=UGYTGIPP))










<span style="color:
#A7F3A7;">
• The star St(S) is the collection of all simplices in K that contain any simplex in S</span>
([12](zotero://open-pdf/library/items/4P3UXTZT?page=12&annotation=7PFHSGRR))










<span style="color:
#A7F3A7;">
• The closure Cl(S) is the smallest (i.e., fewest elements) subcomplex of K that contains S</span>
([12](zotero://open-pdf/library/items/4P3UXTZT?page=12&annotation=FQMZ4V9Q))










<span style="color:
#A7F3A7;">
• The link Lk(S) is equal to Cl(St(S)) &#92; St(Cl(S))</span>
([12](zotero://open-pdf/library/items/4P3UXTZT?page=12&annotation=9IIC7CPK))










<span style="color:
#A7F3A7;">
pure k-subcomplex K′ ⊆ K</span>
([13](zotero://open-pdf/library/items/4P3UXTZT?page=13&annotation=928EQVJZ))










<span style="color:
#A7F3A7;">
boundary is the closure of the set of all simplices σ that are proper faces of exactly one simplex of K′</span>
([13](zotero://open-pdf/library/items/4P3UXTZT?page=13&annotation=TZRTG32J))





> boundary is a closure and therefore a simplicial complex.





<span style="color:
#A7F3A7;">
interior int(K′) = K′ &#92; bd(K′) is then everything but the boundary</span>
([13](zotero://open-pdf/library/items/4P3UXTZT?page=13&annotation=7RD2A7C5))










<span style="color:
#A7F3A7;">
these operations (star, closure, link, boundary, and interior) provide a natural way to talk about and navigate any kind of simplicial complex in any dimension</span>
([13](zotero://open-pdf/library/items/4P3UXTZT?page=13&annotation=WSR6WMEE))










### 2.2.1. Oriented Simplicial Complex.










<span style="color:
#A7F3A7;">
To capture the notion of orientation, we’ll start by replacing our unordered sets with ordered tuples</span>
([14](zotero://open-pdf/library/items/4P3UXTZT?page=14&annotation=F8KH9YVX))










<span style="color:
#A7F3A7;">
if i, j ∈ V are two vertices sharing an edge, then we have two distinct ordered tuples (i, j) and (j, i)</span>
([14](zotero://open-pdf/library/items/4P3UXTZT?page=14&annotation=84YP7VVB))










<span style="color:
#A7F3A7;">
higher-degree simplices (triangles, tetrahedra, etc.)</span>
([14](zotero://open-pdf/library/items/4P3UXTZT?page=14&annotation=8ICYXHQK))





> 4-simplex is called pentachoron





<span style="color:
#A7F3A7;">
walking around the triangle</span>
([14](zotero://open-pdf/library/items/4P3UXTZT?page=14&annotation=7F76DZET))










<span style="color:
#A7F3A7;">
six different possibilities, what we notice is that they fall into two obvious categories: we either walk “clockwise” or “counter-clockwise” around the triangle</span>
([14](zotero://open-pdf/library/items/4P3UXTZT?page=14&annotation=BDRGDWNR))










<span style="color:
#A7F3A7;">
orientation of a simplex is really an equivalence class of ordered tuples</span>
([14](zotero://open-pdf/library/items/4P3UXTZT?page=14&annotation=V4TW2TMG))










<span style="color:
#A7F3A7;">
to specify an oriented triangle we’ll just give a representative triple of indices, rather than singling out one particular tuple</span>
([14](zotero://open-pdf/library/items/4P3UXTZT?page=14&annotation=VJTV3DM2))










<span style="color:
#A7F3A7;">
raw triple of indices refers to all tuples with equivalent orientation</span>
([14](zotero://open-pdf/library/items/4P3UXTZT?page=14&annotation=NPUF6HM6))





> one equivalence class - one triple





<span style="color:
#A7F3A7;">
any k-simplex we have two possible orientations: the set of all even permutations of its vertices, and the set of all odd permutations of its vertices</span>
([14](zotero://open-pdf/library/items/4P3UXTZT?page=14&annotation=IR5KVEV2))





> any ordering can be achieved either by even number of swaps or odd number of swaps.





<span style="color:
#A7F3A7;">
relative orientation (below) and the boundary operator (later)</span>
([14](zotero://open-pdf/library/items/4P3UXTZT?page=14&annotation=FQTM7UPA))










<span style="color:
#A7F3A7;">
relative orientation. For instance, the oriented edges ij and jk have the same orientation, because ij ends at j, whereas jk starts at j. In contrast, ij and kj are oppositely oriented</span>
([15](zotero://open-pdf/library/items/4P3UXTZT?page=15&annotation=AR8JAUAT))










<span style="color:
#A7F3A7;">
if two k-simplices σ1, σ2 share exactly k vertices, then they have the same orientation if their restrictions to these shared vertices are oppositely oriented (k − 1)-simplices</span>
([15](zotero://open-pdf/library/items/4P3UXTZT?page=15&annotation=ZQ9GRLCL))





> Consider the consistent orientation figure, in left triangle (2-simplex) the vertex i and j (2 vertices) orientation is ij. In right triangle it is ji.





<span style="color:
#A7F3A7;">
for any oriented simplex σ a proper face σ′ has the same orientation as σ if σ′ appears in some even permutation of σ</span>
([15](zotero://open-pdf/library/items/4P3UXTZT?page=15&annotation=KXHSRRRB))










<span style="color:
#A7F3A7;">
oriented edge ij has the same orientation as j but the opposite orientation of i, capturing the idea that ij goes from i to j</span>
([15](zotero://open-pdf/library/items/4P3UXTZT?page=15&annotation=3RPKA7QH))





> related to boundary operator idea.

for edge, orientation is a direction. for vertex, orientation is a sign.

endpoint j inherits positive sign, start point i inherits negative sign.





<span style="color:
#A7F3A7;">
oriented simplicial complex is an abstract simplicial complex where each simplex is assigned an orientation</span>
([15](zotero://open-pdf/library/items/4P3UXTZT?page=15&annotation=TPD7J7TM))





> for vertex its a sign.
for edge its a direction.
for triangle its clockwise/anti-clockwise.

beyond 3d, we just describe orientation based on odd/even permutation.





### 2.3. Simplicial Surfaces










<span style="color:
#A7F3A7;">
simplicial surface is a pure simplicial 2-complex where the link of every vertex is a single loop of edges</span>
([15](zotero://open-pdf/library/items/4P3UXTZT?page=15&annotation=CH4DU26B))





> Special kind of a manifold complex (It is triangulated 2-manifold), which is again a special category of simplicial complexes.

remember a 2-complex can be visualized in 3d.


#simplicial-surface




<span style="color:
#A7F3A7;">
every vertex has a “disk-like” neighborhood captures the basic idea of a topological surface; we therefore say that such a complex is manifold</span>
([15](zotero://open-pdf/library/items/4P3UXTZT?page=15&annotation=HUIE4XHV))





> manifold complexes are more general than simplicial surfaces but less than simplicial complexes.

Anything besides are nonmanifold complexes.


#manifold-complex




<span style="color:
#A7F3A7;">
extend our definition a bit to a simplicial surface with boundary by also allowing the link to be a simple path of edges, rather than a loop</span>
([16](zotero://open-pdf/library/items/4P3UXTZT?page=16&annotation=9SQNQCQQ))










<span style="color:
#A7F3A7;">
For any simplicial surface K, its boundary bd(K) will always be a collection of (zero or more) closed loops</span>
([16](zotero://open-pdf/library/items/4P3UXTZT?page=16&annotation=3KTLTD4F))










<span style="color:
#A7F3A7;">
start with an arbitrary triangle, assign it an arbitrary orientation, and now “grow outwards,” assigning a consistent orientation to every triangle you encounter. The problem is that, at some point, you may loop back around and discover that there is no way to assign an orientation to a new triangle that is compatible with all previous orientations</span>
([16](zotero://open-pdf/library/items/4P3UXTZT?page=16&annotation=EJMVBZ9J))





> unorientable surfaces





<span style="color:
#A7F3A7;">
simplicial n-manifold is a pure simplicial n-complex where the link of every vertex is a simplicial (n − 1)-sphere</span>
([17](zotero://open-pdf/library/items/4P3UXTZT?page=17&annotation=KRBSHGHA))





> simplicial manifold is a special kind of a simplicial complex.

"surface" if 2-manifold.






![research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-17-x232-y433.png](research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-17-x232-y433.png)

> simplicial n-sphere.





<span style="color:
#A7F3A7;">
S2 is just the ordinary unit sphere; S1 is the unit circle; and S0 is nothing more than a pair of points</span>
([17](zotero://open-pdf/library/items/4P3UXTZT?page=17&annotation=DMD6X96R))










<span style="color:
#A7F3A7;">
simplicial surface is then a simplicial 2-manifold: every link is a simplicial 1-sphere, i.e., a closed loop of edges</span>
([17](zotero://open-pdf/library/items/4P3UXTZT?page=17&annotation=VPS9HFZH))





> the more general version of surface is manifold.





### 2.4. Adjacency Matrices





> Graphs have adjacency matrices. 

Simplicial complex can have the equivalent of that - collection of matrices, each describing how a k-simplex is connected to k-1-simplex.





<span style="color:
#A7F3A7;">
encode an abstract simplicial complex is using adjacency matrices</span>
([17](zotero://open-pdf/library/items/4P3UXTZT?page=17&annotation=LVJMNPUH))







#adjacency-matrix




<span style="color:
#A7F3A7;">
complex K comprised of vertices V, edges E, and triangles F, then we might assign indices 0, . . . , |V| − 1 to the vertices, 0, . . . , |E| − 1 to the edges, and 0, . . . , |F| − 1 to the triangles</span>
([17](zotero://open-pdf/library/items/4P3UXTZT?page=17&annotation=FBSN8XCZ))











![research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-18-x224-y573.png](research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-18-x224-y573.png)

> Not a tetrahedron. Just a simplicial 2-complex.





<span style="color:
#A7F3A7;">
A0 that says which edges contain which vertices</span>
([18](zotero://open-pdf/library/items/4P3UXTZT?page=18&annotation=4ARNFBUN))










<span style="color:
#A7F3A7;">
A1 that says which triangles contain which edges</span>
([18](zotero://open-pdf/library/items/4P3UXTZT?page=18&annotation=34QCYCJH))










<span style="color:
#A7F3A7;">
number of columns in adjacency matrix Ak is the same as the number of k-simplices; the number of rows is the number of (k + 1)-simplices</span>
([18](zotero://open-pdf/library/items/4P3UXTZT?page=18&annotation=QC38ABMU))










<span style="color:
#A7F3A7;">
1</span>
([18](zotero://open-pdf/library/items/4P3UXTZT?page=18&annotation=KHN3JW4U))





> Edge 1 contain Vertex 0.





<span style="color:
#A7F3A7;">
1</span>
([18](zotero://open-pdf/library/items/4P3UXTZT?page=18&annotation=4A2I729P))





> Triangle 1 contains Edge 0.





<span style="color:
#A7F3A7;">
very large complex with a relatively small number of connections—most of the entries are going to be zero. In practice, it’s therefore essential to use a sparse matrix</span>
([18](zotero://open-pdf/library/items/4P3UXTZT?page=18&annotation=9EP4XDZE))










<span style="color:
#A7F3A7;">
sparse matrix is simply a list of triples (r, c, x) where r, c ∈ N specify the row and column index of a nonzero entry and x ∈ R gives its value</span>
([18](zotero://open-pdf/library/items/4P3UXTZT?page=18&annotation=UUB9HGBI))










<span style="color:
#A7F3A7;">
sign of each nonzero entry will depend on the relative orientation of the two corresponding simplices: +1 if they have the same orientation; −1 if they have opposite orientation</span>
([18](zotero://open-pdf/library/items/4P3UXTZT?page=18&annotation=63QV2YCV))










<span style="color:
#A7F3A7;">
−1</span>
([18](zotero://open-pdf/library/items/4P3UXTZT?page=18&annotation=92JH7K2J))





> Edge 1 is going from 0 so sign of 0 is negative.





<span style="color:
#A7F3A7;">
1</span>
([18](zotero://open-pdf/library/items/4P3UXTZT?page=18&annotation=NKJQPUN7))





> Edge 1 is going towards 2 so sign of 2 is positive.





### 2.5. Halfedge Mesh










<span style="color:
#A7F3A7;">
this encoding is less general than, say, the adjacency matrix representation: we cannot capture edges that dangle off the side of a triangulation, or surfaces like the M  ̈obius band, or higher-dimensional shapes (e.g., volumes rather than surfaces)</span>
([19](zotero://open-pdf/library/items/4P3UXTZT?page=19&annotation=QZIK2ZH7))










<span style="color:
#A7F3A7;">
it will allow us to describe combinatorial surfaces made of general polygons rather than just triangles</span>
([19](zotero://open-pdf/library/items/4P3UXTZT?page=19&annotation=6Q26ZE96))





> combinatorial surface is more general than simplicial surface since we can have polygons instead of triangles (which is a special case of a simplicial complex).


#combinatorial-surface




<span style="color:
#A7F3A7;">
halfedge mesh allows us to encode a surface as a 2-dimensional CW complex</span>
([19](zotero://open-pdf/library/items/4P3UXTZT?page=19&annotation=6XPMC64J))





> CW complex is more general than simplicial complex.

Instead of having only triangles we can have arbitrary polygonal faces.


#cw-complex




<span style="color:
#A7F3A7;">
oriented simplicial surface K (which for now we’ll assume has no boundary):  • every edge is contained in two polygons, and • the edges around a vertex can be given a cyclic order.</span>
([19](zotero://open-pdf/library/items/4P3UXTZT?page=19&annotation=478UNMJ2))





> no boundary so obviously no unshared edge. the outer edge is not included as we explicitly consider surface with no boundary (outer edges).

since surface is a pure 2-simplical complex which can be projected on a plane, we can order the edges uniquely.





<span style="color:
#A7F3A7;">
consider that for every unoriented edge {i, j} between vertices i and j, we have two oriented edges ij ̸= ji which in this context we refer to as halfedges</span>
([19](zotero://open-pdf/library/items/4P3UXTZT?page=19&annotation=7S7DR5LZ))










<span style="color:
#A7F3A7;">
H to denote the set of all halfedges; note that for a surface without boundary |H| = 2|E|</span>
([19](zotero://open-pdf/library/items/4P3UXTZT?page=19&annotation=FT8BZBJQ))





> |H| = 2|E| is true for surface with boundary as well. It is generally true.





<span style="color:
#A7F3A7;">
two key functions: twin and next</span>
([19](zotero://open-pdf/library/items/4P3UXTZT?page=19&annotation=G8J3YIHH))










<span style="color:
#A7F3A7;">
twin function is the map η : H → H</span>
([19](zotero://open-pdf/library/items/4P3UXTZT?page=19&annotation=86VNH9QP))











![research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-19-x273-y170.png](research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-19-x273-y170.png)






<span style="color:
#A7F3A7;">
next function is the map ρ : H → H</span>
([19](zotero://open-pdf/library/items/4P3UXTZT?page=19&annotation=FM29E79Z))











![research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-19-x242-y113.png](research-notes/images/craneDISCRETEDIFFERENTIALGEOMETRY/image-19-x242-y113.png)






<span style="color:
#A7F3A7;">
faces of the mesh are described by the orbits of the “next” map ρ</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=JCRJCVH2))










<span style="color:
#A7F3A7;">
To get the vertices, we can instead consider the orbits of the map ρ ◦ η</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=VT367JAX))










<span style="color:
#A7F3A7;">
• the faces are orbits of ρ</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=YZDWUS2F))










<span style="color:
#A7F3A7;">
• the edges are orbits of η</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=YYXZEUYF))










<span style="color:
#A7F3A7;">
• the vertices are orbits of ρ ◦ η</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=NTZ625UM))










<span style="color:
#A7F3A7;">
any pair of maps ρ, η which satisfy some very basic properties will describe a valid combinatorial surface</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=BGCA4R3K))





> any pair - the pair of maps can describe any surface.

Instead of vertices, faces and edges - we start to describe surfaces as functions





<span style="color:
#A7F3A7;">
(i) the set H has an even number of elements</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=I3V6L8A6))





> Because |H| = 2|E|





<span style="color:
#A7F3A7;">
ii) ρ and η are both permutations of this set</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=MPSUU2UT))





> "permutation of a set" (H here) is a  function that simply outputs a rearrangement of the set from H->H





<span style="color:
#A7F3A7;">
(iii) η is an involution with no fixed points, i.e., η(η(ij)) = ij for all ij ∈ H, and η(ij) ̸= ij for any ij ∈ H</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=IVWNWHTS))





> 1. involution: n(n(ij)) = ij
2. no fixed points: n(ij) != ij





<span style="color:
#A7F3A7;">
twin of any even number h is h + 1; the twin of any odd number h is h − 1</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=NEZA5WFL))










<span style="color:
#A7F3A7;">
every permutation of an even number of things describes a combinatorial surface</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=8AVPR86H))





> Because number of halfedges (|H|) is even.





<span style="color:
#A7F3A7;">
even for surfaces made out of triangles, a halfedge mesh can describe triangulations that a simplicial complex cannot</span>
([20](zotero://open-pdf/library/items/4P3UXTZT?page=20&annotation=F5E7549X))





> triangle to cone + bottom disk example





<span style="color:
#A7F3A7;">
to describe a torus using a simplicial complex we need at least 7 vertices, 21 edges, and 14 triangles</span>
([21](zotero://open-pdf/library/items/4P3UXTZT?page=21&annotation=S7PMM8UI))










<span style="color:
#A7F3A7;">
triangulation can be drawn using straight lines and flat, non-intersecting triangles in R3, as depicted on the right—something known as the Csa ́sza ́r polyhedron</span>
([22](zotero://open-pdf/library/items/4P3UXTZT?page=22&annotation=H2Y9ALMA))







#csaszar-polyhedron




<span style="color:
#A7F3A7;">
halfedge description will provide the basic data structure for the algorithms</span>
([22](zotero://open-pdf/library/items/4P3UXTZT?page=22&annotation=JX5XXU42))










<span style="color:
#A7F3A7;">
how do we deal with surfaces that have boundary (such as a disk or annulus)? These would seem to violate one of our basic axioms, that every edge is contained in exactly two polygons. The easy answer is: just treat each boundary component as a single polygon with many sides</span>
([22](zotero://open-pdf/library/items/4P3UXTZT?page=22&annotation=9V2UMD62))





> Promote the boundary loop form a single polygonal face, and now all the outer edges are contained in exactly 2 polygons too.




