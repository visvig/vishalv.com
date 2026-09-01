---
published: "2021-07-01"
added: "2026-08-30"
modified: "2026-09-01"
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





![research-notes/images/schlagLinearTransformersAre2021/image-2-x90-y144.png](research-notes/images/schlagLinearTransformersAre2021/image-2-x90-y144.png)

FWP.





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


#tensor-product




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
linear attention, information is stored in a matrix and is retrieved using matrix multiplication</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=BE3URAF3))










<span style="color:
#FFF176;">
to prevent associations from interfering with each other upon retrieval, the respective keys need to be orthogonal</span>
([3](zotero://open-pdf/library/items/XC745P5Q?page=3&annotation=W7RUTA8V))










