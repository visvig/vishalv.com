---
published: "2025-07-23"
added: "2025-11-29"
modified: "2026-07-21"
authors: Jacqueline Maasch, Willie Neiswanger, Stefano Ermon, Volodymyr Kuleshov
abstract: "Probabilistic graphical modeling is a branch of machine learning that uses probability distributions to describe the world, make predictions, and support decision-making under uncertainty. Underlying this modeling framework is an elegant body of theory that bridges two mathematical traditions: probability and graph theory. This framework provides compact yet expressive representations of joint probability distributions, yielding powerful generative models for probabilistic reasoning. This tutorial provides a concise introduction to the formalisms, methods, and applications of this modeling framework. After a review of basic probability and graph theory, we explore three dominant themes: (1) the representation of multivariate distributions in the intuitive visual language of graphs, (2) algorithms for learning model parameters and graphical structures from data, and (3) algorithms for inference, both exact and approximate."
---

# Probabilistic Graphical Models: A Concise Tutorial

[URL](http://arxiv.org/abs/2507.17116)

## Tags


## Notes

### 2.3 Basic Graph Theory










<span style="color:
#A7F3A7;">
Graph theory is the branch of mathematics that is broadly concerned with (1) the properties of graphical objects, which model the pairwise relationships among entities in a system; (2) the operations and transformations that can be performed on these objects; and (3) the design and analysis of algorithms that act on graph objects</span>
([36](zotero://open-pdf/library/items/UZP5BEK4?page=36&annotation=LYS7F6BR))










<span style="color:
#A7F3A7;">
Definition 2.33 (Graph). Let G = (V, E) be a graph, where V = {Vi}in=1 is the node set (also called vertices) and E = {Ei}im=1 is the edge set</span>
([36](zotero://open-pdf/library/items/UZP5BEK4?page=36&annotation=Y622FCCM))







#graph




<span style="color:
#A7F3A7;">
mixed graph classes that contain both directed and undirected edge types. Mixed graphs can even contain bidirected edges and edges with alternative endpoints denoting uncertain directionality</span>
([36](zotero://open-pdf/library/items/UZP5BEK4?page=36&annotation=YUYGJQ76))










<span style="color:
#A7F3A7;">
mixed graphs are famously useful for expressing uncertainty and unmeasured variables in causal graphical modeling</span>
([36](zotero://open-pdf/library/items/UZP5BEK4?page=36&annotation=9KHB9EWC))










<span style="color:
#A7F3A7;">
Nodes that are connected by an edge are said to be adjacent or neighbors</span>
([37](zotero://open-pdf/library/items/UZP5BEK4?page=37&annotation=T6EZVYX7))










<span style="color:
#A7F3A7;">
degree of a node is the number of neighbors that it has</span>
([37](zotero://open-pdf/library/items/UZP5BEK4?page=37&annotation=LQCGS5UA))










<span style="color:
#A7F3A7;">
n-degree of a node denotes the total number of neighbors with edges pointing into it</span>
([37](zotero://open-pdf/library/items/UZP5BEK4?page=37&annotation=IUMGZKTS))










<span style="color:
#A7F3A7;">
ut-degree is equal to the number of edges pointing out of a node</span>
([37](zotero://open-pdf/library/items/UZP5BEK4?page=37&annotation=SWEFVAEG))










<span style="color:
#A7F3A7;">
sequence of linked nodes can form a path: Vi − Vi+1 − · · · − Vi+n in the undirected case</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=QKJ9Z88W))





> notion abuse - should be i+l where l is the length of the path; as n is reserved for total number of vertices of the graph





<span style="color:
#A7F3A7;">
Vi → Vi+1 → · · · → Vi+n in the directed case</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=896G8QQP))










<span style="color:
#A7F3A7;">
Directed and undirected cycles (or, often, their absence) play important roles throughout graph theory and probabilistic graphical modeling</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=IAGDL2SS))










<span style="color:
#A7F3A7;">
U has a directed edge into V , we say that U is the parent and V is the child</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=UKKN3G7K))










<span style="color:
#A7F3A7;">
third variable W is also a parent of V , we say that U and W are spouses</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=B7XL533M))










<span style="color:
#A7F3A7;">
W is instead a child of V , we say that U is the ancestor of descendant W</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=TMRR95LG))










<span style="color:
#A7F3A7;">
node has no parents, we say that it is a root.</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=ZFDHX8Q6))










<span style="color:
#A7F3A7;">
node has no children, we say that it is a leaf</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=AQZP7NNW))










<span style="color:
#A7F3A7;">
notation pa(·), ch(·), an(·), de(·), sp(·), ne(·) to refer to the parent, child, ancestor, descendant, spouse, and neighbor sets of a given node</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=2VCZBTLZ))










<span style="color:
#A7F3A7;">
ully connected subgraphs called cliques</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=C7KFXBHN))










<span style="color:
#A7F3A7;">
clique is a subset C ⊆ V where every pair of nodes Vi, Vj ∈ C are neighbors</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=HHXCYQJW))










<span style="color:
#A7F3A7;">
maximal clique is a clique to which no additional nodes in V can be added</span>
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=YUEBIJAV))










