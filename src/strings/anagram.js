const anagram = (first, second) =>
    first.toLowerCase().split('').sort().join('')
    ===
    second.toLowerCase().split('').sort().join('')

module.exports = anagram;
