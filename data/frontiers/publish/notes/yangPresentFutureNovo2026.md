---
title: "The past, present and future of de novo protein design"
date: "2026-09-17"
tags:
  - "RFdiffusion"
  - "anfinsens-hypothesis"
  - "PDB"
  - "activation-maximization"
  - "Chroma"
  - "escherichia-coli"
  - "masked-language-models"
  - "3D-crystal"
  - "1D-fibre"
  - "2D-lattice"
  - "9OP9"
  - "NCAA"
  - "beta-barrel"
  - "Top7"
  - "TIM-barrel"
  - "protein-language-models"
  - "rosetta"
  - "nanopore"
  - "macrocycle"
  - "oligoamide"
  - "BindCraft"
  - "ProGen"
  - "PXDesign"
  - "affinity"
  - "TNF"
  - "scFv"
  - "VHH"
  - "CDR"
  - "HELM-GPT"
  - "RFpeptides"
  - "IDR"
  - "PepPrCLIP"
  - "affinity-handle"
  - "beta-catenin"
  - "SS18-SSX1"
  - "beta-amyloid"
  - "tau-protein"
  - "glycoproteins"
  - "oligomerization"
  - "FGF"
  - "endocytosis"
  - "transcytosis"
  - "EndoTags"
  - "digoxigenin"
  - "methotrexate"
  - "CID"
  - "kemp-elimination"
  - "retro-aldol"
  - "luciferase"
  - "PLACER"
  - "serine"
  - "CRISPR-Cas"
  - "zinc-fingers"
draft: false
summary: "Research notes on The past, present and future of de novo protein design."
---
{/* Generated from data/frontiers/research-notes. Edit the source file, then run `yarn publish:research-notes`. */}

[URL](https://www.nature.com/articles/s41586-026-10328-7)

## Notes

> shift in protein engineering from random selection to intentional computational design methods
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=KXYPZTCT))










> long-standing challenges of designing new protein structures, assemblies and protein binders are close to being solved
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=W44PBPKE))










> what to design, and open-source design methodology such as RFdiffusion and ProteinMPNN together with protein structure prediction tools
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=T37K3F6I))







> de novo design of small-molecule target binders, enzymes and multistate protein systems
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=2JQ9J9JQ))










> design of catalysts for reactions with high energy barriers
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=CYTIQ8GC))










> design of switches and nanomachines that integrate binding, conformational change and catalysis
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=36XBQ26D))










> sophisticated functionality of natural proteins evolved over hundreds of millions of years of natural selection to solve the problems that were critical during biological evolution
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=HFAARKK5))










> functionality and versatility of the proteins in nature suggests that new proteins could provide solutions to many of these problems
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=WUB7WQ8P))










> de novo protein design: building new proteins with new functions from the ground up rather than by repurposing existing native proteins
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=JXXS7AZW))










> first, for the general reader, to provide an overview of the progress in this area
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=MUKH2VQ8))










> second, for scientists outside of the field, to encourage the application of protein design methods to their research problems
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=QK6YEXVP))










> third, for methods developers, to encourage focus on unsolved rather than largely solved design problems
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=PE8QKR4J))










### Protein design challenges










> major classes of challenges that de novo protein design
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=WC62AB8H))










> design of monomeric protein folds and multiprotein assemblies
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=UBWBG6DJ))










> proteins that bind to other proteins
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=MPU23XIV))










> small-molecule binders, sensors and enzyme catalysts
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=56VDJBUK))










> multistate functional biomolecular systems
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=E7E5UX73))










### Protein design methodology










> Anfinsen’s hypothesis that the folded state of a protein is at the global free-energy minimum for its sequence
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=3LYN37CD))











> three problem classes: backbone sampling, sequence design and energy calculation
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=WR6S7RFU))










> energy calculation challenge, atomic force fields were developed
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=59D4S2GG))










> the van der Waals, hydrogen bonding, electrostatic, torsional and solvation energies
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=XU38PQ95))










> explicit representation of the geometric dependence of hydrogen bonding, which was found to be particularly important at protein interfaces
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=7HJ7PPB8))










> sequence design challenge, sampling methods were developed to generate low-energy sequences for a given structure
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=NWJBJHRC))










> new sequences could be found for natural protein structures
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=FXJ6ZYUB))










> deep-learning methods such as AlphaFold12,13 and RoseTTAFold14,15, which provide a mapping from sequence space to structure space
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=BV8QG2WN))










