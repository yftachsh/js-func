const flatten = object =>
    Object.keys(object).reduce(
        (memo, key) =>
            (typeof object[key] === 'object' && !Array.isArray(object[key])) ?
            { ...memo, ...flatten(object[key]) } :
            { ...memo, [key]: object[key] },
        {}
    );

module.exports = flatten;
