# Day 1: Quartiles

## Task

The interquartile range of an array is the difference between its first $Q_{1}$ and third $Q_{3}$ quartiles (i.e., $Q_{3} - Q_{1}$).

Given an array $values$, of $n$ integers and an array $freqs$ , representing the respective frequencies of $values$'s elements, construct a data set ${S}$ , where each $value[i]$ occurs at frequency $freqs[i]$. Then calculate and print $S$'s interquartile range, rounded to a scale of $1$ decimal place (i.e., $12.3$ format).

**Tip**: Be careful to not use integer division when averaging the middle two elements for a data set with an even number of elements, and be sure to not include the median in your upper and lower data sets.

**Example**

```
values = [1, 2, 3]
freqs = [3, 2, 1]
```

Apply the frequencies to the values to get the expanded array $S = [1, 1, 1, 2, 2, 3]$. Here $left = [1, 1, 1], right = [2, 2, 3]$. The median of the left half $Q_{1} = 1.0$, the middle element. For the right half $Q_{3} = 2.0$ . Print the difference to one decimal place: $Q_{3} - Q_{1} = 2.0 - 1.0 = 1$, so print $1.0$.

**Function Description**

Complete the interQuartile function in the editor below.

interQuartile has the following parameters:
- int $values[n]$: an array of integers
- int $freqs[n]$: $values[i]$ occurs $freqs[i]$ times in the array to analyze

**Prints**

- float: the interquartile range to 1 place after the decimal

**Input Format**

The first line contains an integer $n$, the number of elements in arrays $values$ and $freqs$.

The second line contains $n$ space-separated integers describing the elements of array $values$.

The third line contains $n$ space-separated integers describing the elements of array $freqs$.

**Constraints**

- $5 \le n \le 50$
- $0 < values[i] \le 100$
- $0 < \sum_{i = 0}^{n - 1} freqs[i] \le 10^3$
- The number of elements in $S$ is equal to $\sum freqs$

**Output Format**

Print the interquartile range for the expanded data set on a new line. Round the answer to a scale of $1$ decimal place (i.e., $12.3$ format).

**Sample Input**
```
STDIN              Function
-----              --------
6                  arrays size n = 6
6 12 8 10 20 16    values = [6, 12, 8, 10, 20, 16]
5 4 3 2 1 5        freqs = [5, 4, 3, 2, 1, 5]
```

**Sample Output**

```
9.0
```

**Explanation**

The given data is:

| Element | Frequency |
| ------- | --------- |
|    6    |     5     |
|   12    |     4     |
|    8    |     3     |
|   10    |     2     |
|   20    |     1     |
|   16    |     5     |

First, we create data set $S$ containing the data from set $values$ at the respective frequencies specified by $freqs$:

```math
S = \{6, 6, 6, 6, 6, 8, 8, 8, 10, 10, 12, 12, 12, 12, 16, 16, 16, 16, 16, 20\}
```

As there are an even number of data points in the original ordered data set, we will split this data set exactly in half:

```
Lower half (L): 6, 6, 6, 6, 6, 8, 8, 8, 10, 10
Upper half (U): 12, 12, 12, 12, 16, 16, 16, 16, 16, 20
```

Next, we find $Q_{1}$. There are  elements in $lower$ half, so $Q_{1}$ is the average of the middle two elements: $6$ and $8$. Thus, $Q_{1} = \frac{6 + 8}{2} = 7.0$.

Next, we find $Q_{3}$.There are $10$ elements in $upper$ half, so $Q_{3}$ is the average of the middle two elements: $16$ and $16$. Thus, $Q_{3} = \frac{16 + 16}{2} = 16.0$.

From this, we calculate the interquartile range as $Q_{3} - Q_{1} = 16.0 - 7.0 = 9.0$ and print $9.0$ as our answer.