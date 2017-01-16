//   @todo

"use strict";

class main {
    constructor() {
        main.setNumberOfDice();
        main.rollDice();

    }

    static setNumberOfDice() {
        let numDice;
        const MIN_DICE = 1, MAX_DICE = 10;

        while ((typeof numDice === `undefined` || isNaN(numDice)) || (numDice < MIN_DICE) || (numDice > MAX_DICE)) {
            numDice = document.getElementById('numberOfDice');
        }

    }

    static rollDice() {
        let numDice = document.getElementsByID('numberDice').value;
        if (document.getElementById('a-option').checked) {
            while (indivResults.length < numDice) {
                indivResults[indivResults.length] = Math.floor(1 + Math.random() * 4);
            }
        } else if (document.getElementById('b-option').checked) {
            while (indivResults.length < numDice) {
                indivResults[indivResults.length] = Math.floor(1 + Math.random() * 6);
            }
        } else if (document.getElementById('c-option').checked) {
            while (indivResults.length < numDice) {
                indivResults[indivResults.length] = Math.floor(1 + Math.random() * 8);
            }
        } else if (document.getElementById('d-option').checked) {
            while (indivResults.length < numDice) {
                indivResults[indivResults.length] = Math.floor(1 + Math.random() * 12);
            }
        } else if (document.getElementById('e-option').checked) {
            while (indivResults.length < numDice) {
                indivResults[indivResults.length] = Math.floor(1 + Math.random() * 20);
            }
        }
    }
}

window.addEventListener('load', () => {
    new main();
});
