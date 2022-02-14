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
 * Complete the 'stdDev' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function stdDev(arr) {
    // Print your answers to 1 decimal place within this function
    let mean = findMean(arr);
    let stdDev = 0;

    for (let i = 0; i < arr.length; i++) {
        stdDev += Math.pow(arr[i] - mean, 2);
    }

    stdDev = Math.sqrt(stdDev / arr.length).toFixed(1);
    
    console.log(stdDev);
}

function findMean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length).toFixed(1);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const vals = readLine().replace(/\s+$/g, '').split(' ').map(valsTemp => parseInt(valsTemp, 10));

    stdDev(vals);
}
