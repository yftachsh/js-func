const pipe = (...initialArgs) => (...functions) =>
    functions.reduce(
        (previousValue, method) => [ method(...previousValue) ],
        initialArgs
    );

module.exports = pipe;
