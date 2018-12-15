import array_diff from './array-diff';

describe('Array.diff', () => {
    test('it should return [1,3] if the two lists are [1,2,2,2,3],[2]', () => {
        const list1 = [1, 2, 2, 2, 3];
        const list2 = [2];

        expect(array_diff(list1, list2)).toEqual([1, 3]);
    });

    test('it should return [1] if the two lists are [1,2,2,2,3],[2,3]', () => {
        const list1 = [1, 2, 2, 2, 3];
        const list2 = [2, 3];

        expect(array_diff(list1, list2)).toEqual([1]);
    });
});
