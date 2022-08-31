# Day 1: Standard Deviation

## Task

Given an array $arr$, of $n$ integers, calculate and print the standard deviation. Your answer should be in decimal form, rounded to a scale of $1$ decimal place (i.e., $12.3$ format). An error margin of $\pm 1$ will be tolerated for the standard deviation.

**Example**

$arr = [2, 5, 2, 7, 4]$

The sum of the array values is $20$ and there are $5$ elements. The mean is $4.0$.
Subtract the mean from each element, square each result, and take their sum.

$(2 - 4)^2 = 4$

$(5 - 4)^2 = 1$

$(2 - 4)^2 = 4$

$(7 - 4)^2 = 9$

$(4 - 4)^2 = 0$

Their sum is 18. Take the square root of $\frac{18}{5}$ to get $1.7$, the standard deviation.

**Function Description**

Complete the stdDev function in the editor below.

stdDev has the following parameters:
- int $arr[n]$: an array of integers

**Prints**

- float: the standard deviation to 1 place after the decimal

**Input Format**

The first line contains an integer $n$ , denoting the size of arr.
The second line contains $n$ space-separated integers that describe $arr$.

**Constraints**

- $5 \le n \le 50$
- $0 < arr[i] \le 10^5$

**Output Format**

Print the standard deviation on a new line, rounded to a scale of $1$ decimal place (i.e., $12.3$ format).

**Sample Input**
```
STDIN             Function
-----             --------
5                 arr[] size n = 5
10 40 30 50 20    arr =[10, 40, 30, 50, 20]
```

**Sample Output**

```
14.1
```

**Explanation**

First, find the mean:

$\mu = \frac{\sum_{i = 0}^{n - 1} arr[i]}{n} = 30.0$

Next, calculate the squared distance from the mean $(arr[i] - \mu)^2$, for each $arr[i]$:

1. $(arr[0] - \mu)^2 = (10 - 30)^2 = 400$
2. $(arr[1] - \mu)^2 = (40 - 30)^2 = 100$
3. $(arr[2] - \mu)^2 = (30 - 30)^2 = 0$
4. $(arr[3] - \mu)^2 = (50 - 30)^2 = 400$
5. $(arr[4] - \mu)^2 = (20 - 30)^2 = 100$

Now compute $\sum_{i = 0}^{n - 1} (arr[i] - \mu)^2 = 400 + 100 + 0 + 400 + 100 = 1000$, so:

$\sigma = \sqrt{\frac{\sum_{i = 0}^{n - 1} (arr[i] - \mu)^2}{n}} = \sqrt{\frac{1000}{5}} = \sqrt{200} = 14.1421356$