> physically based methods, which seek to generate very-low-energy sequence–structure pairs
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=NMMUPTNS))










> ML approaches seek to generate high-probability pairs
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=IJ894KXQ))










> experimentally determine protein structures and collect them in the Protein Data Bank (PDB)
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=2GDELQRX))







> Sampling is carried out in sequence space and, at each step, the structure is predicted and sequence changes that increase prediction confidence are favoured
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=EQ54NTTD))










> By analogy to related approaches for image generation25, this approach is referred to as hallucination or activation maximization—the latter because the solutions are found by directly optimizing over the inputs
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=ER3NL3AE))











> RFdiffusion26 and Chroma27 were trained to generate protein backbones based on problem-specific input in a manner analogous to methods like DALL·E28, which generates images based on a text prompt
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=3MKR8WLJ))







> RFdiffusion is trained to denoise partially noised versions of the structures in the PDB and, after training, new protein structures can be generated by progressively denoising starting random noise distributions
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=ZZKNCJ9G))










> RFdiffusion denoising trajectories in the presence of a small-molecule target generate new proteins predicted to bind to this target
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=CHKMY2Z3))





RFdiffusion for protein binder.





> diffusion approaches carry out backbone sampling
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=SACJYES6))





Problem Class 1: Backbone sampling.





> ProteinMPNN generate sequences for fixed backbones and structure prediction
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=U2HEDK3J))





Problem Class 2: Sequence design.





> synthesis of genes encoding the designs, expression and purification of the designed proteins from Escherichia coli, and assays to assess whether the desired function had been obtained
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=36WLDUYC))











> hallucination approaches using AlphaFold2, the generated reasonable sequences did not actually fold to the intended structures, but using sequence design methods, such as ProteinMPNN, to generate sequences for the hallucinated backbones yielded correctly folding proteins
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=5QN8WD3R))










