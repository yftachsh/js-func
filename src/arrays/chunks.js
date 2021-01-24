const chunks = (array, size) =>
    array.reduce(
        (memo, element, index) => (
            index % size ?
            memo[memo.length - 1].push(element) :
            memo.push([element]),
            memo
        ),
        []
    );

module.exports = chunks;
