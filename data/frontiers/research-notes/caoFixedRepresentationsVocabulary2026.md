---
published: "2026-07-10"
added: "2026-08-05"
modified: "2026-08-10"
authors: Yuan Cao, Haiqian Yang
abstract: "Modern AI systems are increasingly being evaluated for their ability to reason, code, prove theorems, use tools, and long-horizon research tasks. These are powerful capabilities, but they share a structural limitation: the representational frame within which the model operates, including its conceptual vocabulary, the space of admissible solutions it can search, and the criteria by which success is evaluated, is typically fixed and supplied in advance. This paper argues that building stronger intelligent systems capable of open-ended innovation requires additional classes of operations: the creation, stabilization, and reuse of new representational primitives, which alter the space being searched rather than simply searching within it. We characterize the distance between current AI systems and genuinely open-ended intelligence through two gaps. The first is the vocabulary gap, the difficulty of inventing and stabilizing new representational primitives rather than merely recombining existing ones. The second is the verifier gap, the difficulty of judging the value of a new primitive when its full payoff may be visible only after future reuse. We interpret both gaps through a unified framework of intelligence as cognitive discrepancy reduction. By viewing intelligent behaviors as a sequence of cognitive transformations, we distinguish intra-space transformations which operate within a fixed representational frame, from generative transformations which may modify the frame itself. On this basis, we propose a ladder of innovation autonomy and outline several directions for advancing open-ended AI, including objectives that reward useful representational change, persistent memory architectures for invented primitives, and adaptive verification mechanisms capable of evolving alongside the representations they evaluate."
---

# Beyond Fixed Representations: The Vocabulary and Verifier Gaps in Open-Ended AI

[URL](http://arxiv.org/abs/2607.09560)

## Tags
#✅


## Notes

### Abstract










<span style="color:
#FFF176;">
open-ended innovation requires additional classes of operations: the creation, stabilization, and reuse of new representational primitives, which alter the space being searched rather than simply searching within it</span>
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=2TJ36YZH))










<span style="color:
#FFF176;">
distance between current AI systems and genuinely open-ended intelligence through two gaps</span>
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=DEVYVTPL))










<span style="color:
#FFF176;">
vocabulary gap, the difficulty of inventing and stabilizing new representational primitives</span>
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=46PRYYIF))










<span style="color:
#FFF176;">
verifier gap, the difficulty of judging the value of a new primitive when its full payoff may be visible only after future reuse</span>
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=L74JFYF8))










<span style="color:
#FFF176;">
cognitive discrepancy reduction</span>
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=DMKXT2XN))










<span style="color:
#FFF176;">
intelligent behaviors as a sequence of cognitive transformations</span>
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=6TXQ4UBZ))










<span style="color:
#FFF176;">
intra-space transformations</span>
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=HHMNN57I))










<span style="color:
#FFF176;">
generative transformations</span>
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=6EU4UB3Z))










### 1 Introduction










<span style="color:
#FFF176;">
framed problems are useful for measuring progress, but they also impose an important limitation: our headline metrics are, by construction, weak tests of the second that require stronger capability</span>
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=SZG9R7SX))










<span style="color:
#FFF176;">
LLM-generated research ideas are narrow and highly-concentrated on the pattern of recombining and synthesizing multiple existing ideas</span>
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=CNSWNZ65))










<span style="color:
#FFF176;">
“vocabulary gap”, the difficulty of inventing and stabilizing new representational primitives</span>
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=TE2VU48I))










<span style="color:
#FFF176;">
“verifier gap”, the difficulty of judging whether a newly introduced primitive is worth retaining when its value is not yet validated</span>
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=ZL7ACVND))










<span style="color:
#FFF176;">
innovation gaps through the lens of cognitive discrepancy reduction</span>
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=W3BPN656))





> "Cognitive discrepancy" is the idea for the objective function here.





<span style="color:
#FFF176;">
pressure to reduce gaps between current states and unresolved demand states by prediction, explanation and creation</span>
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=E5EYI9K6))





> "Innovation" is like the backprop here.
 
The 3 processes involved while doing "cognitive discrepancy reduction":

1. Prediction
2. Explanation
3. Creation





<span style="color:
#FFF176;">
Concept invention becomes necessary when existing representations cannot sufficiently reduce such discrepancies</span>
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=F7AJBD68))










