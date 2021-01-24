const mergeUnique = (first, second) =>
    [...new Set([...first, ...second])];

module.exports = mergeUnique;
