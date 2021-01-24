const assert = require('assert');
const toObject = require('../arrays/toObject');

module.exports = () => {
    const testArray = [
        ['a', 'a'],
        ['b', 'b'],
        ['c', 'c'],
        ['d', 'd'],
        ['e', 'e'],
    ]

    const expectedObject = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        e: 'e'
    }

    const resultObject = toObject(testArray);
    assert.deepStrictEqual(resultObject, expectedObject);
}
