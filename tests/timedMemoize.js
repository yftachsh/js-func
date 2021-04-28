const assert = require('assert');
const { performance } = require('perf_hooks');
const timedMemoize = require('../src/functions/timedMemoize');
const sleep = require('../src/misc/sleep');

const testArgument = 'test';
const testTimeout = 1; // 1 Millisecond

const testMethod = timedMemoize((value1, value2) => {
    // Artificial delay - method should only be called once for the same argument
    for (let i = 0; i < 10000000000; i++);
    return `nice ${value1} ${value2}`;
}, testTimeout);

const extractInterval = method => {
    const start = performance.now();
    method();
    const end = performance.now();

    return end - start;
}

const validatePopulatedCache = () => {
    const result1_interval = extractInterval(() => testMethod(testArgument, testArgument));

    const result2_interval = extractInterval(() => testMethod(testArgument, testArgument));

    assert.ok(
        (result1_interval > (result2_interval * 100)),
        "Result wasn't properly memoized"
    )
}

const validateCacheCleared = () => {
    const result1_interval = parseInt(extractInterval(() => testMethod(testArgument, testArgument)));
    sleep(testTimeout * 10);
    const result2_interval = parseInt(extractInterval(() => testMethod(testArgument, testArgument)));

    assert.ok(
        (result1_interval === result2_interval),
        "Result cache wasn't properly cleared"
    )
}

module.exports = () => {
    validatePopulatedCache();
    validateCacheCleared();
}
