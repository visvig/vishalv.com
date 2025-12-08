---
title: Betting On a New Compute Frontier
date: 2025-11-29
tags:
  - computing
draft: true
summary:
---
## Thermodynamic Computing

Thermodynamic computing starts from the idea that computation can be pushed into the physical world. Systems evolve toward lower energy states and fluctuate under thermal noise. Instead of forcing all computation to be digital, thermodynamic computing uses these natural processes directly. Noise, energy flow and equilibrium configurations become computational tools. This reframes how inference can be performed and shifts attention away from multiplication-heavy workloads toward physics-driven operations.

## Probabilistic Hardware

Probabilistic hardware builds on components that naturally produce randomness. Traditional architectures rely on pseudo random number generators that must be simulated at a cost. Probabilistic hardware embraces noise as a first-class ingredient. Randomness is not emulated but harvested. This lowers the cost of running large stochastic algorithms and turns probabilistic inference into something that can be executed natively by the hardware instead of being approximated in software.

## Extropic

Extropic takes this direction seriously and focuses its architecture on block sampling. The chip uses exotic materials that generate physical randomness and blends them with digital coordination logic. The design is built around accelerating the computational patterns found in probabilistic models. Extropic is a bet that sampling will become a central primitive again and that energy based models will re-enter the mainstream once hardware exists that can support them efficiently.

## Physical Randomness

Physical randomness is attractive because it eliminates the overhead of generating synthetic entropy. True randomness comes from thermal fluctuations inside the device. For algorithms that constantly demand new random bits, this improves efficiency and aligns sampling operations with the true behavior of the underlying model. Much of probabilistic inference becomes compatible with the physics itself instead of fighting against it.

## Energy Based Models and Probabilistic Graphical Models

Energy based models and probabilistic graphical models express the same structure in different languages. PGMs write down how variables depend on one another through factors or conditional probabilities. EBMs encode the same structure as an energy function where low energy states correspond to high probability states.

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

### Probabilistic Graphical Models

A probabilistic graphical model encodes a probability distribution into a graph so that graph algorithms can be used to perform inference. This turns probabilistic reasoning into a structured computational problem and ties it closely to the hardware that executes the updates.

## The Bottleneck in Extropic’s Bet on Block Sampling

Extropic’s architecture is deeply optimized for block Gibbs updates. This creates a strong alignment with models that admit block factorizations. Not all models decompose cleanly into blocks that can be updated independently. The hardware is most powerful when the model structure supports these operations. Extropic is making a deliberate bet that energy based models and block structured PGMs will gain relevance again. The limitation is clear. If block sampling is not central to future model families, the chip’s advantage narrows.

## Sampling Tricks Like Tempering

Sampling methods determine how well a model explores its probability landscape. Techniques like Metropolis Hastings, simulated annealing and parallel tempering help chains move between high energy and low energy regions so they do not get stuck. Parallel tempering runs multiple chains at different temperatures and occasionally swaps their states. High temperature chains explore freely. Low temperature chains refine the details. These tricks improve mixing and converge to the correct distribution. Hardware that can run many chains in parallel and generate randomness at negligible cost provides an immediate advantage.

## Co Evolution of Hardware and Software in AI

The history of AI repeatedly shows that ideas become mainstream only when hardware makes them practical. Neural networks waited for GPUs. Transformers waited for large scale accelerators. If probabilistic models and sampling find their way back, it will likely be because new chips make them viable again. Software and hardware pull each other forward. Probabilistic hardware and thermodynamic computation represent another potential turning point in that co evolution. The models that benefit from these capabilities may become the core methods of the next generation.