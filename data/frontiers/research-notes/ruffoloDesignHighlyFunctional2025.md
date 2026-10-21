---
published: "2025-09-01"
added: "2026-10-11"
modified: "2026-10-21"
authors: Jeffrey A. Ruffolo, Stephen Nayfach, Joseph Gallagher, Aadyot Bhatnagar, Joel Beazer, Riffat Hussain, Jordan Russ, Jennifer Yip, Emily Hill, Martin Pacesa, Alexander J. Meeske, Peter Cameron, Ali Madani
abstract: "Gene editing has the potential to solve fundamental challenges in agriculture, biotechnology and human health. CRISPR-based gene editors derived from microorganisms, although powerful, often show notable functional tradeoffs when ported into non-native environments, such as human cells1. Artificial-intelligence-enabled design provides a powerful alternative with the potential to bypass evolutionary constraints and generate editors with optimal properties. Here, using large language models2 trained on biological diversity at scale, we demonstrate successful precision editing of the human genome with a programmable gene editor designed with artificial intelligence. To achieve this goal, we curated a dataset of more than 1 million CRISPR operons through systematic mining of 26 terabases of assembled genomes and metagenomes. We demonstrate the capacity of our models by generating 4.8× the number of protein clusters across CRISPR–Cas families found in nature and tailoring single-guide RNA sequences for Cas9-like effector proteins. Several of the generated gene editors show comparable or improved activity and specificity relative to SpCas9, the prototypical gene editing effector, while being 400 mutations away in sequence. Finally, we demonstrate that an artificial-intelligence-generated gene editor, denoted as OpenCRISPR-1, exhibits compatibility with base editing. We release OpenCRISPR-1 to facilitate broad, ethical use across research and commercial applications."
---

# Design of highly functional genome editors by modelling CRISPR–Cas sequences

[URL](https://www.nature.com/articles/s41586-025-09298-z)

## Tags


## Notes

<span style="color:
#FFF176;">
CRISPR-based gene editors derived from microorganisms, although powerful, often show notable functional tradeoffs when ported into non-native environments, such as human cells</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=R4ABZT84))










<span style="color:
#FFF176;">
we demonstrate successful precision editing of the human genome with a programmable gene editor designed with artificial intelligence</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=A525MCQ4))










<span style="color:
#FFF176;">
1 million CRISPR operons</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=NBPN97X4))





Operon: genetic module containing multiple genes. This is primarily in bacteria and not humans.

Base (A, T, G, C) 

-> 

Nucleotide (Base + Sugar + Phosphate) 

-> 

Codon (3 Nucleotides specifying any of the 20 amino acids or STOP) 

-> 

Gene (Bunch of codons for protein coding genes, or simply one short segment of DNA sequence for a functional RNA)

-> 

Operon (Bacteria Specific) (One segments of DNA sequence, multiple genes transcribed together)

-> 

Chromosome (One continuous double-strand DNA packaged with proteins)

-> 

Cell Nucleus (For Humans: 46 Chromosomes, 23 from mom and 23 from pop)


#operon




<span style="color:
#FFF176;">
26 terabases of assembled genomes and metagenomes</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=QNP2KLSN))





Terabase: 1 Trillion Basepairs

26 trillion * 2 bits = 52 trillion bits

52 trillion bits / 8 bits per byte = 6.5 terabyte

A, T, G, C are bases

A-T is a basepair
G-C is a basepair





<span style="color:
#FFF176;">
4.8× the number of protein clusters across CRISPR–Cas families found in nature and tailoring single-guide RNA sequences</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=Z457KGVL))





sgRNA is an engineered RNA molecule that directs Cas9 protein to a specific DNA location.

sgRNA has 2 parts:

1. Guide Sequence: Recognize target DNA, through complementary base pairing

2. Scaffold: Folds into a 3D structure to help Cas9 do its function on DNA


#sgRNA




<span style="color:
#FFF176;">
improved activity and specificity relative to SpCas9, the prototypical gene editing effector, while being 400 mutations away in sequence</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=QI7T3LV6))





SpCas9: Widely used Cas9 protein from Streptococcus pyogenes.

SpCas9 contains 1368 amino acids.

A difference of:

400/1368 * 100
= 29%


#SpCas9




<span style="color:
#FFF176;">
OpenCRISPR-1, exhibits compatibility with base editing</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=KJG95SYR))





Base editing: Chemically change the base instead of breaking the double strand.

Adenine Base Editor (ABE): converts A-T to G-C

- A to I (inosine).
- Cell repairs I-T to G-C.