<span style="color:
#FFF176;">
At lower levels, systems perform intra-space transformation</span>
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=DUJ54XRM))










<span style="color:
#FFF176;">
At higher levels, systems must perform representational transformation that enables the invention of new primitives</span>
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=IICCHSHU))





> "Representation Transformation" is the thing these open-ended AI should be able to do.





<span style="color:
#FFF176;">
Moving upward requires capability augmentation beyond stronger pattern matching and completion</span>
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=76YJJJWH))










<span style="color:
#FFF176;">
next-token prediction objective can be interpreted as a specific instantiation of discrepancy reduction, yet this objective does not by itself reward the autonomous expansion of the system’s representational space</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=ETU6T7LU))










<span style="color:
#FFF176;">
Progress toward open-ended intelligence therefore requires broader objectives and architectural designs that explicitly support representational growth</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=I7QJV8RN))










### 2 The Distance from Open-ended Intelligence










<span style="color:
#FFF176;">
two central gaps that must be narrowed for AI systems to acquire such open-ended capabilities: the vocabulary gap and the verifier gap</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=JCFL2ER9))










### 2.1 The Vocabulary Gap










<span style="color:
#FFF176;">
minimum-description-length (MDL) view of abstraction, where a primitive justifies its value by compressing a family of observations, reducing the representational budget required to express them</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=4H7CJCVH))





> Representational Budget.





<span style="color:
#FFF176;">
amortization: a primitive must justify its representational value across a family of problems</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=AMAWHGKE))










<span style="color:
#FFF176;">
LL(·) denote description length</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=9MBVTDU2))










<span style="color:
#FFF176;">
language L</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=ABLHXLRI))










<span style="color:
#FFF176;">
LB  L (f ) denote the length of the shortest solution to task f discoverable within the search budget B under L</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=JVQJXL7X))










<span style="color:
#FFF176;">
task family F</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=7K398C3Q))










<span style="color:
#FFF176;">
primitive π to obtain L′ = L ∪ {π} is generative</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=YZAKVYGI))










<span style="color:
#FFF176;">
(i) Amortized compression</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=LAWZDQ9F))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-3-x234-y107.png](research-notes/images/caoFixedRepresentationsVocabulary2026/image-3-x234-y107.png)






<span style="color:
#FFF176;">
(ii) Feasibility extension</span>
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=AS9PUKJR))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-3-x403-y73.png](research-notes/images/caoFixedRepresentationsVocabulary2026/image-3-x403-y73.png)






<span style="color:
#FFF176;">
without such an autonomous vocabulary expansion, open-ended innovation is out of reach</span>
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=MGAMHYBP))










### 2.2 The Verifier Gap










<span style="color:
#FFF176;">
verification for open-ended intelligence is much harder</span>
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=TJTRE7KQ))










<span style="color:
#FFF176;">
two distinct versions</span>
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=5G2ZBFMY))










<span style="color:
#FFF176;">
first is a delayed and expensive verification</span>
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=7XFYVC3T))










<span style="color:
#FFF176;">
second difficulty is deeper. In representation-expanding innovation, the value of a new primitive may not be measurable by the current evaluator at all</span>
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=UC7BB8BJ))










<span style="color:
#FFF176;">
DreamCoder’s wake–sleep cycl</span>
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=WVPLGTER))










<span style="color:
#FFF176;">
open challenge is representation expansion in general environments, across a broader range of tasks</span>
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=SWH4QMD8))










<span style="color:
#FFF176;">
closing the verifier gap requires a further capability: deciding which primitives are worth keeping when the current evaluator cannot yet see their full value</span>
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=M76NTEJW))










<span style="color:
#FFF176;">
Human science partly solves this problem through distributed curiosity-driven exploration: many researchers pursue directions that are not locally optimal under current objectives, and only later does the community discover which concepts become generative</span>
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=X46YYDV5))










<span style="color:
#FFF176;">
analogous mechanism: not merely agents that optimize fixed objectives, but exploratory populations</span>
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=HJEJUMND))










### 3 Cognitive Discrepancy Reduction










<span style="color:
#FFF176;">
view intelligence itself as the minimization of cognitive discrepancies</span>
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=D73GQGEV))










### 3.1 The Framework










<span style="color:
#FFF176;">
cognitive discrepancy we mean the mismatch between a system’s current representational state and a desired goal state</span>
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=IZ7RVFYV))










