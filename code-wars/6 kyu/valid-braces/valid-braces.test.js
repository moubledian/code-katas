import validBraces from './valid-braces';
// conditions are
// string always non-empty
// string will consist of parentheses, brackets and curly braces: ()[]{}.
describe('Code Wars - Valid Braces', () => {
    test('string ([{}]) should return true', () => {
        expect(validBraces('([{}])')).toBe(true);
    });

    test('string (){}[] should return true', () => {
        expect(validBraces('(){}[]')).toBe(true);
    });

    test('string (} should return false', () => {
        expect(validBraces('(}')).toBe(false);
    });

    test('string [(]) should return false', () => {
        expect(validBraces('[(])')).toBe(false);
    });

    test('string [({})](] should return false', () => {
        expect(validBraces('[({})](]')).toBe(false);
    });
});