> masked language models that were trained to predict the identities of randomly masked amino acids
([3](zotero://open-pdf/library/items/BEECIBQ5?page=3&annotation=T7B6RGQH))












![research-notes/images/yangPresentFutureNovo2026/image-3-x393-y210.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x393-y210.png)



![research-notes/images/yangPresentFutureNovo2026/image-3-x41-y307.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x41-y307.png)

8EOV


![research-notes/images/yangPresentFutureNovo2026/image-3-x41-y232.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x41-y232.png)

8UBG


![research-notes/images/yangPresentFutureNovo2026/image-3-x418-y379.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x418-y379.png)

pseudosymmetric nanoparticle (protein assembly)






![research-notes/images/yangPresentFutureNovo2026/image-3-x158-y231.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x158-y231.png)



![research-notes/images/yangPresentFutureNovo2026/image-3-x275-y379.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x275-y379.png)

9OP9

quasisymmetric nanoparticle (protein assembly)


![research-notes/images/yangPresentFutureNovo2026/image-3-x40-y400.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x40-y400.png)

symmetric nanoparticles (protein assemblies)






![research-notes/images/yangPresentFutureNovo2026/image-3-x422-y563.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x422-y563.png)

macrocycle






![research-notes/images/yangPresentFutureNovo2026/image-3-x499-y562.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x499-y562.png)

Noncanonical Amino Acids


![research-notes/images/yangPresentFutureNovo2026/image-3-x292-y586.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x292-y586.png)

6X1K







![research-notes/images/yangPresentFutureNovo2026/image-3-x335-y552.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x335-y552.png)

6B85






![research-notes/images/yangPresentFutureNovo2026/image-3-x40-y602.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x40-y602.png)

IQYS


![research-notes/images/yangPresentFutureNovo2026/image-3-x41-y549.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x41-y549.png)

5BVL


![research-notes/images/yangPresentFutureNovo2026/image-3-x152-y558.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x152-y558.png)

6WMK






![research-notes/images/yangPresentFutureNovo2026/image-3-x217-y555.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x217-y555.png)

8E0O






![research-notes/images/yangPresentFutureNovo2026/image-3-x345-y660.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x345-y660.png)

RFdiffusion.






![research-notes/images/yangPresentFutureNovo2026/image-3-x39-y660.png](/static/research-notes/images/yangPresentFutureNovo2026/image-3-x39-y660.png)

Typical workflow of protein design.

Put the DNA inside E.coli and let it synthesize the protein.






![research-notes/images/yangPresentFutureNovo2026/image-4-x206-y161.png](/static/research-notes/images/yangPresentFutureNovo2026/image-4-x206-y161.png)

9DN6






![research-notes/images/yangPresentFutureNovo2026/image-4-x321-y161.png](/static/research-notes/images/yangPresentFutureNovo2026/image-4-x321-y161.png)

7N3T






![research-notes/images/yangPresentFutureNovo2026/image-4-x42-y158.png](/static/research-notes/images/yangPresentFutureNovo2026/image-4-x42-y158.png)

9CKV






![research-notes/images/yangPresentFutureNovo2026/image-4-x272-y319.png](/static/research-notes/images/yangPresentFutureNovo2026/image-4-x272-y319.png)

6DG5






![research-notes/images/yangPresentFutureNovo2026/image-4-x504-y321.png](/static/research-notes/images/yangPresentFutureNovo2026/image-4-x504-y321.png)

9UC8






![research-notes/images/yangPresentFutureNovo2026/image-4-x43-y318.png](/static/research-notes/images/yangPresentFutureNovo2026/image-4-x43-y318.png)

7TYD






![research-notes/images/yangPresentFutureNovo2026/image-4-x42-y444.png](/static/research-notes/images/yangPresentFutureNovo2026/image-4-x42-y444.png)

Protein binder for antivirals






![research-notes/images/yangPresentFutureNovo2026/image-4-x254-y444.png](/static/research-notes/images/yangPresentFutureNovo2026/image-4-x254-y444.png)

Protein binder for antitoxins






![research-notes/images/yangPresentFutureNovo2026/image-4-x46-y642.png](/static/research-notes/images/yangPresentFutureNovo2026/image-4-x46-y642.png)

RFdiffusion for generating the binder for binding the binding site (green) on a receptor (grey)





> protein binders (a–c) are shown as cartoon representations, coloured with a rainbow gradient from purple to blue according to the Cα order
([4](zotero://open-pdf/library/items/BEECIBQ5?page=4&annotation=QCTMMF2J))










> protein language models51–53 used an autoregressive formulation, predicting the next amino acid in a sequence and therefore supporting de novo sequence generation and family-conditioned design
([5](zotero://open-pdf/library/items/BEECIBQ5?page=5&annotation=LVL7NASS))











> Discrete diffusion-based approaches54–56 learn to unmask sequences or tokens from noise to achieve improved global coherence
([5](zotero://open-pdf/library/items/BEECIBQ5?page=5&annotation=9DYZJVY7))











![research-notes/images/yangPresentFutureNovo2026/image-5-x40-y178.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x40-y178.png)







![research-notes/images/yangPresentFutureNovo2026/image-5-x143-y178.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x143-y178.png)







![research-notes/images/yangPresentFutureNovo2026/image-5-x249-y178.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x249-y178.png)

9MRB






![research-notes/images/yangPresentFutureNovo2026/image-5-x354-y178.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x354-y178.png)

9PYL






![research-notes/images/yangPresentFutureNovo2026/image-5-x465-y178.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x465-y178.png)

8C3W






![research-notes/images/yangPresentFutureNovo2026/image-5-x374-y374.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x374-y374.png)







![research-notes/images/yangPresentFutureNovo2026/image-5-x38-y550.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x38-y550.png)

8VFQ






![research-notes/images/yangPresentFutureNovo2026/image-5-x185-y550.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x185-y550.png)

Heart Disease Drug.






![research-notes/images/yangPresentFutureNovo2026/image-5-x197-y468.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x197-y468.png)

Heart Disease Drug.






![research-notes/images/yangPresentFutureNovo2026/image-5-x39-y461.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x39-y461.png)

8VEI






![research-notes/images/yangPresentFutureNovo2026/image-5-x213-y372.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x213-y372.png)

8UQF






![research-notes/images/yangPresentFutureNovo2026/image-5-x51-y645.png](/static/research-notes/images/yangPresentFutureNovo2026/image-5-x51-y645.png)

RFdiffusion2 starting from model of ideal active site and then protein changes around it.






![research-notes/images/yangPresentFutureNovo2026/image-6-x131-y209.png](/static/research-notes/images/yangPresentFutureNovo2026/image-6-x131-y209.png)

Forming minerals.






![research-notes/images/yangPresentFutureNovo2026/image-6-x319-y208.png](/static/research-notes/images/yangPresentFutureNovo2026/image-6-x319-y208.png)







![research-notes/images/yangPresentFutureNovo2026/image-6-x133-y317.png](/static/research-notes/images/yangPresentFutureNovo2026/image-6-x133-y317.png)

LOCKR cage (grey) AND key (green) uncages the peptide (rainbow)






![research-notes/images/yangPresentFutureNovo2026/image-6-x130-y457.png](/static/research-notes/images/yangPresentFutureNovo2026/image-6-x130-y457.png)

With peptide (orange)

Without peptide (green)






![research-notes/images/yangPresentFutureNovo2026/image-6-x130-y560.png](/static/research-notes/images/yangPresentFutureNovo2026/image-6-x130-y560.png)

Allosterically switchable cyclic protein.






![research-notes/images/yangPresentFutureNovo2026/image-6-x293-y561.png](/static/research-notes/images/yangPresentFutureNovo2026/image-6-x293-y561.png)

Nanoscale axle-rotor assembly.






![research-notes/images/yangPresentFutureNovo2026/image-6-x127-y649.png](/static/research-notes/images/yangPresentFutureNovo2026/image-6-x127-y649.png)

RFdiffusion trajectory.






![research-notes/images/yangPresentFutureNovo2026/image-6-x316-y641.png](/static/research-notes/images/yangPresentFutureNovo2026/image-6-x316-y641.png)

RFdiffusion trajectory for tertiary structure.





> current design challenges involving the accurate positioning of multiple sidechain atoms, for example, in an enzyme active site
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=KGBD4BGN))










### Protein folds










> Denovo protein design first focused on the fundamental inverse folding problem: the design of amino acid sequences that fold to new monomeric protein structures
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=R9YKGKD4))










> novel sequences for existing folds
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=HMM9DEEJ))










> diversification of existing folds
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=VI68DHJX))










