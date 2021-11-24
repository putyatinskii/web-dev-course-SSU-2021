function writeFormula() {
    var input = document.getElementById("getFormula").value;
    document.getElementById("writeFormula").innerHTML = getFormula(parseInt(input, 10));
}

function resetFormula() {
    document.getElementById("getFormula").value = "";
    document.getElementById("writeFormula").innerHTML = "";
}

function getFormula(n) {
    var formula = "";
	var isNegativeDegree = false;
	if(!Number.isInteger(n) || n < -200 || n > 200)
		return "Invalid input";
	if (n == 0)
	    return "1"
	else if (n < 0) {
		formula += "1/("
		isNegativeDegree = true
		n *= -1
	}
	for (var i = n; i >= 0; i--) {
		var formula =  formula + getCoefficient(BigInt(n), BigInt(n - i)).toString() + getVariables(n, i).toString() + (i == 0 ? "" : "+") + (isNegativeDegree && i == 0 ? ")" : "")
	}
	return formula
}

function getCoefficient(n, k) {
	var coefficient = factorial(n) / (factorial(k) * factorial(n - k))
	return coefficient == 1 ? "" : coefficient;
}

function factorial(n) {
    return n ? n * factorial(n - 1n) : 1n
}

function getVariables(n, i) {
    return getVariable("a", i).toString() + getVariable("b", n - i).toString()
}

function getVariable(name, degree) {
    switch(degree) {
        case 0:
            return ""
        case 1:
            return `${name}`
        default:
            return `${name}^${degree}`
    }
}