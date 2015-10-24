import getCanonicalURLForRequest from '../getCanonicalURLForRequest';

describe('getCanonicalURLForRequest()', () => {
  it('maps / to /blog', () => {
    expect(getCanonicalURLForRequest({path: '/'})).toBe('https://wincent.com/blog');
  });

  // TODO more tests here
});
