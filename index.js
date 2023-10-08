const PersonClass = require('./person');
const person = require('./person');


const person1 = new PersonClass('John Doe', 30)

console.log('Just using the constant ${person}');
person1.greeting();

