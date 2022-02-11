'use strict';

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
 * Complete the 'interQuartile' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY values
 *  2. INTEGER_ARRAY freqs
 */

function interQuartile(values, freqs) {
    // Print your answer to 1 decimal place within this function
    let set = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < freqs[i]; j++) {
            set.push(values[i]);
        }
    }

    const nums = set.sort((a, b) => a - b);

    let medianL = 0;
    let medianU = 0;
    const medianX = findMedian(nums);
    if (medianX.length === 3) {
        medianL = findMedian(nums.slice(0, medianX[1] + 1)); 
        medianU = findMedian(nums.slice(medianX[2]))
    } else {
        medianL = findMedian(nums.slice(0, medianX[1]));
        medianU = findMedian(nums.slice(medianX[1] + 1))
    }

    console.log((medianU[0] - medianL[0]).toFixed(1));
}

function findMedian(arr) {
    let medianIndex = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return [(arr[medianIndex - 1] + arr[medianIndex]) / 2, medianIndex - 1, medianIndex];
    } else {
        return [arr[medianIndex], medianIndex];
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const val = readLine().replace(/\s+$/g, '').split(' ').map(valTemp => parseInt(valTemp, 10));

    const freq = readLine().replace(/\s+$/g, '').split(' ').map(freqTemp => parseInt(freqTemp, 10));

    interQuartile(val, freq);
}