<span style="color:
#A7F3A7;">
topological ordering of the nodes in G is a linear ordering such that for every edge Vi → Vj ∈ E, Vi precedes Vj in the ordering</span>
([39](zotero://open-pdf/library/items/UZP5BEK4?page=39&annotation=Y7E7L7YR))










<span style="color:
#A7F3A7;">
remove directionality by deleting the arrowheads from each edge. This yields the undirected skeleton of the directed graph</span>
([39](zotero://open-pdf/library/items/UZP5BEK4?page=39&annotation=LFH75YJR))










<span style="color:
#A7F3A7;">
ome use cases require an additional manipulation: moralization</span>
([40](zotero://open-pdf/library/items/UZP5BEK4?page=40&annotation=9VPDGAD4))










<span style="color:
#A7F3A7;">
moral graph corresponding to a directed acyclic graph G is an undirected graph with an edge for every adjacency in G and for every pair of non-adjacent spouses</span>
([40](zotero://open-pdf/library/items/UZP5BEK4?page=40&annotation=LG5CFFPW))










<span style="color:
#A7F3A7;">
Moralization ensures that each child node and all of its parents form a single clique in the resulting undirected graph</span>
([40](zotero://open-pdf/library/items/UZP5BEK4?page=40&annotation=NCI82FJ4))










<span style="color:
#A7F3A7;">
transform the undirected skeleton of G to a chordal graph (or triangulated graph) by adding edges</span>
([40](zotero://open-pdf/library/items/UZP5BEK4?page=40&annotation=IGZGI442))










<span style="color:
#A7F3A7;">
undirected graph is chordal if any cycle of length greater than three has a chord (i.e., an edge connecting any two nonconsecutive nodes)</span>
([41](zotero://open-pdf/library/items/UZP5BEK4?page=41&annotation=N6DGB6KK))










<span style="color:
#A7F3A7;">
moralization and chordalization are important steps in the junction tree algorithm</span>
([41](zotero://open-pdf/library/items/UZP5BEK4?page=41&annotation=DDL7Z2UV))










<span style="color:
#A7F3A7;">
undirected tree is a connected, undirected graph with no cycles</span>
([41](zotero://open-pdf/library/items/UZP5BEK4?page=41&annotation=VDEECMQJ))










<span style="color:
#A7F3A7;">
two nodes in a tree are connected by exactly one path</span>
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=IWJHD664))










<span style="color:
#A7F3A7;">
tree with n nodes has n − 1 edges</span>
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=J56K6MX8))










<span style="color:
#A7F3A7;">
graph is a tree if and only if it is minimally connected</span>
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=VHLMWZP2))










<span style="color:
#A7F3A7;">
tree-structured graphs with directed edges: directed trees and polytrees</span>
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=IJDWF2TU))










<span style="color:
#A7F3A7;">
directed tree if it is connected and if each node has at most one parent</span>
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=HGHUNVGM))










<span style="color:
#A7F3A7;">
polytree is a DAG with no cycles in its undirected skeleton</span>
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=D9F895AH))










<span style="color:
#A7F3A7;">
treewidth, which is a number that characterizes how far a graph is from being a tree</span>
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=FK245S7N))










<span style="color:
#A7F3A7;">
graph has treewidth k if it can be broken into overlapping groups of at most k + 1 vertices (called bags), arranged in a tree-like structure</span>
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=ZZY8DH8J))





> "overlapping": edge between bags





<span style="color:
#A7F3A7;">
(a) every graph vertex is in at least one bag</span>
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=H7SXQ2U9))





> vertexes can repeat across bags





<span style="color:
#A7F3A7;">
(b) for every edge, both endpoints appear together</span>
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=KXVA5IP2))





> every edge is captured collectively by all bags





<span style="color:
#A7F3A7;">
(c) for each vertex, the bags containing it form a connected subtree of the tree-like structure over bags</span>
([43](zotero://open-pdf/library/items/UZP5BEK4?page=43&annotation=XWAC4KTF))





> when a vertex is repeating in 2 bags, they form an edge in the tree of bags





<span style="color:
#A7F3A7;">
graph G = (V, E) is bipartite if V can be partitioned into two disjoint sets V1, V2 (i.e., partite sets), such that every edge in E has one endpoint in V1 and one endpoint in V2</span>
([43](zotero://open-pdf/library/items/UZP5BEK4?page=43&annotation=6FFWBVJW))










<span style="color:
#A7F3A7;">
A graph containing at least two nodes is bipartite if and only if it contains no odd cycles</span>
([43](zotero://open-pdf/library/items/UZP5BEK4?page=43&annotation=YULSXQ6F))





> no odd cycle length. even cycle lengths, or no cycles at all.





<span style="color:
#A7F3A7;">
inference is the process of drawing conclusions from available evidence</span>
([71](zotero://open-pdf/library/items/UZP5BEK4?page=71&annotation=GABMJ9DR))










<span style="color:
#A7F3A7;">
“reasoning with beliefs”</span>
([71](zotero://open-pdf/library/items/UZP5BEK4?page=71&annotation=8VC4GV7F))









