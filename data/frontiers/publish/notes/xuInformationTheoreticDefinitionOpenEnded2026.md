---
title: "An Information-Theoretic Definition for Open-Ended Learning"
date: "2026-08-04"
tags:
  - "bit-equivalent"
  - "probability-space"
  - "bandit-environment"
  - "nat"
  - "data-processing-inequality"
  - "kernelized-bandit-optimization"
  - "gaussian-process"
  - "mercer-decomposition"
  - "spectral-tail"
  - "matern-kernel"
  - "squared-exponential-kernel"
  - "thompson-sampling"
  - "fixed-truncation"
  - "gp-ucb"
draft: false
summary: "A growing body of work points to the great promise of AI systems that can continually expand their capabilities as they operate in an open-ended environment. But yet there is no coherent definition of open-endedness or theory about how an agent ought to explore an open-ended..."
---
{/* Generated from data/frontiers/research-notes. Edit the source file, then run `yarn publish:research-notes`. */}

[URL](http://arxiv.org/abs/2606.08369)

## Notes

### Abstract










> there is no coherent definition of open-endedness or theory about how an agent ought to explore an open-ended environment
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=WVSR2Q85))










> bit-equivalent – which quantifies the information required to attain each level of expected reward
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=BT6W9TSP))










> environment to be open-ended if an agent can attain linear growth in the bitequivalent
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=R5ZUHM8C))










### 1 Introduction










> environment as open-ended if the sequence of artifacts an agent produces is both novel and learnable, from the perspective of an observer
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=MG3G3EST))










> novelty means that there is greater uncertainty about future relative to current observations
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=4VAYGTA3))










> learnable means that current observations inform predictions of future observations
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=PV53Z9ZX))










> novelty and learnability do not fully capture open-endedness
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=2ZSVYR3J))










> agent that continually generates novel and learnable policies does not necessarily acquire information that enables improved performance
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=INYTQQ4I))










> environment open-ended if sustained reward improvement requires continual acquisition of useful information
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=NUA99DDU))










> bit-equivalent Bρ of expected reward ρ is the minimum amount of information about the environment required to attain expected reward ρ
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=ZY687ML6))











> agent achieves open-ended learning in such an environment if it realizes this linear rate
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=J6H6ASER))










> example of an open-ended environment that is an infinite-dimensional linear-Gaussian bandit and establish that a variant of Thompson sampling achieves open-ended learning
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=SGJMD3FL))










### 2 Problem Formulation










> big-O notation to express asymptotic behavior of functions
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=WT6D2722))










> O ̃, when we choose to ignore logarithmic factors
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=IJ9NVKVH))










> log to denote the natural logarithm
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=3LUT8BKI))










> random variables are defined with respect to a common probability space (Ω, F, P)
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=A67UNXBH))











> bandit environment is defined by an action set A, an unknown parameter θ, a reward function r, and a noise distribution
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=8DPBYBTE))











> θ as a random variable
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=UPB3QU33))










> time t ∈ N≥0
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=ML2KMQJE))










> history Ht = (A0, R1, A1, R2, . . . , At−1, Rt)
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=P8BKWDI7))










> agent π
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=KT7E85GN))










> action At ∼ π(· | Ht)
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=Q4RRLNYG))










> reward
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=76IHM86P))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x252-y352.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x252-y352.png)






> Wt+1 is independent noise
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=7H7Y7A3F))










> mean reward
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=N9LBAZ6A))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x240-y314.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x240-y314.png)






> reward alone cannot distinguish between environments in which further improvement requires additional information and those in which it does not
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=S9SXGTM3))










> information-theoretic quantities in nats
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=863J9XIS))











> “bit-equivalent” where “bit” is used in the conventional sense to refer to information
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=3IX346RM))










### Definition 1 (Bit-equivalent)










> bit-equivalent of expected reward level ρ ∈ R is
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=GV9SNU6T))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x241-y154.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x241-y154.png)






> I(θ; A) is the mutual information between θ and A in nats
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=SEZLFTK8))










> infimum is taken over all random variables A such that E [rθ (A)] ≥ ρ
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=542AX5XQ))





> infimum: greatest lower bound.





> Bρ is the amount information about θ required, on average, to select an action that delivers expected reward at least ρ
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=2YZ2ZSNZ))










> performance of an agent π in terms of the average bit-equivalent
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=FYBBPPYN))










### Definition 2 (Average bit-equivalent)










> average bit-equivalent of reward attained by an agent π up to time T is defined as
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=AVVIIXRI))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x235-y656.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x235-y656.png)






> Eπ denotes the expectation over the randomness in θ, actions generated by the policy π, and the noise
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=W2A94AJB))










### Definition 3 (Open-endedness)










> environment is open-ended if there exists an agent π such that BT (π) = Ω(T )
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=JL7LEMNK))










