//program to print numbers from 1 to 100 that are divisible by 3 and 5 and replace them with "FizzBuzz"
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        continue;
    }
    if (i % 3 == 0) {
        console.log("Fizz");
        continue;
    }
    if (i % 5 == 0) {
        console.log("Buzz");
        continue;
    }
    console.log(i);
}