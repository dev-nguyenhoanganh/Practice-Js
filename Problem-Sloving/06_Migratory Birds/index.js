'use strict';

const fs = require('fs');
const { type } = require('os');

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let sequence = new Object();
    let max = 0;
    let result = 0;
    arr.forEach(type => {
        if (sequence[type]) {
            sequence[type]++;
        } else {
            sequence[type] = 1;
        }
        if (max == sequence[type] && result > type) {
            result = type
        } else if (max < sequence[type]) {
            max = sequence[type];
            result = type
        }
    });
    return result;
}

function main() {
    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

   console.log(result);
}
