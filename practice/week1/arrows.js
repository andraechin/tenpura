// arrow functions
// arrow functions are a more concise way to write functions in JavaScript. They have a shorter syntax and do not have their own 'this' context, which can be useful in certain situations.

// Example of a regular function
function add(a, b) {
  return a + b;
}

// Example of an arrow function
const addArrow = (a, b) => a + b; // returns the sum of a and b 

// Example of an arrow function with a single parameter
const square = x => x * x; // returns the square of x

// Example of an arrow function, it is a function expression however, so if ask is called before it is defined, it will throw an error.
let ask = (question, yes, no) => {
    return (confirm(question)) ? yes() : no();
};

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

// Example of a function declaration with arrow function
function ask2(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask2(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);  

let greet = (name) => `Hi, ${name}`; // returns a greeting message with the provided name
let add2 = (a, b) => a + b; // returns the sum of a and b
let isEven = (num) => num % 2 === 0; // returns true if num is even, false otherwise

console.log(greet("Andrae"), add2(2, 3), isEven(4)); // prints "Hi, Andrae", 5, true