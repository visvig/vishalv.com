---
title: "Beyond Fixed Representations: The Vocabulary and Verifier Gaps in Open-Ended AI"
date: "2026-08-10"
tags:
  - "kolmogorov-complexity"
draft: false
summary: "Modern AI systems are increasingly being evaluated for their ability to reason, code, prove theorems, use tools, and long-horizon research tasks. These are powerful capabilities, but they share a structural limitation: the representational frame within which the model operates,..."
---
{/* Generated from data/frontiers/research-notes. Edit the source file, then run `yarn publish:research-notes`. */}

[URL](http://arxiv.org/abs/2607.09560)

## Notes

### Abstract










> open-ended innovation requires additional classes of operations: the creation, stabilization, and reuse of new representational primitives, which alter the space being searched rather than simply searching within it
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=2TJ36YZH))










> distance between current AI systems and genuinely open-ended intelligence through two gaps
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=DEVYVTPL))










> vocabulary gap, the difficulty of inventing and stabilizing new representational primitives
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=46PRYYIF))










> verifier gap, the difficulty of judging the value of a new primitive when its full payoff may be visible only after future reuse
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=L74JFYF8))










> cognitive discrepancy reduction
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=DMKXT2XN))










> intelligent behaviors as a sequence of cognitive transformations
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=6TXQ4UBZ))










> intra-space transformations
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=HHMNN57I))










> generative transformations
([](zotero://open-pdf/library/items/SAPUZ8GJ?page=&annotation=6EU4UB3Z))










### 1 Introduction










> framed problems are useful for measuring progress, but they also impose an important limitation: our headline metrics are, by construction, weak tests of the second that require stronger capability
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=SZG9R7SX))










> LLM-generated research ideas are narrow and highly-concentrated on the pattern of recombining and synthesizing multiple existing ideas
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=CNSWNZ65))










> “vocabulary gap”, the difficulty of inventing and stabilizing new representational primitives
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=TE2VU48I))










> “verifier gap”, the difficulty of judging whether a newly introduced primitive is worth retaining when its value is not yet validated
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=ZL7ACVND))










> innovation gaps through the lens of cognitive discrepancy reduction
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=W3BPN656))





> "Cognitive discrepancy" is the idea for the objective function here.





> pressure to reduce gaps between current states and unresolved demand states by prediction, explanation and creation
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=E5EYI9K6))





> "Innovation" is like the backprop here.
 
The 3 processes involved while doing "cognitive discrepancy reduction":

1. Prediction
2. Explanation
3. Creation





> Concept invention becomes necessary when existing representations cannot sufficiently reduce such discrepancies
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=F7AJBD68))










> At lower levels, systems perform intra-space transformation
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=DUJ54XRM))










> At higher levels, systems must perform representational transformation that enables the invention of new primitives
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=IICCHSHU))





> "Representation Transformation" is the thing these open-ended AI should be able to do.





> Moving upward requires capability augmentation beyond stronger pattern matching and completion
([2](zotero://open-pdf/library/items/SAPUZ8GJ?page=2&annotation=76YJJJWH))










> next-token prediction objective can be interpreted as a specific instantiation of discrepancy reduction, yet this objective does not by itself reward the autonomous expansion of the system’s representational space
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=ETU6T7LU))










> Progress toward open-ended intelligence therefore requires broader objectives and architectural designs that explicitly support representational growth
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=I7QJV8RN))










### 2 The Distance from Open-ended Intelligence










> two central gaps that must be narrowed for AI systems to acquire such open-ended capabilities: the vocabulary gap and the verifier gap
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=JCFL2ER9))










### 2.1 The Vocabulary Gap










> minimum-description-length (MDL) view of abstraction, where a primitive justifies its value by compressing a family of observations, reducing the representational budget required to express them
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=4H7CJCVH))





> Representational Budget.





> amortization: a primitive must justify its representational value across a family of problems
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=AMAWHGKE))










> LL(·) denote description length
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=9MBVTDU2))










