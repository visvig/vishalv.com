---
published: "2025-09-01"
added: "2026-10-11"
modified: "2026-11-20"
authors: Jeffrey A. Ruffolo, Stephen Nayfach, Joseph Gallagher, Aadyot Bhatnagar, Joel Beazer, Riffat Hussain, Jordan Russ, Jennifer Yip, Emily Hill, Martin Pacesa, Alexander J. Meeske, Peter Cameron, Ali Madani
abstract: "Gene editing has the potential to solve fundamental challenges in agriculture, biotechnology and human health. CRISPR-based gene editors derived from microorganisms, although powerful, often show notable functional tradeoffs when ported into non-native environments, such as human cells1. Artificial-intelligence-enabled design provides a powerful alternative with the potential to bypass evolutionary constraints and generate editors with optimal properties. Here, using large language models2 trained on biological diversity at scale, we demonstrate successful precision editing of the human genome with a programmable gene editor designed with artificial intelligence. To achieve this goal, we curated a dataset of more than 1 million CRISPR operons through systematic mining of 26 terabases of assembled genomes and metagenomes. We demonstrate the capacity of our models by generating 4.8× the number of protein clusters across CRISPR–Cas families found in nature and tailoring single-guide RNA sequences for Cas9-like effector proteins. Several of the generated gene editors show comparable or improved activity and specificity relative to SpCas9, the prototypical gene editing effector, while being 400 mutations away in sequence. Finally, we demonstrate that an artificial-intelligence-generated gene editor, denoted as OpenCRISPR-1, exhibits compatibility with base editing. We release OpenCRISPR-1 to facilitate broad, ethical use across research and commercial applications."
---

# Design of highly functional genome editors by modelling CRISPR–Cas sequences

[URL](https://www.nature.com/articles/s41586-025-09298-z)

## Tags
#✅


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





Cas9: A family of RNA-guided DNA-cutting enzymes found in different microorganisms.

SpCas9: One particular ortholog. Widely used Cas9 protein from Streptococcus pyogenes.

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


#base-editing
#inosine




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







#CRISPRCasDB
#CasPDB




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


#UniRef
#BFD
#CRISPR-Cas-Atlas
#gRNA
#crRNA
#tracrRNA





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





any* natural protein.

811232/2M is 40.6% which is aggregate rate across families.





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


#homology
#ColabFold




<span style="color:
#FFF176;">
adopt folds highly similar to natural proteins from the same family (Extended Data Fig.3), indicating they may be functional</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=EEB5KG5X))





Just because it folds similar, doesn't mean it does something useful like its natural counterpart, because the chemistry is changed at the interaction site.





### LMs generate diverse type II effectors










<span style="color:
#FFF176;">
To generate new Cas9-like sequences, we prompted the CRISPR–Cas model with 50 residues from the N or C terminus of Cas9s sampled from the CRISPRCas Atlas</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=CKVYMG9Y))





Cas9 protein population only, unlike the previous conditional generation.





<span style="color:
#FFF176;">
27.6% of these prompted generations survived our strict sequence viability filters</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=NM3F6L5B))





As compared to the 40.6% aggregate over all families.





<span style="color:
#FFF176;">
fine-tuned another LM using only the 238,913 Cas9 sequences from the CRISPR–Cas Atlas</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=KAIFN7DC))





Off the 5100022 total, only 238913 are Cas9 family. 

Only 4.68% of the Atlas is Cas9 family.





<span style="color:
#FFF176;">
This model produced viable Cas9-like sequences at twice the rate of the CRISPR–Cas model (54.2%; Supplementary Fig. 3a) and did not require any prompting</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=E6UAEWQ3))





Perhaps better prompt (understanding) of Cas9 itself would have worked, and no need for finetuning.





<span style="color:
#FFF176;">
used the Cas9 model to generate 1 million Cas9 proteins</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=CDFMMLQN))










<span style="color:
#FFF176;">
maximum-likelihood phylogenetic tree</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=3ZFT886N))





Types:

- maximum-likelihood
- parsimony
- bayesian
- minimum evolution


#phylogenetic-tree




<span style="color:
#FFF176;">
generated proteins, which made up 94.1% of the total phylogenetic diversity</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=L8METTNB))





