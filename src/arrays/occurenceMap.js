const occurenceMap = array => 
    array.reduce(
        (memo, currentItem) => 
            memo[currentItem] ?
            ({ ...memo, [currentItem]: memo[currentItem] + 1 }) :
            ({ ...memo, [currentItem]: 1 }),
        {}
    );

module.exports = occurenceMap;
