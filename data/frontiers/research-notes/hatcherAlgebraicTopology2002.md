---
published: "2002-01-01"
added: "2026-07-09"
modified: "2026-07-24"
authors: Allen Hatcher
abstract: "No abstract available."
---

# Algebraic topology

[URL]()

## Tags
#algebraic-topology


## Notes


![research-notes/images/hatcherAlgebraicTopology2002/image-6-x61-y681.png](research-notes/images/hatcherAlgebraicTopology2002/image-6-x61-y681.png)






<span style="color:
#A7F3A7;">
CW complexes have proved over time to be the most natural class of spaces for algebraic topology</span>
([6](zotero://open-pdf/library/items/KZRTTTMS?page=6&annotation=Q93H9WHN))










<span style="color:
#A7F3A7;">
algebraic topology separates naturally into the two broad channels of homology and homotopy</span>
([6](zotero://open-pdf/library/items/KZRTTTMS?page=6&annotation=HNBNJ6Q3))










<span style="color:
#A7F3A7;">
tentatively titled ‘Spectral Sequences in Algebraic Topology’ and is referred to herein as [SSAT]</span>
([7](zotero://open-pdf/library/items/KZRTTTMS?page=7&annotation=H35IV2TZ))










<span style="color:
#A7F3A7;">
vector bundles, characteristic classes, and K–theory, which will be largely independent of [SSAT] and also of much of the present book. This is referred to as [VBKT]</span>
([7](zotero://open-pdf/library/items/KZRTTTMS?page=7&annotation=B24M867D))










<span style="color:
#A7F3A7;">
reader should know about quotient spaces, or identification spaces</span>
([7](zotero://open-pdf/library/items/KZRTTTMS?page=7&annotation=BWETLAFT))










<span style="color:
#A7F3A7;">
∆ complexes, which are a mild generalization of the classical notion of a simplicial  complex</span>
([7](zotero://open-pdf/library/items/KZRTTTMS?page=7&annotation=8V5BMWP3))










### Homotopy and Homotopy Type










<span style="color:
#A7F3A7;">
two spaces to be equivalent if they have ‘the same shape’ in a sense that is much broader than homeomorphism</span>
([10](zotero://open-pdf/library/items/KZRTTTMS?page=10&annotation=ZBA4NKER))





> homeomorphism is a function to continuously deform one topological space to another, without tearing.

the "equivalent" is intended to be even broader. It's the homotopy.


#homeomorphism




<span style="color:
#A7F3A7;">
thin letter is a subspace of the thick letter, and we can continuously shrink the thick letter to the thin one</span>
([10](zotero://open-pdf/library/items/KZRTTTMS?page=10&annotation=ZGFTT8CX))











![research-notes/images/hatcherAlgebraicTopology2002/image-10-x288-y180.png](research-notes/images/hatcherAlgebraicTopology2002/image-10-x288-y180.png)






<span style="color:
#A7F3A7;">
decompose a thick letter, call it X , into line segments connecting each point on the outer boundary of X to a unique point of the thin subletter X</span>
([10](zotero://open-pdf/library/items/KZRTTTMS?page=10&annotation=XEDIXTDR))










<span style="color:
#A7F3A7;">
shrink X to X by sliding each point of X − X into  X along the line segment</span>
([10](zotero://open-pdf/library/items/KZRTTTMS?page=10&annotation=2CPJXG4D))





> <b>X</b> - X is the set theoretic difference





<span style="color:
#A7F3A7;">
think of this shrinking process as taking place during a time interval 0 ≤ t ≤ 1</span>
([10](zotero://open-pdf/library/items/KZRTTTMS?page=10&annotation=UA6BDKJ8))










<span style="color:
#A7F3A7;">
ft : X→X parametrized by t ∈ I =  [0, 1] , where ft(x) is the point to which a given point x ∈ X has moved at time t</span>
([10](zotero://open-pdf/library/items/KZRTTTMS?page=10&annotation=U3QTM5DE))










<span style="color:
#A7F3A7;">
deformation  retraction of a space X onto a subspace A is a family of maps ft : X→X , t ∈ I , such  that f0 = 11 (the identity map), f1(X) = A , and ft || A = 11 for all t</span>
([11](zotero://open-pdf/library/items/KZRTTTMS?page=11&annotation=GPQMAS2C))





> Identity map here means output of the function is same as the input.

at t=0: the space X hasn't changed so f_0(x) = x

f_t|A: restrict the inputs to f_t from only space A then f_t(a) = a because space A is always fixed


#deformation-retraction




<span style="color:
#A7F3A7;">
ft should be continuous</span>
([11](zotero://open-pdf/library/items/KZRTTTMS?page=11&annotation=MZCI63PD))










<span style="color:
#A7F3A7;">
deformation retraction of a M ̈obius band onto its core circle</span>
([11](zotero://open-pdf/library/items/KZRTTTMS?page=11&annotation=TGZ7NA8D))





> Topology itself changed by deformation retraction.






![research-notes/images/hatcherAlgebraicTopology2002/image-11-x221-y458.png](research-notes/images/hatcherAlgebraicTopology2002/image-11-x221-y458.png)







![research-notes/images/hatcherAlgebraicTopology2002/image-11-x75-y458.png](research-notes/images/hatcherAlgebraicTopology2002/image-11-x75-y458.png)






<span style="color:
#A7F3A7;">
disk with two smaller open subdisks removed shrinks to three different subspaces</span>
([11](zotero://open-pdf/library/items/KZRTTTMS?page=11&annotation=QIB2AIFT))





> Topology itself changed. Also, deformation retraction depends on the choice of space A, so not unique.





<span style="color:
#A7F3A7;">
map f : X→Y , the mapping  cylinder Mf is the quotient space of the disjoint union (X × I) ∐ Y obtained by identifying each (x, 1) ∈ X × I with f (x) ∈ Y</span>
([11](zotero://open-pdf/library/items/KZRTTTMS?page=11&annotation=ACZPV5IY))





> mapping cylinder helps us convert the transformations (maps) into a thing (cylinder) that we can study.

I is unit interval [0,1] in topology

X x I because we want to thicken X into a cylinder first before we do quotient space (make some points equivalent), so we can also maintain a copy of X. here copy is (x,0)

Quotient space means we make points equivalent. In this case we make points (x,1) ~ f(x)

Quotient space is gluing.


#mapping-cylinder
#quotient-space





![research-notes/images/hatcherAlgebraicTopology2002/image-11-x238-y258.png](research-notes/images/hatcherAlgebraicTopology2002/image-11-x238-y258.png)






<span style="color:
#A7F3A7;">
mapping cylinder Mf deformation retracts to the subspace Y by sliding each point (x, t) along the segment  {x}× I ⊂ Mf to the endpoint f (x) ∈ Y</span>
([11](zotero://open-pdf/library/items/KZRTTTMS?page=11&annotation=S3RZBDX2))










<span style="color:
#A7F3A7;">
thick X deformation retracts to the thin X , which in turn deformation retracts to the point of intersection of its two crossbars. The net result is a deformation retraction of X onto a point</span>
([11](zotero://open-pdf/library/items/KZRTTTMS?page=11&annotation=H9HNXBDZ))





> Thick X can be deformed to a point directly.





<span style="color:
#A7F3A7;">
deformation retraction ft : X→X is a special case of the general notion of a  homotopy, which is simply any family of maps ft : X→Y , t ∈ I , such that the associated map F : X × I→Y given by F (x, t) = ft(x) is continuous</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=SXV6DDAG))





> from space X to a different space Y.

X x I because I signifies t=[0,1] representation.

note: thick X to thin X to point is deformation retraction. Here its 3D to 2D to 1D. So,

- deformation retraction can collapse dimensions.
- deformation retraction must stay within its space of points.

Homotopy can describe maps that increase dimensions as well, and so entirely new space of points. like a 1D line segment to a 2D disk.


#homotopy




<span style="color:
#A7F3A7;">
two maps f0, f1 : X→Y are homotopic if there exists a homotopy ft connecting them, and one writes f0 ≃ f1</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=Q5PQ2XK4))





> that f_t is the homotopy (continuous path through space of maps from X to Y)


#homotopic-maps




<span style="color:
#A7F3A7;">
deformation retraction of X onto a subspace A is a homotopy from the identity map of X to a retraction of X onto A , a map r : X→X such that  r (X) = A and r || A = 11</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=RV36LBNZ))





> deformation retraction is a homotopy.

homotopy needs 2 endpoint functions f_0 and f_1. here:

f_0: identity map of X, f_0(x) = x
f_1: retraction function of X onto A, f_1(X) = A and f_1(a) = a

we call f_1 as r (retraction function) such that:

r: X->X
r(X) = A
r | A = identity (note: we don't write it as r(A) = A, because its weaker. This would mean that the output belongs to the same space and nothing about the fixed / sameness of the output as the input point)


#retraction




<span style="color:
#A7F3A7;">
retraction as a map X→A  restricting to the identity on the subspace A ⊂ X</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=5HCGBBVL))





> r: X->A
r(X) = A
r(a) = a for all a element of A





<span style="color:
#A7F3A7;">
retraction is a map r : X→X with r 2 = r</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=ZB7Y3FCI))





> r^2 = r means r(r(x)) = r(x)

r is an idempotent function.

like the twin function for halfedge meshes.


#idempotent




<span style="color:
#A7F3A7;">
Retractions are the topological analogs of projection operators</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=MRSUPAM8))





> projection operators try to project from some space to another.

say we apply some projection operator from R^3 to R^3. 

(x,y,z) -> (x,y,0)

Applying the projection operator again on the projection is just identity.

(x,y,0) -> (x,y,0)





<span style="color:
#A7F3A7;">
space X always retracts onto any point x0 ∈ X via the constant map sending all of X to x0 , but a space that deformation retracts onto a point must be path-connected since a deformation retraction of X to x0 gives a path joining each x ∈ X to x0</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=X6ZLSJZP))





> retraction doesn't care about the line segments connecting the points in space X to A (that is path-connectedness).

but deformation retraction requires path-connectedness.





<span style="color:
#A7F3A7;">
there are path-connected spaces that do not deformation retract onto a point</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=8YF5JWEV))










<span style="color:
#A7F3A7;">
homotopy ft : X→Y whose  restriction to a subspace A ⊂ X is independent of t is called a homotopy relative  to A , or more concisely, a homotopy rel A</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=C2EWYICL))





> deformation retraction (f_t(a) = a and so obviously doesn't depend on t) is a special case of homotopy rel A (f_t(a) just doesn't depend on t).

the output points for inputs from subspace A of domain X, remain unchanged throughout the homotopy.


#homotopy-rel-a




<span style="color:
#A7F3A7;">
deformation retraction of X onto  A is a homotopy rel A from the identity map of X to a retraction of X onto A</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=DDCAD5QR))





> more stronger statement on the kind of homotopy that happens with deformation retraction.





<span style="color:
#A7F3A7;">
ft : X→X , then if  r : X→A denotes the resulting retraction and i : A→X the inclusion, we have r i = 11  and ir ≃ 11 , the latter homotopy being given by ft</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=W2CRGVIW))





> we just view the space A points as space X points.

homotopy equivalence needs an inclusion function (and a retraction function of course).

r(i) is equal to identity (because no point has moved at all during this)

i(r) is homotopic to identity (because point has moved during this)


#inclusion




<span style="color:
#A7F3A7;">
map f : X→Y is called a homotopy equivalence if there is a map g : Y →X such that  f g ≃ 11 and gf ≃ 11</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=C8HMQLSX))





> now generalize the deformation retraction case, relax the strict "equal to identity" for r(i) composition in deformation retraction, and make make both homotopic (the general homotopy case)

so now, fg and gf are homotopic to identity map and not necessarily equal.

the general version, functions f and g show homotopy equivalence.

special case: deformation retraction
- g can be the inclusion map. 
- f the retraction map.
- fg is then equal to identity.


#homotopy-equivalence




<span style="color:
#A7F3A7;">
spaces X and Y are said to be homotopy equivalent or to  have the same homotopy type</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=9B29SNYL))





> spaces X and Y are homotopy equivalent / show same homotopy type.


#homotopy-equivalent
#homotopy-type




<span style="color:
#A7F3A7;">
this is an equivalence relation, in contrast with the nonsymmetric notion of deformation retraction</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=UIWHEN35))










<span style="color:
#A7F3A7;">
the three graphs are all homotopy equivalent</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=2MFRDRQA))





> say these are subspaces A, B, C of space X.

since this is deformation retraction case, there are 3 retraction maps and 3 inclusion maps.

Consider A and B,

A and B are homotopy equivalent because there can be f_AB and g_AB such that:

f_AB = r_B(i_A) such that A->B
g_AB = r_A(i_B) such that B->A

now,

f_AB(g_AB) is homotopic to identity on B
g_AB(f_AB) is homotopic to identity on A

therefore,

A and B are homotopy equivalent spaces.





<span style="color:
#A7F3A7;">
two spaces X and Y are homotopy equivalent if and only if there exists a third space Z containing both X and Y as deformation retracts</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=CN9TSLYH))










<span style="color:
#A7F3A7;">
take Z to be the mapping cylinder Mf of any homotopy equivalence f : X→Y</span>
([12](zotero://open-pdf/library/items/KZRTTTMS?page=12&annotation=5Q5QMR9H))










<span style="color:
#A7F3A7;">
A space having the homotopy type of a point is called contractible</span>
([13](zotero://open-pdf/library/items/KZRTTTMS?page=13&annotation=LDIQRUWB))







#contractible




<span style="color:
#A7F3A7;">
identity map of the space be nullhomotopic, that is, homotopic to a constant map</span>
([13](zotero://open-pdf/library/items/KZRTTTMS?page=13&annotation=6Q8IM3VT))





> general identity map: f(x) = x
nullhomotopic: f(x) = c


#nullhomotopic




<span style="color:
#A7F3A7;">
slightly weaker than saying the space deformation retracts to a point</span>
([13](zotero://open-pdf/library/items/KZRTTTMS?page=13&annotation=K69CWINZ))





> Because deformation retraction has strict constraints common to contractible:

f_0 = identity
f_1 = constant map

and additionally,

f_t(a) = a.

- contractible: everything ends at x_0
- deformation retraction onto a point: everything ends at x_0 and x_0 never moves





<span style="color:
#A7F3A7;">
example of a 2 dimensional subspace of R  3 , known as the  house with two rooms</span>
([13](zotero://open-pdf/library/items/KZRTTTMS?page=13&annotation=XASDR8VP))











![research-notes/images/hatcherAlgebraicTopology2002/image-13-x75-y510.png](research-notes/images/hatcherAlgebraicTopology2002/image-13-x75-y510.png)






<span style="color:
#A7F3A7;">
The resulting space X thus consists of three horizontal pieces homeomorphic to annuli plus all the vertical rectangles that form the walls of the two chambers</span>
([13](zotero://open-pdf/library/items/KZRTTTMS?page=13&annotation=YJ67T9JL))










<span style="color:
#A7F3A7;">
consider a closed ε neighborhood N(X) of X . This clearly deformation retracts onto X if ε is sufficiently small</span>
([13](zotero://open-pdf/library/items/KZRTTTMS?page=13&annotation=KNC7BAH9))





> Think of thickening the walls (this is deformation retraction which implies homotopy).





<span style="color:
#A7F3A7;">
N(X) is homeomorphic to D  3 , the unit ball in R  3</span>
([13](zotero://open-pdf/library/items/KZRTTTMS?page=13&annotation=WCXAFC8B))





> Think of the fingers pushing and making space in a ball.

Lower finger makes the upper chamber space, upper finger makes the lower chamber space.

this is homeomorphism (this implies homotopy).





<span style="color:
#A7F3A7;">
D  3  ≃ point</span>
([13](zotero://open-pdf/library/items/KZRTTTMS?page=13&annotation=2P3VEZLN))





> Think of a ball deformation retract to a point (homotopy).





<span style="color:
#A7F3A7;">
X is contractible</span>
([13](zotero://open-pdf/library/items/KZRTTTMS?page=13&annotation=7LU38ZX6))





> House with 2 rooms is contractible.





<span style="color:
#A7F3A7;">
X deformation retracts to a point</span>
([13](zotero://open-pdf/library/items/KZRTTTMS?page=13&annotation=5B3HHRBH))





> House with 2 rooms is a deformation retraction onto a point.





### Cell Complexes










<span style="color:
#A7F3A7;">
an orientable surface Mg of genus g can be constructed from a polygon with 4g sides</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=GM8Q37TF))





> genus is number of handles / holes


#genus




<span style="color:
#A7F3A7;">
4g edges of the polygon become a union of 2g circles in the surface, all intersecting in a single point</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=KTS2KFUE))





> 4g polygon on right.
union of 2g circles on left.

The point is depicted in the figure.





<span style="color:
#A7F3A7;">
interior of the polygon can be thought of as an open disk, or a 2 cell, attached to the union of the 2g circles</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=G73MHK9V))





> 2-cell: open disk





<span style="color:
#A7F3A7;">
union of the circles as being obtained from their common point of intersection, by attaching 2g open arcs, or 1 cells</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=2UQRH8N4))





> 1-cell: open arc






![research-notes/images/hatcherAlgebraicTopology2002/image-14-x240-y372.png](research-notes/images/hatcherAlgebraicTopology2002/image-14-x240-y372.png)






<span style="color:
#A7F3A7;">
n cells eαn</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=A2VQX7ZS))





> alpha-th n-cell.

alpha is the index given to the n-cell.

e^n = Interior(D^n)





<span style="color:
#A7F3A7;">
maps  φα : Sn−1→Xn−1</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=Q7AG5ZAR))





> attaching map.

S^(n-1): boundary of new n-cell disk.

X^(n-1): space already built.





<span style="color:
#A7F3A7;">
quotient space of the disjoint union X n−1 ∐  α Dαn</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=HTXDPQA5))





> gluing of these things in this union (which is disjoint as of now).





<span style="color:
#A7F3A7;">
x ∼ φα(x)</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=BIGZ9WR9))





> Rule for attaching.

attach x to attachingmap(x)





<span style="color:
#A7F3A7;">
x ∈ ∂Dα</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=EEIAHLGL))





> point x is on the boundary of the disk.





<span style="color:
#A7F3A7;">
n disks Dαn</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=8BTKBT7R))





> This has boundary + interior. boundary is required for attaching.





<span style="color:
#A7F3A7;">
Xn = Xn−1∐  α eα</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=7XDV4R7Z))





> X^n would simply be a union of n-cells.





<span style="color:
#A7F3A7;">
one can continue indefinitely, setting X = ⋃  n Xn</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=NG8Y92TX))





> infinite cell complex.





<span style="color:
#A7F3A7;">
A ∩ Xn</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=BNJQQ63T))





> Part of A that's in X^n.





<span style="color:
#A7F3A7;">
open (or closed) in Xn for each n</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=27E349BX))





> In each skeleton, A should be open.





<span style="color:
#A7F3A7;">
space X constructed in this way is called a cell complex or CW complex</span>
([14](zotero://open-pdf/library/items/KZRTTTMS?page=14&annotation=GEINI5UK))





> Go skeleton by skeleton. You attach the n-cells to the entire X^(n-1) skeleton. And the entire boundary of the n-cell to be attached.


#cw-complex




<span style="color:
#A7F3A7;">
X = Xn for some n , then X is said to be finite-dimensional, and the smallest such n is the dimension of X , the maximum dimension of cells of X</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=9QZXKZST))





> Dimension of a space is the smallest dimension among all possible CW decomposition.

Example: Dim(Standard Torus) = 2


#dimension




<span style="color:
#A7F3A7;">
1 dimensional cell complex X = X1 is what is called a graph</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=CKABLK54))







