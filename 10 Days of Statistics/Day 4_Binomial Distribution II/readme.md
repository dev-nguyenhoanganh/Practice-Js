# Day 4: Binomial Distribution I

## Tutorial

We define a binomial process to be a binomial experiment meeting the following conditions:


- The number of successes is $`x`$.
- The total number of trials is $`n`$.
- The probability of success of $`1`$ trial is $`p`$.
- The probability of failure of $`1`$ trial $`q`$, where $`q = 1 - q`$.
- $`b(x, n, p)`$ is the binomial probability, meaning the probability of having exactly $`x`$ successes out of $`n`$ trials.

The binomial random variable is the number of successes, $`x`$ out of $`x`$ trials.

The binomial distribution is the probability distribution for the binomial random variable, given by the following probability mass function:

```math
    b(x, n, p) = (_{x}^{n}) \cdot p^{x} \cdot q^{n - x}
```

Note: Recall that $`(_{x}^{n}) = \frac{n!}{x!(n - x)!}`$.


## Task

A manufacturer of metal pistons finds that, on average $`12%`$ of the pistons they manufacture are rejected because they are incorrectly sized. What is the probability that a batch of $`10`$ pistons will contain:

1. No more than $`2`$ rejects?
2. At least $`2`$ rejects?

**Input Format**

A single line containing the following values (denoting the respective percentage of defective pistons and the size of the current batch of pistons):

```
12 10
```

If you do not wish to read this information from stdin, you can hard-code it into your program.

**Output Format**

Print the answer to each question on its own line:

1. The first line should contain the probability that a batch of $`10`$ pistons will contain no more than $`2`$ rejects.
2. The second line should contain the probability that a batch of $`10`$ pistons will contain at least $`2`$ rejects.

Round both of your answers to a scale of $`3`$ decimal places (i.e., $`1.234`$ format).


## Solution

