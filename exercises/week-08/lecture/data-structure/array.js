/**
 * Examples for array
 */

// Declare array variable without initializing values
let scores = [];

scores[0] = 8;
scores[1] = 9;
scores[2] = 20;

console.log(`score[0] = ${scores[0]}`);
console.log(`score[1] = ${scores[1]}`);
console.log(`score[2] = ${scores[2]}`);

// array with initial values
let animals = ['tiger', 'lion', 'cheetah'];
console.log(`animals: ${animals}`);

// for loop to traverse an array
let products = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < products.length; i++) {
    console.log(`products[${i}]: ${products[i]}`);
}

// for of to traverse each item of array
for (item of products) {
    console.log(`\n ${item}`);
}

// for in to traverse the index of item of array
for (let x in products) {
    console.log(`\n ${products[x]}`);
}

products.forEach((item, index) => {
    console.log(`\n ${index} - ${item}`);
});