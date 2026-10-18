---
published: "2025-09-01"
added: "2026-10-11"
modified: "2026-10-18"
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





Operon: genetic module containing multiple genes.


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










