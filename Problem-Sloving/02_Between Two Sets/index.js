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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    let firstNum = a[a.length - 1];
    let countNum = b[0] / firstNum;
    let totalFactor = 0;
    let factorArr = []

    if (countNum >= 2) {
        for (let i = 1; i <= countNum; i++) {
            let temp = firstNum * i;
            let isDivideEvenly = true
            for (let j = 0; j < a.length; j++) {
                if (temp % a[j] != 0) {
                    isDivideEvenly = false
                    break;
                }
            }
            if (isDivideEvenly) {
                factorArr.push(temp);
            }
        }
    }
    
    for (let i = 0; i < factorArr.length; i++) {
        let isFactor = true
        for (let j = 0; j < b.length; j++) {
            if (b[j] % factorArr[i] != 0) {
                isFactor = false;
                break;
            }
        }
        if (isFactor) {
            totalFactor++;
        }
    }
    return totalFactor;
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    console.log(total);
}
