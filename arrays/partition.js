const partition = (array, criteria) =>
    array.reduce(
        (memo, item) => criteria(item) ?
                        [[...memo[0], item], memo[1]] :
                        [memo[0], [...memo[1], item]],
        [[], []]
    );

module.exports = partition;