Total green branch length / Total tree branch length * 100





<span style="color:
#FFF176;">
10.3-fold increase in diversity relative to the entire CRISPR–Cas Atlas</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=M7EFZCHZ))










<span style="color:
#FFF176;">
Generated sequences diverged from the CRISPR–Cas Atlas, with an average identity of only 56.8% to any natural sequence</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=G8WU96QX))










<span style="color:
#FFF176;">
himeric novelty produced by the LM was similar in form to what would be expected from discovery of new natural Cas9s</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=98NHJRXI))










<span style="color:
#FFF176;">
Cas9 orthologues that have been biochemically characterized7 or used as genome editors</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=U278EZ83))





ortholog: a gene or protein in different species that evolved from a common ancestral gene via speciation event.


#ortholog
#speciation




<span style="color:
#FFF176;">
apable of generating proteins with a variety of functional properties</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=CNZDC87G))










<span style="color:
#FFF176;">
generated sequences closely matched the length of natural proteins from the same protein cluster, with a Pearson correlation of 0.97</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=3TA5SET9))










<span style="color:
#FFF176;">
AlphaFold2 (ref. 30) to predict the structures of 5,000 generated and 5,000 natural sequences, with one sequence each being selected randomly from the largest 70%ID protein clusters among each group. Most structures were predicted confidently (with 99.4% having mean pLDDT above 80), including for Cas9-like proteins with as low as 60%ID to any natural protein</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=R4RQB74Q))





AF2 hypothesis.





<span style="color:
#FFF176;">
SCOPe database</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=F8SBWVI6))





Structural Classification of Proteins extended.


#SCOPe




<span style="color:
#FFF176;">
presence of core Cas9 domains in most generated proteins and at a similar rate as naturals</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=EV9TUWDJ))





Domain: a distinct structural and functional unit of a protein, often folds independently of the rest of the protein.

Cas9 Domains:

- PI recognizes a compatible PAM
- REC helps stabilize pairing between sgRNA and target DNA
- HNH cuts matching strand of DNA with sgRNA
- RuvC cuts the strand opposite to matching strand


#Cas9-domain
#HNH
#PI
#REC
#RuvC




<span style="color:
#FFF176;">
HNH and RuvC nuclease domains (100% and 52.1%</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=TMJ58L8P))










<span style="color:
#FFF176;">
PAM-interacting domain (PID; 92.9%)</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=4K9A4CXL))










<span style="color:
#FFF176;">
target recognition (REC) lobe (99.9%)</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=FP2CFNKF))










<span style="color:
#FFF176;">
a predicted structure resembling Nme1Cas9 (template modelling score 0.71) despite sharing only 25.8%ID to Nme1Cas9 and a maximum of 39.2%ID to any protein in the CRISPR–Cas Atlas</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=MI55QVQB))










<span style="color:
#FFF176;">
gRNA is composed of a targeting RNA sequence (spacer), CRISPR RNA (crRNA) repeat and tracrRNA</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=FSQSUII2))





gRNA = crRNA + tracrRNA

crRNA = spacer + CRISPR RNA repeat

spacer: the targeting sequence that base pairs with DNA

CRISPR repeat: a sequence that pairs with tracrRNA

tracrRNA: helps form the RNA structure recognized by Cas9





<span style="color:
#FFF176;">
spacer sequence is programmed to match the target DNA site for gene editing applications</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=ELYGKGQ7))










<span style="color:
#FFF176;">
train a sequence-to-sequence gRNA model that conditionally generates crRNA and tracrRNA sequences for a given protein</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=ZPVMPBWU))










<span style="color:
#FFF176;">
designed gRNAs, as well as the natural gRNAs from metagenome mining, were formatted into single-guide RNAs (sgRNAs) and embedded according to their pairwise edit distances with t-distributed stochastic neighbour embedding</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=Y3XYX88K))





edit distance: minimum number of insertions, deletions or substitutions needed to transform one to another.


#t-SNE