> language L
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=ABLHXLRI))










> LB  L (f ) denote the length of the shortest solution to task f discoverable within the search budget B under L
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=JVQJXL7X))










> task family F
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=7K398C3Q))










> primitive π to obtain L′ = L ∪ \{π\} is generative
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=YZAKVYGI))










> (i) Amortized compression
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=LAWZDQ9F))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-3-x234-y107.png](/static/research-notes/images/caoFixedRepresentationsVocabulary2026/image-3-x234-y107.png)






> (ii) Feasibility extension
([3](zotero://open-pdf/library/items/SAPUZ8GJ?page=3&annotation=AS9PUKJR))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-3-x403-y73.png](/static/research-notes/images/caoFixedRepresentationsVocabulary2026/image-3-x403-y73.png)






> without such an autonomous vocabulary expansion, open-ended innovation is out of reach
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=MGAMHYBP))










### 2.2 The Verifier Gap










> verification for open-ended intelligence is much harder
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=TJTRE7KQ))










> two distinct versions
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=5G2ZBFMY))










> first is a delayed and expensive verification
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=7XFYVC3T))










> second difficulty is deeper. In representation-expanding innovation, the value of a new primitive may not be measurable by the current evaluator at all
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=UC7BB8BJ))










> DreamCoder’s wake–sleep cycl
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=WVPLGTER))










> open challenge is representation expansion in general environments, across a broader range of tasks
([4](zotero://open-pdf/library/items/SAPUZ8GJ?page=4&annotation=SWH4QMD8))










> closing the verifier gap requires a further capability: deciding which primitives are worth keeping when the current evaluator cannot yet see their full value
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=M76NTEJW))










> Human science partly solves this problem through distributed curiosity-driven exploration: many researchers pursue directions that are not locally optimal under current objectives, and only later does the community discover which concepts become generative
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=X46YYDV5))










> analogous mechanism: not merely agents that optimize fixed objectives, but exploratory populations
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=HJEJUMND))










### 3 Cognitive Discrepancy Reduction










> view intelligence itself as the minimization of cognitive discrepancies
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=D73GQGEV))










### 3.1 The Framework










> cognitive discrepancy we mean the mismatch between a system’s current representational state and a desired goal state
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=IZ7RVFYV))










> Rt denote the system’s internal representational state at time t
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=3F2MPH9K))










> Gt denote a target condition
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=HDYQQA7U))










> general schema for intelligence as trajectory-level discrepancy reduction, carried out through a sequence of K cognitive transformations
([5](zotero://open-pdf/library/items/SAPUZ8GJ?page=5&annotation=E3LN998N))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-6-x206-y671.png](/static/research-notes/images/caoFixedRepresentationsVocabulary2026/image-6-x206-y671.png)






> Dt measures the discrepancy
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=9DIVVJJI))










> discrepancy may take the form of prediction error, lack of a usable concept, an incomplete explanation, a control error, or an inconsistency
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=8T57EZ3C))










> transformations Tt include a set of fundamental cognitive operations
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=JGJIKU2X))










> • Association: links related concepts and form relational structures
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=M2BYZLWC))










> • Abstraction: extracts invariants across cases and representing them at a higher level
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=JAR8JBC6))










> • Analogy: maps structures with relational alignment from a known domain onto a new one
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=DR4SAITH))










> • Composition: combines existing primitives into larger conceptual, functional, or procedural structures
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=NWUFPWLJ))










> • Concept creation: stabilizes invariants as a named, reusable primitive to make abstraction persistent
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=3IB4ECC6))










> operations have to be guided and regulated by cognitive priors
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=8TZQBZRE))










> Without priors, the space of possible transformations is intractably large: infinitely many abstractions, analogies, and compositions can be proposed
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=FALPID7P))










> Useful cognition therefore requires regularizing assumptions
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=Q49VMKLB))










> simplicity, symmetry, spatial and temporal continuity, causal coherence, compositionality, and preference for reusable structure
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=Z9KYE2SX))










