function processData(input) {
    //Enter your code here
    let mean = 0;
    let median = 0;
    let count;
    let countMax = 0;
    const arr = input.split('\n')[1].split(' ')
                     .map(num => parseInt(num))
                     .sort((a, b) => a - b);

    let temp = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        mean += arr[i];
        if (arr[i] == temp) {
            if(++count > countMax) {
                countMax = count;
                max = arr[i];
            } 
        } else {
            count = 0;
            temp = arr[i];
        }
    }

    let startIndex = Math.floor(arr.length / 2);
    median = (arr[startIndex] + arr[startIndex - 1]) / 2;

    console.log(mean / arr.length);
    console.log(median);
    console.log(max);
    // if (countMax == 1) {
    //     console.log(arr[0]);
    // } else {
    //     console.log(max);
    // }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