> creation of entirely non-native folds
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=LHBP7PCY))










> 1988 that new proteins could be designed by generating sequences encoding amphipathic α-helices
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=P7CNIUY3))





amphipathic: molecule that has both hydrophilic and hydrophobic regions.





> 1997, it was shown that new protein sequences that adopt already existing folds can be identified by computational sidechain packing methods
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=64X393D5))





Earlier solution to sequence design problem.





> new globular protein structures could be designed using the Rosetta structure prediction methodology to sample new protein backbones and sequence design to identify low-energy sequences for these backbones
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=9KLCWYXD))











> new proteins could be designed with atomic accuracy
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=JKYI2JWA))










> wide variety of new structures have been designed and experimentally validated, some with folds resembling those in nature, such as TIM barrels59, helical repeat proteins60 and β-barrels
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=D7C2BWZR))










> this challenge is largely solved
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=TK9G7YK6))





Monomeric protein design (novel sequence and structure) is largely solved.





> incorporating hydrophobic surfaces driving membrane insertion, transmembrane proteins can now be denovo designed
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=PHXWN3MC))





Transmembrane protein: Protein that sits embedded across cell membrane.





> α-helical
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=UQMMJUR2))





Spiral shaped secondary structure.





> β-sheet
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=XDK3FMGT))





Secondary structure where parts of protein chains lie side-by-side .





> Single-molecule DNA sequencing has relied on naturally occurring β-barrel pores
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=HDGR9KPW))





People repurposed the naturally occurring beta-barrels for single molecule DNA sequencing.

Single molecule DNA sequencing: put a strand of DNA (A, T, G, C) through this pore which acts as a nanoscale sensor to infer the sequence.





> de novo design now enables the generation of pores with custom sizes and linings
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=NIV7NUE5))










> nanopore-based technologies, including protein sequencing and generalized sensing
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=SDH6VFDH))





nanoscale sensors.






> design has been extended beyond the 20 natural amino acids
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=2TJSTSWH))










> progress with short peptides and macrocycles that can be synthesized chemically.
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=7NVH36EE))





Macrocycle: molecule containing a large ring of atoms (12+).






> Seven-to-14-residue backbone cyclized peptides (Fig. 1e (left)) composed of l- and d-amino acids have been designed that adopt well defined structures in solution81, bind to protein targets82 and are membrane permeable and orally bioavailable
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=YYDZWE9L))





A residue is a amino acid building block.

7-14 L/D amino acids were made into a ring.





> generalized to design minicycles with 4–5 residue oligoamide building blocks
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=TZ82QS5P))





Oligoamide: the residues might not be natural amino acids.






> approaches originally developed for protein design can be applied to the design of small drug-like molecules
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=95Z5VJWI))





protein design direction leads to drug design.