> priors as a cost or preference term Ω(Tt, Rt)
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=585FS95F))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-6-x199-y243.png](/static/research-notes/images/caoFixedRepresentationsVocabulary2026/image-6-x199-y243.png)






> intelligent behavior can be described as a sequence of locally constrained transformations that reduce the mismatch between representational status and task demand
([6](zotero://open-pdf/library/items/SAPUZ8GJ?page=6&annotation=WBGWXN97))










### 3.2 Connection with Existing Frameworks










> Free-energy minimization formalizes prediction and belief updating
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=IMC2KKK7))










> minimum description length (MDL) and algorithmic information theory (AIT) formalize compression and abstraction
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=T5JBDQ8I))










> structure-mapping theory (SMT) formalizes analogy
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=NNNEPT2A))










> reinforcement learning (RL) formalizes action selection under goals and rewards
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=AIJ89CPY))










> identify for each framework the corresponding cognitive operation T and the prior Ω
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=QX8BLSCM))










### Compression and abstraction (MDL, AIT)










### MDL










> minimizing L(M ) + L(O | M )
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=MKBYBKET))










> L(M ) is the cost of describing the model itself
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=ALRPR57W))










> residual L(O | M ) is the cost of describing the observation
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=5UQCXHP4))










> cognitive operation is abstraction
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=8333LR73))










> cognitive prior is simplicity, Ω = L(M )
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=TBZFJCG2))










### AIT










> K(·) for Kolmogorov complexity
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=A3ZEXJ8I))





> Length of the shortest program that can output something.

Ex:

for x = AAAAAAAAAAAAAAAAAA
then, K(x) &lt;&lt; x

for x = AHBBFIUWOHDKBICDWW
then, K(x) ~ x






> h for a hypothesis
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=QSCBUZEK))





> The representation.

Ex:

0, 4, 9, 16, 25

then,
h* = x^2
K(h) = a
K(O|h) = 0





> preferred hypothesis is h∗ ∈ arg minh[ K(h) + K(O | h) ]
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=CI5JU4XV))










> K(h) the program length of the hypothesis
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=86XQ96YM))










> K(O | h) the residual information in the data once h is supplied
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=ELSHBD6C))










> prior of simplicity Ω = K(h)
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=S858TINU))










> Its computable, resource-bounded form is exactly the LB  L
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=CRELL8US))





> Bounded intelligence.

The shortest description an agent can realistically find (might not be the absolute argmin)





> both fix the description basis, and neither explains how a bounded system invents the new primitives that enlarge that basis and make future descriptions shorter
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=E8NQLIVK))





> Both MDL and AIT





> missing step is precisely the vocabulary gap
([7](zotero://open-pdf/library/items/SAPUZ8GJ?page=7&annotation=46IYAXJN))










### Analogy (SMT)










> analogy as the alignment of relational structure between a source S and a target U
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=4NCF858Q))










> mapping m
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=P6TRESLS))










> scored by systematicity
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=RQD5WJMI))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x153-y570.png](/static/research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x153-y570.png)






> Cost(m) is a parsimony penalty
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=366G9UPR))










> cognitive operation T is analogy
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=E6P4LBST))










> cognitive prior Ω is systematicity
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=XD77TQWF))










### Inference and belief update (free energy, Bayes)










### free-energy principle










> q(z) be an approximate posterior over latent states z
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=M75ZU8DI))










> pR(O, z) be the generative model
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=F47EE6G4))










> representational state R
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=59JMZILU))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x170-y377.png](/static/research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x170-y377.png)






> first term measures the prediction error
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=3LZN52LH))










> second term is a complexity measure which discourages posterior beliefs q(z) from moving from the prior pR(z)
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=YM6NB3JQ))










> cognitive operators are perceptual inference
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=BXNKC7ZV))










> cognitive prior is parsimony and coherence in explanation
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=WY8VFRZ6))










### Bayesian inference











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x203-y234.png](/static/research-notes/images/caoFixedRepresentationsVocabulary2026/image-8-x203-y234.png)






