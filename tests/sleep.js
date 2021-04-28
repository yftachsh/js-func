const assert = require('assert');
const { performance } = require('perf_hooks');
const sleep = require('../src/misc/sleep');

module.exports = () => {
    const expectedInterval = 500; // Milliseconds
    const sleepDuration = 500; // Milliseconds

    const start = performance.now();
    sleep(sleepDuration);
    const end = performance.now();
    const interval = parseInt(end - start);

    assert.strictEqual(interval, expectedInterval);
}
