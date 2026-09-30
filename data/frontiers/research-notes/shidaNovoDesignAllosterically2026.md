---
published: "2026-09-10"
added: "2026-09-17"
modified: "2026-09-30"
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

But not specified here.


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





### Characterization of allosteric activators










<span style="color:
#FFF176;">
generated inactive win1 conformations by partial diffusion in the absence of substrate</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=FIK6LUCV))










<span style="color:
#FFF176;">
designed small proteins that bind to and stabilize the active state of win1</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=VMYE4B86))










<span style="color:
#FFF176;">
Sixty-one such designed enzyme-effector pairs that passed AF2 filters were selected for experimental characterization</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=8Z6K22JS))










<span style="color:
#FFF176;">
expressed in E. coli</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=FR9A46KL))





Both enzyme and effector separately.





<span style="color:
#FFF176;">
activity was measured in cell lysates using the fluorogenic substrate 4-methylumbelliferone acetate (4Mu-Ac)</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=U3PPPMP2))





Experimental Assay:

Cell lysate: Make living cells produce the design protein, then break the cells open.

4Mu-Ac + H2O -> 4Mu (fluorescent)+ Ac

Catalyst is serine hydrolase.


#4mu-ac




<span style="color:
#FFF176;">
identified two effector-enzyme pairs, Janus1 and Janus2</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=TNQGANMC))





Both of their active state geometries are similar.


#janus1
#janus2




<span style="color:
#FFF176;">
addition of effector cell lysate substantially increased formation of the fluorescent product, 4Mu</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=5FBJ55V5))










<span style="color:
#FFF176;">
both pairs, there is substantial predicted conformational remodeling of the designed enzyme in the inactive and effector-bound complexes with Cα RMSDs of 8.3 Å and 3.80 Å for Janus1 and Janus2 respectively</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=95XUV2VC))










<span style="color:
#FFF176;">
nactive state, the catalytic residues Ser142, His17, Asp37, and Thr99 have a disrupted geometry incompatible with efficient catalysis</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=6EJEYDFQ))










<span style="color:
#FFF176;">
effector binding, both designs transition to an active-like catalytic arrangement</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=YRBFFTRX))










<span style="color:
#FFF176;">
mutational and kinetic analyses of the purified effectors and enzymes</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=MQ94644P))





Mutational Analysis: change / knockout specific residues and see change in catalytic activity

Kinetic Analysis: Measure reaction rates quantitatively





<span style="color:
#FFF176;">
Active site residue knockouts had activity reduced to background levels or below the detection limit (Supplementary Figure 1), supporting catalysis through the expected serine/cysteine hydrolase machinery, as for the parent enzyme</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=5NLR3IZH))





Mutational Analysis.





<span style="color:
#FFF176;">
To characterize the kinetics in more detail, steady-state kinetic measurements were performed in the absence and presence of effector at a 1:2 enzyme:effector ratio</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=WRVDR4JU))





Kinetic Analysis.





<span style="color:
#FFF176;">
Janus1, effector binding increased the turnover rate from kcat = 0.0033 ± 0.00010 s−1 to 0.017 ± 0.0003 s−1, an approximately 5-fold increase</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=2XBS8UGW))










<span style="color:
#FFF176;">
Janus2, kcat increased from 0.00050 ± 0.00005 s−1 in the absence of effector to 0.0013 ± 0.00003 s−1 in the presence of effector, corresponding to a 2.6-fold enhancement</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=MA39VQXF))










<span style="color:
#FFF176;">
Effector binding also altered substrate affinity in Janus1: Km increased 4.3-fold, from 8.1 ± 1.0 μM in the apo state to 35 ± 2 μM in complex with Janus1_b</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=GZCRW6E9))





Increased K_m results in worse substrate affinity.

Low K_m implies the enzyme works well at low [S]





<span style="color:
#FFF176;">
In contrast, the Km of Janus2 was unchanged within error (4 ± 2 μM apo vs. 2.5 ± 0.3 μM bound</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=9I7SLTLU))





Reduced K_m but insignificant.





<span style="color:
#FFF176;">
2x molar ratio of effector was added to an ongoing enzymatic reaction</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=DSYAX63L))










<span style="color:
#FFF176;">
both Janus1 and Janus2, addition of effector increased catalytic activity to the levels observed in the pre-incubation experiment</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=WL3YNVI2))










<span style="color:
#FFF176;">
effector on-rate is fast relative to the mixing and measurement dead time (~21 seconds</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=9UP7IDDU))










