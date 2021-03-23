const capitalizeAndFilter = (array) => {
    const filtered = [];
    for (let string of array) {
        if (string[0] !== 'f') {
            filtered.push(string[0].toUpperCase() + string.slice(1));
        }
    }
    return filtered;
}

module.exports = capitalizeAndFilter;