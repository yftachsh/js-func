const memoize = require('../functions/memoize');

const testArgument = 'test';

const testMethod = memoize((value) => {
    // Artificial delay - method should only be called once for the same argument
    for (let i = 0; i < 1000000000; i++);

    return `nice ${value}`;
})

console.time('result1');
let result1 = testMethod(testArgument);
console.log(result1);
console.timeEnd('result1');

console.log('\n--------------------------\n');

console.time('result2');
let result2 = testMethod(testArgument);
console.log(result2);
console.timeEnd('result2');
