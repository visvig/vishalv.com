---
title: Fifty Challenging Problems In Probability
author: Frederick Mosteller
category: Math
readingPeriod: 30 Days
rating: 5
order: -2
description: Selected problem famously known as the 3-Man jury.
image: /static/images/fcpip.jpg
---
Consider a 3-man jury: two serious ones and a joker. We’re assuming the probability of each serious juror independently making the correct judgment is _p_, and the joker makes a random decision (with a probability of 0.5 for being correct since their decision is random, like flipping a coin).

### Two Serious Jurors Agree

- Both Correct: Probability is _p_×_p_=_p²_.
- Both Incorrect: Probability is (1−_p_)×(1−_p_)=(1−_p_)_²._

### Two Serious Jurors Disagree

- One is correct, and the other is incorrect. The probability for this scenario is 2×_p_×(1−_p_), as this can happen in two ways (Juror 1 is correct and Juror 2 is incorrect, or vice versa).

### Jury Decision with Joker

1. Both Serious Jurors Agree: The decision is already made, irrespective of the joker’s vote. The probability that this decision is correct is _p²_, and the probability that it’s incorrect is (1−_p_)_²_.
2. Serious Jurors Disagree: The decision falls to the joker, effectively a random decision. The probability of a correct decision is 0.5, and incorrect is also 0.5.

### Probability of Correct Jury Decision

- When the serious jurors agree, the probability of a correct decision is _p²_.
- When they disagree, the decision is a coin flip (0.5 chance of being correct). The probability of them disagreeing is 2×_p_×(1−_p_), so the contribution to the overall probability of a correct decision is 0.5×2×_p_×(1−_p_)=_p_(1−_p_).

Therefore, the total probability of a correct decision by the 3-person jury is _p²_+_p_(1−_p_) = _p._

### Compared with One Serious Juror

A single serious juror has a probability _p_ of making the correct decision. So, A 3-man jury with a Joker is just as reasonable as a 1-man jury.

### Why do Batman and Gordon need Two-Face?

Without _Two-Face_ (referred to as _Joker_ in this article), the jury (_Batman_ and _Gordon_) can only make a correct decision when both agree, which has a probability of _p²_.

- With Two-Face: The probability of a correct decision is _p_.
- Without Two-Face: The probability is _p²_.

Comparing these two probabilities demonstrates that the inclusion of _Harvey Dent,_ aka _Two-Face,_ in the jury increases the overall probability of making a correct decision. The addition of _Two-Face’s_ random decision-making paradoxically, enhances the jury’s effectiveness in scenarios where _Batman_ and _Gordon_ disagree.

It's fascinating how a chance element can enhance the results of group decision-making.