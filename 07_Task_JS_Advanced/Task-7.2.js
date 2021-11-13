function getTable(m,n,message){
    var errorMessage = "Invalid input";
    if(!Number.isInteger(n) || !Number.isInteger(m))
        return errorMessage;
    if(m <= 0 || n <= 0)
        return errorMessage
    if(m*n < message.length)
        return errorMessage;
    var result = ""
    var lettersPrintedCnt = 0
    for (var row = 0; row < m; row++) {
        var letters = ""
        if (lettersPrintedCnt <= message.length - 1)
            letters = message.substring(lettersPrintedCnt, lettersPrintedCnt + n);
        else
            letters = " ".repeat(n)
        lettersPrintedCnt+=n
        result += getRowWithoutLetter(n) + "\n" + getRowWithLetters(letters) + "\n";
    }
    result = result + getRowWithoutLetter(n);
    return result;
}

function getRowWithoutLetter(sellCnt){
    var result = "+"
    for (var i = 0; i < sellCnt; i++) {
        result = result + "-".repeat(3) +"+"
    }
    return result
}

function getRowWithLetters(letters){
    var result = "|"
    for (var i = 0; i < letters.length; i++) {

        result = result + " " + letters[i] + " |"
    }
    return result;
}

console.log(getTable(4,4,"Hello World!"))
console.log(getTable(4,3,"Nice pattern"))
console.log(getTable(3,4,"Nice pattern"))