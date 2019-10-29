import compile from '../compile';

describe('compile()', () => {
  it('can be called', () => {
    expect(() => compile()).not.toThrow();
  });
});
