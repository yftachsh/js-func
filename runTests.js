// Utils
const Logger = require('./utils/logger');
const Timer = require('./utils/timer');

// Test imports
const tests = require('./tests');


const runTests = () => {
    const logger = new Logger();

    const testMethodNames = Object.keys(tests);

    console.log('-'.repeat(50));

    let success = testMethodNames.filter(testMethodName => {
        testMethod = tests[testMethodName];

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
