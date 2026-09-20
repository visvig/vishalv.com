---
title: Next Unlocks in Bio-AI
date: 2026-09-18
draft: false
summary: "Proteins are the machinery of life, and we are getting closer to designing them directly. That puts humanity near a fundamental unlock: the ability to engineer function at one of its deepest physical layers. Bio-AI is the bet that this becomes a new general-purpose capability."
---
## 1. Building Machines at the Nanoscale

Humans have always tried to build smaller, more capable mechanisms.

As systems shrink, however, conventional engineering becomes increasingly difficult: fabrication, control, energy transfer, and stability all become harder at nanometre scales. Yet highly functional mechanisms at that scale already exist. They sense, move, bind, switch states, transport cargo, and catalyze reactions with remarkable precision.

The field that has spent decades studying these mechanisms is biology. That creates a useful shift in perspective: biology is a mature source of nanoscale mechanisms that we can begin to engineer directly.

Proteins are especially interesting because they can self-assemble with atomic-scale precision, remain stable under suitable conditions, recognize molecules selectively, catalyze reactions, and undergo controlled conformational changes.

---

## 2. Current Frontiers of Protein Design

Most people familiar with computational protein design have heard of [AlphaFold](https://www.nature.com/articles/s41586-021-03819-2), which predicts a protein's three-dimensional structure from its amino-acid sequence. The breakthrough dramatically improved the sequence-to-structure problem that had challenged structural biology for decades.

Nature, however, has sampled only a tiny fraction of possible protein sequence and structure space. De novo design asks a different engineering question: rather than predicting what an existing sequence looks like, can entirely new proteins be designed for structures and functions that evolution never happened to produce?

Computational de novo protein design has historically faced three practical bottlenecks:

1. Generating a viable protein backbone
2. Finding an amino-acid sequence that will fold into that backbone
3. Getting the resulting protein to perform the intended function

The first two have changed dramatically.

- [RFdiffusion](https://www.nature.com/articles/s41586-023-06415-8) is a generative diffusion model for protein structure. Starting from noise and, when required, structural constraints, it can generate entirely new protein backbones, including monomers, assemblies, and binding interfaces
- [ProteinMPNN](https://pubmed.ncbi.nlm.nih.gov/36108050/) solves the inverse-folding problem. Given the geometry of a desired protein backbone, it proposes amino-acid sequences compatible with that structure

AlphaFold can then provide a computational check: given the proposed sequence, does the predicted folded structure recover the intended design?

In their 2026 review, [Yang et al.](https://doi.org/10.1038/s41586-026-10328-7) argue that the longstanding problems of designing new protein structures, assemblies, and protein-protein binders are now close to being solved, although success rates and activity still leave room for improvement.

The difficult frontier now is function:

- small-molecule binding
- catalysis
- multistate proteins
- conformational switching
- molecular machines

Progress on this third bottleneck, getting a designed protein to perform a chosen function rather than merely adopt a chosen structure, is already experimentally visible.

- [Langan et al.](https://doi.org/10.1038/s41586-019-1432-8) demonstrated de novo protein switches in 2019.
- [Chen et al.](https://doi.org/10.1126/science.aay2790) constructed AND, OR, NAND, NOR, XNOR, and NOT gates from designed proteins in 2020.
- [Guo et al.](https://doi.org/10.1038/s41587-026-03081-9) demonstrated machine-learning-designed artificial allosteric switches in 2026, including small-molecule, peptide, and protein inputs and YES/AND logic.

The important change is that a designed protein no longer needs to correspond to only one static structural state. Its behaviour can depend on its environment and its current molecular state.

A stateful molecular system can be represented as:

$$
s_{t+1}=F(s_t,x_t)
$$

where $x_t$ represents information from the environment and $s_t$ is the current molecular state.

Protein design is therefore moving from designing objects toward designing behaviour.

---

## 3. A Research Roadmap for a Frontier Lab

If protein design is moving toward increasingly complex behaviour, the next question is what researchers are trying to make designable next.

A useful reference point is the [Institute for Protein Design](https://www.ipd.uw.edu/), founded by David Baker, who received half of the [2024 Nobel Prize in Chemistry](https://www.nobelprize.org/prizes/chemistry/2024/summary/) for computational protein design.

The institute now describes its long-term objective as **programmable matter**: gaining the ability to determine what atoms go where and what they do, on demand and at scale. Its stated frontier extends from custom enzymes and hybrid protein-mineral materials to powered molecular machines.

A broader ecosystem of frontier research organizations is attacking related parts of this problem from different directions:

- [EvolutionaryScale](https://www.evolutionaryscale.ai/) is building frontier AI models for biology. Its ESM3 model jointly reasons over protein sequence, structure, and function, with the broader objective of making it possible to understand and create proteins beyond those found in nature.

- [Latent Labs](https://www.latentlabs.com/) describes itself as a frontier AI lab for molecular biology. Its research focuses on generative models that provide increasingly precise control over molecular design, including de novo protein binders, antibodies, enzymes, and genetic-engineering systems.

- [Generate:Biomedicines](https://generatebiomedicines.com/) is developing a closed-loop generative biology platform in which models generate protein sequences, experiments build and measure them at scale, and the resulting data feeds back into subsequent generations. Its current commercial focus is therapeutics, but the underlying research objective is increasingly systematic design of proteins with specified biological functions.

Capital is forming around the same transition, with investors such as [Lux Capital](https://www.luxcapital.com/), [DCVC Bio](https://www.dcvc.com/bio/), and [Andreessen Horowitz Bio + Health](https://a16z.com/bio-health/) investing across computational biology, synthetic biology, molecular design, and AI-enabled biological platforms.

For a frontier lab, however, it is probably a mistake to prescribe a sequence of future product categories today. The applications worth pursuing later will depend on which technical capabilities actually become tractable.

A more useful roadmap is to work backwards from ambitious application frontiers to the technical breakthroughs they require:

|       Applications        | Technical breakthroughs required                              |
| :-----------------------: | ------------------------------------------------------------- |
|   **Biomanufacturing**    | programmable catalysis, sensing, allostery, molecular control |
|      **Agriculture**      | environmental sensing, robust delivery                        |
|    **Sustainability**     | carbon fixation, light capture, waste conversion              |
|    **Nanotechnology**     | assembly, actuation, energy transduction, coordination        |
|       **Computing**       | molecular logic, switching, feedback, state                   |
|    **Memory Systems**     | persistent states, write/read/reset mechanisms                |
| **Biological interfaces** | sensing, local control, delivery, stability                   |

These technical breakthroughs are not equally difficult or equally close.

Some, such as molecular logic, persistent memory, coordinated actuation, and powered molecular machines, remain substantially further from general designability.

Among the nearer commercially useful frontiers are molecular sensing, allostery, catalysis, and biochemical feedback. These capabilities are already beginning to emerge experimentally and map directly onto a commercially valuable application: biomanufacturing.

This makes biomanufacturing a useful first application area to attack, because it allows the lab to develop capabilities that could later open much broader application spaces.

---

## 4. Closest Target: Biomanufacturing

The technical breakthroughs closest to practical engineering today are highly applicable in biomanufacturing:

- **Programmable sensing:** detect chosen metabolites or process states;
- **Predictable allostery:** convert sensing into controlled changes in protein activity;

Dynamic metabolic control is already an active field. The 2026 [review paper](https://doi.org/10.1016/j.tibtech.2025.10.002) surveys approaches including protein degradation, spatial regulation, and engineered allosteric switches for controlling metabolic flux.

The opportunity is that general-purpose, de novo-designed protein controllers remain an emerging capability. 

Closing that gap requires further progress in:

- **Modular coupling:** connect different molecular inputs to different biochemical outputs;
- **Multi-input control:** respond to combinations of molecular signals;
- **Feedback:** dynamically regulate pathways as conditions change;

Pieces of these capabilities are already beginning to cross from biological discovery into engineering. [This paper](https://doi.org/10.1038/s41587-026-03081-9) demonstrated synthetic allosteric switches with small-molecule, peptide, and protein inputs, including YES and AND logic. More recently, [this paper](https://doi.org/10.64898/2026.09.08.750245), from David Baker's group, demonstrated de novo enzymes whose catalytic activity could be activated or repressed by designed protein effectors.

The longer-term goal is **inverse design**: specify the desired behaviour first and generate the controller that implements it.

The market thesis is therefore:

> Win the programmable control layer of biomanufacturing by making sensing, allostery, and biochemical feedback increasingly designable.

The economic value of better dynamic control is already visible. [Jakštaitė et al. (2026)](https://doi.org/10.1038/s41557-026-02138-1) showed that optimized time-dependent inputs increased AMP production by up to 5.7-fold and UTP yield by roughly 21-fold in cell-free enzymatic networks.

Their control system was external. The deeper protein-design problem is to move some of that control into the chemistry itself.

### The First Asset

The first asset should be deliberately narrow:

> A de novo-designed metabolite-responsive protein controller that senses one industrially relevant molecule and reversibly changes the activity of one enzyme in a production pathway.

Consider a simple pathway:

$$
A \xrightarrow{E_1} B \xrightarrow{E_2} C
$$

If intermediate $B$ accumulates beyond a useful range, the controller would respond automatically:

> When $B$ exceeds concentration $Y$, reduce the activity of $E_1$. When $B$ falls below the threshold, restore $E_1$ activity.

The controller can be decomposed into three functions:

- **Sensor:** selectively binds metabolite $B$.
- **Allosteric relay:** converts binding into a predictable conformational change.
- **Actuator:** uses that state change to increase or decrease the activity of $E_1$.

These are functional components of the controller and need not correspond to three physically separate proteins.

The first experimental objective is therefore to demonstrate that adding the designed controller to a cell-free or microbial production pathway improves a measurable process outcome such as yield, intermediate accumulation, stability, or throughput.

If the first controller reveals reusable design principles, the next objective is to avoid designing every controller from scratch and instead independently tune:

- **Input:** which molecule is sensed;
- **Threshold:** the concentration at which the controller responds;
- **Response:** how strongly the target enzyme is activated or inhibited;
- **Output:** which enzyme or pathway component is controlled.

The platform hypothesis is validated only if subsequent controllers require progressively less bespoke discovery.

The eventual inverse-design problem becomes, for example:

> Sense metabolite $B$, respond above $5\,\mathrm{mM}$, inhibit enzyme $E_1$ by 70%, and automatically reset when the concentration falls.

### Commercial Entry Points

- [Novonesis](https://www.novonesis.com/) operates across enzymes, food, agriculture, household care, and bioenergy.
- [Arzeda](https://www.arzeda.com/) has taken computational protein design into industrial products across food and biotechnology.

Potential buyers or partners could therefore include enzyme companies, chemical companies, fermentation businesses, food and ingredient companies, agriculture companies, and biomaterials manufacturers.

An asset-light model is possible: co-development fees during development, followed by licensing and royalties once a controller creates measurable process value.

Biomanufacturing is therefore useful not merely as a revenue opportunity. It forces the lab to solve increasingly general problems in molecular sensing, control, and feedback.

### Why India Is an Attractive Starting Market

India already has a large industrial base against which this technology could create value.

The [India BioEconomy Report 2026](https://www.birac.nic.in/webcontent/IBER_2026.pdf) estimates India's bioeconomy at USD 195.3 billion in 2025, with BioIndustrial at USD 90.2 billion and BioAgri at USD 14.6 billion. The report projects BioIndustrial alone reaching roughly USD 130 billion by 2030. 

*Note: These figures describe the industrial base rather than an addressable market; the initial opportunity is the subset of processes in which molecular control can materially improve production economics.*

The relevant opportunity is to become a technology layer within existing industrial processes where better enzymes, sensing, metabolic control, or fermentation economics create measurable value.

There are already potential customers and development partners in India:

- [Novonesis](https://www.novonesis.com/) is expanding its Patalganga site with a €600 million enzyme-production facility, expected to produce enzymes for industries including food, household care, and biofuels.
- [Praj Industries](https://www.praj.net/) operates across biofuels, fermentation, biochemicals, and industrial biotechnology, and already develops and optimizes enzymes through its Praj Matrix R&D centre.
- [String Bio](https://stringbio.com/) has built a gas-fermentation platform and commercial products across nutrition, agriculture, and personal care.
- [Sea6 Energy](https://www.sea6energy.com/) develops biotechnology-based products across agriculture, food ingredients, renewable chemicals, bioplastics, and biofuels.

These companies represent different ways a lab could enter the market:

- **Co-develop molecular controllers** for an existing fermentation or enzyme process;
- **License designed proteins** that improve yield, selectivity, or process stability;
- build controllers around a customer's existing production strain or enzyme stack;
- use co-development projects to generate process-specific data that improves the underlying design platform.

The policy environment is also well aligned today. India's [BioE3 initiative](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2248433) explicitly prioritizes high-performance biomanufacturing across areas including enzymes, smart proteins, bio-based chemicals, climate-resilient agriculture, and carbon utilization, while supporting Bio-AI hubs, biofoundries, and biomanufacturing infrastructure.

India therefore combines a large existing bioindustrial market, companies already operating at commercial scale, new manufacturing investment, and government infrastructure aimed directly at scaling biological technologies.

That makes it possible to develop the underlying protein-design capability with real industrial processes as the training ground.

---

## 5. What Further Breakthroughs Could Unlock

Beyond biomanufacturing, the remaining application spaces sit at very different distances from current protein-design capabilities.

What comes after should depend on what the lab actually learns to design reliably.

- Agriculture and sustainability require extensions of sensing and catalysis into harder environments.
- Nanotechnology requires controlled assembly and actuation.
- Computing requires composability across interacting molecular components.
- Memory requires persistent, writable state.

A rough ordering from nearer to more speculative is useful, provided it is not mistaken for a fixed roadmap.

### 5.1. Agriculture

Agriculture requires many of the same capabilities as biomanufacturing: molecular recognition, signalling, catalysis, and reliable function in complex environments.

There is already an adjacent commercial foothold.

- [Vestaron](https://vestaron.com/) commercializes peptide-based bioinsecticides as alternatives to conventional synthetic crop-protection chemistry.

Research is also beginning to show how engineered proteins could extend plant sensing. [This paper](https://pubmed.ncbi.nlm.nih.gov/39693803/) reviews engineered plant biosensors, including protein switches that allow plants to detect new small molecules and couple them to downstream signalling.

De novo design could push this toward:

- crop-protection proteins designed against specific pests;
- sensors for pathogen, nutrient, or stress markers;
- proteins that activate only under specified environmental conditions;
- engineered signalling systems that alter plant or microbial behaviour.

As an extension from biomanufacturing, the major additional challenge is robust delivery and predictable function in uncontrolled environments.

### 5.2. Sustainability

Sustainability is already beginning to move from an abstract protein-design opportunity toward industrial experimentation. Here, the commercial proposition is to use molecular specificity and catalysis to replace energy or reagent-intensive bulk processes.

- [Aether Bio](https://aetherbio.com/) is developing AI-designed proteins for applications including selective extraction of critical minerals and advanced materials.

- [Aquaporin](https://aquaporin.com/technology/) already incorporates natural aquaporin proteins into commercial filtration membranes, demonstrating that molecular-scale protein selectivity can be integrated into industrial hardware.

At the research frontier, [this paper](https://pubs.acs.org/doi/10.1021/jacs.6c07615) demonstrated a de novo designed CO₂ reductase capable of catalysing carbon-dioxide reduction. It provides an early example of artificial proteins being designed for environmentally relevant chemistry rather than simply reproducing natural enzymes.

Further breakthroughs could enable:

- selective recovery of critical minerals;
- conversion of difficult waste streams;
- carbon capture and fixation;
- light-driven chemistry;
- highly selective molecular filtration.

### 5.3. Nanotechnology

A harder frontier appears when proteins are designed to become structural and mechanical components. Industry is beginning to explore the materials side.

- [Arzeda](https://www.arzeda.com/) has worked with W. L. Gore & Associates on protein-enabled advanced materials, exploring how computationally designed proteins can introduce new material properties.

The research frontier is also moving toward increasingly engineered nanoscale structures.

[This paper](https://pubs.acs.org/doi/10.1021/acs.chemrev.5c00990) reviews the de novo design of protein nanopores, including efforts to create pores with controlled geometry and molecular-sensing properties. [This paper](https://www.biorxiv.org/content/10.64898/2026.08.25.747085v1) demonstrates de novo designed porous protein crystal frameworks with controllable architectures, showing how proteins can increasingly be treated as building blocks for engineered nanoscale materials.

The next breakthroughs are substantially harder:

- programmable actuation;
- energy transduction;
- directional motion;
- controlled transport;
- coordination between moving components.

Those breakthroughs could eventually produce mechanically useful systems such as molecular gates and pumps, axles, rotors, and powered molecular machines.

### 5.4. Computing

Today, protein computing has crossed the first conceptual threshold: proteins can implement logic.

- [Asimov](https://www.asimov.com/) provides an adjacent precedent. It develops software, genetic parts, and engineered cells for computer-aided design of biological systems. Its systems operate primarily at the genetic and cellular level rather than through de novo protein computation, but the engineering philosophy is similar: make biological behaviour increasingly programmable and composable.

[This paper](https://doi.org/10.1126/science.aay2790) demonstrated AND, OR, NAND, NOR, XNOR, and NOT gates built from designed proteins, including operation inside living cells. More recently, [this paper](https://doi.org/10.1038/s41587-026-03081-9) demonstrated artificial allosteric protein switches with small-molecule, peptide, and protein inputs, including YES and AND logic.

The unresolved problem is whether protein logic can become reliable and composable at scale. The commercially useful computation would also be different from silicon computing:

> Detect molecules A and B, ignore C, and trigger D only when the required biochemical conditions are satisfied.

Possible applications include:

- autonomous biosensors;
- smart industrial controllers;
- molecular diagnostics;
- environmental sensing systems;

The biggest unlock is that computation occurs directly inside the molecular environment being sensed and controlled.

### 5.5. Memory

Memory is further away, although primitive versions are already beginning to appear. There is an adjacent commercial molecular-storage industry.

- [Biomemory](https://www.biomemory.com/) is developing DNA-based information storage.
- [Microsoft Research](https://www.microsoft.com/en-us/research/project/dna-storage/) has explored DNA as an extremely dense archival storage medium.

[This paper](https://www.nature.com/articles/s41586-026-10323-y) describes a genetically encoded molecular recorder in which computationally designed protein assemblies grow over time and preserve information about previous cellular events. The result functions somewhat like molecular tree rings, allowing biological history to be reconstructed later.

Protein-based memory would serve a different purpose. Rather than primarily storing human digital files, it could allow molecular systems to retain information about what they have experienced. A future system might record:

> This environment encountered molecule X, crossed threshold Y, and remained there for Z hours.

The missing breakthroughs include:

- persistent but controllable molecular states;
- reliable writing;
- reliable readout;
- reset or overwrite;
- coupling stored state to future behaviour.

### 5.6. Biological Interfaces

At the far end, combining sensing, logic, memory, feedback, and reliable delivery could enable much richer interfaces with living systems.

Current neurotechnology companies such as [Neuralink](https://neuralink.com/), [Synchron](https://synchron.com/), [Paradromics](https://www.paradromics.com/), and [Precision Neuroscience](https://precisionneuro.io/) primarily interface neural tissue with engineered hardware.

The brain is an electrochemical system: neural state is represented not only through membrane voltage, but also through neurotransmitters, receptors, ion concentrations, metabolites, and intracellular signalling. [This paper](https://doi.org/10.1038/s41583-025-01003-3) reviews technologies for measuring this neurochemical layer in vivo.

A sufficiently advanced molecular system could eventually complement such interfaces by sensing and modifying biochemical state directly within the biological substrate.

Delivery, reversibility, specificity, immune response, long-term stability, and safety make this substantially more speculative.

---

## 6. A Reinforcing Story From Evolution

There is a deeper evolutionary reason this direction is interesting.

A useful conceptual framework comes from [this paper](https://www.preprints.org/manuscript/202607.0371), a 2026 hypothesis paper arguing that major transitions across biology and technology can be viewed through increasingly capable systems separating representations from the machinery that interprets them.

DNA provides an unusually powerful biological example. It uses an extremely small representational vocabulary:

$$
R_{\mathrm{DNA}}
\in
\{A,T,G,C\}^{*}
$$

Yet cellular machinery interpreting DNA can produce objects with radically different physical properties.

The same four-letter representation can eventually specify:

- an enzyme;
- a receptor;
- a structural fibre;
- a membrane pore;
- an antibody;
- a molecular motor.

The information representation does not physically resemble the object that results from it.

This separation between representation and physical realization is one of biology's most powerful abstractions.

A useful description is:

$$
\text{representation}
\rightarrow
\text{interpretation}
\rightarrow
\text{physical realization}
$$

De novo protein design expands the realization space.

Natural evolution has explored only a fraction of the physically possible sequence and structure landscape. Computational design increasingly allows exploration beyond it.

But proteins also carry information through their:

- conformation;
- ligand occupancy;
- modification state;
- location;
- assembly state.

Allostery already provides the simplest example. A molecule binds to a protein, the protein's state changes, and its behaviour changes elsewhere.

DNA specifies proteins, but those proteins can themselves interpret molecular information and conditionally act on it.

Once their actions modify the surrounding environment, a feedback loop appears:

$$
x_t
\rightarrow
s_t
\rightarrow
a_t
\rightarrow
x_{t+1}
$$

This suggests a possible technological continuation of a much older biological trajectory:

- In biology, encoded information came to specify physical structures and functions.
- Those representations came to specify increasingly complex molecular machinery.
- A possible technological continuation is machinery that itself interprets information and determines what physical state comes next.

That provides a precise way of thinking about **programmable matter**.

Not matter whose initial structure was designed by a computer, but matter whose future structure and behaviour depend on information it encounters.

Although the endpoint of de novo protein design may initially appear to be an enormous catalogue of designed proteins, it may ultimately become a technological capability for addressing a much deeper question:

> How should matter change when it encounters information?