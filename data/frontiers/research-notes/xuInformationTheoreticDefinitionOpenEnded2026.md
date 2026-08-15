---
published: "2026-06-06"
added: "2026-07-26"
modified: "2026-08-04"
authors: Wanqiao Xu, Yifan Zhu, Benjamin Van Roy
abstract: "A growing body of work points to the great promise of AI systems that can continually expand their capabilities as they operate in an open-ended environment. But yet there is no coherent definition of open-endedness or theory about how an agent ought to explore an open-ended environment. We introduce an information-theoretic definition based on a new concept -- the ${&#92;textit bit-equivalent}$ -- which quantifies the information required to attain each level of expected reward. We consider an environment to be open-ended if an agent can attain linear growth in the bit-equivalent. We establish that classical bandit environments are not open-ended and formulate a bandit environment that is. We also introduce an algorithm that achieves open-ended learning in this environment."
---

# An Information-Theoretic Definition for Open-Ended Learning

[URL](http://arxiv.org/abs/2606.08369)

## Tags
#✅


## Notes

### Abstract










<span style="color:
#FFF176;">
there is no coherent definition of open-endedness or theory about how an agent ought to explore an open-ended environment</span>
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=WVSR2Q85))










<span style="color:
#FFF176;">
bit-equivalent – which quantifies the information required to attain each level of expected reward</span>
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=BT6W9TSP))










<span style="color:
#FFF176;">
environment to be open-ended if an agent can attain linear growth in the bitequivalent</span>
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=R5ZUHM8C))










### 1 Introduction










<span style="color:
#A7F3A7;">
environment as open-ended if the sequence of artifacts an agent produces is both novel and learnable, from the perspective of an observer</span>
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=MG3G3EST))










<span style="color:
#A7F3A7;">
novelty means that there is greater uncertainty about future relative to current observations</span>
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=4VAYGTA3))










<span style="color:
#A7F3A7;">
learnable means that current observations inform predictions of future observations</span>
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=PV53Z9ZX))










<span style="color:
#FFF176;">
novelty and learnability do not fully capture open-endedness</span>
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=2ZSVYR3J))










<span style="color:
#FFF176;">
agent that continually generates novel and learnable policies does not necessarily acquire information that enables improved performance</span>
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=INYTQQ4I))










<span style="color:
#FFF176;">
environment open-ended if sustained reward improvement requires continual acquisition of useful information</span>
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=NUA99DDU))










<span style="color:
#FFF176;">
bit-equivalent Bρ of expected reward ρ is the minimum amount of information about the environment required to attain expected reward ρ</span>
([](zotero://open-pdf/library/items/3UVAW6NG?page=&annotation=ZY687ML6))







#bit-equivalent




<span style="color:
#FFF176;">
agent achieves open-ended learning in such an environment if it realizes this linear rate</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=J6H6ASER))










<span style="color:
#FFF176;">
example of an open-ended environment that is an infinite-dimensional linear-Gaussian bandit and establish that a variant of Thompson sampling achieves open-ended learning</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=SGJMD3FL))










### 2 Problem Formulation










<span style="color:
#FFF176;">
big-O notation to express asymptotic behavior of functions</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=WT6D2722))










<span style="color:
#FFF176;">
O ̃, when we choose to ignore logarithmic factors</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=IJ9NVKVH))










<span style="color:
#FFF176;">
log to denote the natural logarithm</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=3LUT8BKI))










<span style="color:
#FFF176;">
random variables are defined with respect to a common probability space (Ω, F, P)</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=A67UNXBH))







#probability-space




<span style="color:
#FFF176;">
bandit environment is defined by an action set A, an unknown parameter θ, a reward function r, and a noise distribution</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=8DPBYBTE))







#bandit-environment




<span style="color:
#FFF176;">
θ as a random variable</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=UPB3QU33))










<span style="color:
#FFF176;">
time t ∈ N≥0</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=ML2KMQJE))










<span style="color:
#FFF176;">
history Ht = (A0, R1, A1, R2, . . . , At−1, Rt)</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=P8BKWDI7))










<span style="color:
#FFF176;">
agent π</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=KT7E85GN))










<span style="color:
#FFF176;">
action At ∼ π(· | Ht)</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=Q4RRLNYG))










<span style="color:
#FFF176;">
reward</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=76IHM86P))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x252-y352.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x252-y352.png)






