import compileRegExp from '../../compileRegExp';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';

describe('NFAToDFA()', () => {
  it('returns something', () => {
    // TODO: replace with actual tests
    expect(!!NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/a/))))).toBe(true);
  });
});
