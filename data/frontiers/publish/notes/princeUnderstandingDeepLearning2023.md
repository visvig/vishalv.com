---
title: "Understanding deep learning"
date: "2026-08-31"
tags:
  - "self-attention"
  - "value"
  - "key"
  - "query"
  - "attention-weights"
  - "dot-prod-sa"
  - "scaled-dot-prod-sa"
  - "multi-head-sa"
  - "transformer-layer"
draft: false
summary: "&quot;This book covers modern deep learning and tackles supervised learning, model architecture, unsupervised learning, and deep reinforcement learning&quot;--"
---
{/* Generated from data/frontiers/research-notes. Edit the source file, then run `yarn publish:research-notes`. */}

[URL]()

## Notes

### 12.2 Dot-product self-attention










> model for processing text will (i) use parameter sharing to cope with long input passages of differing lengths and (ii) contain connections between word representations that depend on the words themselves
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=VQSN4UQ2))










> standard neural network layer f[x], takes a D × 1 input x and applies a linear transformation followed by an activation function like a ReLU
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=Y95D8FF9))











![research-notes/images/princeUnderstandingDeepLearning2023/image-222-x269-y344.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-222-x269-y344.png)






> β contains the biases
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=ENK7ZXRJ))










> Ω contains the weights
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=EKRWQTHV))










> self-attention block sa[•] takes N inputs x1, . . . , xN , each of dimension D × 1, and returns N outputs, each of which is also of size D × 1
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=SUQFF7XL))











> set of values are computed for each input
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=XZZK644X))











![research-notes/images/princeUnderstandingDeepLearning2023/image-222-x277-y259.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-222-x277-y259.png)






> βv ∈ RD×1
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=6T2FACEG))










> Ωv ∈ RD×D
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=XDISSYST))










> nth output san[x1, . . . , xN ] is a weighted sum of all the values v1, . . . , vN
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=DH83XHQB))











![research-notes/images/princeUnderstandingDeepLearning2023/image-222-x243-y183.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-222-x243-y183.png)






> scalar weight a[xm, xn] is the attention that the nth output pays to input xm
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=FFTNDXUW))










> self-attention can be thought of as routing the values in different proportions to create each output
([222](zotero://open-pdf/library/items/9NIUHDLK?page=222&annotation=5YIBMN3J))











![research-notes/images/princeUnderstandingDeepLearning2023/image-223-x83-y395.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-223-x83-y395.png)






### 12.2.1 Computing and weighting values










> same weights Ωv ∈ RD×D and biases βv ∈ RD are applied  to each input x• ∈ RD
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=QRUZETIL))










> computation scales linearly with the sequence length N
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=N2NFIDPY))










> number of attention weights has a quadratic dependence on the sequence length N , but is independent of the length D of each input
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=WA4TRW8Z))










### 12.2.2 Computing attention weights










> value vectors βv + Ωvxm are computed independently for each input xm
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=3H777ALT))











> overall self-attention computation is nonlinear
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=7YBE28MN))