<span style="color:
#FFF176;">
Wt+1 is independent noise</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=7H7Y7A3F))










<span style="color:
#FFF176;">
mean reward</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=N9LBAZ6A))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x240-y314.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x240-y314.png)






<span style="color:
#FFF176;">
reward alone cannot distinguish between environments in which further improvement requires additional information and those in which it does not</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=S9SXGTM3))










<span style="color:
#FFF176;">
information-theoretic quantities in nats</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=863J9XIS))







#nat




<span style="color:
#FFF176;">
“bit-equivalent” where “bit” is used in the conventional sense to refer to information</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=3IX346RM))










### Definition 1 (Bit-equivalent)










<span style="color:
#FFF176;">
bit-equivalent of expected reward level ρ ∈ R is</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=GV9SNU6T))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x241-y154.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-2-x241-y154.png)






<span style="color:
#FFF176;">
I(θ; A) is the mutual information between θ and A in nats</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=SEZLFTK8))










<span style="color:
#FFF176;">
infimum is taken over all random variables A such that E [rθ (A)] ≥ ρ</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=542AX5XQ))





> infimum: greatest lower bound.





<span style="color:
#FFF176;">
Bρ is the amount information about θ required, on average, to select an action that delivers expected reward at least ρ</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=2YZ2ZSNZ))










<span style="color:
#FFF176;">
performance of an agent π in terms of the average bit-equivalent</span>
([2](zotero://open-pdf/library/items/3UVAW6NG?page=2&annotation=FYBBPPYN))










### Definition 2 (Average bit-equivalent)










<span style="color:
#FFF176;">
average bit-equivalent of reward attained by an agent π up to time T is defined as</span>
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=AVVIIXRI))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x235-y656.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x235-y656.png)






<span style="color:
#FFF176;">
Eπ denotes the expectation over the randomness in θ, actions generated by the policy π, and the noise</span>
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=W2A94AJB))










### Definition 3 (Open-endedness)










<span style="color:
#FFF176;">
environment is open-ended if there exists an agent π such that BT (π) = Ω(T )</span>
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=JL7LEMNK))










### 3 Classical Bandit Environments Are Not Open-Ended










<span style="color:
#FFF176;">
most classical bandit environments are not open-ended: either information about the environment cannot be acquired at a linear rate, or the information that can be acquired does not translate into sustained reward improvement</span>
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=XEJP69HP))










<span style="color:
#FFF176;">
information gain of an agent π up to time T</span>
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=YGVKX7AE))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x261-y417.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x261-y417.png)






<span style="color:
#FFF176;">
upper bounds the average bit-equivalent</span>
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=DEK457GP))










<span style="color:
#FFF176;">
all agents π and all T ≥ 1, BT (π) ≤ γT (π)</span>
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=HAM4IFPF))





> The average bit-equivalent is upper bounded by information gain.





<span style="color:
#FFF176;">
data processing inequality</span>
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=MKYZKDP3))







#data-processing-inequality




<span style="color:
#FFF176;">
sublinear information gain for every agent implies non-open-endedness</span>
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=6GYCCXSQ))





> If we can prove that information gain is sublinear, we can say that environment is not open-ended.





<span style="color:
#FFF176;">
sublinear information gain is sufficient but not necessary</span>
([3](zotero://open-pdf/library/items/3UVAW6NG?page=3&annotation=UBYSCJ4I))





> Sometimes, a non-open-ended environment can have infinite information gain also.

Therefore, it's not so straight forward to prove open-endedness using information gain idea.

So, we have average bit-equivalent idea.






![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x95-y88.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-3-x95-y88.png)






### 3.1 Bandit environments with sublinear information gain










<span style="color:
#FFF176;">
assume that the noise is additive Gaussian, i.e., rθ (At, Wt+1) =  rθ (At) + Wt+1 and Wt+1 ∼ N (0, σ2) for some σ &gt; 0</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=JBZQVKM3))










### Finite-dimensional linear bandits










<span style="color:
#FFF176;">
d-dimensional θ and A, and rθ (a) = θT a</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=RVM3DU54))










### Theorem 5 (Information gain bound for linear bandits)











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x174-y562.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x174-y562.png)






### Finite-armed bandits










<span style="color:
#FFF176;">
|A| &lt; ∞</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=ZMB2GZKN))










