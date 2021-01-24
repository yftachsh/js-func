const assert = require('assert');
const { performance } = require('perf_hooks');
const memoize = require('../functions/memoize');

module.exports = () => {
    const testArgument = 'test';

    const testMethod = memoize((value1, value2) => {
        // Artificial delay - method should only be called once for the same argument
        for (let i = 0; i < 1000000000; i++);

        return `nice ${value1} ${value2}`;
    })

    const result1_start = performance.now();
    testMethod(testArgument, testArgument);
    const result1_end = performance.now();

    const result1_interval = result1_end - result1_start;

    const result2_start = performance.now();
    testMethod(testArgument, testArgument);
    const result2_end = performance.now();

    const result2_interval = result2_end - result2_start;

    assert.ok(
        (result1_interval > (result2_interval * 100)),
        'Result wasn\'t properly memoized'
)
}