<span style="color:
#FFF176;">
crRNA:tracrRNA pairs often formed the canonical duplex</span>
([3](zotero://open-pdf/library/items/NQ2XVX9U?page=3&annotation=Y6CH68ME))










<span style="color:
#FFF176;">
model can be used to generate functional sgRNAs for generated Cas9-like proteins</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=5B6W33RM))










### Designed editors function in human cells










<span style="color:
#FFF176;">
LM fine-tuned on Cas9 proteins using either the N-terminal segment or the C-terminal PID of SpCas9</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=R6SVR4NJ))





PID: PAM Interacting (PI) Domain

N-terminal segment here is everything non-PID.

Deliberately include only PI domain from the C-terminal to show some useful function in human cells. 

No other domains are there between PI and C-terminal.

N-terminal is 1099 amino acids
C-terminal is 269 amino acids





<span style="color:
#FFF176;">
generated 200,000 and 150,000 Cas9-like proteins prompted by the N-terminal segments and C-terminal PIDs</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=BLNK9FSJ))





200,000 is the source of generated PIDs

150,000 is the source of generated non-PIDs





<span style="color:
#FFF176;">
selected 82 SpCas9 PID-conditioned sequences</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=PQDUXPSB))





82 from the 150,000 generated non-PIDs





<span style="color:
#FFF176;">
127 fully generated sequences, created by combining our generated N-terminal segments and PID domains, on the basis of an average of pretrained and Cas9-fine-tuned LM log likelihoods and auxiliary predictors of compatibility with SpCas9’s PAM and tracrRNA</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=QGKCT47P))





Using the combined pool of 200,000 generated PIDs and 150,000 generated non-PIDs.

127 was combined using some compatibility metrics:

- log likelihoods from pretrained model
- "auxiliary predictors"





<span style="color:
#FFF176;">
selected 209 Cas9-like proteins for subsequent functional analysis in human cells</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=IFKNH8XI))










<span style="color:
#FFF176;">
cotransfecting HEK293T cells with nuclease plasmids and SpCas9 sgRNA plasmids, targeting one of three previously characterized  target sites and inferred DNA repair outcomes after three days using a Sanger-sequencing-based method</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=I2H6FT75))





nuclease plasmid: DNA encoding for generated Cas9


SpCas9 sgRNA plasmid: DNA encoding for SpCas9 sgRNA


#sanger-sequencing




<span style="color:
#FFF176;">
subset of Cas9-like proteins showing activity on par with or higher than SpCas9</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=4SM8VNPW))





Comparing the generated Cas9s only with SpCas9's functions.





<span style="color:
#FFF176;">
selected 48 Cas9-like proteins that were fully generated (both N- and C-terminal domains), displayed moderate or high insertion and deletion (indel) rates across one or more sites and were substantially different from any natural or engineered enzyme in patent databases (lens.org)</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=KGQ5CZFG))





48 out of the 127 fully generated Cas9s.

Note: That 127 were not autonomously fully generated. Involved human logic.





<span style="color:
#FFF176;">
assayed the editing efficiency and specificity of these 48 proteins across a panel of previously characterized SpCas9 on- and off-target sites (n = 5 and n = 15, respectively)</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=MDH7SZVC))










<span style="color:
#FFF176;">
Nuclease- and sgRNA-expressing plasmids were cotransfected in HEK293T cells, and DNA repair outcomes were measured after three days using next-generation sequencing of amplicons (NGS)</span>
([4](zotero://open-pdf/library/items/NQ2XVX9U?page=4&annotation=LEAZVC8B))





amplicon: DNA fragment produced by amplification using PCR.

PCR gives amplicons, then fed into NGS.

NGS of targeted amplicons is not genome wide sequencing.

It gains sequence measurements at a chosen sites (loci).


#amplicon
#NGS





![research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x38-y456.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x38-y456.png)

Natural Cas9s and Generated (542,042) Cas9s.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x279-y454.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x279-y454.png)

Comparison with SCOPe.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x310-y560.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x310-y560.png)

Proteins from same clusters.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x425-y624.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x425-y624.png)



#Nme1Cas9





![research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x309-y652.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x309-y652.png)

Average identity.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x433-y461.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-4-x433-y461.png)

tSNE plot





