---
title: Bets on Post-GPU Compute
date: 2025-11-29
tags:
  - computing
  - deeptech
  - start-ups
  - EBMs
  - machine-learning
  - vc
draft: false
summary: Post-GPU compute is a bet that new hardware will make different primitives cheap. When the primitive changes, the winning model classes change. Extropic is a bet that sampling becomes that primitive.
---
## On Computing and the Hardware Lottery

Somewhere along the way, computing got mistaken for something only machines do.

But computation is older than all of us. The world “solves” problems for free because physics keeps pushing systems toward stable states, across scales:

- **Classical** A ball rolls downhill until it settles, modeled as minimizing potential energy
- **Quantum** An electron in an atom occupies stable energy levels, modeled by energy eigenstates of the Schrödinger equation
- **Relativity** Matter curves spacetime and free-falling objects follow geodesics, modeled by geodesic motion from the spacetime metric

Over and over, the same pattern shows up. Things end up where their dynamics naturally settle.

Seen this way, computing need not be restricted to instructions or code. It can be extended to exploit the universe’s tendency to settle into particular states. Digital machines are just one way of harnessing that tendency.

- **Digital** computes by constraining physics into discrete, stable states
- **Analog** computes through continuous physical motion
- **Quantum** computes using superposition and interference
- **Neuromorphic** computes using dynamics inspired by nervous systems
- **Thermodynamic** computes by relaxing into equilibrium

Once computing is understood this way, it becomes clear that not all forms of computation succeed equally. The ones that survive are the ones hardware makes easy.

Among these, digital computation happened to win first because it aggressively constrained physics. Transistors were engineered so that only two states were stable, making reasoning precise, repeatable, and scalable. If a problem could be rewritten in terms of on and off, a machine could follow the same steps perfectly, copy them endlessly, and coordinate billions of operations reliably.

