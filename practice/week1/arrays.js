let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.push("fig"); // adds "fig" to the end of the array
fruits.unshift("grape"); // adds "grape" to the beginning of the array
// Accessing elements in an array
console.log(fruits[0]); // prints "grape"
console.log(fruits[2]); // prints "banana"
console.log(fruits[fruits.length - 1]); // prints "fig", accesses the last element in the array

for (let fruit of fruits) {
    console.log(fruit); // prints each fruit in the array
}
 
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics"; // replaces the middle element with "Classics" Math.floor is used to round down the index to the nearest integer
console.log(styles.shift()); // removes the first element and prints it
styles.unshift("Rap", "Reggae");

function sumInput() {
    let numbers = [];   
    let sum = 0;
    while (true) {
        let number = prompt("Enter a number:", 0); // prompts the user to enter a number and adds it to the numbers array
        if (number === null || number === "" || !isFinite(number)) break; // breaks the loop if the user cancels, enters an empty string, or enters a non-numeric value
        numbers.push(+number); // converts the input to a number and adds it to the numbers array
        sum += +number; // adds the input to the sum variable
    }
    return sum; // returns the sum of all inputs
}

function camelize(str) {
    return str
        .split('-') // splits the string into an array of substrings using '-' as the delimiter
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)) // capitalizes the first letter of each word except the first one
        .join(''); // joins the array back into a string without any delimiters
}

let arr = ["E", "G", "G", "T", "A", "R", "T"];
let sliced = arr.slice(-4); // returns a new array containing the last 4 elements of arr
console.log(sliced); // prints ["T", "A", "R", "T"]