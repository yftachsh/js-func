const flat = array =>
    array.reduce(
        (first, second) =>
            Array.isArray(second) ? [...first, ...flat(second)] : [...first, second]
    )


module.exports = flat;
