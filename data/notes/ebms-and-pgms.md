---
title: Betting On a New Compute Frontier
date: 2025-11-29
tags:
  - computing
draft: true
summary:
---
### Probabilistic Graphical Models

A probabilistic graphical model encodes a probability distribution into a graph so that graph algorithms can be used to perform inference. This turns probabilistic reasoning into a structured computational problem and ties it closely to the hardware that executes the updates.

### PGMs vs EBMs

The potential functions in a Markov random field can be written as

potentials = exp(−Energy).

This reveals the direct bridge between PGMs and EBMs.

EBMs cannot be trained by standard gradient descent because the goal is not to find a single minimum. They must model the entire landscape of possible configurations. MCMC methods explore that terrain by sampling it rather than collapsing to the lowest point. This is what ties EBMs to hardware designed for sampling and why probabilistic computation becomes central.

## Bayesian Networks and Markov Random Fields

Bayesian networks and Markov random fields are two forms of probabilistic structure. They both describe how variables relate but they do so in different ways.

### Bayesian Nets vs Markov Random Fields

The joint probability of variables A, B, C describes the probability that all of them occur together. Any variable can depend on many others but those dependencies can be expressed either as cause and effect or as correlations.

Bayesian networks express dependencies as directed acyclic graphs. Each arrow represents a conditional probability. The entire joint distribution factors into a chain of conditional relationships without self reference. These models are usually used to represent causal structure and the goal of inference is to compute the probability of any variable once evidence is known.

Markov random fields use undirected graphs. The joint probability is written as a product of potential functions over cliques of the graph. These models represent relationships and correlations rather than directed causes. Conditional independence arises when a set of variables blocks all paths between two subsets.

A key difference appears when two variables share a child. Conditioning on the child makes the parents dependent in a Bayesian network but independent in an MRF. This difference reflects the absence of directionality in MRFs. A Bayesian network can always be converted to an MRF by moralizing the graph which means connecting all co parents and dropping directions.

## Sampling Tricks Like Tempering

Sampling methods determine how well a model explores its probability landscape. Techniques like Metropolis Hastings, simulated annealing and parallel tempering help chains move between high energy and low energy regions so they do not get stuck. Parallel tempering runs multiple chains at different temperatures and occasionally swaps their states. High temperature chains explore freely. Low temperature chains refine the details. These tricks improve mixing and converge to the correct distribution. Hardware that can run many chains in parallel and generate randomness at negligible cost provides an immediate advantage.