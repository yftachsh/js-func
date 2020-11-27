const countBy = require('../arrays/countBy');

const propertyName = 'a';
const testArray = [
    { a: 'a' },
    { a: 'a' },
    { b: 'b' },
    { a: 'a' },
    { d: 'd' },
]

console.log(countBy(testArray, propertyName));
