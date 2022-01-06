const assert = require('assert');
const pipe = require('../src/functions/pipe');

module.exports = () => {
    const testMethod_increment = a => {
        return a + 1;
    }

    const expected = 5;

    const actual = pipe(1)(testMethod_increment, testMethod_increment, testMethod_increment, testMethod_increment);
    assert.equal(actual, expected, 'Piping failed');
}