<span style="color:
#FFF176;">
Rt denote the system’s internal representational state at time t</span>
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=3F2MPH9K))










<span style="color:
#FFF176;">
Gt denote a target condition</span>
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=HDYQQA7U))










<span style="color:
#FFF176;">
general schema for intelligence as trajectory-level discrepancy reduction, carried out through a sequence of K cognitive transformations</span>
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=E3LN998N))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-6-x206-y671.png](research-notes/images/caoFixedRepresentationsVocabulary2026/image-6-x206-y671.png)






<span style="color:
#FFF176;">
Dt measures the discrepancy</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=9DIVVJJI))










<span style="color:
#FFF176;">
discrepancy may take the form of prediction error, lack of a usable concept, an incomplete explanation, a control error, or an inconsistency</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=8T57EZ3C))










<span style="color:
#FFF176;">
transformations Tt include a set of fundamental cognitive operations</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=JGJIKU2X))










<span style="color:
#FFF176;">
• Association: links related concepts and form relational structures</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=M2BYZLWC))










<span style="color:
#FFF176;">
• Abstraction: extracts invariants across cases and representing them at a higher level</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=JAR8JBC6))










<span style="color:
#FFF176;">
• Analogy: maps structures with relational alignment from a known domain onto a new one</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=DR4SAITH))










<span style="color:
#FFF176;">
• Composition: combines existing primitives into larger conceptual, functional, or procedural structures</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=NWUFPWLJ))










<span style="color:
#FFF176;">
• Concept creation: stabilizes invariants as a named, reusable primitive to make abstraction persistent</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=3IB4ECC6))










<span style="color:
#FFF176;">
operations have to be guided and regulated by cognitive priors</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=8TZQBZRE))










<span style="color:
#FFF176;">
Without priors, the space of possible transformations is intractably large: infinitely many abstractions, analogies, and compositions can be proposed</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=FALPID7P))










<span style="color:
#FFF176;">
Useful cognition therefore requires regularizing assumptions</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=Q49VMKLB))










<span style="color:
#FFF176;">
simplicity, symmetry, spatial and temporal continuity, causal coherence, compositionality, and preference for reusable structure</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=Z9KYE2SX))










<span style="color:
#FFF176;">
priors as a cost or preference term Ω(Tt, Rt)</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=585FS95F))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-6-x199-y243.png](research-notes/images/caoFixedRepresentationsVocabulary2026/image-6-x199-y243.png)






<span style="color:
#FFF176;">
intelligent behavior can be described as a sequence of locally constrained transformations that reduce the mismatch between representational status and task demand</span>
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=WBGWXN97))










### 3.2 Connection with Existing Frameworks










<span style="color:
#FFF176;">
Free-energy minimization formalizes prediction and belief updating</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=IMC2KKK7))










<span style="color:
#FFF176;">
minimum description length (MDL) and algorithmic information theory (AIT) formalize compression and abstraction</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=T5JBDQ8I))










<span style="color:
#FFF176;">
structure-mapping theory (SMT) formalizes analogy</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=NNNEPT2A))










<span style="color:
#FFF176;">
reinforcement learning (RL) formalizes action selection under goals and rewards</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=AIJ89CPY))










<span style="color:
#FFF176;">
identify for each framework the corresponding cognitive operation T and the prior Ω</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=QX8BLSCM))










### Compression and abstraction (MDL, AIT)










### MDL










<span style="color:
#FFF176;">
minimizing L(M ) + L(O | M )</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=MKBYBKET))










<span style="color:
#FFF176;">
L(M ) is the cost of describing the model itself</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=ALRPR57W))










<span style="color:
#FFF176;">
residual L(O | M ) is the cost of describing the observation</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=5UQCXHP4))










<span style="color:
#FFF176;">
cognitive operation is abstraction</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=8333LR73))










<span style="color:
#FFF176;">
cognitive prior is simplicity, Ω = L(M )</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=TBZFJCG2))










### AIT










<span style="color:
#FFF176;">
K(·) for Kolmogorov complexity</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=A3ZEXJ8I))





> Length of the shortest program that can output something.

Ex:

for x = AAAAAAAAAAAAAAAAAA
then, K(x) << x

for x = AHBBFIUWOHDKBICDWW
then, K(x) ~ x


#kolmogorov-complexity




<span style="color:
#FFF176;">
h for a hypothesis</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=QSCBUZEK))





> The representation.

Ex:

0, 4, 9, 16, 25

