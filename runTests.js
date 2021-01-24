// Utils
const Logger = require('./utils/logger');
const Timer = require('./utils/timer');

// Test imports
const test_cherryPick = require('./tests/cherryPick');
const test_flat = require('./tests/flat');
const test_flatten = require('./tests/flatten');
const test_memoize = require('./tests/memoize');
const test_occurenceMap = require('./tests/occurenceMap');
const test_partition = require('./tests/partition');
const test_range = require('./tests/range');
const test_toObject = require('./tests/toObject');

const testList = {
    test_cherryPick,
    test_flat,
    test_flatten,
    test_memoize,
    test_occurenceMap,
    test_partition,
    test_range,
    test_toObject,
}


const runTests = () => {
    const logger = new Logger();

    const testMethodNames = Object.keys(testList);

    console.log('-'.repeat(50));

    let success = testMethodNames.filter(testMethodName => {
        testMethod = testList[testMethodName];

        const timer = new Timer();

        try {
            logger.info(`running ${testMethodName}`)
            timer.start();
            testMethod();
            logger.success(`${testMethodName} successfully finished`);
            return true;
        } catch(error) {
            logger.error(`${testMethodName} failed`)
            return false;
        } finally {
            timer.end();
            logger.info(`${testMethodName} ran for ${timer.finalize()} seconds`);
            console.log('-'.repeat(50));
        }
    });

    if (success.length < testMethodNames.length) {
        const failCount = testMethodNames.length - success.length;
        logger.error(`${failCount} failed out of ${testMethodNames.length}`)
        process.exit(1);
    } else {
        logger.successFinal('All tests finished successfully!');
    }
}

runTests();