#topological-graph




<span style="color:
#A7F3A7;">
Euler characteristic, which for a cell complex with finitely many cells is defined to be the number of even-dimensional cells minus the number of odd-dimensional cells</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=DEMTEQE7))





> # even-dim cells - # odd-dim cells


#euler-characteristic




<span style="color:
#A7F3A7;">
Euler characteristic of a cell complex depends only on its homotopy type, so the fact that the house with two rooms has the homotopy type of a point implies that its Euler characteristic must be 1</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=IIZP33CH))










<span style="color:
#A7F3A7;">
sphere Sn has the structure of a cell complex with just two cells, e0  and en , the n cell being attached by the constant map Sn−1→e0</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=QSMAT5N9))





> for a 2d sphere, we take all the boundary points of a closed disk 2-cell and glue them to one point, like a balloon.





<span style="color:
#A7F3A7;">
Sn as the quotient space Dn/∂Dn</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=P5YL34Y7))





> / means what's on RHS is equivalence.

Here, consider Set D^n, with every point in boundary set delD^n becoming equivalent to every other point in it. 

Now glue them all (quotient them) to a point (visualization).





<span style="color:
#A7F3A7;">
Real projective n space RPn is defined to be the space of all lines  through the origin in Rn+1 . Each such line is determined by a nonzero vector in Rn+1 , unique up to scalar multiplication</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=EWEB9B33))





