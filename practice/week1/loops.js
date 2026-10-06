// while loop - indefinite amount of iterations
console.log("While loop is starting...");
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

console.log("Another while loop");
let k = 0;
while (k++ < 5) console.log(k); // prints 1, 2, 3, 4, 5

console.log("Another while loop");
let m = 0;
while (++m < 5) console.log(m); // prints 1, 2, 3, 4

console.log("For loop is starting...");

// for loop - definite amount of iterations
for (let j = 0; j < 10; j++) {
    if (j % 4 === 0) continue; // skip this iteration when j is divisible by 4 (0, 4, 8)
    console.log(j);
}
for (let j = 0; j < 10; j++) {
    if (j % 4 === 0) break; // break out of the loop when j is divisible by 4 (0, 4, 8)
    console.log(j);
}

console.log("Another for loop");
for (let j = 2; j <= 10; j += 2) console.log(j); // prints 2, 4, 6, 8, 10
console.log("The loop has finished");

let userInput = prompt("Enter a number greater than 100");

while (userInput <= 100) {
    userInput = prompt("Enter a number greater than 100");
    if (userInput === null || userInput === "") {
        break;
    }
}
console.log("You entered a number greater than 100!");

let userInput2 = prompt("Enter a number to generate prime numbers up to that number");
for (let j = 2; j <= userInput2; j++) {
    let isPrime = true;
    for (let k = 2; k < j; k++) {
        if (j % k === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(j);
    }
}