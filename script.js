const buttons=document.querySelectorAll('button');
const displayCalculation=document.getElementById('displayContent');

let currentOperand='';
let previousOperand='';
let operator=null;


// Mathematical operations

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
    return (b==0? 'Error': a/b);
}

// Function to calculate the result based on the operator

function operate(){
    let prev=parseFloat(previousOperand);
    let curr=parseFloat(currentOperand);

    if(isNaN(prev) || isNaN(curr)) return ''; // Return if inputs are invalid

    switch(operator)
    {
        case '+':
            return add(prev, curr);
        case '-':
            return subtract(prev, curr);
        case '*':
            return multiply(prev, curr);
        case '/':
            return divide(prev, curr);
        default:
            return '';
    }

}

// Function to handle button clicks
function populateDisplay(clickedItem){

    // If the button is a number or decimal, append it to the current operand
    if(!isNaN(clickedItem) || clickedItem === '.'){
        if(clickedItem === '.' && currentOperand.includes('.')) return;
        currentOperand+=clickedItem;
    }
        // If the button is an operator
    else if(['+', '-', '*', '/'].includes(clickedItem)){
        if(previousOperand === '' && currentOperand ==='') return; // Ignore if no numbers
        // Calculate the result if there's already a previous operand
        if(previousOperand !== '' && currentOperand !==''){
            previousOperand=operate();
            currentOperand='';
        }
        // Move the current operand to the previous operand
        else{
            previousOperand=currentOperand;
            currentOperand='';
        }
        operator=clickedItem;// Store the operator
    }
    else if (clickedItem === '='){
        if(operator && previousOperand !== '' && currentOperand !==''){
            currentOperand=operate();
            previousOperand='';
            operator=null;
        }
    }
     // If the button is "AC", reset everything
    else if(clickedItem === 'AC'){
        currentOperand='';
        previousOperand='';
        operate=null;
    }
    else if(clickedItem === '<='){
        // If the button is "<=", remove the last character from the current operand
        currentOperand=currentOperand.slice(0, -1);
    }
    else if(clickedItem === '%'){
        if( currentOperand !=='')
            currentOperand=(parseFloat(currentOperand/100.0)).toString();
    }

    // Update the display
    displayCalculation.textContent=currentOperand || previousOperand || '0';
}

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        populateDisplay(button.textContent);// Handle the button click
        console.log('button pressed ');
      });
});

// Initialize the display with "0"
displayCalculation.textContent='0';
