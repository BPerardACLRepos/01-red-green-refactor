const fetchQuotes = require('./fetch-quotes');

describe('calls to futurama api and returns formatted response', () => {
    it('returns single quote with keys name, text, image', async () => {
        const expected = {
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String),
        }

        const quote = await fetchQuotes()

        expect(quote).toEqual(expected);
    });
});