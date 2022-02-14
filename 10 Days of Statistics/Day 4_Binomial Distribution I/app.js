'use strict';

function processData(input) {
    //Enter your code here
    let [ boy, girl ] = [...input.trim().split(' ').map((num) => parseFloat(num))];
    console.log((boy / girl).toFixed(3));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
