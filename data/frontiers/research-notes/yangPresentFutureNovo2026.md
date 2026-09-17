---
published: "2026-04-30"
added: "2026-09-04"
modified: "2026-09-17"
authors: Wei Yang, Shunzhi Wang, Gyu Rie Lee, Jason Z. Zhang, Alexis Courbet, David Juergens, Xinru Wang, Thomas Schlichthaerle, Mohamad Abedi, Robert Ragotte, Linna An, Indrek Kalvet, Sam Pellock, Ljubica Mihaljevic, Cameron Glasscock, Arvind Pillai, Adam Broerman, Nathan Ennist, Ella Haefner, Nora McNamara-Bordewick, Ian Haydon, Lance Stewart, Gaurav Bhardwaj, David Baker
abstract: "No abstract available."
---

# The past, present and future of de novo protein design

[URL](https://www.nature.com/articles/s41586-026-10328-7)

## Tags
#✅


## Notes

<span style="color:
#FFF176;">
shift in protein engineering from random selection to intentional computational design methods</span>
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=KXYPZTCT))










<span style="color:
#FFF176;">
long-standing challenges of designing new protein structures, assemblies and protein binders are close to being solved</span>
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=W44PBPKE))










<span style="color:
#FFF176;">
what to design, and open-source design methodology such as RFdiffusion and ProteinMPNN together with protein structure prediction tools</span>
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=T37K3F6I))







#rfdiffusion




<span style="color:
#FFF176;">
de novo design of small-molecule target binders, enzymes and multistate protein systems</span>
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=2JQ9J9JQ))










<span style="color:
#FFF176;">
design of catalysts for reactions with high energy barriers</span>
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=CYTIQ8GC))










<span style="color:
#FFF176;">
design of switches and nanomachines that integrate binding, conformational change and catalysis</span>
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=36XBQ26D))










<span style="color:
#FFF176;">
sophisticated functionality of natural proteins evolved over hundreds of millions of years of natural selection to solve the problems that were critical during biological evolution</span>
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=HFAARKK5))










<span style="color:
#FFF176;">
functionality and versatility of the proteins in nature suggests that new proteins could provide solutions to many of these problems</span>
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=WUB7WQ8P))










<span style="color:
#FFF176;">
de novo protein design: building new proteins with new functions from the ground up rather than by repurposing existing native proteins</span>
([1](zotero://open-pdf/library/items/BEECIBQ5?page=1&annotation=JXXS7AZW))










<span style="color:
#FFF176;">
first, for the general reader, to provide an overview of the progress in this area</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=MUKH2VQ8))










<span style="color:
#FFF176;">
second, for scientists outside of the field, to encourage the application of protein design methods to their research problems</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=QK6YEXVP))










<span style="color:
#FFF176;">
third, for methods developers, to encourage focus on unsolved rather than largely solved design problems</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=PE8QKR4J))










### Protein design challenges










<span style="color:
#FFF176;">
major classes of challenges that de novo protein design</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=WC62AB8H))










<span style="color:
#FFF176;">
design of monomeric protein folds and multiprotein assemblies</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=UBWBG6DJ))










<span style="color:
#FFF176;">
proteins that bind to other proteins</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=MPU23XIV))










<span style="color:
#FFF176;">
small-molecule binders, sensors and enzyme catalysts</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=56VDJBUK))










<span style="color:
#FFF176;">
multistate functional biomolecular systems</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=E7E5UX73))










### Protein design methodology










<span style="color:
#FFF176;">
Anfinsen’s hypothesis that the folded state of a protein is at the global free-energy minimum for its sequence</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=3LYN37CD))







#anfinsens-hypothesis




<span style="color:
#FFF176;">
three problem classes: backbone sampling, sequence design and energy calculation</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=WR6S7RFU))










<span style="color:
#FFF176;">
energy calculation challenge, atomic force fields were developed</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=59D4S2GG))










<span style="color:
#FFF176;">
the van der Waals, hydrogen bonding, electrostatic, torsional and solvation energies</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=XU38PQ95))










<span style="color:
#FFF176;">
explicit representation of the geometric dependence of hydrogen bonding, which was found to be particularly important at protein interfaces</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=7HJ7PPB8))










<span style="color:
#FFF176;">
sequence design challenge, sampling methods were developed to generate low-energy sequences for a given structure</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=NWJBJHRC))










<span style="color:
#FFF176;">
new sequences could be found for natural protein structures</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=FXJ6ZYUB))










<span style="color:
#FFF176;">
deep-learning methods such as AlphaFold12,13 and RoseTTAFold14,15, which provide a mapping from sequence space to structure space</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=BV8QG2WN))










<span style="color:
#FFF176;">
physically based methods, which seek to generate very-low-energy sequence–structure pairs</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=NMMUPTNS))










<span style="color:
#FFF176;">
ML approaches seek to generate high-probability pairs</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=IJ894KXQ))










<span style="color:
#FFF176;">
experimentally determine protein structures and collect them in the Protein Data Bank (PDB)</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=2GDELQRX))







#pdb




<span style="color:
#FFF176;">
Sampling is carried out in sequence space and, at each step, the structure is predicted and sequence changes that increase prediction confidence are favoured</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=EQ54NTTD))










<span style="color:
#FFF176;">
By analogy to related approaches for image generation25, this approach is referred to as hallucination or activation maximization—the latter because the solutions are found by directly optimizing over the inputs</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=ER3NL3AE))







