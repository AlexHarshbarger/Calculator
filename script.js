const btns = document.querySelectorAll('.btn')
const plus = document.querySelector('.plus');
const sub = document.querySelector('.sub')
const multi = document.querySelector('.multi')
const division = document.querySelector('.division')
const equals = document.querySelector('.equals')
const cleared = document.querySelector('.cleared')

let firstNum = "";
let secondNum = "";
let operator = plus;
let total = "";

btns.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(e){
        document.querySelector('.header').textContent += currentBtn.textContent;
        firstNum = document.querySelector('.header').textContent
    })
})

plus.addEventListener('click', function(){

})

function operate(firstNum, secondNum, operator) {
    if (operator == plus) {
        return parseInt(firstNum) + parseInt(secondNum);
    } else if (operator == sub) {
        return parseInt(firstNum) + parseInt(secondNum);
    } else if (operator == multi) {
        return parseInt(firstNum) + parseInt(secondNum);
    } else if (operator == division) {
        return parseInt(firstNum) + parseInt(secondNum);
    }
}

cleared.addEventListener('click', function(){
    document.querySelector('.header').textContent = "";
})

equals.addEventListener('click', function(){
    total = operate(firstNum, secondNum, operator)
    document.querySelector('.header').textContent = total;
})