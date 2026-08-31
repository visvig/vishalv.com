---
published: "2026-01-01"
added: "2026-08-29"
modified: "2026-08-31"
authors: Simon J. D. Prince
abstract: "&quot;This book covers modern deep learning and tackles supervised learning, model architecture, unsupervised learning, and deep reinforcement learning&quot;--"
---

# Understanding deep learning

[URL]()

## Tags


## Notes

### 12.2 Dot-product self-attention










<span style="color:
#FFF176;">
model for processing text will (i) use parameter sharing to cope with long input passages of differing lengths and (ii) contain connections between word representations that depend on the words themselves</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=VQSN4UQ2))










<span style="color:
#FFF176;">
standard neural network layer f[x], takes a D × 1 input x and applies a linear transformation followed by an activation function like a ReLU</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=Y95D8FF9))











![research-notes/images/princeUnderstandingDeepLearning2023/image-222-x269-y344.png](research-notes/images/princeUnderstandingDeepLearning2023/image-222-x269-y344.png)






<span style="color:
#FFF176;">
β contains the biases</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=ENK7ZXRJ))










<span style="color:
#FFF176;">
Ω contains the weights</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=EKRWQTHV))










<span style="color:
#FFF176;">
self-attention block sa[•] takes N inputs x1, . . . , xN , each of dimension D × 1, and returns N outputs, each of which is also of size D × 1</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=SUQFF7XL))







#self-attention




<span style="color:
#FFF176;">
set of values are computed for each input</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=XZZK644X))











![research-notes/images/princeUnderstandingDeepLearning2023/image-222-x277-y259.png](research-notes/images/princeUnderstandingDeepLearning2023/image-222-x277-y259.png)






<span style="color:
#FFF176;">
βv ∈ RD×1</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=6T2FACEG))










<span style="color:
#FFF176;">
Ωv ∈ RD×D</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=XDISSYST))










<span style="color:
#FFF176;">
nth output san[x1, . . . , xN ] is a weighted sum of all the values v1, . . . , vN</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=DH83XHQB))











![research-notes/images/princeUnderstandingDeepLearning2023/image-222-x243-y183.png](research-notes/images/princeUnderstandingDeepLearning2023/image-222-x243-y183.png)






<span style="color:
#FFF176;">
scalar weight a[xm, xn] is the attention that the nth output pays to input xm</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=FFTNDXUW))










<span style="color:
#FFF176;">
self-attention can be thought of as routing the values in different proportions to create each output</span>
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=5YIBMN3J))











![research-notes/images/princeUnderstandingDeepLearning2023/image-223-x83-y395.png](research-notes/images/princeUnderstandingDeepLearning2023/image-223-x83-y395.png)






### 12.2.1 Computing and weighting values










<span style="color:
#FFF176;">
same weights Ωv ∈ RD×D and biases βv ∈ RD are applied  to each input x• ∈ RD</span>
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=QRUZETIL))










<span style="color:
#FFF176;">
computation scales linearly with the sequence length N</span>
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=N2NFIDPY))










<span style="color:
#FFF176;">
number of attention weights has a quadratic dependence on the sequence length N , but is independent of the length D of each input</span>
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=WA4TRW8Z))










### 12.2.2 Computing attention weights










<span style="color:
#FFF176;">
value vectors βv + Ωvxm are computed independently for each input xm</span>
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=3H777ALT))







#value




<span style="color:
#FFF176;">
overall self-attention computation is nonlinear</span>
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=7YBE28MN))










<span style="color:
#FFF176;">
hypernetwork, where one network branch computes the weights of another</span>
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=IFXVKLS7))











![research-notes/images/princeUnderstandingDeepLearning2023/image-224-x126-y500.png](research-notes/images/princeUnderstandingDeepLearning2023/image-224-x126-y500.png)

Rho_v and a[xm, xn]






![research-notes/images/princeUnderstandingDeepLearning2023/image-224-x395-y501.png](research-notes/images/princeUnderstandingDeepLearning2023/image-224-x395-y501.png)

a[xm,xn]






![research-notes/images/princeUnderstandingDeepLearning2023/image-224-x260-y501.png](research-notes/images/princeUnderstandingDeepLearning2023/image-224-x260-y501.png)

Rho_v






![research-notes/images/princeUnderstandingDeepLearning2023/image-224-x268-y307.png](research-notes/images/princeUnderstandingDeepLearning2023/image-224-x268-y307.png)