> first term measures prediction error
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=2II2XL4C))










> second term reflects the prior plausibility of the hypothesis
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=BDWTM5SI))










> operation is belief revision
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=FRRZDAJU))










> prior preference
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=24UGTNGF))










### Curiosity and compression progress










> trajectory-level extension of the compression frameworks
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=DWTQR9FS))










> h≤t = (o1, . . . , ot) denote an agent’s experience up to time t
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=FRD5FEPC))










> θt parameterize its current predictive model
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=3T29EBBG))










> L(h≤t; θt) be the description length
([8](zotero://open-pdf/library/items/SAPUZ8GJ?page=8&annotation=JDV24WHI))










> Updating θt−1 to θt so that the same history becomes more compressible
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=88QBH4BF))










> improvement in compression
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=HQM5G9YH))










> cognitive operation T therefore includes two layers: abstraction for experience compression, and exploration for learning experience maximization
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=BUF5K9A9))










> cognitive prior is not simplicity alone, but learnable progress
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=V66RYB8L))










> Curiosity is therefore the framework that comes closest to valuing representational change
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=H4DL9CEZ))










> curiosity still does not close the verifier gap
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=JSCK8JN8))










> it cannot judge whether a primitive will matter for tasks or standards of success that are not yet expressible in the present representation
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=L9PQG6JC))





> We don't know what we don't know.





### 3.3 What the Comparison Establishes










> every operation they formalize searches within a fixed representation R
([9](zotero://open-pdf/library/items/SAPUZ8GJ?page=9&annotation=B2ZK2UV8))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-10-x125-y658.png](/static/research-notes/images/caoFixedRepresentationsVocabulary2026/image-10-x125-y658.png)






### 4 Levels of Innovation Autonomy










> ladder is organized in three dimensions:
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=M3IBLPJI))










> 1) Search pattern: is the system searching within a fixed representational space, or can it modify the space being searched?
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=63EF7VZ7))










> 2) Vocabulary autonomy: can it create and reuse new conceptual primitives?
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=YWLXJLCV))










> 3) Verifier autonomy: does it own the verifier and evolve it as needed, or is the success criteria supplied and fixed from outside?
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=5DKFZ73T))










### L0: Direct intra-space search










> Standard LLM assistants
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=IJWVUMJ4))










### L1: Intra-space search loop with fixed verifier










> FunSearch
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=VTRLB7YU))










> AlphaEvolve-style
([10](zotero://open-pdf/library/items/SAPUZ8GJ?page=10&annotation=29GYYNCY))










### L2: Scaffolded representation-space augmentation










> DreamCoder
([11](zotero://open-pdf/library/items/SAPUZ8GJ?page=11&annotation=QE3ZJBGB))










> Stitch-style
([11](zotero://open-pdf/library/items/SAPUZ8GJ?page=11&annotation=2H9R2DKA))










### L3: Open-ended innovation autonomy











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-12-x147-y504.png](/static/research-notes/images/caoFixedRepresentationsVocabulary2026/image-12-x147-y504.png)






### 5 What Would Have to Change










> path to open-ended AI cannot be reduced to scaling models, extending context windows, adding tools, or increasing inference-time search
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=8ZUZPZ5T))










### Objectives that reward useful representation change










> Next-token prediction (NTP) can be interpreted as a specific instance of the discrepancy-reduction schema
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=4SC6SHEU))










> R is the model’s representation of the token context
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=H6328BNL))










> G is the observed next token
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=LR96Q3BR))










> D is the cross-entropy loss
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=3AMWLWAQ))










> transformation T is identity T = I
([12](zotero://open-pdf/library/items/SAPUZ8GJ?page=12&annotation=JHJL67IA))











![research-notes/images/caoFixedRepresentationsVocabulary2026/image-13-x54-y355.png](/static/research-notes/images/caoFixedRepresentationsVocabulary2026/image-13-x54-y355.png)






> system should receive credit for triggering an operation T that produces a more useful representation R′ = T (R) for solving a problem, including abstraction, compression, relational mapping, composition
([13](zotero://open-pdf/library/items/SAPUZ8GJ?page=13&annotation=DJI7AAFK))










### Data that elucidates invention, not only its outcome










> Data for open-ended intelligence should instead expose trajectories of representational revision
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=HV6XAVVN))










> different data format from the ordinary NTP over finished text
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=QUU7SDK3))










