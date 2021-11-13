function findPhoneNumber(number){
    var errorMessage = "Invalid input"
    if(!Array.isArray(number) || number.length != 10)
        return errorMessage;
    for(var digit of number){
        if(!Number.isInteger(digit) || digit < 0 || digit > 9)
            return errorMessage;
    }
    var digits = number.join('')
    return "+7 " + "(" + digits.slice(0,3) + ") " + digits.slice(3,6) + "-" + digits.slice(6,8) + "-" + digits.slice(8,10);

}

console.log(findPhoneNumber([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]))
console.log(findPhoneNumber([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]))
console.log(findPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]))
console.log(findPhoneNumber([]))
console.log(findPhoneNumber("aw93fha="))