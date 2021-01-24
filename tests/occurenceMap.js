const assert = require('assert');
const occurenceMap = require('../arrays/occurenceMap');

module.exports = () => {
    const testArray = [
        1,
        2,
        3,
        4,
        3,
        7
    ];

    const expectedMap = {
        '1': 1,
        '2': 1,
        '3': 2,
        '4': 1,
        '7': 1
    }

    const resultMap = occurenceMap(testArray);

    assert.deepStrictEqual(resultMap, expectedMap, 'occurenceMap method failed');
}
