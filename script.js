const buttons=document.querySelectorAll('button');
const displayCalculation=document.getElementById('displayContent');

let currentOperand='';
let previousOperand='';
let operator=null;




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

function operate(){
    let prev=parseFloat(previousOperand);
    let curr=parseFloat(currentOperand);

    if(isNaN(prev) || isNaN(curr)) return '';

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


function populateDisplay(clickedItem){

    if(!isNaN(clickedItem) || clickedItem === '.'){
        if(clickedItem === '.' && currentOperand.includes('.')) return;
        currentOperand+=clickedItem;
    }
    else if(['+', '-', '*', '/'].includes(clickedItem)){
        if(previousOperand === '' && currentOperand ==='') return;
        if(previousOperand !== '' && currentOperand !==''){
            previousOperand=operate().toString();
            currentOperand='';
        }
        else{
            previousOperand=currentOperand;
            currentOperand='';
        }
        operator=clickedItem;
    }
    else if (clickedItem === '='){
        if(operator && previousOperand !== '' && currentOperand !==''){
            currentOperand=operate().toString();
            previousOperand='';
            operate=null;
        }
    }
    else if(clickedItem === 'AC'){
        currentOperand='';
        previousOperand='';
        operate=null;
    }
    else if(clickedItem === '<='){
        currentOperand=currentOperand.slice(0, -1);
    }
    else if(clickedItem === '%'){
        if( currentOperand !=='')
            currentOperand=(parseFloat(currentOperand/100.0)).toString();
    }


    displayCalculation.textContent=currentOperand || previousOperand || '0';
}

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        populateDisplay(button.textContent);
        console.log('button pressed ');
      });
});


displayCalculation.textContent='0';
