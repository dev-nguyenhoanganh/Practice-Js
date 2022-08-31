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
 * Complete the 'decryptPassword' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function decryptPassword(s) {
  let result = '';
  let number = [];
  for(let i = 0; i < s.length; i++) {
    if (s[i].match(/[1-9]/g)) {
      number.push(s[i]);
    } else if (s[i] == '0') {
      result += number.pop();
    } else {
      if (s[i].match(/[A-Z]/g) && (i + 2 < s.length - 1) && s[i + 1].match(/[a-z]/g) && (s[i + 2] == '*')) {
        result += s[i + 1] + s[i];
        i += 2;
      } else {
        result += s[i];
      }
    }
  }

  return result;
}

function main() {
    const s = readLine();

    const result = decryptPassword(s);

    console.log(result);
}
