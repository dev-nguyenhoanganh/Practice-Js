# Day 0: Weighted Mean

## Task

Given an array, `X`, of `N` integers and an array `W`, representing the respective weights of `X`'s elements, calculate and print the weighted mean of `X`'s elements. Your answer should be rounded to a scale of `1` decimal place (i.e., `12.3` format).

**Example**

```
X = [1, 2, 3]
W = [5, 6, 7]
```

The array of values $X[i] * W[i] = [5, 12, 21]$. Their sum of $W = 18$. The weighted of mean is $\frac{38}{18} = 2.11111...$. Print 2.1 and return.

**Function Description**

Complete the weightedMean function in the editor below.

weightedMean has the following parameters:
- int $X[N]$: An array of values
- int $W[N]$: An array of weights

**Prints**

- Float: the weighted mean to one decimal place

**Input Format**

The first line contains an integer `N`, the number of elements in arrays `X` and `W`.

The second line contains `N` space-separated integers that descdribe the elements of array `X`.

The third line contains `N` space-separated integers that descdribe the elements of array `W`.

**Constraints**

- $5 \le N \le 50$
- $0 < X[i] \le 100$, where $X[i]$ is the $i^{th}$ element of array $X$
- $0 < W[i] \le 100$, where $W[i]$ is the $i^{th}$ element of array $W$

**Output Format**

Print the weighted mean on a new line. Your answer should be rounded to a scale of `1` decimal place (i.e., `12.3` format).

**Sample Input**
```
STDIN             Function
-----             --------
5                 X[] and W[] size n = 5
10 40 30 50 20    X = [10, 40, 30, 50, 20]  
1 2 3 4 5         W = [1, 2, 3, 4, 5]
```

**Sample Output**

```
32.0
```

**Explanation**

We use the following formula to calculate the weighted mean:

$m_{w} = \frac{\sum_{i = 0}^{N - 1} (x_{i} \times w_{i})}{\sum_{i = 0}^{N - 1} w_{i}}$

$\to m_{w} = \frac{10 \times 1 + 40 \times 2 + 30 \times 3 + 50 \times 4 + 20 \times 5}{1 + 2 + 3 + 4 + 5} = \frac{480}{15} = 32.0$

And then print our result to a scale of `1` decimal place `32.0` on a new line.