<span style="color:
#FFF176;">
Natural sequences (ten total) with between 57%ID and 71%ID to SpCas9 between were identified from the CRISPR–Cas Atlas and UniRef100</span>
([5](zotero://open-pdf/library/items/NQ2XVX9U?page=5&annotation=P84Q7ABU))










<span style="color:
#FFF176;">
sequences from evolutionary methods (14 total from consensus sequence design, hidden Markov model (HMM) emission36 and arDCA24) and structure-based methods (five from LigandMPNN</span>
([5](zotero://open-pdf/library/items/NQ2XVX9U?page=5&annotation=6PU72UW4))










<span style="color:
#FFF176;">
included nine sequences from the literature, including four high-fidelity SpCas9 variants37 and five SpCas9 ancestral reconstructions</span>
([5](zotero://open-pdf/library/items/NQ2XVX9U?page=5&annotation=GK26N2BB))










<span style="color:
#FFF176;">
replaced the PID of all comparison sequences with that  of SpCas9 except literature-reported variants, which already target NGG PAMs</span>
([5](zotero://open-pdf/library/items/NQ2XVX9U?page=5&annotation=JWJV7D35))










<span style="color:
#FFF176;">
One natural protein, Streptococcus uberis Cas9, displayed high on-target activity and reduced off targets at these sites, reflecting the practical utility of mining natural sequence diversity to uncover highly functional nucleases</span>
([5](zotero://open-pdf/library/items/NQ2XVX9U?page=5&annotation=XZMLMSHX))










<span style="color:
#FFF176;">
most highly active sequences came from consensus design, followed by ancestral reconstruction and chimeric design</span>
([5](zotero://open-pdf/library/items/NQ2XVX9U?page=5&annotation=V5IB7TQP))










<span style="color:
#FFF176;">
sequences from HMM emission and arDCA were largely inactive</span>
([5](zotero://open-pdf/library/items/NQ2XVX9U?page=5&annotation=ABECKGAS))











![research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x434-y491.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x434-y491.png)

Each point corresponds to a protein's average indel % of 5 in case of on-target and 15 in case of off-target.

Total 48 proteins (5 from ProGen2 + 43 others)

43 total sequences generated by various sources / methods:

Natural (10): 

- 57%ID to 71%ID to SpCas9 from CRISPR-Cas Atlas and UniRef100

- SpCas9 (Baseline as 11th, not shown here and not counted)

HiFi variants (4):

- High fidelity SpCas9 variants

Chimeric Design (5)

Evolutionary Methods (14):

- Consensus sequence design
- hidden Markov model emission
- arDCA

Ancestral Reconstructions (5)

Structure-based Methods (5):

- LigandMPNN






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x284-y500.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x284-y500.png)

Total count of 131 proteins show activity, so 131 "active proteins"






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x36-y500.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x36-y500.png)

Sanger Sequencing Method is done to filter / screen for potential proteins:

209 Cas9s in total

48 star ones selected from experimental performances (for next-gen sequencing method)

The star ones are radially satisfying all three selection criteria:

Indel Activity: Insertions + Deletions shown on one or more of SpCas9 target sites. Here there are three HEK3, HEK2, CD3G_1

Patent %ID: % similarity to any patented Cas9 protein

Fully Generated: The 127 Cas9s






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x283-y627.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x283-y627.png)

Target Site 1: HEK3

120 showed activity, 16 surpassed.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x378-y627.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x378-y627.png)

Target Site 2: HEK2

84 showed activity, 28 surpassed.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x469-y627.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x469-y627.png)

Target Site 3: CD3G_1

61 showed activity, 4 surpassed.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x37-y354.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x37-y354.png)

Next-Gen Sequencing enables wide range of on- and off-target study:

49 bars: 1 SpCas9 + 48 star ones

Points:

5 on-target sites:

AAVs1
FANCF
HEK2
HEK3
VEGFA

15 off-target sites

Bars: Median of points on each side. 3rd point for on-target, 8nd point for off-target.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x436-y354.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-5-x436-y354.png)

PF-CAS-182 shows more on-target edits than off-target edits as compared to SpCas9.





<span style="color:
#FFF176;">
PF-CAS-182, displayed levels of activity comparable to SpCas9 at on-target sites (median indel rates of 56.4% versus 47.1%) while having a 95% reduction in editing at known SpCas9 off-target sites (median indel rates of 0.32% versus 6.1%)</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=4P2BKBXY))





Fair pitch for therapeutics.


#PF-CAS-182




<span style="color:
#FFF176;">
nominated PF-CAS-182 as the OpenCRISPR-1 protein</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=UVAATZYV))










<span style="color:
#FFF176;">
purified OpenCRISPR-1 and SpCas9 proteins and used these as input to SITE-Seq using the same five gRNA used in Fig. 3e (AAVs1, HEK2, HEK3, FANCF and VEGFA) at four different ribonucleoprotein concentrations</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=BUKHIH56))





Selective Enrichment and Identification of Tagged Genomic DNA Ends by Sequencing.

- used to discover where Cas9 cuts DNA across the genome, including unintended locations.

- This sequencing technique is done on extracted DNA (as compared to DNA in living cells for NGS done previously, although NGS can be done on extracted DNA as well) so it has its normal chromatin packaging removed, hence Cas9 can access location previously inaccessible. 

Ribonucleoprotein (RNP) here is RNA + Protein that is sgRNA + Cas9


#SITE-Seq




<span style="color:
#FFF176;">
higher proportion of cleavage events occurred at on-target sites for OpenCRISPR-1 compared to SpCas9 across all ribonucleoprotein concentrations and gRNAs tested</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=HTFZM9LL))










