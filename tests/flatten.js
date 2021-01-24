const assert = require('assert');
const flatten = require('../src/objects/flatten');

module.exports = () => {
    const testObject = {
        test1: 'test1',
        nested1: {
            nested2: {
                test2: 'test2'
            },
            nested3: {
                nested4: {
                    nested5: {
                        test3: 'test3',
                        test4: 'test4',
                        test5: 'test5'
                    }
                }
            }
        }
    }

    const expectedObject = {
        test1: 'test1',
        test2: 'test2',
        test3: 'test3',
        test4: 'test4',
        test5: 'test5'
    }

    const flattenedObject = flatten(testObject);
    assert.deepStrictEqual(flattenedObject, expectedObject, 'Failed to flatten object');
}