<span style="color:
#FFF176;">
{qn} and {km} are termed queries and keys</span>
([224](zotero://open-pdf/library/items/9NIUHDLK?page=224&annotation=DCURFPFP))







#key
#query





![research-notes/images/princeUnderstandingDeepLearning2023/image-224-x239-y206.png](research-notes/images/princeUnderstandingDeepLearning2023/image-224-x239-y206.png)



#attention-weights




<span style="color:
#FFF176;">
dot product operation returns a measure of similarity between its inputs, so the weights a[x•, xn] depend on the relative similarities between the nth query and all of the keys</span>
([224](zotero://open-pdf/library/items/9NIUHDLK?page=224&annotation=RD3T9ZU6))










<span style="color:
#FFF176;">
queries and keys must have the same dimensions</span>
([224](zotero://open-pdf/library/items/9NIUHDLK?page=224&annotation=J3I8E5I4))











![research-notes/images/princeUnderstandingDeepLearning2023/image-225-x85-y283.png](research-notes/images/princeUnderstandingDeepLearning2023/image-225-x85-y283.png)

Attention Weights computation.





### 12.2.3 Self-attention summary










<span style="color:
#FFF176;">
nth output is a weighted sum of the same linear transformation v• = βv + Ωvx•</span>
([225](zotero://open-pdf/library/items/9NIUHDLK?page=225&annotation=IGAX2X83))





nth output of V.





<span style="color:
#FFF176;">
attention weights are positive and sum to one</span>
([225](zotero://open-pdf/library/items/9NIUHDLK?page=225&annotation=RTLCDCSA))










<span style="color:
#FFF176;">
mechanism is nonlinear due to the dot-product and a softmax operation used to compute the attention weights</span>
([225](zotero://open-pdf/library/items/9NIUHDLK?page=225&annotation=U29M3NDC))










<span style="color:
#FFF176;">
mechanism fulfills the initial requirements</span>
([225](zotero://open-pdf/library/items/9NIUHDLK?page=225&annotation=SLBDB56C))










<span style="color:
#FFF176;">
First, there is a single shared set of parameters φ = {βv, Ωv, βq, Ωq, βk, Ωk}</span>
([225](zotero://open-pdf/library/items/9NIUHDLK?page=225&annotation=6IZMZRWJ))











![research-notes/images/princeUnderstandingDeepLearning2023/image-226-x135-y358.png](research-notes/images/princeUnderstandingDeepLearning2023/image-226-x135-y358.png)

Triple product.

Attention is softmax on dot product of K and Q.

Output is softmax on dot product of Attention and V.





<span style="color:
#FFF176;">
Second, there are connections between the inputs (words), and the strength of these connections depends on the inputs themselves via the attention weights</span>
([226](zotero://open-pdf/library/items/9NIUHDLK?page=226&annotation=QRET6X6C))










### 12.2.4 Matrix form










<span style="color:
#FFF176;">
N inputs xn</span>
([226](zotero://open-pdf/library/items/9NIUHDLK?page=226&annotation=AKSQAME5))










<span style="color:
#FFF176;">
D × N matrix X</span>
([226](zotero://open-pdf/library/items/9NIUHDLK?page=226&annotation=RDLC7WLI))










<span style="color:
#FFF176;">
values, queries, and keys</span>
([226](zotero://open-pdf/library/items/9NIUHDLK?page=226&annotation=HSA9ZS3N))











![research-notes/images/princeUnderstandingDeepLearning2023/image-226-x261-y145.png](research-notes/images/princeUnderstandingDeepLearning2023/image-226-x261-y145.png)






<span style="color:
#FFF176;">
1 is an N × 1 vector containing ones</span>
([226](zotero://open-pdf/library/items/9NIUHDLK?page=226&annotation=RHL3NJUJ))











![research-notes/images/princeUnderstandingDeepLearning2023/image-226-x227-y99.png](research-notes/images/princeUnderstandingDeepLearning2023/image-226-x227-y99.png)



#dot-prod-sa





![research-notes/images/princeUnderstandingDeepLearning2023/image-227-x99-y496.png](research-notes/images/princeUnderstandingDeepLearning2023/image-227-x99-y496.png)






<span style="color:
#FFF176;">
Softmax[•] takes a matrix and performs the softmax operation independently on each of its columns</span>
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=DMTARKFI))










<span style="color:
#FFF176;">
self-attention computes a kind of triple product</span>
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=X9F5VPNX))











![research-notes/images/princeUnderstandingDeepLearning2023/image-227-x216-y393.png](research-notes/images/princeUnderstandingDeepLearning2023/image-227-x216-y393.png)

Same as previous computation, just dropping the mention of dependence of k,v,q on X.





### 12.3 Extensions to dot-product self-attention










<span style="color:
#FFF176;">
three extensions that are almost always used in practice</span>
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=RAMCIB4L))










### 12.3.1 Positional encoding










<span style="color:
#FFF176;">
self-attention mechanism overlooks impor- Problem 12.3  tant information: the computation does not take into account the order of the inputs xn</span>
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=BBRFQ5RJ))










<span style="color:
#FFF176;">
two main approaches to incorporating position information</span>
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=76MS5TSD))










### Absolute positional encodings










<span style="color:
#FFF176;">
matrix Π is added to the input X that encodes positional information</span>
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=KQQ33JPI))










<span style="color:
#FFF176;">
it is added to X in the computation of the queries and keys but not to the values</span>
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=AWW924YA))










### Relative positional encodings










<span style="color:
#FFF176;">
Each element of the attention matrix corresponds to a particular offset between key position a and query position b</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=LXJ8R55N))










<span style="color:
#FFF176;">
learn a parameter πa,b for each offset and use this to modify the attention matrix</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=U2GWL4JW))










### 12.3.2 Scaled dot-product self-attention










<span style="color:
#FFF176;">
dot products in the attention computation can have large magnitudes</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=CZS3CR5G))










<span style="color:
#FFF176;">
largest value completely dominates</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=RSMI5PJX))










<span style="color:
#FFF176;">
dot products are scaled by the square root of the dimension Dq of the queries and keys (i.e., the number of rows in Ωq and Ωk, which must be the same)</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=355ZEMHS))











![research-notes/images/princeUnderstandingDeepLearning2023/image-228-x249-y383.png](research-notes/images/princeUnderstandingDeepLearning2023/image-228-x249-y383.png)



#scaled-dot-prod-sa




### 12.3.3 Multiple heads










<span style="color:
#FFF176;">
Multiple self-attention mechanisms are usually applied in parallel</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=97WH4FCP))