### 3 Classical Bandit Environments Are Not Open-Ended










> most classical bandit environments are not open-ended: either information about the environment cannot be acquired at a linear rate, or the information that can be acquired does not translate into sustained reward improvement
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=XEJP69HP))










> information gain of an agent π up to time T
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=YGVKX7AE))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x261-y417.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x261-y417.png)






> upper bounds the average bit-equivalent
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=DEK457GP))










> all agents π and all T ≥ 1, BT (π) ≤ γT (π)
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=HAM4IFPF))





> The average bit-equivalent is upper bounded by information gain.





> data processing inequality
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=MKYZKDP3))











> sublinear information gain for every agent implies non-open-endedness
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=6GYCCXSQ))





> If we can prove that information gain is sublinear, we can say that environment is not open-ended.





> sublinear information gain is sufficient but not necessary
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=UBYSCJ4I))





> Sometimes, a non-open-ended environment can have infinite information gain also.

Therefore, it's not so straight forward to prove open-endedness using information gain idea.

So, we have average bit-equivalent idea.






![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x95-y88.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x95-y88.png)






### 3.1 Bandit environments with sublinear information gain










> assume that the noise is additive Gaussian, i.e., rθ (At, Wt+1) =  rθ (At) + Wt+1 and Wt+1 ∼ N (0, σ2) for some σ &gt; 0
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=JBZQVKM3))










### Finite-dimensional linear bandits










> d-dimensional θ and A, and rθ (a) = θT a
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=RVM3DU54))










### Theorem 5 (Information gain bound for linear bandits)











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x174-y562.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x174-y562.png)






### Finite-armed bandits










> |A| &lt; ∞
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=ZMB2GZKN))










> θ ∈ R|A| and rθ (a) = θa for all a ∈ A
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=R7DSHUIT))










### Theorem 6 (Information gain bound for finite-armed bandits)











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x168-y417.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x168-y417.png)






### Gaussian process bandits










> infinite-dimensional analogue of finite-dimensional linear bandits
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=U7Z3ZGD4))





> "Infinite" dimensions is because of theta.

Theta is not a finite vector, it's a random function.





> kernelized bandit optimization
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=FKYN35NM))











> action set A ⊂ Rd is compact, the mean reward function rθ (a) = θ(a), and θ ∼ GP(0, k) is sampled from a Gaussian process with kernel k
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=XEBANB85))





> Gaussian Distribution: probability distribution over numbers. You get output as a number.

Multivariate Gaussian Distribution: Probability distribution over vectors. You get output as d-dimensional vector.

Gaussian Process: Probability distribution over functions. You get output as function.

Think of this function as an infinite dimensional vector, where each element in the vector can be seen as outputs of some single function with domain A (d-dimensional). When evaluated for every input from A we get an infinite dimensional vector like (f(a1),f(a2),...,f(ainf)).

GD: Mean, Variance

MGD: Mean Vector, Covariance Matrix

GP: Mean Function, Kernel






> measure μ on A
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=PB8CHH49))










> Mercer decomposition
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=93WLYL66))





> Eigendecomposition of a kernel.






> eigenvalues  λ1 ≥ λ2 ≥ · · · ≥ 0
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=756UQI4T))










> functions \{φm\}m≥1
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=IXKXDBCM))





> eigenfunctions.






![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x230-y269.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x230-y269.png)






> eigenvalues are summable
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=SMVP3RWH))










> spectral tail
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=42DUFK2I))












![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x248-y191.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x248-y191.png)






### Theorem 7 (Information gain bound for Gaussian process bandits)











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x219-y102.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x219-y102.png)






> Matérn
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=EVHI49IA))





> Even for an expressive kernel, the GP bandit remains non-open-ended.






> squared exponential kernels
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=BQSPYF5J))





> Very smooth neighbor correlation.






### 3.2 Bandit environments where linear information gain does not imply open-endedness










> acquire information at a linear rate, yet remain non-open-ended because this information does not support sustained growth in the bit-equivalent
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=EPSULDI2))










### Finite-armed bandits with non-Gaussian noise










> Unif([0, 1])
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=XCJKTMZA))





> Uniform distribution on the interval [0,1]





> finite action set itself imposes a stronger limitation: any action can be specified using at most log |A| nats of information
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=G2IUBR65))










### Theorem 8.











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-5-x371-y319.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-5-x371-y319.png)






> limitation of information gain as a proxy for open-endedness. The information gain γT (π) measures all information acquired about the environment, regardless of whether that information leads to high reward. By contrast, the bit-equivalent measures only the information required to select an action achieving a given reward level
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=HRGGVEYE))










### Infinite-armed bandits





> Infinity is in the action space.





> A is countably infinite
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=EFJHWKVN))










### Theorem 9 (Bit-equivalent bound for infinite-armed bandit).











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-5-x269-y81.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-5-x269-y81.png)






