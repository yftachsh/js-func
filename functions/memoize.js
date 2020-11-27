const memoize = method => (
        (cache = {}) =>
            (console.log(cache),
            argument =>
                cache[argument] || (cache[argument] = method(argument)))
    )();

module.exports = memoize;
