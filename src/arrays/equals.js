const equals = (array1, array2) =>
    (array1.length === array2.length) &&
    (array1.every((item, index) => item === array2[index]))


module.exports = equals;