<span style="color:
#FFF176;">
OpenCRISPR-1 off targets were a subset of the SpyCas9 off targets</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=XZEG9EZ2))





SpyCas9 and SpCas9 are same.





<span style="color:
#FFF176;">
OpenCRISPR-1 does not generate new cleavage patterns</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=NN5PWMVQ))










<span style="color:
#FFF176;">
achieves a low off-target profile by means of a distinct set of molecular interactions</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=ZS7LMNDT))










<span style="color:
#FFF176;">
OpenCRISPR-1 lacked previously identified immunodominant and subdominant SpCas9 T cell epitopes for HLA-A*02:01, indicating that it may be less immunogenic than SpCas9</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=GCVW48D6))





They think OpenCRISPR-1 is potentially low immunogenic for people carrying HLA-A*02:01, a variant of HLA.

T cell epitope: A specific peptide from a protein recognized by a T cell when presented by HLA molecule

HLA: Human Leukocyte Antigen System

A protein on the surface of human cells that displays small pieces of proteins to immune system

A: Gene encoding an HLA class 1 molecule

02: Allele group

01: Specific protein Variant

Immunogenicity: Ability of substance to provoke an immune response


#epitope
#HLA
#immunogenicity
#T-cell




<span style="color:
#FFF176;">
iELISA to measure the amount of human antibody bound to OpenCRISPR-1 and two other generated proteins (PF-CAS-151 and PF-CAS-189)</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=D6R7SUAV))





iELISA: indirect Enyzme-Linked Immunosorbent Assay

Lab technique to measure antibody binding against a particular antigen.


#iELISA




<span style="color:
#FFF176;">
1 μg ml−1 protein concentrations, and serum samples from 40 healthy donors were diluted from 100-fold to 1,600-fold</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=AJFGR5BU))





iELISA setup.





<span style="color:
#FFF176;">
iELISA quantification showed lower immunogenicity for all generated Cas9-like proteins compared to SpCas9 at one or more dilution levels</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=ZTRSIDNM))










<span style="color:
#FFF176;">
proteins designed with machine learning have the potential to be less immunogenic than pathogen-derived genome editors such as SpCas9</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=5R9IQ7HS))










<span style="color:
#FFF176;">
OpenCRISPR-1 was 1,380 residues in length and considerably diverged from both SpCas9 (403 mutations) and any natural protein in the CRISPR–Cas Atlas (182 mutations)</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=JC5C6S4Y))










<span style="color:
#FFF176;">
NCBI-nr showed top hits to proteins from several Streptococcus spp. (Streptococcus cristatus, S. pyogenes and Streptococcus sanguinis)</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=JL2Q5L6H))





NCBI-nr: National Center for Biotechnology Information's non-redundant protein sequence database.


#NCBI-nr




