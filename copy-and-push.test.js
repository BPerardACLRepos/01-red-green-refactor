const copyAndPush = require('./copy-and-push');

describe('returns a new array with all the items in the original array and a new item pushed to the end.', () => {
    it('takes in array and returns copy with "4" at end', () => {
        const numbers = [1, 2, 3];

        const copy = copyAndPush(numbers, 4);

        expect(copy).toEqual([1, 2, 3, 4]);
    });
});