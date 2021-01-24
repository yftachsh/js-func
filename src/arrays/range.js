const range = (min, max) => 
    Array(max - min + 1).fill(0).map((_, index) => index + min);

module.exports = range;
