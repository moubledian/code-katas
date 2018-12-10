import iqTest from './iq-test';

describe('Code Wars - IQ Test', () => {
    test('numbers 2 4 7 8 10 should return 3', () => {
        expect(iqTest('2 4 7 8 10')).toBe(3);
    });

    test('numbers 1 2 2 should return 1', () => {
        expect(iqTest('1 2 2')).toBe(1);
    });

    test('numbers 1 2 1 1 should return 2', () => {
        expect(iqTest('1 2 1 1')).toBe(2);
    });
});
