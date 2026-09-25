---
published: "2026-09-10"
added: "2026-09-17"
modified: "2026-09-25"
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

Effector to bind preferentially to active state.






![research-notes/images/shidaNovoDesignAllosterically2026/image-3-x101-y130.png](research-notes/images/shidaNovoDesignAllosterically2026/image-3-x101-y130.png)

Domain 2 (Ser-Thr) is partially diffused.

Alpha-C is displaced by 1 Angstorm






![research-notes/images/shidaNovoDesignAllosterically2026/image-3-x336-y498.png](research-notes/images/shidaNovoDesignAllosterically2026/image-3-x336-y498.png)

Allosteric Inhibitor.

Effector to bind preferentially to inactive state.





<span style="color:
#FFF176;">
partially diffused (downward arrow) by noising and denoising a portion of the protein (colored in the middle panel at the left, the gray portion is kept fixed)</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=Q2IDNDWJ))





Partial RFdiffusion: To generate inactive state.





<span style="color:
#FFF176;">
RFdiffusion is then used to generate binders to either the active state (top) in the allosteric activator case, or the inactive state (allosteric inhibitor case)</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=UDR5HBWN))





RFdiffusion: To generate binders for active and inactive states.





<span style="color:
#FFF176;">
Sequence design using tiedMPNN is used to favor the inactive state in the absence of effector in the activator case, and the active state in the absence of effector in the inhibitor case</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=TJTI5QUX))





For allosteric activator:

G(E_I) < G(E_A)


#tied-proteinmpnn




### Design approach










<span style="color:
#FFF176;">
Starting from an active designed enzyme (Fig 1A, “Active”), we generate an alternative inactive state by partial RFdiffusion (Fig 1B)</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=CNAWDFZX))





Typo: (Fig 1B, "Active") and (Fig 1B, "Inactive")





<span style="color:
#FFF176;">
1-3Å of random Gaussian noise</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=R5MAW4KA))





Noising.





<span style="color:
#FFF176;">
generate alternative conformations</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=7J9CMFF7))





Denoising.





<span style="color:
#FFF176;">
partial diffusion has had success in identifying subtly modified backbones with increased binding affinity</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=JW6HVPDC))





Emperical observation: Very small changes in confirmation has larger impact on binding energy.

Hence, only a part of the site is noised and denoised, and that is enough.





<span style="color:
#FFF176;">
design allosteric effectors that bind to either the active or inactive state and modulates the energy landscape</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=YTELJ7Q3))










<span style="color:
#FFF176;">
allosteric activation systems in which the unbound enzyme has lower energy in the inactive state (Fig 1A, top left), and effector binding favors the active state</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=9VP86L85))










<span style="color:
#FFF176;">
allosteric inactivation systems (Fig 1A, top right) where effector binding conversely favors the inactive state</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=ZWYLVPE9))










<span style="color:
#FFF176;">
effector-dependent activator design, we used RFDiffusion to generate binders to the active enzyme state</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=V6K2BYS6))










<span style="color:
#FFF176;">
effector-dependent inactivator designs, we used RFDiffusion to generate effectors to inactive enzyme states</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=URCRHN6R))










<span style="color:
#FFF176;">
tied ProteinMPNN to generate sequences compatible with the backbones of the enzyme–effector complex as well as the isolated enzyme and effector states</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=KXAJHACE))










<span style="color:
#FFF176;">
de novo serine hydrolase Win1 as a model system as the catalytic mechanism and active-site geometry are well understood</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=3UABMFE4))





Win1 is used as a model system only. 

The sequence is shared between the generated inactive and active states.

So, the sequence isn't same as Win1.


#win1




<span style="color:
#FFF176;">
vast majority of partially diffused conformations are likely to have compromised active sites with reduced or ablated catalytic activity</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=Y2JLA5P3))










<span style="color:
#FFF176;">
divided the structure into two separate domains: one containing the His–Asp (catalytic dyad) and the other the catalytic Ser and oxyanion Thr</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=BSAQNHQQ))





Partially diffuse the Ser-Thr domain.





<span style="color:
#FFF176;">
filtered for Cα displacements greater than 1 Å from the starting active-state structure</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=8EUVPM38))










<span style="color:
#FFF176;">
Designs predicted by AlphaFold2 to adopt the target active and inactive conformations in the presence and absence of effector, respectively, were selected for experimental characterization</span>
([4](zotero://open-pdf/library/items/NFN88FKJ?page=4&annotation=4QCXJZ94))





AF2 should predict E_AP_A complex to show active state and E_I is the enzyme alone which shows inactive state.





### Methods










### Computational design of allosteric enzymes










### Partial RFDiffusion for inactive state generation










<span style="color:
#FFF176;">
de novo serine hydrolase enzymes from Lauko et al. as our starting active enzyme backbone</span>
([15](zotero://open-pdf/library/items/NFN88FKJ?page=15&annotation=5NVA3KP4))










### RFDiffusion for effector generation










<span style="color:
#FFF176;">
The resultant effectors were designed to be either allosteric activators or inhibitors depending on whether they were generated in the context of the active enzyme state or inactive enzyme state, respectively</span>
([15](zotero://open-pdf/library/items/NFN88FKJ?page=15&annotation=JWQLA6B9))










