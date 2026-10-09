let person = {
    name: "Andrae",
    age: 26,
    "likes Tears of The Kingdom": true // multi-word property names must be quoted
}

let funFact = prompt("What is a fun fact about the person?", "Andrae likes Tears of The Kingdom"); // prompts the user for a fun fact about the person, with a default value

console.log(person.name); // prints "Andrae"
console.log(person.age); // prints 26
console.log(person["likes Tears of The Kingdom"]); // prints true

console.log(person[funFact]); // prints the user's input

console.log("name" in person); // prints true, checks if the property "name" exists in the person object
console.log("likes Genshin Impact" in person); // prints false, checks if the property "likes Genshin Impact" exists in the person object

for (let key in person) {
    console.log(key); // prints the keys of the person object: "name", "age", "likes Tears of The Kingdom"
    console.log(person[key]); // prints the values of the person object: "Andrae", 26, true
}   

let obj = {};
function isEmpty(obj) {
    for (let key in obj) {
        return false; // if the object has any properties, return false
    }   
    return true; // if the object has no properties, return true
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = sumofSalaries(salaries); // calculates the sum of all salaries in the salaries object

function sumofSalaries(salaries) { 
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}

console.log(sum); // prints 390, the sum of all salaries in the salaries object

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] === "number") {
            menu[key] *= 2; // multiplies the value of the property by 2 if it's a number
        }
    }
}

let user = {
    name: "John",
    age: 30,
    size: {
        width: 100,
        height: 200
    }
};

let clone = Object.assign({}, user); // creates a shallow copy of the user object
let clone2 = StructuredClone(user); // creates a deep copy of the user object

console.log( clone2 === user ); // prints false, clone2 is a different object than user

user.size.width = 300; // modifies the width property of the size object in the user object
console.log(clone.size.width); // prints 100, the width property of the size object in the clone object


let calculator = {
    read() {
        this.a = +prompt("Enter the first number:", 0); // prompts the user for the first number and stores it in the a property
        this.b = +prompt("Enter the second number:", 0); // prompts the user for the second number and stores it in the b property
    },   
    sum() {
        return this.a + this.b; // returns the sum of the a and b properties
    },
    mul() {
        return this.a * this.b; // returns the product of the a and b properties
    }   
}

calculator.read(); // prompts the user for two numbers
console.log( "Sum = " + calculator.sum() );
console.log( "Result = " + calculator.mul() );

let ladder = {
    step: 0,
    up() {  
        this.step++; // increments the step property by 1
        return this; // returns the ladder object to allow method chaining
    },
    down() {
        this.step--; // decrements the step property by 1
        return this; // returns the ladder object to allow method chaining
    },   
    showStep: function() { // shows the current step
        console.log( this.step );
        return this; // returns the ladder object to allow method chaining
    }
}

ladder.up().up().down().showStep(); // shows 1

