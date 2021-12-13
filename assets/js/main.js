(function standardCalc() {
    let lastNum = 0 , newNum = 0, lastOperator = '', firstOpFlag = true;
    const OPERATORS = ['+', '-', '*', '/', '='];
    const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    document.querySelectorAll('#standard-calc button').forEach(buttons => {
        buttons.addEventListener("click", function(event){
            if(NUMBERS.includes(Number(event.target.textContent))) {
                newNum = document.getElementsByClassName("now-res")[0].innerHTML += event.target.textContent;
            } else if(OPERATORS.includes(event.target.textContent)) {
                console.log("op"); 
            }
        })
    });
})();

function displayNum(nowResult, endResult, lastOp) {
    document.getElementsByClassName("now-res")[0].innerHTML = nowResult;
    document.getElementsByClassName("end-res")[0].innerHTML = endResult;
    lastOperator = lastOp;
}