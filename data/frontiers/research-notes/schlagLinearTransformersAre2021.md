---
published: "2021-07-01"
added: "2026-08-30"
modified: "2026-09-05"
authors: Imanol Schlag, Kazuki Irie, Jürgen Schmidhuber
abstract: "We show the formal equivalence of linearised self-attention mechanisms and fast weight controllers from the early ’90s, where a slow neural net learns by gradient descent to program the fast weights of another net through sequences of elementary programming instructions which are additive outer products of self-invented activation patterns (today called keys and values). Such Fast Weight Programmers (FWPs) learn to manipulate the contents of a finite memory and dynamically interact with it. We infer a memory capacity limitation of recent linearised softmax attention variants, and replace the purely additive outer products by a delta rule-like programming instruction, such that the FWP can more easily learn to correct the current mapping from keys to values. The FWP also learns to compute dynamically changing learning rates. We also propose a new kernel function to linearise attention which balances simplicity and effectiveness. We conduct experiments on synthetic retrieval problems as well as standard machine translation and language modelling tasks which demonstrate the benefits of our methods."
---

# Linear Transformers Are Secretly Fast Weight Programmers

[URL](https://proceedings.mlr.press/v139/schlag21a.html)

## Tags


## Notes

### Abstract










<span style="color:
#FFF176;">
“slow” neural net learns by gradient descent to program the “fast weights” of another net through sequences of elementary programming instructions which are additive outer products of self-invented activation patterns (today called keys and values)</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=IUPSZRWF))





Slow Weights: Training Corpus
Fast Weights: Test Time Input





<span style="color:
#FFF176;">
replace the purely additive outer products by a delta rule-like programming instruction, such that the FWP can more easily learn to correct the current mapping from keys to values</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=WK7HVLE2))










### 1. Introduction










<span style="color:
#FFF176;">
core component of a Transformer is the self-attention mechanism</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=HXVA6SYZ))










<span style="color:
#FFF176;">
self-attention computations scale quadratically with sequence length while the memory of the model grows linearly</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=D973BYYY))





Vanilla Sa:

Time: O(n^2)
Memory: O(n)


#self-attention




<span style="color:
#FFF176;">
“linear Transformers” with constant size memory and time complexity linear in sequence length</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=Y6RZNK76))





Linear Transformer:

Time: O(n)
Memory: O(1)


#linear-transformer




<span style="color:
#FFF176;">
complexity reduction is mainly due to a linearisation of the softmax</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=QSXTK9ZJ))










<span style="color:
#FFF176;">
memories of such FWPs contain key-value associations</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=B2TQBH57))







#fwp




<span style="color:
#FFF176;">
learn to reprogram them through sequences of differentiable elementary instructions (also called update rules)</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=5BE8WG34))







#update-rule




<span style="color:
#FFF176;">
When the sequence length exceeds storage capacity, the model may end up in an overcapacity regime</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=GTRLMT7D))










<span style="color:
#FFF176;">
model should learn to dynamically interact with the memory contents and selectively decide which key-value associations to keep and which ones to delete</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=B4M3AB6T))










<span style="color:
#FFF176;">
purely additive instruction may be inappropriate</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=DKJ78PE9))










<span style="color:
#FFF176;">
introduce an improved programming instruction akin to the famous error-correcting delta-rule</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=25UY6IPJ))







#delta-rule




<span style="color:
#FFF176;">
softmax linearisation techniques for Transformers are still underexplored</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=MZXJQCTT))










<span style="color:
#FFF176;">
l</span>
([1](zotero://open-pdf/library/items/XC745P5Q?page=1&annotation=NURHRVZL))










<span style="color:
#FFF176;">
new method which is both simple and effective</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=35VJ9AE7))










<span style="color:
#FFF176;">
own synthetic retrieval dataset</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=FHT8S2LK))





Dataset 1.





<span style="color:
#FFF176;">
standard WMT14 English to German machine translation task</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=9VXJ94ZC))





Dataset 2.





<span style="color:
#FFF176;">
Wikitext-103</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=3QZRR93D))





Dataset 3.





### 2. Background on Fast Weight Programmers










<span style="color:
#FFF176;">
general idea of fast weights is to make the weights also variable and input-dependent</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=UB3CZXSK))







#fast-weights




<span style="color:
#FFF176;">
synaptic modulation (von der Malsburg, 1981), a method for variable binding in neural networks (see e.g. the recent survey by Greff et al. (2020)), or dynamic connections</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=NP9GENGP))










