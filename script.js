const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operator')
const cleared = document.querySelector('.cleared')

let previousNum = "";
let currentNum = "";
let operator = "";
let answer = "";

numbers.forEach(currentBtn => {
    currentBtn.addEventListener('click', function(e){
        if (operator === "") {
            document.querySelector('.header').textContent += e.target.innerText;
            previousNum += e.target.innerText;
            return previousNum
        } else {
            document.querySelector('.header').textContent += e.target.innerText;
            currentNum += e.target.innerText;
            return currentNum
        }
    })
})

operators.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.innerText !== "=") {
            operator = e.target.innerText;
            document.querySelector('.header').textContent = "";
            return operator
        } else if (e.target.innerText == "=" ) {
            switch(operator) {
                case "+":
                    answer = parseInt(previousNum) + parseInt(currentNum);
                    document.querySelector('.header').textContent = answer;
                    break;
            
                case "-":
                    answer = parseInt(previousNum) - parseInt(currentNum);
                    document.querySelector('.header').textContent = answer;                    break;
                
                case "*":
                    answer = parseInt(previousNum) * parseInt(currentNum);
                    document.querySelector('.header').textContent = answer;                    break;

                case "/":
                    answer = parseInt(previousNum) / parseInt(currentNum);
                    document.querySelector('.header').textContent = answer;                    break;
                
                default:
                    return;
            }
            previousNum = answer;
            answer = "";
            currentNum = "";
            operator = "";
        }
    })
})


cleared.addEventListener('click', function(){
    previousNum = "";
    currentNum = "";
    operator = "";
    document.querySelector('.header').textContent = "";
})

// equals.addEventListener('click', function(){
//     total = operate(previousNum, currentNum, operator)
//     document.querySelector('.header').textContent = total;
// })