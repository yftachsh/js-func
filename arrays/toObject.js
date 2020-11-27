const toObject = array =>
    array.reduce(
        (memo, [key, value]) => ({ ...memo, [key]: value }),
        {}
    );

module.exports = toObject;