<span style="color:
#FFF176;">
effective weights as a (multiplicative) superposition of conventional, context-independent slow weights, and fast changing, context-dependent fast weights</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=Y52HEX8B))







#slow-weights




<span style="color:
#FFF176;">
slow net with slow weights continually changes or reprograms the fast weights of a fast net, making the fast weights effectively dependent on the spatio-temporal context of a given input stream</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=44LBRC29))










<span style="color:
#FFF176;">
Among the proposed elementary differentiable instructions that the slow net can use to program the fast weights, a particularly attractive one makes use of outer products</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=VFGNASNM))





Two vectors a and b:

Inner product: a dot b
Output: Scalar

Outer product: a (x) bT
Output: Matrix


#outer-product





![research-notes/images/schlagLinearTransformersAre2021/image-2-x90-y182.png](research-notes/images/schlagLinearTransformersAre2021/image-2-x90-y182.png)

FWP: Slow Weights Operation






![research-notes/images/schlagLinearTransformersAre2021/image-2-x90-y163.png](research-notes/images/schlagLinearTransformersAre2021/image-2-x90-y163.png)

FWP: Write Fast Weights by appending






![research-notes/images/schlagLinearTransformersAre2021/image-2-x90-y147.png](research-notes/images/schlagLinearTransformersAre2021/image-2-x90-y147.png)

FWP: Retrieval by matrix multiplication





<span style="color:
#FFF176;">
⊗ denotes the outer product</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=PT6HTIYJ))





Forms a matrix.





<span style="color:
#FFF176;">
σ is an activation function</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=BWED7EAX))










<span style="color:
#FFF176;">
Wa and Wb are trainable slow weights</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=4W7LZUEE))










<span style="color:
#FFF176;">
fast weights W (i) are generated at each time step i</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=NFDA95VZ))





Equivalent to short-term memory.





<span style="color:
#FFF176;">
key-value associative memory model</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=ES54366X))










<span style="color:
#FFF176;">
write operation is based on a summation</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=4JNVHIQH))





W^(i)





<span style="color:
#FFF176;">
retrieval is a matrix-vector multiplication</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=YJ6E7JNU))





y^(i)





<span style="color:
#FFF176;">
use of outer products results in a model of associations similar to tensor product presentations</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=Y62HHV4X))





Outer product organizes the associations in matrix form, meanwhile tensor product is simply more generalized (ex: collection of component multiplications in one vector).


#tensor-product-representation




<span style="color:
#FFF176;">
associative memory can be found in numerous works</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=DD87WN2H))










<span style="color:
#FFF176;">
Hebb’s informal rule</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=SIPLVHNZ))










<span style="color:
#FFF176;">
Hopfield networks</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=EM449RQA))










<span style="color:
#FFF176;">
bi-directional associative nets</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=YXNBITUM))










<span style="color:
#FFF176;">
concept of FWPs</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=VFDJNQZH))










<span style="color:
#FFF176;">
hypernetworks</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=5PD639V7))










<span style="color:
#FFF176;">
dynamic plasticity</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=TTIFWBYG))










<span style="color:
#FFF176;">
dynamic convolution</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=CWW9GGB3))










<span style="color:
#FFF176;">
lambda networks</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=GENECJKG))










### 3. Relation to Transformers










### 3.1. Self-Attention Without Softmax Is a Fast Weight  Programmer










<span style="color:
#FFF176;">
self-attention layer in auto-regressive Transformers</span>
([2](zotero://open-pdf/library/items/XC745P5Q?page=2&annotation=4MFHWRKN))





Autoregressive Transformer: 

Transformer generating sequence from left to right.

Autoregressive:

Regress the variable on the previous values of itself.






![research-notes/images/schlagLinearTransformersAre2021/image-2-x328-y128.png](research-notes/images/schlagLinearTransformersAre2021/image-2-x328-y128.png)

At timestep i: xi produces ki, qi, vi






![research-notes/images/schlagLinearTransformersAre2021/image-2-x328-y94.png](research-notes/images/schlagLinearTransformersAre2021/image-2-x328-y94.png)

Append the new key to previous keys

Append the new value to previous values

This is the KV cache






![research-notes/images/schlagLinearTransformersAre2021/image-2-x328-y73.png](research-notes/images/schlagLinearTransformersAre2021/image-2-x328-y73.png)

current query qi asks KiT qi (how relevant is current token to every token seen so far)

softmax of KiT qi given attention weights

Then, mix the corresponding values.





<span style="color:
#FFF176;">
[A, a] denotes the concatenation of vector a to matrix A along the time dimension</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=KMW5B3BA))










