const intersection = (first, ...arrayList) =>
    [...new Set(first)].filter(value => arrayList.every(array => array.includes(value)));

module.exports = intersection;
