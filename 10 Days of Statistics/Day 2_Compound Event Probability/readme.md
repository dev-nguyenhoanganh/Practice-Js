# Day 2: Compound Event Probability


### Task

There are $`3`$ urns labeled $`X`$, $`Y`$, and $`Z`$.

Urn $`X`$ contains $`4`$ red balls and $`3`$ black balls.
Urn $`Y`$ contains $`5`$ red balls and $`4`$ black balls.
Urn $`Z`$ contains $`4`$ red balls and $`4`$ black balls.

One ball is drawn from each of the $`3`$ urns. What is the probability that, of the $`3`$ balls drawn, $`2`$ are red and $`1`$ is black?

### Slove

X : 4 red + 3 black = 7
Y : 5 red + 4 black = 9
Z : 4 red + 4 black = 8

```
There are 3 following case:
1, (X - red  , Y - red  , Z - black)
2, (X - red  , Y - black, Z - red  )
3, (X - black, Y - red  , Z - red  )
```
Case 1: `(X - red, Y - red, Z - black)`
```math
\sigma_{case 1} = \frac{C_{4}^{1}}{C_{7}^{1}} \times \frac{C_{5}^{1}}{C_{9}^{1}} \times \frac{C_{4}^{1}}{C_{8}^{1}} \linebreak
                = \frac{4 \times 5 \times 4}{7 \times 9 \ times 8} \linebreak
                = \frac{10}{63}
```

Case 2: `(X - red, Y - black, Z - red)`
```math
\sigma_{case 2} = \frac{C_{4}^{1}}{C_{7}^{1}} \times \frac{C_{4}^{1}}{C_{9}^{1}} \times \frac{C_{4}^{1}}{C_{8}^{1}} \linebreak
                = \frac{4 \times 4 \times 4}{7 \times 9 \ times 8} \linebreak
                = \frac{8}{63}
```

Case 3: `(X - black, Y - red, Z - red)`
```math
\sigma_{case 3} = \frac{C_{3}^{1}}{C_{7}^{1}} \times \frac{C_{5}^{1}}{C_{9}^{1}} \times \frac{C_{4}^{1}}{C_{8}^{1}} \linebreak
                = \frac{3 \times 5 \times 4}{7 \times 9 \ times 8} \linebreak
                = \frac{5}{42}
```

=> The probability of 2 red + 1 black is:

```math
\sigma = \sigma_{case 1} + \sigma_{case 2} + \sigma_{case 3} = \frac{10}{63} + \frac{8}{63} + \frac{5}{42} \linebreak
       = \frac{17}{42}
```
