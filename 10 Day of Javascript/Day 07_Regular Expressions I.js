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

function regexVar() {
    return {
        test: function(string) {
            return (new RegExp('^[a|i|u|e|o].*[a|i|u|e|o]$')).test(string) && string[0] == (string[string.length - 1]);
        }
    }
}

function main() {
    const re = regexVar();
    const s = readLine();
    console.log(re.test(s));
}