#activation-maximization




<span style="color:
#FFF176;">
RFdiffusion26 and Chroma27 were trained to generate protein backbones based on problem-specific input in a manner analogous to methods like DALL·E28, which generates images based on a text prompt</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=3MKR8WLJ))







#chroma




<span style="color:
#FFF176;">
RFdiffusion is trained to denoise partially noised versions of the structures in the PDB and, after training, new protein structures can be generated by progressively denoising starting random noise distributions</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=ZZKNCJ9G))










<span style="color:
#FFF176;">
RFdiffusion denoising trajectories in the presence of a small-molecule target generate new proteins predicted to bind to this target</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=CHKMY2Z3))





RFdiffusion for protein binder.





<span style="color:
#FFF176;">
diffusion approaches carry out backbone sampling</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=SACJYES6))





Problem Class 1: Backbone sampling.





<span style="color:
#FFF176;">
ProteinMPNN generate sequences for fixed backbones and structure prediction</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=U2HEDK3J))





Problem Class 2: Sequence design.





<span style="color:
#FFF176;">
synthesis of genes encoding the designs, expression and purification of the designed proteins from Escherichia coli, and assays to assess whether the desired function had been obtained</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=36WLDUYC))







#escherichia-coli




<span style="color:
#FFF176;">
hallucination approaches using AlphaFold2, the generated reasonable sequences did not actually fold to the intended structures, but using sequence design methods, such as ProteinMPNN, to generate sequences for the hallucinated backbones yielded correctly folding proteins</span>
([2](zotero://open-pdf/library/items/BEECIBQ5?page=2&annotation=5QN8WD3R))










<span style="color:
#FFF176;">
masked language models that were trained to predict the identities of randomly masked amino acids</span>
([3](zotero://open-pdf/library/items/BEECIBQ5?page=3&annotation=T7B6RGQH))







#masked-language-models





![research-notes/images/yangPresentFutureNovo2026/image-3-x393-y210.png](research-notes/images/yangPresentFutureNovo2026/image-3-x393-y210.png)



#3d-crystal





![research-notes/images/yangPresentFutureNovo2026/image-3-x41-y307.png](research-notes/images/yangPresentFutureNovo2026/image-3-x41-y307.png)

8EOV


#1d-fibre





![research-notes/images/yangPresentFutureNovo2026/image-3-x41-y232.png](research-notes/images/yangPresentFutureNovo2026/image-3-x41-y232.png)

8UBG


#1d-fibre





![research-notes/images/yangPresentFutureNovo2026/image-3-x418-y379.png](research-notes/images/yangPresentFutureNovo2026/image-3-x418-y379.png)

pseudosymmetric nanoparticle (protein assembly)






![research-notes/images/yangPresentFutureNovo2026/image-3-x158-y231.png](research-notes/images/yangPresentFutureNovo2026/image-3-x158-y231.png)



#2d-lattice





![research-notes/images/yangPresentFutureNovo2026/image-3-x275-y379.png](research-notes/images/yangPresentFutureNovo2026/image-3-x275-y379.png)

9OP9

quasisymmetric nanoparticle (protein assembly)


#9op9





![research-notes/images/yangPresentFutureNovo2026/image-3-x40-y400.png](research-notes/images/yangPresentFutureNovo2026/image-3-x40-y400.png)

symmetric nanoparticles (protein assemblies)






![research-notes/images/yangPresentFutureNovo2026/image-3-x422-y563.png](research-notes/images/yangPresentFutureNovo2026/image-3-x422-y563.png)

macrocycle






![research-notes/images/yangPresentFutureNovo2026/image-3-x499-y562.png](research-notes/images/yangPresentFutureNovo2026/image-3-x499-y562.png)

Noncanonical Amino Acids


#ncaa





![research-notes/images/yangPresentFutureNovo2026/image-3-x292-y586.png](research-notes/images/yangPresentFutureNovo2026/image-3-x292-y586.png)

6X1K


#beta-barrel





![research-notes/images/yangPresentFutureNovo2026/image-3-x335-y552.png](research-notes/images/yangPresentFutureNovo2026/image-3-x335-y552.png)

6B85






![research-notes/images/yangPresentFutureNovo2026/image-3-x40-y602.png](research-notes/images/yangPresentFutureNovo2026/image-3-x40-y602.png)

IQYS


#top7





![research-notes/images/yangPresentFutureNovo2026/image-3-x41-y549.png](research-notes/images/yangPresentFutureNovo2026/image-3-x41-y549.png)

5BVL


#tim-barrel





![research-notes/images/yangPresentFutureNovo2026/image-3-x152-y558.png](research-notes/images/yangPresentFutureNovo2026/image-3-x152-y558.png)

6WMK






![research-notes/images/yangPresentFutureNovo2026/image-3-x217-y555.png](research-notes/images/yangPresentFutureNovo2026/image-3-x217-y555.png)

8E0O






![research-notes/images/yangPresentFutureNovo2026/image-3-x345-y660.png](research-notes/images/yangPresentFutureNovo2026/image-3-x345-y660.png)

RFdiffusion.






![research-notes/images/yangPresentFutureNovo2026/image-3-x39-y660.png](research-notes/images/yangPresentFutureNovo2026/image-3-x39-y660.png)

Typical workflow of protein design.

Put the DNA inside E.coli and let it synthesize the protein.






![research-notes/images/yangPresentFutureNovo2026/image-4-x206-y161.png](research-notes/images/yangPresentFutureNovo2026/image-4-x206-y161.png)

9DN6






![research-notes/images/yangPresentFutureNovo2026/image-4-x321-y161.png](research-notes/images/yangPresentFutureNovo2026/image-4-x321-y161.png)

7N3T






![research-notes/images/yangPresentFutureNovo2026/image-4-x42-y158.png](research-notes/images/yangPresentFutureNovo2026/image-4-x42-y158.png)

9CKV






![research-notes/images/yangPresentFutureNovo2026/image-4-x272-y319.png](research-notes/images/yangPresentFutureNovo2026/image-4-x272-y319.png)

6DG5






![research-notes/images/yangPresentFutureNovo2026/image-4-x504-y321.png](research-notes/images/yangPresentFutureNovo2026/image-4-x504-y321.png)

9UC8






![research-notes/images/yangPresentFutureNovo2026/image-4-x43-y318.png](research-notes/images/yangPresentFutureNovo2026/image-4-x43-y318.png)

7TYD






![research-notes/images/yangPresentFutureNovo2026/image-4-x42-y444.png](research-notes/images/yangPresentFutureNovo2026/image-4-x42-y444.png)

Protein binder for antivirals






![research-notes/images/yangPresentFutureNovo2026/image-4-x254-y444.png](research-notes/images/yangPresentFutureNovo2026/image-4-x254-y444.png)

Protein binder for antitoxins






![research-notes/images/yangPresentFutureNovo2026/image-4-x46-y642.png](research-notes/images/yangPresentFutureNovo2026/image-4-x46-y642.png)

RFdiffusion for generating the binder for binding the binding site (green) on a receptor (grey)





<span style="color:
#FFF176;">
protein binders (a–c) are shown as cartoon representations, coloured with a rainbow gradient from purple to blue according to the Cα order</span>
([4](zotero://open-pdf/library/items/BEECIBQ5?page=4&annotation=QCTMMF2J))










<span style="color:
#FFF176;">
protein language models51–53 used an autoregressive formulation, predicting the next amino acid in a sequence and therefore supporting de novo sequence generation and family-conditioned design</span>
([5](zotero://open-pdf/library/items/BEECIBQ5?page=5&annotation=LVL7NASS))







#protein-language-models




<span style="color:
#FFF176;">
Discrete diffusion-based approaches54–56 learn to unmask sequences or tokens from noise to achieve improved global coherence</span>
([5](zotero://open-pdf/library/items/BEECIBQ5?page=5&annotation=9DYZJVY7))











![research-notes/images/yangPresentFutureNovo2026/image-5-x40-y178.png](research-notes/images/yangPresentFutureNovo2026/image-5-x40-y178.png)







![research-notes/images/yangPresentFutureNovo2026/image-5-x143-y178.png](research-notes/images/yangPresentFutureNovo2026/image-5-x143-y178.png)







![research-notes/images/yangPresentFutureNovo2026/image-5-x249-y178.png](research-notes/images/yangPresentFutureNovo2026/image-5-x249-y178.png)

9MRB






![research-notes/images/yangPresentFutureNovo2026/image-5-x354-y178.png](research-notes/images/yangPresentFutureNovo2026/image-5-x354-y178.png)

9PYL






![research-notes/images/yangPresentFutureNovo2026/image-5-x465-y178.png](research-notes/images/yangPresentFutureNovo2026/image-5-x465-y178.png)

8C3W






![research-notes/images/yangPresentFutureNovo2026/image-5-x374-y374.png](research-notes/images/yangPresentFutureNovo2026/image-5-x374-y374.png)







![research-notes/images/yangPresentFutureNovo2026/image-5-x38-y550.png](research-notes/images/yangPresentFutureNovo2026/image-5-x38-y550.png)

8VFQ






![research-notes/images/yangPresentFutureNovo2026/image-5-x185-y550.png](research-notes/images/yangPresentFutureNovo2026/image-5-x185-y550.png)

Heart Disease Drug.






![research-notes/images/yangPresentFutureNovo2026/image-5-x197-y468.png](research-notes/images/yangPresentFutureNovo2026/image-5-x197-y468.png)

Heart Disease Drug.






![research-notes/images/yangPresentFutureNovo2026/image-5-x39-y461.png](research-notes/images/yangPresentFutureNovo2026/image-5-x39-y461.png)

8VEI






![research-notes/images/yangPresentFutureNovo2026/image-5-x213-y372.png](research-notes/images/yangPresentFutureNovo2026/image-5-x213-y372.png)

8UQF






![research-notes/images/yangPresentFutureNovo2026/image-5-x51-y645.png](research-notes/images/yangPresentFutureNovo2026/image-5-x51-y645.png)

RFdiffusion2 starting from model of ideal active site and then protein changes around it.






![research-notes/images/yangPresentFutureNovo2026/image-6-x131-y209.png](research-notes/images/yangPresentFutureNovo2026/image-6-x131-y209.png)

Forming minerals.






![research-notes/images/yangPresentFutureNovo2026/image-6-x319-y208.png](research-notes/images/yangPresentFutureNovo2026/image-6-x319-y208.png)







![research-notes/images/yangPresentFutureNovo2026/image-6-x133-y317.png](research-notes/images/yangPresentFutureNovo2026/image-6-x133-y317.png)

LOCKR cage (grey) AND key (green) uncages the peptide (rainbow)






![research-notes/images/yangPresentFutureNovo2026/image-6-x130-y457.png](research-notes/images/yangPresentFutureNovo2026/image-6-x130-y457.png)

With peptide (orange)

Without peptide (green)






![research-notes/images/yangPresentFutureNovo2026/image-6-x130-y560.png](research-notes/images/yangPresentFutureNovo2026/image-6-x130-y560.png)

Allosterically switchable cyclic protein.






![research-notes/images/yangPresentFutureNovo2026/image-6-x293-y561.png](research-notes/images/yangPresentFutureNovo2026/image-6-x293-y561.png)

Nanoscale axle-rotor assembly.






![research-notes/images/yangPresentFutureNovo2026/image-6-x127-y649.png](research-notes/images/yangPresentFutureNovo2026/image-6-x127-y649.png)

RFdiffusion trajectory.






![research-notes/images/yangPresentFutureNovo2026/image-6-x316-y641.png](research-notes/images/yangPresentFutureNovo2026/image-6-x316-y641.png)

RFdiffusion trajectory for tertiary structure.





<span style="color:
#FFF176;">
current design challenges involving the accurate positioning of multiple sidechain atoms, for example, in an enzyme active site</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=KGBD4BGN))










### Protein folds










<span style="color:
#FFF176;">
Denovo protein design first focused on the fundamental inverse folding problem: the design of amino acid sequences that fold to new monomeric protein structures</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=R9YKGKD4))










<span style="color:
#FFF176;">
novel sequences for existing folds</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=HMM9DEEJ))










<span style="color:
#FFF176;">
diversification of existing folds</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=VI68DHJX))










<span style="color:
#FFF176;">
creation of entirely non-native folds</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=LHBP7PCY))










