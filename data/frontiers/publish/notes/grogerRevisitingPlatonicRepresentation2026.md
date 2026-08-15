---
title: "Revisiting the Platonic Representation Hypothesis: An Aristotelian View"
date: "2026-07-26"
tags: []
draft: false
summary: "The Platonic Representation Hypothesis suggests that representations from neural networks are converging to a common statistical model of reality. We show that the existing metrics used to measure representational similarity are confounded by network scale: increasing model depth..."
---
{/* Generated from data/frontiers/research-notes. Edit the source file, then run `yarn publish:research-notes`. */}

[URL](http://arxiv.org/abs/2602.14486)

## Notes

### Abstract










> Platonic Representation Hypothesis suggests that representations from neural networks are converging to a common statistical model of reality
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=M63979W6))










> we introduce a permutation-based null-calibration framework that transforms any representational similarity metric into a calibrated score with statistical guarantees
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=4925RPKJ))










> the apparent convergence reported by global spectral measures largely disappears after calibration, while local neighborhood similarity, but not local distances, retains significant agreement across different modalities
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=8C2NYBRI))










> Aristotelian Representation Hypothesis: representations in neural networks are converging to shared local neighborhood relationships
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=TZAD9UKN))










### 1. Introduction










> To measure representational similarity across models, different metrics have been proposed
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=JUDECSMK))










> Centered Kernel Alignment
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=NAQ3PA6E))










> Canonical Correlation Analysis
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=PI27ETRU))










> Representational Similarity Analysis
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=IK3LBMEH))










> mutual k-Nearest Neighbors
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=QSBMR7CX))










> two pervasive confounders that distort representational similarity measurements
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=FAHVGFUQ))










> model width: when the embedding dimension increases relative to the sample size, interaction-matrix-based similarity metrics exhibit a systematic positive baseline even when representations are independent
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=KUNG4UJP))










> model depth
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=C4WK9GPS))











![research-notes/images/grogerRevisitingPlatonicRepresentation2026/image-2-x48-y421.png](/static/research-notes/images/grogerRevisitingPlatonicRepresentation2026/image-2-x48-y421.png)






> Taking a maximum over many comparisons inflates the reported score even if there is no similarity, since the expected maximum of independent draws exceeds the mean
([2](zotero://open-pdf/library/items/BDGVMRU9?page=2&annotation=R56IQWPT))










> null-calibration for representational similarity, a general permutation-based framework that transforms any similarity metric into a calibrated score with a principled null reference, here defined as no relationship
([2](zotero://open-pdf/library/items/BDGVMRU9?page=2&annotation=C2FRKHQH))










> We find that, after calibration, the previously reported convergence in global metrics (Huh et al., 2024; Maniparambil et al., 2024; Tjandrasuwita et al., 2025) largely disappears, suggesting it was driven primarily by width and depth confounders
([2](zotero://open-pdf/library/items/BDGVMRU9?page=2&annotation=Q6IAYBVR))










> local neighborhood-based metrics retain significant cross-modal alignment
([2](zotero://open-pdf/library/items/BDGVMRU9?page=2&annotation=EPWDVAMS))










> Aristotelian Representation Hypothesis1: Neural networks, trained with different objectives on different data and modalities, converge to shared local neighborhood relationships
([2](zotero://open-pdf/library/items/BDGVMRU9?page=2&annotation=MM7FXM9I))