> countably infinite actions alone does not imply open-endedness. For the commonly studied infinite-armed bandits with i.i.d. means, the average bit-equivalent achieved by any policy grows at most logarithmically
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=VS384JNH))










### 4 An Open-Ended Environment










> infinite-dimensional linear-Gaussian bandit
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=9K2U6NZ5))










> Gaussian process bandit, but one that falls outside the standard kernel conditions
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=2M7L44F4))










> insatiable linear bandit
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=6HRJEDFG))





> infinite-dimensional linear-Gaussian bandit.





> A = a ∈ \{0, 1\}N : ∥a∥1 &lt; ∞ .
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=C4YAIJFA))










> action is an infinite-dimensional binary vector with finite support
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=PNK4LGYI))










> θ ∈ RN
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=BQ5HMLW8))










> θi  ii∼d N (−1, 1)
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=KI3AAXZY))










> rθ (a) = ⟨θ, a⟩
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=4ADGYVWB))










> additive Gaussian noise
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=UA2FYSW8))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-6-x127-y476.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-6-x127-y476.png)






> σ &gt; 0
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=GQ4SHHIZ))










> E[∥At∥0] &lt; ∞ for all t
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=FS58V4FS))










> In the coordinate basis, the kernel eigenvalues are not summable. This violates the spectral tail condition that rules out linear information gain
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=S5R8JJRT))





> The assumptions don't hold and del_D doesn't go to 0.





### Theorem 10










> insatiable linear bandit is open-ended
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=B3GLTR7U))










> insatiable logistic bandit
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=8RCILP6X))





> This one doesn't have unbounded rewards, but still shows open-endedness.





> rθ (At) = g(⟨θ, At⟩)
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=VY3AGED4))










> g(x) = (1 + e−x)−1
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=ZM8QNJPX))










### 4.1 Classical bandit algorithms fail to achieve open-ended learning










> existing bandit algorithms are designed to operate in classical bandit environments
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=I784WWZD))










> two failure cases
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=H5QUCT5E))










> Algorithms that do not constrain the action set, such as Thompson sampling, attempt to explore too many coordinates
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=ASNPDP2Q))





> TS agent.





> Algorithms that truncate the action set to a fixed finite dimension limit the amount of information that can be extracted
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=7K7HMDVV))





> FT agent.





### Thompson Sampling (TS)










> πTS
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=NYMRLTWL))











> infinite-dimensional posterior over θ
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=A5PBX72M))










> round t
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=8YAKANG3))










> θ(t) ∼ P(θ ∈ · | Ht)
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=VDJLL75U))










> action a
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=G7UXCXF4))










> maximizes a⊤θ(t)
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=K5S48TBZ))










### Theorem 11 (Thompson sampling failure)










> all t ≥ 1
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=76MDSRFH))










> history Ht
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=M8KEMPCY))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x233-y658.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x233-y658.png)






> supremum is not attained by any action in A
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=5RAATBE8))










> direct application of TS results in an ill-defined policy
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=URE8NWWI))










> expected reward of the maximizer diverges to −∞ as the truncation approaches the full action set A
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=Y25FB33L))










### Theorem 12 (Reward attained by Thompson sampling tends to negative infinity)










> M ∈ N
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=TA97IBUT))










> t ≥ 1
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=98XDN5RA))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x224-y506.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x224-y506.png)






> finite-dimensional truncation of A
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=U5AAMNRI))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x252-y462.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x252-y462.png)






> θ(t) ∼ P(θ ∈ · | Ht)
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=SFBYQFAV))










> history Ht
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=26MZM7M7))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x218-y413.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x218-y413.png)






### Fixed Truncation (FT)










> FT agent πM
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=AEKX5GC9))











> truncation window M ∈ N
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=QLZDGDJC))










> actions supported on the first M coordinates
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=UBRSWJIW))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x222-y357.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x222-y357.png)






### Theorem 13 (FT failure)










> M ∈ N
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=BHXNG8TC))










> FT agent πM
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=L9VA69CL))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x219-y305.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x219-y305.png)






> no fixed-M FT agent achieves open-ended learning
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=W6N5WPYX))










### 4.2 Thompson sampling with a sequence of learning targets










> agent should pursue a sequence of learning targets of increasing complexity
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=XNU3MQPW))










> first learns a simple target that supports modest reward, and then gradually moves to richer targets that support higher reward
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=4S5FAQ22))










> satisficing Thompson sampling
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=TAZUEJJI))










> modifies Thompson sampling by probability matching to an alternative learning target, such as a satisficing action, rather than to the optimal action
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=EIDSH4SU))





> Satisficing TS.





> learning targets through a rate-distortion tradeoff
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=YLVWSKIC))










> not chosen to trade off a fixed information cost against a fixed approximation error, but rather to increase in complexity over time so that the agent can sustain linear growth in reward-relevant information
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=U6IA6SQP))





