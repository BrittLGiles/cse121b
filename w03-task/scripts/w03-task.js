/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}
function subtractNumbers() {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => {
    return number1 * number2;
}
let multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById('factor1').value);
    let factor2 = parseFloat(document.getElementById('factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => {
    return number1 / number2;
}
let divideNumbers = () => {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
};
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let getTotalDue = () => {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let isMember = document.getElementById('member').checked;
     
    let total;
     
    if (isMember) {
       total = subtotal * 0.85;
    } else {
       total = subtotal;
    }
     
    document.getElementById('total').innerHTML = `$${total.toFixed(2)}`;
   }
   document.getElementById('getTotal').addEventListener('click', getTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(num => num % 2 === 1);
/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(num => num % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce(sumFunction);
function sumFunction(total, num){
    return total + num;
}
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(num => num * 2);