var displayDiv = document.querySelector("#display");
var arr = []

function press(num) {
    if (arr[arr.length - 1] == '='){
        clr()
        displayDiv.innerText = num
        //arr.push(displayDiv.innerText)
    }
    else if (displayDiv.innerText == 0 || isNaN(arr[arr.length - 1])) {
        displayDiv.innerText = num
        //arr.push(displayDiv.innerText)
    }
    else if (!isNaN(arr[arr.length - 1])) {
        displayDiv.innerText = arr.pop() + num
        
    }
    arr.push(displayDiv.innerText)
}

function setOP(op) {
    if (arr[arr.length - 1] == '=') {
        arr.pop()
    }
    else if (arr[arr.length - 1] == op) {
        arr.pop()
    }
    if (arr.includes('=') || arr.includes(op)) {
        console.log(arr)
        arr = arr.filter(c => c != '=')
        console.log(arr)
        console.log('here')
        calculate()
    }


    arr.push(op)

}

function calculate() {
    if (arr[arr.length - 1] == '=' || arr.length <= 1) {
        clr()
        return displayDiv.innerText = "ERROR"
    }
    else if (arr.includes('=')) {
        console.log(arr)
        arr = arr.filter(c => c != '=')
        console.log(arr)
    }


    var num2 = arr.pop()
    var op = arr.pop()
    var num1 = arr.pop()
    console.log({ num2, op, num1, arr })
    let result = eval(num1 + op + num2)
    arr.push(result)
    arr.push('=')
    displayDiv.innerText = result
}

function clr() {
    displayDiv.innerText = 0
    arr = []
}