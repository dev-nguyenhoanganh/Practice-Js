'use strict';

const fs = require('fs');
var path = require("path");


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\r\n');
    main();
});

function readLine() {
    return inputString;
}

/*
 * Complete the 'quartiles' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quartiles(arr) {
    // Write your code here
    let nums = arr.sort((a, b) => a - b);
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

    return [medianL[0], medianX[0], medianU[0]];
}

function findMedian(arr) {
    let medianIndex = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return [(arr[medianIndex - 1] + arr[medianIndex]) / 2, medianIndex - 1, medianIndex];
    } else {
        return [arr[medianIndex], medianIndex];
    }
}

/**
 * [3, 5, 7, 8, 12, 13, 14, 15, 18, 21]
 * medianL = 6
 * medianX = 12.5
 * medianU = 16.5
 */

function separateString(data) {
    let file = '';
    let id = '';
    data.forEach(name => {
        if (name != '') {
            let res = name.substring(8).split('_');
            id = id.concat(res[0]).concat('\n');
            file = file.concat(res[1]).concat('\n');
        }
    });
    return id.concat('\n\n').concat(file);
}

function main() {
    const ws = fs.createWriteStream('./output.md');

    // const n = parseInt(readLine().trim(), 10);

    // const data = readLine().replace(/\s+$/g, '').split(' ').map(dataTemp => parseInt(dataTemp, 10));

    // const res = quartiles(data);
    const input = readLine();
    ws.write(separateString(input));
    ws.end();

    // ws.write(res.join('\n') + '\n');

    // ws.end();
}
