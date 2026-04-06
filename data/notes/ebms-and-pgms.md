---
title: PGMs, EBMs, Sampling
date: 2025-11-29
tags:
  - PGM
  - EBM
  - Sampling
  - MCMC
draft: false
summary:
---
# Probabilistic Graphical Models (PGMs)

A probabilistic graphical model encodes a probability distribution into a graph so that graph algorithms can be used to perform inference. This turns probabilistic reasoning into a structured computational problem and ties it closely to the hardware that executes the updates.

### Bayesian Networks and Markov Random Fields

Bayesian networks and Markov random fields are two forms of probabilistic structure. They both describe how variables relate but they do so in different ways.

The joint probability of variables A, B, C describes the probability that all of them occur together. Any variable can depend on many others but those dependencies can be expressed either as cause and effect or as correlations.

##### Bayesian Nets

- Bayesian networks express dependencies as directed acyclic graphs. 
- Each arrow represents a conditional probability. 
- The entire joint distribution factors into a chain of conditional relationships without self reference. 
- These models are usually used to represent causal structure and the goal of inference is to compute the probability of any variable once evidence is known.

##### Markov Random Fields

- Markov random fields use undirected graphs. 
- The joint probability is written as a product of potential functions over cliques of the graph.
- These models represent relationships and correlations rather than directed causes.
- Conditional independence arises when a set of variables blocks all paths between two subsets.

A key difference appears when two variables share a child:

- Conditioning on the child makes the parents dependent in a Bayesian network but independent in an MRF. 
- This difference reflects the absence of directionality in MRFs. 
- A Bayesian network can always be converted to an MRF by moralizing the graph which means connecting all co parents and dropping directions.

# Connecting PGMs to EBMs

Markov random fields provide a natural bridge from probabilistic graphical models to energy-based models (EBMs).

In an MRF, the joint distribution is written as a product of potential functions over cliques:

P(x) = (1 / Z) ∏_c ψ_c(x_c)

If each potential is expressed as an exponential of a negative energy:

ψ_c(x_c) = exp(−E_c(x_c))

then the joint becomes:

P(x) = (1 / Z) ∏_c exp(−E_c(x_c))  
     = (1 / Z) exp(−∑_c E_c(x_c))

Define:

E(x) = ∑_c E_c(x_c)

Then:

P(x) = (1 / Z) exp(−E(x))

This is exactly the form used in Energy Based Models, where a global energy function E(x) defines the probability distribution.

This shows that MRFs construct EBMs by decomposing the global energy into local clique-wise terms.

EBMs cannot be trained by standard gradient descent because the goal is not to find a single minimum. They require modeling the full energy landscape, which introduces a dependence on sampling during training.

MCMC methods explore that terrain by sampling it rather than collapsing to the lowest point. This is what ties EBMs to hardware designed for sampling and why probabilistic computation becomes central.

# Sampling Tricks Like Tempering

Exact inference in these models is often intractable, which is why sampling-based methods become necessary.

Sampling methods determine how well a model explores its probability landscape. 

- Metropolis-Hastings  
- Simulated annealing  
- Parallel tempering

These techniques help chains move between high energy and low energy regions so they do not get stuck. 

Parallel tempering runs multiple chains at different temperatures and occasionally swaps their states.

- High temperature chains explore freely. 
- Low temperature chains refine the details. 

These tricks improve mixing and help converge to the correct distribution. This makes hardware that can run many chains in parallel and generate randomness cheaply fundamentally advantageous.