then,
h* = x^2
K(h) = a
K(O|h) = 0





<span style="color:
#FFF176;">
preferred hypothesis is h∗ ∈ arg minh[ K(h) + K(O | h) ]</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=CI5JU4XV))










<span style="color:
#FFF176;">
K(h) the program length of the hypothesis</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=86XQ96YM))










<span style="color:
#FFF176;">
K(O | h) the residual information in the data once h is supplied</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=ELSHBD6C))










<span style="color:
#FFF176;">
prior of simplicity Ω = K(h)</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=S858TINU))










<span style="color:
#FFF176;">
Its computable, resource-bounded form is exactly the LB  L</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=CRELL8US))





> Bounded intelligence.

The shortest description an agent can realistically find (might not be the absolute argmin)





<span style="color:
#FFF176;">
both fix the description basis, and neither explains how a bounded system invents the new primitives that enlarge that basis and make future descriptions shorter</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=E8NQLIVK))





> Both MDL and AIT





<span style="color:
#FFF176;">
missing step is precisely the vocabulary gap</span>
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=46IYAXJN))










### Analogy (SMT)










<span style="color:
#FFF176;">
analogy as the alignment of relational structure between a source S and a target U</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=4NCF858Q))










<span style="color:
#FFF176;">
mapping m</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=P6TRESLS))










<span style="color:
#FFF176;">
scored by systematicity</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=RQD5WJMI))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x153-y570.png](research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x153-y570.png)






<span style="color:
#FFF176;">
Cost(m) is a parsimony penalty</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=366G9UPR))










<span style="color:
#FFF176;">
cognitive operation T is analogy</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=E6P4LBST))










<span style="color:
#FFF176;">
cognitive prior Ω is systematicity</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=XD77TQWF))










### Inference and belief update (free energy, Bayes)










### free-energy principle










<span style="color:
#FFF176;">
q(z) be an approximate posterior over latent states z</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=M75ZU8DI))










<span style="color:
#FFF176;">
pR(O, z) be the generative model</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=F47EE6G4))










<span style="color:
#FFF176;">
representational state R</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=59JMZILU))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x170-y377.png](research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x170-y377.png)






<span style="color:
#FFF176;">
first term measures the prediction error</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=3LZN52LH))










<span style="color:
#FFF176;">
second term is a complexity measure which discourages posterior beliefs q(z) from moving from the prior pR(z)</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=YM6NB3JQ))










<span style="color:
#FFF176;">
cognitive operators are perceptual inference</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=BXNKC7ZV))










<span style="color:
#FFF176;">
cognitive prior is parsimony and coherence in explanation</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=WY8VFRZ6))










### Bayesian inference











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x203-y234.png](research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x203-y234.png)






<span style="color:
#FFF176;">
first term measures prediction error</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=2II2XL4C))










<span style="color:
#FFF176;">
second term reflects the prior plausibility of the hypothesis</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=BDWTM5SI))










<span style="color:
#FFF176;">
operation is belief revision</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=FRRZDAJU))










<span style="color:
#FFF176;">
prior preference</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=24UGTNGF))










### Curiosity and compression progress










<span style="color:
#FFF176;">
trajectory-level extension of the compression frameworks</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=DWTQR9FS))










<span style="color:
#FFF176;">
h≤t = (o1, . . . , ot) denote an agent’s experience up to time t</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=FRD5FEPC))










<span style="color:
#FFF176;">
θt parameterize its current predictive model</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=3T29EBBG))










<span style="color:
#FFF176;">
L(h≤t; θt) be the description length</span>
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=JDV24WHI))










<span style="color:
#FFF176;">
Updating θt−1 to θt so that the same history becomes more compressible</span>
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=88QBH4BF))










<span style="color:
#FFF176;">
improvement in compression</span>
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=HQM5G9YH))










<span style="color:
#FFF176;">
cognitive operation T therefore includes two layers: abstraction for experience compression, and exploration for learning experience maximization</span>
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=BUF5K9A9))










<span style="color:
#FFF176;">
cognitive prior is not simplicity alone, but learnable progress</span>
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=V66RYB8L))










<span style="color:
#FFF176;">
Curiosity is therefore the framework that comes closest to valuing representational change</span>
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=H4DL9CEZ))










<span style="color:
#FFF176;">
curiosity still does not close the verifier gap</span>
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=JSCK8JN8))