<span style="color:
#FFF176;">
Wk, Wv, Wq are trainable weight matrices</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=VXLEMG3Q))










<span style="color:
#FFF176;">
remove the softmax</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=5IJ5YGSQ))











![research-notes/images/schlagLinearTransformersAre2021/image-3-x67-y587.png](research-notes/images/schlagLinearTransformersAre2021/image-3-x67-y587.png)






<span style="color:
#FFF176;">
W (i) the corresponding weight matrix generated from key and value</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=UQEZNHWG))











![research-notes/images/schlagLinearTransformersAre2021/image-3-x104-y507.png](research-notes/images/schlagLinearTransformersAre2021/image-3-x104-y507.png)







![research-notes/images/schlagLinearTransformersAre2021/image-3-x80-y402.png](research-notes/images/schlagLinearTransformersAre2021/image-3-x80-y402.png)

Self-attention as FWP.





### 3.2. Linearising Self-Attention










<span style="color:
#FFF176;">
shown to improve computational efficiency of self-attention for long sequences</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=M5QZ5IMK))










<span style="color:
#FFF176;">
softmax explicitly</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=RZFPVN2C))











![research-notes/images/schlagLinearTransformersAre2021/image-3-x100-y237.png](research-notes/images/schlagLinearTransformersAre2021/image-3-x100-y237.png)






<span style="color:
#FFF176;">
κ(k, q) = exp(k · q) ∈ R&gt;0 is the softmax kernel</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=P94JBKQB))







#softmax-kernal




<span style="color:
#FFF176;">
k · q = k&gt;q is the vector dot product</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=TBZG5T35))










<span style="color:
#FFF176;">
replace the softmax kernel κ by another kernel: κ′(k, q) = φ(k)&gt;φ(q) where φ is a function Rdkey → Rddot</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=I943EL9J))











![research-notes/images/schlagLinearTransformersAre2021/image-3-x92-y68.png](research-notes/images/schlagLinearTransformersAre2021/image-3-x92-y68.png)






<span style="color:
#FFF176;">
outer-product notation, the numerator is analogous to the case without softmax</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=TLT48F97))











![research-notes/images/schlagLinearTransformersAre2021/image-3-x301-y659.png](research-notes/images/schlagLinearTransformersAre2021/image-3-x301-y659.png)






<span style="color:
#FFF176;">
fast weight matrix W (i)</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=ZEIXEXVI))










<span style="color:
#FFF176;">
additional vector z(i)</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=ZEYJNL6E))











![research-notes/images/schlagLinearTransformersAre2021/image-3-x363-y555.png](research-notes/images/schlagLinearTransformersAre2021/image-3-x363-y555.png)






<span style="color:
#FFF176;">
forward computations of linear Transformers</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=GGV6LXXR))











![research-notes/images/schlagLinearTransformersAre2021/image-3-x334-y444.png](research-notes/images/schlagLinearTransformersAre2021/image-3-x334-y444.png)

Linear Self-Attention as FWP with normalization.





### 4. Analysing and Improving Linear  Transformers as Fast Weight Programmers










<span style="color:
#FFF176;">
two insights</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=URWSF7PE))










<span style="color:
#FFF176;">
their capacity limits as associative memories</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=7AF6PPV9))










<span style="color:
#FFF176;">
ineptness to edit previously stored associations</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=YU33VXTW))










### 4.1. Capacity Limitation










### Intuition










<span style="color:
#FFF176;">
Endlessly adding new associations to a memory of finite size, as in Eq. 17, inevitably will reach a limit</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=KHJ4LU2G))





W^i = W^(i-1) + v^(i) (x)  k^(i)

Here the fast weight matrix is endlessly added with the outer product.





<span style="color:
#FFF176;">
linear attention, information is stored in a matrix and is retrieved using matrix multiplication</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=BE3URAF3))





y^(i) RHS is simply matrix multiplication and is the retrieval.





<span style="color:
#FFF176;">
to prevent associations from interfering with each other upon retrieval, the respective keys need to be orthogonal</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=W7RUTA8V))










<span style="color:
#FFF176;">
keys embedded in a ddot space</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=7YIGPJBD))





The phi kernel function output dimension is d_dot.





<span style="color:
#FFF176;">
storing more than ddot associations will result in a retrieval error</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=WE226338))





Association: a key-value pair.





