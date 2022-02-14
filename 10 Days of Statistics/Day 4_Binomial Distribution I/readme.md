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

The ratio of boys to girls for babies born in Russia is $`1.09 : 1`$. If there is $`1`$ child born per birth, what proportion of Russian families with exactly $`6`$ children will have at least $`3`$ boys?

Write a program to compute the answer using the above parameters. Then print your result, rounded to a scale of $`3`$ decimal places (i.e., $`1.234`$ format).

**Input Format**

A single line containing the following values:

**Constraints**

```
1.09 1
```

If you do not wish to read this information from stdin, you can hard-code it into your program.

**Output Format**

Print a single line denoting the answer, rounded to a scale of $`3`$ decimal places (i.e., $`1.234`$ format).
