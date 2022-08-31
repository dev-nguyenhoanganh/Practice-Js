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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  return grades.map(num => {
    if (num < 37) {
      return num;
    } 

    let target = (Math.trunc(num / 5) + 1) * 5;
    if ((target - num) < 3) {
      return target;
    }
    return num;
  });
}

function main() {
    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];
    for (let i = 0; i < gradesCount; i++) {
      const gradesItem = parseInt(readLine().trim(), 10);
      grades.push(gradesItem);
    }
    const result = gradingStudents(grades);
    console.log(result.join('\n') + '\n');
}