> better equip models to recognize and perform framechanging actions, rather than merely absorbing the surface forms of already stabilized knowledge
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=XZQL6FE9))










> data should instantiate diverse choices of R, T , and D, including representations that fail in different ways
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=XDITV82Q))










### Persistent primitive stores and consolidation










> Open-ended intelligent systems therefore need selective stores to keep candidate primitives
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=FBBDSR92))










> consolidation could be realized through fine-tuning or continual learning
([14](zotero://open-pdf/library/items/SAPUZ8GJ?page=14&annotation=GNX522CD))










### Surrogate verifiers










> surrogate verifier, a cheap and computable estimate of a candidate’s value, to identify promising search directions
([15](zotero://open-pdf/library/items/SAPUZ8GJ?page=15&annotation=TTDZH935))










> A system rewarded for satisfying its surrogate will find ways to satisfy it without maximizing the underlying value, as Eurisko’s self-crediting heuristics did
([15](zotero://open-pdf/library/items/SAPUZ8GJ?page=15&annotation=YZHMP3XJ))










### Self-extending evaluation










> Representational expansion becomes feasible only when what was previously unexpressible or untestable is made verifiable. This is the capability most current systems lack
([15](zotero://open-pdf/library/items/SAPUZ8GJ?page=15&annotation=PP4I7T6V))










### 6 Related Work










### 6.1 Open-Endedness: Necessity and Limits










### 6.2 Cognitive Foundations of Innovation










### Abstraction










> abstract concepts are essential for sophisticated situated action, as they allow humans to integrate complex situational elements to comprehend events and predict outcomes
([16](zotero://open-pdf/library/items/SAPUZ8GJ?page=16&annotation=VZWTEQNT))










### Analogy










### Composition










> “next-primitive prediction” as a stronger inference paradigm
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=N3WFRLU8))










> combinatorial creativity is a distinct form of generalization that fixed-target benchmarks miss, and should be scored by degrees of novelty and utility rather than against a fixed answer
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=AZR97FDL))










### Limits of current systems










> LLMs struggle with abductive “jumps” of the kind required for major scientific reframing, such as the conceptual leap from Newtonian mechanics to general relativity
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=PIZS3Z7D))










> open-ended intelligence requires more than interpolation inside an inherited conceptual vocabulary
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=WWEPB3JN))










### 6.3 Self-Modifying Discovery Systems










> Lenat’s Automated Mathematician (AM)
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=XG4YWWM8))










> mutating small Lisp programs under a body of heuristics
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=DHZBBKI8))










> Eurisko
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=CM9Q9TS3))










> applying heuristics to revise its own heuristics
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=IUT3E9RE))










> representation expansion was partly a property of the representation
([17](zotero://open-pdf/library/items/SAPUZ8GJ?page=17&annotation=WR38AZ3V))










> verifier gap requires an operational, ablationbased criterion rather than an observer’s impression that “something new emerged.”
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=D3S5Y88T))










> PowerPlay
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=JHMBIWRV))










> searches for the simplest still-unsolved task together with a solver modification that solves it while preserving prior skills
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=2FVZWG6G))










> AI-GAs framework
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=IF68JK6R))










> learn not only solutions but also architectures, learning algorithms, and environments
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=NTN8IBTY))










> POET [59] and Enhanced POET
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=A9DNAY5K))










> ecosystem of paired problems and solutions, allowing new challenges and capabilities to co-evolve
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=KC7VNRQX))










> progress can arise from a growing population of tasks, agents, and stepping stones rather than from optimization toward one predefined goal
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=9WSPTV6K))










