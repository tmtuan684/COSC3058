/**
 * DOM
 */
const h1 = document.querySelector("h1");
const h2 = document.querySelectorAll("h2");

console.log(`Heading 1: ${h1.textContent}`);
console.log(`Heading 2: ${h2.length}`);
for(let i = 0; i < h2.length; i++) {
    console.log(`${h2[i].textContent}`);
}
