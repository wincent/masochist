import getCanonicalURLForRequest from '../getCanonicalURLForRequest';

describe('getCanonicalURLForRequest()', () => {
  it('maps / to /blog', () => {
    return getCanonicalURLForRequest({path: '/'})
      .then(url => expect(url).toBe('https://wincent.com/blog'));
  });

  it('strips trailing slashes', () => {
    return getCanonicalURLForRequest({path: '/blog/'})
      .then(url => expect(url).toBe('https://wincent.com/blog'));
  });
});
