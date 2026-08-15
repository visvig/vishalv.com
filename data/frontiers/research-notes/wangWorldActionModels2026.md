---
published: "2026-05-12"
added: "2026-07-24"
modified: "2026-07-24"
authors: Siyin Wang, Junhao Shi, Zhaoyang Fu, Xinzhe He, Feihong Liu, Chenchen Yang, Yikang Zhou, Zhaoye Fei, Jingjing Gong, Jinlan Fu, Mike Zheng Shou, Xuanjing Huang, Xipeng Qiu, Yu-Gang Jiang
abstract: "Vision-Language-Action (VLA) models have achieved strong semantic generalization for embodied policy learning, yet they learn reactive observation-to-action mappings without explicitly modeling how the physical world evolves under intervention. A growing body of work addresses this limitation by integrating world models, predictive models of environment dynamics, into the action generation pipeline. We term this emerging paradigm World Action Models (WAMs): embodied foundation models that unify predictive state modeling with action generation, targeting a joint distribution over future states and actions rather than actions alone. However, the literature remains fragmented across architectures, learning objectives, and application scenarios, lacking a unified conceptual framework. We formally define WAMs and disambiguate them from related concepts, and trace the foundations and early integration of VLA and world model research that gave rise to this paradigm. We organize existing methods into a structured taxonomy of Cascaded and Joint WAMs, with further subdivision by generation modality, conditioning mechanism, and action decoding strategy. We systematically analyze the data ecosystem fueling WAMs development, spanning robot teleoperation, portable human demonstrations, simulation, and internet-scale egocentric video, and synthesize emerging evaluation protocols organized around visual fidelity, physical commonsense, and action plausibility. Overall, this survey provides the first systematic account of the WAMs landscape, clarifies key architectural paradigms and their trade-offs, and identifies open challenges and future opportunities for this rapidly evolving field."
---

# World Action Models: The Next Frontier in Embodied AI