### Protein assemblies










> Cyclic oligomers and polyhedral nanocages with predefined sizes and porosities have been designed with a variety of methods, including Rosetta90, symmetric hallucination23, RFdiffusion26 and reinforcement learning
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=8YAZMSRB))










> icosahedral nanoparticles have led to the first de novo designed, clinically approved medicine: the SKYCovione COVID-19 vaccine
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=7RSL9LRP))





Real world use case.





> additional functional motifs into protein particles opens a wealth of possibilities
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=H3KNC3VL))










> antibody cage-based platforms89 that trigger specific therapeutic signalling, pH-responsive particle dissociation for delivery98 and cryo-electron microscopy scaffolds that advance structural biology
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=LDJQ6PJI))










> breaking perfect point-group symmetry and allowing subunits to adopt distinct local environments, larger and more complex assemblies
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=TCSZSN94))










### History of designed protein assemblies










> one-dimensional protein filaments, two-dimensional arrays and three-dimensional nano cages and crystals
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=ANPYKZEA))










> three main approaches
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=YGJAR42R))










> (1) generation of backbone arrangements using parametric equations, initially developed for helical bundles with cyclic symmetries such as coiled coils
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=ICVQ6SKK))










> (2) rigid fusion of cyclic protein oligomers by aligning their internal symmetry axes with those of a desired architecture
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=PG5DSNNI))










> 3) symmetric docking of cyclic oligomers as sequence-independent rigid bodies, followed by combinatorial sequence optimization at the newly formed interface to stabilize assembly
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=TZH9L924))










> development of deep-learning approaches, such as hallucination19,23, reinforcement learning91 and RFdiffusion26, has transformed the symmetric backbone generation process, enabling more extensive sampling of backbone conformations
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=97HTBYJC))










> fixed backbone sequence design (for example, ProteinMPNN41) and structure prediction methods (AlphaFold12 and RosettaFold15) for evaluating whether the designed sequences assemble to the target structure
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=GRWH5L5Y))










> biological probes and delivery vehicles
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=KNYW433K))





quasisymmetric particles uses.





> potential for nanoscale patterning in both nanotechnology and synthetic biology
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=JK3EUXL5))










> A reconfigurable 2D array (Fig. 1j) designed with RFdiffusion rapidly converts into cages when complementary binding partners are present
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=B3FDE3IT))










> Three-dimensional protein crystals can now be robustly designed using a hierarchical design strategy
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=FZRULAM8))










> Designing crystalline protein frameworks that self-assemble under physiological conditions holds promise for a wide range of applications at the interface of biology and materials science
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=GZ5MU68V))










> DNA nanotechnology
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=TJA8PU5P))










### Design of binders to protein targets










> Binders to protein targets have considerable potential as therapeutics for blocking receptor–ligand and other interactions with potential advantages over antibodies in modularity, stability and size
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=DLVZERCL))










> gradient-based hallucination approaches such as Bindcraft have been used to robustly generate binders against many protein targets
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=ZGSMLNG5))







> Chroma27, ProGen52 and PXDesign
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=EFBE78TY))





To design protein binders against protein targets.


> a random cloud of amino acid residues is placed around a user-specified site on the structure of a target of interest and, over the diffusion trajectory, these residues organize into a protein structure with high complementarity to the target
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=U5AB2S54))










> designs with picomolar affinity have been obtained to targets as varied as snake venom toxins119 (Fig. 2b) and the TNF receptor
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=4PSSIQUQ))





TNF: Tumor Necrosis Factor, it is a signalling protein (cytokine) used by immune system to coordinate inflammation.

RFdiffusion can achieve dissociation constant at K_D ~ 10^-12 M.

P + L &lt;> PL

K_D = [P][L]/[PL]

Very low K_D means equilibrium concentration of complex is far greater, signalling strong binding.


> conditioned on the antibody fold to generate nanobody (VHH) and scFv binders against targets of interest
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=EKVTI7RU))





VHH: small antibody format, called nanobody

scFv: larger antibody fragment with V_H and V_L

V_H: Variable Heavy
V_L: Variable Light

V_H + V_L - antigen binding surface


> CDR loops
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=B76MLDXM))





Complementarity Determining Region.

The part of the antibody that actually does the grabbing of target.


> design of macrocyclic peptides with cell-penetration abilities through computational programs such as HELM-GPT128 and RFpeptides129 in the presence of protein targets can now generate high-affinity drug-like binders
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=83N76H3L))