Cytosine Base Editor (CBE): converts G-C to A-T

- C to U (uracil).
- Cell repairs G-U to A-T.





<span style="color:
#FFF176;">
prokaryotic CRISPR–Cas systems</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=Z6JV5MGM))





CRISPR: Clustered Regularly Interspaced Short Palindromic Repeats


#CRISPR-Cas




<span style="color:
#FFF176;">
Cas9 nuclease from Streptococcus pyogenes (SpCas9), have been used in biotechnology owing to their simplicity, robustness and compact form</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=Y5DY7GHJ))










<span style="color:
#FFF176;">
exhibit tradeoffs in critical attributes such as basal activity in target cells, protospacer-adjacent motif (PAM) selectivity, thermal optima or in vitro biochemical properties</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=4ZJQLNGQ))





PAM: A short DNA sequence adjacent to the target.

PAM recognition is a property of Cas9.


#PAM




<span style="color:
#FFF176;">
protein engineering approaches, including directed evolution and structure-guided mutagenesis</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=WZDPB9DP))










<span style="color:
#FFF176;">
Directed evolution of CRISPR–Cas proteins has proven extremely powerful yet can be limited by the rugged and non-convex nature of the fitness landscapes</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=C8YWAS4W))







#directed-evolution




<span style="color:
#FFF176;">
Structure-guided rational mutagenesis offers an alternative or synergistic approach that has proven successful for improving Cas9 basal activity and specificity in human cells</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=HL92C4NJ))







#structure-guided-mutagenesis




<span style="color:
#FFF176;">
both of these approaches depend on explicit structural hypotheses, either in the form of mechanistic understanding for rational mutagenesis or structures representing key functional states for computational design</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=NBLVQHTL))










<span style="color:
#FFF176;">
Protein language models eschew explicit structural hypotheses and instead learn the co-evolutionary blueprint underlying protein function</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=LRBZZVPS))





Very strong statement. We don't exactly know what is being learnt nor there was ever a blueprint to learn.





<span style="color:
#FFF176;">
Compared to protein LMs, these family-specific models are less computationally expensive to train but are typically restricted to pairwise coupling terms (limiting their expressiveness) and do not leverage sequences from other protein families</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=N7W2XCXS))





Pairwise interaction between amino acids in a sequence.





<span style="color:
#FFF176;">
LMs can effectively generate diverse CRISPR–Cas proteins spanning a broad set of families</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=BGYL2GH9))










<span style="color:
#FFF176;">
generated type II effector proteins can assemble as functional gene editors in human cells, despite being hundreds of mutations away from any known natural protein</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=VFTFHVC6))










<span style="color:
#FFF176;">
one exemplar editor, which we denote OpenCRISPR-1</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=TKJXAJGI))










### LMs generate diverse CRISPR–Cas proteins










<span style="color:
#FFF176;">
phylogenies</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=BF553R4N))





Representation of evolutionary relationships between organisms, genes or proteins.





<span style="color:
#FFF176;">
for specific applications, such as the generation of gene editors, it is necessary to steer generation towards particular subsets of protein families of interest</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=UWUCVTPF))










<span style="color:
#FFF176;">
data mining to construct a dataset of curated CRISPR operons, including Cas proteins, CRISPR arrays, trans-activating CRISPR RNAs (tracrRNAs) and PAMs (Extended Data Fig. 1). We refer to this resource as the CRISPR–Cas Atlas</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=WGLAZED8))





Protein sequences as well as the operons that encode for them.





<span style="color:
#FFF176;">
26.2 terabases of assembled microbial genomes and metagenomes</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=WCGETHZR))





The encoding.





<span style="color:
#FFF176;">
1,246,088 CRISPR–Cas operons</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=F96P9TGI))










<span style="color:
#FFF176;">
389,000 single-effector systems classified as type II, type V or type VI</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=6FQ3YKRW))










<span style="color:
#FFF176;">
resource displayed expanded natural diversity compared to curated databases such as CRISPRCasDB and CasPDB (Extended Data Fig.1e), as well as UniProt, the world’s largest protein resource</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=D3G9N7KQ))







#CasPDB
#CRISPRCasDB




<span style="color:
#FFF176;">
CRISPR–Cas Atlas has on average 2.7× more protein clusters than UniProt using a 70% sequence identity (%ID)</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=8NANA2NK))





UniProt: Database of protein sequences and annotations.


#UniProt




<span style="color:
#FFF176;">
greater expansions for families such as Cas9 (4.1×), Cas12a (6.7×) and Cas13 (7.1×)</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=IFQ85IJK))