> Geometric Perspective.

Space of directions. Each point in the space is a line (gives direction). Like a vector without a magnitude.

RP^2: each point in this space is a line through origin in R^3.


#real-projective-space




<span style="color:
#A7F3A7;">
RPn is topologized as the quotient space of  Rn+1 − {0} under the equivalence relation v ∼ λv for scalars λ ≠ 0</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=3HZHW34L))





> Quotient of vectors.

All vectors on the same line becomes an equivalence class.





<span style="color:
#A7F3A7;">
vectors of length 1</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=ESRTEU9X))





> Push all those vectors in each equivalence class to unit distance from origin.





<span style="color:
#A7F3A7;">
RPn is also the quotient space Sn/(v ∼ −v)</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=XIFANGWU))





> Because we pushed, the only 2 representatives on the same line would then be diametrically opposite.





<span style="color:
#A7F3A7;">
antipodal points</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=Y55A47LJ))





> if 3D, it's (x,y,z) & (-x,-y,-z)





<span style="color:
#A7F3A7;">
RPn is the quotient space of a hemisphere Dn with antipodal points of ∂Dn identified</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=QA94J3NE))





> Quotient of hemisphere.

hemisphere is homeomorphic to disk, and its boundary is a 2D disk.

So, 

RP^n is D^n / x~-x on delD^n





