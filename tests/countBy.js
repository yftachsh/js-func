const assert = require('assert');
const countBy = require('../arrays/countBy');

module.exports = () => {
    const propertyName = 'a';
    const testArray = [
        { a: 'a' },
        { a: 'a' },
        { b: 'b' },
        { a: 'a' },
        { d: 'd' },
    ]

    const expectedCount = 3;

    const count = countBy(testArray, propertyName);

    assert.strictEqual(count, expectedCount, 'countBy method failed');
}
