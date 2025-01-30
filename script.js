
let result=0;


function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return (b? Infinity: a/b);
}

function operate(){
    let operator=window.prompt('Enter the operator : ');
    let firstNumber=parseInt(window.prompt('Enter First Number : '));
    let secondNumber=parseInt(window.prompt('Enter Second Number : '));
    switch(operator)
    {
        case '+':
            result=add(firstNumber, secondNumber);
            break;
        case '-':
            result=subtract(firstNumber, secondNumber);
            break;
        case '*':
            result=multiply(firstNumber, secondNumber);
            break;
        case '/':
            result=divide(firstNumber, secondNumber);
            break;
    }
}
operate();