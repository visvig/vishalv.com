---
title: "Kimi K3: Open Frontier Intelligence"
date: "2026-08-28"
tags:
  - "moe"
  - "kda"
  - "mla"
draft: false
summary: "We introduce Kimi K3, a 2.8T parameter Mixture-of-Experts model with 104 billion activated parameters, native vision capabilities, and a 1-million-token context window. Kimi K3 is built on Kimi Delta Attention and Attention Residuals, which improve information flow across..."
---
{/* Generated from data/frontiers/research-notes. Edit the source file, then run `yarn publish:research-notes`. */}

[URL](http://arxiv.org/abs/2607.24653)

## Notes

### ABSTRACT










> native vision capabilitie
([1](zotero://open-pdf/library/items/9CG9H7FU?page=1&annotation=JTSWWK3H))










> 2.8T parameter
([1](zotero://open-pdf/library/items/9CG9H7FU?page=1&annotation=9M9RQ8UJ))










> Mixture-of-Experts model
([1](zotero://open-pdf/library/items/9CG9H7FU?page=1&annotation=INAL6248))











> 1-million-token context window
([1](zotero://open-pdf/library/items/9CG9H7FU?page=1&annotation=BVPAPKGE))










> 104 billion activated parameters
([1](zotero://open-pdf/library/items/9CG9H7FU?page=1&annotation=QDN6SZRR))





Activated parameters is a feature of MoE models. 

This reduces cost of inference drastically compared to using all 2.8T parameters.





> Kimi Delta Attention [63] and Attention Residuals [57], which improve information flow across sequence length and model depth
([1](zotero://open-pdf/library/items/9CG9H7FU?page=1&annotation=5NMGFGXU))










> Stable LatentMoE, which effectively activates 16 of 896 routed experts per token, and refined training and data recipes
([1](zotero://open-pdf/library/items/9CG9H7FU?page=1&annotation=F56DWR4N))










> 2.5× improvement in overall scaling efficiency over Kimi K2
([1](zotero://open-pdf/library/items/9CG9H7FU?page=1&annotation=8VP9HNPP))





Scaling Efficiency = Capability Gained / Extra Params





> infrastructure advances in multiple areas: algorithm–system co-design for KDA, perfectly balanced expert-parallel training with efficient memory management, million-token agentic RL with persistent rollout and sandbox states, and deployment innovations
([1](zotero://open-pdf/library/items/9CG9H7FU?page=1&annotation=2EN45ZZR))











![research-notes/images/teamKimiK3Open2026/image-undefined-x82-y134.png](/static/research-notes/images/teamKimiK3Open2026/image-undefined-x82-y134.png)






### 1 Introduction










> rise of reasoning models has established test-time computation as a second axis of scaling
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=9B4PRJTU))










> test-time scaling a central focus of frontier research
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=QWJJMNRD))










> axis, it has progressed slowly on the first: many recent models remain within or slightly above the 1T-class
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=JQXYHL5Q))










> Kimi K3, we pursue both scaling axes together to the frontier: scaling the pre-trained foundation to unprecedented 3T-class parameters while scaling reinforcement learning, reasoning effort, and long-horizon interaction
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=CZDPEKQD))










> Kimi Delta Attention (KDA) [63] provides efficient longsequence mixing
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=ITG9SDDL))











> Gated MLA layers preserving global interaction
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=6QSSLXTK))





MLA: Multi-head Latent Attention






> Attention Residuals (AttnRes) [57] allows each layer to selectively attend to representations from all preceding layers
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=UK8TIW28))










> Stable LatentMoE expands the routed expert space to 896 experts, with 16 activated per token
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=NS7A5TDT))










> normalization, SiTU-GLU, and Quantile Balancing stabilize optimization at extreme sparsity
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=Y5UJDJVJ))





SiLU: Sigmoid Linear Unit

GLU: Gated Linear Unit





> Training environments
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=EBECYAQC))










> verifiable search
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=8PKPGYNQ))










> professional knowledge work
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=8PBWU4LU))










> software engineering
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=ICJ84VNK))










> kernel optimization
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=ADDFMPYG))










> vision-in-the-loop tool use
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=MRYUDMSS))










> persistent assistant workflows
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=G2F5WDS3))










> web development
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=WL3PPFDR))










> autonomous execution tasks
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=RU86FV33))










> Domain- and effort-specialized policies are consolidated into a unified model through multi-teacher on-policy distillation
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=LBSBS7CM))










> For systems co-design for KDA, we develop fused kernels, KDA Context Parallelism, and state-aware prefix caching to make KDA efficient within devices, across devices, and across requests
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=GYMYEGSV))










> MoonEP provides perfectly balanced expert execution with static computation shapes and zero-copy communication
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=GN738FRG))










> memory efficient training and multimodal encoder optimizations sustain utilization within bounded memory
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=TY2KYV84))










> For million-token agentic RL, our co-located system combines partial rollouts, external KV-cache retention, adaptive throttling and resumable microVM sandboxes to preserve long-lived model and environment state
([2](zotero://open-pdf/library/items/9CG9H7FU?page=2&annotation=V3NBD8VJ))











![research-notes/images/teamKimiK3Open2026/image-3-x334-y503.png](/static/research-notes/images/teamKimiK3Open2026/image-3-x334-y503.png)

3 KDA followed by 1 Gated MLA.






![research-notes/images/teamKimiK3Open2026/image-3-x444-y503.png](/static/research-notes/images/teamKimiK3Open2026/image-3-x444-y503.png)

w: pseudo-queries
alpha: attention weights






![research-notes/images/teamKimiK3Open2026/image-3-x99-y559.png](/static/research-notes/images/teamKimiK3Open2026/image-3-x99-y559.png)

Stable Latent MoE Module.






![research-notes/images/teamKimiK3Open2026/image-3-x364-y352.png](/static/research-notes/images/teamKimiK3Open2026/image-3-x364-y352.png)

Native Vision Pathway.






![research-notes/images/teamKimiK3Open2026/image-3-x99-y356.png](/static/research-notes/images/teamKimiK3Open2026/image-3-x99-y356.png)

KDA Module.





### 2 Model Architecture










> sequence dimension, Hybrid Attention combines three Kimi Delta Attention (KDA) [63] layers with one Gated MLA layer in each block
([3](zotero://open-pdf/library/items/9CG9H7FU?page=3&annotation=QANCA3X4))










> three complementary dimensions: sequence length, network depth, and model width
([3](zotero://open-pdf/library/items/9CG9H7FU?page=3&annotation=9Y7LW7EQ))










> depth dimension, Attention Residuals (AttnRes) [57] enable each module to selectively retrieve representations from the embedding, the current block, and preceding blocks
([3](zotero://open-pdf/library/items/9CG9H7FU?page=3&annotation=T5HRQMW2))










> width dimension, each attention layer is followed by a Stable LatentMoE layer that performs sparse channel mixing
([3](zotero://open-pdf/library/items/9CG9H7FU?page=3&annotation=DV84BDTC))
