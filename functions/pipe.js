const pipe = (...functions) => value =>
    functions.reduce(
        (previousValue, method) => method(previousValue),
        value
    );

module.exports = pipe;
