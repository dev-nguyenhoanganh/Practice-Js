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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = ['a', 'i', 'u', 'e', 'o'];
    let vowelStr = '';
    let consonantStr = '';

    for (const char of s) {
        if (vowels.includes(char)) {
            vowelStr += char + '\n';
        } else {
            consonantStr += char + '\n';
        }
    }

    console.log(vowelStr + consonantStr.slice(0, -1));
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}