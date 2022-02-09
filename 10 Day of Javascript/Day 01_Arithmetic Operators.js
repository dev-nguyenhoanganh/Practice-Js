'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    input += inputStdin;
});

process.stdin.on('end', _ => {
    input = input.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return input[currentLine++];
}

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    return length * width;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    return (length + width) * 2;
}

/**
 * main process
 */
function main() {
    const length = +(readLine());
    const width = +(readLine());
    console.log('Area of your rectangle: ', getArea(length, width));
    console.log('Perimeter of your rectangle', getPerimeter(length, width));
}