> Physics-based methods such as Rosetta
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=N6AGTBG5))










> ML-based methods such as PepPrCLIP130 and RFdiffusion can now target intrinsically disordered regions of proteins (IDRs)
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=XKWR7V22))







> underlying design concept is induced fit—in contrast to folded targets, IDRs and peptides can be induced to adopt conformations that are particularly conducive to binding
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=583AZIMH))





Induced fit method.





> Designed binders to the oncogenes β-catenin and SS18–SSX1 can act as affinity handles for target degradation
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=UIMA4H4U))





Cancer-driving proteins can now be targeted to send a versatile attacher (affinity handle) that we design, onto which anything can be sent, for example a degrader.


> Designed binders to segments of β-amyloid and tau—proteins that drive neurodegeneration-associated amyloids—potently suppress amyloid formation and have potential therapeutic use
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=SFY3CIDN))





The binding itself is therapeutic.






> proteomics
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=UNB8U3LI))





Study of proteins in the biological system.





> combination of Rosetta, RFdiffusion and ProteinMPNN have led to the design of experimentally validated binders to over 200 protein targets
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=KMXID4YC))










> design of protein binders is approaching being a solved problem
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=ICG45L3Q))










### Combatting viruses










> Small stable proteins have been designed to bind to and neutralize influenza137–139, SARS-CoV-2130,140,141, MERS-CoV142, the henipaviruses Nipah and Hendra, andrespiratory syncytial virus
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=RDNJPKE2))










> designed binders block viral infection with a potency comparable to or greater than antibodies, particularly after oligomerization to match the oligomerization state of the target viral glycoproteins142,144,145, which also makes them more resistant to escape mutations
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=N5JQTHZV))





Oligomerization: multiple protein subunits (each can itself be a polymer of amino acids) forming a complex

Glycoprotein: protein + contently attached carbohydrate group.






> prophylactic protection
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=6APFL4EZ))





preventive.





> In this area, the main challenge is not design methodology or even early-stage characterization of efficacy but, instead, the later-stage problem of how to advance this new modality into the clinic
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=6R86ENH6))










### Neutralizing toxins










> Small stable proteins have been designed to neutralize the botulinum neurotoxin B137, Clostridioides difficile toxin B148,149, the Paeniclost ridium sordellii lethal toxin TcsL150 and the major components of snake venom
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=QGJICT4L))










### Receptor antagonists and agonists










> Small stable proteins have been designed against a wide array of receptor tyrosine kinase extracellular domains
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=UPMYTG9F))










> For cancer immunotherapy, binders have been designed against peptide-MHCs153, which can be cancer neo-epitopes154, cytokine receptor subunits, immune checkpoint proteins such as PD-1, PD-L1 and CTLA-4155,156 that potently modulate immune cell signalling, and targets upregulated in cancer such as HER2.
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=28LHY44U))





MHC: Major Histocompatibility Complex, protein on a cell surface that displays peptide fragments to immune systems

epitope: molecular feature recognized by an immune receptor

cytokine: signalling protein heavily used by immune system

immune checkpoint: regulatory pathway that controls how much immune cells activate

PD-1: checkpoint receptor found on immune cells like T cell

PD-L1: ligand of PD-1

CTLA-4: another immune checkpoint receptor that restrains T cell activation

HER2: cell-surface growth-signalling receptor. upregulated in certain cancers.





> IL-2 analogues have advanced into human clinical trials
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=DB2AB8RF))










> FGF
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=946CXN7C))





Fibroblast Growth Factor


> The primary challenge here is not how to design binders to individual receptor subunits, but how to choose which pairs (or triplets) of receptors to bring together using this approach
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=TWMMJ5ND))










> potential use in adoptive cell therapies such as chimeric antigen receptor (CAR) T cells
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=2VGM5S2V))










### Trafficking and degradation










> Designed proteins that bind to receptors that are endocytosed or transcytosed provide access to new therapeutic modalities for intracellular delivery and protein degradation
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=3JYEGW2Y))





Endocytocis: Cell pulls in whats on the receptor

Transcytosis: Same, but released out on the other side of cell






> cross ex vivo blood–brain barrier models, and fusions could enable transport of binders to therapeutic targets in the brain
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=ARFL7XAE))










> IGF2R
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=X5FEY6RL))





Insulin-like Growth Factor 2 Receptor

Broadly expressed.





> sortilin
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=HQFK45NI))





Sortilin Receptor