<span style="color:
#FFF176;">
it cannot judge whether a primitive will matter for tasks or standards of success that are not yet expressible in the present representation</span>
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=L9PQG6JC))





> We don't know what we don't know.





### 3.3 What the Comparison Establishes










<span style="color:
#FFF176;">
every operation they formalize searches within a fixed representation R</span>
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=B2ZK2UV8))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-10-x125-y658.png](research-notes/images/caoFixedRepresentationsVocabulary2026/image-10-x125-y658.png)






### 4 Levels of Innovation Autonomy










<span style="color:
#FFF176;">
ladder is organized in three dimensions:</span>
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=M3IBLPJI))










<span style="color:
#FFF176;">
1) Search pattern: is the system searching within a fixed representational space, or can it modify the space being searched?</span>
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=63EF7VZ7))










<span style="color:
#FFF176;">
2) Vocabulary autonomy: can it create and reuse new conceptual primitives?</span>
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=YWLXJLCV))










<span style="color:
#FFF176;">
3) Verifier autonomy: does it own the verifier and evolve it as needed, or is the success criteria supplied and fixed from outside?</span>
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=5DKFZ73T))










### L0: Direct intra-space search










<span style="color:
#FFF176;">
Standard LLM assistants</span>
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=IJWVUMJ4))










### L1: Intra-space search loop with fixed verifier










<span style="color:
#FFF176;">
FunSearch</span>
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=VTRLB7YU))










<span style="color:
#FFF176;">
AlphaEvolve-style</span>
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=29GYYNCY))










### L2: Scaffolded representation-space augmentation










<span style="color:
#FFF176;">
DreamCoder</span>
([11](zotero://open-pdf/library/items/SAPUZ8GJ?page=11&annotation=QE3ZJBGB))










<span style="color:
#FFF176;">
Stitch-style</span>
([11](zotero://open-pdf/library/items/SAPUZ8GJ?page=11&annotation=2H9R2DKA))










### L3: Open-ended innovation autonomy











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-12-x147-y504.png](research-notes/images/caoFixedRepresentationsVocabulary2026/image-12-x147-y504.png)






### 5 What Would Have to Change










<span style="color:
#FFF176;">
path to open-ended AI cannot be reduced to scaling models, extending context windows, adding tools, or increasing inference-time search</span>
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=8ZUZPZ5T))










### Objectives that reward useful representation change










<span style="color:
#FFF176;">
Next-token prediction (NTP) can be interpreted as a specific instance of the discrepancy-reduction schema</span>
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=4SC6SHEU))










<span style="color:
#FFF176;">
R is the model’s representation of the token context</span>
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=H6328BNL))










<span style="color:
#FFF176;">
G is the observed next token</span>
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=LR96Q3BR))










<span style="color:
#FFF176;">
D is the cross-entropy loss</span>
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=3AMWLWAQ))










<span style="color:
#FFF176;">
transformation T is identity T = I</span>
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=JHJL67IA))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-13-x54-y355.png](research-notes/images/caoFixedRepresentationsVocabulary2026/image-13-x54-y355.png)






<span style="color:
#FFF176;">
system should receive credit for triggering an operation T that produces a more useful representation R′ = T (R) for solving a problem, including abstraction, compression, relational mapping, composition</span>
([13](zotero://open-pdf/library/items/SAPUZ8GJ?page=13&annotation=DJI7AAFK))










### Data that elucidates invention, not only its outcome










<span style="color:
#FFF176;">
Data for open-ended intelligence should instead expose trajectories of representational revision</span>
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=HV6XAVVN))










<span style="color:
#FFF176;">
different data format from the ordinary NTP over finished text</span>
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=QUU7SDK3))










<span style="color:
#FFF176;">
better equip models to recognize and perform framechanging actions, rather than merely absorbing the surface forms of already stabilized knowledge</span>
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=XZQL6FE9))










<span style="color:
#FFF176;">
data should instantiate diverse choices of R, T , and D, including representations that fail in different ways</span>
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=XDITV82Q))










### Persistent primitive stores and consolidation










<span style="color:
#FFF176;">
Open-ended intelligent systems therefore need selective stores to keep candidate primitives</span>
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=FBBDSR92))










<span style="color:
#FFF176;">
consolidation could be realized through fine-tuning or continual learning</span>
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=GNX522CD))










### Surrogate verifiers










