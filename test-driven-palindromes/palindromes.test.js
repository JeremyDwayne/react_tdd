const palindromes = require('./palindromes')

describe('palindromes()', () => {
    it('correctly identifies on-word palindromes', () => {
        expect(palindromes('madam')).toEqual(['madam']);
    });
});