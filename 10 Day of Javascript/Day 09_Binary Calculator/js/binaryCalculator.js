var displayVal = '';
const res = document.querySelector('#res');
const btns = document.getElementsByTagName('button');
const [ btn0, btn1, btnClr, btnEql, btnSum, btnSub, btnMul, btnDiv ] = [...btns];

btn0.addEventListener('click', (e) => addAndShowResult(e.target));
btn1.addEventListener('click', (e) => addAndShowResult(e.target));
btnSum.addEventListener('click', (e) => addAndShowResult(e.target));
btnSub.addEventListener('click', (e) => addAndShowResult(e.target));
btnMul.addEventListener('click', (e) => addAndShowResult(e.target));
btnDiv.addEventListener('click', (e) => addAndShowResult(e.target));
btnClr.addEventListener('click', (e) => showResult(''));
btnEql.addEventListener('click', (e) => {
    calculate(res.innerHTML + '');
    showResult();
});

function addAndShowResult(elemet) {
    addToStringRes(elemet.innerHTML);
    showResult();
}

function addToStringRes(string) {
    displayVal += string;
}

function showResult(string) {
    if (string != undefined) {
        displayVal = string;
    } 
    res.innerHTML = displayVal;
}

function calculate(string) {
    const express = string.match(/([0-1]+)|([+|-|*|\/])/g);
    const num1 = parseInt(express[0], 2);
    const num2 = parseInt(express[2], 2);
    switch (express[1]) {
        case '+': 
            displayVal = (num1 + num2).toString(2); break;
        case '-': 
            displayVal = (num1 - num2).toString(2); break;
        case '*': 
            displayVal = (num1 * num2).toString(2); break;
        case '/': 
            displayVal = (num1 / num2).toString(2); break;
    }
}
