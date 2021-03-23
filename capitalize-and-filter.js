const capitalizeAndFilter = (array) => {
    filtered = array.filter(string => string[0] !== 'f');
    return filtered.map(string => string[0].toUpperCase() + string.slice(1));
}

module.exports = capitalizeAndFilter;