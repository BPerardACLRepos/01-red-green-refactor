const getName = require('./get-name');

describe('returns the name property of an object', () => {
    it('returns "spot" when argument contains {name: "spot"}', () => {
        const spot = {
            name: 'spot',
            age: 5,
            weight: '20 lbs',
        }

        const name = getName(spot);

        expect(name).toEqual('spot');
    });

    it('returns "Aang" when argument contains {name: "Aang"', () => {
        const character = {
            _id: '5cf5679a915ecad153ab68c9',
            name: 'Aang',
        };

        const name = getName(character);

        expect(name).toEqual('Aang');
    });
});