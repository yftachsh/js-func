const assert = require('assert');
const unique = require('../src/misc/unique');

module.exports = () => {
    const initialArray = [
        {
            a: 'a'
        },
        {
            a: 'a'
        },
        {
            b: 'b'
        },
        {
            a: 'a'
        }
    ];

    const expectedUniqueResult = [
        {
            a: 'a'
        },
        {
            b: 'b'
        }
    ]

    const uniqueResult = unique(initialArray);

    assert.deepStrictEqual(uniqueResult, expectedUniqueResult);
}
