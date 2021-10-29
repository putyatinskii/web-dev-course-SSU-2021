function vowelsCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
        .split('')
        .filter(letter => vowels.includes(letter.toLowerCase())).length;
}

console.log(vowelsCount('abracadabra'));
console.log(vowelsCount('ABRACADABRA'));
console.log(vowelsCount('o a kak ushakov lil vo kashu kakao'));
console.log(vowelsCount('my pyx'));