<span style="color:
#FFF176;">
three natural Cas9s yielded a cumulative identity of 98.3% for OpenCRISPR-1</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=PTTUEXCY))










<span style="color:
#FFF176;">
most of the mutations were concentrated at the solvent-exposed surface of the protein, with only a fraction located at the protein–nucleic acid interface</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=4PSUSP5R))





Fewer mutations at the interaction site may preserve the chemistry of Cas9-DNA interaction.





<span style="color:
#FFF176;">
critical nucleic-acid-coordinating residues and nuclease-site components were preserved</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=3UALYM7W))










<span style="color:
#FFF176;">
addition to point mutations, OpenCRISPR-1 contained two loop insertions in the REC1 and HNH domains</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=M5ZYTX6W))





Cas9 domains REC1 and HNH.





<span style="color:
#FFF176;">
nine-residue positively charged insertion in the REC1 domain may interact with the phosphate backbone of both the repeat:anti-repeat segment of the gRNA and the PAM-proximal region of the target DNA</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=5XEA2EWL))





Effects of Insertion in REC1.





<span style="color:
#FFF176;">
four-residue insertion in the HNH domain is compatible with all the experimentally elucidated catalytic states40 and may have a role in stabilizing the cleavage checkpoint state</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=D2V479T8))





Effects of Insertion in HNH.





<span style="color:
#FFF176;">
cell-based assay with NGS measurement of indel rates to screen 98 previously characterized SpCas9 target sites</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=9DIQ5JW9))










<span style="color:
#FFF176;">
able to characterize nuclease performance at 92 of these sites (NGG PAMs, n = 49; non-NGG PAMs n = 43)</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=FP64FETU))





Of the 92 sites, some turned out to be NGG PAM and some non-NGG PAM.





<span style="color:
#FFF176;">
Our measurements of activity for SpCas9 at these targets were moderately below reported levels15, probably owing to the transfection efficiency observed from lipofection</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=G2ZFRWYC))





Their SpCas9 measurements are lower than other reported works, but it's okay since we are going to make this as a comparable baseline for OC-1.

Lipofection: chemical transfection technique that uses lipids to deliver DNA or RNA into living cells.

Then, it gets into the nucleus during cell division (mitosis)

- Plasmid enters cytoplasm
- Cell enters mitosis
- Nuclear envelope reforms
- plasmid DNA coexists with chromosomal DNA

So, plasmid DNA is transcribed in nucleus.

- sgRNA now inside the nucleus
- Cas9 now inside cell
- Cas9 enters nucleus by NLS (Nuclear Localization Signal)
- Chromosomal DNA cut
- Repair by NHEJ (Non-Homologous End Joining) or HDR (Homology-Directed Repair)

NHEJ produces indels, HDR precise gene mutations.





<span style="color:
#FFF176;">
OpenCRISPR-1 displayed comparable levels of on-target activity across sites bearing the NGG PAM</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=VSIANAYZ))










<span style="color:
#FFF176;">
OpenCRISPR-1 exhibited several-fold reduction in activity at genomic sites bearing a mismatch in the PAM</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=WFIU7LPJ))





OC-1 doesn't make a lot of unintended intrusions.





<span style="color:
#FFF176;">
OpenCRISPR-1 has activity comparable to SpCas9 at on-target sites while avoiding double-strand breaks at sites with mismatches in either the PAM or target regions</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=ITCXYU7W))





Gene editing requires breaking the double helix strand of DNA.

OC-1 does the job without breaking off-target DNA double strands.





<span style="color:
#FFF176;">
converted OpenCRISPR-1 to a putative target-strand nickase (containing D10A mutation) and fused it to a previously engineered adenosine deaminase (ABE8.20) commonly used in base editing</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=VXNPPLNS))





D10A means replacing aspartate (D) at amino acid position 10 with alanine (A). 

This disables RuvC (which cuts the opposite DNA strand) and keeps HNH functional (which cuts the DNA strand complementary to sgRNA).

ABE8.20 chemically converts adenine (A) to inosine (I) in exposed single DNA strand.

Cells interpret inosine much like guanine (G) and converts the A-T to G-C.


#ABE8.20




