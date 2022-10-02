function multiply(number1) {
    return function (number2){
        return number1 * number2
    }
}
console.log(multiply(10)(20))