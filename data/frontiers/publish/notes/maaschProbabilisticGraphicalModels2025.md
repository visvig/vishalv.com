---
title: "Probabilistic Graphical Models: A Concise Tutorial"
date: "2026-07-21"
tags:
  - "graph"
draft: false
summary: "Probabilistic graphical modeling is a branch of machine learning that uses probability distributions to describe the world, make predictions, and support decision-making under uncertainty. Underlying this modeling framework is an elegant body of theory that bridges two..."
---
{/* Generated from data/frontiers/research-notes. Edit the source file, then run `yarn publish:research-notes`. */}

[URL](http://arxiv.org/abs/2507.17116)

## Notes

### 2.3 Basic Graph Theory










> Graph theory is the branch of mathematics that is broadly concerned with (1) the properties of graphical objects, which model the pairwise relationships among entities in a system; (2) the operations and transformations that can be performed on these objects; and (3) the design and analysis of algorithms that act on graph objects
([36](zotero://open-pdf/library/items/UZP5BEK4?page=36&annotation=LYS7F6BR))










> Definition 2.33 (Graph). Let G = (V, E) be a graph, where V = \{Vi\}in=1 is the node set (also called vertices) and E = \{Ei\}im=1 is the edge set
([36](zotero://open-pdf/library/items/UZP5BEK4?page=36&annotation=Y622FCCM))











> mixed graph classes that contain both directed and undirected edge types. Mixed graphs can even contain bidirected edges and edges with alternative endpoints denoting uncertain directionality
([36](zotero://open-pdf/library/items/UZP5BEK4?page=36&annotation=YUYGJQ76))










> mixed graphs are famously useful for expressing uncertainty and unmeasured variables in causal graphical modeling
([36](zotero://open-pdf/library/items/UZP5BEK4?page=36&annotation=9KHB9EWC))










> Nodes that are connected by an edge are said to be adjacent or neighbors
([37](zotero://open-pdf/library/items/UZP5BEK4?page=37&annotation=T6EZVYX7))










> degree of a node is the number of neighbors that it has
([37](zotero://open-pdf/library/items/UZP5BEK4?page=37&annotation=LQCGS5UA))










> n-degree of a node denotes the total number of neighbors with edges pointing into it
([37](zotero://open-pdf/library/items/UZP5BEK4?page=37&annotation=IUMGZKTS))










> ut-degree is equal to the number of edges pointing out of a node
([37](zotero://open-pdf/library/items/UZP5BEK4?page=37&annotation=SWEFVAEG))










> sequence of linked nodes can form a path: Vi − Vi+1 − · · · − Vi+n in the undirected case
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=QKJ9Z88W))





> notion abuse - should be i+l where l is the length of the path; as n is reserved for total number of vertices of the graph





> Vi → Vi+1 → · · · → Vi+n in the directed case
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=896G8QQP))










> Directed and undirected cycles (or, often, their absence) play important roles throughout graph theory and probabilistic graphical modeling
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=IAGDL2SS))










> U has a directed edge into V , we say that U is the parent and V is the child
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=UKKN3G7K))










> third variable W is also a parent of V , we say that U and W are spouses
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=B7XL533M))










> W is instead a child of V , we say that U is the ancestor of descendant W
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=TMRR95LG))










> node has no parents, we say that it is a root.
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=ZFDHX8Q6))










> node has no children, we say that it is a leaf
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=AQZP7NNW))










> notation pa(·), ch(·), an(·), de(·), sp(·), ne(·) to refer to the parent, child, ancestor, descendant, spouse, and neighbor sets of a given node
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=2VCZBTLZ))










> ully connected subgraphs called cliques
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=C7KFXBHN))










> clique is a subset C ⊆ V where every pair of nodes Vi, Vj ∈ C are neighbors
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=HHXCYQJW))










