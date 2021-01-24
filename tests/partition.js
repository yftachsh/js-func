const assert = require('assert');
const partition = require('../src/arrays/partition');

module.exports = () => {
    const criteria = n => n % 2;

    const testArray = [
        1,
        2,
        3,
        4,
        5,
        6,
    ]

    const expectedPartition= [
        [
            1,
            3,
            5
        ],
        [
            2,
            4,
            6
        ]
    ]

    const partitionResult = partition(testArray, criteria);
    assert.deepStrictEqual(partitionResult, expectedPartition, 'Failed to partition elements properly');
}