Brain, liver, muscles etc.





> ASGPR
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=JD366ZQH))





Asialoglycoprotein Receptor

Liver.





> lysosomal trafficking stimulated designs are called EndoTags
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=XNB9JTBI))







> PepPrCLIP130 have successfully designed binders to various oncogenic proteins and attached E3 ubiquitin ligases to these binders for target protein degradation
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=2Q75NQYH))










### Small-molecule binders and sensors










> De novo protein design can target small-molecule drugs, probes and metabolites, with applications ranging from invivo reporters to diagnostics
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=LUHSXIX3))










> development of robust de novo protein scaffolds has enabled the design of binders for small molecules with diverse chemical properties
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=29YKTNPP))










> Binders to therapeutics such as the heart disease drug digoxigenin and methotrexate have been designed and have potential as therapeutic sponges and sensors for monitoring drug levels
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=S7Y35X5R))











> Designs against drugs of abuse such as fentanyl have been converted into  plant-based sensors by coupling binding to stabilization
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=DEM7M5E6))










> chemically induced dimerization (CID) sensors by designing a second protein that interacts with the small-molecule–protein complex
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=IHK7NXL5))





When the drug molecule is present, the protein 1 and protein 2 can assemble.


> Design of shape-complementary pseudocyclic scaffolds has enabled binding to polar and flexible compounds that have been incorporated into gated designed nanopores
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=R9UU7RVP))





Gated nanopore: Now the nanopore opening and closing can be controlled.





> For orthogonal control of cell signalling186–188, CID systems172,181,189–192 have been designed that are triggered by clinically approved antiviral drugs or designed cyclic peptides
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=WDQPYFBU))





Assign a molecule a new biological meaning.

Even though a drug normally doesn't control some signalling pathway of a cell, CIDs enable an artificial input channel for that drug to independently triggers a chosen response with the cell existing input channels.





### Enzymes










> The design of high-activity enzyme catalysts has been a long-standing goal of de novo protein design
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=JR5XDH5C))










> Catalysts were generated193 for model chemical reactions such as retro-aldol194 and Kemp elimination195,196 using this approach, but the activities were low and considerable directed evolution was required to approach the much higher activity levels of typical native enzymes
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=KX7XFXU8))





Aldol: ALDehyde + alcohOL

Retro-aldol: breaking a carbon carbon bond in an aldol-type molecule

Kemp elimination: ring opening of benzisoxazole by removing a proton (H+)






> general lack of atomic-level control over functional group placement
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=XUDTJ4I6))










> ML-generated scaffolds enabled the de novo design of high-activity luciferases
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=S6NBR67L))





luciferin + o2 -> light + product

The enzyme is luciferase.

Bioluminescence is useful because we can directly study photons to understand the reaction.






> RFdiffusion2 now enable the direct construction of custom scaffolds to house any desired catalytic site
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=GJ3BGRIX))










> Selection for preorganization of the active-site residues in catalytically competent conformations at each step in a reaction mechanism using an activesite ensemble-generating deep-learning method called PLACER205 considerably increased the design success rates for serine hydrolases
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=63LVIIHX))





Serine is one of the 20 amino acids

Ser-O-Substrate + H2O -> Ser-OH + products






> RFdiffusion buildup approach enables exploration of active site composition and geometries
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=UTITVHRL))










> Cofactors such as haem can be incorporated into de novo designs by constructing appropriate binding pockets14,208,209; extension to unnatural cofactors should considerably expand the range of chemistries accessible to catalysis
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=3GP48VVJ))





Cofactor: a non-protein molecule/ion that an enzyme uses to perform chemistry that amino acids can't do.





> catalytic side-chain functional groups (called atomic motifs)
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=DDE9XJ7Y))










> RFdiffusion2 enables direct structure generation around a set of atomic motif guideposts that specify the active-site geometry in a sequence agnostic manner
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=6LLS67LT))










> design of metallohydrolases with much higher activities (kcat/KM &gt; 104 M−1 s−1)
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=5K5ZCD85))










> computational enzyme design will move beyond model chemical reactions to generate catalysts to solve outstanding current challenges in sustainability and biomanufacturing
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=37UJKCN2))










### Outlook










> For affinity reagent and therapeutic antibody generation, classic techniques such as animal immunization and random library selection will likelybe supplanted by computational design, which is faster, cheaper and more precise
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=APMG3K3L))










