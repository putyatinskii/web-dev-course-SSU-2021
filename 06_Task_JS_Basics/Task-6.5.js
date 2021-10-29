function isogram(str) {
    return new Set(str.toLowerCase()).size === str.length
}

console.log(isogram('Dermatoglyphics'));
console.log(isogram('aba'));
console.log(isogram('moOse'));
console.log(isogram(''));