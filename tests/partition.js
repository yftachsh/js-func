const partition = require('../arrays/partition');

const criteria = n => n % 2;

const testArray = [
    1,
    2,
    3,
    4,
    5,
    6,
]

console.log(partition(testArray, criteria));