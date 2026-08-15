---
published: "2026-01-01"
added: "2026-07-26"
modified: "2026-07-26"
authors: Vasileios Sevetlidis, George Pavlidis
abstract: "Deep networks learn internal representations whose geometry—how features bend, rotate, and evolve—affects both generalization and robustness. Existing similarity measures such as CKA or SVCCA capture pointwise overlap between activation sets, but miss how representations change along input paths. Two models may appear nearly identical under these metrics yet respond very differently to perturbations or adversarial stress. We introduce representation holonomy, a gauge-invariant statistic that measures this path dependence. Conceptually, holonomy quantifies the “twist” accumulated when features are parallel-transported around a small loop in input space: flat representations yield zero holonomy, while nonzero values reveal hidden curvature. Our estimator fixes gauge through global whitening, aligns neighborhoods using shared subspaces and rotation-only Procrustes, and embeds the result back to the full feature space. We prove invariance to orthogonal (and affine, post-whitening) transformations, establish a linear null for affine layers, and show that holonomy vanishes at small radii. Empirically, holonomy increases with loop radius, separates models that appear similar under CKA, and correlates with adversarial and corruption robustness. It also tracks training dynamics as features form and stabilize. Together, these results position representation holonomy as a practical and scalable diagnostic for probing the geometric structure of learned representations beyond pointwise similarity."
---

# GAUGE-INVARIANT REPRESENTATION HOLONOMY

[URL]()

## Tags


## Notes

### ABSTRACT










<span style="color:
#FFF176;">
Existing similarity measures such as CKA or SVCCA capture pointwise overlap between activation sets, but miss how representations change along input paths</span>
([](zotero://open-pdf/library/items/CD5FGWRU?page=&annotation=KZG5RSIZ))










<span style="color:
#FFF176;">
We introduce representation holonomy, a gauge-invariant statistic that measures this path dependence</span>
([](zotero://open-pdf/library/items/CD5FGWRU?page=&annotation=RV966EK3))










<span style="color:
#FFF176;">
Empirically, holonomy increases with loop radius, separates models that appear similar under CKA, and correlates with adversarial and corruption robustness</span>
([](zotero://open-pdf/library/items/CD5FGWRU?page=&annotation=VANS3ACF))