<span style="color:
#FFF176;">
θ ∈ R|A| and rθ (a) = θa for all a ∈ A</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=R7DSHUIT))










### Theorem 6 (Information gain bound for finite-armed bandits)











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x168-y417.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x168-y417.png)






### Gaussian process bandits










<span style="color:
#FFF176;">
infinite-dimensional analogue of finite-dimensional linear bandits</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=U7Z3ZGD4))





> "Infinite" dimensions is because of theta.

Theta is not a finite vector, it's a random function.





<span style="color:
#FFF176;">
kernelized bandit optimization</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=FKYN35NM))







#kernelized-bandit-optimization




<span style="color:
#FFF176;">
action set A ⊂ Rd is compact, the mean reward function rθ (a) = θ(a), and θ ∼ GP(0, k) is sampled from a Gaussian process with kernel k</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=XEBANB85))





> Gaussian Distribution: probability distribution over numbers. You get output as a number.

Multivariate Gaussian Distribution: Probability distribution over vectors. You get output as d-dimensional vector.

Gaussian Process: Probability distribution over functions. You get output as function.

Think of this function as an infinite dimensional vector, where each element in the vector can be seen as outputs of some single function with domain A (d-dimensional). When evaluated for every input from A we get an infinite dimensional vector like (f(a1),f(a2),...,f(ainf)).

GD: Mean, Variance

MGD: Mean Vector, Covariance Matrix

GP: Mean Function, Kernel


#gaussian-process




<span style="color:
#FFF176;">
measure μ on A</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=PB8CHH49))










<span style="color:
#FFF176;">
Mercer decomposition</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=93WLYL66))





> Eigendecomposition of a kernel.


#mercer-decomposition




<span style="color:
#FFF176;">
eigenvalues  λ1 ≥ λ2 ≥ · · · ≥ 0</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=756UQI4T))










<span style="color:
#FFF176;">
functions {φm}m≥1</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=IXKXDBCM))





> eigenfunctions.






![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x230-y269.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x230-y269.png)






<span style="color:
#FFF176;">
eigenvalues are summable</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=SMVP3RWH))










<span style="color:
#FFF176;">
spectral tail</span>
([4](zotero://open-pdf/library/items/3UVAW6NG?page=4&annotation=42DUFK2I))







#spectral-tail





![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x248-y191.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x248-y191.png)






### Theorem 7 (Information gain bound for Gaussian process bandits)











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x219-y102.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-4-x219-y102.png)






<span style="color:
#FFF176;">
Matérn</span>
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=EVHI49IA))





> Even for an expressive kernel, the GP bandit remains non-open-ended.


#matern-kernel




<span style="color:
#FFF176;">
squared exponential kernels</span>
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=BQSPYF5J))





> Very smooth neighbor correlation.


#squared-exponential-kernel




### 3.2 Bandit environments where linear information gain does not imply open-endedness










<span style="color:
#FFF176;">
acquire information at a linear rate, yet remain non-open-ended because this information does not support sustained growth in the bit-equivalent</span>
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=EPSULDI2))










### Finite-armed bandits with non-Gaussian noise










<span style="color:
#FFF176;">
Unif([0, 1])</span>
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=XCJKTMZA))





> Uniform distribution on the interval [0,1]





<span style="color:
#FFF176;">
finite action set itself imposes a stronger limitation: any action can be specified using at most log |A| nats of information</span>
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=G2IUBR65))










### Theorem 8.











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-5-x371-y319.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-5-x371-y319.png)






<span style="color:
#FFF176;">
limitation of information gain as a proxy for open-endedness. The information gain γT (π) measures all information acquired about the environment, regardless of whether that information leads to high reward. By contrast, the bit-equivalent measures only the information required to select an action achieving a given reward level</span>
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=HRGGVEYE))










### Infinite-armed bandits





> Infinity is in the action space.





<span style="color:
#FFF176;">
A is countably infinite</span>
([5](zotero://open-pdf/library/items/3UVAW6NG?page=5&annotation=EFJHWKVN))










### Theorem 9 (Bit-equivalent bound for infinite-armed bandit).











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-5-x269-y81.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-5-x269-y81.png)






<span style="color:
#FFF176;">
countably infinite actions alone does not imply open-endedness. For the commonly studied infinite-armed bandits with i.i.d. means, the average bit-equivalent achieved by any policy grows at most logarithmically</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=VS384JNH))










### 4 An Open-Ended Environment