> In enzyme engineering, in which the current strategies rely on bioprospecting or directed evolution, de novo design enables the construction of custom active sites for new reactions and seamless incorporation of both natural and non-natural cofactors, but methodological improvements are still required to achieve high activities on less activated substrates
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=8L3VXYRC))










> In genome regulation, new methods for designing protein–nucleic acid interactions are opening avenues for next-generation gene therapy and control.
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=Q69X674C))










> Current technologies rely primarily on engineering natural systems, such as zinc fingers215, transcription activator-like effectors216 and CRISPR–Cas217, which are constrained by the fixed geometry of their native scaffolds218. More compact, customizable DNA-binding proteins with enhanced modularity and deliverability can now be designed using Rosetta and RFdiffusion approaches
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=G8J5MYCY))











> Beyond DNA, RFdiffusion has been generalized to RNA and protein-RNA 3D structure design (Fig. 4a (right)); progress in this area could lead to new protein–RNA functional assemblies, expanding the frontier of synthetic biology
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=BNHC5LAP))










> Recent advances in binding and catalytic protein design now bring dynamic, multistate systems within reach, enabling transistor-like logic operations and providing building blocks for increasingly sophisticated molecular machines
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=AFS48N28))










> LOCKR system integrates binding inputs into outputs such as bioluminescence220,221, fluorescence221,222, degradation223 or relocalization223, and can perform Boolean logic to direct CAR T cells to target specific surface marker combinations
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=5DATMFKE))










> hinge-like protein switches have been designed with two well-defined states toggled by an effector such as a peptide227 or calcium ion228. By coupling these hinges with reversible interaction modules, allosteric assemblies have been designed in which effector binding at a distant allosteric site changes the oligomeric state, leading to effector binding cooperativity
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=IGIRZRZC))










> Mechanically constrained nanoscale architectures with internal degrees of freedom79, such as microscopic axles and rotors, have been designed; rather than locking into a single orientation, these self-assemble into rotary devices (Fig. 4b (top right)). Such mechanical coupling is a hallmark of machines and paves the way for nanoscale devices powered by solar energy or chemical fuels
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=TLPXDF5U))










> By creating de novo protein scaffolds that precisely interact with inorganic surfaces or lattice structures231, it is possible to guide nucleation and growth; for example, programming calcite formation from calcium  carbonate for CO2 fixation232, and templating zinc oxide nucleation for semiconductor biosynthesis
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=WC6YTRWL))










> protein design has no such limitation and could enable bottom-up generation of new semiconductors and materials, complementing current top-down manufacturing methods
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=M5X4F27X))










> In renewable energy, protein design could accelerate breakthroughs in high-efficiency photosynthesis for faster-growing food crops, renewable solar fuel nitrogen fixation
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=HK34VCK4))










> By designing simpler yet robust analogues of complex photosynthetic systems, it should become possible to incorporate near-infrared light into oxygenic photosynthesis234,235, recreate the chlorophyll special pair at the reaction centre236 and self-assemble multinuclear metal clusters to facilitate multielectron reactions like water oxidation. Orchestrating these energyand electron-transfer events could lead to new efficient, light-driven chemical processes, potentially surpassing natural photosynthesis in productivity
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=5735V8JA))










> Immunogenicity remains a key concern in therapeutic applications: while initial data indicate that many denovo proteins elicit relatively low immune responses, perhaps due to their high stability and solubility, further work is needed to minimize T cell epitopes and rigorously evaluate immunogenicity
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=YNN9C9MC))










> Large-scale protein manufacturing can also be a challenge, particularly for non-medical applications requiring bulk protein production
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=P4T4J8MN))










> As design efforts move beyond binding and enzymatic functions, new experimental assays and high-throughput screening will be critical for evaluating newly emerging activities
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=PF45CBBP))










> the ease of sequence redesign raises questions regarding intellectual property within an evolving patent landscape
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=JTFLRHYB))










> the fundamental challenges of designing new structures, assemblies and binding proteins are largely solved, and considerable progress is being made on catalysis, albeit still primarily for lower-energy-barrier reactions
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=X9RILKQ3))










> Now that folding, assembly, binding and catalytic modalities are accessible to de novo protein design, the next frontiers involve more sophisticated functionality that combines two or more of these modalities
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=Z5T2PM6Y))










> The coming decade promises to be an exciting era of innovation as de novo protein design tackles major outstanding problems facing humanity and matures into a foundational tool across medicine, sustainability and biotechnology
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=ZL46W6GW))
