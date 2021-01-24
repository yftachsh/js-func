const assert = require('assert');
const flat = require('../arrays/flat');

module.exports = () => {
    const testArray = [
        'a',
        'b',
        [
            'c',
            [
                'd',
                'e',
                [
                    'f'
                ]
            ]
        ]
    ]

    const expectedResult = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
    ];

    const flatArray = flat(testArray);

    assert.deepStrictEqual(flatArray, expectedResult, 'flat array method failed');
}