<span style="color:
#FFF176;">
infinite-dimensional linear-Gaussian bandit</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=9K2U6NZ5))










<span style="color:
#FFF176;">
Gaussian process bandit, but one that falls outside the standard kernel conditions</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=2M7L44F4))










<span style="color:
#FFF176;">
insatiable linear bandit</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=6HRJEDFG))





> infinite-dimensional linear-Gaussian bandit.





<span style="color:
#FFF176;">
A = a ∈ {0, 1}N : ∥a∥1 &lt; ∞ .</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=C4YAIJFA))










<span style="color:
#FFF176;">
action is an infinite-dimensional binary vector with finite support</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=PNK4LGYI))










<span style="color:
#FFF176;">
θ ∈ RN</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=BQ5HMLW8))










<span style="color:
#FFF176;">
θi  ii∼d N (−1, 1)</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=KI3AAXZY))










<span style="color:
#FFF176;">
rθ (a) = ⟨θ, a⟩</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=4ADGYVWB))










<span style="color:
#FFF176;">
additive Gaussian noise</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=UA2FYSW8))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-6-x127-y476.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-6-x127-y476.png)






<span style="color:
#FFF176;">
σ &gt; 0</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=GQ4SHHIZ))










<span style="color:
#FFF176;">
E[∥At∥0] &lt; ∞ for all t</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=FS58V4FS))










<span style="color:
#FFF176;">
In the coordinate basis, the kernel eigenvalues are not summable. This violates the spectral tail condition that rules out linear information gain</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=S5R8JJRT))





> The assumptions don't hold and del_D doesn't go to 0.





### Theorem 10










<span style="color:
#FFF176;">
insatiable linear bandit is open-ended</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=B3GLTR7U))










<span style="color:
#FFF176;">
insatiable logistic bandit</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=8RCILP6X))





> This one doesn't have unbounded rewards, but still shows open-endedness.





<span style="color:
#FFF176;">
rθ (At) = g(⟨θ, At⟩)</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=VY3AGED4))










<span style="color:
#FFF176;">
g(x) = (1 + e−x)−1</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=ZM8QNJPX))










### 4.1 Classical bandit algorithms fail to achieve open-ended learning










<span style="color:
#FFF176;">
existing bandit algorithms are designed to operate in classical bandit environments</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=I784WWZD))










<span style="color:
#FFF176;">
two failure cases</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=H5QUCT5E))










<span style="color:
#FFF176;">
Algorithms that do not constrain the action set, such as Thompson sampling, attempt to explore too many coordinates</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=ASNPDP2Q))





> TS agent.





<span style="color:
#FFF176;">
Algorithms that truncate the action set to a fixed finite dimension limit the amount of information that can be extracted</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=7K7HMDVV))





> FT agent.





### Thompson Sampling (TS)










<span style="color:
#FFF176;">
πTS</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=NYMRLTWL))







#thompson-sampling




<span style="color:
#FFF176;">
infinite-dimensional posterior over θ</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=A5PBX72M))










<span style="color:
#FFF176;">
round t</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=8YAKANG3))










<span style="color:
#FFF176;">
θ(t) ∼ P(θ ∈ · | Ht)</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=VDJLL75U))










<span style="color:
#FFF176;">
action a</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=G7UXCXF4))










<span style="color:
#FFF176;">
maximizes a⊤θ(t)</span>
([6](zotero://open-pdf/library/items/3UVAW6NG?page=6&annotation=K5S48TBZ))










### Theorem 11 (Thompson sampling failure)










<span style="color:
#FFF176;">
all t ≥ 1</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=76MDSRFH))










<span style="color:
#FFF176;">
history Ht</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=M8KEMPCY))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x233-y658.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x233-y658.png)






<span style="color:
#FFF176;">
supremum is not attained by any action in A</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=5RAATBE8))










<span style="color:
#FFF176;">
direct application of TS results in an ill-defined policy</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=URE8NWWI))










<span style="color:
#FFF176;">
expected reward of the maximizer diverges to −∞ as the truncation approaches the full action set A</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=Y25FB33L))










### Theorem 12 (Reward attained by Thompson sampling tends to negative infinity)










<span style="color:
#FFF176;">
M ∈ N</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=TA97IBUT))










<span style="color:
#FFF176;">
t ≥ 1</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=98XDN5RA))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x224-y506.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x224-y506.png)






