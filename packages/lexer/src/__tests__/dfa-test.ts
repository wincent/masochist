import dfa from '../dfa';

describe('dfa()', () => {
    it('blinks', () => {
        dfa(/stuff\n/);
    });
});