<span style="color:
#A7F3A7;">
∂Dn with antipodal points identified is just RPn−1</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=BLXS9J5B))





> By identified, we mean glued.





<span style="color:
#A7F3A7;">
RPn is obtained from RPn−1 by attaching an n cell, with the quotient projection Sn−1→RPn−1 as the attaching map</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=F984LZQ2))





> CW Complex.

S^1 is the regular boundary of a disk (ordinary colored rim).

RP^1 is the rim after antipodal points are attached (the mobius strip), this involves intersection.

RP^1 is just a circle. If given thickness it looks like mobius strip.

Keep increasing thickness. n-cell is disk interior which becomes the intersecting thing RP^2 (boy's surface).





<span style="color:
#A7F3A7;">
RP∞ as the space of lines through the origin in R∞ = ⋃  n Rn</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=5LYZS6PZ))










<span style="color:
#A7F3A7;">
Complex projective n space CPn is the space of complex lines through  the origin in Cn+1 , that is, 1 dimensional vector subspaces of Cn+1</span>
([15](zotero://open-pdf/library/items/KZRTTTMS?page=15&annotation=XIGT58QD))





> C^3 be (a+bi, c+di, e+fi)

Point in CP^2 would then be a line through (0,0,0) in C^3


#complex-projective-space




<span style="color:
#A7F3A7;">
quotient of the unit sphere S  2n+1  ⊂C  n+1  with v ∼ λv for |λ| = 1</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=HZUXPEY4))





