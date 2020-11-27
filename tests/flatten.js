const flatten = require('../objects/flatten');

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

console.log(flatten(testObject));