<span style="color:
#FFF176;">
sgRNAs targeting three genomic loci containing adenines in the editing window (that is, position 3–9 in the spacer)</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=SKGMQ5FA))










<span style="color:
#FFF176;">
observed robust A-to-G conversion with the OpenCRISPR-1 base editor on all three target sites (35–60% editing rate)</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=F8V76AED))





almost same performance as SpCas9 fused with deaminases.





<span style="color:
#FFF176;">
trained models based on TadA-like proteins from UniProtKB44 and BFD</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=RR74QAE9))





TadA: tRNA-specific adenosine deaminase.

They just want to show that their modelling approach generalizes beyond Cas9s.


#TadA-proteins




<span style="color:
#FFF176;">
generated a series of synthetic adenine deaminases with 55–80%ID to any known natural deaminase, including both engineered variants and the Escherichia coli TadA</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=PNZCWUC6))










<span style="color:
#FFF176;">
tested two of our most active deaminases (PF-DEAM-1 and PF-DEAM-2) fused to the N terminus of either SpCas9 or OpenCRISPR-1 nickases</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=QF9LXSZM))





nickase means the post D10A mutation molecule.





<span style="color:
#FFF176;">
A-to-G editing levels comparable to ABE8.20</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=CAS9MVRM))





Absolutely no improvements. Just showing the modelling approach can do more than just Cas9 generation.





<span style="color:
#FFF176;">
narrow editing windows were observed in early adenine base editors evolved from ecTadA through directed evolution</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=57VVYRQU))







#ecTadA




<span style="color:
#FFF176;">
all of the experiments up to this point had used the SpCas9 sgRNA scaffold, we reasoned that this might not be optimal for OpenCRISPR-1 and other generated Cas9-like proteins</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=D3IMELKC))










<span style="color:
#FFF176;">
designed 14 generated sgRNAs for each of five generated Cas9-like proteins (including OpenCRISPR-1)</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=X2ZTXKBR))










<span style="color:
#FFF176;">
Generated sgRNA sequences exhibited high sequence conservation compared to SpCas9’s sgRNA</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=B6DYXLBJ))










<span style="color:
#FFF176;">
observed enhanced editing with 31 designed sgRNAs relative to SpCas9’s sgRNA</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=K877H3RY))










