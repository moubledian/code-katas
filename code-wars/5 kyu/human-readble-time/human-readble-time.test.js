import humanReadableTime from './human-readble-time';

describe('Human Readable Time', () => {
    test('it should return 99:59:59 with these number of seconds 359999', () => {
        expect(humanReadableTime('359999')).toEqual('99:59:59');
    });
});
