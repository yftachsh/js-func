const palindrom = str =>
    str === str.split('').reverse().join('');

module.exports = palindrom;
