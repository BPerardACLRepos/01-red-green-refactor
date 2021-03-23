const capitalizeAndFilter = require('./capitalize-and-filter');

describe('filters and capitalizes array of strings', () => {
    it('filters strings starting with "F" and capitalizes the rest', () => {
        const strings = [
            'yollo',
            'food',
            'potato',
            'jeep',
            'flapjack',
        ]

        const filtered = capitalizeAndFilter(strings);

        expect(filtered).toEqual(['Yollo', 'Potato', 'Jeep']);
    });
});