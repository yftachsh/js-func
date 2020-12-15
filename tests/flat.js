const flat = require('../arrays/flat');

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

console.log(flat(testArray));
