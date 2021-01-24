const contained = (contained, container) =>
    contained.every(item => container.includes(item))

module.exports = contained;
