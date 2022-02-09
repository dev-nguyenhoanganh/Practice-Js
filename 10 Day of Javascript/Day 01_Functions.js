'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/**
 * 
 * @param {*} number 
 */
function factorial(number) {
    if (number > 0) {
        return number * factorial(number - 1);
    } else {
        return 1;
    }
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}