<span style="color:
#FFF176;">
when the length of the sequence is longer than ddot, the model might be in such an overcapacity</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=E6JYFDKZ))










### Tensor Product Representation Theory










<span style="color:
#FFF176;">
distributed representations as a means for storing symbolic structures</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=J4BCMIM5))





Distributed representation: Concepts and entities are vectors and so information is spread across.

Symbolic structure: information represented as discrete entities and explicit relations between them.


#symbolic-structure




<span style="color:
#FFF176;">
tensor product representation (TPR) of a structured symbolic system consisting of a set of variables and values constructed from outer products of the so called role and filler vectors</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=BG8VA4ZU))





filler ((x)) role

Filler ~ Value
Role ~ Key

Example:

"Peter loves MJ"

Roles are subject, verb, object.
Fillers are Peter, loves, MJ.

Write:
T = f_Peter r_subject^T + f_loves r_verb^T + f_MJ r_object^T

Read / Retrieval:

Subject: T dot r_subject


#role
#filler




<span style="color:
#FFF176;">
fast weight memories of Eq. 17 are the most basic form of such representations (second order tensors)</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=EZK3HKHA))





Second order tensor is Matrix.





<span style="color:
#FFF176;">
Smolensky (1990) discuss more formally the crosstalk and retrieval error intuitively</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=VFYBKZFG))





The point on orthogonal associations and it is required to prevent interference.





<span style="color:
#FFF176;">
classic TPRs of Smolensky (1990) are constructed with a priori knowledge of the symbolic structure</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=M7UF4AAA))





TPR: Role (subject, verb, object) is from priori. 

FWP: Key itself isn't a priori.





### 4.2. Improving the FWP’s Programming Instruction










<span style="color:
#FFF176;">
Once in overcapacity, an ideal memory model should dynamically interact with the memory contents and selectively determine which associations to remember or to forget</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=2XD9WETV))










<span style="color:
#FFF176;">
contrast to the standard Transformer which stores immutable pairs</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=AQBJ95T3))










<span style="color:
#FFF176;">
from the perspective of dynamic interaction with the memory, the purely additive update rule of Eqs. 17 may be sub-optima</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=LX4YKEYV))










<span style="color:
#FFF176;">
basic instruction that essentially implements the famous error-correcting delta rule (Widrow &amp; Hoff, 1960) in an end-to-end differentiable way</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=5G8DBWNW))










<span style="color:
#FFF176;">
Given a new input key-value pair (k(i), v(i)), the FWP first accesses the current state of the memory W (i−1) and retrieves the value v ̄(i) currently paired with the key k(i)</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=MFYB66QJ))










<span style="color:
#FFF176;">
Then the model stores a convex combination v(i)  new of the retrieved value v ̄(i) and the input v(i) using an interpolation weight 0 ≤ β(i) ≤ 1 also generated by the model</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=KLQWZNIU))











![research-notes/images/schlagLinearTransformersAre2021/image-4-x331-y690.png](research-notes/images/schlagLinearTransformersAre2021/image-4-x331-y690.png)







![research-notes/images/schlagLinearTransformersAre2021/image-4-x331-y673.png](research-notes/images/schlagLinearTransformersAre2021/image-4-x331-y673.png)

Retrieve v^(i) paired with k^(i)






![research-notes/images/schlagLinearTransformersAre2021/image-4-x331-y655.png](research-notes/images/schlagLinearTransformersAre2021/image-4-x331-y655.png)

Model generated the interpolation weight.






![research-notes/images/schlagLinearTransformersAre2021/image-4-x331-y635.png](research-notes/images/schlagLinearTransformersAre2021/image-4-x331-y635.png)

Model stores new value, which is a convex combination of retrieved value and input value.

beta (v - v_bar) + v_bar

first term is directly the error.





<span style="color:
#FFF176;">
Wβ ∈ R1×d</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=RVNP2IYC))










<span style="color:
#FFF176;">
σ is the sigmoid function</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=IZ3EUAXG))










<span style="color:
#FFF176;">
interpolation weight β(i) is the “write-strength”</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=TSB8EBLS))










<span style="color:
#FFF176;">
β(i) only depends on x(i)</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=ZYZ2PV6J))










<span style="color:
#FFF176;">
multilayer model, x(i) has the full context information</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=3V9LAQ32))










<span style="color:
#FFF176;">
W (0) = 0</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=287VMA4S))





Fast weight memory at timestep 0 is 0.





<span style="color:
#FFF176;">
z(0) = 0</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=YYCTLNFY))





Accumulated normalization at timestep 0 is 0.






