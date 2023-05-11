// function to that prompts ser to enter random number that prog guesses if matched
// const compNumber = Math.floor(Math.random() * 11);
// const userNumber = prompt("Guess a number between 0 and 10");
let numberTimes = 1;

while (true) {
    const compNumber = Math.floor(Math.random() * 11);
    const userNumber = parseInt(prompt("Guess a number between 0 and 10"));
    if (compNumber === userNumber) {
        alert(`Good work! You were able to match with the computer that choose ${compNumber} after ${numberTimes} attempts.`);
        break;
    } else if (userNumber === '') {
        alert("You did not put a number ! Try Again!")
        continue;
    } else if (isNaN(userNumber)) {
        alert("That is not a number you entered");
    } else {
        alert("Not matched " + "computer choose " + '' + '' +
            compNumber);
        numberTimes++;
    }
}