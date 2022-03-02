'use strict';

function processData(input) {
    //Enter your code here
    // let nums = input.trim().split(' ');
    // let radix = 0;
    // nums.forEach(num => {
    //     let index = (num.indexOf('.') == -1) ? 0 : num.length - num.indexOf('.') - 1;
    //     if (radix < index) {
    //         radix = index;
    //     }
    // });
    // let [ boy, girl ] = [...nums.map( num => Math.floor(num * Math.pow(10, radix)))];
    let [ boy, girl ] = [...input.trim().split(' ').map( num => parseFloat(num))];
    let n = boy + girl;
    let p = boy / n;
    console.log(binomial(Math.floor(boy), Math.floor(n), p));
}

function factorial (num) {
    return (num == 0) ? 1 : num * factorial(num - 1);
}

function combination(n, x) {
    return factorial(n) / (factorial(x) * factorial(n - x));
}

function binomial(x, n, p) {
    console.log('x: ', x, 'n: ', n, 'p: ', p);
    return combination(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
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