<span style="color:
#FFF176;">
finite-dimensional truncation of A</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=U5AAMNRI))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x252-y462.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x252-y462.png)






<span style="color:
#FFF176;">
θ(t) ∼ P(θ ∈ · | Ht)</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=SFBYQFAV))










<span style="color:
#FFF176;">
history Ht</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=26MZM7M7))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x218-y413.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x218-y413.png)






### Fixed Truncation (FT)










<span style="color:
#FFF176;">
FT agent πM</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=AEKX5GC9))







#fixed-truncation




<span style="color:
#FFF176;">
truncation window M ∈ N</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=QLZDGDJC))










<span style="color:
#FFF176;">
actions supported on the first M coordinates</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=UBRSWJIW))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x222-y357.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x222-y357.png)






### Theorem 13 (FT failure)










<span style="color:
#FFF176;">
M ∈ N</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=BHXNG8TC))










<span style="color:
#FFF176;">
FT agent πM</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=L9VA69CL))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x219-y305.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-7-x219-y305.png)






<span style="color:
#FFF176;">
no fixed-M FT agent achieves open-ended learning</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=W6N5WPYX))










### 4.2 Thompson sampling with a sequence of learning targets










<span style="color:
#FFF176;">
agent should pursue a sequence of learning targets of increasing complexity</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=XNU3MQPW))










<span style="color:
#FFF176;">
first learns a simple target that supports modest reward, and then gradually moves to richer targets that support higher reward</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=4S5FAQ22))










<span style="color:
#FFF176;">
satisficing Thompson sampling</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=TAZUEJJI))










<span style="color:
#FFF176;">
modifies Thompson sampling by probability matching to an alternative learning target, such as a satisficing action, rather than to the optimal action</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=EIDSH4SU))





> Satisficing TS.





<span style="color:
#FFF176;">
learning targets through a rate-distortion tradeoff</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=YLVWSKIC))










<span style="color:
#FFF176;">
not chosen to trade off a fixed information cost against a fixed approximation error, but rather to increase in complexity over time so that the agent can sustain linear growth in reward-relevant information</span>
([7](zotero://open-pdf/library/items/3UVAW6NG?page=7&annotation=U6IA6SQP))





> Rate-distortion tradeoff modified to consider increase in information complexity over time.





<span style="color:
#FFF176;">
learning target is a random variable χ</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=KVUHJERF))










<span style="color:
#FFF176;">
represents partial information about the environment parameter θ</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=S42C8NQF))










<span style="color:
#FFF176;">
optimal action</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=LIEBI42U))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x236-y659.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x236-y659.png)






<span style="color:
#FFF176;">
a∗(χ) is the best action an agent could choose if it knew χ</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=CXR7R58H))










<span style="color:
#FFF176;">
At time t, given history Ht, the agent  samples χt ∼ P(χ ∈ · | Ht), and then selects an action At ∈ a∗(χt)</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=XGX5G64L))










<span style="color:
#FFF176;">
Thompson sampling with learning target χ</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=CXT7AQM2))





> TS with learning target.





<span style="color:
#FFF176;">
sequence of learning targets χ1, χ2, . . ., where later targets encode increasingly rich information about the environment</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=MIJQINSS))










<span style="color:
#FFF176;">
time t, the agent chooses an index mt and applies Thompson sampling with respect to the target χmt</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=VLAYABXI))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x250-y529.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x250-y529.png)






<span style="color:
#FFF176;">
At ∈ a∗(χmt  t )</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=GVQY3EB8))










<span style="color:
#FFF176;">
schedule mt is to balance two competing goals: the  target χmt should be rich enough to support high reward, but simple enough that it can be learned effectively from data collected so far</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=XC8EU7TS))










### 4.3 Truncated Thompson sampling achieves open-ended learning










<span style="color:
#FFF176;">
insatiable linear bandit, the natural learning targets are finite-coordinate truncations</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=DPV3249J))










<span style="color:
#FFF176;">
χm = θ1:m</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=653E3DD5))










<span style="color:
#FFF176;">
Thompson sampling with target χm is therefore equivalent to running Thompson sampling on the truncated action set</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=6ZVXI5L5))





> Truncated Thompson Sampling.





<span style="color:
#FFF176;">
χm reveals the first m coordinates</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=3HX3U5QX))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x219-y396.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x219-y396.png)






