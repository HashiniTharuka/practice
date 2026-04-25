// tharu.js
// Simple JavaScript practice file

// 1. Print message
console.log("Hello Tharu 👋 Welcome to your JS file!");

// 2. Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(5, 3);
console.log("Sum:", sum);

// 3. Function to check even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even number";
    } else {
        return "Odd number";
    }
}

console.log("7 is:", checkEvenOdd(7));

// 4. Simple array example
let fruits = ["Apple", "Mango", "Banana"];
fruits.push("Orange");

console.log("Fruit list:");
fruits.forEach(fruit => console.log(fruit));

// 5. Simple object example
let student = {
    name: "Tharushi",
    age: 24,
    course: "Computer Engineering"
};

console.log("Student Details:");
console.log(student);