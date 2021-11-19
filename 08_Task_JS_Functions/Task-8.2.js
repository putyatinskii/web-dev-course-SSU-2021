function game(n, step) {
    const digits = Array.from({length: n}, (_, i) => i + 1)
    let counterCircle = 0;
    let playerCounter = 0;
    while (digits.length != 1) {
        while (playerCounter < digits.length) {
            if (counterCircle != step - 1) {
                playerCounter++
                counterCircle++
            } else {
                let elementToDelete = digits[playerCounter];
                digits.splice(playerCounter, 1);
                counterCircle = 0;
                if (digits.length == 1) {
                    break
                }
            }
        }
        playerCounter = 0;
    }
    return digits[0];
}


console.log(game(7, 3));
console.log(game(11, 19));
console.log(game(1, 300));
console.log(game(14, 2));
console.log(game(100, 1));