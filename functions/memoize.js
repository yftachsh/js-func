const memoize = method => (
        (cache = {}) =>
            (...arguments) =>
                cache[JSON.stringify(arguments)] || (cache[JSON.stringify(arguments)] = method(...arguments))
    )();

module.exports = memoize;
