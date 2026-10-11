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
        numbers.prompt("Enter a number:", 0); // prompts the user to enter a number and adds it to the numbers array
        if (numbers === null || numbers === "" || !isFinite(numbers)) break; // breaks the loop if the user cancels, enters an empty string, or enters a non-numeric value
        numbers.push(+numbers); // converts the input to a number and adds it to the numbers array
        sum += numbers; // adds the input to the sum variable
    }
    return sum; // returns the sum of all inputs
}