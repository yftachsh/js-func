const daysBetween = (date, other) =>
    Math.ceil(Math.abs(date - other) / (1000 * 60 * 60 * 24));

module.exports = daysBetween;
