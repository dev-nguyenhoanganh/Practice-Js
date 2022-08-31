'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    let counter = 0;
    if (s.length == m) {
        counter = count(s, 0, d, m);
    } else {
        if (m == 1) {
            for (let i = 0; i < s.length; i++) {
                if (s[i] == d) {
                    counter++;
                }
            }
        } else {
            for (let i = 0; i <= s.length - m; i++) {
                counter += count(s, i, d, m);
            }
        }
    }
    return counter
}

function count(array, index, day, month) {
    let sum = 0;
    for (let j = 0; j < month; j++) {
        sum += array[index + j];
        if (sum > day) {
            sum = 0;
            break;
        }
    }
    return (sum == day) ? 1 : 0;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);

    console.log(result);
}