![research-notes/images/schlagLinearTransformersAre2021/image-4-x309-y471.png](research-notes/images/schlagLinearTransformersAre2021/image-4-x309-y471.png)

Delta Rule.






![research-notes/images/schlagLinearTransformersAre2021/image-4-x309-y439.png](research-notes/images/schlagLinearTransformersAre2021/image-4-x309-y439.png)

Final output.





<span style="color:
#FFF176;">
dynamic learning rate β(i)</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=UYPYKW89))










<span style="color:
#FFF176;">
advantage of this approach over the gated update rule</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=ZRALHHJZ))










### Normalisation










<span style="color:
#FFF176;">
accumulator</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=B5C6PF2H))











![research-notes/images/schlagLinearTransformersAre2021/image-4-x369-y276.png](research-notes/images/schlagLinearTransformersAre2021/image-4-x369-y276.png)







![research-notes/images/schlagLinearTransformersAre2021/image-4-x369-y225.png](research-notes/images/schlagLinearTransformersAre2021/image-4-x369-y225.png)

Value with normalization.






![research-notes/images/schlagLinearTransformersAre2021/image-4-x370-y195.png](research-notes/images/schlagLinearTransformersAre2021/image-4-x370-y195.png)

Output with normalization.





<span style="color:
#FFF176;">
define v ̄(1) = 0. In this approach, the output y(i) is a weighted average of β(j)(v(j) − v ̄(j)) for 1 ≤ j ≤ i. We refer to this approach as attention normalisation</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=A3F5G8CX))







#attention-normalisation




<span style="color:
#FFF176;">
drawbacks</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=TQIMPRWA))










<span style="color:
#FFF176;">
First, the accumulation of positive values in Eq. 26 always grows with the number of steps, and may result in instability</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=BRXSQYA9))










<span style="color:
#FFF176;">
Second, specifically for our update rule, this normalisation is not sufficient to balance the weights between write and remove operations</span>
([4](zotero://open-pdf/library/items/XC745P5Q?page=4&annotation=JP5HYNXY))










<span style="color:
#FFF176;">
better approach based on simple normalisation</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=7P9QRQRF))










<span style="color:
#FFF176;">
divide the effective key and query vectors φ(k(i)) and φ(q(i)) by the sum of its components</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=K5BCL244))











![research-notes/images/schlagLinearTransformersAre2021/image-5-x114-y632.png](research-notes/images/schlagLinearTransformersAre2021/image-5-x114-y632.png)






<span style="color:
#FFF176;">
sum normalisation</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=L4DWKJQF))





Divide the key and query vectors by sum of components.





<span style="color:
#FFF176;">
Since this is a simple substitution of φ(k(i)) and φ(q(i)) in Eqs. 20-25, one might still ask whether additional attention normalisation is needed</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=37PZLHX6))










<span style="color:
#FFF176;">
language modelling experiments (Sec. 6.3), we show that this is not the case</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=H5H8LGYQ))










### 5. Linear Attention Functions










<span style="color:
#FFF176;">
softmax linearisation (Sec. 3.2) is the φ function which maps key and query vectors to the space where the dot product is executed: Rdkey → Rddot .</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=ANLWGJCB))










### 5.1. Properties










<span style="color:
#FFF176;">
φ should be positive</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=Q7K4LS8V))










<span style="color:
#FFF176;">
dimensionality of its codomain ddot defines the model’s capacity</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=G4F99QU3))










<span style="color:
#FFF176;">
transformation which projects the input dimension dkey to a larger dimension ddot, the φ function can potentially increase the upper bound</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=JIESMLVF))










### 5.2. Katharopoulos’ Linear Attention










<span style="color:
#FFF176;">
simple element-wise ELU + 1</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=TX6FL36S))











![research-notes/images/schlagLinearTransformersAre2021/image-5-x70-y138.png](research-notes/images/schlagLinearTransformersAre2021/image-5-x70-y138.png)



#katharopoulos-linear-attention




<span style="color:
#FFF176;">
a simple element-wise function, this φ function preserves the dimension of the input key vector (dkey = ddot)</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=THVKWRBL))










### 5.3. FAVOR+










<span style="color:
#FFF176;">
mathematically rigorous method to approximate the softmax with random features</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=76QKHSML))











![research-notes/images/schlagLinearTransformersAre2021/image-5-x357-y576.png](research-notes/images/schlagLinearTransformersAre2021/image-5-x357-y576.png)



#favor+