<span style="color:
#FFF176;">
To test the specificity of each effector for its cognate enzyme, we incubated Janus1 and Janus2 with Janus2_b and Janus1_b, respectively. Both enzymes demonstrate specificity to their respective effector, with no rate enhancement when incubated with the non-cognate effector (Supplementary Figure 2)</span>
([5](zotero://open-pdf/library/items/NFN88FKJ?page=5&annotation=E3A8AQYZ))











![research-notes/images/shidaNovoDesignAllosterically2026/image-7-x70-y358.png](research-notes/images/shidaNovoDesignAllosterically2026/image-7-x70-y358.png)

Janus1, Active state.






![research-notes/images/shidaNovoDesignAllosterically2026/image-7-x71-y236.png](research-notes/images/shidaNovoDesignAllosterically2026/image-7-x71-y236.png)

Janus2, Inactive state.






![research-notes/images/shidaNovoDesignAllosterically2026/image-7-x71-y112.png](research-notes/images/shidaNovoDesignAllosterically2026/image-7-x71-y112.png)

Janus2, Active state.






![research-notes/images/shidaNovoDesignAllosterically2026/image-7-x369-y359.png](research-notes/images/shidaNovoDesignAllosterically2026/image-7-x369-y359.png)

Relative Fluorescence Units.

Slope of this graph is a proxy for enzyme reaction rate.





<span style="color:
#FFF176;">
fluorescent group, R1 in blue, from the leaving group R2 (acetate or phenylacetate)</span>
([7](zotero://open-pdf/library/items/NFN88FKJ?page=7&annotation=CJVR7BSH))











![research-notes/images/shidaNovoDesignAllosterically2026/image-7-x71-y624.png](research-notes/images/shidaNovoDesignAllosterically2026/image-7-x71-y624.png)







![research-notes/images/shidaNovoDesignAllosterically2026/image-7-x71-y487.png](research-notes/images/shidaNovoDesignAllosterically2026/image-7-x71-y487.png)

Janus1, Inactive state.






![research-notes/images/shidaNovoDesignAllosterically2026/image-7-x371-y486.png](research-notes/images/shidaNovoDesignAllosterically2026/image-7-x371-y486.png)

Michaelis-Menten Kinetics.





<span style="color:
#FFF176;">
Michaelis-Menten kinetics of Janus1 comparing unbound enzyme and enzyme with saturating effector</span>
([8](zotero://open-pdf/library/items/NFN88FKJ?page=8&annotation=33RKDX49))







#michaelis-menton




<span style="color:
#FFF176;">
Addition of saturating Janus1_b effector rapidly accelerates catalysis</span>
([8](zotero://open-pdf/library/items/NFN88FKJ?page=8&annotation=NS2FJGZJ))





RFU: Relative Fluorescence Units.





### Characterization of allosteric inhibitors










<span style="color:
#FFF176;">
designs off of designed serine hydrolases, win1_b1 16 and win1_b4 (Supplementary Figure 1), that hydrolyze the larger substrate 4-methylumbelliferone phenylacetate (4Mu-PhAc, Figure 2A)</span>
([8](zotero://open-pdf/library/items/NFN88FKJ?page=8&annotation=6JVFX4TY))





The system changes from allosteric activator case to allosteric inhibitor case.





<span style="color:
#FFF176;">
coupling in molecular machines like Hsp70 24, in which ATP binding switches Hsp70 into a protein-binding competent state, we reasoned that the bulkier, more hydrophobic leaving group of 4Mu-PhAc would provide more binding energy to drive conformational change</span>
([8](zotero://open-pdf/library/items/NFN88FKJ?page=8&annotation=TI4WLG3K))





4Mu-PhAc is bulkier than 4Mu-Ac.

del G_bind (S, E) is lower:

when S = 4Mu-PhAc 

than when S = 4Mu-Ac.


#4mu-phac




<span style="color:
#FFF176;">
sought to improve the baseline catalytic activity of the designed enzymes in the unbound form</span>
([8](zotero://open-pdf/library/items/NFN88FKJ?page=8&annotation=IHRFBZ77))










<span style="color:
#FFF176;">
found that a serine-to-cysteine substitution led to dramatic increases in catalytic efficiency across a variety of designed serine hydrolases</span>
([8](zotero://open-pdf/library/items/NFN88FKJ?page=8&annotation=LH5X5D4W))





Enzyme changed.





<span style="color:
#FFF176;">
experimentally characterized 24 designed allosteric inhibitor-enzyme pairs using lysate screening with fluorescent 4Mu-PhAc in the absence and presence of the effector</span>
([8](zotero://open-pdf/library/items/NFN88FKJ?page=8&annotation=LKDF2NTN))










<span style="color:
#FFF176;">
Of these, eight designs retained catalytic activity, and one, Janus3, had a clear reduction of enzymatic activity for both cysteine and serine variants upon addition of effector</span>
([8](zotero://open-pdf/library/items/NFN88FKJ?page=8&annotation=NPI4I43R))











![research-notes/images/shidaNovoDesignAllosterically2026/image-9-x71-y428.png](research-notes/images/shidaNovoDesignAllosterically2026/image-9-x71-y428.png)

Allosteric Inhibitor.






![research-notes/images/shidaNovoDesignAllosterically2026/image-10-x58-y471.png](research-notes/images/shidaNovoDesignAllosterically2026/image-10-x58-y471.png)

k_cat: Catalytic Rate Constant

K_M: Michaelis Constant

k_cat/K_M: Catalytic Efficiency (Specificity Constant)





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