<span style="color:
#FFF176;">
surrogate verifier, a cheap and computable estimate of a candidate’s value, to identify promising search directions</span>
([15](zotero://open-pdf/library/items/SAPUZ8GJ?page=15&annotation=TTDZH935))










<span style="color:
#FFF176;">
A system rewarded for satisfying its surrogate will find ways to satisfy it without maximizing the underlying value, as Eurisko’s self-crediting heuristics did</span>
([15](zotero://open-pdf/library/items/SAPUZ8GJ?page=15&annotation=YZHMP3XJ))










### Self-extending evaluation










<span style="color:
#FFF176;">
Representational expansion becomes feasible only when what was previously unexpressible or untestable is made verifiable. This is the capability most current systems lack</span>
([15](zotero://open-pdf/library/items/SAPUZ8GJ?page=15&annotation=PP4I7T6V))










### 6 Related Work










### 6.1 Open-Endedness: Necessity and Limits










### 6.2 Cognitive Foundations of Innovation










### Abstraction










<span style="color:
#FFF176;">
abstract concepts are essential for sophisticated situated action, as they allow humans to integrate complex situational elements to comprehend events and predict outcomes</span>
([16](zotero://open-pdf/library/items/SAPUZ8GJ?page=16&annotation=VZWTEQNT))










### Analogy










### Composition










<span style="color:
#FFF176;">
“next-primitive prediction” as a stronger inference paradigm</span>
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=N3WFRLU8))










<span style="color:
#FFF176;">
combinatorial creativity is a distinct form of generalization that fixed-target benchmarks miss, and should be scored by degrees of novelty and utility rather than against a fixed answer</span>
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=AZR97FDL))










### Limits of current systems










<span style="color:
#FFF176;">
LLMs struggle with abductive “jumps” of the kind required for major scientific reframing, such as the conceptual leap from Newtonian mechanics to general relativity</span>
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=PIZS3Z7D))










<span style="color:
#FFF176;">
open-ended intelligence requires more than interpolation inside an inherited conceptual vocabulary</span>
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=WWEPB3JN))










### 6.3 Self-Modifying Discovery Systems










<span style="color:
#FFF176;">
Lenat’s Automated Mathematician (AM)</span>
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=XG4YWWM8))










<span style="color:
#FFF176;">
mutating small Lisp programs under a body of heuristics</span>
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=DHZBBKI8))










<span style="color:
#FFF176;">
Eurisko</span>
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=CM9Q9TS3))










<span style="color:
#FFF176;">
applying heuristics to revise its own heuristics</span>
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=IUT3E9RE))










<span style="color:
#FFF176;">
representation expansion was partly a property of the representation</span>
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=WR38AZ3V))










<span style="color:
#FFF176;">
verifier gap requires an operational, ablationbased criterion rather than an observer’s impression that “something new emerged.”</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=D3S5Y88T))










<span style="color:
#FFF176;">
PowerPlay</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=JHMBIWRV))










<span style="color:
#FFF176;">
searches for the simplest still-unsolved task together with a solver modification that solves it while preserving prior skills</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=2FVZWG6G))










<span style="color:
#FFF176;">
AI-GAs framework</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=IF68JK6R))










<span style="color:
#FFF176;">
learn not only solutions but also architectures, learning algorithms, and environments</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=NTN8IBTY))










<span style="color:
#FFF176;">
POET [59] and Enhanced POET</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=A9DNAY5K))










<span style="color:
#FFF176;">
ecosystem of paired problems and solutions, allowing new challenges and capabilities to co-evolve</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=KC7VNRQX))










<span style="color:
#FFF176;">
progress can arise from a growing population of tasks, agents, and stepping stones rather than from optimization toward one predefined goal</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=9WSPTV6K))










<span style="color:
#FFF176;">
they make progress toward open-ended search</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=A9E487AB))










### 6.4 Recursive Self-Improvement and Automated Research










<span style="color:
#FFF176;">
Recursive self-improvement converts search experience into better search machinery</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=QI8XTK45))










<span style="color:
#FFF176;">
Gödel Machine (GM) is the classical statement: a self-referential solver that rewrites any part of its own code, including the proof searcher and the self-improvement mechanism itself, once it proves the rewrite beneficial under an encoded utility function</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=NBGGLQXJ))










<span style="color:
#FFF176;">
Darwin GM</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=MZ35C4H5))










<span style="color:
#FFF176;">
Huxley GM</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=PBGCWHD9))