<span style="color:
#FFF176;">
H different sets of values, keys, and queries</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=GWDRW5ZL))











![research-notes/images/princeUnderstandingDeepLearning2023/image-228-x259-y224.png](research-notes/images/princeUnderstandingDeepLearning2023/image-228-x259-y224.png)






<span style="color:
#FFF176;">
hth self-attention mechanism or head</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=VM9GYN2G))





Sa_h






![research-notes/images/princeUnderstandingDeepLearning2023/image-228-x240-y165.png](research-notes/images/princeUnderstandingDeepLearning2023/image-228-x240-y165.png)






<span style="color:
#FFF176;">
parameters {βvh, Ωvh}, {βqh, Ωqh}, and {βkh, Ωkh} for each head</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=V75F7VDJ))










<span style="color:
#FFF176;">
dimension of the inputs xm is D</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=YV2HW8XG))










<span style="color:
#FFF176;">
H heads</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=7DDFFMYE))










<span style="color:
#FFF176;">
values, queries, and keys will all be of size D/H</span>
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=ABS7EKYU))











![research-notes/images/princeUnderstandingDeepLearning2023/image-229-x82-y285.png](research-notes/images/princeUnderstandingDeepLearning2023/image-229-x82-y285.png)



#multi-head-sa





![research-notes/images/princeUnderstandingDeepLearning2023/image-229-x162-y221.png](research-notes/images/princeUnderstandingDeepLearning2023/image-229-x162-y221.png)






<span style="color:
#FFF176;">
they make the self-attention network more robust to bad initializations</span>
([229](zotero://open-pdf/library/items/9NIUHDLK?page=229&annotation=6LIACKFV))





Speculation on why multi-head is used.





### 12.4 Transformer layers










<span style="color:
#FFF176;">
multihead self-attention unit</span>
([229](zotero://open-pdf/library/items/9NIUHDLK?page=229&annotation=I7QMBLMP))











![research-notes/images/princeUnderstandingDeepLearning2023/image-230-x123-y425.png](research-notes/images/princeUnderstandingDeepLearning2023/image-230-x123-y425.png)



#transformer-layer




<span style="color:
#FFF176;">
fully connected network</span>
([230](zotero://open-pdf/library/items/9NIUHDLK?page=230&annotation=YMTNYR8W))










<span style="color:
#FFF176;">
add a LayerNorm operation after both the selfattention and fully connected networks</span>
([230](zotero://open-pdf/library/items/9NIUHDLK?page=230&annotation=NZNAUL7J))










<span style="color:
#FFF176;">
similar to BatchNorm but normalizes each embedding in each batch element separately using statistics calculated across its D embedding dimensions</span>
([230](zotero://open-pdf/library/items/9NIUHDLK?page=230&annotation=EWGSYWJW))











![research-notes/images/princeUnderstandingDeepLearning2023/image-230-x178-y229.png](research-notes/images/princeUnderstandingDeepLearning2023/image-230-x178-y229.png)






<span style="color:
#FFF176;">
column vectors xn are separately taken from the full data matrix X</span>
([230](zotero://open-pdf/library/items/9NIUHDLK?page=230&annotation=53JRRJ97))










