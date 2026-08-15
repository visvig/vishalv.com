---
published: "2026-06-25"
added: "2026-07-25"
modified: "2026-07-26"
authors: Fabian Gröger, Shuo Wen, Maria Brbić
abstract: "The Platonic Representation Hypothesis suggests that representations from neural networks are converging to a common statistical model of reality. We show that the existing metrics used to measure representational similarity are confounded by network scale: increasing model depth or width can systematically inflate representational similarity scores. To correct these effects, we introduce a permutation-based null-calibration framework that transforms any representational similarity metric into a calibrated score with statistical guarantees. We revisit the Platonic Representation Hypothesis with our calibration framework, which reveals a nuanced picture: the apparent convergence reported by global spectral measures largely disappears after calibration, while local neighborhood similarity, but not local distances, retains significant agreement across different modalities. Based on these findings, we propose the Aristotelian Representation Hypothesis: representations in neural networks are converging to shared local neighborhood relationships."
---

# Revisiting the Platonic Representation Hypothesis: An Aristotelian View

[URL](http://arxiv.org/abs/2602.14486)

## Tags


## Notes

### Abstract










<span style="color:
#FFF176;">
Platonic Representation Hypothesis suggests that representations from neural networks are converging to a common statistical model of reality</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=M63979W6))










<span style="color:
#FFF176;">
we introduce a permutation-based null-calibration framework that transforms any representational similarity metric into a calibrated score with statistical guarantees</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=4925RPKJ))










<span style="color:
#FFF176;">
the apparent convergence reported by global spectral measures largely disappears after calibration, while local neighborhood similarity, but not local distances, retains significant agreement across different modalities</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=8C2NYBRI))










<span style="color:
#FFF176;">
Aristotelian Representation Hypothesis: representations in neural networks are converging to shared local neighborhood relationships</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=TZAD9UKN))










### 1. Introduction










<span style="color:
#FFF176;">
To measure representational similarity across models, different metrics have been proposed</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=JUDECSMK))










<span style="color:
#FFF176;">
Centered Kernel Alignment</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=NAQ3PA6E))










<span style="color:
#FFF176;">
Canonical Correlation Analysis</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=PI27ETRU))










<span style="color:
#FFF176;">
Representational Similarity Analysis</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=IK3LBMEH))










<span style="color:
#FFF176;">
mutual k-Nearest Neighbors</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=QSBMR7CX))










<span style="color:
#FFF176;">
two pervasive confounders that distort representational similarity measurements</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=FAHVGFUQ))










<span style="color:
#FFF176;">
model width: when the embedding dimension increases relative to the sample size, interaction-matrix-based similarity metrics exhibit a systematic positive baseline even when representations are independent</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=KUNG4UJP))










<span style="color:
#FFF176;">
model depth</span>
([](zotero://open-pdf/library/items/BDGVMRU9?page=&annotation=C4WK9GPS))











![research-notes/images/grogerRevisitingPlatonicRepresentation2026/image-2-x48-y421.png](research-notes/images/grogerRevisitingPlatonicRepresentation2026/image-2-x48-y421.png)






<span style="color:
#FFF176;">
Taking a maximum over many comparisons inflates the reported score even if there is no similarity, since the expected maximum of independent draws exceeds the mean</span>
([2](zotero://open-pdf/library/items/BDGVMRU9?page=2&annotation=R56IQWPT))










<span style="color:
#FFF176;">
null-calibration for representational similarity, a general permutation-based framework that transforms any similarity metric into a calibrated score with a principled null reference, here defined as no relationship</span>
([2](zotero://open-pdf/library/items/BDGVMRU9?page=2&annotation=C2FRKHQH))










<span style="color:
#FFF176;">
We find that, after calibration, the previously reported convergence in global metrics (Huh et al., 2024; Maniparambil et al., 2024; Tjandrasuwita et al., 2025) largely disappears, suggesting it was driven primarily by width and depth confounders</span>
([2](zotero://open-pdf/library/items/BDGVMRU9?page=2&annotation=Q6IAYBVR))










<span style="color:
#FFF176;">
local neighborhood-based metrics retain significant cross-modal alignment</span>
([2](zotero://open-pdf/library/items/BDGVMRU9?page=2&annotation=EPWDVAMS))










<span style="color:
#FFF176;">
Aristotelian Representation Hypothesis1: Neural networks, trained with different objectives on different data and modalities, converge to shared local neighborhood relationships</span>
([2](zotero://open-pdf/library/items/BDGVMRU9?page=2&annotation=MM7FXM9I))