> hypernetwork, where one network branch computes the weights of another
([223](zotero://open-pdf/library/items/9NIUHDLK?page=223&annotation=IFXVKLS7))











![research-notes/images/princeUnderstandingDeepLearning2023/image-224-x126-y500.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-224-x126-y500.png)

Rho_v and a[xm, xn]






![research-notes/images/princeUnderstandingDeepLearning2023/image-224-x395-y501.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-224-x395-y501.png)

a[xm,xn]






![research-notes/images/princeUnderstandingDeepLearning2023/image-224-x260-y501.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-224-x260-y501.png)

Rho_v






![research-notes/images/princeUnderstandingDeepLearning2023/image-224-x268-y307.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-224-x268-y307.png)






> \{qn\} and \{km\} are termed queries and keys
([224](zotero://open-pdf/library/items/9NIUHDLK?page=224&annotation=DCURFPFP))












![research-notes/images/princeUnderstandingDeepLearning2023/image-224-x239-y206.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-224-x239-y206.png)







> dot product operation returns a measure of similarity between its inputs, so the weights a[x•, xn] depend on the relative similarities between the nth query and all of the keys
([224](zotero://open-pdf/library/items/9NIUHDLK?page=224&annotation=RD3T9ZU6))










> queries and keys must have the same dimensions
([224](zotero://open-pdf/library/items/9NIUHDLK?page=224&annotation=J3I8E5I4))











![research-notes/images/princeUnderstandingDeepLearning2023/image-225-x85-y283.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-225-x85-y283.png)

Attention Weights computation.





### 12.2.3 Self-attention summary










> nth output is a weighted sum of the same linear transformation v• = βv + Ωvx•
([225](zotero://open-pdf/library/items/9NIUHDLK?page=225&annotation=IGAX2X83))





nth output of V.





> attention weights are positive and sum to one
([225](zotero://open-pdf/library/items/9NIUHDLK?page=225&annotation=RTLCDCSA))










> mechanism is nonlinear due to the dot-product and a softmax operation used to compute the attention weights
([225](zotero://open-pdf/library/items/9NIUHDLK?page=225&annotation=U29M3NDC))










> mechanism fulfills the initial requirements
([225](zotero://open-pdf/library/items/9NIUHDLK?page=225&annotation=SLBDB56C))










> First, there is a single shared set of parameters φ = \{βv, Ωv, βq, Ωq, βk, Ωk\}
([225](zotero://open-pdf/library/items/9NIUHDLK?page=225&annotation=6IZMZRWJ))











![research-notes/images/princeUnderstandingDeepLearning2023/image-226-x135-y358.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-226-x135-y358.png)

Triple product.

Attention is softmax on dot product of K and Q.

Output is softmax on dot product of Attention and V.





> Second, there are connections between the inputs (words), and the strength of these connections depends on the inputs themselves via the attention weights
([226](zotero://open-pdf/library/items/9NIUHDLK?page=226&annotation=QRET6X6C))










### 12.2.4 Matrix form










> N inputs xn
([226](zotero://open-pdf/library/items/9NIUHDLK?page=226&annotation=AKSQAME5))










> D × N matrix X
([226](zotero://open-pdf/library/items/9NIUHDLK?page=226&annotation=RDLC7WLI))










> values, queries, and keys
([226](zotero://open-pdf/library/items/9NIUHDLK?page=226&annotation=HSA9ZS3N))











![research-notes/images/princeUnderstandingDeepLearning2023/image-226-x261-y145.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-226-x261-y145.png)






> 1 is an N × 1 vector containing ones
([226](zotero://open-pdf/library/items/9NIUHDLK?page=226&annotation=RHL3NJUJ))











![research-notes/images/princeUnderstandingDeepLearning2023/image-226-x227-y99.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-226-x227-y99.png)








![research-notes/images/princeUnderstandingDeepLearning2023/image-227-x99-y496.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-227-x99-y496.png)






> Softmax[•] takes a matrix and performs the softmax operation independently on each of its columns
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=DMTARKFI))










> self-attention computes a kind of triple product
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=X9F5VPNX))











![research-notes/images/princeUnderstandingDeepLearning2023/image-227-x216-y393.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-227-x216-y393.png)

Same as previous computation, just dropping the mention of dependence of k,v,q on X.





### 12.3 Extensions to dot-product self-attention










> three extensions that are almost always used in practice
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=RAMCIB4L))










### 12.3.1 Positional encoding










> self-attention mechanism overlooks impor- Problem 12.3  tant information: the computation does not take into account the order of the inputs xn
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=BBRFQ5RJ))










> two main approaches to incorporating position information
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=76MS5TSD))










### Absolute positional encodings










> matrix Π is added to the input X that encodes positional information
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=KQQ33JPI))










> it is added to X in the computation of the queries and keys but not to the values
([227](zotero://open-pdf/library/items/9NIUHDLK?page=227&annotation=AWW924YA))










### Relative positional encodings










> Each element of the attention matrix corresponds to a particular offset between key position a and query position b
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=LXJ8R55N))










> learn a parameter πa,b for each offset and use this to modify the attention matrix
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=U2GWL4JW))










### 12.3.2 Scaled dot-product self-attention










> dot products in the attention computation can have large magnitudes
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=CZS3CR5G))










> largest value completely dominates
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=RSMI5PJX))










> dot products are scaled by the square root of the dimension Dq of the queries and keys (i.e., the number of rows in Ωq and Ωk, which must be the same)
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=355ZEMHS))











![research-notes/images/princeUnderstandingDeepLearning2023/image-228-x249-y383.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-228-x249-y383.png)







### 12.3.3 Multiple heads










> Multiple self-attention mechanisms are usually applied in parallel
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=97WH4FCP))










> H different sets of values, keys, and queries
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=GWDRW5ZL))











![research-notes/images/princeUnderstandingDeepLearning2023/image-228-x259-y224.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-228-x259-y224.png)






> hth self-attention mechanism or head
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=VM9GYN2G))





Sa_h






![research-notes/images/princeUnderstandingDeepLearning2023/image-228-x240-y165.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-228-x240-y165.png)






> parameters \{βvh, Ωvh\}, \{βqh, Ωqh\}, and \{βkh, Ωkh\} for each head
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=V75F7VDJ))










> dimension of the inputs xm is D
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=YV2HW8XG))










> H heads
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=7DDFFMYE))










> values, queries, and keys will all be of size D/H
([228](zotero://open-pdf/library/items/9NIUHDLK?page=228&annotation=ABS7EKYU))











![research-notes/images/princeUnderstandingDeepLearning2023/image-229-x82-y285.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-229-x82-y285.png)








![research-notes/images/princeUnderstandingDeepLearning2023/image-229-x162-y221.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-229-x162-y221.png)






> they make the self-attention network more robust to bad initializations
([229](zotero://open-pdf/library/items/9NIUHDLK?page=229&annotation=6LIACKFV))





Speculation on why multi-head is used.





### 12.4 Transformer layers










> multihead self-attention unit
([229](zotero://open-pdf/library/items/9NIUHDLK?page=229&annotation=I7QMBLMP))











![research-notes/images/princeUnderstandingDeepLearning2023/image-230-x123-y425.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-230-x123-y425.png)







> fully connected network
([230](zotero://open-pdf/library/items/9NIUHDLK?page=230&annotation=YMTNYR8W))










> add a LayerNorm operation after both the selfattention and fully connected networks
([230](zotero://open-pdf/library/items/9NIUHDLK?page=230&annotation=NZNAUL7J))










> similar to BatchNorm but normalizes each embedding in each batch element separately using statistics calculated across its D embedding dimensions
([230](zotero://open-pdf/library/items/9NIUHDLK?page=230&annotation=EWGSYWJW))











![research-notes/images/princeUnderstandingDeepLearning2023/image-230-x178-y229.png](/static/research-notes/images/princeUnderstandingDeepLearning2023/image-230-x178-y229.png)






> column vectors xn are separately taken from the full data matrix X
([230](zotero://open-pdf/library/items/9NIUHDLK?page=230&annotation=53JRRJ97))