<span style="color:
#FFF176;">
significant improvements for four sgRNAs for two of five variants</span>
([6](zotero://open-pdf/library/items/NQ2XVX9U?page=6&annotation=WX52NPNJ))










<span style="color:
#FFF176;">
Designed sgRNAs were generally compatible with SpCas9, but only one showed significant improvements in editing efficiency</span>
([7](zotero://open-pdf/library/items/NQ2XVX9U?page=7&annotation=Y4WFK4FH))





1 designed sgRNA that increases SpCas9's editing efficiency itself.





<span style="color:
#FFF176;">
performed similarly with a designed sgRNA or SpCas9’s sgRNA</span>
([7](zotero://open-pdf/library/items/NQ2XVX9U?page=7&annotation=7Z5FGX2S))





OC-1.





### Discussion










<span style="color:
#BA68C8;">
Although evolution has created a massive diversity of CRISPR–Cas proteins, identifying the best natural protein for a given application (if it exists) remains a principal bottleneck in the design of more advanced gene editing systems</span>
([7](zotero://open-pdf/library/items/NQ2XVX9U?page=7&annotation=WYPARMPA))





1





<span style="color:
#FFF176;">
This approach allows us to diversify existing lineages of interest or explore regions of sequence space that were not visited by evolution</span>
([7](zotero://open-pdf/library/items/NQ2XVX9U?page=7&annotation=GR2ZUY8J))





Pitch for using LMs for making gene editors.





<span style="color:
#FFF176;">
OpenCRISPR-1 may provide a viable alternative to SpCas9 for use in gene editing technologies, with similar editing behaviour and compatibility with systems like base editing</span>
([7](zotero://open-pdf/library/items/NQ2XVX9U?page=7&annotation=H6YU6QVP))










<span style="color:
#BA68C8;">
examine OpenCRISPR-1 activity across a range of experimental conditions, cell types and delivery methods to more thoroughly characterize robustness</span>
([7](zotero://open-pdf/library/items/NQ2XVX9U?page=7&annotation=7RGX94TT))





2





<span style="color:
#FFF176;">
curated the CRISPR–Cas Atlas—a large resource of CRISPR systems. Datasets like the CRISPR–Cas Atlas are critical for refining the general learnings of pretrained protein LMs into a functional blueprint for design</span>
([7](zotero://open-pdf/library/items/NQ2XVX9U?page=7&annotation=NBS4JQJK))










<span style="color:
#BA68C8;">
ffectors from other Class 2 systems (for example, Cas12a, Cas12f and Cas13) may be amenable to the same approach</span>
([7](zotero://open-pdf/library/items/NQ2XVX9U?page=7&annotation=FDERHGVR))





3





<span style="color:
#FFF176;">
alternative systems have unique properties that would benefit gene editing applications (for example, reduced size of Cas12f or RNA interference of Cas13)</span>
([7](zotero://open-pdf/library/items/NQ2XVX9U?page=7&annotation=L8V3E6SM))











![research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x37-y608.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x37-y608.png)

SpCas9 is an NGG preferring enzyme, so it shows low activity for non-NGG PAMs.

SpCas9 can naturally recognize all 4 canonical PAMs (AGG, CGG, TGG, GGG). No need to specify which of these 4. So we engineer only the sgRNA sequence.

 OC-1 shows even lower tolerance for non-NGG.

OC-1 shows lower editing at sites lacking NGG PAM.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x254-y607.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x254-y607.png)

Each point is a common site from 92 sites. 

Notice for most non-NGG site, the points lie above the dotted line.

For the same non-NGG site, OC-1 indel rate is lower than SpCas9's.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x37-y501.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x37-y501.png)

ABE8.20 was fused at N terminal.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x211-y478.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x211-y478.png)

Note that OC-1 was not necessary to make a base editor, SpCas9 already could do base editing well.

Plots for each target sites (3 plots).

- HEK3
- T39
- CD3G_1

3 deaminases were tried (ABE8.20, PF-DEAM-1, PF-DEAM-2) on 2 editors (SpCas9, OC-1).

3 experimental replicates (3 dots).


#PF-DEAM-1
#PF-DEAM-2





![research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x36-y387.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x36-y387.png)

editing efficiency at HEK3 target site only.

5 generated Cas9s (plots)

14 generated sgRNA (bars)

1 SpCas9 sgRNA (bar)

31 generated sgRNAs are better than spCas9 sgRNA.

- for OC-1 there is one designed sgRNA better than SpCas9 sgRNA.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x445-y388.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x445-y388.png)

4 designed sgRNAs show significant improvement for 2 of 5 variants.






![research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x412-y607.png](research-notes/images/ruffoloDesignHighlyFunctional2025/image-7-x412-y607.png)

PAM site counts in experiment (n):

NGG = 49

NGC = 11

NGT = 10

NGA = 10

NAG = 9

NTG = 2

NCG = 1





<span style="color:
#FFF176;">
CRISPR–Cas Atlas could be used to model specific properties of gene editors, such as nuclease size, PAM preference, tracrRNA compatibility, thermostability or temperature-dependent activity</span>
([8](zotero://open-pdf/library/items/NQ2XVX9U?page=8&annotation=MQNVCENR))










<span style="color:
#FFF176;">
design of protein function typically begins with an explicit structural hypothesis that is translated into a set of constraints to guide a search for satisfying sequences49. This approach has largely reduced some design problems, such as de novo design of protein binders</span>
([8](zotero://open-pdf/library/items/NQ2XVX9U?page=8&annotation=3N89GD3S))










<span style="color:
#FFF176;">
design of complex functions as embodied by the gene editors in this work, structure-based approaches do not offer a straightforward solution. By contrast, LMs provide an implicit means of modelling protein function (and thus structure) through sequence alone</span>
([8](zotero://open-pdf/library/items/NQ2XVX9U?page=8&annotation=RUTJ5DHK))





They claim that to do complex stuff like editing, currently the structure based approach (like de novo) isn't straightforward to tackle that. 

So, focus on sequence and it may implicitly handle the structure for us.