<span style="color:
#FFF176;">
1988 that new proteins could be designed by generating sequences encoding amphipathic α-helices</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=P7CNIUY3))





amphipathic: molecule that has both hydrophilic and hydrophobic regions.





<span style="color:
#FFF176;">
1997, it was shown that new protein sequences that adopt already existing folds can be identified by computational sidechain packing methods</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=64X393D5))





Earlier solution to sequence design problem.





<span style="color:
#FFF176;">
new globular protein structures could be designed using the Rosetta structure prediction methodology to sample new protein backbones and sequence design to identify low-energy sequences for these backbones</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=9KLCWYXD))







#rosetta




<span style="color:
#FFF176;">
new proteins could be designed with atomic accuracy</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=JKYI2JWA))










<span style="color:
#FFF176;">
wide variety of new structures have been designed and experimentally validated, some with folds resembling those in nature, such as TIM barrels59, helical repeat proteins60 and β-barrels</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=D7C2BWZR))










<span style="color:
#FFF176;">
this challenge is largely solved</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=TK9G7YK6))





Monomeric protein design (novel sequence and structure) is largely solved.





<span style="color:
#FFF176;">
incorporating hydrophobic surfaces driving membrane insertion, transmembrane proteins can now be denovo designed</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=PHXWN3MC))





