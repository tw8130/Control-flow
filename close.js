//program to find a value from two numbers that is closer to 100
let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")

let a = Number(num1);
let b = Number(num2);

let x = Math.abs(a - 100);
let y = Math.abs(b - 100);

if (x > y) {
    alert(b + " is closer to 100 than " + a);
} else if (y > x) {
    alert(a + " is closer to 100 than " + b);
} else if (x == y) {
    alert(a + "and" + b + "have the same difference to 100")
} else {
    alert("invalid input")
}