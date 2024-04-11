import {describe, expect, it} from 'bun:test';

import nullthrows from '../nullthrows';

describe('nullthrows()', () => {
  it('throws given null', () => {
    expect(() => nullthrows(null)).toThrow('Unexpected null-ish');
  });

  it('throws given undefined', () => {
    expect(() => nullthrows(undefined)).toThrow('Unexpected null-ish');
  });

  it('passes through values', () => {
    expect(nullthrows(false)).toBe(false);
    expect(nullthrows(true)).toBe(true);
    expect(nullthrows(1)).toBe(1);
    expect(nullthrows('foo')).toBe('foo');
  });
});
