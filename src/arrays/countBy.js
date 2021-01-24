const countBy = (array, property) =>
    array.reduce(
        (count, item) => item.hasOwnProperty(property) ? count + 1 : count,
        0
    );

module.exports = countBy;