<span style="color:
#FFF176;">
concatenation  [a  b  ]  of two vectors a and b</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=7HLWVSGG))










<span style="color:
#FFF176;">
R ∈ Rm×dkey is a matrix with m random features</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=BZMVP32Q))










<span style="color:
#FFF176;">
row vector r ∈ R1×dkey is drawn from N (0, Idkey )</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=WW8S7SL8))










<span style="color:
#FFF176;">
dimension of the codomain ddot is 2m</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=R6HSC6H3))










<span style="color:
#FFF176;">
increases the theoretical capacity of the memory if 2m &gt; dkey</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=6KMNT93S))










<span style="color:
#FFF176;">
m is the only hyperparameter of FAVOR+</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=DTPR7LMS))










<span style="color:
#FFF176;">
sampling process is the main drawback of FAVOR+ as it introduces variance into the model’s output</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=F7H792MP))










### 5.4. Deterministic Parameter-Free Projection (DPFP)










<span style="color:
#FFF176;">
propose an alternative approach called deterministic parameter-free projection (DPFP)</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=K8DQPDYD))







#dpfp




<span style="color:
#FFF176;">
Consider 4 keys k(i), i ∈ {1, 2, 3, 4} in R2</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=YXJVDYRU))










<span style="color:
#FFF176;">
φ : R2 → R4  ≥0</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=V35GQUXU))










<span style="color:
#FFF176;">
l-th element of φ(x) is generated by the partial function φl : R2 → R≥0</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=4JLAPYMW))





Partial function: takes the key in its d_key dimension and projects it onto a higher dimension d_dot





<span style="color:
#FFF176;">
design φ such that it facilitates orthogonality in the projected space, i.e. φ(k(i)) · φ(k(j)) = 0 for i 6= j</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=C7LCNJ5R))










<span style="color:
#FFF176;">
construct φ such that if φl(x) &gt; 0 then φn(x) = 0 for all n 6= l</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=2X26AH5A))










<span style="color:
#FFF176;">
enforced by limiting the domains of the partial functions to be non-overlapping</span>
([5](zotero://open-pdf/library/items/XC745P5Q?page=5&annotation=PWBK3DRS))





For each phi_i ensure its domain doesn't overlap with others.





<span style="color:
#FFF176;">
element-wise rectifier function r(a) = max(0, a)</span>
([6](zotero://open-pdf/library/items/XC745P5Q?page=6&annotation=YG6L783U))










<span style="color:
#FFF176;">
partial functions</span>
([6](zotero://open-pdf/library/items/XC745P5Q?page=6&annotation=IB9L6R2F))











![research-notes/images/schlagLinearTransformersAre2021/image-6-x117-y619.png](research-notes/images/schlagLinearTransformersAre2021/image-6-x117-y619.png)

max(0,a) ensures only one of them is positive and makes rest 0.

phi = [ phi_1 phi_2 phi_3, phi_4]

phi: R2 to R4
phi_1: R2 to R1

for any k, find this projected components to be this.





<span style="color:
#FFF176;">
each vector in the 2d plane will have a single non-zero component in the 4d space and equally splits the input space into four areas which will be orthogonal in the projected space</span>
([6](zotero://open-pdf/library/items/XC745P5Q?page=6&annotation=CL8QQTF3))











![research-notes/images/schlagLinearTransformersAre2021/image-6-x45-y390.png](research-notes/images/schlagLinearTransformersAre2021/image-6-x45-y390.png)






<span style="color:
#FFF176;">
input vector k ∈ Rdkey and i ∈ [1, 2dkey], the partial function</span>
([6](zotero://open-pdf/library/items/XC745P5Q?page=6&annotation=FWCLLSWR))





i number of keys.






![research-notes/images/schlagLinearTransformersAre2021/image-6-x98-y292.png](research-notes/images/schlagLinearTransformersAre2021/image-6-x98-y292.png)






<span style="color:
#FFF176;">
ν ∈ {1, 2, .., dkey2 − 1} is a capacity controlling hyperparameter</span>
([6](zotero://open-pdf/library/items/XC745P5Q?page=6&annotation=WEARSTTV))





Think of this as offset for doing element wise multiplication.


#capacity-control




<span style="color:
#FFF176;">
codomain dimensionality of φ(k) is thus ddot = 2dkeyν</span>
([6](zotero://open-pdf/library/items/XC745P5Q?page=6&annotation=9M22666I))





If we include more values for v, we are generating more sets of pairwise features.





### 6. Experimental Results










### 6.1. Synthetic Settings










