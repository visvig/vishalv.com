---
published: "2025-09-01"
added: "2026-10-11"
modified: "2026-10-13"
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


#sgrna




<span style="color:
#FFF176;">
improved activity and specificity relative to SpCas9, the prototypical gene editing effector, while being 400 mutations away in sequence</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=QI7T3LV6))





SpCas9: Widely used Cas9 protein from Streptococcus pyogenes.

SpCas9 contains 1368 amino acids.

A difference of:

400/1568 * 100
= 29%


#spcas9




<span style="color:
#FFF176;">
OpenCRISPR-1, exhibits compatibility with base editing</span>
([1](zotero://open-pdf/library/items/NQ2XVX9U?page=1&annotation=KJG95SYR))