> Rate-distortion tradeoff modified to consider increase in information complexity over time.





> learning target is a random variable χ
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=KVUHJERF))










> represents partial information about the environment parameter θ
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=S42C8NQF))










> optimal action
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=LIEBI42U))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x236-y659.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x236-y659.png)






> a∗(χ) is the best action an agent could choose if it knew χ
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=CXR7R58H))










> At time t, given history Ht, the agent  samples χt ∼ P(χ ∈ · | Ht), and then selects an action At ∈ a∗(χt)
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=XGX5G64L))










> Thompson sampling with learning target χ
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=CXT7AQM2))





> TS with learning target.





> sequence of learning targets χ1, χ2, . . ., where later targets encode increasingly rich information about the environment
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=MIJQINSS))










> time t, the agent chooses an index mt and applies Thompson sampling with respect to the target χmt
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=VLAYABXI))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x250-y529.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x250-y529.png)






> At ∈ a∗(χmt  t )
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=GVQY3EB8))










> schedule mt is to balance two competing goals: the  target χmt should be rich enough to support high reward, but simple enough that it can be learned effectively from data collected so far
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=XC8EU7TS))










### 4.3 Truncated Thompson sampling achieves open-ended learning










> insatiable linear bandit, the natural learning targets are finite-coordinate truncations
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=DPV3249J))










> χm = θ1:m
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=653E3DD5))










> Thompson sampling with target χm is therefore equivalent to running Thompson sampling on the truncated action set
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=6ZVXI5L5))





> Truncated Thompson Sampling.





> χm reveals the first m coordinates
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=3HX3U5QX))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x219-y396.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x219-y396.png)






> Truncated Thompson sampling (TTS) applies this idea with a truncation level that may grow over time
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=6MYLMXD9))










> round t
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=ACTCLQFV))










> history Ht
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=GIAJM84R))










> truncation level mt = mt(Ht)
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=8F9H3VSW))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x243-y348.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x243-y348.png)







![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x245-y309.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x245-y309.png)






> TTS avoids both the invalidity of full Thompson sampling and the bounded performance of any fixed truncation
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=ANXQW8B4))





> Because vannila TS agent gets -inf rewards, and FT agent rewards are bounded.





### Theorem 14 (TTS success)










> truncation schedule (mt)t≥0
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=5DX5TV93))










> TTS agent πTTS
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=6DS2V3XJ))










> all T ≥ 1
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=I4WN4P8S))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x256-y239.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x256-y239.png)






> TTS achieves open-ended learning
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=YNVNU6YX))










> average bit-equivalent rate achieved by TTS is optimal
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=GHVLT26D))










### Theorem 15.










> all T ≥ 1
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=7WICVH9A))










> all agents π
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=43YC5DCR))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x263-y165.png](/static/research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x263-y165.png)






> algorithms for open-ended environments involves carefully thinking about the learning target
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=ZQ4P6VZC))










> GP-UCB-type agents
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=8Q5BHC6F))





> Gaussian Process Upper Confidence Bound algorithm. 

One of the algos for Gaussian Process Bandit environment.






> tuned confidence widths may also achieve open-ended learning
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=GR4LIPKI))










> need to prescribe sequences of learning targets or confidence set widths may render them fragile in practice
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=5M22NYK3))





> TTS agent and GP-UCB-type agent.





### 5 Discussion










> prior work, which largely focuses on empirical designs of open-ended agents and environments, as well as a small handful of recent papers attempting to formalize open-endedness
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=YCCCMX8X))










### 5.1 Related work










### Open-endedness in artificial life and AI










### Formal definitions of open-endedness










### Reinforcement learning and continual learning










> Intrinsic motivation and curiosity-based methods encourage agents to explore by rewarding heuristics of uncertainty and novelty
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=QECFMX9M))










> Hierarchical RL approaches the problem of open-ended learning via temporal structure discoveries
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=JZAJZTGI))










> Continual learning studies agents that learn over indefinite interaction and may face changing or expanding tasks
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=8MQXIU78))










### Classical bandits and unbounded rewards










> While unbounded rewards and infinite action sets may appear to provide natural sources of open-endedness, we show that neither is sufficient
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=JPUATMCM))










> open-endedness requires that useful information about the environment can be continually acquired to sustain performance improvement
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=FTUE89V6))










### 5.2 Conclusion and limitations










> First, our definition for openendedness applies only to the bandit setting
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=Q75JH6D4))










> Extending this definition to accommodate stateful and nonstationary environments is an important next step
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=YUSBLZGI))










> Second, as discussed at the end of Section 4.3, the TTS agent design requires as input a sequence of learning targets
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=96WX36UZ))










> Designing agents without the need for deliberate hyperparameter choices is an exciting future direction
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=KNAAL37V))