Transmembrane protein: Protein that sits embedded across cell membrane.





<span style="color:
#FFF176;">
α-helical</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=UQMMJUR2))





Spiral shaped secondary structure.





<span style="color:
#FFF176;">
β-sheet</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=XDK3FMGT))





Secondary structure where parts of protein chains lie side-by-side .





<span style="color:
#FFF176;">
Single-molecule DNA sequencing has relied on naturally occurring β-barrel pores</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=HDGR9KPW))





People repurposed the naturally occurring beta-barrels for single molecule DNA sequencing.

Single molecule DNA sequencing: put a strand of DNA (A, T, G, C) through this pore which acts as a nanoscale sensor to infer the sequence.





<span style="color:
#FFF176;">
de novo design now enables the generation of pores with custom sizes and linings</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=NIV7NUE5))










<span style="color:
#FFF176;">
nanopore-based technologies, including protein sequencing and generalized sensing</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=SDH6VFDH))





nanoscale sensors.


#nanopore




<span style="color:
#FFF176;">
design has been extended beyond the 20 natural amino acids</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=2TJSTSWH))










<span style="color:
#FFF176;">
progress with short peptides and macrocycles that can be synthesized chemically.</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=7NVH36EE))





Macrocycle: molecule containing a large ring of atoms (12+).


#macrocycle




<span style="color:
#FFF176;">
Seven-to-14-residue backbone cyclized peptides (Fig. 1e (left)) composed of l- and d-amino acids have been designed that adopt well defined structures in solution81, bind to protein targets82 and are membrane permeable and orally bioavailable</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=YYDZWE9L))





A residue is a amino acid building block.

7-14 L/D amino acids were made into a ring.





<span style="color:
#FFF176;">
generalized to design minicycles with 4–5 residue oligoamide building blocks</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=TZ82QS5P))





Oligoamide: the residues might not be natural amino acids.


#oligoamide




<span style="color:
#FFF176;">
approaches originally developed for protein design can be applied to the design of small drug-like molecules</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=95Z5VJWI))





protein design direction leads to drug design.





### Protein assemblies










<span style="color:
#FFF176;">
Cyclic oligomers and polyhedral nanocages with predefined sizes and porosities have been designed with a variety of methods, including Rosetta90, symmetric hallucination23, RFdiffusion26 and reinforcement learning</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=8YAZMSRB))










