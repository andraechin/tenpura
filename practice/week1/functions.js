function showCount(count) {
  console.log(count ?? "No count provided"); // prints the value of count if it's not null or undefined, otherwise prints "No count provided"
}

showCount(0); // prints 0
showCount(null); // prints "No count provided"
showCount(); // prints "No count provided"

function checkAge(age) {
    return (age > 18) ? true : confirm("Do you have permission from your parents?"); // if age is greater than 18,
    //  returns true, otherwise asks for confirmation
}

function checkAge2(age) {
    return (age > 18) || confirm("Do you have permission from your parents?"); // if age is greater than 18, returns true, otherwise asks for confirmation
}

function min(a, b) {
    return (a < b) ? a : b; // returns the smaller of the two numbers a and b
}

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x; // multiplies result by x, n times
    }
    return result;
}

// Function declaration
function sum(a, b) {
    return a + b; // returns the sum of a and b
}

// Function expression
let sum2 = function(a, b) {
    return a + b; // returns the sum of a and b
};  

// Function declarations are hoisted, meaning they can be called before they are defined in the code.
// Function expressions are not hoisted, meaning they cannot be called before they are defined in the code.