<span style="color:
#FFF176;">
fine-tuned the ProGen2-base LM2 on the CRISPR–Cas Atlas</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=ZZGMNM7M))







#ProGen2




<span style="color:
#FFF176;">
generated 4 million sequences</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=AWWCFZZM))











![research-notes/images/ruffoloDesignHighlyFunctional2025/image-2-x38-y336.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-2-x38-y336.png)

Clustering at 70% sequence identity prevents near duplicate proteins from inflating the diversity count.

- CRISPR-Cas Atlas contains 5M sequence yet many are similar enough to collapse into sub 20x10^3 with 70% Identity.

- Generated sequences though contains lesser sequences (1.2M + 0.8M) shows lot of clusters with bigger stacks on y axis showing more diversity.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-2-x38-y539.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-2-x38-y539.png)

UniRef: UniProt Reference Clusters

- UniRef100: Identical sequences clustered together

- UniRef90: Sequences clustered at approx 90% identity

- UniRef50: Sequences clustered at approx 50% identity

BFD: Big Fantastic Database

- Collection of protein sequences

CRISPR-Cas Atlas

- Dataset containing sequences associated with CRISPR-Cas Systems (operon and cas protein)

Types based on effector proteins:

- Type 1: Cascade + Cas3
- Type 2: Cas9
- Type 3: Cas10-containing complex
- Type 5: Cas12
- Type6: Cas13

gRNA: guide RNA

- In Type 2 systems, crRNA + tracrRNA

crRNA (CRISPR RNA)

- contains a sequence that identifies the target DNA

tracrRNA (trans-activating CRISPR RNA)

- helps process precursor crRNA to mature crRNA and forms an RNA structure that helps Cas9 assemble into active complex.

In engineered systems, these are fused into a single-guide RNA (sgRNA)


#BFD
#CRISPR-Cas-Atlas
#crRNA
#gRNA
#tracrRNA
#UniRef





![research-notes/images/ruffoloDesignHighlyFunctional2025/image-2-x392-y336.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-2-x392-y336.png)

Authors are borrowing AF2 credibility. Reasonable thesis generation, and nothing more to be said concretely about ProGen2 or AF2 or generations.

Each dot is a generated protein sequence.

X Axis: Generated sequence %ID with natural sequences from the Atlas.

Note that generated sequences with very low %ID from natural sequences at times show very high AF2 confidence about local structural prediction.





<span style="color:
#FFF176;">
pLDDT</span>
([2](zotero://open-pdf/library/items/NQ2XVX9U?page=2&annotation=GPIEG6GK))





pLDDT: predicted Local Distance Difference Test


#pLDDT




<span style="color:
#FFF176;">
other half were prompted with up to 50 residues from the N or C terminus of a natural protein to guide generation towards a particular family (conditional)</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=SXLDEIY8))










<span style="color:
#FFF176;">
strict filtering and sequence clustering</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=BE5HEGEU))










<span style="color:
#FFF176;">
generated sequences represented a 4.8-fold expansion of diversity compared to natural proteins from the CRISPR–Cas Atlas</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=KJMF7AAL))





Diversity, not n.





<span style="color:
#FFF176;">
rate of new cluster generation for generated sequences significantly outpaced that of natural sequences</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=ZCFV676G))










<span style="color:
#FFF176;">
generated sequences displayed similar levels of chimerism, indicating that LMs produce sequences with novelty akin to that of evolution</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=CYZP454K))





Chimerism here means how much the protein sequence resembles a patchwork of different natural proteins.

They are claiming the patchwork by their model resembles that of evolution itself.





<span style="color:
#FFF176;">
generated proteins were confidently predicted by AlphaFold2, with 81.65% of structures having a mean predicted local-distance difference test (pLDDT) above 80</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=8765KULT))





Gives a good hypothesis to start experimental testing.





<span style="color:
#FFF176;">
For a small number of sequences, we observed high similarity to natural proteins in the CRISPR–Cas Atlas but low structure prediction confidence, owing to limited homology in the ColabFold sequence database used for predictions</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=HEBJSJIM))





ColabFold is a structure prediction pipeline built around AF2.

ColabFold Pipeline:

MMseqs2: search for protein sequences related to input

Sequence database: Collection of proteins search

AF2: Predicts 3D structure using the resulting sequence information


#ColabFold
#homology




<span style="color:
#FFF176;">
adopt folds highly similar to natural proteins from the same family (Extended Data Fig.3), indicating they may be functional</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=EEB5KG5X))










