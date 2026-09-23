---
published: "2026-09-10"
added: "2026-09-17"
modified: "2026-09-23"
authors: Alexander Shida, Kelly Wang, Hojae Choi, Samuel Pellock, Adam Broerman, Saman Salike, William Grubbe, Emily Joyce, Alex Kang, Asim K. Bera, Xinting Li, Arvind Pillai, David Baker
abstract: "The ability of enzymes to sense signals and respond by changing their structure and activity underlies cellular processes from signaling to metabolic control. While there have been recent advances in the de novo design of enzymes and conformationally switching proteins, combining these to achieve allosteric regulation of enzymatic activity in a fully designed system remains an outstanding challenge. Here, we show that denoising diffusion models enable the design of compact de novo enzymes whose activity can be allosterically activated or repressed by designed protein effectors. Our results establish a general route to allosteric control over a wide range of catalytic and other protein functions."
---

# De novo design of allosterically controlled enzymes

[URL](https://www.biorxiv.org/content/10.64898/2026.09.08.750245v1)

## Tags


## Notes

### Abstract










<span style="color:
#FFF176;">
cellular processes from signaling to metabolic control</span>
([1](zotero://open-pdf/library/items/NFN88FKJ?page=1&annotation=L6B6B5XG))










<span style="color:
#FFF176;">
denoising diffusion models enable the design of compact de novo enzymes whose activity can be allosterically activated or repressed by designed protein effectors</span>
([1](zotero://open-pdf/library/items/NFN88FKJ?page=1&annotation=RK5G57IE))










### Intro










<span style="color:
#FFF176;">
Cell signaling cascades 1, metabolic pathways2,3, and motor proteins 4,5 often rely on coupling between enzymatic activity and protein-ligand binding at sites distal to the active site</span>
([1](zotero://open-pdf/library/items/NFN88FKJ?page=1&annotation=XF5MS3BZ))





Distal as in place elsewhere from the active site.

Some native allosteric enzymes:

Cell-signalling cascade: chain reaction that lets a cell detect input and output some action

Metabolic pathways: sequence of chemical reactions where product of one reaction becomes input of another

Motor proteins: tiny motors that use ATP to create motion. Ex: kinesin walking on a microtubule using ATP carrying transport vesicle





<span style="color:
#FFF176;">
sidechain communication networks relay changes from an allosteric binding site to the enzyme active site</span>
([1](zotero://open-pdf/library/items/NFN88FKJ?page=1&annotation=3IFSFBZ7))





A mechanistic model.





<span style="color:
#FFF176;">
allosteric effectors act more broadly to shift the equilibria between well-defined distinct states</span>
([1](zotero://open-pdf/library/items/NFN88FKJ?page=1&annotation=62VT254P))





A chemical equilibrium model.





<span style="color:
#FFF176;">
to design allosteric systems in synthetic biology have generally relied on natural enzymes engineered with topological rearrangements11,12, insertions/fusions13, and split chains 14,15 to couple a protein-ligand binding event to enzymatic activity</span>
([1](zotero://open-pdf/library/items/NFN88FKJ?page=1&annotation=NSZ5HD57))





Before De Novo approach.





<span style="color:
#FFF176;">
such domain rearrangements do not structurally recapitulate the allostery in many naturally evolved enzyme folds, which are often compact single-domain proteins</span>
([2](zotero://open-pdf/library/items/NFN88FKJ?page=2&annotation=KQ9N9AZZ))





Prior approaches can't generally achieve the single-domain-ness,

That is,

simply one structural unit instead of seperate domains for binding, calatysis and regualtion.





<span style="color:
#FFF176;">
de novo design of allosteric enzymes remains an outstanding challenge</span>
([2](zotero://open-pdf/library/items/NFN88FKJ?page=2&annotation=TV9FVKDH))










<span style="color:
#FFF176;">
protein effector.</span>
([2](zotero://open-pdf/library/items/NFN88FKJ?page=2&annotation=NXG7XBXZ))





Effector: molecule that binds a protein and changes its activity.





<span style="color:
#FFF176;">
aimed to more closely emulate natural allosteric control, where a compact structure switches between subtly different conformations that differ in catalytic activity</span>
([2](zotero://open-pdf/library/items/NFN88FKJ?page=2&annotation=FLXB6KRW))










<span style="color:
#FFF176;">
an active state, where the catalytic residues are optimally positioned to mediate the reaction,</span>
([2](zotero://open-pdf/library/items/NFN88FKJ?page=2&annotation=IWSGMI2A))










<span style="color:
#FFF176;">
inactive state, where these residues deviate from this catalytically optimal geometry</span>
([2](zotero://open-pdf/library/items/NFN88FKJ?page=2&annotation=SEU65YWQ))










<span style="color:
#FFF176;">
faster switching between states, as the energy barriers to conversion between very closely related states</span>
([2](zotero://open-pdf/library/items/NFN88FKJ?page=2&annotation=V4WGEUE3))





Small energy barrier in general.






![research-notes/images/shidaNovoDesignAllosterically2026/image-3-x102-y498.png](research-notes/images/shidaNovoDesignAllosterically2026/image-3-x102-y498.png)

Allosteric Activator.






![research-notes/images/shidaNovoDesignAllosterically2026/image-3-x101-y130.png](research-notes/images/shidaNovoDesignAllosterically2026/image-3-x101-y130.png)







![research-notes/images/shidaNovoDesignAllosterically2026/image-3-x336-y498.png](research-notes/images/shidaNovoDesignAllosterically2026/image-3-x336-y498.png)

Allosteric Inhibitor.





<span style="color:
#FFF176;">
partially diffused (downward arrow) by noising and denoising a portion of the protein (colored in the middle panel at the left, the gray portion is kept fixed)</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=Q2IDNDWJ))










<span style="color:
#FFF176;">
RFdiffusion is then used to generate binders to either the active state (top) in the allosteric activator case, or the inactive state (allosteric inhibitor case)</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=UDR5HBWN))










<span style="color:
#FFF176;">
Sequence design using tiedMPNN is used to favor the inactive state in the absence of effector in the activator case, and the active state in the absence of effector in the inhibitor case</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=TJTI5QUX))







#tiedmpnn




### Design approach










<span style="color:
#FFF176;">
Starting from an active designed enzyme (Fig 1A, “Active”), we generate an alternative inactive state by partial RFdiffusion (Fig 1B)</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=CNAWDFZX))