> C^1 is 2 dimensional.

S^2n+1 because 2*(n+1) - 1 would be the dimension of the sphere for C^n+1.





<span style="color:
#A7F3A7;">
CP  n  as a quotient space of the disk D  2n  under the identifications v ∼ λv for v ∈ ∂D  2n</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=NGU5PRUX))





> D^2n because dimension of disk in C^n would be 2n.





<span style="color:
#A7F3A7;">
graph of the function</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=UG38D67E))





> Set of (input, output) pairs.





<span style="color:
#A7F3A7;">
CP  n  is obtained from CP  n−1  by attaching a cell e  2n  via the quotient map S  2n−1  →  CP  n−1  . So by induction on n we obtain a cell structure CP  n  =e  0  ∪e  2  ∪ ··· ∪ e  2n  with cells only in even dimensions</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=NF5WY2PG))










<span style="color:
#A7F3A7;">
Each cell e  n α  in a cell complex X has a characteristic map Φ  α  :D  n α  →  X which extends the attaching map φ  α  and is a homeomorphism from the interior of D  n α  onto e  n α</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=DHW5RHY6))





> For an n-cell,

attaching map: boundary points
characteristic map: boundary points + interior points

In case of RP^2 (boy's surface),

Where the points of the 2-disk ends up in the boys surface is the characteristic map of that 2-disk.


#characteristic-map




<span style="color:
#A7F3A7;">
canonical cell structure on S  n  described in Example 0.3, a characteristic map for the n cell is the quotient map  D n  →  S n  collapsing ∂D  n  to a point</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=FI5YER5B))





> The balloon visualization.





<span style="color:
#A7F3A7;">
subcomplex of a cell complex X is a closed subspace A ⊂ X that is a union of cells of X</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=ECRFE2D4))





> closed: includes all of interior and boundary points.


#subcomplex




<span style="color:
#A7F3A7;">
A is a cell complex in its own right</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=TAYHAWRF))










<span style="color:
#A7F3A7;">
pair (X, A) consisting of a cell complex X and a subcomplex A will be called a CW pair</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=8WHGDF8S))







#cw-pair




<span style="color:
#A7F3A7;">
natural inclusions S  0  ⊂S  1  ⊂ ··· ⊂ S  n  , but these subspheres are not subcomplexes of S  n  in its usual cell structure with just two cells</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=RIJVN8XZ))





> Just two cells: S^n = e^0 U e^n





<span style="color:
#A7F3A7;">
equatorial S  k−1  by attaching two k cells, the components of S  k  −S  k−1</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=9SC2ZH3S))





> Consider S^2.

Equatorial S^1 is a circle (closed), 

then, S^2 - S^1 is two open 2-cell components: northern hemisphere (e_+^2), southern hemisphere (e_-^2).

Now S^2 = S^1 U e_+^2 U e_-^2

So, S^1 is a subcomplex of S^2