<span style="color:
#FFF176;">
icosahedral nanoparticles have led to the first de novo designed, clinically approved medicine: the SKYCovione COVID-19 vaccine</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=7RSL9LRP))





Real world use case.





<span style="color:
#FFF176;">
additional functional motifs into protein particles opens a wealth of possibilities</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=H3KNC3VL))










<span style="color:
#FFF176;">
antibody cage-based platforms89 that trigger specific therapeutic signalling, pH-responsive particle dissociation for delivery98 and cryo-electron microscopy scaffolds that advance structural biology</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=LDJQ6PJI))










<span style="color:
#FFF176;">
breaking perfect point-group symmetry and allowing subunits to adopt distinct local environments, larger and more complex assemblies</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=TCSZSN94))










### History of designed protein assemblies










<span style="color:
#FFF176;">
one-dimensional protein filaments, two-dimensional arrays and three-dimensional nano cages and crystals</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=ANPYKZEA))










<span style="color:
#FFF176;">
three main approaches</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=YGJAR42R))










<span style="color:
#FFF176;">
(1) generation of backbone arrangements using parametric equations, initially developed for helical bundles with cyclic symmetries such as coiled coils</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=ICVQ6SKK))










<span style="color:
#FFF176;">
(2) rigid fusion of cyclic protein oligomers by aligning their internal symmetry axes with those of a desired architecture</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=PG5DSNNI))










<span style="color:
#FFF176;">
3) symmetric docking of cyclic oligomers as sequence-independent rigid bodies, followed by combinatorial sequence optimization at the newly formed interface to stabilize assembly</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=TZH9L924))










<span style="color:
#FFF176;">
development of deep-learning approaches, such as hallucination19,23, reinforcement learning91 and RFdiffusion26, has transformed the symmetric backbone generation process, enabling more extensive sampling of backbone conformations</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=97HTBYJC))










<span style="color:
#FFF176;">
fixed backbone sequence design (for example, ProteinMPNN41) and structure prediction methods (AlphaFold12 and RosettaFold15) for evaluating whether the designed sequences assemble to the target structure</span>
([7](zotero://open-pdf/library/items/BEECIBQ5?page=7&annotation=GRWH5L5Y))










<span style="color:
#FFF176;">
biological probes and delivery vehicles</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=KNYW433K))





quasisymmetric particles uses.





<span style="color:
#FFF176;">
potential for nanoscale patterning in both nanotechnology and synthetic biology</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=JK3EUXL5))










<span style="color:
#FFF176;">
A reconfigurable 2D array (Fig. 1j) designed with RFdiffusion rapidly converts into cages when complementary binding partners are present</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=B3FDE3IT))










<span style="color:
#FFF176;">
Three-dimensional protein crystals can now be robustly designed using a hierarchical design strategy</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=FZRULAM8))










<span style="color:
#FFF176;">
Designing crystalline protein frameworks that self-assemble under physiological conditions holds promise for a wide range of applications at the interface of biology and materials science</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=GZ5MU68V))










<span style="color:
#FFF176;">
DNA nanotechnology</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=TJA8PU5P))










### Design of binders to protein targets










<span style="color:
#FFF176;">
Binders to protein targets have considerable potential as therapeutics for blocking receptor–ligand and other interactions with potential advantages over antibodies in modularity, stability and size</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=DLVZERCL))










<span style="color:
#FFF176;">
gradient-based hallucination approaches such as Bindcraft have been used to robustly generate binders against many protein targets</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=ZGSMLNG5))







#bindcraft




<span style="color:
#FFF176;">
Chroma27, ProGen52 and PXDesign</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=EFBE78TY))





To design protein binders against protein targets.


#progen
#pxdesign




<span style="color:
#FFF176;">
a random cloud of amino acid residues is placed around a user-specified site on the structure of a target of interest and, over the diffusion trajectory, these residues organize into a protein structure with high complementarity to the target</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=U5AB2S54))










<span style="color:
#FFF176;">
designs with picomolar affinity have been obtained to targets as varied as snake venom toxins119 (Fig. 2b) and the TNF receptor</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=4PSSIQUQ))





TNF: Tumor Necrosis Factor, it is a signalling protein (cytokine) used by immune system to coordinate inflammation.

RFdiffusion can achieve dissociation constant at K_D ~ 10^-12 M.

P + L <> PL

K_D = [P][L]/[PL]

Very low K_D means equilibrium concentration of complex is far greater, signalling strong binding.


#affinity
#tnf




<span style="color:
#FFF176;">
conditioned on the antibody fold to generate nanobody (VHH) and scFv binders against targets of interest</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=EKVTI7RU))





VHH: small antibody format, called nanobody

scFv: larger antibody fragment with V_H and V_L

V_H: Variable Heavy
V_L: Variable Light

V_H + V_L - antigen binding surface


#scfv
#vhh




<span style="color:
#FFF176;">
CDR loops</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=B76MLDXM))





Complementarity Determining Region.

The part of the antibody that actually does the grabbing of target.


#cdr




<span style="color:
#FFF176;">
design of macrocyclic peptides with cell-penetration abilities through computational programs such as HELM-GPT128 and RFpeptides129 in the presence of protein targets can now generate high-affinity drug-like binders</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=83N76H3L))







#helm-gpt
#rfpeptides




<span style="color:
#FFF176;">
Physics-based methods such as Rosetta</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=N6AGTBG5))










