/**
 * Javascrip objects
 */
let book = {};
book = {
    title: 'Idea of a university',
    published: 1850,
    author: 'John Henry Newman',
    keywords: ['university', 'intellect', 'mind', 'knowledge', 'learning', 'student']
}

console.log(`Book title: ${book.title}`);
console.log(`Year of published: ${book.published}`);
console.log(`Author: ${book.author}`);
console.log(`Keywords: ${book.keywords}`);

class Movie {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }
    get about() {
        console.log(`The movie ${this.title} was produced in ${this.year}`);
    }
}

let movie1 = new Movie('Exodus', 1956);
movie1.title = 'Moses';
console.log(`Movie ${movie1.title}, ${movie1.year}`);
movie1.about;
