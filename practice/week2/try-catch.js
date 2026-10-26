function swordMaster(name) {
    try {
        if (name != "Link") {
            throw new Error("Unworthy!"); // throws an error if the name is not "Link"
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
    return name === "Link" ? "You are worthy to wield the Master Sword!" : "You are not worthy to wield the Master Sword."; // returns a message based on whether the name is "Link" or not
}

console.log(swordMaster("Link")); // prints "You are worthy to wield the Master Sword!"
console.log(swordMaster("Ganon")); // prints "You are not worthy to wield the Master Sword." and logs an error message

let link = {
    name: "Link",
    age: 17,
    weapon: ["Master Sword", "Hylian Shield", "Bow"],
    isHero: true
}

linkJSON = JSON.stringify(link); // converts the link object to a JSON string
console.log(linkJSON); // prints the JSON string representation of the link object

let linkTOTK = {
    name: "Link",
    age: 25,
    weapon: ["Master Sword", "Hylian Shield", "Bow", "Paraglider"],
    isHero: true,
    waifu: "Zelda" || "Riju",
    buddies: ["Riju", "Sidon", "Mipha", "Daruk", "Revali"]
}

console.log(linkTOTK.waifu); // prints "Zelda"

function isLinkWaifu(waifu) {
    try {
        if (waifu != "Zelda" && waifu != "Riju") {
            throw new Error("Not Waifu!"); // throws an error if the waifu is not "Zelda" or "Riju"
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
    return waifu === "Zelda" || waifu === "Riju" ? "You are Link's waifu!" : "You are not Link's waifu."; // returns a message based on whether the waifu is "Zelda" or "Riju"
}

console.log(isLinkWaifu("Riju")); // prints "You are Link's waifu!"
console.log(isLinkWaifu("Sidon")); // prints "You are not Link's waifu." and logs an error message


let user = {
    name: "John Smith",
    age: 35
};

userJSON = JSON.stringify(user); // converts the user object to a JSON string
console.log(userJSON); // prints the JSON string representation

userObject = JSON.parse(userJSON); // converts the JSON string back to a JavaScript object
console.log(userObject); // prints the JavaScript object representation

let userTwo = JSON.parse(JSON.stringify(user)); // converts the user object to a JSON string and then back to a JavaScript object
console.log(userTwo); // prints the JavaScript object representation of userTwo

let room = {
    number: 23
};  

let meetup = {
    title: "Conference",
    participants: ["John", "Alice"],
    place: room // assigns the room object to the place property of meetup
};  

room.occupiedBy = meetup; // creates a circular reference by assigning the meetup object to the occupiedBy property of room
meetup.self = meetup; // creates a circular reference by assigning the meetup object to the self property of meetup

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value; // replaces circular references with undefined to avoid errors during stringification
}   ));