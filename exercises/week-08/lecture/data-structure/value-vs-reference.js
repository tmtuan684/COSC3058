/**
 * Passing by value or references
 */
let x = 
let y = new Int(36);

function swap(a, b) {
    console.log("Inside function swap...");
    console.log(`\nBefore swapped, a = ${a} and b = ${b}`);    
    a = a + b;
    b = a - b; // b == a
    a = a - b;
    console.log(`\nAfter swapped, a = ${a} and b = ${b}`);
}


console.log(`Outside swap function, Before swapped, x = ${x} and y = ${y}`);
swap(x, y);
console.log(`Outside swap function, After swapped, x = ${x} and y = ${y}`);
