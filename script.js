const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operator')
const cleared = document.querySelector('.cleared')

let firstNum = "";
let secondNum = "";
let operator = "+";

numbers.forEach(currentBtn => {
    currentBtn.addEventListener('click', function(e){
        if (operator === "") {
            document.querySelector('.header').textContent += e.target.innerText;
            firstNum += e.target.innerText;
            console.log(firstNum)
        } else {
            document.querySelector('.header').textContent += e.target.innerText;
            secondNum += e.target.innerText;
            console.log(secondNum)
        }
    })
})

function operate(firstNum, secondNum, operator) {

}


operators.forEach(op => {
    op.addEventListener('.click', e => {
        if (e.target.innerText !== "=") {
            operator = e.target.innerText;

            console.log(firstNum)
            console.log(operator)
        } else {
            switch(operator) {
                case "+":
                    document.querySelector('.header').textContent = parseInt(firstNum) + parseInt(secondNum);
                    break;
                
                case "-":
                    document.querySelector('.header').textContent = parseInt(firstNum) - parseInt(secondNum);
                    break;
                
                case "*":
                    document.querySelector('.header').textContent = parseInt(firstNum) * parseInt(secondNum);
                    break;

                case "/":
                    document.querySelector('.header').textContent = parseInt(firstNum) / parseInt(secondNum);
                    break;
                
                default:
                    break;
            }
        }
    })
})


cleared.addEventListener('click', function(){
    firstNum = "";
    secondNum = "";
    operator = "";
    document.querySelector('.header').textContent = "";
})

// equals.addEventListener('click', function(){
//     total = operate(firstNum, secondNum, operator)
//     document.querySelector('.header').textContent = total;
// })