<span style="color:
#FFF176;">
ML-based methods such as PepPrCLIP130 and RFdiffusion can now target intrinsically disordered regions of proteins (IDRs)</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=XKWR7V22))







#idr
#pepprclip




<span style="color:
#FFF176;">
underlying design concept is induced fit—in contrast to folded targets, IDRs and peptides can be induced to adopt conformations that are particularly conducive to binding</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=583AZIMH))





Induced fit method.





<span style="color:
#FFF176;">
Designed binders to the oncogenes β-catenin and SS18–SSX1 can act as affinity handles for target degradation</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=UIMA4H4U))





Cancer-driving proteins can now be targeted to send a versatile attacher (affinity handle) that we design, onto which anything can be sent, for example a degrader.


#affinity-handle
#beta-catenin
#ss18-ssx1




<span style="color:
#FFF176;">
Designed binders to segments of β-amyloid and tau—proteins that drive neurodegeneration-associated amyloids—potently suppress amyloid formation and have potential therapeutic use</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=SFY3CIDN))





The binding itself is therapeutic.


#beta-amyloid
#tau-protein




<span style="color:
#FFF176;">
proteomics</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=UNB8U3LI))





Study of proteins in the biological system.





<span style="color:
#FFF176;">
combination of Rosetta, RFdiffusion and ProteinMPNN have led to the design of experimentally validated binders to over 200 protein targets</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=KMXID4YC))










<span style="color:
#FFF176;">
design of protein binders is approaching being a solved problem</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=ICG45L3Q))










### Combatting viruses










<span style="color:
#FFF176;">
Small stable proteins have been designed to bind to and neutralize influenza137–139, SARS-CoV-2130,140,141, MERS-CoV142, the henipaviruses Nipah and Hendra, andrespiratory syncytial virus</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=RDNJPKE2))










<span style="color:
#FFF176;">
designed binders block viral infection with a potency comparable to or greater than antibodies, particularly after oligomerization to match the oligomerization state of the target viral glycoproteins142,144,145, which also makes them more resistant to escape mutations</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=N5JQTHZV))





Oligomerization: multiple protein subunits (each can itself be a polymer of amino acids) forming a complex

Glycoprotein: protein + contently attached carbohydrate group.


#glycoproteins
#oligomerization




<span style="color:
#FFF176;">
prophylactic protection</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=6APFL4EZ))





preventive.





<span style="color:
#FFF176;">
In this area, the main challenge is not design methodology or even early-stage characterization of efficacy but, instead, the later-stage problem of how to advance this new modality into the clinic</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=6R86ENH6))










### Neutralizing toxins










<span style="color:
#FFF176;">
Small stable proteins have been designed to neutralize the botulinum neurotoxin B137, Clostridioides difficile toxin B148,149, the Paeniclost ridium sordellii lethal toxin TcsL150 and the major components of snake venom</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=QGJICT4L))










### Receptor antagonists and agonists










<span style="color:
#FFF176;">
Small stable proteins have been designed against a wide array of receptor tyrosine kinase extracellular domains</span>
([8](zotero://open-pdf/library/items/BEECIBQ5?page=8&annotation=UPMYTG9F))










<span style="color:
#FFF176;">
For cancer immunotherapy, binders have been designed against peptide-MHCs153, which can be cancer neo-epitopes154, cytokine receptor subunits, immune checkpoint proteins such as PD-1, PD-L1 and CTLA-4155,156 that potently modulate immune cell signalling, and targets upregulated in cancer such as HER2.</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=28LHY44U))





MHC: Major Histocompatibility Complex, protein on a cell surface that displays peptide fragments to immune systems

epitope: molecular feature recognized by an immune receptor

cytokine: signalling protein heavily used by immune system

immune checkpoint: regulatory pathway that controls how much immune cells activate

PD-1: checkpoint receptor found on immune cells like T cell

PD-L1: ligand of PD-1

CTLA-4: another immune checkpoint receptor that restrains T cell activation

HER2: cell-surface growth-signalling receptor. upregulated in certain cancers.





<span style="color:
#FFF176;">
IL-2 analogues have advanced into human clinical trials</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=DB2AB8RF))










<span style="color:
#FFF176;">
FGF</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=946CXN7C))





Fibroblast Growth Factor


#fgf




<span style="color:
#FFF176;">
The primary challenge here is not how to design binders to individual receptor subunits, but how to choose which pairs (or triplets) of receptors to bring together using this approach</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=TWMMJ5ND))










<span style="color:
#FFF176;">
potential use in adoptive cell therapies such as chimeric antigen receptor (CAR) T cells</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=2VGM5S2V))










### Trafficking and degradation










<span style="color:
#FFF176;">
Designed proteins that bind to receptors that are endocytosed or transcytosed provide access to new therapeutic modalities for intracellular delivery and protein degradation</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=3JYEGW2Y))





Endocytocis: Cell pulls in whats on the receptor

Transcytosis: Same, but released out on the other side of cell


#endocytosis
#transcytosis




<span style="color:
#FFF176;">
cross ex vivo blood–brain barrier models, and fusions could enable transport of binders to therapeutic targets in the brain</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=ARFL7XAE))










<span style="color:
#FFF176;">
IGF2R</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=X5FEY6RL))





Insulin-like Growth Factor 2 Receptor

Broadly expressed.