<span style="color:
#A7F3A7;">
two-to-one quotient map S  ∞ →  RP  ∞  that identifies antipodal points of S  ∞  identifies the two n cells of S  ∞  to the single  n cell of RP  ∞</span>
([16](zotero://open-pdf/library/items/KZRTTTMS?page=16&annotation=44BIA4VV))





> The two hemispheres are quotiented to the n-cell in RP^n.





<span style="color:
#A7F3A7;">
if we start with S1 with its minimal cell structure and attach to this a 2 cell by a map S1→S1 whose image is a nontrivial subarc of S1 , then the closure of the 2 cell is not a subcomplex since it contains only a part of the 1 cell.</span>
([17](zotero://open-pdf/library/items/KZRTTTMS?page=17&annotation=QS28MFZT))





> Take a circle (S^1), and to only part of it, find a way to attach a 2-cell (subarc, can be non trivial).

closure of the 2-cell would then be the 2-cell and this non-trivial subarc.

This can't be a subcomplex because it should be a union of whole cells.





### Operations on Spaces










<span style="color:
#A7F3A7;">
flexibility to allow many natural constructions</span>
([17](zotero://open-pdf/library/items/KZRTTTMS?page=17&annotation=NNVSB99W))





> These are the operations.





### Products





> Combine spaces.


#product-space




<span style="color:
#A7F3A7;">
X × Y has the structure of a cell  complex with cells the products eαm × eβn</span>
([17](zotero://open-pdf/library/items/KZRTTTMS?page=17&annotation=J4BTUGFI))










<span style="color:
#A7F3A7;">
torus S1 × S1</span>
([17](zotero://open-pdf/library/items/KZRTTTMS?page=17&annotation=YWSCUQVM))





> Torus is Cartesian product of 2 circles.





<span style="color:
#A7F3A7;">
general CW complexes X and Y there is one small complication: The topology on X × Y as a cell complex is sometimes finer than the product topology, with more open sets than the product topology has, though the two topologies coincide if either X or Y has only finitely many cells, or if both X and Y have countably many cells</span>
([17](zotero://open-pdf/library/items/KZRTTTMS?page=17&annotation=7YBYRYA9))





> finer topology: has more open sets

if X and Y are finite CW complexes, then CW topology (cell by cell) on XxY is exactly the product topology.





### Quotients





> Glue Spaces.





<span style="color:
#A7F3A7;">
cells of X/A are the cells of X − A plus one new 0 cell, the image of A in X/A</span>
([17](zotero://open-pdf/library/items/KZRTTTMS?page=17&annotation=QAZ9PMY2))










### Suspension





> Raise Dimension.


#suspension




<span style="color:
#A7F3A7;">
suspension SX is the quotient of  X × I obtained by collapsing X × {0} to one point and X × {1} to another point</span>
([17](zotero://open-pdf/library/items/KZRTTTMS?page=17&annotation=9IEPGXGQ))





> I is [0,1]

So XxI is a cylinder. Now collapse each end at 0 and 1 to points.






![research-notes/images/hatcherAlgebraicTopology2002/image-17-x460-y18.png](research-notes/images/hatcherAlgebraicTopology2002/image-17-x460-y18.png)






<span style="color:
#A7F3A7;">
X = Sn , when SX = Sn+1 with the two ‘suspension points’ at the north and south poles of  Sn+1 , the points (0, ··· , 0, ±1)</span>
([17](zotero://open-pdf/library/items/KZRTTTMS?page=17&annotation=AAJGI4L3))





> say X=S^1 (circle), then SX = S^2 (sphere)), with north and south pole points as (0,0,-1) and (0,0,+1).

The dimension is raised.





<span style="color:
#A7F3A7;">
cone CX = (X × I)/(X × {0})</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=QLU9Y99W))










<span style="color:
#A7F3A7;">
not only spaces but also maps can be suspended</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=KMTMF3B5))










### Join










<span style="color:
#A7F3A7;">
cone CX is the union of all line segments joining points of X to an external  vertex</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=PHCD5ZJS))










<span style="color:
#A7F3A7;">
suspension SX is the union of all line segments joining points of X to two external vertices</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=XUKWLLI2))










<span style="color:
#A7F3A7;">
given X and a second space Y , one can define the space of all line segments joining points in X to points in Y . This is the join X ∗ Y</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=38DIURKC))







#join




<span style="color:
#A7F3A7;">
an iterated join X1 ∗ ··· ∗ Xn can be constructed as the space of formal linear combinations t1x1 + ··· + tnxn with 0 ≤ ti ≤ 1 and t1 + ··· + tn = 1</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=5GQF898V))





> Instead of just 2 spaces X_1 and X_2 (here we called them X and Y), 

say we have n spaces X_1, X_2,...,X_n.





<span style="color:
#A7F3A7;">
Xi is just a point</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=EQERZJ5L))





> Now make each of them as just a point.





<span style="color:
#A7F3A7;">
join of two points is a line segment</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=TNGJ47WL))





> 1-simplex.





<span style="color:
#A7F3A7;">
join of three points is a triangle,</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=BFZRS3WZ))





> 2-simplex.





<span style="color:
#A7F3A7;">
join of four points is a tetrahedron</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=MFK5XATY))





> 3-simplex.





<span style="color:
#A7F3A7;">
join of n points is a convex polyhedron of dimension n − 1 called a simplex</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=64HVR7T7))







#simplex




<span style="color:
#A7F3A7;">
n points are the n standard basis vectors for Rn , then their join is the (n − 1) dimensional simplex</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=AK8CQZR2))





> n-1-simplex.





<span style="color:
#A7F3A7;">
each Xi is S0 , two points</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=398BUE2P))










<span style="color:
#A7F3A7;">
Rn</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=JJIKPV2B))





> Say R^3 then 

(+-1,0,0)
(0,+-1,0)
(0,0,+-1)





<span style="color:
#A7F3A7;">
join X1 ∗ ··· ∗ Xn is the union of 2n copies of the simplex ∆n−1</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=WJJF6QGY))





> 2^3 = 8 copies of the 2-simplex