[URL](http://arxiv.org/abs/2605.12090)

## Tags


## Notes

### 2.1 Foundational Paradigms










<span style="color:
#FFF176;">
Vision-Language-Action (VLA) models are a class of embodied foundation models that frame robot control as a multimodal sequence modeling task</span>
([3](zotero://open-pdf/library/items/HTS3RJBX?page=3&annotation=XR9Z4MID))







#vla-model




<span style="color:
#FFF176;">
VLA architecture typically leverages the pre-trained semantic latent spaces of Large Language Models (LLMs) or Vision-Language Models (VLMs) to map perceptual inputs directly to the action space</span>
([3](zotero://open-pdf/library/items/HTS3RJBX?page=3&annotation=QLVGRTPI))











![research-notes/images/wangWorldActionModels2026/image-5-x59-y499.png](research-notes/images/wangWorldActionModels2026/image-5-x59-y499.png)







![research-notes/images/wangWorldActionModels2026/image-5-x223-y453.png](research-notes/images/wangWorldActionModels2026/image-5-x223-y453.png)






<span style="color:
#FFF176;">
World Models (WM) are defined as predictive transition functions that internalize the causal dynamics of the physical environment</span>
([5](zotero://open-pdf/library/items/HTS3RJBX?page=5&annotation=5HND4UVN))







#world-model





![research-notes/images/wangWorldActionModels2026/image-5-x223-y359.png](research-notes/images/wangWorldActionModels2026/image-5-x223-y359.png)






<span style="color:
#FFF176;">
World Action Models (WAMs) are a class of embodied foundation models that unify environmental dynamics modeling (world modeling) with motor control (action generation).</span>
([5](zotero://open-pdf/library/items/HTS3RJBX?page=5&annotation=6IVF49LD))







#world-action-model





![research-notes/images/wangWorldActionModels2026/image-5-x211-y106.png](research-notes/images/wangWorldActionModels2026/image-5-x211-y106.png)






### 2.2 Disambiguation: WAM vs. Related Concepts










<span style="color:
#FFF176;">
1. Video Action Models (VAMs): VAMs often refer to the models that integrate video prediction with  action generation, typically aligning action with synthesized visual futures</span>
([6](zotero://open-pdf/library/items/HTS3RJBX?page=6&annotation=WTSVRNQG))










<span style="color:
#FFF176;">
2. Video Policies: Video policies often refer to models defined by their structural heritage—using generative video architectures (e.g., Diffusion Transformers) as a backbone to extract strong spatiotemporal representations</span>
([6](zotero://open-pdf/library/items/HTS3RJBX?page=6&annotation=L2EZTWDG))










<span style="color:
#FFF176;">
3. Action World Models (AWM): Action World Model (AWM) is employed in early literature to describe  models that integrate world modeling with action generation (p(o′, a | o, l))</span>
([6](zotero://open-pdf/library/items/HTS3RJBX?page=6&annotation=T92KVBGT))










<span style="color:
#FFF176;">
4 Architecture</span>
([13](zotero://open-pdf/library/items/HTS3RJBX?page=13&annotation=ILL7B2HX))










<span style="color:
#FFF176;">
We categorize these World Action Models architectures into two primary paradigms based on their structural flow and corresponding training regimes:</span>
([13](zotero://open-pdf/library/items/HTS3RJBX?page=13&annotation=SDZJAJIA))










<span style="color:
#FFF176;">
(1) Cascaded WAM</span>
([13](zotero://open-pdf/library/items/HTS3RJBX?page=13&annotation=Y8SVSZ63))










<span style="color:
#FFF176;">
employs a sequential pipeline that first predicts the next state (e.g., in pixel, latent, or flow space) and subsequently derives the corresponding action</span>
([14](zotero://open-pdf/library/items/HTS3RJBX?page=14&annotation=NI7H7BUW))










<span style="color:
#FFF176;">
(2) Joint WAM</span>
([14](zotero://open-pdf/library/items/HTS3RJBX?page=14&annotation=C2496LBY))










<span style="color:
#FFF176;">
unifies predictive state modeling and action generation within a single cohesive model, producing future states and actions simultaneously</span>
([14](zotero://open-pdf/library/items/HTS3RJBX?page=14&annotation=JAKCE8H4))










### 5 Training data











![research-notes/images/wangWorldActionModels2026/image-26-x297-y172.png](research-notes/images/wangWorldActionModels2026/image-26-x297-y172.png)






<span style="color:
#FFF176;">
Standard VisionLanguage-Action (VLA) models strictly require paired (ot , at) trajectories, which severely restricts scalability given the high cost and scarcity of teleoperated demonstrations</span>
([26](zotero://open-pdf/library/items/HTS3RJBX?page=26&annotation=3K9YNR6M))





> Teleoperating means human is controlling the robot remotely and the video is captured by the robot / outside.





<span style="color:
#FFF176;">
pure World Models thrive on action-free (ot , ot+1) sequences from internet videos but lack grounding in physical control</span>
([26](zotero://open-pdf/library/items/HTS3RJBX?page=26&annotation=5C3NICA9))










<span style="color:
#FFF176;">
unique advantage of WAMs lies in their unified data digestion</span>
([26](zotero://open-pdf/library/items/HTS3RJBX?page=26&annotation=P6CRNQCB))










<span style="color:
#FFF176;">
high-quality (ot , at , ot+1) triplets to tightly couple their internal representations, while simultaneously possessing the architectural flexibility to ingest massive unpaired data (e.g., action-free videos for visual physics) through joint training strategies</span>
([26](zotero://open-pdf/library/items/HTS3RJBX?page=26&annotation=3WYNZCP5))










<span style="color:
#FFF176;">
researchers are increasingly leveraging a complementary mixture of these datasets to bridge the gap between precise, low-level robotic control and broad, open-world generalization</span>
([27](zotero://open-pdf/library/items/HTS3RJBX?page=27&annotation=73A5PLRT))










### 5.4 Human and Ego-Centric Data










<span style="color:
#FFF176;">
conventional robot-centric datasets provide precise low-level action execution, they are inherently bottlenecked by the morphological constraints and high collection costs of physical robots</span>
([32](zotero://open-pdf/library/items/HTS3RJBX?page=32&annotation=GZSV3P7U))










### 5.4.2 Bridging the Action Gap: Pose Estimation and Proprioceptive Grounding










<span style="color:
#FFF176;">
learning action-conditioned dynamics (st+1 = f (st , at)) strictly requires action inputs</span>
([32](zotero://open-pdf/library/items/HTS3RJBX?page=32&annotation=5IJUZK8K))










<span style="color:
#FFF176;">
researchers have increasingly treated the human hand as a universal end-effector</span>
([32](zotero://open-pdf/library/items/HTS3RJBX?page=32&annotation=8PS5JB7C))










<span style="color:
#FFF176;">
these datasets mathematically bridge the gap</span>
([32](zotero://open-pdf/library/items/HTS3RJBX?page=32&annotation=S5VW8BAQ))










### 5.4.3 Toward Generalist Pretraining Mixtures










### 7 Open challenges and Opportunities










### Data Utilization and Mixture Design.










<span style="color:
#FFF176;">
What is the marginal contribution of each data source as a function of its scale and domain gap?</span>
([42](zotero://open-pdf/library/items/HTS3RJBX?page=42&annotation=SKDNPFCY))










<span style="color:
#FFF176;">
central challenge in data mixture design lies in disentangling the multiple, potentially overlapping roles that non-robot data plays in grounding.</span>
([42](zotero://open-pdf/library/items/HTS3RJBX?page=42&annotation=2HEZ586Z))










<span style="color:
#FFF176;">
value of human video through a hierarchy of transferrable knowledge:</span>
([42](zotero://open-pdf/library/items/HTS3RJBX?page=42&annotation=F4ET2RQI))










<span style="color:
#FFF176;">
(1) low-level physical priors, such as object permanence and gravitational constraints</span>
([42](zotero://open-pdf/library/items/HTS3RJBX?page=42&annotation=DTSF3EK5))










<span style="color:
#FFF176;">
(2) mid-level causal dynamics, which encode the causal relationship between specific interactions and their physical outcomes</span>
([42](zotero://open-pdf/library/items/HTS3RJBX?page=42&annotation=MGI23NBT))










<span style="color:
#FFF176;">
(3) high-level task logic, which encode task-relevant temporal dependencies independent of specific embodiments</span>
([42](zotero://open-pdf/library/items/HTS3RJBX?page=42&annotation=JTQMER6X))










<span style="color:
#FFF176;">
more principled information-theoretic perspective on data mixture could allow the field to identify which specific components of world modeling are best learned from internet-scale video versus precision robot demonstrations</span>
([42](zotero://open-pdf/library/items/HTS3RJBX?page=42&annotation=PSVTHTFG))










### 8 Conclusions










<span style="color:
#FFF176;">
As generative world modeling and robotics continue to converge, WAM research holds immense promise</span>
([44](zotero://open-pdf/library/items/HTS3RJBX?page=44&annotation=UABT7A7Q))









