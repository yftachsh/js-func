const occurences = (array, searchValue) => 
    array.reduce(
        (count, currentValue) => currentValue === searchValue ? count + 1 : count,
        0
    );

module.exports = occurences;