<span style="color:
#FFF176;">
Truncated Thompson sampling (TTS) applies this idea with a truncation level that may grow over time</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=6MYLMXD9))










<span style="color:
#FFF176;">
round t</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=ACTCLQFV))










<span style="color:
#FFF176;">
history Ht</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=GIAJM84R))










<span style="color:
#FFF176;">
truncation level mt = mt(Ht)</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=8F9H3VSW))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x243-y348.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x243-y348.png)







![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x245-y309.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x245-y309.png)






<span style="color:
#FFF176;">
TTS avoids both the invalidity of full Thompson sampling and the bounded performance of any fixed truncation</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=ANXQW8B4))





> Because vannila TS agent gets -inf rewards, and FT agent rewards are bounded.





### Theorem 14 (TTS success)










<span style="color:
#FFF176;">
truncation schedule (mt)t≥0</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=5DX5TV93))










<span style="color:
#FFF176;">
TTS agent πTTS</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=6DS2V3XJ))










<span style="color:
#FFF176;">
all T ≥ 1</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=I4WN4P8S))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x256-y239.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x256-y239.png)






<span style="color:
#FFF176;">
TTS achieves open-ended learning</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=YNVNU6YX))










<span style="color:
#FFF176;">
average bit-equivalent rate achieved by TTS is optimal</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=GHVLT26D))










### Theorem 15.










<span style="color:
#FFF176;">
all T ≥ 1</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=7WICVH9A))










<span style="color:
#FFF176;">
all agents π</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=43YC5DCR))











![research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x263-y165.png](research-notes/images/xuInformationTheoreticDefinitionOpenEnded2026/image-8-x263-y165.png)






<span style="color:
#FFF176;">
algorithms for open-ended environments involves carefully thinking about the learning target</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=ZQ4P6VZC))










<span style="color:
#FFF176;">
GP-UCB-type agents</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=8Q5BHC6F))





> Gaussian Process Upper Confidence Bound algorithm. 

One of the algos for Gaussian Process Bandit environment.


#gp-ucb




<span style="color:
#FFF176;">
tuned confidence widths may also achieve open-ended learning</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=GR4LIPKI))










<span style="color:
#FFF176;">
need to prescribe sequences of learning targets or confidence set widths may render them fragile in practice</span>
([8](zotero://open-pdf/library/items/3UVAW6NG?page=8&annotation=5M22NYK3))





> TTS agent and GP-UCB-type agent.





### 5 Discussion










<span style="color:
#FFF176;">
prior work, which largely focuses on empirical designs of open-ended agents and environments, as well as a small handful of recent papers attempting to formalize open-endedness</span>
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=YCCCMX8X))










### 5.1 Related work










### Open-endedness in artificial life and AI










### Formal definitions of open-endedness










### Reinforcement learning and continual learning










<span style="color:
#FFF176;">
Intrinsic motivation and curiosity-based methods encourage agents to explore by rewarding heuristics of uncertainty and novelty</span>
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=QECFMX9M))










<span style="color:
#FFF176;">
Hierarchical RL approaches the problem of open-ended learning via temporal structure discoveries</span>
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=JZAJZTGI))










<span style="color:
#FFF176;">
Continual learning studies agents that learn over indefinite interaction and may face changing or expanding tasks</span>
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=8MQXIU78))










### Classical bandits and unbounded rewards










<span style="color:
#FFF176;">
While unbounded rewards and infinite action sets may appear to provide natural sources of open-endedness, we show that neither is sufficient</span>
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=JPUATMCM))










<span style="color:
#FFF176;">
open-endedness requires that useful information about the environment can be continually acquired to sustain performance improvement</span>
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=FTUE89V6))










### 5.2 Conclusion and limitations










<span style="color:
#FFF176;">
First, our definition for openendedness applies only to the bandit setting</span>
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=Q75JH6D4))










<span style="color:
#E573E5;">
Extending this definition to accommodate stateful and nonstationary environments is an important next step</span>
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=YUSBLZGI))










<span style="color:
#FFF176;">
Second, as discussed at the end of Section 4.3, the TTS agent design requires as input a sequence of learning targets</span>
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=96WX36UZ))










<span style="color:
#E573E5;">
Designing agents without the need for deliberate hyperparameter choices is an exciting future direction</span>
([9](zotero://open-pdf/library/items/3UVAW6NG?page=9&annotation=KNAAL37V))









