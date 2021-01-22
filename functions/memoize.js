const memoize = method => (
        (cache = {}) =>
            argument =>
                cache[argument] || (cache[argument] = method(argument))
    )();

module.exports = memoize;
