const cherryPick = require('../objects/cherryPick');

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

console.log(cherryPick(testObject, testProperties));
