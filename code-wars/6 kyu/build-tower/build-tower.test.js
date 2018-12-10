import towerBuilder from './build-tower';

describe('Tower Builder', () => {
    test('one floor input should return an array with length 1 that has one centered block on the first floor', () => {
        const towerBluePrints = ['*']

        expect(towerBuilder(1)).toEqual(towerBluePrints);
    });

    test('two floors input should return an array with length 2 It has one centered block on the first floor, increasing by two blocks on the next floors', () => {
        const towerBluePrints = [
            ' * ',
            '***'
        ]
        expect(towerBuilder(2)).toEqual(towerBluePrints);
    });

    test('six floors input should return an array with length 6 It has one centered block on the first floor, increasing by two blocks on the next floors', () => {
        const towerBluePrints = [
            '     *     ',
            '    ***    ',
            '   *****   ',
            '  *******  ',
            ' ********* ',
            '***********'
        ]
        expect(towerBuilder(6)).toEqual(towerBluePrints);
    });
})