<span style="color:
#FFF176;">
sortilin</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=HQFK45NI))





Sortilin Receptor

Brain, liver, muscles etc.





<span style="color:
#FFF176;">
ASGPR</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=JD366ZQH))





Asialoglycoprotein Receptor

Liver.





<span style="color:
#FFF176;">
lysosomal trafficking stimulated designs are called EndoTags</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=XNB9JTBI))







#endotags




<span style="color:
#FFF176;">
PepPrCLIP130 have successfully designed binders to various oncogenic proteins and attached E3 ubiquitin ligases to these binders for target protein degradation</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=2Q75NQYH))










### Small-molecule binders and sensors










<span style="color:
#FFF176;">
De novo protein design can target small-molecule drugs, probes and metabolites, with applications ranging from invivo reporters to diagnostics</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=LUHSXIX3))










<span style="color:
#FFF176;">
development of robust de novo protein scaffolds has enabled the design of binders for small molecules with diverse chemical properties</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=29YKTNPP))










<span style="color:
#FFF176;">
Binders to therapeutics such as the heart disease drug digoxigenin and methotrexate have been designed and have potential as therapeutic sponges and sensors for monitoring drug levels</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=S7Y35X5R))







#digoxigenin
#methotrexate




<span style="color:
#FFF176;">
Designs against drugs of abuse such as fentanyl have been converted into  plant-based sensors by coupling binding to stabilization</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=DEM7M5E6))










<span style="color:
#FFF176;">
chemically induced dimerization (CID) sensors by designing a second protein that interacts with the small-molecule–protein complex</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=IHK7NXL5))





When the drug molecule is present, the protein 1 and protein 2 can assemble.


#cid




<span style="color:
#FFF176;">
Design of shape-complementary pseudocyclic scaffolds has enabled binding to polar and flexible compounds that have been incorporated into gated designed nanopores</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=R9UU7RVP))





Gated nanopore: Now the nanopore opening and closing can be controlled.





<span style="color:
#FFF176;">
For orthogonal control of cell signalling186–188, CID systems172,181,189–192 have been designed that are triggered by clinically approved antiviral drugs or designed cyclic peptides</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=WDQPYFBU))





Assign a molecule a new biological meaning.

Even though a drug normally doesn't control some signalling pathway of a cell, CIDs enable an artificial input channel for that drug to independently triggers a chosen response with the cell existing input channels.





### Enzymes










<span style="color:
#FFF176;">
The design of high-activity enzyme catalysts has been a long-standing goal of de novo protein design</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=JR5XDH5C))










<span style="color:
#FFF176;">
Catalysts were generated193 for model chemical reactions such as retro-aldol194 and Kemp elimination195,196 using this approach, but the activities were low and considerable directed evolution was required to approach the much higher activity levels of typical native enzymes</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=KX7XFXU8))





Aldol: ALDehyde + alcohOL

Retro-aldol: breaking a carbon carbon bond in an aldol-type molecule

Kemp elimination: ring opening of benzisoxazole by removing a proton (H+)


#kemp-elimination
#retro-aldol




<span style="color:
#FFF176;">
general lack of atomic-level control over functional group placement</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=XUDTJ4I6))










<span style="color:
#FFF176;">
ML-generated scaffolds enabled the de novo design of high-activity luciferases</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=S6NBR67L))





luciferin + o2 -> light + product

The enzyme is luciferase.

Bioluminescence is useful because we can directly study photons to understand the reaction.


#luciferase




<span style="color:
#FFF176;">
RFdiffusion2 now enable the direct construction of custom scaffolds to house any desired catalytic site</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=GJ3BGRIX))










<span style="color:
#FFF176;">
Selection for preorganization of the active-site residues in catalytically competent conformations at each step in a reaction mechanism using an activesite ensemble-generating deep-learning method called PLACER205 considerably increased the design success rates for serine hydrolases</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=63LVIIHX))





Serine is one of the 20 amino acids

Ser-O-Substrate + H2O -> Ser-OH + products


#placer
#serine




<span style="color:
#FFF176;">
RFdiffusion buildup approach enables exploration of active site composition and geometries</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=UTITVHRL))










<span style="color:
#FFF176;">
Cofactors such as haem can be incorporated into de novo designs by constructing appropriate binding pockets14,208,209; extension to unnatural cofactors should considerably expand the range of chemistries accessible to catalysis</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=3GP48VVJ))





Cofactor: a non-protein molecule/ion that an enzyme uses to perform chemistry that amino acids can't do.





<span style="color:
#FFF176;">
catalytic side-chain functional groups (called atomic motifs)</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=DDE9XJ7Y))










<span style="color:
#FFF176;">
RFdiffusion2 enables direct structure generation around a set of atomic motif guideposts that specify the active-site geometry in a sequence agnostic manner</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=6LLS67LT))










<span style="color:
#FFF176;">
design of metallohydrolases with much higher activities (kcat/KM &gt; 104 M−1 s−1)</span>
([9](zotero://open-pdf/library/items/BEECIBQ5?page=9&annotation=5K5ZCD85))










<span style="color:
#FFF176;">
computational enzyme design will move beyond model chemical reactions to generate catalysts to solve outstanding current challenges in sustainability and biomanufacturing</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=37UJKCN2))










### Outlook










<span style="color:
#FFF176;">
For affinity reagent and therapeutic antibody generation, classic techniques such as animal immunization and random library selection will likelybe supplanted by computational design, which is faster, cheaper and more precise</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=APMG3K3L))










