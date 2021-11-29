function printTable() {
    var length = document.getElementById("getLength").value;
    var width = document.getElementById("getWidth").value;
    var message = document.getElementById("getMessage").value;
    document.getElementById("getTable").innerHTML = getTable(parseInt(length, 10), 
    parseInt(width, 10), message);
}

function resetTable() {
    document.getElementById("getLength").value = "";
    document.getElementById("getWidth").value = "";
    document.getElementById("getMessage").value = "";
    document.getElementById("getTable").innerHTML = "";
}

function getTable(m,n,message){
    if(!Number.isInteger(n) || !Number.isInteger(m))
        return "Ширина и длина не могут быть пустыми";
    if(m <= 0 || n <= 0)
        return "Числа должы быть положительными";
    if(m*n < message.length)
        return "Введенное сообщение не уместится в таблицу размера " + n + " на " + m;
    var result = ""
    var lettersPrintedCnt = 0
    for (var row = 0; row < m; row++) {
        var letters = ""
        if (lettersPrintedCnt <= message.length - 1) {
            letters = message.substring(lettersPrintedCnt, lettersPrintedCnt + n);
            if (letters.length != n) letters = letters + " ".repeat(n-letters.length)
        }
        else
            letters = " ".repeat(n)
        lettersPrintedCnt+=n
        result += getRowWithoutLetter(n) + "<br>" + getRowWithLetters(letters) + "<br>";
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

        result = result + "&nbsp;" + letters[i] + "&nbsp;|"
    }
    return result;
}