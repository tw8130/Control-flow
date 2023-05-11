// function to that prompts ser to enter random number that prog guesses if matched
const compNumber = Math.floor(Math.random() * 11);
const userNumber = prompt("Guess a number between 0 and 10");

if (compNumber === userNumber) {
    alert("Good work!");
} else {
    alert("Not matched " + "computer choose " + '' + '' +
        compNumber);
}