History reinforced this advantage decisively. [Wartime cryptanalysis at Bletchley Park](https://www.cc4e.com/papers/2012-06-Bletchley-Turing-c-IEEE.pdf) directly led to the construction of some of the world’s first large-scale, programmable, electronic computing machines, including Colossus. Built to exploit logical structure, statistical regularities, and discrete constraints in German ciphers like **Enigma (via the Bombe)** and **Lorenz (via Colossus)**, these systems demonstrated that electronic, digital computation could solve problems no human organization could scale to.

Their success legitimized digital machines as a strategic technology, shaped early computer science, and created institutional momentum that carried directly into post-war computing. Once this ecosystem formed, algorithms, hardware, and even our definition of computation increasingly evolved around what digital systems made easy.

In the digital computing paradigm, beyond CPUs, GPUs were built to render video games and accelerate graphics workloads. That meant performing the same simple arithmetic operations across enormous grids of pixels in parallel. As a result, GPUs became exceptionally good at large-scale linear algebra. Neural networks turned out to rely heavily on exactly these operations, especially dense matrix multiplications and convolutions. When GPUs became cheap and widely available, deep learning stopped being one promising idea and became the dominant way to do machine learning. This is the [hardware lottery](https://arxiv.org/pdf/2009.06489).

Models whose core operations looked different struggled. If a method relied on repeatedly sampling states, updating small subsets of variables, running Markov chains until they mixed, or iterating through sequential stochastic updates, it was slower and harder to scale on GPU-centric stacks. Entire families of approaches built around MCMC, Gibbs sampling, and **energy-based modeling** lagged behind, because the hardware made their fundamental operations expensive.

In 2025, that constraint is beginning to loosen again. New compute stacks are emerging that make different physical behaviors cheap to exploit:

- [Extropic](https://extropic.ai/): thermodynamic/probabilistic hardware that makes *sampling* (noise + relaxation) a native primitive
- [Normal Computing](https://www.normalcomputing.com/): thermodynamic/analog-friendly primitives for *stochastic* workloads like diffusion and simulation
- [BrainChip](https://brainchip.com/): neuromorphic chips that compute via *spiking, event-driven dynamics* instead of dense matmuls
- [Mythic](https://mythic.ai/): *analog in-memory computing*, uses continuous physics inside memory arrays to cut data movement.

From a VC investor perspective, the upside is a compounding flywheel:

1. New hardware makes a previously expensive primitive cheap
2. That unlocks model classes that were infeasible before
3. Those models create research pressure to invent algorithms tailored to that primitive
4. Better algorithms widen the hardware’s advantage even further
5. **If the right algorithm clicks with the primitive, the new paradigm can beat GPU-era ML**

Sometimes this resolves mundanely: a startup develops differentiated IP and exits by selling to an incumbent like NVIDIA. Other times, the hardware–algorithm co-evolution locks in, reshaping an entire compute paradigm.

At this stage, it is impossible to know which path these efforts will take. But historically, when hardware and algorithms reinforce each other tightly enough, the result is not incremental progress.

## Energy Based Models (EBMs)

Long before large language models (LLMs), Yann LeCun and others argued that intelligence should not be framed as predicting the next output. The world does not present itself as clean input–output pairs. They argue that the world presents constraints, structure, and many possible explanations that must coexist [in this paper](http://yann.lecun.com/exdb/publis/pdf/lecun-06.pdf).

Energy-based models come from that view. Instead of asking “what is the answer,” they ask “what configurations of the world make sense at all.” Think of an energy-based model like a landscape of hills and valleys, where every possible explanation of the world is a point on this terrain. Low valleys are explanations that make sense. High hills are explanations that do not.

Technically, the model defines an unnormalized probability distribution

$$
p(x) \propto e^{-E_{\theta}(x)}
$$

where $E_{\theta}(x)$ is the learned energy function.

Learning shapes the terrain by pushing down the energy of data-like configurations and pushing up the energy of mismatched ones. Another way to say this is that the model reshapes the implied probability distribution over configurations.

A key difference from LLMs is that inference in EBMs is a search, as opposed to a forward-pass.

You drop a ball somewhere on the landscape and let it move downhill, with a little randomness so it can hop out of shallow traps and explore. In practice, this “walk” is usually an [Markov Chain Monte Carlo (MCMC)](https://www.mit.edu/~9.520/spring10/Classes/class21_mcmc_2010.pdf) procedure such as Gibbs sampling, where many small steps trade off downhill motion with noise. Where the ball settles is a likely explanation. If there are multiple valleys, different runs can settle in different places. A blurry image can land in a “motion blur” valley or a “low light” valley. A short message can settle into sarcasm or sincerity. This is what is meant by multi-modality.

[Continual learning](http://arxiv.org/abs/2011.12216) fits this picture as well. New data reshapes parts of the terrain. Valleys deepen, new ones form, and old ones remain. In more technical terms, \(E_\theta\) is adjusted locally so new modes become low-energy without necessarily destroying existing low-energy regions, at least in principle.

The downside is compute. Search takes many steps and sustained **randomness**. Training often requires negative samples drawn from the model itself, meaning these samplers must be run repeatedly during learning, not just at inference time. On today’s hardware, this leads to slow sampling loops that fit poorly on chips optimized for heavy matrix multiplications, like GPUs.

## Thermodynamic Computing Advantage

Since EBMs are like hills and valleys, the way they act as generative models is through sampling. The model gives you a landscape, so generating something means moving through the terrain and ending up in low valleys.

Sampling here looks like:

- Start from an initial guess and take small steps that tend to go downhill
- Pure downhill motion traps you in the nearest valley (mode collapse)
- Add controlled noise so you can escape shallow traps and explore nearby basins

That noise is what lets different runs settle into different plausible valleys.

On a digital computer this is [technically awkward](https://engineering.mit.edu/engage/ask-an-engineer/can-a-computer-generate-a-truly-random-number/#:~:text=Using%20pseudo%2Drandom%20numbers%20is,%2C%20England%2C%20for%20this%20question.). The machine is deterministic by design, so it has no native randomness. Every “random” move is manufactured using a **Pseudo-Random Number Generator (PRNG)**, which is just an algorithm producing sequences that look random. Then sampling becomes a long software loop of sequential steps, each step consuming more pseudo-random bits. Since EBMs need exploration and noise, digital hardware makes both expensive.

[Thermodynamic computing](http://arxiv.org/abs/1911.01968) starts from the opposite premise. Physical systems already fluctuate, explore, and relax toward low-energy states because of their dynamics, and thermal noise is the mechanism that enables exploration rather than something to suppress. Instead of emulating sampling step by step, you can let a system evolve and read off the distribution it settles into. 

That is why thermodynamic computing fits EBMs so naturally. It makes the core operation cheap by making it physical, and that changes which kinds of models are even feasible to build.

## Extropic AI

Extropic AI is a deep-tech startup founded in 2022 by [Guillaume Verdon](https://x.com/GillVerd) and [Trevor McCourt](https://x.com/trevormccrt1), both former quantum computing researchers at Alphabet’s X and Google Quantum AI teams. Verdon is known for his work on TensorFlow Quantum and holds advanced degrees in physics and quantum information, while McCourt brings engineering and probabilistic systems experience rooted in academia and industry.

The company has raised [$14.1 million in seed funding](https://tracxn.com/d/companies/extropic/__vwWnk7wGdSIGd5J9vh2-o5dOzD-nYCUKxeOVSzx0msc), led by Kindred Ventures with participation from Buckley Ventures, HOF Capital, Julian Capital, RTX Venture, Valor Equity Partners, e1, and prominent angel backers including Aidan Gomez (Cohere), Amjad Masad (Replit), Balaji Srinivasan (Coinbase), Naval Ravikant (Angellist), Garry Tan (YC), Arvind Srinivas (Perplexity), Ari Emmanuel (Endeavor), Logan Kilpatrick (Google Deepmind) and Scott Belsky (Adobe).

Extropic’s product roadmap centers on Thermodynamic Sampling Units (TSUs), notably the prototype [XTR-0 platform and its progression toward larger silicon designs like the planned Z-1 with hundreds of thousands of p-bits](https://extropic.ai/writing/thermodynamic-computing-from-zero-to-one). These probabilistic bits (p-bits) fluctuate natively to enable efficient sampling and generative inference, a departure from traditional matrix-multiply-centric AI accelerators. 

Rather than competing head-on with GPUs, Extropic positions itself as enabling a new compute class for sampling-heavy models. Their open-source library [thrml](https://github.com/extropic-ai/thrml) lets developers prototype energy-based and thermodynamic algorithms today while hardware matures, aligning ecosystem growth with their hardware vision.

## Extropic’s Bet on Block Sampling

At a technical level, Extropic’s architecture is built around **block Gibbs sampling**, which is a specific Markov Chain Monte Carlo method with strict structural requirements. Block Gibbs works cleanly when the underlying model can be represented as a bipartite or conditionally separable graph, where one set of variables can be sampled jointly given the other. This structure is common in certain energy-based models, restricted Boltzmann machines, and [factor graphs](https://ocw.mit.edu/courses/6-438-algorithms-for-inference-fall-2014/3e3e9934d12e3537b4e9b46b53cd5bf1_MIT6_438F14_Lec4.pdf) with explicit conditional independence.

This immediately limits the class of models that can fully exploit the hardware. If the dependency graph is dense, strongly coupled, or lacks a clean partition into conditionally independent blocks, block Gibbs updates lose their advantage. Conditional distributions become expensive or intractable, blocks collapse to single-site updates, and mixing slows dramatically. In those cases, the sampler no longer benefits from parallel block updates, and the hardware’s core strength is underutilized.

There is a second, subtler constraint. Even if a model admits a bipartite or block-structured graph, it must also accept blocked Gibbs-style sampling as a viable inference mechanism. 

## The Big Bet

Many modern models are trained and used in regimes where inference is tightly coupled to gradient-based optimization, amortized inference, or deterministic forward passes. Retrofitting such models to rely on explicit MCMC dynamics is often non-trivial and can change their learning behavior.

So it becomes clear that Extropic's big bet is that future models will be designed around conditional structure, rather than treating sampling as a secondary or approximate tool. If that happens, block Gibbs becomes a natural primitive and the hardware shines. If it does not, the applicability of the chip remains narrow. 

In that sense, Extropic’s wager is less about accelerating existing models and more about steering the ecosystem toward models that can actually use what the hardware is best at.