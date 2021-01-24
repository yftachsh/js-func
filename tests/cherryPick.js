const assert = require('assert');
const cherryPick = require('../objects/cherryPick');

module.exports = () => {
    const testObject = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        e: 'e',
    }

    const testProperties = [
        'a', 'd', 'e'
    ]

    const expectedResult = {
        a: 'a',
        d: 'd',
        e: 'e'
    }

    let pickedObject = cherryPick(testObject, testProperties);

    assert.deepStrictEqual(pickedObject, expectedResult, 'cherryPick method failed');
}