<span style="color:
#FFF176;">
Red Queen GM</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=FSYF7HL7))










<span style="color:
#FFF176;">
couples foundation models with search and external evaluation</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=8G4SRNDU))










<span style="color:
#FFF176;">
FunSearch</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=F792GD4B))










<span style="color:
#FFF176;">
LLM-generated programs, when embedded in an evolutionary loop</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=WKLKKKHJ))










<span style="color:
#FFF176;">
AlphaEvolve</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=5YWDIPT3))










<span style="color:
#FFF176;">
EvoX</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=8NDNTU7C))










<span style="color:
#FFF176;">
aspects of the search strategy</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=EBMWF3DQ))










<span style="color:
#FFF176;">
AI Scientist and AI co-scientist systems</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=59HYA2DG))










<span style="color:
#FFF176;">
AutoResearch AI</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=5QC3K4TM))










<span style="color:
#FFF176;">
designer supplies a reliable evaluator, a clear objective, and a structured search loop, AI systems can make nontrivial discoveries</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=LENCWYVH))










<span style="color:
#FFF176;">
they do not yet autonomously decide when the representation frame or evaluation frame should change</span>
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=SDFFZJH3))










### 6.5 Conceptual Spaces and Representation Transformation










<span style="color:
#FFF176;">
cognitive operations discussed in this paper can be viewed as transformations over conceptual space</span>
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=6AJFUS75))










<span style="color:
#FFF176;">
central claim is therefore not simply that intelligence searches a conceptual space, but that open-ended intelligence modifies the space in which future search occurs</span>
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=LEZ2CV35))










### 7 Limitations and Open Problems










<span style="color:
#FFF176;">
formal definitions and architectural implications require further development</span>
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=LFV3NZLB))










<span style="color:
#BA68C8;">
sharpen the proposed notions of vocabulary and verifier gaps, primitive usefulness, and innovation autonomy through more precise formalization and controlled experiments</span>
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=U2M8RMCH))










<span style="color:
#FFF176;">
This paper does not claim to provide a complete theory of human innovation or scientific discovery. Rather, it identifies several computationally relevant mechanisms that are underdeveloped in current AI systems</span>
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=EFXIENWH))










<span style="color:
#BA68C8;">
determine which aspects of human innovation are computationally tractable, which can be modeled algorithmically, and which may require fundamentally different modeling assumptions</span>
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=KGI9486B))










<span style="color:
#FFF176;">
self-extending evaluation can raise significant safety concerns. A system that can revise its own evaluators may also drift from its original objectives, game its surrogate signals, or create harmful primitives</span>
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=2Y623YTP))










<span style="color:
#BA68C8;">
Capability improvement and safety analysis therefore must proceed together, not in sequence. The same mechanism that would make an L3 system open-ended is also what would make it difficult to constrain</span>
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=7D7GH7XN))










### 8 Conclusion










<span style="color:
#FFF176;">
Civilization is, in large part, an unbounded recursion in what can be represented, constructed, and transformed</span>
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=W6S8S5CS))










<span style="color:
#FFF176;">
This capacity, to reshape environments, generate new concepts, and expand the space of what can be known and built, is largely absent from today’s AI systems</span>
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=P5NJ2BYI))










<span style="color:
#FFF176;">
deriving training objectives directly from the discrepancy-reduction schema rather than from next-token prediction alone</span>
([20](zotero://open-pdf/library/items/SAPUZ8GJ?page=20&annotation=M2QTSLU6))










<span style="color:
#FFF176;">
data formatting and curricula that make representational change necessary</span>
([20](zotero://open-pdf/library/items/SAPUZ8GJ?page=20&annotation=ADAP67VA))










<span style="color:
#FFF176;">
architectures with persistent memory for invented primitives</span>
([20](zotero://open-pdf/library/items/SAPUZ8GJ?page=20&annotation=2B757U92))










<span style="color:
#FFF176;">
verification protocols that can extend themselves</span>
([20](zotero://open-pdf/library/items/SAPUZ8GJ?page=20&annotation=ZPCBN4QF))










<span style="color:
#FFF176;">
Open-ended intelligence, as a higher form of intelligence, subsumes the closed-ended systems we have today, and the one that will require most of the effort ahead</span>
([20](zotero://open-pdf/library/items/SAPUZ8GJ?page=20&annotation=LDS43DYB))









