var displayDiv = document.querySelector("#display");
var arr = []

function press(num) {
    if (displayDiv.innerText==0 || isNaN(arr[arr.length - 1])){
        displayDiv.innerText=num
        arr.push(displayDiv.innerText)
    }
    else if (!isNaN(arr[arr.length - 1])) {
        displayDiv.innerText = arr.pop() + num
        arr.push(displayDiv.innerText)
    }
    else if (arr[arr.length-1]=='='){
        clr()
    }
}

function setOP(op) {
    if (arr[arr.length-1]=='='){
        arr.pop()
    }
    arr.push(op)

}

function calculate() {
    if (arr[arr.length-1]=='=' || arr.length<=1){
        clr()
        return displayDiv.innerText="ERROR"
    }
    
    var num2 = arr.pop()
    var op = arr.pop()
    var num1 = arr.pop()

    let result = eval(num1 + op + num2)
    arr.push(result)
    arr.push('=')
    displayDiv.innerText = result
}

function clr() {
    displayDiv.innerText = 0
    arr = []
}