<span style="color:
#BA68C8;">
In enzyme engineering, in which the current strategies rely on bioprospecting or directed evolution, de novo design enables the construction of custom active sites for new reactions and seamless incorporation of both natural and non-natural cofactors, but methodological improvements are still required to achieve high activities on less activated substrates</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=8L3VXYRC))










<span style="color:
#FFF176;">
In genome regulation, new methods for designing protein–nucleic acid interactions are opening avenues for next-generation gene therapy and control.</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=Q69X674C))










<span style="color:
#BA68C8;">
Current technologies rely primarily on engineering natural systems, such as zinc fingers215, transcription activator-like effectors216 and CRISPR–Cas217, which are constrained by the fixed geometry of their native scaffolds218. More compact, customizable DNA-binding proteins with enhanced modularity and deliverability can now be designed using Rosetta and RFdiffusion approaches</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=G8J5MYCY))







#crispr-cas
#zinc-fingers




<span style="color:
#BA68C8;">
Beyond DNA, RFdiffusion has been generalized to RNA and protein-RNA 3D structure design (Fig. 4a (right)); progress in this area could lead to new protein–RNA functional assemblies, expanding the frontier of synthetic biology</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=BNHC5LAP))










<span style="color:
#FFF176;">
Recent advances in binding and catalytic protein design now bring dynamic, multistate systems within reach, enabling transistor-like logic operations and providing building blocks for increasingly sophisticated molecular machines</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=AFS48N28))










<span style="color:
#BA68C8;">
LOCKR system integrates binding inputs into outputs such as bioluminescence220,221, fluorescence221,222, degradation223 or relocalization223, and can perform Boolean logic to direct CAR T cells to target specific surface marker combinations</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=5DATMFKE))










<span style="color:
#FFF176;">
hinge-like protein switches have been designed with two well-defined states toggled by an effector such as a peptide227 or calcium ion228. By coupling these hinges with reversible interaction modules, allosteric assemblies have been designed in which effector binding at a distant allosteric site changes the oligomeric state, leading to effector binding cooperativity</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=IGIRZRZC))










<span style="color:
#BA68C8;">
Mechanically constrained nanoscale architectures with internal degrees of freedom79, such as microscopic axles and rotors, have been designed; rather than locking into a single orientation, these self-assemble into rotary devices (Fig. 4b (top right)). Such mechanical coupling is a hallmark of machines and paves the way for nanoscale devices powered by solar energy or chemical fuels</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=TLPXDF5U))










<span style="color:
#BA68C8;">
By creating de novo protein scaffolds that precisely interact with inorganic surfaces or lattice structures231, it is possible to guide nucleation and growth; for example, programming calcite formation from calcium  carbonate for CO2 fixation232, and templating zinc oxide nucleation for semiconductor biosynthesis</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=WC6YTRWL))










<span style="color:
#BA68C8;">
protein design has no such limitation and could enable bottom-up generation of new semiconductors and materials, complementing current top-down manufacturing methods</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=M5X4F27X))










<span style="color:
#FFF176;">
In renewable energy, protein design could accelerate breakthroughs in high-efficiency photosynthesis for faster-growing food crops, renewable solar fuel nitrogen fixation</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=HK34VCK4))










<span style="color:
#BA68C8;">
By designing simpler yet robust analogues of complex photosynthetic systems, it should become possible to incorporate near-infrared light into oxygenic photosynthesis234,235, recreate the chlorophyll special pair at the reaction centre236 and self-assemble multinuclear metal clusters to facilitate multielectron reactions like water oxidation. Orchestrating these energyand electron-transfer events could lead to new efficient, light-driven chemical processes, potentially surpassing natural photosynthesis in productivity</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=5735V8JA))










<span style="color:
#BA68C8;">
Immunogenicity remains a key concern in therapeutic applications: while initial data indicate that many denovo proteins elicit relatively low immune responses, perhaps due to their high stability and solubility, further work is needed to minimize T cell epitopes and rigorously evaluate immunogenicity</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=YNN9C9MC))










<span style="color:
#BA68C8;">
Large-scale protein manufacturing can also be a challenge, particularly for non-medical applications requiring bulk protein production</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=P4T4J8MN))










<span style="color:
#BA68C8;">
As design efforts move beyond binding and enzymatic functions, new experimental assays and high-throughput screening will be critical for evaluating newly emerging activities</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=PF45CBBP))










<span style="color:
#BA68C8;">
the ease of sequence redesign raises questions regarding intellectual property within an evolving patent landscape</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=JTFLRHYB))










<span style="color:
#FFF176;">
the fundamental challenges of designing new structures, assemblies and binding proteins are largely solved, and considerable progress is being made on catalysis, albeit still primarily for lower-energy-barrier reactions</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=X9RILKQ3))










<span style="color:
#BA68C8;">
Now that folding, assembly, binding and catalytic modalities are accessible to de novo protein design, the next frontiers involve more sophisticated functionality that combines two or more of these modalities</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=Z5T2PM6Y))










<span style="color:
#FFF176;">
The coming decade promises to be an exciting era of innovation as de novo protein design tackles major outstanding problems facing humanity and matures into a foundational tool across medicine, sustainability and biotechnology</span>
([10](zotero://open-pdf/library/items/BEECIBQ5?page=10&annotation=ZL46W6GW))