> they make progress toward open-ended search
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=A9E487AB))










### 6.4 Recursive Self-Improvement and Automated Research










> Recursive self-improvement converts search experience into better search machinery
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=QI8XTK45))










> Gödel Machine (GM) is the classical statement: a self-referential solver that rewrites any part of its own code, including the proof searcher and the self-improvement mechanism itself, once it proves the rewrite beneficial under an encoded utility function
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=NBGGLQXJ))










> Darwin GM
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=MZ35C4H5))










> Huxley GM
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=PBGCWHD9))










> Red Queen GM
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=FSYF7HL7))










> couples foundation models with search and external evaluation
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=8G4SRNDU))










> FunSearch
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=F792GD4B))










> LLM-generated programs, when embedded in an evolutionary loop
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=WKLKKKHJ))










> AlphaEvolve
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=5YWDIPT3))










> EvoX
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=8NDNTU7C))










> aspects of the search strategy
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=EBMWF3DQ))










> AI Scientist and AI co-scientist systems
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=59HYA2DG))










> AutoResearch AI
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=5QC3K4TM))










> designer supplies a reliable evaluator, a clear objective, and a structured search loop, AI systems can make nontrivial discoveries
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=LENCWYVH))










> they do not yet autonomously decide when the representation frame or evaluation frame should change
([18](zotero://open-pdf/library/items/SAPUZ8GJ?page=18&annotation=SDFFZJH3))










### 6.5 Conceptual Spaces and Representation Transformation










> cognitive operations discussed in this paper can be viewed as transformations over conceptual space
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=6AJFUS75))










> central claim is therefore not simply that intelligence searches a conceptual space, but that open-ended intelligence modifies the space in which future search occurs
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=LEZ2CV35))










### 7 Limitations and Open Problems










> formal definitions and architectural implications require further development
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=LFV3NZLB))










> sharpen the proposed notions of vocabulary and verifier gaps, primitive usefulness, and innovation autonomy through more precise formalization and controlled experiments
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=U2M8RMCH))










> This paper does not claim to provide a complete theory of human innovation or scientific discovery. Rather, it identifies several computationally relevant mechanisms that are underdeveloped in current AI systems
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=EFXIENWH))










> determine which aspects of human innovation are computationally tractable, which can be modeled algorithmically, and which may require fundamentally different modeling assumptions
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=KGI9486B))










> self-extending evaluation can raise significant safety concerns. A system that can revise its own evaluators may also drift from its original objectives, game its surrogate signals, or create harmful primitives
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=2Y623YTP))










> Capability improvement and safety analysis therefore must proceed together, not in sequence. The same mechanism that would make an L3 system open-ended is also what would make it difficult to constrain
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=7D7GH7XN))










### 8 Conclusion










> Civilization is, in large part, an unbounded recursion in what can be represented, constructed, and transformed
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=W6S8S5CS))










> This capacity, to reshape environments, generate new concepts, and expand the space of what can be known and built, is largely absent from today’s AI systems
([19](zotero://open-pdf/library/items/SAPUZ8GJ?page=19&annotation=P5NJ2BYI))










> deriving training objectives directly from the discrepancy-reduction schema rather than from next-token prediction alone
([20](zotero://open-pdf/library/items/SAPUZ8GJ?page=20&annotation=M2QTSLU6))










> data formatting and curricula that make representational change necessary
([20](zotero://open-pdf/library/items/SAPUZ8GJ?page=20&annotation=ADAP67VA))










> architectures with persistent memory for invented primitives
([20](zotero://open-pdf/library/items/SAPUZ8GJ?page=20&annotation=2B757U92))










> verification protocols that can extend themselves
([20](zotero://open-pdf/library/items/SAPUZ8GJ?page=20&annotation=ZPCBN4QF))










> Open-ended intelligence, as a higher form of intelligence, subsumes the closed-ended systems we have today, and the one that will require most of the effort ahead
([20](zotero://open-pdf/library/items/SAPUZ8GJ?page=20&annotation=LDS43DYB))
