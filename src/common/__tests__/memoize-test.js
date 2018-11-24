import memoize from '../memoize';

describe('with a synchronous function', () => {
  let double;
  let memoizedDouble;

  beforeEach(() => {
    double = sinon.spy(x => x * 2);
    memoizedDouble = memoize(double);
  });

  it('returns a computed value', () => {
    expect(memoizedDouble(2)).toBe(4);
    expect(double.calledOnce).toBe(true);
  });

  it('reuses previously computed values', () => {
    expect(memoizedDouble(3)).toBe(6);
    expect(memoizedDouble(3)).toBe(6); // Same value.
    expect(double.calledOnce).toBe(true);

    expect(memoizedDouble(4)).toBe(8); // New value.
    expect(double.callCount).toBe(2);
  });

  it('supports multiple functions', () => {
    let triple = sinon.spy(x => x * 3);
    let memoizedTriple = memoize(triple);

    expect(memoizedDouble(3)).toBe(6);
    expect(memoizedTriple(1)).toBe(3);
    expect(memoizedTriple(3)).toBe(9);

    expect(double.callCount).toBe(1);
    expect(triple.callCount).toBe(2);
  });
});

describe('with an asynchronous function', () => {
  const delay = 10000;

  let clock;
  let fetch;
  let memoizedFetch;

  beforeEach(() => {
    clock = sinon.useFakeTimers();

    fetch = sinon.spy(url => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${url} fetched`), delay);
      });
    });

    memoizedFetch = memoize(fetch);
  });

  it('handles a single call', () => {
    const promise = memoizedFetch('https://example.com/');
    clock.tick(delay);
    return promise.then(result => {
      expect(result).toBe('https://example.com/ fetched');
      expect(fetch.calledOnce).toBe(true);
    });
  });

  it('handles repeated calls', () => {
    const promise = memoizedFetch('https://example.net/');
    memoizedFetch('https://example.net/')
      .then(result => {
        expect(result).toBe('https://example.net/ fetched');
      })
      .catch(fail);
    clock.tick(delay);
    return promise.then(result => {
      expect(result).toBe('https://example.net/ fetched');
      expect(fetch.calledOnce).toBe(true);
    });
  });
});
