const cherryPick = (object, properties) =>
    Object.keys(object).filter(key => properties.includes(key))
    .reduce(
        (memo, property) => ({ ...memo, [property]: object[property] }),
        {}
    );

module.exports = cherryPick;
