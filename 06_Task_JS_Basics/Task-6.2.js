function makeBinary(str) {
    return str.split('').map(char => {
        let res = char.charCodeAt(0).toString(2);
        while (res.length < 8) {
            res = '0' + res;
        }
        return res;
    })
}

console.log(makeBinary('man'));
console.log(makeBinary('AB'));
console.log(makeBinary('wecking'));
console.log(makeBinary('Ruby'));
console.log(makeBinary('Yosemite'));