> maximal clique is a clique to which no additional nodes in V can be added
([38](zotero://open-pdf/library/items/UZP5BEK4?page=38&annotation=YUEBIJAV))










> topological ordering of the nodes in G is a linear ordering such that for every edge Vi → Vj ∈ E, Vi precedes Vj in the ordering
([39](zotero://open-pdf/library/items/UZP5BEK4?page=39&annotation=Y7E7L7YR))










> remove directionality by deleting the arrowheads from each edge. This yields the undirected skeleton of the directed graph
([39](zotero://open-pdf/library/items/UZP5BEK4?page=39&annotation=LFH75YJR))










> ome use cases require an additional manipulation: moralization
([40](zotero://open-pdf/library/items/UZP5BEK4?page=40&annotation=9VPDGAD4))










> moral graph corresponding to a directed acyclic graph G is an undirected graph with an edge for every adjacency in G and for every pair of non-adjacent spouses
([40](zotero://open-pdf/library/items/UZP5BEK4?page=40&annotation=LG5CFFPW))










> Moralization ensures that each child node and all of its parents form a single clique in the resulting undirected graph
([40](zotero://open-pdf/library/items/UZP5BEK4?page=40&annotation=NCI82FJ4))










> transform the undirected skeleton of G to a chordal graph (or triangulated graph) by adding edges
([40](zotero://open-pdf/library/items/UZP5BEK4?page=40&annotation=IGZGI442))










> undirected graph is chordal if any cycle of length greater than three has a chord (i.e., an edge connecting any two nonconsecutive nodes)
([41](zotero://open-pdf/library/items/UZP5BEK4?page=41&annotation=N6DGB6KK))










> moralization and chordalization are important steps in the junction tree algorithm
([41](zotero://open-pdf/library/items/UZP5BEK4?page=41&annotation=DDL7Z2UV))










> undirected tree is a connected, undirected graph with no cycles
([41](zotero://open-pdf/library/items/UZP5BEK4?page=41&annotation=VDEECMQJ))










> two nodes in a tree are connected by exactly one path
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=IWJHD664))










> tree with n nodes has n − 1 edges
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=J56K6MX8))










> graph is a tree if and only if it is minimally connected
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=VHLMWZP2))










> tree-structured graphs with directed edges: directed trees and polytrees
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=IJDWF2TU))










> directed tree if it is connected and if each node has at most one parent
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=HGHUNVGM))










> polytree is a DAG with no cycles in its undirected skeleton
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=D9F895AH))










> treewidth, which is a number that characterizes how far a graph is from being a tree
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=FK245S7N))










> graph has treewidth k if it can be broken into overlapping groups of at most k + 1 vertices (called bags), arranged in a tree-like structure
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=ZZY8DH8J))





> "overlapping": edge between bags





> (a) every graph vertex is in at least one bag
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=H7SXQ2U9))





> vertexes can repeat across bags





> (b) for every edge, both endpoints appear together
([42](zotero://open-pdf/library/items/UZP5BEK4?page=42&annotation=KXVA5IP2))





> every edge is captured collectively by all bags





> (c) for each vertex, the bags containing it form a connected subtree of the tree-like structure over bags
([43](zotero://open-pdf/library/items/UZP5BEK4?page=43&annotation=XWAC4KTF))





> when a vertex is repeating in 2 bags, they form an edge in the tree of bags





> graph G = (V, E) is bipartite if V can be partitioned into two disjoint sets V1, V2 (i.e., partite sets), such that every edge in E has one endpoint in V1 and one endpoint in V2
([43](zotero://open-pdf/library/items/UZP5BEK4?page=43&annotation=6FFWBVJW))










> A graph containing at least two nodes is bipartite if and only if it contains no odd cycles
([43](zotero://open-pdf/library/items/UZP5BEK4?page=43&annotation=YULSXQ6F))





> no odd cycle length. even cycle lengths, or no cycles at all.





> inference is the process of drawing conclusions from available evidence
([71](zotero://open-pdf/library/items/UZP5BEK4?page=71&annotation=GABMJ9DR))










> “reasoning with beliefs”
([71](zotero://open-pdf/library/items/UZP5BEK4?page=71&annotation=8VC4GV7F))
