const assert = require('assert');
const range = require('../arrays/range');

module.exports = () => {
    const start = 5;
    const end = 10;

    const expectedRange = [5, 6, 7, 8, 9, 10];

    const rangeResult = range(start, end);
    assert.deepStrictEqual(rangeResult, expectedRange, 'Failed to range numbers');
}