<span style="color:
#A7F3A7;">
radial projection from the origin gives a homeomorphism between X1 ∗ ··· ∗ Xn and Sn−1</span>
([18](zotero://open-pdf/library/items/KZRTTTMS?page=18&annotation=PDWXDF34))





> Radial projection means just push each point on the simplex to unit distance from the center.

Therefore,

Join of n number of S^0 spaces is n-1-sphere.


#radial-projection




<span style="color:
#A7F3A7;">
X and Y are CW complexes, then there is a natural CW structure on X ∗ Y having the subspaces X and Y as subcomplexes, with the remaining cells being the product cells of X × Y × (0, 1)</span>
([19](zotero://open-pdf/library/items/KZRTTTMS?page=19&annotation=TPHB7HEP))










### Wedge Sum










<span style="color:
#A7F3A7;">
spaces X and  Y with chosen points x0 ∈ X and y0 ∈ Y , then the wedge sum X ∨ Y is the quotient  of the disjoint union X ∐ Y obtained by identifying x0 and y0 to a single point</span>
([19](zotero://open-pdf/library/items/KZRTTTMS?page=19&annotation=YCGUKEYZ))







#wedge-sum




<span style="color:
#A7F3A7;">
S1 ∨ S1 is homeomorphic to the figure ‘8’</span>
([19](zotero://open-pdf/library/items/KZRTTTMS?page=19&annotation=3Z5ND72Y))










### Smash Product










<span style="color:
#A7F3A7;">
smash product X ∧ Y is then defined to be the quotient X × Y /X ∨ Y</span>
([19](zotero://open-pdf/library/items/KZRTTTMS?page=19&annotation=3CW4ADZE))







#smash-product




<span style="color:
#A7F3A7;">
Sm ∧Sn has a cell structure with just two cells, of dimensions 0 and m+n , hence Sm ∧Sn = Sm+n</span>
([19](zotero://open-pdf/library/items/KZRTTTMS?page=19&annotation=DP5FNZ64))










<span style="color:
#A7F3A7;">
when m = n = 1 we see that collapsing longitude and meridian circles of a torus to a point produces a 2 sphere</span>
([19](zotero://open-pdf/library/items/KZRTTTMS?page=19&annotation=H87XLESU))





> Torus is made of 

1 0-cell
2 1-cells
1 2-cell

after collapsing the 2 1-cells to a point, the boundary of the 2-cells gets collapsed to a point and we now have a 2-sphere.

Now,

1 0-cell
1 2-cell

Therefore, S^1 A S^1 has cell structure with just 2 cells of dim 0 and 2.





### Two Criteria for Homotopy Equivalence










<span style="color:
#A7F3A7;">
main tool we used for constructing homotopy equivalences was the fact that a mapping cylinder deformation retracts onto its ‘target’ end</span>
([19](zotero://open-pdf/library/items/KZRTTTMS?page=19&annotation=X5ELFLZK))





> If two spaces deformation retracts to the same space, they are homotopy equivalent.





<span style="color:
#A7F3A7;">
one can often produce homotopy equivalences between rather different-looking spaces</span>
([19](zotero://open-pdf/library/items/KZRTTTMS?page=19&annotation=A5PRNFGM))





> Like the three graphs example.





<span style="color:
#A7F3A7;">
first involves collapsing certain subspaces to points</span>
([19](zotero://open-pdf/library/items/KZRTTTMS?page=19&annotation=RLQHSKRV))










<span style="color:
#A7F3A7;">
second involves varying the way in which the parts of a space are put together</span>
([19](zotero://open-pdf/library/items/KZRTTTMS?page=19&annotation=IIUFSNAL))










### Collapsing Subspaces










<span style="color:
#A7F3A7;">
If (X, A) is a CW pair consisting of a CW complex X and a contractible subcomplex A , then the quotient map X→X/A is a homotopy equivalence</span>
([20](zotero://open-pdf/library/items/KZRTTTMS?page=20&annotation=CD4LBXA4))





> The quotient map shows homotopy equivalence.





<span style="color:
#A7F3A7;">
collapsing the middle edge of the first and third graphs produces the second graph</span>
([20](zotero://open-pdf/library/items/KZRTTTMS?page=20&annotation=T3YKHY3H))





> Instead of deformation retraction idea from the same space, here's a quick way to check,

using the collapsing subspace method.





<span style="color:
#A7F3A7;">
graph</span>
([20](zotero://open-pdf/library/items/KZRTTTMS?page=20&annotation=ET2T74PS))





> 1-dimensional CW complex.





<span style="color:
#A7F3A7;">
until all edges of X are loops, and then each component of X is either an isolated vertex or a wedge sum of circles</span>
([20](zotero://open-pdf/library/items/KZRTTTMS?page=20&annotation=XBQMBIP8))










<span style="color:
#A7F3A7;">
two such graphs, having only one vertex in each component, can be homotopy equivalent if they are not in fact just isomorphic graphs</span>
([20](zotero://open-pdf/library/items/KZRTTTMS?page=20&annotation=YLS8RPXV))





> Isomorphic means exact same graphs, other than vertex naming.

Before collapsing, two graphs can be homotopy equivalent but not isomorphic. But after collapsing they will be homotopy equivalent and isomorphic.


#isomorphic




<span style="color:
#A7F3A7;">
wedge sum ∨  m S1 of m circles is not  homotopy equivalent to ∨  n S1 if m ≠ n</span>
([20](zotero://open-pdf/library/items/KZRTTTMS?page=20&annotation=89IBDADM))










<span style="color:
#A7F3A7;">
∨  m S1 has Euler characteristic 1−m</span>
([20](zotero://open-pdf/library/items/KZRTTTMS?page=20&annotation=6SB4WDXJ))





> Number of even-dim cell is 1 (one point at wedge)

Number of odd-dim cell is m (m 1-spheres aka m circles)





<span style="color:
#A7F3A7;">
it  is a rather nontrivial theorem that the Euler characteristic of a space depends only on its homotopy type</span>
([20](zotero://open-pdf/library/items/KZRTTTMS?page=20&annotation=WI7BLQLI))





> Even though euler characteristic depends on counting the cells in even and odd dimensions of the CW complex, it really does depend on the homotopy only and not on the way we decompose the CW cell.

Although, the proof for showing this is hard.





<span style="color:
#A7F3A7;">
algebraic invariant that works equally well for graphs, and whose rigorous development requires less effort than the Euler characteristic, is the fundamental group of a space</span>
([20](zotero://open-pdf/library/items/KZRTTTMS?page=20&annotation=DUYN5IAR))





> Instead of assigning a number like euler characteristic, we assign an algebraic object called group.

This is going to help us prove the homotopy of spaces trivially.


#fundamental-group





![research-notes/images/hatcherAlgebraicTopology2002/image-20-x344-y21.png](research-notes/images/hatcherAlgebraicTopology2002/image-20-x344-y21.png)






<span style="color:
#A7F3A7;">
S2 as a 2 cell</span>
([20](zotero://open-pdf/library/items/KZRTTTMS?page=20&annotation=AWB6KKGT))





> This is the only thing that's not contractible.





<span style="color:
#A7F3A7;">
X/A and X/B are homotopy equivalent to X</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=6TYKNJT2))





> A and B are subspaces of X and are contractible. 

So X/A and X/B are homotopy equivalent to X.





<span style="color:
#A7F3A7;">
S2/S0 and S1 ∨ S2 are homotopy equivalent</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=66ANG2CH))










<span style="color:
#A7F3A7;">
intersection points are then the 0 cells,</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=N9PRYETS))










<span style="color:
#A7F3A7;">
1 cells are the rest of the longitudinal circle and the boundary circles of the meridional disks</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=F93VMLKP))










<span style="color:
#A7F3A7;">
2 cells are the remaining regions of the torus and the interiors of the meridional disks</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=ZQVIBNMI))











![research-notes/images/hatcherAlgebraicTopology2002/image-21-x75-y468.png](research-notes/images/hatcherAlgebraicTopology2002/image-21-x75-y468.png)






<span style="color:
#A7F3A7;">
X be a CW complex and x0 ∈ X a 0 cell.  Inside the suspension SX we have the line segment {x0}× I , and collapsing this to a point yields a space ΣX homotopy equivalent to SX , called the reduced suspension of X</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=BYNPTL68))







#reduced-suspension




<span style="color:
#A7F3A7;">
S1 ∨ S1</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=DCC4UWCM))





> Two bangles joint at a point.





<span style="color:
#A7F3A7;">
ordinary suspension SX is the union of two spheres intersecting along the arc {x0}× I</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=TPW3HE5X))





> 2 balls connected by a string.





<span style="color:
#A7F3A7;">
reduced suspension ΣX is S2 ∨ S2</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=TKI5MV8X))





> 2 balls joint at a point.





<span style="color:
#A7F3A7;">
Σ(X ∨ Y ) = ΣX ∨ ΣY for arbitrary CW complexes X and Y</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=Q3J93CMD))










<span style="color:
#A7F3A7;">
reduced suspension ΣX is actually the same as the smash product X ∧ S1</span>
([21](zotero://open-pdf/library/items/KZRTTTMS?page=21&annotation=EUY2FMIF))





> Smashing a space X with a circle, is the same as taking a reduced suspension of X.





### Attaching Spaces










<span style="color:
#A7F3A7;">
start with a space X0 and another space X1 that we wish to attach to X0 by identifying the points in a subspace A ⊂ X1 with points of X0</span>
([22](zotero://open-pdf/library/items/KZRTTTMS?page=22&annotation=QQUQDIJ6))





> Attach points on X_0 with points on subspace A in X_1.





<span style="color:
#A7F3A7;">
map f : A→X0 , for then we can form a quotient space of X0 ∐ X1 by identifying each point a ∈ A with its image f (a) ∈ X0</span>
([22](zotero://open-pdf/library/items/KZRTTTMS?page=22&annotation=UIEI6Q2G))










<span style="color:
#A7F3A7;">
X0 ⊔f X1 , the space X0 with X1 attached along A via f</span>
([22](zotero://open-pdf/library/items/KZRTTTMS?page=22&annotation=IMJJQU4X))





> A is subspace of X_1.


#attach




<span style="color:
#A7F3A7;">
mapping cone Cf = Y ⊔f CX where CX is the cone (X × I)/(X × {0}) and we attach this to Y along X × {1} via the identifications (x, 1) ∼ f (x)</span>
([22](zotero://open-pdf/library/items/KZRTTTMS?page=22&annotation=8VBWFNGD))





> Just like mapping cylinder, but collapse the copy of X to a point.

More like suspension on one side and attach on another.


#mapping-cone




<span style="color:
#A7F3A7;">
If (X1, A) is a CW pair and the two attaching maps f , g : A→X0 are homotopic, then  X0 ⊔f X1 ≃ X0 ⊔g X1</span>
([22](zotero://open-pdf/library/items/KZRTTTMS?page=22&annotation=PBVNYRAC))










<span style="color:
#A7F3A7;">
attaching map is homotopic to a constant map, and attaching S2 to S1 via a constant map of A yields S1 ∨ S2</span>
([22](zotero://open-pdf/library/items/KZRTTTMS?page=22&annotation=7D5DQ93Z))










<span style="color:
#A7F3A7;">
obtained from a circle by attaching n 2 spheres along arcs, so the necklace is homotopy equivalent</span>
([22](zotero://open-pdf/library/items/KZRTTTMS?page=22&annotation=XE62JZ95))










<span style="color:
#A7F3A7;">
slide these attaching points around the circle until they all coincide, producing the wedge sum</span>
([22](zotero://open-pdf/library/items/KZRTTTMS?page=22&annotation=QRWHM4WW))










<span style="color:
#A7F3A7;">
X/A ≃ X ∪ CA , the mapping cone of the inclusion A  ֓  X</span>
([23](zotero://open-pdf/library/items/KZRTTTMS?page=23&annotation=M7I8BU6H))





> Instead of collapsing a subspace (LHS), we can attaching to a contractible gadget (RHS).





<span style="color:
#A7F3A7;">
S  n /S  i  ≃S  n  ∨S  i+1  for i &lt; n</span>
([23](zotero://open-pdf/library/items/KZRTTTMS?page=23&annotation=CNX9C3SI))





> Like a S^2 and S^0 will become like sphere and bangle attached at a point

Ultimately, this section summary:

collapsing the S^0 in S^2 Is the same homotopy as attaching the CS^0 in S^2.





### The Homotopy Extension Property









